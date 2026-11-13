import type { PortableTextBlock } from "@portabletext/react";
import { groq } from "next-sanity";
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
  contentUpdatedAt?: string;
  author?: { name: string; role?: string };
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
  contentUpdatedAt,
  author->{ name, role },
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
  slug.current != "ai-automation-for-uae-businesses" &&
  count(body[_type == "block" && count(children[_type == "span" && length(text) > 0]) > 0]) > 0 &&
  (!defined(status) || status == "published") &&
  (!defined(publishedAt) || publishedAt <= now())
`;

const postsQuery = groq`
  *[${publishedFilter}] | order(publishedAt desc, _createdAt desc) {
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

// Only complete published CMS documents are public. Let failures propagate so ISR
// retains the last successful page instead of publishing substitute article copy.
export async function getPublishedPosts(limit?: number): Promise<PublishedPost[]> {
  if (!isSanityConfigured()) return [];
  const query = limit === undefined ? postsQuery : groq`${postsQuery}[0...$limit]`;
  return client.fetch<PublishedPost[]>(query, limit === undefined ? {} : { limit });
}

export async function getPublishedPost(slug: string): Promise<PublishedPost | null> {
  if (!isSanityConfigured()) return null;
  return client.fetch<PublishedPost | null>(postBySlugQuery, { slug });
}

export async function getPublishedPostSlugs() {
  if (!isSanityConfigured()) return [];
  return client.fetch<{ slug: string }[]>(postSlugsQuery);
}
