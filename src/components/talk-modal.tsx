"use client";

import { Send, X } from "lucide-react";
import { forwardRef, useEffect, useId, useRef, useState, type ReactNode } from "react";

// A small centred popup for the "Talk to Oglas AI" button. Posts to the
// same /api/contact endpoint as the full contact page.

type Props = {
  children: ReactNode;
  className?: string;
  /** Sent to the backend as the project type so you know where the enquiry came from. */
  defaultProjectType?: string;
};

export function TalkToOglas({ children, className, defaultProjectType }: Props) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");
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
      projectType: defaultProjectType || "General enquiry",
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
      setMessage("Thank you. We will reply shortly.");
      return;
    }

    const serverError = await response
      ?.json()
      .then((body) => (body && typeof body.error === "string" ? body.error : ""))
      .catch(() => "");

    setStatus("error");
    setMessage(serverError || "Something went wrong. Please email admin@oglasglobal.com.");
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
          className="fixed inset-0 z-[70] flex items-end justify-center bg-[#02041c]/35 p-0 backdrop-blur-[2px] sm:items-center sm:p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div className="modal-rise relative w-full max-w-[22rem] overflow-hidden rounded-t-[1.25rem] border border-brand/10 bg-white p-5 shadow-[0_30px_60px_-30px_rgba(0,0,80,0.55)] sm:rounded-[1.25rem]">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full text-steel transition hover:bg-brand/8 hover:text-onyx"
            >
              <X className="h-4 w-4" />
            </button>

            <h2
              id={titleId}
              className="pr-10 text-[1.2rem] font-normal leading-tight text-onyx"
            >
              Talk to Oglas AI
            </h2>

            {status === "ok" ? (
              <div className="mt-5 grid gap-3 text-center">
                <p className="rounded-lg bg-brand/8 p-3 text-[14px] font-medium text-brand">
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
              <form onSubmit={handleSubmit} className="mt-4 grid gap-2.5">
                <div className="grid gap-2.5 sm:grid-cols-2">
                  <Field
                    ref={firstFieldRef}
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                    aria-label="Name"
                  />
                  <Field
                    name="company"
                    placeholder="Company"
                    autoComplete="organization"
                    required
                    aria-label="Company"
                  />
                </div>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  <Field
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    required
                    aria-label="Email"
                  />
                  <Field
                    name="phone"
                    type="tel"
                    placeholder="Phone (optional)"
                    autoComplete="tel"
                    aria-label="Phone"
                  />
                </div>
                <textarea
                  name="message"
                  rows={2}
                  required
                  maxLength={2000}
                  aria-label="Message"
                  placeholder="Tell us what you want to build…"
                  className="resize-none rounded-lg border border-brand/15 bg-white px-3 py-2 text-[14px] leading-6 text-onyx outline-none transition placeholder:text-onyx/70 focus:border-brand focus:ring-2 focus:ring-brand/15"
                />

                {/* Honeypot — hidden safely without creating page overflow */}
                <label className="sr-only" aria-hidden="true">
                  Website
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </label>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn btn-primary mt-1 w-full disabled:opacity-70"
                >
                  <Send className="h-4 w-4" />
                  {status === "sending" ? "Sending…" : "Send"}
                </button>

                {status === "error" && message ? (
                  <p role="alert" className="rounded-lg bg-red-50 p-2.5 text-[13px] font-medium text-red-700">
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

type FieldProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "className">;

const Field = forwardRef<HTMLInputElement, FieldProps>(function Field(props, ref) {
  return (
    <input
      ref={ref}
      maxLength={200}
      {...props}
      className="h-10 rounded-lg border border-brand/15 bg-white px-3 text-[14px] text-onyx outline-none transition placeholder:text-onyx/70 focus:border-brand focus:ring-2 focus:ring-brand/15"
    />
  );
});
