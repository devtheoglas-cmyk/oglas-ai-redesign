import { ArrowRight } from "lucide-react";
import { FaqStructuredData, ServicePageStructuredData } from "@/components/structured-data";
import { PageHero } from "@/components/page-hero";
import { SplitTitle } from "@/components/split-title";
import { TalkToOglas } from "@/components/talk-modal";

const capabilities = [
  ["Invoice and Form Data Extraction", "Extract relevant fields from invoices and business forms and organize the information into structured digital records. This helps reduce repetitive manual data entry and gives teams a more consistent way to work with incoming document information."],
  ["Automated Document Classification", "Identify and categorize documents according to their content and predefined business requirements. Classification helps organize incoming files and direct them towards the appropriate processing steps or responsible teams."],
  ["Document Validation and Missing-Information Checks", "Configure validation checks to identify missing fields and potential inconsistencies in submitted documents. These checks help teams recognize information that requires attention before documents move further through the workflow."],
  ["Document Approval and Routing", "Organize document-related workflows by directing files to the appropriate department, manager or reviewer. Routing can be structured around your internal responsibilities and approval requirements."],
  ["Human Review and Exception Handling", "Keep human review involved when documents contain missing information, inconsistencies or details that require further verification. This allows responsible team members to assess exceptions instead of relying entirely on automated processing."],
] as const;

const workflowStages = [
  ["Document Intake", "Documents enter the agreed processing workflow through the intake method defined for your project. The system is configured around the document sources and formats included in the approved scope."],
  ["Information Extraction", "AI processes supported documents to identify and extract relevant information, such as required invoice or form fields. The extracted information can then be organized into structured records for further processing."],
  ["Document Classification and Validation", "Documents are categorized according to their content and configured requirements. Validation checks help identify missing information and potential inconsistencies that may require attention."],
  ["Human Review and Exception Handling", "Documents that require additional verification can be directed to responsible team members. Human reviewers can assess flagged information and determine the appropriate next action."],
  ["Department Routing", "Once the relevant processing and review steps are completed, documents can be directed to the appropriate department or reviewer according to the agreed workflow."],
] as const;

const requirements = [
  ["Built Around Your Document Requirements", "Define how documents should be classified, which information needs to be extracted, what details require validation and where documents should be routed."],
  ["Designed for Your Business Workflows", "Configure document categories, required fields, validation checks and review responsibilities according to your internal processes."],
  ["Connected with Existing Business Systems", "Where technically suitable, document processing solutions can be designed to work alongside existing ERP, finance, HR or other operational systems."],
] as const;

const industries = [
  ["Finance and Accounting", "Support document-related activities involving invoices and business forms by extracting relevant information, organizing records and identifying missing details that require further review."],
  ["Human Resources", "Support employee-related document workflows through document classification, information extraction and missing-information checks based on the organization's HR requirements."],
  ["Logistics and Supply Chain", "Help organize operational documents and support structured information extraction, classification and routing across relevant departments."],
  ["Healthcare Operations", "Support document-related administrative processes through organized information extraction, classification and review workflows, subject to the organization's requirements and applicable data-handling obligations."],
  ["Trading Businesses", "Support the processing of invoices, forms and other business documents by organizing extracted information and directing files through relevant internal workflows."],
  ["Compliance-Heavy Operations", "Help responsible teams identify missing document details and route items requiring additional verification. Human review remains important wherever regulatory interpretation or formal approval is required."],
] as const;

const improvements = [
  ["Faster Document Intake and Review", "Support the extraction and classification of incoming documents through structured processing workflows, helping teams spend less time organizing information manually."],
  ["Reduced Repetitive Data Entry", "Extract relevant information from supported invoices and forms, reducing the need for teams to repeatedly enter the same document details into separate records."],
  ["Clearer Exception Handling", "Identify missing information and potential inconsistencies so that documents requiring further attention can be directed to the responsible reviewers."],
  ["More Organized Document Workflows", "Bring document classification, validation, review and department routing into defined processes that support more consistent handling across business operations."],
] as const;

const developmentSteps = [
  ["Discover", "Understand your current document-handling processes, document types, operational challenges and information requirements."],
  ["Map", "Define the processing workflow, required fields, document categories, validation requirements, exception scenarios and review responsibilities."],
  ["Design and Build", "Design and develop the solution around the agreed requirements, including the relevant extraction, classification, validation and routing capabilities."],
  ["Validate", "Evaluate the agreed workflows, extracted information, validation checks and review processes against the defined project requirements."],
  ["Deploy and Improve", "Prepare the solution for operational use and identify opportunities for further improvements based on feedback, business requirements and evolving document workflows."],
] as const;

const faqs = [
  { question: "What is AI document processing?", answer: "AI document processing uses artificial intelligence to extract relevant information from documents, identify document categories, check required details and support document-related workflows. It helps businesses reduce repetitive manual activities while keeping human review involved wherever verification is required." },
  { question: "What types of documents can AI document processing handle?", answer: "AI document processing solutions can be designed for supported business documents such as invoices and forms. The document types, formats and information fields are determined during project discovery based on your operational requirements and technical feasibility." },
  { question: "How does AI extract and classify information from documents?", answer: "AI processes supported documents to identify relevant information and categorize files according to their content and configured requirements. Extracted fields can be organized into structured records, while classification helps direct documents towards the appropriate processing or review workflow." },
  { question: "Can AI document processing identify missing or incorrect information?", answer: "A document processing solution can include validation checks to identify missing fields and potential inconsistencies according to defined rules. Items requiring further verification can be flagged for human review. The system does not automatically guarantee that every extracted detail is correct." },
  { question: "Can AI document processing integrate with existing business systems?", answer: "Yes, where technically suitable. AI document processing solutions can be designed to connect with existing business systems depending on available APIs or interfaces, data requirements, security considerations and technical feasibility. Integration requirements are assessed before development." },
];

function SectionTitle({ children, supporting, dark = false }: { children: string; supporting?: string; dark?: boolean }) {
  return (
    <div className="max-w-3xl">
      <h2 className={`text-4xl leading-[1.05] md:text-[3.2rem] ${dark ? "text-white" : "text-onyx"}`}>
        <SplitTitle>{children}</SplitTitle>
      </h2>
      {supporting ? <h3 className={`mt-5 text-base leading-8 md:text-lg ${dark ? "text-white/80" : "text-steel"}`}>{supporting}</h3> : null}
    </div>
  );
}

function Cards({ items, dark = false }: { items: readonly (readonly [string, string])[]; dark?: boolean }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map(([title, description]) => (
        <article className={`rounded-2xl border p-6 ${dark ? "border-white/10 bg-white/5" : "border-brand/10 bg-white"}`} key={title}>
          <h3 className={`text-xl font-semibold leading-7 ${dark ? "text-white" : "text-onyx"}`}>{title}</h3>
          <p className={`mt-3 text-sm leading-7 ${dark ? "text-white/75" : "text-steel"}`}>{description}</p>
        </article>
      ))}
    </div>
  );
}

export function DocumentProcessingPage() {
  return (
    <>
      <FaqStructuredData faqs={faqs} />
      <ServicePageStructuredData slug="ai-powered-document-processing-in-dubai-uae" />
      <PageHero
        eyebrow="DOCUMENT INTELLIGENCE"
        title="AI Document Processing"
        summary="Oglas AI develops custom AI document processing solutions that help businesses extract information, classify documents, identify missing details and route files to the right departments. Designed around your business workflows, these solutions help reduce repetitive data entry and support faster document review while maintaining human oversight where it matters."
      >
        <TalkToOglas className="btn btn-light mt-8" defaultProjectType="AI Document Processing">
          Book a Free Consultation <ArrowRight className="h-4 w-4" />
        </TalkToOglas>
      </PageHero>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionTitle supporting="Reduce Manual Document Handling">AI DOCUMENT PROCESSING SOLUTIONS FOR BUSINESS OPERATIONS</SectionTitle>
          <div className="mt-12 max-w-3xl space-y-5 text-base leading-8 text-steel md:text-lg">
            <p>Businesses regularly handle invoices, forms and other operational documents that require information extraction, classification, verification and review. When these activities depend heavily on manual work, teams spend valuable time entering data, checking details and organizing documents.</p>
            <p>AI document processing helps bring these activities into <a className="content-link" href="/workflow-automation-in-dubai-uae">structured digital workflows</a>. It can extract relevant information, categorize documents, flag missing details and direct files to the appropriate department for further action.</p>
            <p>Oglas AI develops document processing solutions around your business requirements, helping teams manage repetitive document-related tasks more efficiently while keeping human review involved wherever verification or decision-making is required.</p>
          </div>
        </div>
      </section>

      <section className="bg-bloom py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionTitle supporting="Process Business Documents with Greater Consistency">INTELLIGENT DOCUMENT PROCESSING CAPABILITIES</SectionTitle>
          <div className="mt-12 max-w-3xl space-y-5 text-base leading-8 text-steel md:text-lg">
            <p>An effective document processing solution involves more than extracting text from files. It needs to identify relevant information, recognize document categories, check required details and support the next steps in your business workflow.</p>
            <p>Oglas AI develops AI-powered capabilities to support these document-related activities based on your operational requirements.</p>
          </div>
          <div className="mt-12"><Cards items={capabilities} /></div>
          <p className="mt-10 max-w-3xl text-base leading-8 text-steel md:text-lg">Available capabilities, validation rules and review workflows are confirmed during requirements discovery and depend on the agreed project scope.</p>
        </div>
      </section>

      <section className="bg-onyx py-20 text-white md:py-24">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionTitle dark supporting="From Document Intake to Organized Business Workflows">HOW AI DOCUMENT PROCESSING WORKS</SectionTitle>
          <p className="mt-12 max-w-3xl text-base leading-8 text-white/80 md:text-lg">AI document processing can bring multiple document-related activities into a coordinated workflow. The processing stages are configured according to the document types, information requirements and internal procedures of your business.</p>
          <div className="mt-12"><Cards items={workflowStages} dark /></div>
          <p className="mt-10 max-w-3xl text-base leading-8 text-white/80 md:text-lg">The exact processing sequence, decision points and system behaviour depend on the selected capabilities and your organization&apos;s operating requirements.</p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionTitle supporting="Designed for Your Documents and Business Systems">CUSTOM AI DOCUMENT PROCESSING SOLUTIONS BUILT AROUND YOUR REQUIREMENTS</SectionTitle>
          <div className="mt-12 max-w-3xl space-y-5 text-base leading-8 text-steel md:text-lg">
            <p>Every business works with different document types, information requirements and internal procedures. A document processing solution needs to reflect these differences rather than forcing every department to follow the same workflow.</p>
            <p>Oglas AI develops custom AI document processing solutions based on the way your organization receives, reviews and manages documents.</p>
          </div>
          <div className="mt-12"><Cards items={requirements} /></div>
          <div className="mt-10 max-w-3xl space-y-5 text-base leading-8 text-steel md:text-lg">
            <p>Integration requirements depend on available APIs or interfaces, data requirements, security considerations and technical feasibility. These details are assessed before development.</p>
            <p>The scope is agreed during requirements discovery so that the solution reflects your actual processes and technical environment.</p>
          </div>
        </div>
      </section>

      <section className="bg-bloom py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionTitle supporting="Document Processing Solutions for Industry-Specific Operations">AI DOCUMENT PROCESSING FOR DIFFERENT BUSINESS ENVIRONMENTS</SectionTitle>
          <p className="mt-12 max-w-3xl text-base leading-8 text-steel md:text-lg"><a className="content-link" href="/industries">Different industries</a> handle different types of documents, information and review procedures. Oglas AI develops document processing solutions around these operational differences, with capabilities and workflows defined according to each organization&apos;s requirements.</p>
          <div className="mt-12"><Cards items={industries} /></div>
          <p className="mt-10 max-w-3xl text-base leading-8 text-steel md:text-lg">The final capabilities depend on each organization&apos;s document types, operational requirements and agreed project scope.</p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionTitle supporting="Improve the Way Your Business Handles Documents">WHAT AI DOCUMENT PROCESSING CAN IMPROVE</SectionTitle>
          <p className="mt-12 max-w-3xl text-base leading-8 text-steel md:text-lg">AI document processing can help organizations reduce repetitive document-related work and create more organized processes for handling incoming information.</p>
          <div className="mt-12 max-w-3xl space-y-10">
            {improvements.map(([title, description]) => (
              <article className="border-b border-brand/10 pb-10 last:border-b-0 last:pb-0" key={title}>
                <h3 className="text-xl font-semibold leading-7 text-onyx">{title}</h3>
                <p className="mt-3 text-base leading-8 text-steel">{description}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-base leading-8 text-steel md:text-lg">Actual improvements depend on document quality, processing requirements, integration scope, implementation and how consistently the solution is used.</p>
        </div>
      </section>

      <section className="bg-bloom py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionTitle supporting="A Structured Approach to AI Document Processing Development">FROM DOCUMENT CHALLENGES TO AN INTELLIGENT PROCESSING SOLUTION</SectionTitle>
          <p className="mt-12 max-w-3xl text-base leading-8 text-steel md:text-lg">Developing an effective document processing solution begins with understanding how your business handles documents today. Oglas AI follows a requirements-led development approach to define the processing capabilities, workflows and technical implementation.</p>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {developmentSteps.map(([title, description], index) => (
              <article className="rounded-2xl border border-brand/10 bg-white p-6" key={title}>
                <span className="text-xs font-semibold tracking-[0.16em] text-champagne">0{index + 1}</span>
                <h3 className="mt-5 text-2xl font-semibold text-onyx">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-steel">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto w-full max-w-[960px] px-4">
          <SectionTitle supporting="Frequently Asked Questions">AI DOCUMENT PROCESSING FAQs</SectionTitle>
          <div className="mt-10 divide-y divide-black/10 rounded-xl border border-black/10 bg-white">
            {faqs.map((faq) => (
              <details className="group p-6" key={faq.question}>
                <summary className="flex cursor-pointer list-none justify-between gap-6 pr-2 text-lg font-semibold text-onyx marker:hidden">
                  {faq.question}<span className="text-emerald transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-steel">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mesh overflow-hidden py-16 md:py-20">
        <div className="mx-auto flex w-full max-w-[1160px] flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="max-w-3xl text-4xl leading-[1.05] text-white md:text-[3.2rem]"><SplitTitle>Make Document Processing More Efficient</SplitTitle></h2>
            <div className="mt-4 max-w-2xl space-y-4 text-sm leading-7 text-white/70">
              <p>Managing business documents should not require unnecessary manual data entry, repetitive checks and disconnected workflows. With a custom AI document processing solution, your organization can structure document extraction, classification, validation and routing around its operational requirements.</p>
              <p>Oglas AI works with businesses in Dubai and across the UAE to develop practical AI solutions that address real document-processing challenges.</p>
            </div>
          </div>
          <TalkToOglas className="btn btn-light" defaultProjectType="AI Document Processing">
            Book a Free Consultation <ArrowRight className="h-4 w-4" />
          </TalkToOglas>
        </div>
      </section>
    </>
  );
}
