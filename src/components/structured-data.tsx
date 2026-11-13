import { company, industries, services } from "@/content/site";
import type { PublishedPost } from "@/sanity/lib/posts";

const baseUrl = "https://www.oglas-ai.com";

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
        logo: `${baseUrl}/icon.svg`,
        sameAs: ["https://www.linkedin.com/company/oglas-ai/"],
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
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Oglas AI Services",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${baseUrl}/${service.slug}#service`,
              name: service.title,
              serviceType: service.title,
              description: service.summary,
              url: `${baseUrl}/${service.slug}`,
              provider: { "@id": `${baseUrl}/#organization` },
              areaServed: ["AE", "SA", "AU"],
              audience: industries.map((industry) => ({
                "@type": "Audience",
                audienceType: industry.title,
              })),
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: company.name,
        publisher: { "@id": `${baseUrl}/#organization` },
        inLanguage: "en",
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

export function ServicePageStructuredData({ slug }: { slug: string }) {
  const service = services.find((item) => item.slug === slug);
  if (!service) return null;

  const url = `${baseUrl}/${service.slug}`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.title,
        serviceType: service.title,
        description: service.summary,
        url,
        provider: { "@id": `${baseUrl}/#organization` },
        areaServed: ["AE", "SA", "AU"],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
          { "@type": "ListItem", position: 2, name: service.title, item: url },
        ],
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(data) }} />;
}

export function ContactPageStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${baseUrl}/contact#webpage`,
    url: `${baseUrl}/contact`,
    name: "Book a Free Consultation",
    isPartOf: { "@id": `${baseUrl}/#website` },
    mainEntity: { "@id": `${baseUrl}/#organization` },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(data) }} />;
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
  description,
}: ArticleStructuredDataProps) {
  const url = `${baseUrl}/insights/${post.slug}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: post.title,
    description: description || post.metaDescription || post.excerpt,
    datePublished: post.date,
    ...(post.contentUpdatedAt ? { dateModified: post.contentUpdatedAt } : {}),
    mainEntityOfPage: url,
    image: post.mainImage?.asset?.url,
    author: post.author?.name ? {
      "@type": "Person",
      name: post.author.name,
    } : {
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
