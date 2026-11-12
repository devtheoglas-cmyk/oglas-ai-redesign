import type { Metadata } from "next";

/** Keep search and social metadata aligned with the page's approved copy. */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Oglas AI",
      locale: "en_US",
      type: "website",
      images: [{ url: "/opengraph-image", alt: "Oglas AI" }],
    },
    twitter: {
      card: "summary_large_image",
      images: [{ url: "/opengraph-image", alt: "Oglas AI" }],
      title,
      description,
    },
  };
}
