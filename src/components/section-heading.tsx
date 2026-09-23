import { SplitTitle } from "@/components/split-title";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  summary?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  headingLevel?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  summary,
  align = "left",
  tone = "light",
  headingLevel = "h2",
}: SectionHeadingProps) {
  const dark = tone === "dark";
  const Heading = headingLevel;

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className={`mb-6 ${dark ? "pill-glass" : "pill"}`}>{eyebrow}</p>
      ) : null}
      <Heading
        className={`text-4xl md:text-[3.4rem] ${dark ? "text-white" : "text-onyx"} ${
          headingLevel === "h1" ? "lg:text-[4.1rem]" : ""
        }`}
      >
        <SplitTitle>{title}</SplitTitle>
      </Heading>
      {summary ? (
        <p
          className={`mt-6 text-base leading-8 md:text-lg ${
            dark ? "text-white/80" : "text-steel"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {summary}
        </p>
      ) : null}
    </div>
  );
}
