import {
  ArrowRight,
  BarChart3,
  BellRing,
  Compass,
  Database,
  Eye,
  Hammer,
  Inbox,
  ListChecks,
  Mail,
  Map as MapIcon,
  Megaphone,
  PenTool,
  Plus,
  Repeat,
  Rocket,
  ShieldCheck,
  SlidersHorizontal,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRule } from "@/components/arrow-rule";
import { HeroBackdrop } from "@/components/page-hero";
import { SplitTitle } from "@/components/split-title";
import { FaqStructuredData } from "@/components/structured-data";
import { serviceSeo } from "@/content/seo";

const baseUrl = "https://www.oglas-ai.com";

const capabilities: { icon: LucideIcon; title: string; copy: string }[] = [
  {
    icon: Inbox,
    title: "Lead Capture & Routing",
    copy: "Connect enquiries from relevant channels and route them to the appropriate teams or sales processes based on defined business rules.",
  },
  {
    icon: Database,
    title: "CRM Automation",
    copy: "Automate repetitive CRM activities such as lead updates, stage changes, task creation, notifications, and other workflow actions.",
  },
  {
    icon: ListChecks,
    title: "Lead Qualification & Follow-Up",
    copy: "Structure lead qualification and follow-up workflows around your business requirements, helping teams manage enquiries more consistently throughout the sales process.",
  },
  {
    icon: Mail,
    title: "Email & WhatsApp Workflows",
    copy: "Connect relevant email and WhatsApp communication workflows with lead and customer processes, helping teams coordinate follow-ups and notifications more efficiently.",
  },
  {
    icon: Megaphone,
    title: "Campaign Workflow Automation",
    copy: "Automate selected campaign-related actions, notifications, and follow-up processes so marketing activity can connect more effectively with sales workflows.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Dashboards",
    copy: "Bring relevant marketing and lead information into structured reports and dashboards, giving marketing and management teams clearer visibility into workflow activity and outcomes.",
  },
];

const flowChain = [
  "Lead Capture",
  "Qualification",
  "Routing",
  "CRM",
  "Follow-Up",
  "Sales",
  "Reporting",
];

const improvements: { icon: LucideIcon; title: string; copy: string }[] = [
  {
    icon: Zap,
    title: "Faster Lead Response",
    copy: "Create defined workflows for incoming enquiries, routing and follow-ups so leads can move to the appropriate team or process more efficiently.",
  },
  {
    icon: BellRing,
    title: "More Consistent Follow-Ups",
    copy: "Structure follow-up activities around defined business rules and communication workflows, reducing reliance on manual coordination.",
  },
  {
    icon: Repeat,
    title: "Less Manual CRM Administration",
    copy: "Reduce repetitive CRM updates, task creation, notifications and other administrative activities connected to lead management.",
  },
  {
    icon: Eye,
    title: "Better Lead Visibility",
    copy: "Bring relevant lead and marketing information into a more connected workflow, giving teams clearer visibility into lead status and activity.",
  },
  {
    icon: SlidersHorizontal,
    title: "More Controlled Marketing Workflows",
    copy: "Define how leads, communications, notifications and campaign-related activities move through the business, creating greater consistency across marketing and sales processes.",
  },
];

const steps: { icon: LucideIcon; title: string; copy: string }[] = [
  {
    icon: Compass,
    title: "Discover",
    copy: "Understand your lead sources, marketing processes, CRM structure, communication workflows, and operational requirements.",
  },
  {
    icon: MapIcon,
    title: "Map",
    copy: "Map lead capture, qualification, routing, CRM, follow-up, communication, and reporting workflows.",
  },
  {
    icon: PenTool,
    title: "Design",
    copy: "Define automation rules, user roles, workflow triggers, integrations, notifications, and reporting requirements.",
  },
  {
    icon: Hammer,
    title: "Build",
    copy: "Develop and connect the required marketing automation workflows, CRM processes, and integrations.",
  },
  {
    icon: ShieldCheck,
    title: "Validate",
    copy: "Test workflow triggers, lead routing, CRM updates, notifications, follow-ups, and different business scenarios.",
  },
  {
    icon: Rocket,
    title: "Deploy & Improve",
    copy: "Deploy the automation and refine the workflows as your business processes and requirements evolve.",
  },
];

const processFlow = ["Discover", "Map", "Design", "Build", "Validate", "Deploy & Improve"];

export const marketingAutomationFaqs = [
  {
    question: "What is marketing automation?",
    answer:
      "Marketing automation connects repetitive marketing and sales activities into structured workflows. It can help businesses manage lead capture, qualification, routing, CRM updates, follow-ups, notifications, and reporting more consistently.",
  },
  {
    question: "What marketing processes can be automated?",
    answer:
      "Marketing processes such as lead capture, lead routing, CRM updates, qualification workflows, follow-ups, email and WhatsApp workflows, notifications, campaign-related activities, and reporting can be automated based on business requirements.",
  },
  {
    question: "Can marketing automation integrate with our CRM?",
    answer:
      "Yes, marketing automation can be integrated with relevant CRM systems to connect lead capture, lead management, follow-ups, CRM updates, and related workflows. Oglas AI can structure integrations around the systems and processes your business already uses.",
  },
  {
    question: "Can WhatsApp and email workflows be automated?",
    answer:
      "Yes, relevant WhatsApp and email workflows can be connected to lead and customer processes, helping businesses structure follow-ups, notifications, and communication activities around defined workflows.",
  },
  {
    question: "Does Oglas AI provide marketing automation services in Dubai and the UAE?",
    answer:
      "Yes, Oglas AI designs and develops customized marketing automation solutions for businesses in Dubai and across the UAE. Solutions can be structured around lead management, CRM workflows, follow-ups, communication processes, integrations, and reporting requirements.",
  },
];

const metaDescription = serviceSeo["marketing-automation"].description;

function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function StructuredData() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Marketing Automation",
        item: `${baseUrl}/marketing-automation`,
      },
    ],
  };
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/marketing-automation#service`,
    name: "Marketing Automation",
    serviceType: "Marketing Automation",
    description: metaDescription,
    provider: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Oglas AI",
      url: baseUrl,
    },
    areaServed: ["Dubai, United Arab Emirates", "United Arab Emirates"],
    url: `${baseUrl}/marketing-automation`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(service) }}
      />
    </>
  );
}

function FlowChips({ items, tone = "light" }: { items: string[]; tone?: "light" | "dark" }) {
  const chip =
    tone === "dark"
      ? "border-white/35 bg-white/12 text-white"
      : "border-brand/15 bg-white text-onyx shadow-[0_10px_24px_-18px_rgba(12,30,160,0.5)]";
  return (
    <ol
      aria-hidden="true"
      className="flex flex-wrap items-center gap-x-2 gap-y-3"
    >
      {items.map((item, index) => (
        <li key={item} className="flex items-center gap-2">
          <span
            className={`rounded-full border px-4 py-2 text-sm font-medium ${chip}`}
          >
            {item}
          </span>
          {index < items.length - 1 ? (
            <ArrowRight
              className={`h-4 w-4 shrink-0 ${tone === "dark" ? "text-white/70" : "text-brand"}`}
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}

export function MarketingAutomationPage() {
  return (
    <>
      <StructuredData />
      <FaqStructuredData faqs={marketingAutomationFaqs} />

      {/* Hero */}
      <section className="bg-mesh -mt-20 overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44">
        <HeroBackdrop />
        <div className="mx-auto grid w-full max-w-[1160px] items-center gap-12 px-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rise">
            <h1 className="text-[2.6rem] text-white sm:text-5xl md:text-6xl lg:text-[4.1rem]">
              <SplitTitle at={1}>{"Marketing Automation"}</SplitTitle>
            </h1>
            <ArrowRule className="mt-8 text-white/70" />
            <p className="lead-serif mt-8 max-w-2xl text-2xl leading-9 text-white md:text-[1.7rem] md:leading-10">
              Connect lead capture, CRM, follow-ups, campaign activity,
              notifications, and reporting through marketing automation built
              around the way your business works.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
              Oglas AI designs and develops customized marketing automation
              solutions for businesses in Dubai and across the UAE, helping
              marketing and sales teams reduce repetitive work, improve lead
              response, and create more connected workflows between marketing and
              sales.
            </p>
            <Link href="/contact" className="btn btn-light mt-9">
              Book a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rise relative hidden [animation-delay:120ms] lg:block">
            <div
              aria-hidden="true"
              className="absolute inset-[10%] rounded-full bg-[#dfe4ff]/30 blur-[80px]"
            />
            <Image
              src="/images/brand/neural-brain.webp"
              alt=""
              aria-hidden="true"
              width={652}
              height={528}
              priority
              sizes="28rem"
              className="relative mx-auto h-auto w-full max-w-md select-none drop-shadow-[0_40px_60px_rgba(0,0,80,0.45)]"
              draggable={false}
            />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-[1160px] gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr]">
          <h2 className="text-4xl leading-[1.05] text-onyx md:text-[3.2rem]">
            <SplitTitle>{"Make Marketing and Sales Workflows More Connected"}</SplitTitle>
          </h2>
          <div className="space-y-5 text-base leading-8 text-steel md:text-lg">
            <p>
              As businesses generate leads across forms, campaigns, websites,
              WhatsApp, and other channels, marketing and sales teams can end up
              managing information across disconnected tools and manual processes.
              This can lead to delayed follow-ups, repeated CRM updates,
              inconsistent lead routing, and limited visibility into campaign
              activity.
            </p>
            <p>
              Oglas AI helps businesses connect these processes through{" "}
              <strong className="font-semibold text-onyx">
                marketing workflow automation
              </strong>
              , creating a more structured flow between lead capture,
              qualification, CRM updates, follow-ups, notifications, and
              reporting.
            </p>
            <p>
              The goal is not simply to automate individual marketing tasks. It is
              to create a connected workflow where leads move through the right
              process, information reaches the right team, and marketing and sales
              teams have clearer visibility into what happens next.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-bloom py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <h2 className="max-w-3xl text-4xl leading-[1.05] text-onyx md:text-[3.2rem]">
            <SplitTitle>{"Marketing Automation for Your Business Workflows"}</SplitTitle>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-steel md:text-lg">
            We design and develop marketing automation workflows around your lead
            sources, sales process, CRM structure, and communication requirements,
            helping your teams automate repetitive marketing and sales activities
            without forcing them into a fixed workflow.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <article key={item.title} className="glass-light rounded-[1.5rem] p-7">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[linear-gradient(135deg,#2f4cf6,#0c29df)] text-white shadow-[0_10px_20px_-10px_rgba(12,41,223,0.9)]">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-xl font-normal leading-snug text-onyx">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-steel">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <h2 className="max-w-3xl text-4xl leading-[1.05] text-onyx md:text-[3.2rem]">
            <SplitTitle>{"Connect Marketing, Sales and CRM"}</SplitTitle>
          </h2>
          <div className="mt-6 max-w-3xl space-y-5 text-base leading-8 text-steel md:text-lg">
            <p>
              Marketing automation works best when the systems involved in lead
              management and sales operations can work together. Instead of
              managing lead information, follow-ups, CRM updates, and reporting as
              separate activities, Oglas AI can connect relevant processes into a
              more structured workflow.
            </p>
            <p>A typical workflow can connect:</p>
          </div>

          <div className="glass-light mt-10 rounded-[1.75rem] p-6 md:p-9">
            <p className="sr-only">{flowChain.join(" → ")}</p>
            <FlowChips items={flowChain} />
          </div>

          <div className="mt-10 max-w-3xl space-y-5 text-base leading-8 text-steel md:text-lg">
            <p>
              Where required, Oglas AI can integrate relevant CRM, marketing,
              communication, and internal business systems into the workflow
              rather than requiring unnecessary system replacement.
            </p>
            <p>
              This connected approach can help reduce repetitive data entry,
              improve information flow between marketing and sales teams, and give
              businesses clearer visibility into how leads move through their
              processes.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="bg-mesh overflow-hidden py-20 md:py-28">
        <div
          aria-hidden="true"
          className="field-orb -left-[24rem] top-10 hidden h-[52rem] w-[52rem] opacity-70 lg:block"
        />
        <div className="mx-auto grid w-full max-w-[1160px] gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr]">
          <h2 className="text-4xl leading-[1.05] text-white md:text-[3.2rem]">
            <SplitTitle>{"Built Around Your Marketing Workflow"}</SplitTitle>
          </h2>
          <div className="space-y-5 text-base leading-8 text-white/90 md:text-lg">
            <p>
              Every business manages leads and marketing processes differently.
              Lead sources, qualification criteria, sales teams, CRM stages,
              follow-up processes, communication channels, and reporting
              requirements can all affect how an automation system should work.
            </p>
            <p>
              Oglas AI develops{" "}
              <strong className="font-semibold text-white">
                marketing automation solutions
              </strong>{" "}
              around these requirements, helping businesses create workflows that
              match their operating processes rather than forcing teams to adapt
              to a fixed automation structure.
            </p>
            <p>
              Whether the requirement involves different lead sources, customized
              routing rules, multiple sales teams, specific follow-up workflows,
              or connected reporting, the automation can be structured around the
              way your business operates.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className="bg-bloom py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <h2 className="max-w-3xl text-4xl leading-[1.05] text-onyx md:text-[3.2rem]">
            <SplitTitle>{"What Marketing Automation Can Improve"}</SplitTitle>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-steel md:text-lg">
            Marketing automation can help businesses create more structured and
            consistent processes across marketing and sales operations.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
            {improvements.map((item, index) => (
              <article
                key={item.title}
                className={`glass-light rounded-[1.5rem] p-7 ${
                  index < 3 ? "lg:col-span-2" : "lg:col-span-3"
                }`}
              >
                <span className="grid h-12 w-12 place-items-center rounded-full border border-brand/20 bg-brand/8 text-brand">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-xl font-normal leading-snug text-onyx">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-steel">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <h2 className="max-w-3xl text-4xl leading-[1.05] text-onyx md:text-[3.2rem]">
            <SplitTitle>{"From Marketing Requirements to Working Automation"}</SplitTitle>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-steel md:text-lg">
            We start by understanding how your business currently manages leads,
            marketing activities, CRM processes, follow-ups, and reporting. We then
            map the required workflows, design the automation, build the required
            integrations and processes, validate the workflows, and deploy the
            system for ongoing use.
          </p>

          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="glass-light rounded-[1.5rem] p-7">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[linear-gradient(135deg,#2f4cf6,#0c29df)] text-white shadow-[0_10px_20px_-10px_rgba(12,41,223,0.9)]">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <span className="tabular text-sm font-medium tracking-[0.12em] text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-normal text-onyx">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-steel">{step.copy}</p>
              </li>
            ))}
          </ol>

          <div className="bg-mesh mt-10 overflow-hidden rounded-[1.75rem] p-7 md:p-9">
            <h3 className="text-xl font-light text-white">Process</h3>
            <div className="mt-5">
              <p className="sr-only">{processFlow.join(" → ")}</p>
              <FlowChips items={processFlow} tone="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 — FAQ */}
      <section className="bg-bloom py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-[1160px] gap-12 px-4 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-4xl leading-[1.05] text-onyx md:text-[3.2rem] lg:sticky lg:top-28 lg:self-start">
            <SplitTitle>{"Frequently Asked Questions"}</SplitTitle>
          </h2>
          <div className="grid gap-3">
            {marketingAutomationFaqs.map((faq, index) => (
              <details
                key={faq.question}
                className="faq-item glass-light group p-6 md:px-8"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[17px] leading-7 text-onyx">
                  <h3 className="font-normal">{faq.question}</h3>
                  <span aria-hidden="true" className="faq-toggle mt-0.5">
                    <Plus className="h-4 w-4" />
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl pr-10 text-[15px] leading-7 text-steel">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-mesh overflow-hidden py-20 md:py-28">
        <HeroBackdrop />
        <div className="mx-auto grid w-full max-w-[1160px] items-center gap-10 px-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-4xl leading-[1.05] text-white md:text-[3.2rem]">
              <SplitTitle>{"Build a More Connected Marketing Workflow"}</SplitTitle>
            </h2>
            <ArrowRule className="mt-8 text-white/70" />
            <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-white/90 md:text-lg">
              <p>
                Bring lead capture, CRM, follow-ups, communication, campaign
                activity, and reporting into a more connected workflow with Oglas
                AI.
              </p>
              <p>
                Whether you need to improve existing marketing processes, connect
                your CRM and lead workflows, or develop customized marketing
                automation around your business requirements, we can help you
                define the right approach.
              </p>
            </div>
          </div>
          <div className="lg:justify-self-end">
            <Link href="/contact" className="btn btn-light">
              Book a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
