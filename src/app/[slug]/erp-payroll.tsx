import {
  ArrowRight,
  BarChart3,
  Calculator,
  Compass,
  Eye,
  Hammer,
  Lock,
  Map as MapIcon,
  PenTool,
  Plus,
  Rocket,
  ShieldCheck,
  Smartphone,
  UsersRound,
  Workflow,
  Layers,
  ClipboardCheck,
  Repeat,
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
    icon: Calculator,
    title: "Payroll Automation",
    copy: "Automate payroll workflows around salary structures, allowances, deductions, attendance, overtime, and business-specific payroll rules. The system can be designed around the way your payroll team works rather than relying on a fixed process.",
  },
  {
    icon: UsersRound,
    title: "Employee & Attendance Management",
    copy: "Connect employee records with attendance, leave, and related workforce processes to create a more consistent source of operational information.",
  },
  {
    icon: Smartphone,
    title: "Employee Self-Service",
    copy: "Provide employees with controlled access to relevant information and workflows through role-based employee self-service portals, reducing repetitive requests handled manually by HR teams.",
  },
  {
    icon: Workflow,
    title: "Approval & Workflow Automation",
    copy: "Structure employee requests, attendance corrections, leave approvals, payroll processes, and other operational workflows around defined roles and responsibilities.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Dashboards",
    copy: "Give HR, finance, and management teams clearer access to payroll, workforce, and operational information through structured reports and dashboards.",
  },
];

const flowChain = [
  "Employee Records",
  "Attendance",
  "Leave",
  "Approvals",
  "Payroll",
  "Finance",
  "Reporting",
];

const improvements: { icon: LucideIcon; title: string; copy: string }[] = [
  {
    icon: ClipboardCheck,
    title: "More Structured Payroll Processing",
    copy: "Reduce repetitive manual checks and create consistent workflows for payroll operations, helping teams work with more organized and accessible payroll information.",
  },
  {
    icon: Layers,
    title: "Centralized Workforce Information",
    copy: "Bring employee, attendance, leave, and payroll information into a more connected operating environment instead of managing related information across disconnected processes.",
  },
  {
    icon: Eye,
    title: "Better Operational Visibility",
    copy: "Give HR, finance, and management teams clearer access to relevant workforce and payroll information through structured reporting and dashboards.",
  },
  {
    icon: Repeat,
    title: "Less Repetitive Administration",
    copy: "Reduce duplicate data entry and manual coordination across employee, attendance, approval, and payroll processes.",
  },
  {
    icon: Lock,
    title: "More Controlled Workflows",
    copy: "Create defined roles, approvals, and access levels for payroll and workforce operations, helping organizations maintain greater control over how information and requests move through the system.",
  },
];

const steps: { icon: LucideIcon; title: string; copy: string }[] = [
  {
    icon: Compass,
    title: "Discover",
    copy: "Understand your workforce structure, payroll requirements, existing systems, and operational challenges.",
  },
  {
    icon: MapIcon,
    title: "Map",
    copy: "Map employee, attendance, leave, approval, payroll, finance, and reporting workflows.",
  },
  {
    icon: PenTool,
    title: "Design",
    copy: "Define the system structure, user roles, workflows, dashboards, and required integrations.",
  },
  {
    icon: Hammer,
    title: "Build",
    copy: "Develop the required ERP, payroll, employee self-service, workflow, and reporting capabilities.",
  },
  {
    icon: ShieldCheck,
    title: "Validate",
    copy: "Test payroll workflows, permissions, integrations, approvals, and operational scenarios before deployment.",
  },
  {
    icon: Rocket,
    title: "Deploy & Improve",
    copy: "Deploy the solution and refine it as business processes and requirements evolve.",
  },
];

const processFlow = ["Discover", "Map", "Design", "Build", "Validate", "Deploy & Improve"];

export const erpPayrollFaqs = [
  {
    question: "What is ERP and payroll automation?",
    answer:
      "ERP and payroll automation connects employee, attendance, leave, payroll, approval, finance, and reporting processes into a more structured business workflow. It helps reduce repetitive administrative work and provides better control over workforce and payroll operations.",
  },
  {
    question: "Can ERP and payroll software be customized for our business?",
    answer:
      "Yes, ERP and payroll software can be customized around your business rules, employee structure, approval workflows, payroll requirements, and reporting needs. Oglas AI designs and develops solutions around how the business operates rather than requiring teams to follow a fixed software structure.",
  },
  {
    question: "Can ERP and payroll automation support multiple branches?",
    answer:
      "Yes, an ERP and payroll automation system can be designed to support multiple branches, departments, employee categories, approval structures, and branch-level reporting requirements. This can be particularly useful for businesses managing distributed or multi-location workforce operations.",
  },
  {
    question: "Can payroll integrate with attendance, HR, and finance systems?",
    answer:
      "Yes, payroll can be integrated with relevant attendance, HR, finance, ERP, and internal business systems. Connecting these processes can reduce duplicate data entry and create a more consistent flow of information across workforce and payroll operations.",
  },
  {
    question: "Does Oglas AI provide ERP and payroll automation services in Dubai and the UAE?",
    answer:
      "Yes, Oglas AI designs and develops customized ERP and payroll automation solutions for businesses in Dubai and across the UAE. Solutions can be structured around business-specific payroll rules, employee workflows, integrations, reporting requirements, and operational structures.",
  },
];

const metaDescription = serviceSeo["erp-payroll-automation"].description;

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
        name: "ERP & Payroll Automation",
        item: `${baseUrl}/erp-payroll-automation`,
      },
    ],
  };
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/erp-payroll-automation#service`,
    name: "ERP & Payroll Automation",
    serviceType: "ERP and Payroll Automation",
    description: metaDescription,
    provider: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Oglas AI",
      url: baseUrl,
    },
    areaServed: ["Dubai, United Arab Emirates", "United Arab Emirates"],
    url: `${baseUrl}/erp-payroll-automation`,
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

export function ErpPayrollPage() {
  return (
    <>
      <StructuredData />
      <FaqStructuredData faqs={erpPayrollFaqs} />

      {/* Hero */}
      <section className="bg-mesh -mt-20 overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44">
        <HeroBackdrop />
        <div className="mx-auto grid w-full max-w-[1160px] items-center gap-12 px-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rise">
            <h1 className="text-[2.6rem] text-white sm:text-5xl md:text-6xl lg:text-[4.1rem]">
              <SplitTitle at={1}>{"ERP & Payroll Automation"}</SplitTitle>
            </h1>
            <ArrowRule className="mt-8 text-white/70" />
            <p className="lead-serif mt-8 max-w-2xl text-2xl leading-9 text-white md:text-[1.7rem] md:leading-10">
              Build ERP and payroll systems around the way your business actually
              operates.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
              Oglas AI designs and develops customized ERP and payroll solutions for
              businesses in Dubai and across the UAE. We connect employee records,
              attendance, leave, approvals, payroll, and reporting into a more
              organized workflow, adapting the system to your business rules and
              operational requirements instead of forcing your teams into a rigid
              software structure.
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

      {/* Section 1 */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-[1160px] gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr]">
          <h2 className="text-4xl leading-[1.05] text-onyx md:text-[3.2rem]">
            <SplitTitle>{"Make Payroll and Workforce Operations More Connected"}</SplitTitle>
          </h2>
          <div className="space-y-5 text-base leading-8 text-steel md:text-lg">
            <p>
              As businesses grow, payroll and employee information can become
              spread across spreadsheets, attendance systems, HR tools, and
              finance processes. This can lead to repeated data entry, manual
              checks, approval delays, and limited visibility.
            </p>
            <p>
              Oglas AI helps businesses bring these workflows together through{" "}
              <strong className="font-semibold text-onyx">
                ERP and payroll automation
              </strong>
              , creating a more structured flow between employee data, attendance,
              leave, approvals, payroll, and reporting.
            </p>
            <p>
              The goal is not simply to automate payroll calculations. It is to
              create a connected operating environment where the right information
              reaches the right people at the right stage of the workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-bloom py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <h2 className="max-w-3xl text-4xl leading-[1.05] text-onyx md:text-[3.2rem]">
            <SplitTitle>{"ERP & Payroll Automation for Your Business Workflows"}</SplitTitle>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-steel md:text-lg">
            We design and develop the capabilities your business actually needs,
            based on its workforce structure, payroll requirements, and operational
            workflows.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
            {capabilities.map((item, index) => (
              <article
                key={item.title}
                className={`glass-light rounded-[1.5rem] p-7 ${
                  index < 3 ? "lg:col-span-2" : "lg:col-span-3"
                }`}
              >
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

      {/* Section 3 */}
      <section className="bg-mesh overflow-hidden py-20 md:py-28">
        <div
          aria-hidden="true"
          className="field-orb -left-[24rem] top-10 hidden h-[52rem] w-[52rem] opacity-70 lg:block"
        />
        <div className="mx-auto grid w-full max-w-[1160px] gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr]">
          <h2 className="text-4xl leading-[1.05] text-white md:text-[3.2rem]">
            <SplitTitle>{"Built Around Your Payroll Rules and Operating Structure"}</SplitTitle>
          </h2>
          <div className="space-y-5 text-base leading-8 text-white/90 md:text-lg">
            <p>
              Every business handles payroll differently. Employee categories,
              branches, departments, attendance policies, salary structures,
              approval hierarchies, and reporting requirements can all affect how a
              system should work.
            </p>
            <p>
              Oglas AI develops{" "}
              <strong className="font-semibold text-white">
                custom ERP and payroll automation solutions
              </strong>{" "}
              around these requirements, helping businesses create workflows that
              match their operations rather than forcing teams to adapt to a fixed
              software structure.
            </p>
            <p>
              Whether the requirement involves multiple branches, different employee
              categories, customized approval flows, or specific reporting needs,
              the system can be structured around the organization&apos;s actual
              operating model.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <h2 className="max-w-3xl text-4xl leading-[1.05] text-onyx md:text-[3.2rem]">
            <SplitTitle>{"Connect ERP, Payroll, HR and Finance"}</SplitTitle>
          </h2>
          <div className="mt-6 max-w-3xl space-y-5 text-base leading-8 text-steel md:text-lg">
            <p>ERP and payroll should not operate as isolated systems.</p>
            <p>
              Oglas AI can connect relevant business processes and existing systems
              so information can move more efficiently between:
            </p>
          </div>

          <div className="glass-light mt-10 rounded-[1.75rem] p-6 md:p-9">
            <h3 className="sr-only">{flowChain.join(" → ")}</h3>
            <FlowChips items={flowChain} />
          </div>

          <div className="mt-10 max-w-3xl space-y-5 text-base leading-8 text-steel md:text-lg">
            <p>
              Where required, we can integrate with existing ERP, HR, attendance,
              finance, and internal business applications rather than requiring
              unnecessary system replacement.
            </p>
            <p>
              This connected approach can help reduce duplicate data entry, improve
              information flow between teams, and create a clearer operational view
              across workforce and payroll processes.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="bg-bloom py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <h2 className="max-w-3xl text-4xl leading-[1.05] text-onyx md:text-[3.2rem]">
            <SplitTitle>{"What ERP & Payroll Automation Can Improve"}</SplitTitle>
          </h2>

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

      {/* Section 6 */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <h2 className="max-w-3xl text-4xl leading-[1.05] text-onyx md:text-[3.2rem]">
            <SplitTitle>{"From Business Requirements to a Working ERP & Payroll System"}</SplitTitle>
          </h2>
          <div className="mt-6 max-w-3xl space-y-5 text-base leading-8 text-steel md:text-lg">
            <p>
              We start by understanding how your business currently manages
              employees, attendance, payroll, approvals, and reporting.
            </p>
            <p>
              We then map the required workflows, design the solution, integrate
              relevant systems, validate the processes, and deploy the system for
              ongoing use.
            </p>
          </div>

          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="glass-light rounded-[1.5rem] p-7"
              >
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
            <h3 className="text-xl font-light text-white">Process Flow</h3>
            <div className="mt-5">
              <p className="sr-only">{processFlow.join(" → ")}</p>
              <FlowChips items={processFlow} tone="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — FAQ */}
      <section className="bg-bloom py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-[1160px] gap-12 px-4 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-4xl leading-[1.05] text-onyx md:text-[3.2rem] lg:sticky lg:top-28 lg:self-start">
            <SplitTitle>{"Frequently Asked Questions"}</SplitTitle>
          </h2>
          <div className="grid gap-3">
            {erpPayrollFaqs.map((faq, index) => (
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
              <SplitTitle>{"Build ERP & Payroll Around the Way Your Business Works"}</SplitTitle>
            </h2>
            <ArrowRule className="mt-8 text-white/70" />
            <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-white/90 md:text-lg">
              <p>
                Bring payroll, employee operations, workflows, and business systems
                into a more connected environment with Oglas AI.
              </p>
              <p>
                Whether you need to improve existing payroll processes, connect
                workforce systems, or develop a customized ERP and payroll
                solution, we can help you define the right approach for your
                business.
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
