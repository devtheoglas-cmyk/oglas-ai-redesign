import { Resend } from "resend";

// Build Lab submissions. "lead" fires when the visitor enters the lab (so a
// lead is captured even if they leave halfway); "blueprint" fires when they
// send their finished build.

type BuildPayload = {
  kind?: "lead" | "blueprint";
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  buildId?: string;
  field?: string;
  modules?: string[];
  experience?: string[];
  intelligence?: string[];
  note?: string;
  /** Honeypot: real visitors never see or fill this. */
  website?: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max = 200) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function cleanList(value: unknown) {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string").slice(0, 12).map((item) => clean(item, 80))
    : [];
}

function escapeHtml(value = "") {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

function emailRow(label: string, value?: string) {
  return `
    <tr>
      <td style="padding: 10px 16px 10px 0; color: #596461; font-size: 13px; vertical-align: top; white-space: nowrap;">${label}</td>
      <td style="padding: 10px 0; color: #080B0B; font-size: 14px; font-weight: 600;">${escapeHtml(value || "Not provided")}</td>
    </tr>
  `;
}

export async function POST(request: Request) {
  const raw = (await request.json().catch(() => ({}))) as BuildPayload;

  // Bots fill every field; pretend success and send nothing.
  if (clean(raw.website)) {
    return Response.json({ ok: true });
  }

  const kind = raw.kind === "blueprint" ? "blueprint" : "lead";
  const lead = {
    name: clean(raw.name, 120),
    company: clean(raw.company, 160),
    email: clean(raw.email, 200),
    phone: clean(raw.phone, 40),
  };

  if (!lead.name || !lead.company || !EMAIL.test(lead.email)) {
    return Response.json(
      { error: "Please enter your name, company and a valid email." },
      { status: 400 },
    );
  }

  const build = {
    buildId: clean(raw.buildId, 20),
    field: clean(raw.field, 80),
    modules: cleanList(raw.modules),
    experience: cleanList(raw.experience),
    intelligence: cleanList(raw.intelligence),
    note: clean(raw.note, 2000),
  };

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return Response.json({ error: "Email provider is not configured." }, { status: 503 });
  }

  const resend = new Resend(resendApiKey);
  const to = process.env.CONTACT_TO_EMAIL || "md@oglasglobal.com";
  const from = process.env.CONTACT_FROM_EMAIL || "Oglas AI <noreply@oglasai.com>";

  const subject =
    kind === "lead"
      ? `Build Lab: ${lead.company} entered the lab`
      : `Build Lab blueprint ${build.buildId}: ${lead.company} · ${build.field}`;

  const buildRows =
    kind === "blueprint"
      ? [
          emailRow("Build ID", build.buildId),
          emailRow("Field", build.field),
          emailRow("Modules", build.modules.join(", ")),
          emailRow("Experience", build.experience.join(", ")),
          emailRow("Intelligence", build.intelligence.join(", ") || "None selected"),
          emailRow("Note", build.note),
        ].join("")
      : "";

  const text = [
    `Name: ${lead.name}`,
    `Company: ${lead.company}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone || "Not provided"}`,
    ...(kind === "blueprint"
      ? [
          "",
          `Build ID: ${build.buildId}`,
          `Field: ${build.field}`,
          `Modules: ${build.modules.join(", ")}`,
          `Experience: ${build.experience.join(", ")}`,
          `Intelligence: ${build.intelligence.join(", ") || "None selected"}`,
          `Note: ${build.note || "None"}`,
        ]
      : ["", "They have just entered the Build Lab. A blueprint follows if they finish."]),
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: lead.email,
      subject,
      text,
      html: `
        <div style="background: #F4F7F5; padding: 32px; font-family: Arial, sans-serif;">
          <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border: 1px solid #e3e8e5; border-radius: 8px; overflow: hidden;">
            <div style="background: #02041c; padding: 24px 28px;">
              <p style="margin: 0; color: #8fd6ff; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;">Oglas AI · Build Lab</p>
              <h1 style="margin: 10px 0 0; color: #ffffff; font-size: 24px; line-height: 1.25;">${
                kind === "lead" ? "New lead entered the lab" : "New software blueprint"
              }</h1>
            </div>
            <div style="padding: 28px;">
              <table style="width: 100%; border-collapse: collapse;">
                ${emailRow("Name", lead.name)}
                ${emailRow("Company", lead.company)}
                ${emailRow("Email", lead.email)}
                ${emailRow("Phone", lead.phone)}
                ${buildRows}
              </table>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Build Lab email failed", error.message);
      // TEMP diagnostic: surface the provider's reason. Remove after fixing.
      return Response.json(
        { error: "Email delivery failed.", reason: error.message, from, to },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Build Lab email threw", error instanceof Error ? error.message : error);
    return Response.json({ error: "Email delivery failed." }, { status: 502 });
  }
}
