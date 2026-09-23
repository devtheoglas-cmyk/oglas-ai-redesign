import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { services } from "@/content/site";
import { staticPageSeo } from "@/content/seo";
import { HeroArt, PageHero } from "@/components/page-hero";

const seo = staticPageSeo["/services"];

export const metadata: Metadata = {
  title: {
    absolute: seo.title!,
  },
  description: seo.description,
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Custom software and AI services built for operational depth"
        summary="Start with one painful bottleneck or connect a full operating platform across HR, finance, operations, sales, marketing, and management."
        art={
          <HeroArt
            src="/images/brand/neural-brain.webp"
            alt="Glowing blue neural brain"
            width={652}
            height={528}
            priority
          />
        }
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid w-full max-w-[1160px] px-4 gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-2xl border border-brand/10 bg-pearl p-7 transition hover:-translate-y-1 hover:border-emerald/35 hover:shadow-xl hover:shadow-black/5"
            >
              <div className="flex items-start justify-between gap-4">
                <service.icon className="h-8 w-8 text-emerald" />
                <ArrowRight className="h-5 w-5 text-steel transition group-hover:translate-x-1 group-hover:text-emerald" />
              </div>
              <p className="mt-8 text-xs font-semibold uppercase text-champagne">
                {service.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-onyx">{service.title}</h2>
              <p className="mt-4 text-sm leading-7 text-steel">{service.description}</p>
              <div className="mt-6 grid gap-2">
                {service.outcomes.slice(0, 2).map((outcome) => (
                  <span key={outcome} className="flex items-center gap-2 text-sm text-steel">
                    <CheckCircle2 className="h-4 w-4 text-emerald" />
                    {outcome}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
