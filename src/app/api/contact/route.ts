import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const allowedReasons = new Set([
  "Job Opportunity",
  "Freelance Project",
  "Collaboration",
  "Technical Discussion",
  "Other"
]);

const requestLog = new Map<string, number[]>();

interface ContactPayload {
  fullName?: unknown;
  email?: unknown;
  company?: unknown;
  reason?: unknown;
  message?: unknown;
  website?: unknown;
}

function clean(value: unknown, maxLength: number): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - 10 * 60 * 1000;

  const previousRequests = requestLog.get(ip) ?? [];

  const recentRequests = previousRequests.filter(
    (timestamp) => timestamp > windowStart
  );

  if (recentRequests.length >= 5) {
    return true;
  }

  recentRequests.push(now);
  requestLog.set(ip, recentRequests);

  return false;
}

export async function POST(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  const ip =
    forwardedFor?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        message:
          "Too many requests. Please wait a few minutes and try again."
      },
      { status: 429 }
    );
  }

  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 }
    );
  }

  // Spam honeypot.
  // Real visitors will never fill this hidden field.
  if (clean(body.website, 200)) {
    return NextResponse.json({
      message: "Your message has been sent successfully."
    });
  }

  const fullName = clean(body.fullName, 80);
  const email = clean(body.email, 120).toLowerCase();
  const company = clean(body.company, 120);
  const reason = clean(body.reason, 60);
  const message = clean(body.message, 2000);

  if (fullName.length < 2) {
    return NextResponse.json(
      { message: "Please provide your full name." },
      { status: 400 }
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { message: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  if (!allowedReasons.has(reason)) {
    return NextResponse.json(
      { message: "Please choose a valid reason for contact." },
      { status: 400 }
    );
  }

  if (message.length < 20) {
    return NextResponse.json(
      {
        message:
          "Please provide at least 20 characters in your message."
      },
      { status: 400 }
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  const recipientEmail =
    process.env.CONTACT_TO_EMAIL || "kalpanadevi7e@gmail.com";

  if (!resendApiKey) {
    console.error("RESEND_API_KEY is missing.");

    return NextResponse.json(
      {
        message:
          "The email service is not configured. Please try again later."
      },
      { status: 500 }
    );
  }

  const submittedAt = new Date().toLocaleString("en-IN", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Asia/Kolkata"
  });

  const safeFullName = escapeHtml(fullName);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company || "Not provided");
  const safeReason = escapeHtml(reason);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  const emailText = `
New portfolio contact message

Full Name: ${fullName}
Email: ${email}
Company or Organization: ${company || "Not provided"}
Reason for Contact: ${reason}
Submitted At: ${submittedAt}

Message:
${message}

You can reply directly to this email to contact ${fullName}.
  `.trim();

  const emailHtml = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body
        style="
          margin: 0;
          padding: 30px;
          background: #05070d;
          font-family: Arial, Helvetica, sans-serif;
          color: #f8fafc;
        "
      >
        <div
          style="
            max-width: 650px;
            margin: 0 auto;
            background: #090d18;
            border: 1px solid #273149;
            border-radius: 18px;
            overflow: hidden;
          "
        >
          <div
            style="
              padding: 28px;
              background: linear-gradient(
                135deg,
                rgba(139, 92, 246, 0.25),
                rgba(34, 211, 238, 0.15)
              );
              border-bottom: 1px solid #273149;
            "
          >
            <p
              style="
                margin: 0 0 8px;
                color: #5eead4;
                font-size: 12px;
                font-weight: bold;
                letter-spacing: 1.5px;
              "
            >
              KALPANA PORTFOLIO
            </p>

            <h1
              style="
                margin: 0;
                color: #f8fafc;
                font-size: 26px;
              "
            >
              New contact form message
            </h1>
          </div>

          <div style="padding: 28px">
            <table
              role="presentation"
              style="
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 28px;
              "
            >
              <tr>
                <td
                  style="
                    padding: 10px 0;
                    color: #a8b3cf;
                    width: 190px;
                    vertical-align: top;
                  "
                >
                  Full Name
                </td>

                <td
                  style="
                    padding: 10px 0;
                    color: #f8fafc;
                    font-weight: bold;
                  "
                >
                  ${safeFullName}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding: 10px 0;
                    color: #a8b3cf;
                    vertical-align: top;
                  "
                >
                  Email
                </td>

                <td style="padding: 10px 0">
                  <a
                    href="mailto:${safeEmail}"
                    style="color: #22d3ee"
                  >
                    ${safeEmail}
                  </a>
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding: 10px 0;
                    color: #a8b3cf;
                    vertical-align: top;
                  "
                >
                  Company
                </td>

                <td style="padding: 10px 0; color: #f8fafc">
                  ${safeCompany}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding: 10px 0;
                    color: #a8b3cf;
                    vertical-align: top;
                  "
                >
                  Reason
                </td>

                <td style="padding: 10px 0; color: #f8fafc">
                  ${safeReason}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding: 10px 0;
                    color: #a8b3cf;
                    vertical-align: top;
                  "
                >
                  Submitted At
                </td>

                <td style="padding: 10px 0; color: #f8fafc">
                  ${escapeHtml(submittedAt)}
                </td>
              </tr>
            </table>

            <div
              style="
                padding: 20px;
                background: #111827;
                border: 1px solid #273149;
                border-radius: 12px;
              "
            >
              <p
                style="
                  margin: 0 0 10px;
                  color: #a8b3cf;
                  font-size: 13px;
                  font-weight: bold;
                "
              >
                MESSAGE
              </p>

              <p
                style="
                  margin: 0;
                  color: #f8fafc;
                  line-height: 1.7;
                "
              >
                ${safeMessage}
              </p>
            </div>

            <p
              style="
                margin: 24px 0 0;
                color: #a8b3cf;
                font-size: 13px;
                line-height: 1.6;
              "
            >
              Click Reply in Gmail to respond directly to ${safeFullName}.
            </p>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const resendResponse = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
          "User-Agent": "kalpana-portfolio/1.0"
        },
        body: JSON.stringify({
          from: "Kalpana Portfolio <onboarding@resend.dev>",
          to: [recipientEmail],
          reply_to: email,
          subject: `[Portfolio] ${reason} from ${fullName}`,
          text: emailText,
          html: emailHtml
        }),
        signal: AbortSignal.timeout(10000)
      }
    );

    const resendResult = (await resendResponse.json()) as {
      id?: string;
      message?: string;
      error?: {
        message?: string;
      };
    };

    if (!resendResponse.ok) {
      console.error("Resend email error:", resendResult);

      throw new Error(
        resendResult.message ||
          resendResult.error?.message ||
          "Email provider rejected the request."
      );
    }

    return NextResponse.json({
      message:
        "Your message has been sent successfully. Kalpana will contact you soon."
    });
  } catch (error) {
    console.error("Contact email failed:", error);

    return NextResponse.json(
      {
        message:
          "The message could not be sent. Please email kalpanadevi7e@gmail.com directly."
      },
      { status: 500 }
    );
  }
}
