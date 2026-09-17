"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check } from "./Icons";

type FormState = "idle" | "loading" | "success" | "error";

const initialForm = {
  fullName: "",
  email: "",
  company: "",
  reason: "Job Opportunity",
  message: "",
  website: ""
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [state, setState] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState("");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || "Unable to send the message.");
      setState("success");
      setFeedback(result.message || "Message received. Thank you for reaching out.");
      setForm(initialForm);
    } catch (error) {
      setState("error");
      setFeedback(error instanceof Error ? error.message : "Something went wrong. Please email directly instead.");
    }
  };

  const update = (field: keyof typeof form, value: string) => setForm((current) => ({ ...current, [field]: value }));

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <label>
          <span>Full Name</span>
          <input required minLength={2} maxLength={80} value={form.fullName} onChange={(event) => update("fullName", event.target.value)} placeholder="Your full name" autoComplete="name" />
        </label>
        <label>
          <span>Email Address</span>
          <input required type="email" maxLength={120} value={form.email} onChange={(event) => update("email", event.target.value)} placeholder="you@company.com" autoComplete="email" />
        </label>
        <label>
          <span>Company or Organization</span>
          <input maxLength={120} value={form.company} onChange={(event) => update("company", event.target.value)} placeholder="Optional" autoComplete="organization" />
        </label>
        <label>
          <span>Reason for Contact</span>
          <select value={form.reason} onChange={(event) => update("reason", event.target.value)}>
            <option>Job Opportunity</option>
            <option>Freelance Project</option>
            <option>Collaboration</option>
            <option>Technical Discussion</option>
            <option>Other</option>
          </select>
        </label>
      </div>
      <label className="full-field">
        <span>Message</span>
        <textarea required minLength={20} maxLength={2000} rows={7} value={form.message} onChange={(event) => update("message", event.target.value)} placeholder="Tell me about the opportunity, project, or idea." />
      </label>
      <label className="honeypot" aria-hidden="true">
        Website
        <input tabIndex={-1} autoComplete="off" value={form.website} onChange={(event) => update("website", event.target.value)} />
      </label>
      <div className="form-footer">
        <p>Protected by validation, a spam honeypot and request throttling.</p>
        <button className="button button-primary" type="submit" disabled={state === "loading"}>
          {state === "loading" ? <><span className="button-spinner" /> Sending...</> : <>Send Message <ArrowRight /></>}
        </button>
      </div>
      {feedback ? (
        <div className={`form-feedback ${state}`} role="status">
          {state === "success" ? <Check /> : null}<span>{feedback}</span>
        </div>
      ) : null}
    </form>
  );
}
