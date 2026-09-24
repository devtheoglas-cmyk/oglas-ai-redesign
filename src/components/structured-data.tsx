import { company, industries, services } from "@/content/site";
import type { PublishedPost } from "@/sanity/lib/posts";

const baseUrl = "https://www.oglasai.com";

function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: company.name,
        url: baseUrl,
        email: company.email,
        description: company.positioning,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dubai",
          addressCountry: "AE",
        },
        areaServed: [
          "United Arab Emirates",
          "Saudi Arabia",
          "Australia",
          "Global",
        ],
        knowsAbout: [
          "Custom software development",
          "Artificial intelligence solutions",
          "ERP systems",
          "Payroll automation",
          "Computer vision",
          "Workflow automation",
          "Marketing automation",
          "Business intelligence dashboards",
        ],
        sameAs: [baseUrl],
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: company.name,
        publisher: {
          "@id": `${baseUrl}/#organization`,
        },
        inLanguage: "en",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${baseUrl}/#services`,
        name: company.name,
        url: baseUrl,
        email: company.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dubai",
          addressCountry: "AE",
        },
        serviceType: services.map((service) => service.title),
        areaServed: ["AE", "SA", "AU"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Oglas AI Services",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.summary,
              url: `${baseUrl}/${service.slug}`,
              areaServed: ["AE", "SA", "AU"],
              audience: industries.map((industry) => industry.title),
            },
          })),
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: jsonLd(data),
      }}
    />
  );
}

type FaqStructuredDataProps = {
  faqs: { question: string; answer: string }[];
};

export function FaqStructuredData({ faqs }: FaqStructuredDataProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: jsonLd(data),
      }}
    />
  );
}

type ArticleStructuredDataProps = {
  post: PublishedPost;
  title?: string;
  description?: string;
};

export function ArticleStructuredData({
  post,
  title,
  description,
}: ArticleStructuredDataProps) {
  const url = `${baseUrl}/insights/${post.slug}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: title || post.metaTitle || post.title,
    description: description || post.metaDescription || post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: url,
    image: post.mainImage?.asset?.url,
    author: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: company.name,
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: company.name,
      url: baseUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: jsonLd(data),
      }}
    />
  );
}
