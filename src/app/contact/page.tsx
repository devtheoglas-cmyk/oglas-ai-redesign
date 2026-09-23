import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { company } from "@/content/site";
import { staticPageSeo } from "@/content/seo";
import { PageHero } from "@/components/page-hero";

const seo = staticPageSeo["/contact"];

export const metadata: Metadata = {
  title: {
    absolute: seo.title!,
  },
  description: seo.description,
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a Free Consultation"
        summary="Share the project type and the workflow you want to improve. The Dubai team will review your request and suggest a practical next step."
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid w-full max-w-[1160px] px-4 gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="bg-mesh overflow-hidden rounded-[1.75rem] p-8 text-white md:p-9">
            <h2 className="text-2xl font-semibold">Consultation details</h2>
            <div className="mt-8 grid gap-5">
              <a href={`mailto:${company.email}`} className="flex gap-3 text-sm text-white/75 transition hover:text-white">
                <Mail className="h-5 w-5 shrink-0 text-champagne" />
                {company.email}
              </a>
              <p className="flex gap-3 text-sm text-white/75">
                <MapPin className="h-5 w-5 shrink-0 text-champagne" />
                {company.location}
              </p>
            </div>
            <div className="mt-10 rounded-md border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm leading-7 text-white/70">
                Oglas AI works on custom quote projects after understanding the
                workflow, users, integrations, and success criteria.
              </p>
            </div>
          </aside>

          <div className="rounded-2xl border border-brand/10 bg-pearl p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
