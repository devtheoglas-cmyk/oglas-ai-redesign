import { ImageResponse } from "next/og";

export const alt =
  "Oglas AI — Custom Software Development & Practical AI. Software built around real business operations.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadManrope(weight: 500 | 600): Promise<ArrayBuffer | null> {
  try {
    const cssResponse = await fetch(
      `https://fonts.googleapis.com/css2?family=Manrope:wght@${weight}&display=swap`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)",
        },
      },
    );
    if (!cssResponse.ok) return null;
    const css = await cssResponse.text();
    const match = css.match(/src:\s*url\((https?:[^)]+)\)/);
    if (!match) return null;
    const fontResponse = await fetch(match[1]);
    if (!fontResponse.ok) return null;
    return await fontResponse.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const [manropeMedium, manropeSemibold] = await Promise.all([
    loadManrope(500),
    loadManrope(600),
  ]);

  const fonts = [
    manropeMedium && {
      name: "Manrope",
      data: manropeMedium,
      weight: 500 as const,
      style: "normal" as const,
    },
    manropeSemibold && {
      name: "Manrope",
      data: manropeSemibold,
      weight: 600 as const,
      style: "normal" as const,
    },
  ].filter(Boolean) as {
    name: string;
    data: ArrayBuffer;
    weight: 500 | 600;
    style: "normal";
  }[];

  const fontFamily = fonts.length > 0 ? "Manrope" : "sans-serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 96px",
          background:
            "radial-gradient(circle at 0% 0%, rgba(206,212,255,0.75) 0%, rgba(206,212,255,0) 45%), linear-gradient(118deg, #2439ea 0%, #0b1fd2 46%, #0010b4 100%)",
          color: "#FFFFFF",
          fontFamily,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "rgba(255,255,255,0.14)",
              border: "2px solid rgba(255,255,255,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 44,
              fontWeight: 700,
              color: "#C9D2FF",
              letterSpacing: -1,
            }}
          >
            O
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 600,
              color: "#FFFFFF",
              letterSpacing: -0.5,
            }}
          >
            Oglas AI
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "#C9D2FF",
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            Custom Software Development &amp; Practical AI
          </div>
          <div
            style={{
              fontSize: 74,
              fontWeight: 600,
              lineHeight: 1.05,
              color: "#FFFFFF",
              letterSpacing: -1.5,
              maxWidth: 960,
            }}
          >
            Software Built Around Real Business Operations
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(200, 169, 106, 0.35)",
            paddingTop: 24,
            fontSize: 22,
            color: "rgba(255,255,255,0.8)",
          }}
        >
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <span>ERP · Payroll · Workflow · Computer Vision · AI Dashboards</span>
          </div>
          <div style={{ color: "#C9D2FF", fontWeight: 600 }}>Dubai · UAE</div>
        </div>
      </div>
    ),
    {
      ...size,
      ...(fonts.length > 0 ? { fonts } : {}),
    },
  );
}
