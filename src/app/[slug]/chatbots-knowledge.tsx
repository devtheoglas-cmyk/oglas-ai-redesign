import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { FaqStructuredData, ServicePageStructuredData } from "@/components/structured-data";
import { SplitTitle } from "@/components/split-title";
import { TalkToOglas } from "@/components/talk-modal";

const sections = [
  {
    "title": "AI CHATBOT SOLUTIONS FOR BUSINESS OPERATIONS",
    "supporting": "Make Business Knowledge Easier to Access",
    "intro": [
      "Businesses regularly handle questions about company policies, products, services and internal procedures. When information is scattered across documents and systems, finding accurate answers can take time and increase the workload on support teams.",
      "Through intelligent AI chatbot development, businesses can make approved information easier to access. AI assistants can retrieve relevant details from configured knowledge sources, respond to routine enquiries and direct requests requiring further assistance to the appropriate team.",
      "Oglas AI develops custom AI chatbot solutions that help organizations improve information access and manage repetitive enquiries through structured conversational experiences."
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
          "Respond to recurring customer enquiries with relevant product, service and support information."
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
    "title": "AI CHATBOT DEVELOPMENT CAPABILITIES",
    "supporting": "Built for Relevant Answers and Controlled Responses",
    "intro": [
      "Effective AI chatbot development involves more than creating conversational responses. It requires relevant knowledge retrieval, contextual understanding and response controls that reflect your business requirements."
    ],
    "items": [
      {
        "title": "Company Knowledge Retrieval",
        "paragraphs": [
          "Connect AI knowledge assistants with configured company documents, policies and other approved information sources to help users find relevant answers."
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
          "Configure response guidelines and information access according to intended users, permissions and business requirements."
        ]
      },
      {
        "title": "Human Escalation and Exception Handling",
        "paragraphs": [
          "Identify questions requiring additional verification or human judgement and direct them to the appropriate team."
        ]
      }
    ]
  },
  {
    "title": "HOW AI CHATBOTS & KNOWLEDGE ASSISTANTS WORK",
    "supporting": "From User Questions to Relevant Business Answers",
    "intro": [
      "Our AI chatbot development process brings together user questions, approved knowledge sources and configured business rules to deliver relevant responses."
    ],
    "items": [
      {
        "title": "Understand User Questions",
        "paragraphs": [
          "Interpret incoming questions and identify the information or assistance being requested."
        ]
      },
      {
        "title": "Retrieve Relevant Information",
        "paragraphs": [
          "Search configured knowledge sources to identify information relevant to the user's enquiry."
        ]
      },
      {
        "title": "Generate Responses",
        "paragraphs": [
          "Prepare responses using available information and configured instructions, helping users access business knowledge through conversation."
        ]
      },
      {
        "title": "Apply Rules and Escalate Requests",
        "paragraphs": [
          "Follow defined response guidelines and direct sensitive, unclear or out-of-scope requests to the appropriate team when human assistance is required."
        ]
      }
    ]
  },
  {
    "title": "CUSTOM AI CHATBOT DEVELOPMENT IN DUBAI",
    "supporting": "Designed Around Your Business Requirements",
    "intro": [
      "Every organization has different knowledge sources, users and communication requirements. Oglas AI provides custom AI chatbot development in Dubai, building solutions around how your business operates."
    ],
    "items": [
      {
        "title": "Built Around Your Company Knowledge",
        "paragraphs": [
          "Configure assistants to retrieve information from approved company documents, policies, product details and other relevant knowledge sources."
        ]
      },
      {
        "title": "Designed for Different Business Teams",
        "paragraphs": [
          "Develop assistants for customer service, HR, sales and operations, with relevant information and responses for each intended user group."
        ]
      },
      {
        "title": "Connected with Existing Business Systems",
        "paragraphs": [
          "Where technically suitable, AI chatbots can be designed to work with existing business systems through available APIs or interfaces."
        ]
      },
      {
        "title": "Configured Around Your Business Rules",
        "paragraphs": [
          "Define response guidelines, information access and escalation requirements according to your organization's procedures."
        ]
      }
    ]
  },
  {
    "title": "AI CHATBOTS & KNOWLEDGE ASSISTANTS FAQs",
    "intro": [],
    "items": [
      {
        "title": "What does AI chatbot development in Dubai involve?",
        "paragraphs": [
          "AI chatbot development involves designing and building conversational solutions around a business's information, users and operational requirements. This can include knowledge retrieval, customer support, employee assistance and integration with relevant business systems."
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
          "Yes. AI assistants can be developed for different departments, including customer support, HR, sales and operations, with relevant knowledge sources and response guidelines."
        ]
      },
      {
        "title": "Can AI chatbots integrate with existing business systems?",
        "paragraphs": [
          "AI chatbot solutions can be designed to connect with existing business systems where suitable APIs or interfaces are available. Integration requirements depend on system compatibility, data access, security and technical feasibility."
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
      <ServicePageStructuredData slug="ai-chatbot-development-in-dubai-uae" />
      <PageHero
        eyebrow="AI ASSISTANCE"
        title="AI Chatbots & Knowledge Assistants"
        summary="Oglas AI provides AI chatbot development services in Dubai and across the UAE, creating custom AI chatbots and knowledge assistants tailored to your business requirements. Our AI chatbot solutions help employees and customers access company information, manage enquiries and receive relevant answers using approved business knowledge, defined policies and escalation workflows."
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
              {index === 3 && (
                <p className="mt-10 max-w-3xl text-base leading-8 text-steel md:text-lg">Our AI chatbot development approach covers requirements discovery, solution design, development, testing and deployment. Each implementation is planned around your operational needs and agreed technical scope.</p>
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
            <p>{"Oglas AI delivers custom AI chatbot development solutions that bring approved company knowledge and conversational assistance together."}</p>
            <p>{"Let's discuss your requirements and explore how AI chatbot development can support your business operations."}</p>
          </div>
          <TalkToOglas className="btn btn-light mt-9" defaultProjectType="AI Chatbots & Knowledge Assistants">
            Book a Free Consultation <ArrowRight className="h-4 w-4" />
          </TalkToOglas>
        </div>
      </section>
    </>
  );
}

