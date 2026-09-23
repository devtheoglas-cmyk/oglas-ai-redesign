import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { caseStudies } from "@/content/site";
import { staticPageSeo } from "@/content/seo";
import { PageHero } from "@/components/page-hero";

const seo = staticPageSeo["/case-studies"];

export const metadata: Metadata = {
  title: {
    absolute: seo.title!,
  },
  description: seo.description,
  alternates: {
    canonical: "/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Proof of operational problems solved"
        summary="Explore the systems delivered, the bottlenecks removed, and the measurable outcomes achieved while client identities and sensitive details remain confidential."
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid w-full max-w-[1160px] px-4 gap-8">
          {caseStudies.map((study) => (
            <article key={study.slug} className="grid gap-8 rounded-2xl border border-brand/10 bg-pearl p-7 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs font-semibold uppercase text-emerald">{study.sector}</p>
                <p className="mt-4 inline-flex rounded-md border border-champagne/30 bg-white px-3 py-2 text-xs font-semibold text-onyx">
                  {study.metric}
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-onyx">
                  {study.title}
                </h2>
                <div className="mt-6 flex flex-wrap gap-2">
                  {study.services.map((service) => (
                    <span key={service} className="rounded-md border border-black/10 bg-white px-3 py-2 text-xs font-semibold text-steel">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid gap-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase text-champagne">Challenge</h3>
                  <p className="mt-3 text-sm leading-7 text-steel">{study.challenge}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase text-champagne">Solution</h3>
                  <p className="mt-3 text-sm leading-7 text-steel">{study.solution}</p>
                </div>
                <div className="grid gap-2">
                  {study.outcomes.map((outcome) => (
                    <span key={outcome} className="flex items-center gap-2 text-sm text-steel">
                      <CheckCircle2 className="h-4 w-4 text-emerald" />
                      {outcome}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
