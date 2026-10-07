import {
  Activity,
  ArrowRight,
  BarChart3,
  BellRing,
  Building2,
  Cloud,
  ClipboardCheck,
  Compass,
  Cpu,
  Database,
  Factory,
  FileText,
  Gauge,
  Hammer,
  Handshake,
  HardHat,
  KeyRound,
  LifeBuoy,
  Lock,
  MessageSquareText,
  Monitor,
  Network,
  Plus,
  Rocket,
  ShieldCheck,
  Ship,
  Siren,
  Sparkles,
  Thermometer,
  TrendingUp,
  UsersRound,
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
const slug = "industrial-iot-integration";

type Card = { icon: LucideIcon; title: string; copy: string };

const capabilities: Card[] = [
  {
    icon: Cpu,
    title: "Device Integration",
    copy: "Connect your hardware through its API, Modbus, MQTT, HTTP, serial gateways or vendor SDKs, so different brands and device types report into one system.",
  },
  {
    icon: Gauge,
    title: "Live Monitoring Dashboard",
    copy: "See every site, device and reading on one screen, updating in real time, with clear status for each location.",
  },
  {
    icon: Siren,
    title: "Automated Alerting",
    copy: "Rule-based risk zones (green, yellow, orange, red) automatically trigger warning lights, intercom announcements, email and SMS when conditions change.",
  },
  {
    icon: Monitor,
    title: "Control Room & Site Displays",
    copy: "Full-screen displays for control rooms, canteens and rest areas, with a screen manager for headings, banners and safety messages.",
  },
  {
    icon: FileText,
    title: "Reports & Audit Trail",
    copy: "Live and historic reports, charts, time-in-zone summaries and Excel or PDF export, backed by a log of every reading, alert and settings change.",
  },
  {
    icon: UsersRound,
    title: "Users, Roles & System Health",
    copy: "Role-based access for administrators, safety teams, managers and viewers, with alerts when a device goes offline and checks that flag faulty sensor readings.",
  },
];

const diagram: { title: string; items: string[] }[] = [
  {
    title: "Field devices",
    items: ["Sensors", "Weather stations", "Gateways"],
  },
  {
    title: "Oglas AI integration layer",
    items: ["Collector (runs 24/7)", "Database (full history)", "Alert engine (rules)", "Integrations"],
  },
  {
    title: "You",
    items: ["Live dashboard", "Control room displays", "Email & SMS", "Lights & intercom"],
  },
];

const howItWorks: Card[] = [
  {
    icon: Activity,
    title: "Collect",
    copy: "A collector reads every device around the clock. If a device goes quiet, the system treats it as an alarm, not as “all clear”.",
  },
  {
    icon: ClipboardCheck,
    title: "Check",
    copy: "Every reading is checked for impossible values, so a broken sensor is flagged instead of trusted.",
  },
  {
    icon: ShieldCheck,
    title: "Decide",
    copy: "Clear, auditable rules decide the risk zone. The system is quick to warn and slow to relax, so alarms do not flicker on and off.",
  },
  {
    icon: BellRing,
    title: "Act",
    copy: "The right people and devices are triggered automatically: warning lights, announcements, email and SMS.",
  },
  {
    icon: Database,
    title: "Record",
    copy: "Every reading, alert and settings change is logged, so you can always show what happened and when.",
  },
];

const assurances: Card[] = [
  {
    icon: Cloud,
    title: "Deploy Where Your Data Must Stay",
    copy: "Run the system on your private cloud or on-premise servers so data stays inside your network, as a fully offline installation for sites without internet access, or on cloud hosting where that suits the project.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Decisions You Can Explain",
    copy: "Alerts are driven by clear rules, never a black box, so every alarm can be explained. Screens clearly show “No Live Data” when a device drops, so old readings are never mistaken for live ones, and no other part of the system is allowed to block a safety alert.",
  },
  {
    icon: Lock,
    title: "Enterprise-Ready",
    copy: "Role-based access, audit logs and encrypted connections, designed to support client security reviews and penetration testing. Separate test (UAT) and production environments with documented installation, backup and rollback, and integration with your email gateway, SMS gateway, company login (SSO) and business intelligence (BI) tools.",
  },
];

const fits: Card[] = [
  {
    icon: Thermometer,
    title: "Heat Stress & Worker Safety",
    copy: "TWL, Heat Index and WBGT monitoring with automatic work and rest warnings for outdoor teams.",
  },
  {
    icon: Factory,
    title: "Oil, Gas & Petrochemical Sites",
    copy: "Environmental and area monitoring across plants, yards and process areas.",
  },
  {
    icon: HardHat,
    title: "Construction & Infrastructure",
    copy: "Site conditions and outdoor workforce safety monitoring.",
  },
  {
    icon: Ship,
    title: "Ports, Jetties & Logistics",
    copy: "Weather, wind and site condition monitoring for marine and logistics operations.",
  },
  {
    icon: Building2,
    title: "Facilities & Smart Buildings",
    copy: "Temperature, air quality, occupancy and alarm monitoring across buildings and facilities.",
  },
  {
    icon: Network,
    title: "Utilities & Manufacturing",
    copy: "Equipment and environment monitoring for plants and production lines.",
  },
];

const aiFeatures: Card[] = [
  {
    icon: Activity,
    title: "Sensor Health Checks",
    copy: "Spot stuck, drifting or impossible readings before they lead to a wrong decision.",
  },
  {
    icon: BarChart3,
    title: "Daily Summaries",
    copy: "Plain-language summaries such as “Yesterday Zone A spent 4 hours 20 minutes in orange and 35 minutes in red.”",
  },
  {
    icon: TrendingUp,
    title: "Short-Term Forecasts",
    copy: "Early warnings such as “Zone A is expected to reach red around 12:30”, so teams can plan ahead instead of reacting late.",
  },
  {
    icon: MessageSquareText,
    title: "Ask Your Data",
    copy: "Ask plain-language questions about your monitoring history and get answers without building a report.",
  },
];

const steps: Card[] = [
  {
    icon: Compass,
    title: "Discover",
    copy: "Map your devices, sites, people, alert rules and reporting needs.",
  },
  {
    icon: FileText,
    title: "Specify",
    copy: "Agree a signed specification so scope, price and timeline are clear.",
  },
  {
    icon: Hammer,
    title: "Build & Simulate",
    copy: "Build and demonstrate the full system on simulated data, before your hardware even arrives.",
  },
  {
    icon: Cpu,
    title: "Connect",
    copy: "Bench-test with your hardware, then integrate the devices on site.",
  },
  {
    icon: ClipboardCheck,
    title: "Test",
    copy: "Your team tests the system in a separate UAT environment and signs off.",
  },
  {
    icon: Rocket,
    title: "Go Live",
    copy: "Install in production and train your users and administrators, with full documentation.",
  },
  {
    icon: LifeBuoy,
    title: "Support",
    copy: "Ongoing updates, monitoring and agreed response times through a multi-year maintenance contract (AMC).",
  },
];

const processFlow = steps.map((step) => step.title);

const partnerPoints: Card[] = [
  {
    icon: Handshake,
    title: "White-Label or Co-Branded Delivery",
    copy: "Deliver the software under your brand or jointly with Oglas AI.",
  },
  {
    icon: KeyRound,
    title: "Per-Site and Per-Device Licensing",
    copy: "Each deployment is licensed and tracked, delivered as compiled, licence-protected packages.",
  },
  {
    icon: LifeBuoy,
    title: "Software Support Handled",
    copy: "Oglas AI supports the software while you focus on the hardware and the client relationship.",
  },
];

export const industrialIotFaqs = [
  {
    question: "What is industrial IoT integration?",
    answer:
      "Industrial IoT integration connects field devices such as sensors, weather stations, gateways, warning lights and intercoms into one software system. It collects readings automatically, applies alert rules, notifies the right people and keeps a full history for reporting and audits.",
  },
  {
    question: "Can you work with our existing hardware brand?",
    answer:
      "Yes. If a device shares its data through an API, a network protocol such as Modbus or MQTT, a gateway or a vendor SDK, Oglas AI can integrate it. We start from the manufacturer’s documentation.",
  },
  {
    question: "Does the system need an internet connection?",
    answer:
      "No. It can run entirely inside your private network or as a fully offline installation. Cloud hosting is also available where it suits the project.",
  },
  {
    question: "Can we keep our current dashboard design?",
    answer:
      "Yes. Where your team already uses a familiar interface, it can be recreated so there is little or no retraining.",
  },
  {
    question: "How long does an industrial IoT integration project take?",
    answer:
      "Typically 3 to 6 months from requirements to go-live, depending on hardware delivery and site readiness.",
  },
  {
    question: "Who owns the data?",
    answer: "You do. The data stays on your infrastructure.",
  },
  {
    question: "What support is available after go-live?",
    answer:
      "Oglas AI offers multi-year maintenance contracts with defined response times, regular updates and a yearly system check before the critical season.",
  },
  {
    question: "Does Oglas AI provide industrial IoT integration in Dubai, Abu Dhabi and the UAE?",
    answer:
      "Yes. Oglas AI designs and develops industrial IoT and safety monitoring software for businesses in Dubai, Abu Dhabi and across the UAE, including private-cloud, on-premise and fully offline deployments.",
  },
];

const metaDescription = serviceSeo[slug].description;

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
        name: "Industrial IoT Integration",
        item: `${baseUrl}/${slug}`,
      },
    ],
  };
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/${slug}#service`,
    name: "Industrial IoT & Safety Monitoring Integration",
    serviceType: "Industrial IoT Integration",
    description: metaDescription,
    provider: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Oglas AI",
      url: baseUrl,
    },
    areaServed: [
      "Dubai, United Arab Emirates",
      "Abu Dhabi, United Arab Emirates",
      "United Arab Emirates",
    ],
    url: `${baseUrl}/${slug}`,
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

function FlowChips({ items }: { items: string[] }) {
  return (
    <ol aria-hidden="true" className="flex flex-wrap items-center gap-x-2 gap-y-3">
      {items.map((item, index) => (
        <li key={item} className="flex items-center gap-2">
          <span className="rounded-full border border-white/35 bg-white/12 px-4 py-2 text-sm font-medium text-white">
            {item}
          </span>
          {index < items.length - 1 ? (
            <ArrowRight className="h-4 w-4 shrink-0 text-white/70" />
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function SolidIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#2f4cf6,#0c29df)] text-white shadow-[0_10px_20px_-10px_rgba(12,41,223,0.9)]">
      <Icon className="h-5 w-5" />
    </span>
  );
}

function OutlineIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-brand/20 bg-brand/8 text-brand">
      <Icon className="h-5 w-5" />
    </span>
  );
}

const sectionTitle = "max-w-3xl text-4xl leading-[1.05] text-onyx md:text-[3.2rem]";
const bodyCopy = "text-base leading-8 text-steel md:text-lg";

export function IndustrialIotPage() {
  return (
    <>
      <StructuredData />
      <FaqStructuredData faqs={industrialIotFaqs} />

      {/* Hero */}
      <section className="bg-mesh -mt-20 overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44">
        <HeroBackdrop />
        <div className="mx-auto grid w-full max-w-[1160px] items-center gap-12 px-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rise">
            <h1 className="text-[2.6rem] text-white sm:text-5xl md:text-6xl lg:text-[4.1rem]">
              <SplitTitle at={2}>{"Industrial IoT & Safety Monitoring"}</SplitTitle>
            </h1>
            <ArrowRule className="mt-8 text-white/70" />
            <p className="lead-serif mt-8 max-w-2xl text-2xl leading-9 text-white md:text-[1.7rem] md:leading-10">
              Your devices already collect the data. We make it act.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
              Oglas AI builds the software that connects your field hardware
              (sensors, weather stations, gateways, intercoms, warning lights and
              display screens) to one live system for businesses in Dubai, Abu
              Dhabi and across the UAE. It watches every reading, alerts the right
              people the moment something changes, and keeps a full record of
              what happened.
            </p>
            <Link href="/contact" className="btn btn-light mt-9">
              Book a Technical Call
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
            <SplitTitle>{"From Clipboards and Phone Calls to One Connected System"}</SplitTitle>
          </h2>
          <div className={`space-y-5 ${bodyCopy}`}>
            <p>
              Many industrial and outdoor sites still rely on manual readings.
              Someone walks around with a handheld meter and writes the numbers
              down, warnings reach people late or not at all, and every device
              comes with its own app that does not talk to the others. When an
              auditor asks what happened at a specific time on a specific day,
              there is often no clear answer.
            </p>
            <p>
              Oglas AI replaces this with{" "}
              <strong className="font-semibold text-onyx">industrial IoT integration</strong>:
              one connected system where device readings are collected
              automatically, checked, turned into clear risk levels, and acted on
              without waiting for someone to notice.
            </p>
            <p>
              The goal is not simply to show sensor numbers on a screen. It is to
              make sure the right people and devices respond at the right moment,
              and that every reading and alert is recorded.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-bloom py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <h2 className={sectionTitle}>
            <SplitTitle>{"What We Build"}</SplitTitle>
          </h2>
          <p className={`mt-6 max-w-3xl ${bodyCopy}`}>
            We design and develop the software layer around your devices, sites
            and safety rules, whatever brand of hardware you use.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <article key={item.title} className="glass-light rounded-[1.5rem] p-7">
                <SolidIcon icon={item.icon} />
                <h3 className="mt-6 text-xl font-normal leading-snug text-onyx">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-steel">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <h2 className={sectionTitle}>
            <SplitTitle>{"How It Works"}</SplitTitle>
          </h2>
          <p className={`mt-6 max-w-3xl ${bodyCopy}`}>
            Field devices send their readings to the Oglas AI integration layer,
            which stores the history, applies your alert rules and passes the
            results to the people and equipment that need them.
          </p>

          {/* Flow diagram: devices → integration layer → you */}
          <figure className="mt-12">
            <div className="grid items-stretch gap-3 lg:grid-cols-[1fr_auto_1.15fr_auto_1fr]">
              {diagram.map((column, index) => (
                <div key={column.title} className="contents">
                  <div
                    className={`rounded-[1.5rem] p-6 md:p-7 ${
                      index === 1 ? "bg-mesh overflow-hidden text-white" : "glass-light"
                    }`}
                  >
                    <p
                      className={`text-sm font-medium uppercase tracking-[0.12em] ${
                        index === 1 ? "text-white/80" : "text-brand"
                      }`}
                    >
                      {column.title}
                    </p>
                    <ul className="mt-5 grid gap-2.5">
                      {column.items.map((item) => (
                        <li
                          key={item}
                          className={`rounded-full border px-4 py-2 text-sm font-medium ${
                            index === 1
                              ? "border-white/35 bg-white/12 text-white"
                              : "border-brand/15 bg-white text-onyx"
                          }`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {index < diagram.length - 1 ? (
                    <div aria-hidden="true" className="grid place-items-center py-1 lg:py-0">
                      <ArrowRight className="h-5 w-5 rotate-90 text-brand lg:rotate-0" />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
            <figcaption className="sr-only">
              Field devices send readings to the Oglas AI integration layer, which
              sends results to your dashboard, displays, email, SMS, lights and
              intercom.
            </figcaption>
          </figure>

          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
            {howItWorks.map((step, index) => (
              <li
                key={step.title}
                className={`glass-light rounded-[1.5rem] p-7 ${
                  index < 3 ? "lg:col-span-2" : "lg:col-span-3"
                }`}
              >
                <div className="flex items-center justify-between">
                  <OutlineIcon icon={step.icon} />
                  <span className="tabular text-sm font-medium tracking-[0.12em] text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-normal text-onyx">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-steel">{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Section 5 */}
      <section className="bg-mesh overflow-hidden py-20 md:py-28">
        <div
          aria-hidden="true"
          className="field-orb -left-[24rem] top-10 hidden h-[52rem] w-[52rem] opacity-70 lg:block"
        />
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <h2 className="max-w-3xl text-4xl leading-[1.05] text-white md:text-[3.2rem]">
            <SplitTitle>{"Built for Safety-Critical Environments"}</SplitTitle>
          </h2>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {assurances.map((item) => (
              <article key={item.title} className="glass-dim rounded-[1.5rem] p-7">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-white/35 bg-white/12 text-white">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-xl font-normal leading-snug text-white">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-white/85">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className="bg-bloom py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <h2 className={sectionTitle}>
            <SplitTitle>{"Where Industrial IoT Integration Fits"}</SplitTitle>
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {fits.map((item) => (
              <article key={item.title} className="glass-light rounded-[1.5rem] p-7">
                <OutlineIcon icon={item.icon} />
                <h3 className="mt-6 text-xl font-normal leading-snug text-onyx">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-steel">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <h2 className={sectionTitle}>
            <SplitTitle>{"AI on Top of Your Device Data"}</SplitTitle>
          </h2>
          <p className={`mt-6 max-w-3xl ${bodyCopy}`}>
            Once your device data flows cleanly into one system, AI can be added
            as an optional layer to help your team see problems earlier.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {aiFeatures.map((item) => (
              <article key={item.title} className="glass-light rounded-[1.5rem] p-7">
                <SolidIcon icon={item.icon} />
                <h3 className="mt-6 text-xl font-normal leading-snug text-onyx">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-steel">{item.copy}</p>
              </article>
            ))}
          </div>

          <p className="mt-8 flex items-start gap-3 text-[15px] leading-7 text-steel">
            <Sparkles className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
            AI supports your team. Safety alerts always stay on transparent,
            auditable rules.
          </p>
        </div>
      </section>

      {/* Section 8 */}
      <section className="bg-bloom py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <h2 className={sectionTitle}>
            <SplitTitle>{"From Site Survey to Go-Live and Support"}</SplitTitle>
          </h2>
          <p className={`mt-6 max-w-3xl ${bodyCopy}`}>
            We start by understanding your devices, sites, people and alert rules.
            We then agree the scope in writing, build and demonstrate the system
            on simulated data, connect your real hardware, test it with your team
            and support it after go-live.
          </p>

          <div className="bg-mesh mt-10 overflow-hidden rounded-[1.75rem] p-7 md:p-9">
            <h3 className="text-xl font-light text-white">Process</h3>
            <div className="mt-5">
              <p className="sr-only">{processFlow.join(" → ")}</p>
              <FlowChips items={processFlow} />
            </div>
          </div>

          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="glass-light rounded-[1.5rem] p-7">
                <div className="flex items-center justify-between">
                  <SolidIcon icon={step.icon} />
                  <span className="tabular text-sm font-medium tracking-[0.12em] text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-normal text-onyx">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-steel">{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Section 9 */}
      <section className="bg-mesh overflow-hidden py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-[1160px] gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-4xl leading-[1.05] text-white md:text-[3.2rem]">
              <SplitTitle>{"For System Integrators & Hardware Partners"}</SplitTitle>
            </h2>
            <p className="mt-6 text-base leading-8 text-white/90 md:text-lg">
              Telecom, security and hardware integrators often win the hardware
              contract but need a partner for the software. Oglas AI can act as
              your software team.
            </p>
          </div>
          <div className="grid gap-4">
            {partnerPoints.map((item) => (
              <article key={item.title} className="glass-dim flex gap-5 rounded-[1.5rem] p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/35 bg-white/12 text-white">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-xl font-normal leading-snug text-white">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-white/85">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10 — FAQ */}
      <section className="bg-bloom py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-[1160px] gap-12 px-4 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-4xl leading-[1.05] text-onyx md:text-[3.2rem] lg:sticky lg:top-28 lg:self-start">
            <SplitTitle>{"Frequently Asked Questions"}</SplitTitle>
          </h2>
          <div className="grid gap-3">
            {industrialIotFaqs.map((faq, index) => (
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
              <SplitTitle>{"Let’s Connect Your Devices"}</SplitTitle>
            </h2>
            <ArrowRule className="mt-8 text-white/70" />
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
              Tell us what hardware you have, what you need to see, and who needs
              to be alerted. We will come back with an integration plan.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <Link href="/contact" className="btn btn-light">
              Book a Technical Call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
