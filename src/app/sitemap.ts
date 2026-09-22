import type { MetadataRoute } from "next";
import { services } from "@/content/site";
import { getPublishedPosts } from "@/sanity/lib/posts";

const baseUrl = "https://www.oglasai.com";

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPublishedPosts();
  const staticRoutes = [
    "",
    "/services",
    "/industries",
    "/industries/forex-trading",
    "/case-studies",
    "/insights",
    "/about",
    "/contact",
    "/privacy",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })),
    ...services.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: new Date(),
    })),
    ...posts.map((post) => ({
      url: `${baseUrl}/insights/${post.slug}`,
      lastModified: new Date(post.date),
    })),
  ];
}
