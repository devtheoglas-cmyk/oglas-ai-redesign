import type { PortableTextBlock } from "@portabletext/react";

/** Adjust section styles without mutating blocks or changing their content. */
export function normalizeArticleHeadings(blocks: PortableTextBlock[]): PortableTextBlock[] {
  const hasH2 = blocks.some((block) => block._type === "block" && block.style === "h2");
  const promoteH3 = !hasH2 && blocks.some((block) =>
    block._type === "block" && block.style === "h3",
  );

  return blocks.map((block) => {
    if (block._type !== "block") return block;

    if (promoteH3 && block.style === "h3") {
      return { ...block, style: "h2" };
    }

    if (block.style !== "normal" || block.listItem || !block.children?.length) {
      return block;
    }

    // Be strict: even an unmarked whitespace span makes this ineligible.
    const onlyStrongSpans = block.children.every((span) =>
      span._type === "span" &&
      typeof span.text === "string" &&
      span.marks?.includes("strong"),
    );
    if (!onlyStrongSpans) return block;

    const text = block.children.map((span) => span.text).join("");
    if (!text.trim() || text.length > 120) return block;

    return { ...block, style: "h2" };
  });
}
