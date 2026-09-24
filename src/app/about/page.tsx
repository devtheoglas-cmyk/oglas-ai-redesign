import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Building2,
  CircuitBoard,
  Compass,
  Factory,
  Globe2,
  Handshake,
  Headphones,
  HeartPulse,
  LineChart,
  MapPin,
  Megaphone,
  Network,
  Quote,
  Rocket,
  ShieldCheck,
  Store,
  Target,
  Truck,
  UsersRound,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRule } from "@/components/arrow-rule";
import { BgImage } from "@/components/bg-image";
import { HeroBackdrop } from "@/components/page-hero";
import { SplitTitle } from "@/components/split-title";
import { FaqStructuredData } from "@/components/structured-data";
import { company } from "@/content/site";
import { staticPageSeo } from "@/content/seo";

export const revalidate = 60;

const seo = staticPageSeo["/about"];
const baseUrl = "https://www.oglasai.com";

export const metadata: Metadata = {
  title: { absolute: seo.title! },
  description: seo.description,
  alternates: { canonical: "/about" },
};

/* ---------- content ---------- */

type IconItem = {
  index: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const whatWeDo: (IconItem & { image: string })[] = [
  {
    index: "01",
    title: "Custom Software Development",
    description:
      "Custom business software and internal systems designed around your workflows, users, data, approvals, and operational requirements.",
    icon: CircuitBoard,
    image: "/images/about/wwd1.jpg",
  },
  {
    index: "02",
    title: "Business Automation",
    description:
      "Workflow automation solutions that reduce repetitive work across payroll, approvals, documents, reporting, operations, and customer processes.",
    icon: Workflow,
    image: "/images/about/wwd2.jpg",
  },
  {
    index: "03",
    title: "Practical AI",
    description:
      "Practical AI solutions that solve specific business problems — from computer vision and document processing to dashboards, assistants, and decision intelligence.",
    icon: BrainCircuit,
    image: "/images/about/wwd3.jpg",
  },
  {
    index: "04",
    title: "Integrated Business Systems",
    description:
      "Connected systems that bring data and processes together across ERP, HR, payroll, CRM, operations, and other business applications.",
    icon: Network,
    image: "/images/about/wwd4.jpg",
  },
];

const approach: IconItem[] = [
  {
    index: "01",
    title: "Understand Before We Build",
    description:
      "We start by understanding your existing workflows, business rules, people, systems, and pain points before recommending a solution.",
    icon: Compass,
  },
  {
    index: "02",
    title: "Build What You Need",
    description:
      "We focus on the processes that matter instead of adding technology simply because it is available.",
    icon: Target,
  },
  {
    index: "03",
    title: "Make It Practical",
    description:
      "AI and automation should create measurable value — saving time, improving visibility, reducing errors, or helping teams make better decisions.",
    icon: BrainCircuit,
  },
  {
    index: "04",
    title: "Improve Over Time",
    description:
      "A business changes. Your software should be able to evolve with new workflows, users, integrations, and operational requirements.",
    icon: Rocket,
  },
];

const howWeWork: IconItem[] = [
  {
    index: "01",
    title: "Discover",
    description:
      "We map your workflows, business rules, users, systems, integrations, and operational challenges to understand what actually needs to change.",
    icon: Compass,
  },
  {
    index: "02",
    title: "Design",
    description:
      "We translate those requirements into practical software architecture, user experiences, data flows, integrations, and automation opportunities.",
    icon: Workflow,
  },
  {
    index: "03",
    title: "Build",
    description:
      "We develop the system in focused stages, with regular reviews, testing, and feedback throughout the process.",
    icon: CircuitBoard,
  },
  {
    index: "04",
    title: "Improve",
    description:
      "Once the system is in use, we help refine workflows, expand functionality, integrate new requirements, and support the business as it grows.",
    icon: LineChart,
  },
];

const basedFeatures = [
  { title: "Strong Local Understanding", icon: BarChart3 },
  { title: "Built for Global Operations", icon: Globe2 },
  { title: "Reliable Partnership", icon: Handshake },
  { title: "Long-Term Support", icon: Headphones },
];

const whoWeWorkWith: IconItem[] = [
  {
    index: "01",
    title: "Manpower & Staffing",
    description:
      "Payroll, attendance, employee self-service, onboarding, deployment tracking, and workforce operations for distributed teams.",
    icon: UsersRound,
  },
  {
    index: "02",
    title: "Manufacturing & Industrial",
    description:
      "Production workflows, inventory visibility, maintenance tracking, quality processes, reporting, and AI-powered inspection for industrial operations.",
    icon: Factory,
  },
  {
    index: "03",
    title: "Security & Surveillance",
    description:
      "Camera intelligence, incident management, guard operations, monitoring dashboards, alerts, and operational visibility for security teams.",
    icon: ShieldCheck,
  },
  {
    index: "04",
    title: "Trading & Distribution",
    description:
      "Order management, inventory workflows, supplier coordination, delivery tracking, approvals, and business reporting.",
    icon: Truck,
  },
  {
    index: "05",
    title: "Healthcare",
    description:
      "Patient workflows, appointment operations, staff scheduling, document processing, internal requests, and reporting systems.",
    icon: HeartPulse,
  },
  {
    index: "06",
    title: "Marketing Agencies",
    description:
      "Lead routing, campaign workflows, client reporting, CRM automation, content operations, and performance dashboards.",
    icon: Megaphone,
  },
  {
    index: "07",
    title: "Facility Management",
    description:
      "Work orders, field staff coordination, attendance, asset checks, service workflows, and client reporting.",
    icon: Building2,
  },
  {
    index: "08",
    title: "Retail & Multi-branch",
    description:
      "Branch operations, staff scheduling, stock movement, sales reporting, approvals, and workflow standardization across locations.",
    icon: Store,
  },
];

const stats = [
  {
    value: "300",
    unit: "minutes",
    label: "HR time recovered per day",
    description:
      "An employee self-service portal reduced repetitive HR queries and helped recover approximately 300 minutes of HR time every day.",
    icon: BarChart3,
  },
  {
    value: "<10",
    unit: "seconds",
    label: "Payroll processing",
    description:
      "Payroll automation with ESS integration reduced a processing workflow to less than 10 seconds.",
    icon: Rocket,
  },
  {
    value: "16–48",
    unit: "hours",
    label: "Estimated staff-hours recovered",
    description:
      "The same payroll workflow recovered an estimated 16–48 staff-hours per payroll cycle.",
    icon: UsersRound,
  },
];

const whyOglas: IconItem[] = [
  {
    index: "01",
    title: "Business Before Technology",
    description:
      "We start with the way your business works rather than starting with a particular technology.",
    icon: Building2,
  },
  {
    index: "02",
    title: "Practical Over Complicated",
    description:
      "We focus on solutions that teams can actually use, maintain, and improve.",
    icon: Target,
  },
  {
    index: "03",
    title: "Built Around Your Workflows",
    description:
      "Your approvals, roles, processes, integrations, and business rules shape the system.",
    icon: Workflow,
  },
  {
    index: "04",
    title: "Long-Term Thinking",
    description:
      "We design systems that can evolve as your business, teams, and operational needs change.",
    icon: LineChart,
  },
];

const faqs = [
  {
    question: "What is Oglas AI?",
    answer:
      "Oglas AI is a UAE-based custom software and practical AI company that builds business systems, automation solutions, and AI-powered applications around the way organizations actually work.",
  },
  {
    question: "What does Oglas AI do?",
    answer:
      "Oglas AI develops custom software solutions, ERP and payroll systems, workflow automation, employee self-service portals, computer vision solutions, AI document processing systems, AI assistants, dashboards, and integrated business systems.",
  },
  {
    question: "Where is Oglas AI based in the UAE?",
    answer:
      "Oglas AI is based in Dubai, United Arab Emirates, and serves UAE businesses while remaining globally available for organizations that need custom software, automation, and practical AI solutions.",
  },
  {
    question: "What industries does Oglas AI work with?",
    answer:
      "Oglas AI works with businesses across manpower and staffing, manufacturing and industrial operations, security and surveillance, trading and distribution, healthcare, marketing, facility management, and retail.",
  },
  {
    question:
      "Does Oglas AI build custom software or provide off-the-shelf software?",
    answer:
      "Oglas AI focuses on custom software development and integrated business solutions. Systems are designed around a company's workflows, users, business rules, data, approvals, and existing technology rather than forcing the business into a fixed software structure.",
  },
  {
    question: "What AI solutions does Oglas AI provide?",
    answer:
      "Oglas AI develops practical AI solutions including computer vision, intelligent document processing, AI dashboards and decision intelligence, AI assistants and chatbots, and AI-powered workflow automation.",
  },
  {
    question:
      "Can Oglas AI integrate with our existing ERP, CRM, or business systems?",
    answer:
      "Yes. Oglas AI can design integrations between new and existing systems so that information and workflows can move between ERP, CRM, HR, payroll, operational, and other business applications.",
  },
  {
    question: "How does Oglas AI approach a software development project?",
    answer:
      "Oglas AI follows a discovery-first approach: understanding the business and its workflows, designing the appropriate system, developing it in focused stages, and continuously improving the solution as business requirements evolve.",
  },
  {
    question: "When should a business consider custom software?",
    answer:
      "Custom software can make sense when existing tools cannot support important business processes, teams rely heavily on manual work or spreadsheets, systems do not integrate properly, or the business needs workflows and functionality that off-the-shelf software cannot provide.",
  },
  {
    question: "Does Oglas AI work with businesses outside the UAE?",
    answer:
      "Yes. Oglas AI is UAE-based and globally available, supporting businesses that need custom software, automation, and practical AI solutions across different markets.",
  },
];

/* ---------- JSON-LD (SEO / AEO / GEO) ---------- */

function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${baseUrl}/about#aboutpage`,
  url: `${baseUrl}/about`,
  name: seo.title,
  description: seo.description,
  isPartOf: { "@id": `${baseUrl}/#website` },
  about: { "@id": `${baseUrl}/#organization` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${baseUrl}/about`,
      },
    ],
  },
};

/* ---------- small building blocks ---------- */

function Eyebrow({
  num,
  children,
  tone = "light",
}: {
  num: string;
  children: string;
  tone?: "light" | "dark";
}) {
  return (
    <p className={tone === "dark" ? "pill-glass" : "pill"}>
      {num} — {children}
    </p>
  );
}

function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="grid h-12 w-12 place-items-center rounded-full bg-[linear-gradient(135deg,#2f4cf6,#0c29df)] text-white shadow-[0_10px_20px_-10px_rgba(12,41,223,0.9)]">
      <Icon className="h-5 w-5" />
    </span>
  );
}

/* ---------- page ---------- */

export default function AboutPage() {
  return (
    <>
      <FaqStructuredData faqs={faqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(aboutPageSchema) }}
      />

      {/* SECTION 1 — Hero */}
      <section className="bg-mesh -mt-20 overflow-hidden">
        <HeroBackdrop />
        <div className="mx-auto grid w-full max-w-[1160px] gap-12 px-4 pb-20 pt-36 lg:grid-cols-[1fr_1fr] lg:items-center lg:pb-28 lg:pt-44">
          <div className="rise">
            <Eyebrow num="01" tone="dark">
              ABOUT OGLAS AI
            </Eyebrow>
            <h1 className="mt-7 max-w-xl text-[2.6rem] text-white sm:text-5xl md:text-6xl lg:text-[4rem]">
              <SplitTitle>{"Technology Built Around How Businesses Actually Work"}</SplitTitle>
            </h1>
            <ArrowRule className="mt-8 text-white/70" />
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/90">
              Oglas AI is a Dubai-based custom software and practical AI company
              helping businesses replace disconnected tools, repetitive
              processes, and manual work with software designed around the way
              they operate.
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/80">
              From ERP and payroll systems to workflow automation, computer
              vision, intelligent document processing, and AI-powered business
              applications, we provide custom software development and practical
              AI solutions built around real operational needs.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="btn btn-light"
              >
                Talk to Oglas AI
                <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-white/80">
                <Globe2 className="h-4 w-4 text-white/70" />
                UAE-based · Globally available
              </span>
            </div>
          </div>
          <BgImage
            src="/images/about/hero.jpg"
            alt="Oglas AI office in Dubai showing custom software and practical AI service areas"
            width={850}
            height={920}
            className="rise w-full rounded-[2rem] border border-white/35 shadow-[0_40px_80px_-40px_rgba(0,0,80,0.8)] [animation-delay:120ms]"
          />
        </div>
      </section>

      {/* SECTION 2 — Who We Are */}
      <section className="bg-white py-20">
        <div className="mx-auto grid w-full max-w-[1160px] items-center gap-12 px-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Eyebrow num="02">WHO WE ARE</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.05] text-onyx md:text-[3.2rem]">
              <SplitTitle>{"Software Should Fit the Business — Not the Other Way Around"}</SplitTitle>
            </h2>
            <div className="mt-7 grid gap-5">
              <p className="text-base leading-8 text-steel">
                Every business has its own processes, approval structures,
                people, data, and operational challenges. Yet many companies are
                expected to adapt those workflows around software that was never
                designed for them.
              </p>
              <p className="text-base leading-8 text-steel">
                Oglas AI takes a different approach. We understand how a business
                works first, then design and build the technology around it.
              </p>
              <p className="text-base leading-8 text-steel">
                Our work sits at the intersection of custom software development,
                business automation, and practical AI — helping UAE and global
                organizations improve everyday operations without adding
                unnecessary technological complexity.
              </p>
            </div>
            <div className="glass-light mt-9 flex items-start gap-4 rounded-[1.5rem] px-6 py-6">
              <Quote className="mt-1 h-6 w-6 shrink-0 fill-brand/10 text-brand" />
              <p className="lead-serif text-[1.35rem] leading-8 text-onyx">
                Understand the business. Build around it. Improve it
                continuously.
              </p>
            </div>
          </div>
          <BgImage
            src="/images/about/who.jpg"
            alt="Oglas AI team mapping a business workflow before building software"
            width={844}
            height={960}
            className="w-full rounded-2xl border border-black/10"
          />
        </div>
      </section>

      {/* SECTION 3 — What We Do */}
      <section className="bg-mesh overflow-hidden py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <Eyebrow num="03" tone="dark">
            WHAT WE DO
          </Eyebrow>
          <h2 className="mt-6 max-w-3xl text-4xl leading-[1.05] text-white md:text-[3.2rem]">
            <SplitTitle>{"From Business Problems to Working Systems"}</SplitTitle>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/85 md:text-lg">
            We build software for businesses that have outgrown spreadsheets,
            disconnected applications, repetitive manual processes, or
            off-the-shelf tools that don&apos;t quite fit.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whatWeDo.map((item) => (
              <article
                key={item.title}
                className="glass flex flex-col overflow-hidden rounded-[1.5rem]"
              >
                <BgImage
                  src={item.image}
                  alt={`${item.title} interface`}
                  width={344}
                  height={232}
                  className="h-40 w-full"
                />
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-center justify-between">
                    <IconBadge icon={item.icon} />
                    <span className="text-sm font-semibold text-champagne">
                      {item.index}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-onyx">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-steel">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Our Approach */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Eyebrow num="04">OUR APPROACH</Eyebrow>
              <h2 className="mt-6 text-4xl leading-[1.05] text-onyx md:text-[3.2rem]">
                <SplitTitle>{"Technology Should Solve a Business Problem First"}</SplitTitle>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-steel md:text-lg">
                The best technology starts with a clear understanding of the
                problem it needs to solve. We focus on building practical systems
                that fit your business, create measurable value, and continue to
                evolve as your needs change.
              </p>
            </div>
            <BgImage
              src="/images/about/approach.jpg"
              alt="Oglas AI team reviewing workflow designs and dashboards"
              width={710}
              height={440}
              className="w-full rounded-2xl border border-black/10"
            />
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {approach.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-5 rounded-2xl border border-brand/10 bg-pearl p-6"
              >
                <div className="flex items-center gap-3">
                  <IconBadge icon={item.icon} />
                  <span className="text-lg font-semibold text-champagne">
                    {item.index}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-onyx">
                    {item.title}
                  </h3>
                  <span className="mt-2 block h-0.5 w-8 bg-champagne" />
                </div>
                <p className="text-sm leading-7 text-steel">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — How We Work */}
      <section className="bg-mesh overflow-hidden py-24 md:py-32">
        <Image
          src="/images/brand/chrome-brain.webp"
          alt=""
          aria-hidden="true"
          width={736}
          height={736}
          sizes="30rem"
          className="fade-top pointer-events-none absolute bottom-0 left-0 -z-10 hidden w-[28rem] select-none opacity-90 lg:block"
        />
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <Eyebrow num="05" tone="dark">
            HOW WE WORK
          </Eyebrow>
          <h2 className="mt-6 max-w-3xl text-4xl leading-[1.05] text-white md:text-[3.2rem]">
            <SplitTitle>{"From Discovery to Long-Term Improvement"}</SplitTitle>
          </h2>
          <div className="mt-12 grid gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {howWeWork.map((item, i) => (
              <div key={item.title} className="relative">
                <div className="glass flex h-full flex-col gap-5 rounded-[1.5rem] p-6">
                  <span className="text-lg font-semibold text-champagne">
                    {item.index}
                  </span>
                  <IconBadge icon={item.icon} />
                  <div>
                    <h3 className="text-lg font-semibold text-onyx">
                      {item.title}
                    </h3>
                    <span className="mt-2 block h-0.5 w-8 bg-champagne" />
                  </div>
                  <p className="text-sm leading-7 text-steel">
                    {item.description}
                  </p>
                </div>
                {i < howWeWork.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 place-items-center rounded-full bg-white text-brand shadow-[0_8px_18px_-8px_rgba(0,0,80,0.7)] lg:grid"
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — Where We're Based */}
      <section className="bg-white py-20">
        <div className="mx-auto grid w-full max-w-[1160px] items-center gap-12 px-4 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <Eyebrow num="06">WHERE WE&apos;RE BASED</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.05] text-onyx md:text-[3.2rem]">
              <SplitTitle>{"UAE-Based. Built for Global Business"}</SplitTitle>
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-steel">
              Oglas AI is a{" "}
              <strong className="font-semibold text-onyx">
                Dubai-based custom software and AI solutions company
              </strong>
              , serving businesses that need custom software, automation, and
              practical AI solutions.
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-steel">
              Our UAE base gives us a strong understanding of the region&apos;s
              business environment while our approach and technology are designed
              to support companies operating across markets.
            </p>
            <div className="mt-8 flex items-center gap-4 rounded-lg bg-pearl px-6 py-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-champagne text-white">
                <MapPin className="h-6 w-6" />
              </span>
              <p className="text-xl font-semibold leading-7 text-onyx">
                Dubai, United Arab Emirates
              </p>
            </div>
            <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-champagne/40 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-steel">
              <Globe2 className="h-4 w-4 text-champagne" />
              UAE-based · Globally available
            </span>
          </div>
          <div className="overflow-hidden rounded-2xl border border-black/10">
            <BgImage
              src="/images/about/based.jpg"
              alt="Dubai skyline with the Burj Khalifa representing Oglas AI's UAE base and global reach"
              width={750}
              height={938}
              className="w-full"
            />
            <div className="bg-mesh grid grid-cols-2 gap-4 p-6 sm:grid-cols-4">
              {basedFeatures.map((f) => (
                <div key={f.title} className="flex flex-col items-center gap-2 text-center">
                  <f.icon className="h-5 w-5 text-champagne" />
                  <span className="text-xs font-medium leading-5 text-white/80">
                    {f.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Who We Work With */}
      <section className="bg-bloom py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <div className="grid items-start gap-8 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <Eyebrow num="07">WHO WE WORK WITH</Eyebrow>
              <h2 className="mt-6 max-w-2xl text-4xl leading-[1.05] text-onyx md:text-[3.2rem]">
                <SplitTitle>{"Software Built for Businesses With Real Operational Complexity"}</SplitTitle>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-steel">
                We work with businesses where people, processes, data, and
                business software systems need to work together. Our solutions are designed around
                the operational requirements of each industry, rather than
                forcing teams into generic workflows.
              </p>
            </div>
            <BgImage
              src="/images/about/based.jpg"
              alt="Dubai business district served by Oglas AI"
              width={750}
              height={420}
              className="hidden h-44 w-full rounded-2xl border border-black/10 lg:block"
            />
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whoWeWorkWith.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-4 rounded-2xl glass-light p-6"
              >
                <div className="flex items-center gap-3">
                  <IconBadge icon={item.icon} />
                  <span className="text-lg font-semibold text-champagne">
                    {item.index}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-onyx">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-steel">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex items-center gap-4 rounded-2xl glass-light px-6 py-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-champagne/15 text-champagne">
              <UsersRound className="h-5 w-5" />
            </span>
            <p className="text-base font-semibold text-onyx">
              Different industries. Different workflows.{" "}
              <span className="text-champagne">One business-first approach.</span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8 — Experience in Practice */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Eyebrow num="08">EXPERIENCE IN PRACTICE</Eyebrow>
              <h2 className="mt-6 text-4xl leading-[1.05] text-onyx md:text-[3.2rem]">
                <SplitTitle>{"We Measure Software by What It Changes"}</SplitTitle>
              </h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-steel">
                Good software isn&apos;t measured by how impressive it looks. It
                is measured by what happens after people start using it.
              </p>
              <p className="mt-5 max-w-xl text-base leading-8 text-steel">
                Our projects focus on practical outcomes such as reducing manual
                work, shortening processing time, improving operational
                visibility, connecting disconnected workflows, and giving teams
                better access to information.
              </p>
            </div>
            <BgImage
              src="/images/about/experience.jpg"
              alt="HR and payroll dashboard built by Oglas AI"
              width={780}
              height={458}
              className="w-full rounded-2xl border border-black/10"
            />
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-4 rounded-2xl border border-brand/10 bg-pearl p-7"
              >
                <div className="flex items-center gap-4">
                  <IconBadge icon={stat.icon} />
                  <p className="text-4xl font-semibold text-champagne">
                    {stat.value}
                    <span className="ml-2 text-base font-semibold uppercase tracking-wide">
                      {stat.unit}
                    </span>
                  </p>
                </div>
                <h3 className="text-lg font-semibold text-onyx">{stat.label}</h3>
                <p className="text-sm leading-7 text-steel">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — Why Oglas AI */}
      <section className="bg-bloom py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Eyebrow num="09">WHY OGLAS AI</Eyebrow>
              <h2 className="mt-6 text-4xl leading-[1.05] text-onyx md:text-[3.2rem]">
                <SplitTitle>{"A Business-First Approach to Technology"}</SplitTitle>
              </h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-steel">
                We believe technology should support the way your business works,
                not force your team to work around it. That means understanding
                your processes first, then building practical software and AI
                systems that create value today and can evolve with your business.
              </p>
            </div>
            <BgImage
              src="/images/about/why.jpg"
              alt="Workflow automation dashboard showing processes automated by Oglas AI"
              width={724}
              height={460}
              className="w-full rounded-2xl border border-black/10"
            />
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whyOglas.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-5 rounded-2xl glass-light p-6"
              >
                <IconBadge icon={item.icon} />
                <div>
                  <h3 className="text-lg font-semibold text-onyx">
                    {item.title}
                  </h3>
                  <span className="mt-2 block h-0.5 w-8 bg-champagne" />
                </div>
                <p className="text-sm leading-7 text-steel">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-start gap-3 rounded-2xl glass-light px-6 py-5 sm:flex-row sm:items-center">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#2f4cf6,#0c29df)] text-white">
              <Rocket className="h-5 w-5" />
            </span>
            <p className="text-base font-semibold text-onyx">
              Business-first thinking. Practical solutions. Long-term
              partnership.{" "}
              <span className="text-champagne">
                That&apos;s the Oglas AI approach.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 10 — FAQ */}
      <section className="bg-bloom py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <Eyebrow num="10">FREQUENTLY ASKED QUESTIONS</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-4xl leading-[1.05] text-onyx md:text-[3.2rem]">
            <SplitTitle>{"Questions Businesses Ask About Oglas AI"}</SplitTitle>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-steel md:text-lg">
            Answers to common questions about Oglas AI, our custom software
            development approach, practical AI solutions, and the businesses we
            work with.
          </p>
          <div className="mt-12 grid gap-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="faq-item glass-light group p-6 md:px-8"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[17px] leading-7 text-onyx">
                  {faq.question}
                  <span aria-hidden="true" className="faq-toggle mt-0.5 text-lg leading-none">+</span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-steel">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 — Final CTA */}
      <section className="bg-mesh overflow-hidden py-24 md:py-32">
        <HeroBackdrop />
        <div className="mx-auto grid w-full max-w-[1160px] items-center gap-12 px-4 lg:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow num="11" tone="dark">
              FINAL CTA
            </Eyebrow>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-champagne">
              Start With the Business Problem
            </p>
            <h2 className="mt-5 text-4xl leading-[1.05] text-white md:text-[3.6rem]">
              <SplitTitle>{"Tell Us What You Want to Improve"}</SplitTitle>
            </h2>
            <ArrowRule className="mt-8 text-white/70" />
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/85">
              Whether you&apos;re replacing manual processes, connecting
              disconnected systems, exploring AI, or building a new business
              application, we&apos;ll start by understanding how your business
              works.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="btn btn-light"
              >
                Book a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#services"
                className="btn btn-outline-light"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <BgImage
            src="/images/about/cta.jpg"
            alt="Oglas AI workspace in Dubai with a laptop and branded notebook"
            width={700}
            height={818}
            className="w-full rounded-[2rem] border border-white/35 shadow-[0_40px_80px_-40px_rgba(0,0,80,0.8)]"
          />
        </div>
        <p className="mx-auto mt-10 w-full max-w-[1160px] px-4 text-sm text-white/70">
          {company.name} · {company.location}
        </p>
      </section>
    </>
  );
}
