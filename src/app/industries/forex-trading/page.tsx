import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Bot,
  Building2,
  CheckCircle2,
  CreditCard,
  Download,
  Globe,
  Landmark,
  Layers,
  ShieldCheck,
  Trophy,
  Users,
  Workflow,
} from "lucide-react";
import { BgImage } from "@/components/bg-image";
import { SectionHeading } from "@/components/section-heading";
import { FaqStructuredData } from "@/components/structured-data";
import { staticPageSeo } from "@/content/seo";
import { SplitTitle } from "@/components/split-title";
import { HeroBackdrop } from "@/components/page-hero";

const seo = staticPageSeo["/industries/forex-trading"];

const brochure = {
  href: "/brochures/oglas-ai-forex-brochure.pdf",
  fileName: "Oglas-AI-Forex-Brochure.pdf",
  meta: "PDF · 27 pages · 6.8 MB",
};

export const metadata: Metadata = {
  title: {
    absolute: seo.title!,
  },
  description: seo.description,
  alternates: {
    canonical: "/industries/forex-trading",
  },
};

const layers = [
  {
    title: "Trading Intelligence",
    icon: Activity,
    items: ["Short-term prediction", "AI trading Copilot", "Controlled execution", "Risk intelligence"],
  },
  {
    title: "Client Automation",
    icon: Users,
    items: ["AI sales agent", "AI support agent", "AI KYC agent", "AI retention agent"],
  },
  {
    title: "Business Automation",
    icon: Workflow,
    items: ["Finance & reconciliation", "Management reporting", "Compliance Copilot", "Operations monitoring"],
  },
];

const tradingFeatures = [
  {
    title: "Global Market Intelligence",
    description:
      "Market sessions, hubs, economic events, and volatility on one screen — then ask the AI what changed.",
  },
  {
    title: "Event Impact Engine",
    description:
      "News, the economic calendar, market data, volatility, and sessions combined into a plain-English briefing on which instruments are exposed.",
  },
  {
    title: "Short-Term Prediction",
    description:
      "A probabilistic 5–15 minute forecast with confidence and the factors behind it. A probability, not a guarantee — live models are measured on real out-of-sample results.",
  },
  {
    title: "AI Trading Copilot",
    description:
      "Ask the chart why it moved, what changed, or what the key risks are. The Copilot explains, then prepares a trade setup sized from your own risk rules for review.",
  },
];

const executionSteps = ["Detect", "Propose", "Risk Guard", "Approve", "Execute"];

const modes = [
  { title: "Manual", description: "AI analyses. Your trader decides and executes." },
  { title: "Approval", description: "AI prepares the trade. A person approves it." },
  { title: "Controlled Auto", description: "AI executes only inside your rules and permissions." },
];

const controls = [
  "User consent",
  "Role permissions",
  "Risk limits",
  "Approval modes",
  "Audit logs",
  "Explainable outputs",
  "Human escalation",
  "Emergency stop",
];

const agentTeams = [
  {
    title: "Trading agents",
    agents: [
      ["Market Analyst", "Monitors markets and writes briefings"],
      ["Prediction", "Runs short-term forecasting models"],
      ["Execution", "Prepares or places trades within permissions"],
      ["Risk Guardian", "Checks every order against your rules"],
      ["Backtesting", "Tests and summarises strategies"],
    ],
  },
  {
    title: "Client agents",
    agents: [
      ["Sales", "Qualifies leads, follows up, books calls, updates CRM"],
      ["Support", "Answers routine questions and creates tickets"],
      ["KYC", "Guides onboarding, reads documents, flags gaps"],
      ["Retention", "Spots inactivity and triggers approved outreach"],
      ["Multilingual Voice", "Handles and summarises calls, updates CRM"],
    ],
  },
  {
    title: "Business agents",
    agents: [
      ["Compliance Copilot", "Reviews communications and flags issues"],
      ["Finance", "Reconciles payments and reports exceptions"],
      ["Reporting", "Turns raw data into management reports"],
      ["Call QA", "Transcribes, summarises, and checks calls"],
      ["Fraud Detection", "Finds unusual behaviour and ranks investigations"],
      ["Management AI", "Answers leadership questions in plain English"],
    ],
  },
];

const buildSteps = [
  { title: "Map", description: "We sit with your team and map one manual workflow." },
  { title: "Connect", description: "We connect your CRM, trading platform, WhatsApp, and payment tools." },
  { title: "Build", description: "We build the agent around your rules, data, and tone." },
  { title: "Test", description: "It runs in approval mode while your team checks every step." },
  { title: "Go Live", description: "Launched with permissions, audit logs, and a stop button." },
];

const sectors = [
  {
    title: "Forex & CFD Brokers",
    icon: Building2,
    question: "How are you currently handling lead follow-up, KYC, and customer support?",
    agents: ["Sales agent", "KYC agent", "Support agent", "Retention agent", "Trading Copilot"],
  },
  {
    title: "Fintech & Software Solutions",
    icon: Layers,
    question: "Does your platform already have an AI layer for your clients?",
    agents: [
      "AI assistant inside your platform",
      "AI sales module",
      "AI KYC workflows",
      "White-label AI agents",
      "Predictive analytics",
    ],
  },
  {
    title: "Liquidity Providers",
    icon: Landmark,
    question: "How are you monitoring exposure, anomalies, and operational data?",
    agents: [
      "Exposure monitoring agent",
      "Anomaly detection",
      "Trade surveillance",
      "Risk Copilot",
      "Institutional support agent",
    ],
  },
  {
    title: "Payment & PayTech",
    icon: CreditCard,
    question: "How much of your reconciliation and exception handling is still manual?",
    agents: [
      "Payment operations agent",
      "Reconciliation agent",
      "Fraud detection agent",
      "Payment status agent",
      "Support automation",
    ],
  },
  {
    title: "Prop Trading & Digital Assets",
    icon: Trophy,
    question: "How much of your trader onboarding, support, and risk monitoring is automated?",
    agents: [
      "Onboarding agent",
      "Risk Copilot",
      "Trader analytics agent",
      "Support agent",
      "Fraud & anomaly detection",
    ],
  },
];

const integrations = [
  "Trading platform",
  "CRM",
  "KYC provider",
  "Payment gateway",
  "Banking systems",
  "WhatsApp",
  "Email",
  "Telephony",
  "Accounting",
  "BI / data warehouse",
];

const brochurePreviews = [
  { src: "/images/forex/slide-prediction.jpg", alt: "Brochure page: short-term AI prediction for EUR/USD" },
  { src: "/images/forex/slide-control.jpg", alt: "Brochure page: AI permission center, risk rules, and stop button" },
  { src: "/images/forex/slide-agents.jpg", alt: "Brochure page: sixteen AI agents across three teams" },
  { src: "/images/forex/slide-journey.jpg", alt: "Brochure page: one connected client journey" },
];

const faqs = [
  {
    question: "What does Oglas AI build for Forex and trading companies?",
    answer:
      "Oglas AI builds custom AI agents, trading intelligence, and business automation for Forex and CFD brokers, fintech and software providers, liquidity providers, payment and PayTech companies, and prop trading firms. This can include sales, support, and KYC agents, market intelligence, short-term prediction models, compliance and finance automation, dashboards, and integrations with your existing systems.",
  },
  {
    question: "Can AI place trades automatically?",
    answer:
      "Only if you allow it, and only within the rules you set. Oglas AI systems support three modes — manual, approval, and controlled auto. Every AI-generated order passes a risk check against your limits for position size, daily loss, exposure, instruments, and trading hours, and there is always an emergency stop.",
  },
  {
    question: "Is the short-term prediction model guaranteed?",
    answer:
      "No. It is a probabilistic short-term forecast, not a guaranteed prediction. When deployed, models are evaluated on real, out-of-sample results, and people stay in control of trading decisions.",
  },
  {
    question: "Do we need to replace our trading platform or CRM?",
    answer:
      "No. Oglas AI works as an intelligence and integration layer on top of the systems you already run, such as your trading platform, CRM, KYC provider, payment gateway, WhatsApp, email, telephony, and accounting tools, where technically appropriate.",
  },
  {
    question: "How do we get started?",
    answer:
      "Start with one workflow your team still does manually — for example lead follow-up, KYC checks, support tickets, reconciliation, or reporting. We map it with your team, connect the relevant systems, build the agent, test it in approval mode, and then go live with permissions and audit logs.",
  },
];

function BrochureButton({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <a
      href={brochure.href}
      download={brochure.fileName}
      className={
        tone === "dark"
          ? "btn btn-light"
          : "btn btn-primary"
      }
    >
      <Download className="h-4 w-4" />
      Download the Brochure
    </a>
  );
}

export default function ForexTradingPage() {
  return (
    <>
      <FaqStructuredData faqs={faqs} />

      {/* HERO */}
      <section className="bg-mesh -mt-20 overflow-hidden pb-20 pt-36 text-white md:pb-28 md:pt-44">
        <HeroBackdrop />
        <div className="mx-auto grid w-full max-w-[1160px] items-center gap-12 px-4 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="Forex & Trading Industry"
              title="The AI Layer for Modern Forex"
              summary="Oglas AI builds AI agents, trading intelligence, and automation for brokers, fintechs, liquidity providers, PayTech companies, and prop firms — on top of the systems you already run, with people in control."
              tone="dark"
              headingLevel="h1"
            />
            <div className="mt-10 flex flex-wrap gap-3">
              <BrochureButton tone="dark" />
              <Link
                href="/contact"
                className="btn btn-outline-light"
              >
                Book a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-4 text-xs text-white/50">{brochure.meta}</p>
          </div>
          <a
            href={brochure.href}
            download={brochure.fileName}
            className="group relative block"
            aria-label="Download the Oglas AI Forex brochure"
          >
            <div className="absolute -right-4 -top-4 h-full w-full rounded-[1.5rem] border border-white/25 bg-white/8 backdrop-blur" />
            <BgImage
              src="/images/forex/brochure-cover.jpg"
              alt="Cover of the Oglas AI Forex brochure: The AI layer for modern Forex"
              width={16}
              height={9}
              className="relative w-full rounded-[1.5rem] border border-white/35 shadow-[0_40px_80px_-40px_rgba(0,0,80,0.9)] transition duration-500 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </section>

      {/* THREE LAYERS */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="One AI layer"
            title="Not a Chatbot. Not a Trading Bot. An AI Layer."
            summary="Most trading businesses already have the platform, the CRM, and the payment gateway. What they lack is something that connects them and takes the routine work off the team. Start with one part and connect the rest when you're ready."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {layers.map((layer) => (
              <article key={layer.title} className="rounded-2xl border border-brand/10 bg-pearl p-7">
                <layer.icon className="h-8 w-8 text-emerald" />
                <h3 className="mt-6 text-xl font-semibold text-onyx">{layer.title}</h3>
                <div className="mt-5 grid gap-2">
                  {layer.items.map((item) => (
                    <span key={item} className="flex items-center gap-2 text-sm text-steel">
                      <CheckCircle2 className="h-4 w-4 text-emerald" />
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRADING INTELLIGENCE */}
      <section className="bg-bloom py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="Trading intelligence"
            title="See the Market. Understand the Move."
            summary="Market data, news, and AI combined into information a trading desk can act on — with human judgement in the loop."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {tradingFeatures.map((feature, index) => (
              <article key={feature.title} className="rounded-2xl glass-light p-7">
                <p className="text-xs font-semibold uppercase tracking-wide text-champagne">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-onyx">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-steel">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTROLLED EXECUTION */}
      <section className="bg-mesh overflow-hidden py-20 text-white">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="AI you control"
            title="AI Can Act — Within Rules You Define."
            summary="Every AI-generated trade idea passes a risk guard before anything happens. You choose how much the AI is allowed to do."
            tone="dark"
          />
          <ol className="mt-12 grid gap-3 sm:grid-cols-5">
            {executionSteps.map((step, index) => (
              <li
                key={step}
                className={`rounded-lg border p-5 ${
                  step === "Risk Guard"
                    ? "border-emerald-light/60 bg-emerald/30"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <span className="text-xs font-semibold text-emerald-light">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-base font-semibold uppercase tracking-wide">{step}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {modes.map((mode) => (
              <article key={mode.title} className="rounded-lg border border-white/10 bg-graphite p-6">
                <h3 className="text-lg font-semibold">{mode.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{mode.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {controls.map((control) => (
              <span
                key={control}
                className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm text-white/80"
              >
                <ShieldCheck className="h-4 w-4 text-emerald-light" />
                {control}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* AI AGENTS */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="AI agents we build"
            title="AI Handles the Routine. People Handle the Decisions."
            summary="Custom AI agents for the trading desk, for your clients, and for the back office — built around your rules and connected to your systems."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {agentTeams.map((team) => (
              <article key={team.title} className="rounded-2xl border border-brand/10 bg-pearl p-7">
                <div className="flex items-center gap-3">
                  <Bot className="h-6 w-6 text-emerald" />
                  <h3 className="text-lg font-semibold text-onyx">{team.title}</h3>
                </div>
                <div className="mt-5 grid">
                  {team.agents.map(([name, description]) => (
                    <div key={name} className="border-t border-black/10 py-3">
                      <p className="text-sm font-semibold text-onyx">{name}</p>
                      <p className="mt-1 text-sm leading-6 text-steel">{description}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE BUILD YOUR AGENT */}
      <section className="bg-bloom py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="How we build your agent"
            title="From One Manual Task to a Working AI Agent"
            summary="We start small: one workflow, not a big project."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {buildSteps.map((step, index) => (
              <article key={step.title} className="rounded-2xl glass-light p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-champagne">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-onyx">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-steel">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="Who we help"
            title="Built for Every Part of the Trading Industry"
            summary="The AI agents and systems we build for each type of company."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <article
                key={sector.title}
                className="flex flex-col rounded-2xl border border-brand/10 bg-pearl p-7"
              >
                <sector.icon className="h-8 w-8 text-emerald" />
                <h3 className="mt-6 text-xl font-semibold text-onyx">{sector.title}</h3>
                <div className="mt-5 grid gap-2">
                  {sector.agents.map((agent) => (
                    <span key={agent} className="flex items-center gap-2 text-sm text-steel">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald" />
                      {agent}
                    </span>
                  ))}
                </div>
                <p className="mt-6 border-t border-black/10 pt-5 text-sm italic leading-7 text-onyx">
                  &ldquo;{sector.question}&rdquo;
                </p>
              </article>
            ))}
            <article className="bg-mesh flex flex-col justify-between overflow-hidden rounded-[1.75rem] p-8 text-white">
              <div>
                <Globe className="h-8 w-8 text-emerald-light" />
                <h3 className="mt-6 text-xl font-semibold">Works With What You Already Run</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {integrations.map((item) => (
                    <span key={item} className="rounded-md border border-white/15 px-2.5 py-1.5 text-xs text-white/80">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-white/65">No rip-and-replace.</p>
            </article>
          </div>
        </div>
      </section>

      {/* BROCHURE */}
      <section className="bg-bloom py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Brochure"
              title="The Full Picture in 27 Pages"
              summary="Market intelligence, controlled AI execution, the agents we build, and what we deliver for each type of trading company."
            />
            <div className="shrink-0">
              <BrochureButton />
              <p className="mt-3 text-xs text-steel">{brochure.meta}</p>
            </div>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {brochurePreviews.map((preview) => (
              <a
                key={preview.src}
                href={brochure.href}
                download={brochure.fileName}
                className="group block overflow-hidden rounded-2xl glass-light"
              >
                <BgImage
                  src={preview.src}
                  alt={preview.alt}
                  width={16}
                  height={9}
                  className="w-full transition duration-300 group-hover:scale-[1.03]"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
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

      {/* FINAL CTA */}
      <section className="bg-mesh overflow-hidden py-20 text-white">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <p className="pill-glass">
            Let&apos;s start with one workflow
          </p>
          <h2 className="mt-6 max-w-3xl text-4xl leading-[1.05] md:text-[3.2rem]">
            <SplitTitle>{"Give us one workflow your team still does manually."}</SplitTitle>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            We&apos;ll map it with your team, connect your tools, and show you how AI can run it —
            with the controls your business needs.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-emerald px-6 py-3 text-sm font-semibold text-onyx transition hover:bg-emerald-light"
            >
              Book a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={brochure.href}
              download={brochure.fileName}
              className="btn btn-outline-light"
            >
              <Download className="h-4 w-4" />
              Download the Brochure
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
