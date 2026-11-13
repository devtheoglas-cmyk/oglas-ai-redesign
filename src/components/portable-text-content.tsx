import type { PortableTextComponents } from "@portabletext/react";
import { PortableText } from "@portabletext/react";
import { internalHref } from "@/lib/internal-href";
import Image from "next/image";
import type { SanityImage } from "@/sanity/lib/posts";

type PortableTextContentProps = {
  value: Parameters<typeof PortableText>[0]["value"];
};

function imageSize(image: SanityImage) {
  const dimensions = image.asset?.metadata?.dimensions;

  return {
    width: Math.round(dimensions?.width ?? 1400),
    height: Math.round(dimensions?.height ?? 840),
  };
}

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-12 text-3xl font-semibold leading-tight text-onyx">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 text-2xl font-semibold leading-tight text-onyx">{children}</h3>
    ),
    normal: ({ children }) => <p className="text-base leading-8 text-steel">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-champagne bg-pearl px-6 py-4 text-lg leading-8 text-onyx">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="grid gap-3 pl-5 text-base leading-8 text-steel marker:text-emerald">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="grid gap-3 pl-5 text-base leading-8 text-steel marker:font-semibold marker:text-emerald">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-1">{children}</li>,
    number: ({ children }) => <li className="pl-1">{children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = internalHref(typeof value?.href === "string" ? value.href : "#");
      const isExternal = /^(?:https?:)?\/\//i.test(href);

      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
          className="font-semibold text-emerald underline underline-offset-4 transition hover:text-onyx"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const image = value as SanityImage;

      if (!image.asset?.url) {
        return null;
      }

      const { width, height } = imageSize(image);

      return (
        <figure className="my-12">
          <Image
            src={image.asset.url}
            alt={image.alt ?? ""}
            width={width}
            height={height}
            sizes="(max-width: 820px) 100vw, 820px"
            className="h-auto w-full rounded-lg border border-black/10"
          />
          {image.caption ? (
            <figcaption className="mt-3 text-sm leading-6 text-steel">{image.caption}</figcaption>
          ) : null}
        </figure>
      );
    },
  },
};

export function PortableTextContent({ value }: PortableTextContentProps) {
  return (
    <div className="grid gap-6">
      <PortableText value={value} components={components} />
    </div>
  );
}
