import { caseStudies, company, industries, services } from "@/content/site";
import { getPublishedPosts } from "@/sanity/lib/posts";

const baseUrl = "https://www.oglasai.com";

export const revalidate = 3600;

export async function GET() {
  const posts = await getPublishedPosts(10);

  const body = `# Oglas AI

> ${company.positioning}

Oglas AI is a Dubai-based custom software and AI solutions company. The company builds ERP systems, payroll automation, employee self-service portals, workflow automation, AI-integrated computer vision, marketing automation, document processing, AI assistants, and business intelligence dashboards for operational companies.

Primary markets: United Arab Emirates, with global availability and expansion focus across Saudi Arabia and Australia.

## Key Pages

- [Home](${baseUrl}/): Oglas AI overview, positioning, services, industries, case studies, and latest insights.
- [Industries](${baseUrl}/industries): Industries served by Oglas AI.
- [Anonymous Case Studies](${baseUrl}/case-studies): Confidential outcome stories and measurable business improvements.
- [Insights](${baseUrl}/insights): Articles about automation, ERP, AI adoption, computer vision, and business software strategy.
- [About](${baseUrl}/about): Who Oglas AI is, what we do, our approach, how we work, where we're based, industries, outcomes, team, and FAQs.
- [Contact](${baseUrl}/contact): Consultation request form and contact details.

## Services

${services
  .map(
    (service) =>
      `- [${service.title}](${baseUrl}/${service.slug}): ${service.summary}`,
  )
  .join("\n")}

## Industries

${industries
  .map((industry) => `- ${industry.title}: ${industry.summary}`)
  .join("\n")}

## Case Studies

${caseStudies
  .map((study) => `- ${study.title}: ${study.metric}. ${study.solution}`)
  .join("\n")}

## Insights

${posts
  .map((post) => `- [${post.title}](${baseUrl}/insights/${post.slug}): ${post.excerpt}`)
  .join("\n")}

## Contact

- Email: [${company.email}](mailto:${company.email})
- Location: ${company.location}
- Consultation: [Book a Free Consultation](${baseUrl}/contact)

## Optional

- [Full AI-readable site summary](${baseUrl}/llms-full.txt): Expanded service, industry, case study, and insight context for AI agents.
- [XML sitemap](${baseUrl}/sitemap.xml): Complete crawlable URL list.
- [Robots policy](${baseUrl}/robots.txt): Crawler access policy.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
