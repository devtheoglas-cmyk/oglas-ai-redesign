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
      { source: "/company", destination: "/about", permanent: true },
      // Services moved to the site root and into the header dropdown.
      { source: "/services", destination: "/#services", permanent: true },
      { source: "/services/:slug", destination: "/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
