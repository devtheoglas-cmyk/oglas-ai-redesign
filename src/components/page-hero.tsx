import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRule } from "@/components/arrow-rule";
import { OglasBrandmark } from "@/components/oglas-logo";
import { SplitTitle } from "@/components/split-title";

// Soft moving light behind every blue field hero, plus the woven brandmark
// as a glass watermark when the hero has no picture of its own.
export function HeroBackdrop({ watermark = true }: { watermark?: boolean }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="drift absolute -left-48 -top-56 h-[36rem] w-[36rem] rounded-full bg-[#cfd5ff]/35 blur-[90px]" />
      <div className="drift absolute -bottom-64 right-[-12%] h-[40rem] w-[40rem] rounded-full bg-[#4262ff]/55 blur-[110px] [animation-delay:-9s]" />
      {watermark ? (
        <OglasBrandmark className="spin-slow absolute -right-40 top-1/2 h-[44rem] w-[44rem] -translate-y-1/2 text-white/[0.07] md:-right-24" />
      ) : null}
    </div>
  );
}

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  summary?: string;
  /** Extra hero copy and actions, rendered under the summary. */
  children?: ReactNode;
  /** Right-hand visual. Without it the brandmark watermark fills the space. */
  art?: ReactNode;
};

export function PageHero({ eyebrow, title, summary, children, art }: PageHeroProps) {
  return (
    <section className="bg-mesh -mt-20 overflow-hidden">
      <HeroBackdrop watermark={!art} />
      <div
        className={`relative mx-auto grid w-full max-w-[1160px] gap-12 px-4 pb-20 pt-36 md:pb-28 md:pt-44 ${
          art ? "lg:grid-cols-[1.1fr_0.9fr] lg:items-center" : ""
        }`}
      >
        <div className="rise max-w-3xl">
          {eyebrow ? <p className="pill-glass">{eyebrow}</p> : null}
          <h1 className="mt-7 text-[2.6rem] text-white sm:text-5xl md:text-6xl lg:text-[4.3rem]">
            <SplitTitle>{title}</SplitTitle>
          </h1>
          <ArrowRule className="mt-8 text-white/70" />
          {summary ? (
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
              {summary}
            </p>
          ) : null}
          {children}
        </div>
        {art ? <div className="rise relative [animation-delay:120ms]">{art}</div> : null}
      </div>
    </section>
  );
}

type HeroArtProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  /** Soften an edge the profile cropped flat. */
  fade?: "top" | "bottom";
};

// A chrome cut-out from the company profile, standing in the light field.
export function HeroArt({
  src,
  alt,
  width,
  height,
  className = "",
  priority,
  fade,
}: HeroArtProps) {
  return (
    <div className={`relative mx-auto w-full max-w-md ${className}`}>
      <div
        aria-hidden="true"
        className="absolute inset-[12%] rounded-full bg-[#dfe4ff]/30 blur-[70px]"
      />
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(min-width: 1024px) 28rem, 80vw"
        className={`relative h-auto w-full select-none ${
          fade ? `fade-${fade}` : "drop-shadow-[0_40px_60px_rgba(0,0,80,0.45)]"
        }`}
        draggable={false}
      />
    </div>
  );
}
