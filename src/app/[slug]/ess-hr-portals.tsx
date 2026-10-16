import {
  ArrowRight,
  Bell,
  CheckCircle2,
  Link2,
  ShieldCheck,
  UserRound,
  UsersRound,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { FaqStructuredData } from "@/components/structured-data";
import { HeroBackdrop } from "@/components/page-hero";
import { SplitTitle } from "@/components/split-title";
import { TalkToOglas } from "@/components/talk-modal";

const capabilities = [
  ["Employee Profiles", "Organize relevant employee information through a centralized portal. Employee profile functionality can be configured around the information employees and authorized users need to access, with permissions defined according to business requirements.", UserRound],
  ["Employee Document Management and Expiry Alerts", "Make employee document-related activities easier to track. Configured expiry alerts can help bring approaching dates to the attention of relevant users, supporting timely follow-up and reducing reliance on entirely manual tracking.", Bell],
  ["Leave and Employee Request Workflows", "Give employees a structured way to submit leave and other supported HR requests. Configured workflows can help organize submissions, reviews and status tracking according to your company's processes.", Workflow],
  ["Manager Approvals", "Structure approval processes around defined responsibilities. Requests can follow configured approval steps, helping employees, managers and HR teams understand the progress of relevant requests and identify actions requiring attention.", ShieldCheck],
] as const;

const environments = [
  "Manpower companies: Organize employee information, document expiry alerts and supported request workflows.",
  "Facility management companies: Support employee-related processes across teams working at different sites.",
  "Clinics and healthcare operations: Structure employee information and relevant HR requests around internal procedures.",
  "Retail businesses: Provide a consistent process for supported employee requests across departments or branches.",
  "Businesses with mobile teams: Give employees an accessible way to manage supported HR interactions.",
] as const;

const improvements = [
  ["Better Request Tracking", "Defined workflows help employees and managers follow the progress of supported requests."],
  ["More Organized Document Management", "Employee document information and configured expiry alerts can make document-related follow-up easier to manage."],
  ["Clearer Employee and Manager Visibility", "Relevant status information and approval steps help users understand where requests stand and whether further action is required."],
  ["More Consistent HR Processes", "Bringing selected employee interactions into a centralized portal can help organizations establish a more structured approach to recurring HR activities."],
] as const;

const process = [
  ["Discover", "Understand your HR processes, employee requirements, existing systems and business objectives."],
  ["Map", "Define the supported employee requests, document-related activities, approval steps and workflow requirements."],
  ["Design", "Establish the portal functionality, access permissions, workflow rules and integration approach."],
  ["Build", "Develop the agreed functionality according to the project scope and technical requirements."],
  ["Validate", "Test relevant workflows, permissions, alerts and integrations against the agreed requirements."],
  ["Deploy & Improve", "Deploy the validated solution and refine its functionality as business requirements evolve."],
] as const;

const faqs = [
  { question: "What is an Employee Self-Service (ESS) portal?", answer: "An Employee Self-Service (ESS) portal is a digital platform that allows employees to access relevant information and manage supported HR activities through a centralized interface. Depending on its functionality, it can support employee profiles, requests, document-related activities and approvals." },
  { question: "What can an ESS and HR portal help a business manage?", answer: "An ESS and HR portal can help organize employee information, document expiry alerts, leave and other supported requests, and manager approvals. The available functionality depends on the business requirements and agreed project scope." },
  { question: "Can an HR portal integrate with existing payroll and ERP systems?", answer: "An HR portal can be designed to connect with compatible payroll and ERP systems where suitable integration methods are available. Technical feasibility depends on the systems involved, data requirements and intended workflows." },
  { question: "Can an ESS portal be customized for my business?", answer: "Yes. A custom ESS portal can be designed around your employee information requirements, supported HR requests, document-related activities and approval processes. The functionality is determined by your business needs and technical requirements." },
  { question: "Does Oglas AI develop ESS and HR portals in Dubai and the UAE?", answer: "Oglas AI develops custom software and AI solutions for businesses in Dubai and across the UAE. Its ESS & HR Portals service focuses on employee information, self-service requests, document expiry alerts and approval workflows, with compatible system integrations where required." },
];

function SectionTitle({ children, supporting, dark = false }: { children: string; supporting?: string; dark?: boolean }) {
  return (
    <div className="max-w-3xl">
      <h2 className={`text-4xl leading-[1.05] md:text-[3.2rem] ${dark ? "text-white" : "text-onyx"}`}><SplitTitle>{children}</SplitTitle></h2>
      {supporting ? <p className={`mt-5 text-base leading-8 md:text-lg ${dark ? "text-white/80" : "text-steel"}`}>{supporting}</p> : null}
    </div>
  );
}

export function EssHrPortalsPage() {
  return (
    <>
      <FaqStructuredData faqs={faqs} />
      <section className="bg-mesh -mt-20 overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44">
        <HeroBackdrop watermark={false} />
        <div className="mx-auto grid w-full max-w-[1160px] gap-10 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <h1 className="text-[2.8rem] leading-[0.98] text-white sm:text-5xl md:text-6xl lg:text-[4.5rem]"><SplitTitle>ESS &amp; HR Portals</SplitTitle></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">Oglas AI develops custom Employee Self-Service (ESS) and HR portals that help businesses manage employee information, document expiry alerts, leave requests and approvals through organized digital workflows.</p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">Designed around your business requirements, these portals help employees manage routine HR interactions while giving HR teams and managers better visibility into requests and approvals. Where technically suitable, the portal can also connect with existing payroll, attendance and ERP systems.</p>
            <TalkToOglas className="btn btn-light mt-8" defaultProjectType="ESS & HR Portals">Book a Free Consultation<ArrowRight className="h-4 w-4" /></TalkToOglas>
          </div>
          <div className="glass rise rounded-[1.75rem] p-6 [animation-delay:120ms]"><div className="flex min-h-64 items-center justify-center rounded-xl bg-onyx p-6 text-white"><div className="grid grid-cols-2 gap-6"><UsersRound className="h-12 w-12 text-cyan" /><Workflow className="h-12 w-12 text-cyan" /><Bell className="h-12 w-12 text-cyan" /><ShieldCheck className="h-12 w-12 text-cyan" /></div></div></div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24"><div className="mx-auto w-full max-w-[1160px] px-4"><SectionTitle supporting="Make Everyday HR Processes Easier to Manage">HR Portal Development for Your Business Operations</SectionTitle><div className="mt-12 max-w-3xl space-y-5 text-base leading-8 text-steel md:text-lg"><p>Managing employee requests, tracking documents and coordinating approvals across separate communication channels can create unnecessary work for HR teams. Employees may need to follow up on requests, while managers and HR personnel must keep track of pending actions.</p><p>Custom HR portal development brings supported HR activities into a more organized digital environment. Employees can access relevant information and submit requests through a centralized portal, while HR teams and managers can follow defined workflows.</p><p>Oglas AI builds ESS and HR portal solutions around your existing processes, helping businesses in Dubai and across the UAE organize routine HR interactions according to their operational requirements.</p></div></div></section>

      <section className="bg-bloom py-20 md:py-24"><div className="mx-auto w-full max-w-[1160px] px-4"><SectionTitle>ESS &amp; HR Portal Capabilities</SectionTitle><div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{capabilities.map(([title, description, Icon]) => <article className="rounded-2xl border border-brand/10 bg-white p-6" key={title}><Icon className="h-6 w-6 text-cyan" /><h3 className="mt-5 text-lg font-semibold text-onyx">{title}</h3><p className="mt-3 text-sm leading-7 text-steel">{description}</p></article>)}</div><p className="mt-10 max-w-3xl text-base leading-8 text-steel md:text-lg">The functionality of each portal is determined by the agreed project scope and the requirements established during planning.</p></div></section>

      <section className="bg-onyx py-20 text-white md:py-24"><div className="mx-auto w-full max-w-[1160px] px-4"><SectionTitle dark supporting="Make HR Workflows More Connected">Connect Your HR Portal with Existing Business Systems</SectionTitle><div className="mt-12 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24"><div><Link2 className="h-9 w-9 text-cyan" /><div className="mt-6 space-y-5 text-base leading-8 text-white/80"><p>An HR portal may need to work alongside the payroll, attendance or ERP systems already used by your business.</p><p>Oglas AI can assess how the portal could connect with compatible systems, based on the information that needs to be exchanged, available integration methods and the workflows involved.</p><p>For example, a business may require selected employee information or HR processes to connect with an existing ERP or payroll environment. The proposed integration should be evaluated for technical compatibility before implementation.</p></div></div><div className="rounded-2xl border border-white/10 bg-white/5 p-7"><p className="text-lg font-semibold text-white">Explore our <Link href="/erp-payroll-automation" className="text-cyan underline decoration-cyan/50 underline-offset-4">ERP &amp; Payroll Automation</Link> service for related business system requirements.</p></div></div></div></section>

      <section className="bg-white py-20 md:py-24"><div className="mx-auto w-full max-w-[1160px] px-4"><SectionTitle supporting="Designed for Your Workforce and Processes">Custom HR Portal Solutions Built Around Your Requirements</SectionTitle><div className="mt-12 max-w-3xl space-y-5 text-base leading-8 text-steel md:text-lg"><p>Every organization has different employee information requirements, request procedures and approval responsibilities. A customized HR portal should reflect these differences rather than impose the same workflow on every business.</p><p>Oglas AI approaches portal development by understanding your current HR processes and defining the functionality required to support them.</p><p>The solution can be designed around employee information, supported requests, document expiry alerts, approval workflows, user permissions and relevant system integrations.</p><p>This requirements-led approach keeps development focused on practical business needs and the processes the portal is intended to support.</p></div></div></section>

      <section className="bg-bloom py-20 md:py-24"><div className="mx-auto w-full max-w-[1160px] px-4"><SectionTitle>ESS &amp; HR Portals for Different Business Environments</SectionTitle><div className="mt-12 max-w-3xl space-y-5 text-base leading-8 text-steel md:text-lg"><p>HR requirements can vary depending on workforce size, locations and operating processes.</p><ul className="space-y-4">{environments.map((item) => <li className="flex gap-3" key={item}><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald" /><span>{item}</span></li>)}</ul><p>The appropriate functionality depends on each organization's requirements and the capabilities included in the project.</p></div></div></section>

      <section className="bg-white py-20 md:py-24"><div className="mx-auto w-full max-w-[1160px] px-4"><SectionTitle>What an ESS &amp; HR Portal Can Improve</SectionTitle><div className="mt-12 max-w-3xl space-y-10">{improvements.map(([title, description]) => <article className="border-b border-brand/10 pb-10 last:border-b-0 last:pb-0" key={title}><h3 className="text-xl font-semibold leading-7 text-onyx">{title}</h3><p className="mt-3 max-w-2xl text-base leading-8 text-steel">{description}</p></article>)}</div><p className="mt-10 max-w-3xl text-base leading-8 text-steel md:text-lg">Actual results depend on the implementation, workflow design and how the organization uses the portal.</p></div></section>

      <section className="bg-bloom py-20 md:py-24"><div className="mx-auto w-full max-w-[1160px] px-4"><p className="max-w-3xl text-base leading-8 text-steel md:text-lg">Oglas AI follows a requirements-led approach to custom portal development.</p><div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{process.map(([title, description], index) => <article className="rounded-2xl border border-brand/10 bg-white p-6" key={title}><span className="text-xs font-semibold tracking-[0.16em] text-champagne">0{index + 1}</span><h3 className="mt-5 text-2xl font-semibold text-onyx">{title}</h3><p className="mt-3 text-sm leading-7 text-steel">{description}</p></article>)}</div></div></section>

      <section className="bg-white py-20 md:py-24"><div className="mx-auto w-full max-w-[960px] px-4"><SectionTitle>Frequently Asked Questions</SectionTitle><div className="mt-10 divide-y divide-black/10 rounded-xl border border-black/10 bg-white">{faqs.map((faq) => <details className="group p-6" key={faq.question}><summary className="flex cursor-pointer list-none justify-between gap-6 pr-2 text-lg font-semibold text-onyx marker:hidden">{faq.question}<span className="text-emerald transition-transform group-open:rotate-45">+</span></summary><p className="mt-4 max-w-3xl text-sm leading-7 text-steel">{faq.answer}</p></details>)}</div></div></section>

      <section className="bg-mesh overflow-hidden py-16 md:py-20"><div className="mx-auto flex w-full max-w-[1160px] flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between"><div><h2 className="max-w-3xl text-4xl leading-[1.05] text-white md:text-[3.2rem]"><SplitTitle>Make Everyday HR Processes Easier to Manage</SplitTitle></h2><div className="mt-4 max-w-2xl space-y-4 text-sm leading-7 text-white/70"><p>Give your employees a clearer way to manage routine HR interactions with a portal designed around your business requirements.</p><p>Oglas AI can help you assess your current processes and define an ESS and HR portal solution that supports your employees, HR team and managers.</p></div></div><TalkToOglas className="btn btn-light" defaultProjectType="ESS & HR Portals">Book a Free Consultation<ArrowRight className="h-4 w-4" /></TalkToOglas></div></section>
    </>
  );
}
