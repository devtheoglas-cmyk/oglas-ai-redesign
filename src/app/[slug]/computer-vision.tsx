import {
  Activity,
  ArrowRight,
  BarChart3,
  Camera,
  CheckCircle2,
  Eye,
  Network,
  ScanLine,
  Settings2,
  ShieldCheck,
  Target,
} from "lucide-react";
import { FaqStructuredData } from "@/components/structured-data";
import { HeroBackdrop } from "@/components/page-hero";
import { SplitTitle } from "@/components/split-title";
import { TalkToOglas } from "@/components/talk-modal";

const capabilities = [
  ["Object and Activity Detection", "Identify relevant objects and activities within supported visual inputs according to defined detection requirements. Teams can focus on selected events instead of relying solely on manual observation.", Eye],
  ["Safety and Compliance Monitoring", "Identify configured visual conditions and generate relevant alerts where the required detection capability is available. Human oversight and existing safety procedures remain important.", ShieldCheck],
  ["Visual Inspection Workflows", "Support defined inspection processes where the relevant characteristics can be identified from visual inputs, evaluated against the actual inspection requirements before implementation.", ScanLine],
  ["Camera Analytics and Dashboards", "Organise visual information into structured outputs that support alerts, reports and dashboards, helping teams review relevant events without treating every input equally.", BarChart3],
] as const;

const improvements = [
  "Faster detection of relevant events",
  "More consistent monitoring",
  "Reduced manual review where automation is suitable",
  "Clearer operational visibility",
  "More structured visual reporting",
];

const process = [
  ["Discover", "Understand the business objective, monitoring process, available visual inputs and operational challenges."],
  ["Map", "Define detection requirements, expected outputs, users and the actions that should follow a relevant event."],
  ["Design", "Set the computer vision approach, workflow rules, integration requirements and reporting needs."],
  ["Build", "Develop and configure the required computer vision components and supporting workflows."],
  ["Validate", "Test the solution against relevant scenarios and operating conditions before deployment."],
  ["Deploy & Improve", "Deploy the validated solution and refine detection rules as conditions or requirements evolve."],
] as const;

const faqs = [
  { question: "What is computer vision?", answer: "Computer vision is a field of artificial intelligence that enables computer systems to analyse visual inputs, such as images and video, to identify objects, activities or relevant visual conditions. Businesses can use it to support monitoring, visual inspection, alerts and operational reporting." },
  { question: "What can computer vision solutions be used for in business?", answer: "Computer vision can support object and activity detection, safety and compliance monitoring, visual inspection workflows and camera analytics. The right capabilities depend on the business use case, available visual inputs and the requirements established for the solution." },
  { question: "Can computer vision solutions work with existing camera infrastructure?", answer: "In many cases, computer vision solutions can be designed to work with existing camera infrastructure. Feasibility depends on camera compatibility, video quality, access, connectivity and processing requirements. The existing environment should be assessed first." },
  { question: "Can computer vision integrate with dashboards and business workflows?", answer: "Yes. Computer vision workflows can provide relevant detections, alerts and structured visual information to compatible dashboards or business processes. Available integration options depend on the systems involved and the required workflow." },
  { question: "Does Oglas AI provide computer vision services in Dubai and the UAE?", answer: "Oglas AI develops custom software and AI solutions for businesses in Dubai and across the UAE. Its Intelligent Computer Vision offering focuses on converting visual inputs into useful business signals through detection, monitoring, inspection and camera analytics capabilities." },
];

function SectionTitle({ children, supporting }: { children: string; supporting?: string }) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-4xl leading-[1.05] text-onyx md:text-[3.2rem]"><SplitTitle>{children}</SplitTitle></h2>
      {supporting ? <p className="mt-5 text-base leading-8 text-steel md:text-lg">{supporting}</p> : null}
    </div>
  );
}

export function ComputerVisionPage() {
  return (
    <>
      <FaqStructuredData faqs={faqs} />
      <section className="bg-mesh -mt-20 overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44">
        <HeroBackdrop watermark={false} />
        <div className="mx-auto grid w-full max-w-[1160px] gap-10 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="pill-glass">AI vision systems · Dubai &amp; UAE</p>
            <h1 className="mt-7 text-[2.8rem] leading-[0.98] text-white sm:text-5xl md:text-6xl lg:text-[4.5rem]"><SplitTitle>Intelligent Computer Vision</SplitTitle></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">Turn camera streams and visual inspection points into useful business signals. Oglas AI develops computer vision solutions for businesses in Dubai and across the UAE, supporting object and activity detection, safety monitoring, visual inspection workflows and operational visibility.</p>
            <TalkToOglas className="btn btn-light mt-8" defaultProjectType="Intelligent Computer Vision">Book a Free Consultation<ArrowRight className="h-4 w-4" /></TalkToOglas>
          </div>
          <div className="glass rise rounded-[1.75rem] p-4 [animation-delay:120ms]">
            <div className="bg-onyx overflow-hidden rounded-xl p-5 text-white">
              <div className="flex items-center justify-between border-b border-white/10 pb-4"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Oglas AI</p><p className="mt-1 text-lg font-semibold">Visual operations signal</p></div><Camera className="h-8 w-8 text-cyan" /></div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">{["Camera feed", "Visual analysis", "Detection", "Alert", "Review", "Reporting"].map((item) => <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80" key={item}>{item}</div>)}</div>
              <div className="mt-5 flex items-center gap-3 rounded-lg border border-cyan/25 bg-cyan/10 p-4 text-sm text-cyan"><Activity className="h-5 w-5 shrink-0" />Relevant signals, less noise.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24"><div className="mx-auto w-full max-w-[1160px] px-4"><SectionTitle supporting="Businesses with camera infrastructure can have access to large amounts of visual data without an efficient way to identify the events that matter.">Computer Vision Solutions for Your Business Operations</SectionTitle><div className="mt-12 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24"><div className="bg-mesh rounded-[1.5rem] p-7 text-white md:p-9"><Target className="h-8 w-8 text-cyan" /><p className="mt-8 text-2xl font-semibold leading-tight">Turn visual data into useful operational information.</p><p className="mt-5 text-sm leading-7 text-white/70">The objective is to make visual data more useful, reduce unnecessary manual review where automation is suitable, and give teams clearer visibility into the activities and exceptions they need to monitor.</p></div><div className="space-y-5 text-base leading-8 text-steel md:text-lg"><p>Depending on the environment, reviewing camera feeds and monitoring visual processes can require significant manual attention. Computer vision solutions help businesses analyse relevant visual inputs and identify predefined objects, activities or conditions.</p><p>Oglas AI designs computer vision systems around the requirements of each business, helping organisations turn relevant visual information into structured signals that can support everyday operations.</p></div></div></div></section>

      <section className="bg-bloom py-20 md:py-24"><div className="mx-auto w-full max-w-[1160px] px-4"><SectionTitle supporting="The appropriate approach depends on the visual inputs available, the conditions being monitored and how the resulting information needs to be used.">Intelligent Computer Vision Capabilities</SectionTitle><div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{capabilities.map(([title, description, Icon]) => <article className="rounded-2xl border border-brand/10 bg-white p-6" key={title}><Icon className="h-6 w-6 text-cyan" /><h3 className="mt-5 text-lg font-semibold text-onyx">{title}</h3><p className="mt-3 text-sm leading-7 text-steel">{description}</p></article>)}</div></div></section>

      <section className="bg-onyx py-20 text-white md:py-24"><div className="mx-auto w-full max-w-[1160px] px-4"><SectionTitle supporting="Computer vision becomes more useful when the resulting information can reach the people and systems responsible for acting on it.">Connect Computer Vision with Existing Business Systems</SectionTitle><div className="mt-12 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24"><div><Network className="h-9 w-9 text-cyan" /><p className="mt-6 text-2xl font-semibold leading-tight text-white">Make visual information more useful across your operations.</p><p className="mt-5 text-base leading-8 text-white/65">Rather than treating camera analytics as an isolated activity, Oglas AI can design workflows around how detections, alerts and structured visual information need to be used within your business.</p></div><div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{["Camera Feed", "Visual Analysis", "Relevant Detection", "Alert or Structured Data", "Operational Review"].map((step, index) => <div className="rounded-xl border border-white/10 bg-white/5 p-4" key={step}><span className="text-xs font-semibold tracking-[0.16em] text-cyan">0{index + 1}</span><p className="mt-4 text-sm font-semibold text-white/80">{step}</p></div>)}</div><p className="mt-5 text-sm leading-7 text-white/50">The precise workflow depends on the monitoring objective, available infrastructure, required integrations and the actions that should follow a detection.</p></div></div></div></section>

      <section className="bg-white py-20 md:py-24"><div className="mx-auto w-full max-w-[1160px] px-4"><SectionTitle supporting="Computer vision requirements vary according to the environment, the type of visual data available and the business outcome being pursued.">Computer Vision Solutions Built Around Your Requirements</SectionTitle><div className="mt-12 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24"><div className="flex items-start gap-4"><Settings2 className="mt-1 h-8 w-8 shrink-0 text-emerald" /><p className="text-2xl font-semibold leading-tight text-onyx">Designed for your environment and use case.</p></div><p className="text-base leading-8 text-steel md:text-lg">Oglas AI first understands what needs to be detected or inspected, the available camera infrastructure, the conditions that should trigger an alert and how the resulting information should be presented. The solution is then designed around those requirements, with appropriate testing to assess whether the configured workflow performs as intended.</p></div></div></section>

      <section className="bg-bloom py-20 md:py-24"><div className="mx-auto w-full max-w-[1160px] px-4"><SectionTitle>What Intelligent Computer Vision Can Improve</SectionTitle><div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">{improvements.map((item, index) => <article className="rounded-2xl glass-light p-6" key={item}><span className="text-xs font-semibold tracking-[0.16em] text-champagne">0{index + 1}</span><CheckCircle2 className="mt-8 h-6 w-6 text-emerald" /><h3 className="mt-5 text-lg font-semibold leading-7 text-onyx">{item}</h3></article>)}</div></div></section>

      <section className="bg-white py-20 md:py-24"><div className="mx-auto w-full max-w-[1160px] px-4"><SectionTitle>From Visual Data to Working Computer Vision</SectionTitle><div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{process.map(([title, description], index) => <article className="rounded-2xl border border-brand/10 bg-pearl p-6" key={title}><span className="text-xs font-semibold tracking-[0.16em] text-champagne">0{index + 1}</span><h3 className="mt-5 text-2xl font-semibold text-onyx">{title}</h3><p className="mt-3 text-sm leading-7 text-steel">{description}</p></article>)}</div></div></section>

      <section className="bg-bloom py-20 md:py-24"><div className="mx-auto w-full max-w-[960px] px-4"><SectionTitle>Frequently Asked Questions</SectionTitle><div className="mt-10 divide-y divide-black/10 rounded-xl border border-black/10 bg-white">{faqs.map((faq) => <details className="group p-6" key={faq.question}><summary className="flex cursor-pointer list-none justify-between gap-6 pr-2 text-lg font-semibold text-onyx marker:hidden">{faq.question}<span className="text-emerald transition-transform group-open:rotate-45">+</span></summary><p className="mt-4 max-w-3xl text-sm leading-7 text-steel">{faq.answer}</p></details>)}</div></div></section>

      <section className="bg-mesh overflow-hidden py-16 md:py-20"><div className="mx-auto flex w-full max-w-[1160px] flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between"><div><p className="pill-glass">Oglas AI</p><h2 className="mt-5 max-w-3xl text-4xl leading-[1.05] text-white md:text-[3.2rem]"><SplitTitle>Turn Camera Data into Actionable Business Signals</SplitTitle></h2><p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">Make your visual data more useful with computer vision solutions designed around your operational requirements.</p></div><TalkToOglas className="btn btn-light" defaultProjectType="Intelligent Computer Vision">Book a Free Consultation<ArrowRight className="h-4 w-4" /></TalkToOglas></div></section>
    </>
  );
}
