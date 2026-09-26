import type { Metadata } from "next";
import { EB_Garamond, IBM_Plex_Sans_Arabic } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import { StructuredData } from "@/components/structured-data";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const googleTagManagerId = "GTM-KS9QHLW9";

// Aspekta (SIL OFL, github.com/ivodolenc/aspekta) is the company profile's sans.
const aspekta = localFont({
  src: "./fonts/AspektaVF.woff2",
  variable: "--font-aspekta",
  weight: "50 1000",
  display: "swap",
});

// EB Garamond Italic carries the profile's serif lead-lines.
const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  style: ["italic"],
  display: "swap",
});

const arabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.oglasai.com"),
  title: {
    default: "Oglas AI | Custom Software Development & Practical AI",
    template: "%s | Oglas AI",
  },
  description:
    "Dubai-based custom software and AI solutions partner for ERP, payroll automation, computer vision, workflow automation, marketing automation, and decision intelligence.",
  openGraph: {
    title: "Oglas AI",
    description:
      "Custom software and AI integrated solutions for companies in the UAE and global markets.",
    url: "https://www.oglasai.com",
    siteName: "Oglas AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oglas AI — Custom Software Development & Practical AI",
    description:
      "Software built around real business operations. ERP, payroll, workflow automation, computer vision, and AI dashboards.",
  },
  // Google Search Console ownership check for oglas-ai.com.
  verification: {
    google: "UrDzYM4fLB_toMau8facjgTDHkQ4cVFVq-RkRoPvGD8",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${aspekta.variable} ${garamond.variable} ${arabic.variable} h-full antialiased`}
    >
      <Script id="google-tag-manager" strategy="beforeInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${googleTagManagerId}');`}
      </Script>
      <body className="flex min-h-full flex-col">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
            height={0}
            width={0}
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <StructuredData />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
