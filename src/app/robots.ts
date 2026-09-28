import type { MetadataRoute } from "next";

const baseUrl = "https://www.oglas-ai.com";
const publicCrawlerAccess = {
  allow: "/",
  disallow: "/studio",
};

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          "OAI-SearchBot",
          "ChatGPT-User",
          "GPTBot",
          "PerplexityBot",
          "Perplexity-User",
          "ClaudeBot",
          "Claude-SearchBot",
          "Claude-User",
          "Googlebot",
          "Google-Extended",
          "Bingbot",
          "Applebot",
        ],
        ...publicCrawlerAccess,
      },
      {
        userAgent: "*",
        ...publicCrawlerAccess,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: "www.oglas-ai.com",
  };
}
