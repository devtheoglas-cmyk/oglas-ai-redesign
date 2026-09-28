import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
  transpilePackages: [
    "next-sanity",
    "sanity",
    "@sanity/ui",
    "@sanity/vision",
    "styled-components",
  ],
  async redirects() {
    return [
      // 301 (not Next's default 308) so search engines treat these as moved permanently.
      { source: "/company", destination: "/about", statusCode: 301 },
      // Services moved to the site root and into the header dropdown.
      { source: "/services", destination: "/#services", statusCode: 301 },
      { source: "/services/:slug", destination: "/:slug", statusCode: 301 },
    ];
  },
};

export default nextConfig;
