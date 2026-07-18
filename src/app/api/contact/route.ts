import { appendFile, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedReasons = new Set(["Job Opportunity", "Freelance Project", "Collaboration", "Technical Discussion", "Other"]);
const requestLog = new Map<string, number[]>();

interface ContactPayload {
  fullName?: unknown;
  email?: unknown;
  company?: unknown;
  reason?: unknown;
  message?: unknown;
  website?: unknown;
}

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().replace(/[<>]/g, "").slice(0, maxLength) : "";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const windowStart = now - 10 * 60 * 1000;
  const requests = (requestLog.get(ip) || []).filter((time) => time > windowStart);
  if (requests.length >= 5) return true;
  requests.push(now);
  requestLog.set(ip, requests);
  return false;
}

async function saveLocally(entry: Record<string, string>) {
  const dataDirectory = path.join(process.cwd(), "data");
  const jsonPath = path.join(dataDirectory, "contact-messages.json");
  await mkdir(dataDirectory, { recursive: true });

  try {
    const existing = JSON.parse(await readFile(jsonPath, "utf8")) as unknown[];
    existing.push(entry);
    await writeFile(jsonPath, JSON.stringify(existing, null, 2), "utf8");
  } catch {
    await writeFile(jsonPath, JSON.stringify([entry], null, 2), "utf8");
  }

  await appendFile(path.join(dataDirectory, "contact-submissions.log"), `${JSON.stringify(entry)}\n`, "utf8");
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (isRateLimited(ip)) {
    return NextResponse.json({ message: "Too many requests. Please try again later or email directly." }, { status: 429 });
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  if (clean(body.website, 200)) {
    return NextResponse.json({ message: "Message received." });
  }

  const fullName = clean(body.fullName, 80);
  const email = clean(body.email, 120).toLowerCase();
  const company = clean(body.company, 120);
  const reason = clean(body.reason, 60);
  const message = clean(body.message, 2000);

  if (fullName.length < 2) return NextResponse.json({ message: "Please provide your full name." }, { status: 400 });
  if (!emailPattern.test(email)) return NextResponse.json({ message: "Please provide a valid email address." }, { status: 400 });
  if (!allowedReasons.has(reason)) return NextResponse.json({ message: "Please choose a valid reason for contact." }, { status: 400 });
  if (message.length < 20) return NextResponse.json({ message: "Please provide at least 20 characters in your message." }, { status: 400 });

  const entry = {
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
    fullName,
    email,
    company,
    reason,
    message
  };

  try {
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry),
        signal: AbortSignal.timeout(8000)
      });
      if (!webhookResponse.ok) throw new Error(`Webhook returned ${webhookResponse.status}`);
    } else {
      await saveLocally(entry);
    }
    return NextResponse.json({ message: "Your message has been received. Kalpana can now follow up using the email you provided." });
  } catch (error) {
    console.error("Contact submission failed", error);
    return NextResponse.json({ message: "The message could not be stored. Please email kalpanadevi7e@gmail.com directly." }, { status: 500 });
  }
}
