import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BgImage } from "@/components/bg-image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ArticleStructuredData } from "@/components/structured-data";
import { PortableTextContent } from "@/components/portable-text-content";
import { insightSeo } from "@/content/seo";
import { getPublishedPost, getPublishedPostSlugs, resolveCanonicalPath } from "@/sanity/lib/posts";
import { HeroBackdrop } from "@/components/page-hero";
import { SplitTitle } from "@/components/split-title";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 60;

export async function generateStaticParams() {
  return getPublishedPostSlugs();
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPost(slug);

  if (!post) {
    return {};
  }

  const seo = insightSeo[post.slug];
  const title = seo?.title || post.metaTitle || post.title;
  const description = seo?.description || post.metaDescription || post.excerpt;

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: post.keywords,
    alternates: {
      canonical: resolveCanonicalPath(post.canonicalUrl, `/insights/${post.slug}`),
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.date,
      images: post.mainImage?.asset?.url
        ? [
            {
              url: post.mainImage.asset.url,
              alt: post.mainImage.alt || post.title,
            },
          ]
        : undefined,
    },
  };
}

export default async function InsightDetailPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const post = await getPublishedPost(slug);

  if (!post) {
    notFound();
  }

  const seo = insightSeo[post.slug];

  return (
    <article className="bg-white">
      <ArticleStructuredData
        post={post}
        title={seo?.title}
        description={seo?.description}
      />
      <header className="bg-mesh -mt-20 overflow-hidden">
        <HeroBackdrop />
        <div className="relative mx-auto w-full max-w-[820px] px-4 pb-16 pt-36 md:pb-20 md:pt-44">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Insights
          </Link>
          <p className="pill-glass mt-10">{post.category}</p>
          <h1 className="mt-6 text-4xl text-white md:text-[3.4rem]">
            <SplitTitle>{post.title}</SplitTitle>
          </h1>
          <p className="mt-7 text-sm text-white/75">
            {post.readTime} · {new Date(post.date).toLocaleDateString("en", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </header>
      <div className="mx-auto w-full max-w-[820px] px-4 py-16 md:py-20">
        <p className="lead-serif text-2xl leading-9 text-onyx">{post.excerpt}</p>
        {post.mainImage?.asset?.url ? (
          <figure className="mt-10">
            <BgImage
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt ?? ""}
              width={Math.round(post.mainImage.asset.metadata?.dimensions?.width ?? 1400)}
              height={Math.round(post.mainImage.asset.metadata?.dimensions?.height ?? 840)}
              className="w-full rounded-[1.75rem]"
            />
            {post.mainImage.caption ? (
              <figcaption className="mt-3 text-sm leading-6 text-steel">
                {post.mainImage.caption}
              </figcaption>
            ) : null}
          </figure>
        ) : null}
        <div className="mt-10">
          {post.body && post.body.length > 0 ? (
            <PortableTextContent value={post.body} />
          ) : (
            <div className="grid gap-6 text-base leading-8 text-steel">
              <p>
                Most companies do not need a vague AI transformation project. They need
                better workflow capture, cleaner operating data, and software that
                removes repeated manual work before advanced intelligence is layered on top.
              </p>
              <p>
                Oglas AI starts with the business process: who does the work, which
                approvals matter, where data enters the system, and what leadership needs
                to see. That foundation makes ERP, automation, dashboards, and AI systems
                easier to adopt.
              </p>
              <p>
                The best systems are practical, measurable, and designed around the teams
                who will use them every day.
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
