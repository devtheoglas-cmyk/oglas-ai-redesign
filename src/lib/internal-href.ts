const serviceAliases: Record<string, string> = {
  "/custom-software-development": "/custom-software-development-services-in-dubai-uae",
  "/erp-payroll-automation": "/erp-software-company-in-dubai-uae",
  "/intelligent-computer-vision": "/computer-vision-solutions-in-dubai-uae",
  "/industrial-iot-integration": "/industrial-iot-companies-in-dubai-uae",
  "/workflow-automation": "/workflow-automation-in-dubai-uae",
  "/marketing-automation": "/marketing-automation-agency-in-dubai-uae",
  "/ess-hr-portals": "/employee-self-service-in-dubai-uae",
  "/ai-dashboards-decision-intelligence": "/ai-powered-dashboards-in-dubai-uae",
  "/ai-powered-dashboards-in-duabi-uae": "/ai-powered-dashboards-in-dubai-uae",
  "/ai-document-processing": "/ai-powered-document-processing-in-dubai-uae",
  "/ai-chatbots-knowledge-assistants": "/ai-chatbot-development-in-dubai-uae",
  "/company": "/about",
  "/insights/what-to-automate-before-ai": "/insights/what-uae-companies-should-automate-before-ai",
};

/** Normalize verified owned domains and old paths while retaining queries and fragments. */
export function internalHref(href: string): string {
  if (!href.startsWith("/") && !/^https?:\/\//i.test(href)) return href;
  try {
    const url = new URL(href, "https://www.oglas-ai.com");
    if (!["https:", "http:"].includes(url.protocol)) return href;
    if (!["www.oglas-ai.com", "oglas-ai.com", "www.oglasai.com", "oglasai.com"].includes(url.hostname)) return href;
    const path = url.pathname.replace(/\/$/, "") || "/";
    const servicePath = path.startsWith("/services/") ? path.slice("/services".length) : path;
    const canonical = serviceAliases[servicePath] || servicePath;
    return canonical + url.search + url.hash;
  } catch {
    return href;
  }
}
