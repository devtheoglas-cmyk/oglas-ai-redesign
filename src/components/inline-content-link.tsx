import Link from "next/link";

export function InlineContentLink({
  text,
  phrase,
  href,
}: {
  text: string;
  phrase: string;
  href: string;
}) {
  const index = text.indexOf(phrase);
  if (index < 0) return text;

  return (
    <>
      {text.slice(0, index)}
      <Link className="content-link" href={href}>{phrase}</Link>
      {text.slice(index + phrase.length)}
    </>
  );
}
