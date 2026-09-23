// Headings follow the company profile's two-voice pattern: a lead line in
// EB Garamond Italic, then the rest in light Aspekta. The words are never
// changed, only where the voice switches.

const LINKING_WORDS = /^(a|an|the|of|and|&|to|for|with|in|on|at|by|from)$/i;

export function splitTitle(text: string, at?: number): [string, string] {
  const words = text.trim().split(/\s+/);

  if (words.length < 2) {
    return ["", text.trim()];
  }

  if (at !== undefined) {
    return [words.slice(0, at).join(" "), words.slice(at).join(" ")];
  }

  const total = text.length;
  let best = 1;
  let bestScore = Number.POSITIVE_INFINITY;

  for (let i = 1; i < words.length; i++) {
    const first = words.slice(0, i).join(" ");
    const prev = words[i - 1];
    const next = words[i];
    let score = Math.abs(first.length - total * 0.5);

    // Prefer natural pauses: sentence ends, commas, colons, em dashes.
    if (/[.,:;?!]$/.test(prev)) score -= total * 0.35;
    if (prev === "—" || prev === "–") score -= total * 0.3;
    if (next === "—" || next === "–") score += 50;
    if (LINKING_WORDS.test(prev)) score += 6;

    if (score < bestScore) {
      bestScore = score;
      best = i;
    }
  }

  return [words.slice(0, best).join(" "), words.slice(best).join(" ")];
}

type SplitTitleProps = {
  children: string;
  /** Word index where the sans line starts, when the automatic split reads wrong. */
  at?: number;
};

export function SplitTitle({ children, at }: SplitTitleProps) {
  const [lead, rest] = splitTitle(children, at);

  return (
    <>
      {lead ? <span className="title-serif">{lead}</span> : null}
      {lead ? " " : null}
      <span className="title-sans">{rest}</span>
    </>
  );
}
