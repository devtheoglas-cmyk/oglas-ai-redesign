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
          className="fixed inset-0 z-[70] flex items-end justify-center overflow-y-auto bg-[#02041c]/70 p-4 backdrop-blur-sm sm:items-center"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div
            ref={dialogRef}
            className="modal-rise relative w-full max-w-lg rounded-[1.75rem] border border-brand/15 bg-white p-6 shadow-[0_60px_120px_-40px_rgba(0,0,80,0.9)] md:p-8"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-brand/15 bg-white text-onyx transition hover:bg-brand/8"
            >
              <X className="h-4 w-4" />
            </button>

            <p className="text-xs font-medium uppercase tracking-[0.14em] text-brand">
              Start a conversation
            </p>
            <h2
              id={titleId}
              className="mt-3 text-[1.9rem] font-light leading-tight text-onyx md:text-[2.1rem]"
            >
              Talk to Oglas AI
            </h2>
            <p className="mt-2 text-[14px] leading-6 text-steel">
              Share a few details. Our Dubai team will reply to plan the right next step.
            </p>

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
              <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
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
                <div className="grid gap-4 md:grid-cols-2">
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
                  What do you want to build or improve?
                  <textarea
                    name="message"
                    rows={4}
                    required
                    maxLength={2000}
                    placeholder="A short note on the workflow or system you have in mind."
                    className="resize-none rounded-xl border border-brand/15 bg-white/90 px-4 py-3 text-[15px] leading-7 text-onyx shadow-[inset_0_1px_2px_rgba(7,11,61,0.04)] outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/12"
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
        className="h-12 rounded-xl border border-brand/15 bg-white/90 px-4 text-[15px] text-onyx shadow-[inset_0_1px_2px_rgba(7,11,61,0.04)] outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/12"
      />
    </label>
  );
});
