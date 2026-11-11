import { firstServiceMention } from "@/lib/service-mentions";

export function ServiceMention({ text, exclude }: { text: string; exclude?: string }) {
  const match = firstServiceMention(text, exclude ? new Set([exclude]) : undefined);
  if (!match) return text;
  return <>{text.slice(0, match.index)}<a className="content-link" href={match.href}>{match.label}</a>{text.slice(match.index + match.label.length)}</>;
}
