import type { PortableTextBlock } from "@portabletext/react";

const topics = [
  { href: "/workflow-automation-in-dubai-uae", pattern: /\b(?:workflow automation|automated workflows?|approval workflows?|workflow data|escalation workflows?|process automation)\b/i },
  { href: "/custom-software-development-services-in-dubai-uae", pattern: /\b(?:custom software development|custom software|business applications?)\b/i },
  { href: "/erp-software-company-in-dubai-uae", pattern: /\b(?:ERP and payroll|payroll automation|ERP systems?|ERP|payroll)\b/i },
  { href: "/employee-self-service-in-dubai-uae", pattern: /\b(?:employee self-service|HR portals?|ESS portals?)\b/i },
  { href: "/ai-powered-document-processing-in-dubai-uae", pattern: /\b(?:(?:intelligent |AI )?document processing|document extraction)\b/i },
  { href: "/marketing-automation-agency-in-dubai-uae", pattern: /\b(?:marketing automation|lead nurturing)\b/i },
  { href: "/ai-chatbots-knowledge-assistants", pattern: /\b(?:knowledge assistants?|AI assistants?|AI chatbots?|AI agents?)\b/i },
  { href: "/ai-powered-dashboards-in-duabi-uae", pattern: /\b(?:business intelligence|(?:operational |production |monitoring |management )?dashboards?)\b/i },
  { href: "/computer-vision-solutions-in-dubai-uae", pattern: /\b(?:computer vision|AI-powered inspection|camera intelligence)\b/i },
  { href: "/industrial-iot-companies-in-dubai-uae", pattern: /\b(?:industrial IoT|sensor data)\b/i },
];

export function firstServiceMention(text: string, excluded: ReadonlySet<string> = new Set()) {
  let first: { index: number; label: string; href: string } | undefined;
  for (const { href, pattern } of topics) {
    if (excluded.has(href)) continue;
    const match = pattern.exec(text);
    if (match && (!first || match.index < first.index)) {
      first = { index: match.index, label: match[0], href };
    }
  }
  return first;
}

// Add at most three distinct service links, one per paragraph, to unmarked text.
export function linkArticleServices(blocks: PortableTextBlock[]) {
  const linked = new Set<string>();
  return blocks.map((block) => {
    if (linked.size >= 3 || block._type !== "block" || block.style !== "normal" || !Array.isArray(block.children)) return block;
    for (const [index, span] of block.children.entries()) {
      if (span._type !== "span" || typeof span.text !== "string" || span.marks?.length) continue;
      const match = firstServiceMention(span.text, linked);
      if (!match) continue;
      const key = `service-link-${span._key ?? index}`;
      linked.add(match.href);
      const parts = [
        { ...span, text: span.text.slice(0, match.index) },
        { ...span, _key: key + "-text", text: match.label, marks: [key] },
        { ...span, _key: key + "-after", text: span.text.slice(match.index + match.label.length) },
      ].filter((part) => part.text);
      return {
        ...block,
        markDefs: [...(block.markDefs ?? []), { _key: key, _type: "link", href: match.href }],
        children: [...block.children.slice(0, index), ...parts, ...block.children.slice(index + 1)],
      };
    }
    return block;
  });
}
