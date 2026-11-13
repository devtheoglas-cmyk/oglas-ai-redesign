import type { Metadata } from "next";
import { pageMetadata } from "@/lib/page-metadata";
import { linkArticleServices } from "@/lib/service-mentions";
import { normalizeArticleHeadings } from "@/lib/article-content";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ArticleStructuredData } from "@/components/structured-data";
import { PortableTextContent } from "@/components/portable-text-content";
import { insightSeo, insightTitleOverrides } from "@/content/seo";
import { getPublishedPost, getPublishedPostSlugs } from "@/sanity/lib/posts";
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

  if (slug === "ai-automation-for-uae-businesses") {
    return {};
  }

  const post = await getPublishedPost(slug);

  if (!post) {
    return {};
  }

  const seo = insightSeo[post.slug];
  const title = insightTitleOverrides[post.slug] || post.metaTitle || seo?.title || post.title;
  const description = seo?.description || post.metaDescription || post.excerpt;
  // The published slug owns the route. CMS canonical fields may contain old slugs.
  const path = `/insights/${post.slug}`;
  const metadata = pageMetadata({ title, description, path });
  const images = post.mainImage?.asset?.url
    ? [{ url: post.mainImage.asset.url, alt: post.mainImage.alt || post.title }]
    : [{ url: "/opengraph-image", alt: "Oglas AI" }];

  return {
    ...metadata,
    keywords: post.keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      ...metadata.openGraph,
      title,
      description,
      type: "article",
      publishedTime: post.date,
      images,
    },
    twitter: {
      ...metadata.twitter,
      images,
    },
  };
}

export default async function InsightDetailPage({ params }: InsightPageProps) {
  const { slug } = await params;

  if (slug === "ai-automation-for-uae-businesses") {
    notFound();
  }

  const post = await getPublishedPost(slug);

  if (!post) {
    notFound();
  }

  const seo = insightSeo[post.slug];

  return (
    <article className="bg-white">
      <ArticleStructuredData
        post={post}
        title={post.metaTitle || seo?.title}
        description={seo?.description || post.metaDescription}
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
            By {post.author?.name || "Oglas AI"}{post.author?.role ? ` · ${post.author.role}` : ""} ·{" "}
            {post.readTime} ·{" "}
            {new Date(post.date).toLocaleDateString("en", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          {post.contentUpdatedAt && (
            <p className="mt-2 text-sm text-white/75">
              Updated {new Date(post.contentUpdatedAt).toLocaleDateString("en", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          )}
        </div>
      </header>

      <div className="mx-auto w-full max-w-[820px] px-4 py-16 md:py-20">
        <p className="lead-serif text-2xl leading-9 text-onyx">{post.excerpt}</p>

        {post.mainImage?.asset?.url ? (
          <figure className="mt-10">
            <Image
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt ?? ""}
              width={Math.round(post.mainImage.asset.metadata?.dimensions?.width ?? 1400)}
              height={Math.round(post.mainImage.asset.metadata?.dimensions?.height ?? 840)}
              sizes="(max-width: 820px) 100vw, 820px"
              className="h-auto w-full rounded-[1.75rem]"
            />

            {post.mainImage.caption ? (
              <figcaption className="mt-3 text-sm leading-6 text-steel">
                {post.mainImage.caption}
              </figcaption>
            ) : null}
          </figure>
        ) : null}

        <div className="mt-10">
          {post.body && <PortableTextContent value={linkArticleServices(normalizeArticleHeadings(post.body), post.slug)} />}
        </div>
        <Link href="/case-studies" className="content-link mt-12 inline-block">Explore Oglas AI case studies</Link>
      </div>
    </article>
  );
}
