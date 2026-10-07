import type { Resend } from "resend";

type EmailInput = Parameters<Resend["emails"]["send"]>[0];

// Resend's shared sender works without a verified domain, but only delivers
// to the address that owns the Resend account.
const FALLBACK_FROM = "Oglas AI <onboarding@resend.dev>";

/**
 * Sends through Resend. If the configured sender's domain is not verified
 * (the case until oglas-ai.com is added in Resend), retries once from
 * Resend's shared sender so enquiries are not lost.
 */
export async function sendEmail(resend: Resend, input: EmailInput) {
  const first = await resend.emails.send(input);
  if (!first.error || !/not verified/i.test(first.error.message)) {
    return first;
  }

  console.warn("Sender domain not verified in Resend; retrying from", FALLBACK_FROM);
  return resend.emails.send({ ...input, from: FALLBACK_FROM } as EmailInput);
}
