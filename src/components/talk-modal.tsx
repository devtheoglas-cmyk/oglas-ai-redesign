"use client";

import { ArrowRight, Send, X } from "lucide-react";
import { forwardRef, useEffect, useId, useRef, useState, type ReactNode } from "react";

// A short "Talk to Oglas AI" form shown as a dialog, so visitors can start
// a conversation without leaving the page. Posts to the same /api/contact
// endpoint as the full contact page.

const projectTypes = [
  "Custom Software Development",
  "ERP & Payroll Automation",
  "Workflow Automation",
  "Marketing Automation",
  "AI Dashboards",
  "Industrial IoT & Safety Monitoring",
  "Other",
];

type Props = {
  /** Button label and look come from the trigger passed in. */
  children: ReactNode;
  className?: string;
  /** Prefills the project type when the button sits on a specific service. */
  defaultProjectType?: string;
};

export function TalkToOglas({ children, className, defaultProjectType }: Props) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [open]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot: real visitors never see or fill this field.
    if (formData.get("website")) {
      setStatus("ok");
      setMessage("Thank you.");
      return;
    }

    const payload = {
      name: String(formData.get("name") ?? ""),
      company: String(formData.get("company") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      projectType: String(formData.get("projectType") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => null);

    if (response?.ok) {
      form.reset();
      setStatus("ok");
      setMessage("Thank you. Oglas AI will reply to your enquiry shortly.");
      return;
    }

    const serverError = await response
      ?.json()
      .then((body) => (body && typeof body.error === "string" ? body.error : ""))
      .catch(() => "");

    setStatus("error");
    setMessage(serverError || "Something went wrong. Please email md@oglasglobal.com directly.");
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed inset-0 z-[70] flex items-end justify-center overflow-y-auto bg-[#02041c]/35 p-0 backdrop-blur-[2px] sm:items-center sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div
            ref={dialogRef}
            className="modal-rise relative flex max-h-[92vh] w-full max-w-[22rem] flex-col overflow-y-auto rounded-t-[1.5rem] border border-brand/10 bg-white p-5 shadow-[0_30px_60px_-30px_rgba(0,0,80,0.55)] sm:rounded-[1.5rem]"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full text-steel transition hover:bg-brand/8 hover:text-onyx"
            >
              <X className="h-4 w-4" />
            </button>

            <h2
              id={titleId}
              className="pr-10 text-[1.35rem] font-normal leading-tight text-onyx"
            >
              Talk to Oglas AI
            </h2>

            {status === "ok" ? (
              <div className="mt-7 grid gap-4 text-center">
                <p className="rounded-xl border border-brand/20 bg-brand/8 p-4 text-sm font-medium text-brand">
                  {message}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    setStatus("idle");
                  }}
                  className="btn btn-primary justify-self-center"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 grid gap-3">
                <div className="grid gap-3 md:grid-cols-2">
                  <ModalField
                    ref={firstFieldRef}
                    label="Name"
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />
                  <ModalField
                    label="Company"
                    name="company"
                    placeholder="Company name"
                    autoComplete="organization"
                    required
                  />
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <ModalField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    required
                  />
                  <ModalField
                    label="Phone"
                    name="phone"
                    type="tel"
                    placeholder="+971"
                    autoComplete="tel"
                  />
                </div>

                <label className="grid gap-2 text-[13px] font-medium tracking-[0.02em] text-onyx">
                  Project type
                  <select
                    name="projectType"
                    defaultValue={defaultProjectType ?? ""}
                    required
                    className="h-11 rounded-xl border border-brand/15 bg-white px-3.5 text-[14px] text-onyx outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
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
                  What do you want to build or improve?
                  <textarea
                    name="message"
                    rows={2}
                    required
                    maxLength={2000}
                    placeholder="A short note on what you want to build or improve."
                    className="resize-none rounded-xl border border-brand/15 bg-white px-3.5 py-2.5 text-[14px] leading-6 text-onyx outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
                  />
                </label>

                {/* Honeypot */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden"
                >
                  <label>
                    Website
                    <input name="website" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn btn-primary mt-1 w-full disabled:opacity-70"
                >
                  <Send className="h-4 w-4" />
                  {status === "sending" ? "Sending…" : "Send"}
                  <ArrowRight className="h-4 w-4" />
                </button>

                {status === "error" && message ? (
                  <p
                    role="alert"
                    className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-700"
                  >
                    {message}
                  </p>
                ) : null}
              </form>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}

type ModalFieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  autoComplete?: string;
  required?: boolean;
};

const ModalField = forwardRef<HTMLInputElement, ModalFieldProps>(function ModalField(
  { label, name, type = "text", placeholder, autoComplete, required },
  ref,
) {
  return (
    <label className="grid gap-2 text-[13px] font-medium tracking-[0.02em] text-onyx">
      {label}
      <input
        ref={ref}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        maxLength={200}
        className="h-11 rounded-xl border border-brand/15 bg-white px-3.5 text-[14px] text-onyx outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
      />
    </label>
  );
});
