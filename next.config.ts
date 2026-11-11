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
      { source: "/ai-document-processing", destination: "/ai-powered-document-processing-in-dubai-uae", statusCode: 301 },
      { source: "/services/ai-document-processing", destination: "/ai-powered-document-processing-in-dubai-uae", statusCode: 301 },
      { source: "/custom-software-development", destination: "/custom-software-development-services-in-dubai-uae", statusCode: 301 },
      { source: "/erp-payroll-automation", destination: "/erp-software-company-in-dubai-uae", statusCode: 301 },
      { source: "/intelligent-computer-vision", destination: "/computer-vision-solutions-in-dubai-uae", statusCode: 301 },
      { source: "/industrial-iot-integration", destination: "/industrial-iot-companies-in-dubai-uae", statusCode: 301 },
      { source: "/workflow-automation", destination: "/workflow-automation-in-dubai-uae", statusCode: 301 },
      { source: "/marketing-automation", destination: "/marketing-automation-agency-in-dubai-uae", statusCode: 301 },
      { source: "/ess-hr-portals", destination: "/employee-self-service-in-dubai-uae", statusCode: 301 },
      { source: "/ai-dashboards-decision-intelligence", destination: "/ai-powered-dashboards-in-duabi-uae", statusCode: 301 },
      { source: "/services/custom-software-development", destination: "/custom-software-development-services-in-dubai-uae", statusCode: 301 },
      { source: "/services/erp-payroll-automation", destination: "/erp-software-company-in-dubai-uae", statusCode: 301 },
      { source: "/services/intelligent-computer-vision", destination: "/computer-vision-solutions-in-dubai-uae", statusCode: 301 },
      { source: "/services/industrial-iot-integration", destination: "/industrial-iot-companies-in-dubai-uae", statusCode: 301 },
      { source: "/services/workflow-automation", destination: "/workflow-automation-in-dubai-uae", statusCode: 301 },
      { source: "/services/marketing-automation", destination: "/marketing-automation-agency-in-dubai-uae", statusCode: 301 },
      { source: "/services/ess-hr-portals", destination: "/employee-self-service-in-dubai-uae", statusCode: 301 },
      { source: "/services/ai-dashboards-decision-intelligence", destination: "/ai-powered-dashboards-in-duabi-uae", statusCode: 301 },
      // Services moved to the site root and into the header dropdown.
      { source: "/services", destination: "/#services", statusCode: 301 },
      { source: "/services/:slug", destination: "/:slug", statusCode: 301 },
    ];
  },
};

export default nextConfig;
