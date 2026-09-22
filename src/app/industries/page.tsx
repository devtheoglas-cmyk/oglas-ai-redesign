import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Compass, Layers, Sparkles, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { FaqStructuredData } from "@/components/structured-data";
import { caseStudies, industries } from "@/content/site";
import { staticPageSeo } from "@/content/seo";

const seo = staticPageSeo["/industries"];

export const metadata: Metadata = {
  title: {
    absolute: seo.title!,
  },
  description: seo.description,
  alternates: {
    canonical: "/industries",
  },
};

const approachCards = [
  {
    title: "Understand Before We Build",
    description:
      "Map workflows, approvals, users, systems, integrations, and operational bottlenecks before recommending a solution.",
    icon: Compass,
  },
  {
    title: "Build Around Your Workflow",
    description:
      "Design software around your business rules and processes instead of forcing your team into generic workflows.",
    icon: Layers,
  },
  {
    title: "Apply AI Where It Adds Value",
    description:
      "Use AI where it can reduce manual work, improve visibility, automate repetitive processes, or support decision-making.",
    icon: Sparkles,
  },
  {
    title: "Improve Over Time",
    description:
      "Adapt and extend your systems as your workflows, teams, integrations, and business requirements evolve.",
    icon: TrendingUp,
  },
];

const featuredCaseStudySlugs = [
  "manpower-ess-portal-hr-time-savings",
  "payroll-automation-ess-integration",
  "steel-manufacturing-erp-bi-cashflow",
];

const featuredCaseStudies = featuredCaseStudySlugs
  .map((slug) => caseStudies.find((study) => study.slug === slug))
  .filter((study): study is (typeof caseStudies)[number] => Boolean(study));

const featuredCaseStudyMeta: Record<string, { headline: string; blurb: string }> = {
  "manpower-ess-portal-hr-time-savings": {
    headline: "300 Minutes of HR Time Recovered Every Day",
    blurb:
      "A custom employee self-service portal helped reduce repetitive HR work and recover approximately 300 minutes of HR time per day.",
  },
  "payroll-automation-ess-integration": {
    headline: "Payroll Processing Reduced to Under 10 Seconds",
    blurb:
      "An automated payroll workflow reduced processing from a process that previously took 1–2 business days to under 10 seconds.",
  },
  "steel-manufacturing-erp-bi-cashflow": {
    headline: "Manufacturing & Business Intelligence",
    blurb:
      "ERP and BI solutions connected operational data and provided clearer visibility into business performance and reporting.",
  },
};

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand workflows, users, systems, business rules, and operational challenges.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Define the software architecture, workflows, integrations, dashboards, and automation opportunities.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop the solution in focused stages with testing and business feedback.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Refine workflows, expand functionality, and support future business requirements.",
  },
];

const industriesFaqs = [
  {
    question: "What industries does Oglas AI provide custom software solutions for?",
    answer:
      "Oglas AI provides custom software and AI solutions for manpower and staffing, manufacturing and industrial businesses, security and surveillance, trading and distribution, healthcare clinics, marketing agencies, facility management, and retail and multi-branch businesses. Solutions are designed around each industry's workflows, data, and operational requirements.",
  },
  {
    question: "Can Oglas AI build software specifically for my industry?",
    answer:
      "Yes. Oglas AI builds custom software around your industry's workflows, business rules, users, integrations, and operational requirements. The approach focuses on understanding how your business works before designing the appropriate software, automation, or AI solution.",
  },
  {
    question: "What business processes can Oglas AI automate?",
    answer:
      "Oglas AI can automate repetitive business processes such as payroll, employee requests, approvals, document processing, CRM workflows, inventory operations, reporting, and lead management. Automation can also connect systems and departments to reduce manual work and improve operational visibility.",
  },
  {
    question: "Does Oglas AI provide industry-specific AI solutions?",
    answer:
      "Yes. Oglas AI develops practical AI solutions based on specific business and industry requirements. These can include computer vision, intelligent document processing, AI assistants, workflow automation, business intelligence, and AI-powered applications.",
  },
  {
    question: "Can Oglas AI integrate custom software with our existing business systems?",
    answer:
      "Yes. Oglas AI can integrate custom software with existing ERP, CRM, HR, payroll, accounting, inventory, and other business systems where technically appropriate. This helps businesses connect their existing tools and create more efficient end-to-end workflows.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <FaqStructuredData faqs={industriesFaqs} />

      {/* HERO */}
      <section className="surface-grid bg-pearl py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="Industries"
            title="Custom Software & AI Solutions for Different Industries"
            summary="Every industry operates differently. Oglas AI builds custom software, workflow automation, and practical AI solutions around your processes, people, data, and operational requirements — helping businesses reduce manual work, connect systems, and improve visibility."
            headingLevel="h1"
          />
        </div>
      </section>

      {/* FOREX & TRADING CALLOUT */}
      <section className="bg-white pt-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <Link
            href="/industries/forex-trading"
            className="group flex flex-col gap-6 rounded-lg bg-onyx p-8 text-white md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-light">
                New · Forex &amp; Trading
              </p>
              <h2 className="mt-3 text-2xl font-semibold md:text-3xl">The AI Layer for Modern Forex</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">
                AI agents, trading intelligence, and automation for brokers, fintechs, liquidity
                providers, PayTech companies, and prop firms. Brochure available.
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-emerald-light transition group-hover:text-white">
              Explore
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>

      {/* INDUSTRY CARDS */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            title="Industry-Specific Software Built Around How You Work"
            summary="From workforce operations and manufacturing to healthcare, retail, security, and marketing, Oglas AI designs software around the workflows that make each business different. Our solutions can combine custom software, automation, dashboards, integrations, and practical AI based on your operational needs."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {industries.map((industry) => (
              <article
                key={industry.slug}
                className="rounded-lg border border-black/10 bg-pearl p-7"
              >
                <industry.icon className="h-8 w-8 text-emerald" />
                <h3 className="mt-7 text-2xl font-semibold text-onyx">{industry.title}</h3>
                <p className="mt-4 text-sm leading-7 text-steel">{industry.summary}</p>
                <div className="mt-6 grid gap-2">
                  {industry.needs.map((need) => (
                    <span key={need} className="flex items-center gap-2 text-sm text-steel">
                      <CheckCircle2 className="h-4 w-4 text-emerald" />
                      {need}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-pearl py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="Our approach"
            title="Built Around Real Business Operations"
            summary="Off-the-shelf software often requires businesses to change the way they work. Oglas AI takes a different approach. We first understand your workflows, business rules, users, systems, and operational challenges, then design the technology around them."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {approachCards.map((card) => (
              <article
                key={card.title}
                className="rounded-lg border border-black/10 bg-white p-6"
              >
                <card.icon className="h-8 w-8 text-emerald" />
                <h3 className="mt-6 text-lg font-semibold text-onyx">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-steel">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE IN PRACTICE */}
      {featuredCaseStudies.length ? (
        <section className="bg-white py-20">
          <div className="mx-auto w-full max-w-[1160px] px-4">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading eyebrow="Experience in practice" title="Results from real projects" />
              <Link
                href="/case-studies"
                className="text-sm font-semibold text-emerald transition hover:text-onyx"
              >
                View all case studies
              </Link>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {featuredCaseStudies.map((study) => {
                const meta = featuredCaseStudyMeta[study.slug];
                return (
                  <article
                    key={study.slug}
                    className="flex flex-col rounded-lg border border-black/10 bg-pearl p-6"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald">
                      {study.sector}
                    </p>
                    <p className="mt-4 inline-flex self-start rounded-md border border-champagne/30 bg-champagne/10 px-3 py-2 text-xs font-semibold text-onyx">
                      {study.metric}
                    </p>
                    <h3 className="mt-4 text-lg font-semibold leading-7 text-onyx">
                      {meta?.headline ?? study.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-steel">
                      {meta?.blurb ?? study.solution}
                    </p>
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald transition hover:text-onyx"
                    >
                      View case study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      {/* PROCESS */}
      <section className="bg-pearl py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="Process"
            title="How We Build Industry-Specific Solutions"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-lg border border-black/10 bg-white p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-champagne">
                  {step.number}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-onyx">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-steel">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-12 grid gap-4">
            {industriesFaqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-black/10 bg-pearl p-6 open:border-emerald/40"
                open={index === 0}
              >
                <summary className="flex cursor-pointer items-start justify-between gap-6 text-base font-semibold text-onyx marker:hidden">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-md border border-black/10 bg-white text-emerald transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-steel">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-onyx py-20 text-white">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-light">
            Let&apos;s build what your business needs
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            Have a business workflow that doesn&apos;t fit off-the-shelf software?
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            Tell us how your business operates, where the bottlenecks are, and what you want to
            improve. We&apos;ll start by understanding the business problem before recommending
            the technology.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-md bg-emerald px-6 py-3 text-sm font-semibold text-onyx transition hover:bg-emerald-light"
          >
            Book a Free Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
