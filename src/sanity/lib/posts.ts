import type { PortableTextBlock } from "@portabletext/react";
import { groq } from "next-sanity";
import { insights as fallbackInsights } from "@/content/site";
import { projectId } from "@/sanity/env";
import { client } from "@/sanity/lib/client";

type SanityImageDimensions = {
  width?: number;
  height?: number;
  aspectRatio?: number;
};

export type SanityImage = {
  _type?: "image";
  alt?: string;
  caption?: string;
  asset?: {
    _id?: string;
    url?: string;
    metadata?: {
      dimensions?: SanityImageDimensions;
    };
  };
};

export type PublishedPost = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  canonicalUrl?: string;
  mainImage?: SanityImage;
  body?: PortableTextBlock[] | null;
};

const postCardFields = groq`
  _id,
  title,
  "slug": slug.current,
  "category": coalesce(category, "Insights"),
  "excerpt": coalesce(excerpt, ""),
  "date": coalesce(publishedAt, _createdAt),
  "readTime": coalesce(readTime, "4 min read"),
  metaTitle,
  metaDescription,
  keywords,
  canonicalUrl,
  mainImage{
    alt,
    caption,
    asset->{
      _id,
      url,
      metadata { dimensions }
    }
  }
`;

const publishedFilter = groq`
  _type == "post" &&
  defined(slug.current) &&
  (!defined(status) || status == "published") &&
  (!defined(publishedAt) || publishedAt <= now())
`;

const postsQuery = groq`
  *[${publishedFilter}] | order(publishedAt desc, _createdAt desc) [0...$limit] {
    ${postCardFields}
  }
`;

const postBySlugQuery = groq`
  *[${publishedFilter} && slug.current == $slug][0] {
    ${postCardFields},
    body[]{
      ...,
      _type == "image" => {
        ...,
        alt,
        caption,
        asset->{
          _id,
          url,
          metadata { dimensions }
        }
      }
    }
  }
`;

const postSlugsQuery = groq`
  *[${publishedFilter}] {
    "slug": slug.current
  }
`;

function isSanityConfigured() {
  return Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) && projectId !== "demo";
}

function fallbackPostFromInsight(post: (typeof fallbackInsights)[number]): PublishedPost {
  return {
    _id: `fallback-${post.slug}`,
    title: post.title,
    slug: post.slug,
    category: post.category,
    excerpt: post.excerpt,
    date: post.date,
    readTime: post.readTime,
    body: null,
  };
}

function fallbackPosts(limit = fallbackInsights.length) {
  return fallbackInsights.slice(0, limit).map(fallbackPostFromInsight);
}

export async function getPublishedPosts(limit = 100): Promise<PublishedPost[]> {
  if (!isSanityConfigured()) {
    return fallbackPosts(limit);
  }

  try {
    const posts = await client.fetch<PublishedPost[]>(postsQuery, { limit });
    return posts.length > 0 ? posts : fallbackPosts(limit);
  } catch {
    return fallbackPosts(limit);
  }
}

export async function getPublishedPost(slug: string): Promise<PublishedPost | null> {
  const fallback = fallbackInsights.find((post) => post.slug === slug);

  if (!isSanityConfigured()) {
    return fallback ? fallbackPostFromInsight(fallback) : null;
  }

  try {
    const post = await client.fetch<PublishedPost | null>(postBySlugQuery, { slug });
    return post ?? (fallback ? fallbackPostFromInsight(fallback) : null);
  } catch {
    return fallback ? fallbackPostFromInsight(fallback) : null;
  }
}

export async function getPublishedPostSlugs() {
  const fallbackSlugs = fallbackInsights.map((post) => ({ slug: post.slug }));

  if (!isSanityConfigured()) {
    return fallbackSlugs;
  }

  try {
    const slugs = await client.fetch<{ slug: string }[]>(postSlugsQuery);
    const merged = new Map<string, { slug: string }>();

    for (const item of [...fallbackSlugs, ...slugs]) {
      if (item.slug) {
        merged.set(item.slug, item);
      }
    }

    return Array.from(merged.values());
  } catch {
    return fallbackSlugs;
  }
}
