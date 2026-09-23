import type { Metadata } from "next";
import { BgImage } from "@/components/bg-image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { staticPageSeo } from "@/content/seo";
import { getPublishedPosts } from "@/sanity/lib/posts";
import { PageHero } from "@/components/page-hero";

export const revalidate = 60;

const seo = staticPageSeo["/insights"];

export const metadata: Metadata = {
  title: {
    absolute: seo.title!,
  },
  description: seo.description,
  alternates: {
    canonical: "/insights",
  },
};

export default async function InsightsPage() {
  const posts = await getPublishedPosts();

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Automation and AI thinking for operational leaders"
        summary="Practical articles to help you decide what to automate, where AI fits, and how to modernize operations without creating more complexity."
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid w-full max-w-[1160px] px-4 gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="group overflow-hidden rounded-2xl border border-brand/10 bg-pearl transition hover:-translate-y-1 hover:border-emerald/35"
            >
              {post.mainImage?.asset?.url ? (
                <div className="relative aspect-[16/10] border-b border-black/10 bg-white">
                  <BgImage
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt ?? ""}
                    fill
                  />
                </div>
              ) : null}
              <div className="p-7">
                <p className="text-xs font-semibold uppercase text-champagne">{post.category}</p>
                <h2 className="mt-5 text-2xl font-semibold leading-tight text-onyx">
                  {post.title}
                </h2>
                <p className="mt-5 text-sm leading-7 text-steel">{post.excerpt}</p>
                <div className="mt-7 flex items-center justify-between text-xs font-semibold text-steel">
                  <span>{post.readTime}</span>
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:text-emerald" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
