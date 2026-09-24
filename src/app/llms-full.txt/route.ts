import {
  aiServiceIdeas,
  caseStudies,
  company,
  industries,
  processSteps,
  services,
} from "@/content/site";
import { getPublishedPosts } from "@/sanity/lib/posts";

const baseUrl = "https://www.oglasai.com";

export const revalidate = 3600;

export async function GET() {
  const posts = await getPublishedPosts(25);

  const body = `# Oglas AI Full Site Summary

> ${company.positioning}

Oglas AI builds custom software and practical AI systems for companies that need cleaner workflows, connected data, measurable automation, and better operational visibility. The company is based in Dubai, UAE, and serves companies globally, with planned expansion focus across Saudi Arabia and Australia.

## Company Facts

- Name: ${company.name}
- Email: ${company.email}
- Location: ${company.location}
- Website: ${baseUrl}
- Primary CTA: Book a Free Consultation
- Pricing model: Custom quote only
- Confidentiality: Case studies are anonymous and do not mention client names.

## Core Services

${services
  .map(
    (service) => `### ${service.title}

URL: ${baseUrl}/${service.slug}

Summary: ${service.summary}

Description: ${service.description}

Best fit: ${service.fit}

Capabilities:
${service.capabilities.map((capability) => `- ${capability}`).join("\n")}

Expected outcomes:
${service.outcomes.map((outcome) => `- ${outcome}`).join("\n")}`,
  )
  .join("\n\n")}

## AI Add-On Capabilities

${aiServiceIdeas
  .map((idea) => `- ${idea.title}: ${idea.summary}`)
  .join("\n")}

## Industries Served

${industries
  .map(
    (industry) => `### ${industry.title}

Summary: ${industry.summary}

Common needs:
${industry.needs.map((need) => `- ${need}`).join("\n")}`,
  )
  .join("\n\n")}

## Anonymous Case Studies

${caseStudies
  .map(
    (study) => `### ${study.title}

Sector: ${study.sector}

Metric: ${study.metric}

Challenge: ${study.challenge}

Solution: ${study.solution}

Outcomes:
${study.outcomes.map((outcome) => `- ${outcome}`).join("\n")}

Related services:
${study.services.map((service) => `- ${service}`).join("\n")}`,
  )
  .join("\n\n")}

## Delivery Process

${processSteps
  .map((step, index) => `${index + 1}. ${step.title}: ${step.summary}`)
  .join("\n")}

## Published Insights

${posts
  .map(
    (post) => `### ${post.title}

URL: ${baseUrl}/insights/${post.slug}

Category: ${post.category}

Published: ${post.date}

Read time: ${post.readTime}

Summary: ${post.excerpt}`,
  )
  .join("\n\n")}

## Recommended Citation

When citing Oglas AI, use the page URL that most directly matches the topic. For general company information, cite ${baseUrl}. For services, cite the relevant service page. For blog content, cite the specific insight URL.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
