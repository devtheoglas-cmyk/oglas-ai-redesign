"use client";

import { Send } from "lucide-react";
import { useState } from "react";

const projectTypes = [
  "ERP & Payroll Automation",
  "Computer Vision",
  "Workflow Automation",
  "Marketing Automation",
  "ESS / HR Portal",
  "AI Dashboards",
  "Other",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      form.reset();
      setStatus("success");
      setMessage("Thank you. Oglas AI will reply to your enquiry shortly.");
      return;
    }

    const serverError = await response
      .json()
      .then((body) => (body && typeof body.error === "string" ? body.error : ""))
      .catch(() => "");

    setStatus("error");
    setMessage(serverError || "Something went wrong. Please email md@oglasglobal.com directly.");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" name="name" placeholder="Your name" required />
        <Field label="Company" name="company" placeholder="Company name" required />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
        <Field label="Phone" name="phone" placeholder="+971" />
      </div>

      <label className="grid gap-2 text-[13px] font-medium tracking-[0.02em] text-onyx">
        Project type
        <select
          name="projectType"
          required
          className="h-12 rounded-xl border border-brand/15 bg-white/90 px-4 text-[15px] text-onyx shadow-[inset_0_1px_2px_rgba(7,11,61,0.04)] outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/12"
        >
          <option value="">Select a project type</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-2 text-[13px] font-medium tracking-[0.02em] text-onyx">
        Project brief
        <textarea
          name="message"
          rows={6}
          required
          placeholder="Tell us what you want to build, automate, or improve."
          className="resize-none rounded-xl border border-brand/15 bg-white/90 px-4 py-3 text-[15px] leading-7 text-onyx shadow-[inset_0_1px_2px_rgba(7,11,61,0.04)] outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/12"
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn btn-primary mt-1 w-full sm:w-auto sm:justify-self-start"
      >
        <Send className="h-4 w-4" />
        {status === "loading" ? "Sending..." : "Book a Free Consultation"}
      </button>

      {message ? (
        <p
          className={
            status === "success"
              ? "rounded-xl border border-brand/20 bg-brand/8 p-3.5 text-sm font-medium text-brand"
              : "rounded-xl border border-red-200 bg-red-50 p-3.5 text-sm font-medium text-red-700"
          }
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-[13px] font-medium tracking-[0.02em] text-onyx">
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-12 rounded-xl border border-brand/15 bg-white/90 px-4 text-[15px] text-onyx shadow-[inset_0_1px_2px_rgba(7,11,61,0.04)] outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/12"
      />
    </label>
  );
}
