import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { FaqStructuredData } from "@/components/structured-data";
import { SplitTitle } from "@/components/split-title";
import { TalkToOglas } from "@/components/talk-modal";

const sections = [
  {
    "title": "AI CHATBOT SOLUTIONS FOR BUSINESS OPERATIONS",
    "supporting": "Make Business Knowledge Easier to Access",
    "intro": [
      "Businesses regularly handle questions about company policies, products, services and internal procedures. When information is scattered across documents and systems, finding accurate answers can take time and increase the workload on support teams.",
      "AI chatbots and knowledge assistants provide a conversational way to access approved business information. They can retrieve relevant details from configured knowledge sources, respond to routine enquiries and direct requests requiring further assistance to the appropriate team.",
      "Oglas AI develops custom AI assistants around your organization's information, users and operational requirements."
    ],
    "items": [
      {
        "title": "Internal Knowledge Assistants",
        "paragraphs": [
          "Help employees find company documents, policies and operational information through conversational interactions."
        ]
      },
      {
        "title": "Customer Support Chatbots",
        "paragraphs": [
          "Handle recurring customer enquiries and provide relevant product, service and support information."
        ]
      },
      {
        "title": "HR and Policy Assistants",
        "paragraphs": [
          "Help employees access approved HR policies, workplace procedures and internal guidelines."
        ]
      },
      {
        "title": "Workflow-Aware AI Assistants",
        "paragraphs": [
          "Support business enquiries using relevant workflow information and direct requests requiring human attention to the appropriate team."
        ]
      }
    ]
  },
  {
    "title": "INTELLIGENT AI CHATBOT CAPABILITIES",
    "supporting": "Designed for Relevant Answers and Controlled Responses",
    "intro": [
      "An effective AI chatbot needs to do more than generate responses. It should retrieve relevant information, follow defined instructions and recognize when a request requires human assistance."
    ],
    "items": [
      {
        "title": "Company Knowledge Retrieval",
        "paragraphs": [
          "Connect assistants with configured company documents, policies and other approved information sources to help users find relevant answers."
        ]
      },
      {
        "title": "Contextual Conversations",
        "paragraphs": [
          "Understand user questions and use conversational context to provide responses relevant to the enquiry."
        ]
      },
      {
        "title": "Business Rules and Access Controls",
        "paragraphs": [
          "Configure response guidelines and appropriate information access according to the intended users and business requirements."
        ]
      },
      {
        "title": "Human Escalation",
        "paragraphs": [
          "Identify requests that require additional verification or human judgement and direct them to the appropriate team."
        ]
      }
    ]
  },
  {
    "title": "CUSTOM AI CHATBOT DEVELOPMENT AND INTEGRATION",
    "supporting": "Built Around Your Business Requirements",
    "intro": [
      "Every organization has different knowledge sources, users and communication requirements. Oglas AI develops custom AI chatbot solutions based on how your business operates.",
      "Solutions can be designed around your company information, supported user groups, response guidelines and intended workflows.",
      "Where technically suitable, AI assistants can also be connected with existing business systems through available APIs or interfaces.",
      "From requirements discovery and solution design to development, testing and deployment, the implementation is defined according to your operational needs, technical environment and agreed project scope."
    ],
    "items": []
  },
  {
    "title": "AI KNOWLEDGE ASSISTANTS FOR DIFFERENT BUSINESS TEAMS",
    "supporting": "Support Information Access Across Your Organization",
    "intro": [],
    "items": [
      {
        "title": "Customer Service",
        "paragraphs": [
          "Help support teams respond to recurring questions and provide consistent product and service information."
        ]
      },
      {
        "title": "Human Resources",
        "paragraphs": [
          "Make approved employee policies, HR procedures and workplace guidelines easier to access."
        ]
      },
      {
        "title": "Sales Teams",
        "paragraphs": [
          "Help sales professionals find relevant product details, service information and approved business responses."
        ]
      },
      {
        "title": "Business Operations",
        "paragraphs": [
          "Support access to internal procedures and operational information, helping employees find answers to routine questions."
        ]
      }
    ]
  },
  {
    "title": "AI CHATBOTS & KNOWLEDGE ASSISTANTS FAQs",
    "intro": [],
    "items": [
      {
        "title": "What are AI chatbots and knowledge assistants?",
        "paragraphs": [
          "AI chatbots interact with users through conversations, while AI knowledge assistants help retrieve relevant information from configured knowledge sources. Businesses can use them to support customer enquiries, employee assistance and internal information access."
        ]
      },
      {
        "title": "Can AI chatbots use our company's internal documents?",
        "paragraphs": [
          "Yes. Custom AI knowledge assistants can be configured to retrieve information from supported company documents and approved knowledge sources, depending on document formats, access requirements and project scope."
        ]
      },
      {
        "title": "Can AI chatbots be customized for different departments?",
        "paragraphs": [
          "Yes. Assistants can be designed for different users and departments, including customer support, HR, sales and operations, with relevant knowledge sources and response guidelines."
        ]
      },
      {
        "title": "Can AI chatbots integrate with existing business systems?",
        "paragraphs": [
          "Where technically suitable, AI chatbot solutions can connect with existing business systems through available APIs or interfaces. Integration requirements are assessed during project discovery."
        ]
      },
      {
        "title": "Can a chatbot transfer enquiries to a human?",
        "paragraphs": [
          "Yes. Human escalation workflows can be configured for sensitive requests, unclear questions and enquiries requiring additional verification or decision-making."
        ]
      }
    ]
  }
];

const faqs = sections[4].items.map((item) => ({
  question: item.title,
  answer: item.paragraphs.join(" "),
}));

// Link selected phrases from the supplied copy to the related services.
function ContentText({ text }: { text: string }) {
  const links = [
    { phrase: "company documents", href: "/ai-powered-document-processing-in-dubai-uae" },
    { phrase: "approved HR policies", href: "/employee-self-service-in-dubai-uae" },
    { phrase: "Human escalation workflows", href: "/workflow-automation-in-dubai-uae" },
    { phrase: "custom AI chatbot solutions", href: "/custom-software-development-services-in-dubai-uae" },
  ];
  const link = links.find(({ phrase }) => text.includes(phrase));
  if (!link) return text;
  const index = text.indexOf(link.phrase);
  return <>{text.slice(0, index)}<a className="content-link" href={link.href}>{link.phrase}</a>{text.slice(index + link.phrase.length)}</>;
}

export function ChatbotsKnowledgePage() {
  return (
    <>
      <FaqStructuredData faqs={faqs} />
      <PageHero
        eyebrow="AI ASSISTANCE"
        title="AI Chatbots & Knowledge Assistants"
        summary="Oglas AI develops custom AI chatbot solutions and knowledge assistants for businesses in Dubai and across the UAE. Built around approved company information and relevant business workflows, these solutions help employees and customers find answers, access information and manage enquiries while following your organization's policies and escalation requirements."
      >
        <TalkToOglas className="btn btn-light mt-8" defaultProjectType="AI Chatbots & Knowledge Assistants">
          Book a Free Consultation <ArrowRight className="h-4 w-4" />
        </TalkToOglas>
      </PageHero>

      {sections.map((section, index) => {
        const dark = index === 2;
        return (
          <section key={section.title} className={`py-20 md:py-24 ${dark ? "bg-onyx text-white" : index % 2 === 0 ? "bg-white" : "bg-bloom"}`}>
            <div className="mx-auto w-full max-w-[1160px] px-4">
              <div className="max-w-4xl">
                <h2 className={`text-4xl leading-[1.05] md:text-[3.2rem] ${dark ? "text-white" : "text-onyx"}`}><SplitTitle>{section.title}</SplitTitle></h2>
                {section.supporting && <h3 className={`mt-5 text-lg leading-8 ${dark ? "text-white/80" : "text-steel"}`}>{section.supporting}</h3>}
                <div className={`mt-8 max-w-3xl space-y-5 text-base leading-8 md:text-lg ${dark ? "text-white/80" : "text-steel"}`}>
                  {section.intro.map((text) => <p key={text}><ContentText text={text} /></p>)}
                </div>
              </div>
              {section.items.length > 0 && (
                <div className={`mt-12 grid gap-6 ${index === 4 ? "" : "md:grid-cols-2"}`}>
                  {section.items.map((item) => (
                    <article key={item.title} className={`rounded-2xl border p-7 ${dark ? "border-white/15 bg-white/5" : "border-brand/10 bg-white"}`}>
                      <h3 className={`text-xl font-semibold leading-7 ${dark ? "text-white" : "text-onyx"}`}>{item.title}</h3>
                      {item.paragraphs.map((text) => <p key={text} className={`mt-4 text-base leading-8 ${dark ? "text-white/80" : "text-steel"}`}><ContentText text={text} /></p>)}
                    </article>
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}

      <section className="bg-mesh overflow-hidden py-20 md:py-24">
        <div className="relative mx-auto w-full max-w-[1160px] px-4">
          <h2 className="max-w-3xl text-4xl text-white md:text-[3.2rem]"><SplitTitle>Make Business Knowledge More Accessible</SplitTitle></h2>
          <div className="mt-7 max-w-3xl space-y-5 text-base leading-8 text-white/80 md:text-lg">
            <p>{"Help your employees and customers find relevant information without relying entirely on repetitive manual support."}</p>
            <p>{"Oglas AI develops custom AI chatbots and knowledge assistants that bring approved company knowledge and conversational assistance together."}</p>
            <p>{"Let's discuss your requirements and explore the right AI chatbot solution for your business."}</p>
          </div>
          <TalkToOglas className="btn btn-light mt-9" defaultProjectType="AI Chatbots & Knowledge Assistants">
            Book a Free Consultation <ArrowRight className="h-4 w-4" />
          </TalkToOglas>
        </div>
      </section>
    </>
  );
}

