import {
  Activity,
  ArrowRight,
  BarChart3,
  BellRing,
  Building2,
  Check,
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
import type { ReactNode } from "react";
import { ArrowRule } from "@/components/arrow-rule";
import { HeroBackdrop } from "@/components/page-hero";
import { SplitTitle } from "@/components/split-title";
import { FaqStructuredData } from "@/components/structured-data";
import { serviceSeo } from "@/content/seo";

const baseUrl = "https://www.oglas-ai.com";
const slug = "industrial-iot-integration";

/** A card's copy is one or more paragraphs; paragraphs may hold <strong> keywords. */
type Card = { icon: LucideIcon; title: string; copy: ReactNode[]; list?: string[] };

const capabilities: Card[] = [
  {
    icon: Cpu,
    title: "Device Integration",
    copy: [
      "Connect sensors, weather stations, gateways and other industrial devices through APIs, Modbus, MQTT, HTTP, serial gateways or vendor SDKs.",
      "Our IoT device integration approach allows different hardware brands and device types to report into one connected system.",
    ],
  },
  {
    icon: Gauge,
    title: "Live Monitoring Dashboard",
    copy: [
      "Monitor sites, devices and readings from one industrial IoT dashboard.",
      "See real-time device status, locations, readings and operational conditions through a clear monitoring interface.",
    ],
  },
  {
    icon: Siren,
    title: "Automated Alerting",
    copy: [
      "Define transparent rules that turn readings into risk levels such as green, yellow, orange and red.",
      "Automated alerts can trigger warning lights, intercom announcements, email or SMS notifications when defined conditions are reached.",
    ],
  },
  {
    icon: Monitor,
    title: "Control Room & Site Displays",
    copy: [
      "Give control rooms and site teams a clear view of current conditions.",
      "Manage full-screen displays for control rooms, canteens, rest areas and other operational locations with readings, banners and safety messages.",
    ],
  },
  {
    icon: FileText,
    title: "Reports & Audit Trail",
    copy: [
      "Access live and historical industrial monitoring data through reports, charts and time-in-zone summaries.",
      "Export data to Excel or PDF and maintain a record of readings, alerts and settings changes for reporting and audits.",
    ],
  },
  {
    icon: UsersRound,
    title: "Users, Roles & System Health",
    copy: [
      "Manage access for administrators, safety teams, managers and viewers through role-based permissions.",
      "The system can also identify offline devices and potentially faulty or abnormal sensor readings so teams are not relying on incomplete data.",
    ],
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
    copy: [
      "The collector reads data from connected devices around the clock.",
      "A device that stops communicating can be treated as an alarm condition rather than automatically assuming everything is normal.",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Check",
    copy: [
      "Each reading is checked for impossible or abnormal values.",
      "If a sensor appears to be malfunctioning, it can be flagged rather than allowing unreliable data to be treated as valid.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Decide",
    copy: [
      "Clear, auditable rules determine the applicable risk zone.",
      "The system can be configured to warn quickly and relax conditions more slowly, helping avoid unnecessary alert fluctuations.",
    ],
  },
  {
    icon: BellRing,
    title: "Act",
    copy: [
      "The right people or connected devices can be triggered automatically.",
      "This can include warning lights, announcements, email notifications, SMS and other configured actions.",
    ],
  },
  {
    icon: Database,
    title: "Record",
    copy: [
      "Readings, alerts and settings changes are recorded to create a traceable history of system activity.",
    ],
  },
];

const assurances: Card[] = [
  {
    icon: Cloud,
    title: "Deploy Where Your Data Must Stay",
    copy: [
      <>
        Deploy your <strong className="font-semibold text-white">industrial IoT solution</strong>{" "}
        using private cloud, on-premise infrastructure or fully offline environments where
        required.
      </>,
      "Cloud deployment can also be used where it is appropriate for the site and operational requirements.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Safety Decisions You Can Explain",
    copy: [
      "Safety alerts are driven by clear, auditable rules rather than opaque decision-making.",
      <>
        The system can distinguish between live and stale readings and show{" "}
        <strong className="font-semibold text-white">{"“No Live Data”"}</strong> when a
        device stops communicating.
      </>,
      "A failure in another part of the system should not prevent the configured safety alert from being generated.",
    ],
  },
  {
    icon: Lock,
    title: "Enterprise-Ready",
    copy: ["Support operational requirements such as:"],
    list: [
      "Role-based access",
      "Audit logs",
      "Encrypted connections",
      "Security reviews",
      "Penetration testing",
      "Separate UAT and production environments",
      "Documented installation",
      "Backup and rollback procedures",
      "Email and SMS gateways",
      "SSO",
      "BI tool integrations",
    ],
  },
];

function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-onyx">{children}</strong>;
}

const fits: Card[] = [
  {
    icon: Thermometer,
    title: "Heat Stress & Worker Safety",
    copy: [
      <>
        Monitor <Strong>worker safety</Strong> conditions using TWL, Heat Index and WBGT
        measurements.
      </>,
      "Automated monitoring can support work/rest warnings for outdoor teams based on configured safety rules.",
    ],
  },
  {
    icon: Factory,
    title: "Oil, Gas & Petrochemical Sites",
    copy: [
      <>
        Monitor environmental and area conditions across plants, yards and process areas using
        connected <Strong>industrial monitoring systems</Strong>.
      </>,
    ],
  },
  {
    icon: HardHat,
    title: "Construction & Infrastructure",
    copy: [
      <>
        Connect site monitoring devices to support <Strong>construction safety monitoring</Strong>,
        environmental monitoring and outdoor workforce safety.
      </>,
    ],
  },
  {
    icon: Ship,
    title: "Ports, Jetties & Logistics",
    copy: ["Monitor weather, wind and site conditions across marine and logistics environments."],
  },
  {
    icon: Building2,
    title: "Facilities & Smart Buildings",
    copy: [
      "Monitor temperature, air quality, occupancy and alarm conditions across buildings and facilities.",
    ],
  },
  {
    icon: Network,
    title: "Utilities & Manufacturing",
    copy: [
      <>
        Connect equipment and environmental monitoring across plants and production lines through
        integrated <Strong>industrial IoT systems</Strong>.
      </>,
    ],
  },
];

const aiFeatures: Card[] = [
  {
    icon: Activity,
    title: "Sensor Health Checks",
    copy: ["Identify potentially stuck, drifting or impossible readings across connected devices."],
  },
  {
    icon: BarChart3,
    title: "Daily Summaries",
    copy: [
      "Turn monitoring data into plain-language summaries, such as the amount of time a zone spent in orange or red conditions.",
    ],
  },
  {
    icon: TrendingUp,
    title: "Short-Term Forecasts",
    copy: [
      "Use available historical and live data to identify potential near-term changes, such as a zone that may reach a defined risk level around a particular time.",
    ],
  },
  {
    icon: MessageSquareText,
    title: "Ask Your Data",
    copy: [
      "Allow teams to ask questions in plain language about their monitoring history and operational data.",
    ],
  },
];

const steps: Card[] = [
  {
    icon: Compass,
    title: "Discover",
    copy: ["Map your devices, sites, users, alert rules and reporting requirements."],
  },
  {
    icon: FileText,
    title: "Specify",
    copy: [
      "Create a documented specification covering the agreed scope, requirements, pricing and timeline.",
    ],
  },
  {
    icon: Hammer,
    title: "Build & Simulate",
    copy: [
      "Build and demonstrate the system using simulated data before connecting the final hardware.",
    ],
  },
  {
    icon: Cpu,
    title: "Connect",
    copy: [
      "Bench-test the hardware and integrate devices on site.",
      <>
        This can include existing equipment through supported protocols and interfaces such as{" "}
        <Strong>Modbus, MQTT, APIs and gateways</Strong>.
      </>,
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Test",
    copy: [
      "Your team tests the system in a separate UAT environment before production deployment and sign-off.",
    ],
  },
  {
    icon: Rocket,
    title: "Go Live",
    copy: [
      "Deploy the production system, train users and administrators and provide the required documentation.",
    ],
  },
  {
    icon: LifeBuoy,
    title: "Support",
    copy: [
      "Continue with system updates, monitoring and agreed support response times through an ongoing maintenance arrangement where required.",
    ],
  },
];

const processFlow = steps.map((step) => step.title);

const partnerPoints: Card[] = [
  {
    icon: Handshake,
    title: "White-Label or Co-Branded Delivery",
    copy: [
      "Deliver the software under your partner brand or through a joint Oglas AI and partner solution.",
    ],
  },
  {
    icon: KeyRound,
    title: "Per-Site and Per-Device Licensing",
    copy: ["Support licensing and deployment management at site and device level where required."],
  },
  {
    icon: LifeBuoy,
    title: "Software Support Handled",
    copy: [
      "Oglas AI can manage the software side while the hardware partner continues to focus on the hardware and client relationship.",
    ],
  },
];

export const industrialIotFaqs = [
  {
    question: "What are Industrial IoT solutions?",
    answer:
      "Industrial IoT solutions connect industrial devices such as sensors, weather stations, gateways, warning lights and intercoms to software systems that collect data, monitor conditions, apply rules, trigger alerts and maintain historical records.",
  },
  {
    question: "Can Oglas AI integrate with our existing industrial hardware?",
    answer:
      "Yes. Oglas AI can integrate with existing hardware where the devices provide supported interfaces such as APIs, Modbus, MQTT, gateways or vendor SDKs. The integration process starts by reviewing the available manufacturer documentation and device capabilities.",
  },
  {
    question: "Does an Industrial IoT monitoring system need an internet connection?",
    answer:
      "Not necessarily. Depending on the requirements, the system can operate on a private network, on-premise infrastructure or in a fully offline environment. Cloud deployment is also possible where appropriate.",
  },
  {
    question: "How long does an Industrial IoT integration project take?",
    answer:
      "Project timelines depend on the hardware, number of sites, integration requirements and site readiness. The existing project framework indicates that some deployments can take approximately 3–6 months from requirements to go-live, depending on these factors.",
  },
  {
    question: "What support is available after an Industrial IoT system goes live?",
    answer:
      "Oglas AI can provide ongoing software support, updates, monitoring and agreed response times through maintenance arrangements. Support can also include periodic system reviews and preparation ahead of critical operating periods.",
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
    name: "Industrial IoT & Safety Monitoring",
    serviceType: "Industrial IoT Solutions",
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

/** Card body: each entry in `copy` becomes its own paragraph. */
function CardCopy({ copy, className }: { copy: ReactNode[]; className: string }) {
  return (
    <div className={`mt-3 space-y-3 text-[15px] leading-7 ${className}`}>
      {copy.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
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
            <div className="mt-6 max-w-2xl space-y-4 text-base leading-8 text-white/85 md:text-lg">
              <p>
                Oglas AI builds industrial IoT solutions that connect field hardware such as
                sensors, weather stations, gateways, intercoms, warning lights and display screens
                to one live system.
              </p>
              <p>
                Our industrial IoT integration services bring device data, monitoring, safety
                rules, alerts and reporting together for businesses in Dubai, Abu Dhabi and across
                the UAE.
              </p>
              <p>
                The system watches every reading, identifies changes, alerts the right people or
                equipment and keeps a complete record of what happened.
              </p>
            </div>
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
              Manual readings, handheld meters, delayed warnings, disconnected device applications
              and unclear audit history can make industrial monitoring difficult to manage.
            </p>
            <p>
              Oglas AI replaces fragmented processes with connected industrial IoT monitoring
              solutions.
            </p>
            <p>
              Readings are collected automatically, checked against defined rules and turned into
              clear risk levels. The right people and devices can then respond without waiting for
              manual intervention.
            </p>
            <p>The goal is not simply to display sensor numbers.</p>
            <p>
              It is to create an industrial monitoring system where the right people or equipment
              respond at the right moment, while every reading and alert is recorded for
              operational visibility and auditability.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-bloom py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <h2 className={sectionTitle}>
            <SplitTitle>{"What We Build with Industrial IoT Solutions"}</SplitTitle>
          </h2>
          <div className={`mt-6 max-w-3xl space-y-4 ${bodyCopy}`}>
            <p>We build the software layer around your devices, sites and safety rules.</p>
            <p>
              Whether you are working with existing hardware or introducing new devices, our
              industrial IoT systems can bring different equipment and data sources into one
              operational environment.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <article key={item.title} className="glass-light rounded-[1.5rem] p-7">
                <SolidIcon icon={item.icon} />
                <h3 className="mt-6 text-xl font-normal leading-snug text-onyx">{item.title}</h3>
                <CardCopy copy={item.copy} className="text-steel" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <h2 className={sectionTitle}>
            <SplitTitle>{"How Industrial IoT Monitoring Works"}</SplitTitle>
          </h2>
          <div className={`mt-6 max-w-3xl space-y-4 ${bodyCopy}`}>
            <p>Field devices send readings to the Oglas AI integration layer.</p>
            <p>
              The industrial IoT software collects and stores the data, applies defined alert rules
              and passes the results to people and connected equipment.
            </p>
          </div>

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
              Field devices send readings to the Oglas AI integration layer, which sends results to
              your dashboard, displays, email, SMS, lights and intercom.
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
                <OutlineIcon icon={step.icon} />
                <h3 className="mt-6 text-xl font-normal text-onyx">
                  <span className="tabular text-brand">{String(index + 1).padStart(2, "0")}</span>{" "}
                  — {step.title}
                </h3>
                <CardCopy copy={step.copy} className="text-steel" />
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
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-8 text-white/90 md:text-lg">
            <p>Industrial IoT can do more than connect devices.</p>
            <p>
              For industrial safety monitoring, the system needs to behave predictably when data
              becomes unavailable, conditions change or a device stops responding.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {assurances.map((item) => (
              <article key={item.title} className="glass-dim rounded-[1.5rem] p-7">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-white/35 bg-white/12 text-white">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-xl font-normal leading-snug text-white">{item.title}</h3>
                <CardCopy copy={item.copy} className="text-white/85" />
                {item.list ? (
                  <ul className="mt-4 grid gap-2 text-[15px] leading-6 text-white/85">
                    {item.list.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-white" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : null}
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
          <p className={`mt-6 max-w-3xl ${bodyCopy}`}>
            Our <Strong>industrial IoT integration services</Strong> can support different
            operational environments where connected monitoring, safety alerts and historical data
            are important.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {fits.map((item) => (
              <article key={item.title} className="glass-light rounded-[1.5rem] p-7">
                <OutlineIcon icon={item.icon} />
                <h3 className="mt-6 text-xl font-normal leading-snug text-onyx">{item.title}</h3>
                <CardCopy copy={item.copy} className="text-steel" />
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
            Once your device data flows into a reliable{" "}
            <Strong>industrial IoT monitoring system</Strong>, AI can become an optional layer to
            help teams identify patterns and potential issues earlier.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {aiFeatures.map((item) => (
              <article key={item.title} className="glass-light rounded-[1.5rem] p-7">
                <SolidIcon icon={item.icon} />
                <h3 className="mt-6 text-xl font-normal leading-snug text-onyx">{item.title}</h3>
                <CardCopy copy={item.copy} className="text-steel" />
              </article>
            ))}
          </div>

          <p className="mt-8 flex items-start gap-3 text-[15px] font-semibold leading-7 text-onyx">
            <Sparkles className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
            AI supports your team. Safety alerts always stay on transparent, auditable rules.
          </p>
        </div>
      </section>

      {/* Section 8 */}
      <section className="bg-bloom py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <h2 className={sectionTitle}>
            <SplitTitle>{"From Site Survey to Go-Live and Support"}</SplitTitle>
          </h2>
          <div className={`mt-6 max-w-3xl space-y-4 ${bodyCopy}`}>
            <p>
              Every <Strong>industrial IoT solution</Strong> starts with understanding the devices,
              sites, people and safety rules involved.
            </p>
            <p>
              We define the requirements, build and simulate the system, connect the hardware, test
              it with your team and support the deployment after go-live.
            </p>
          </div>

          <div className="bg-mesh mt-10 overflow-hidden rounded-[1.75rem] p-7 md:p-9">
            <p className="text-xl font-light text-white">Process</p>
            <div className="mt-5">
              <p className="sr-only">{processFlow.join(" → ")}</p>
              <FlowChips items={processFlow} />
            </div>
          </div>

          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="glass-light rounded-[1.5rem] p-7">
                <SolidIcon icon={step.icon} />
                <h3 className="mt-6 text-xl font-normal text-onyx">
                  <span className="tabular text-brand">{String(index + 1).padStart(2, "0")}</span>{" "}
                  — {step.title}
                </h3>
                <CardCopy copy={step.copy} className="text-steel" />
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
              If you are a telecom, security or hardware integrator that has won a device or
              hardware project but needs a software team, Oglas AI can act as your{" "}
              <strong className="font-semibold text-white">industrial IoT software partner</strong>.
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
                  <CardCopy copy={item.copy} className="text-white/85" />
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
            <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-white/90 md:text-lg">
              <p>
                Tell us what hardware you have, what you need to monitor, what your teams need to
                see and who needs to be alerted.
              </p>
              <p>
                We will come back with an industrial IoT integration plan designed around your
                sites, devices and operational requirements.
              </p>
            </div>
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
