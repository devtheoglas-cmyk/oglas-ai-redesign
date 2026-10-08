import { Resend } from "resend";
import { sendEmail } from "@/lib/email";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
};

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
      <td style="padding: 10px 0; color: #596461; font-size: 13px;">${label}</td>
      <td style="padding: 10px 0; color: #080B0B; font-size: 14px; font-weight: 600;">${escapeHtml(value || "Not provided")}</td>
    </tr>
  `;
}

function resendErrorDetails(error: unknown) {
  if (!error || typeof error !== "object") {
    return { message: "Unknown Resend error" };
  }

  const details = error as {
    message?: string;
    name?: string;
    statusCode?: number;
  };

  return {
    message: details.message,
    name: details.name,
    statusCode: details.statusCode,
  };
}

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;
  const requiredFields: (keyof ContactPayload)[] = [
    "name",
    "company",
    "email",
    "projectType",
    "message",
  ];

  const missingField = requiredFields.find((field) => !payload[field]);

  if (missingField) {
    return Response.json({ error: `Missing ${missingField}` }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return Response.json(
      { error: "Email provider is not configured." },
      { status: 503 },
    );
  }

  const resend = new Resend(resendApiKey);
  const to = process.env.CONTACT_TO_EMAIL || "admin@oglasglobal.com";
  // The "from" MUST be an address on a domain verified in Resend (oglasai.com).
  // Free mailboxes like gmail.com cannot be verified and will be rejected (502).
  const from = process.env.CONTACT_FROM_EMAIL || "Oglas AI <noreply@oglasai.com>";
  const subject = `New Oglas AI consultation: ${payload.projectType}`;

  try {
    const { data, error } = await sendEmail(resend, {
      from,
      to,
      replyTo: payload.email,
      subject,
      text: [
        `Name: ${payload.name}`,
        `Company: ${payload.company}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone || "Not provided"}`,
        `Project type: ${payload.projectType}`,
        "",
        payload.message,
      ].join("\n"),
      html: `
        <div style="background: #F4F7F5; padding: 32px; font-family: Arial, sans-serif;">
          <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border: 1px solid #e3e8e5; border-radius: 8px; overflow: hidden;">
            <div style="background: #080B0B; padding: 24px 28px;">
              <p style="margin: 0; color: #C8A96A; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;">Oglas AI</p>
              <h1 style="margin: 10px 0 0; color: #ffffff; font-size: 24px; line-height: 1.25;">New consultation request</h1>
            </div>
            <div style="padding: 28px;">
              <table style="width: 100%; border-collapse: collapse;">
                ${emailRow("Name", payload.name)}
                ${emailRow("Company", payload.company)}
                ${emailRow("Email", payload.email)}
                ${emailRow("Phone", payload.phone)}
                ${emailRow("Project type", payload.projectType)}
              </table>
              <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e3e8e5;">
                <p style="margin: 0 0 10px; color: #596461; font-size: 13px;">Message</p>
                <p style="margin: 0; color: #080B0B; font-size: 15px; line-height: 1.7;">${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend email send failed", resendErrorDetails(error));
      return Response.json(
        { error: "Email delivery failed. Please email admin@oglasglobal.com directly." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true, id: data?.id });
  } catch (error) {
    console.error("Resend email send threw", resendErrorDetails(error));
    return Response.json(
      { error: "Email delivery failed. Please email admin@oglasglobal.com directly." },
      { status: 502 },
    );
  }
}
