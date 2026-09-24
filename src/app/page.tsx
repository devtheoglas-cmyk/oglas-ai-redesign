import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Globe2, Plus, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRule } from "@/components/arrow-rule";
import { BgImage } from "@/components/bg-image";
import { ContactForm } from "@/components/contact-form";
import { HeroBackdrop } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { SplitTitle } from "@/components/split-title";
import { FaqStructuredData } from "@/components/structured-data";
import {
  caseStudies,
  company,
  helpSlides,
  homepageFaqs,
  industries,
  testimonials,
  whyChooseCards,
} from "@/content/site";
import { staticPageSeo } from "@/content/seo";
import { getPublishedPosts } from "@/sanity/lib/posts";

export const revalidate = 60;

const seo = staticPageSeo["/"];

export const metadata: Metadata = {
  title: {
    absolute: seo.title!,
  },
  description: seo.description,
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {
  const latestInsights = await getPublishedPosts(3);

  return (
    <>
      <FaqStructuredData faqs={homepageFaqs} />

      {/* SECTION 1 — Hero: the profile cover, glass O1 and all */}
      <section className="bg-mesh -mt-20 overflow-hidden">
        <HeroBackdrop watermark={false} />
        <div
          aria-hidden="true"
          className="glass-numeral rise pointer-events-none absolute -bottom-[3.5vw] right-[1.5vw] -z-10 text-[clamp(17rem,60vw,64rem)] [animation-delay:150ms] max-md:-bottom-[2vw] max-md:right-[-6vw] max-md:opacity-70"
        >
          O1
        </div>

        <div className="relative mx-auto flex min-h-[max(40rem,100svh)] w-full max-w-[1160px] flex-col justify-end px-4 pb-14 pt-36 md:pb-20">
          <div className="rise max-w-4xl">
            <h1 className="title-caps text-[2.55rem] text-white sm:text-6xl lg:text-[4.6rem]">
              <SplitTitle>Software Built Around Real Business Operations</SplitTitle>
            </h1>
            <ArrowRule className="mt-9 text-white/70" />
            <p className="mt-8 max-w-xl text-base leading-8 text-white/85 md:text-[17px]">
              Our custom software development covers ERP systems, AI-powered solutions,
              workflow automation, and business applications designed around your unique
              business processes — helping you reduce manual work, improve operational
              efficiency, and scale with confidence.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-light">
                Book a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/#services" className="btn btn-outline-light">
                Explore Our Services
              </Link>
            </div>
          </div>

          <div className="rise mt-12 flex flex-col gap-1.5 text-sm leading-6 text-white/85 [animation-delay:260ms] md:absolute md:bottom-20 md:right-4 md:mt-0 md:items-end md:text-right">
            <span className="uppercase tracking-[0.14em] text-white/70">
              Custom Software &amp; AI Solutions
            </span>
            <span className="inline-flex items-center gap-2">
              <Globe2 className="h-4 w-4 text-white/70" />
              UAE-based · Globally available
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Why Do Businesses Choose Oglas AI? */}
      <section className="bg-mesh overflow-hidden py-24 md:py-32">
        <div
          aria-hidden="true"
          className="field-orb -left-[22rem] top-40 hidden h-[54rem] w-[54rem] lg:block"
        />
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="pill-glass">Why Oglas AI</p>
              <h2 className="mt-7 text-4xl text-white md:text-[3.4rem]">
                <SplitTitle>Why Do Businesses Choose Oglas AI?</SplitTitle>
              </h2>
              <ArrowRule className="mt-8 text-white/70" />
            </div>
            <p className="max-w-xl text-base leading-8 text-white/85 md:text-lg">
              Businesses choose Oglas AI because we believe great software starts with
              understanding the business behind it. That&apos;s how we build custom software
              that solves real challenges, supports your team, and grows with your business.
            </p>
          </div>

          <div className="relative mt-16 grid gap-10 lg:mt-10 lg:grid-cols-[1fr_minmax(0,21rem)_1fr] lg:items-center lg:gap-6">
            <div className="grid gap-10 lg:order-1 lg:pt-24">
              {whyChooseCards.slice(0, 2).map((card) => (
                <WhyCard key={card.title} card={card} />
              ))}
            </div>
            <div className="relative mx-auto w-64 sm:w-72 lg:order-2 lg:w-full">
              <div
                aria-hidden="true"
                className="absolute inset-x-[10%] top-[18%] bottom-[20%] rounded-full bg-[#dfe4ff]/35 blur-[70px]"
              />
              <Image
                src="/images/brand/robot-thinker.webp"
                alt="Chrome humanoid robot in a thinking pose"
                width={685}
                height={931}
                sizes="(min-width: 1024px) 21rem, 18rem"
                className="fade-bottom relative h-auto w-full select-none"
                draggable={false}
              />
            </div>
            <div className="grid gap-10 lg:order-3 lg:pb-24">
              {whyChooseCards.slice(2).map((card) => (
                <WhyCard key={card.title} card={card} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — How We Help Your Business */}
      <section id="services" className="bg-bloom scroll-mt-20 py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="How We Help"
            title="How We Help Your Business"
            summary="Every business has unique challenges and goals. We create custom software and AI solutions that simplify operations, empower your teams, and help you grow with confidence."
          />
          <div className="mt-20 grid gap-x-6 gap-y-14 md:grid-cols-2">
            {helpSlides.map((slide) => (
              <article key={slide.title} className="relative pt-4">
                <p className="pill absolute left-7 top-0 z-10">{slide.eyebrow}</p>
                <div className="glass-light flex h-full flex-col gap-6 rounded-[1.75rem] p-7 pt-10 md:p-9 md:pt-12">
                  <h3 className="text-[1.7rem] font-light leading-tight text-onyx">
                    {slide.title}
                  </h3>
                  <p className="text-[15px] leading-7 text-steel">{slide.description}</p>
                  <div className="grid gap-5 border-t border-brand/10 pt-6">
                    {slide.points.map((point) => (
                      <div key={point.title} className="flex gap-4">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#2f4cf6,#0c29df)] text-white shadow-[0_10px_20px_-10px_rgba(12,41,223,0.9)]">
                          <point.icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h4 className="text-[15px] font-medium text-onyx">
                            <Link
                              href={point.href}
                              className="underline decoration-brand/0 underline-offset-4 transition hover:text-brand hover:decoration-brand/40"
                            >
                              {point.title}
                            </Link>
                          </h4>
                          <p className="mt-1 text-sm leading-6 text-steel">{point.summary}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="lead-serif mt-auto text-xl leading-7 text-brand">
                    {slide.closer}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="bg-mesh mt-16 flex flex-col items-start gap-7 overflow-hidden rounded-[2rem] px-8 py-10 md:flex-row md:items-center md:justify-between md:px-12">
            <div>
              <p className="pill-glass">Built on Trust. Focused on Results.</p>
              <p className="mt-5 max-w-2xl text-lg font-light leading-8 text-white/90 md:text-xl">
                We combine deep expertise, real-world experience, and a
                customer-first approach to deliver solutions that create lasting
                impact.
              </p>
            </div>
            <Link href="/contact" className="btn btn-light shrink-0">
              Let&apos;s Build What&apos;s Next
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Software Designed for the Way You Do Business */}
      <section className="bg-mesh overflow-hidden py-24 md:py-32">
        <div
          aria-hidden="true"
          className="field-orb -right-[26rem] -top-[20rem] h-[60rem] w-[60rem] opacity-80"
        />
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <SectionHeading
              eyebrow="Industries"
              title="Software Designed for the Way You Do Business"
              summary="Every industry has its own way of working, and the right software should reflect that. We build custom solutions that fit your workflows, solve industry-specific challenges, and help your business grow with confidence."
              tone="dark"
            />
            <div className="relative -mb-40 hidden justify-self-end lg:block">
              <Image
                src="/images/brand/robot-hand.webp"
                alt="Chrome robotic hand pointing upward"
                width={628}
                height={975}
                sizes="20rem"
                className="relative h-auto w-[19rem] select-none -rotate-6 drop-shadow-[0_40px_60px_rgba(0,0,80,0.5)]"
                draggable={false}
              />
            </div>
          </div>

          <div className="relative mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry.slug}
                className="glass-dim flex flex-col gap-4 rounded-[1.5rem] p-6 transition duration-500 hover:-translate-y-1 hover:bg-white/15"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full border border-white/35 bg-white/10">
                  <industry.icon className="h-5 w-5 text-white" />
                </span>
                <h3 className="text-lg font-normal text-white">{industry.title}</h3>
                <p className="text-sm leading-7 text-white/90">{industry.summary}</p>
              </div>
            ))}
          </div>

          <div className="glass mt-14 grid gap-6 rounded-[2rem] p-8 md:grid-cols-[1.4fr_0.6fr] md:items-center md:px-12">
            <div>
              <p className="pill">Different Industries. One Approach.</p>
              <p className="mt-5 text-lg leading-8 text-onyx md:text-xl md:font-light">
                Every business is unique, but our approach stays the same. We take
                the time to understand how you work before designing software that
                delivers lasting value.
              </p>
            </div>
            <Link href="/contact" className="btn btn-primary md:justify-self-end">
              Book a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 — What Our Clients Say */}
      <section className="bg-bloom py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1160px] px-4">
          <SectionHeading
            eyebrow="Client Voices"
            title="What Our Clients Say"
            summary="The strongest proof of our work comes from the businesses we've partnered with. Here's what our clients have to say about their experience working with Oglas AI."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote
                key={item.quote}
                className="glass-light flex flex-col gap-7 rounded-[1.75rem] p-7 md:p-8"
              >
                <Quote className="h-7 w-7 fill-brand/10 text-brand" />
                <p className="lead-serif text-[1.3rem] leading-8 text-onyx">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-auto border-t border-brand/10 pt-5">
                  <p className="text-sm font-medium text-onyx">{item.role}</p>
                  <p className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-steel">
                    {item.sector}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>

          {caseStudies.length ? (
            <div className="mt-16 grid gap-x-5 gap-y-12 md:grid-cols-2">
              {caseStudies.slice(0, 2).map((study) => (
                <article key={study.slug} className="relative pt-4">
                  <p className="pill absolute left-7 top-0 z-10">{study.metric}</p>
                  <div className="glass-light h-full rounded-[1.75rem] p-7 pt-10 md:p-9 md:pt-12">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-brand">
                      {study.sector}
                    </p>
                    <h3 className="mt-3 text-2xl font-light leading-snug text-onyx">
                      {study.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-7 text-steel">{study.solution}</p>
                    <div className="mt-6 grid gap-2.5">
                      {study.outcomes.map((outcome) => (
                        <div key={outcome} className="flex gap-2.5 text-sm leading-6 text-onyx">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {/* Insights */}
      {latestInsights.length ? (
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto w-full max-w-[1160px] px-4">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow="Insights"
                title="Ideas for automation, ERP, and AI adoption"
              />
              <Link href="/insights" className="btn btn-outline shrink-0">
                View all insights
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {latestInsights.map((post) => (
                <Link
                  key={post.slug}
                  href={`/insights/${post.slug}`}
                  className="glass-light group overflow-hidden rounded-[1.75rem] transition duration-500 hover:-translate-y-1"
                >
                  {post.mainImage?.asset?.url ? (
                    <div className="relative aspect-[16/10] overflow-hidden bg-pearl">
                      <BgImage
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt ?? ""}
                        fill
                        className="transition duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                  ) : null}
                  <div className="p-7">
                    <p className="pill-soft">{post.category}</p>
                    <h3 className="mt-5 text-xl font-light leading-snug text-onyx">
                      {post.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-steel">{post.excerpt}</p>
                    <p className="mt-6 text-xs text-steel">{post.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* SECTION 6 — Frequently Asked Questions */}
      <section className="bg-bloom py-24 md:py-32">
        <div className="mx-auto grid w-full max-w-[1160px] gap-12 px-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              summary="Answers to the questions Dubai-based leadership teams ask most often before starting a custom software or AI project."
            />
          </div>
          <div className="grid gap-3">
            {homepageFaqs.map((faq, index) => (
              <details
                key={faq.question}
                className="faq-item glass-light group p-6 md:px-8"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[17px] leading-7 text-onyx">
                  {faq.question}
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

      {/* FINAL SECTION — Contact Form */}
      <section id="contact" className="bg-mesh overflow-hidden py-24 md:py-32">
        <Image
          src="/images/brand/chrome-brain.webp"
          alt=""
          width={736}
          height={736}
          sizes="36rem"
          aria-hidden="true"
          className="fade-top pointer-events-none absolute bottom-0 right-0 -z-10 hidden w-[34rem] -scale-x-100 select-none lg:block"
        />
        <div className="mx-auto grid w-full max-w-[1160px] gap-14 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="pill-glass">Book a Free Consultation</p>
            <h2 className="mt-7 text-4xl text-white md:text-[2.9rem]">
              <SplitTitle>
                Tell us the workflow you want to improve. We will map the system around it.
              </SplitTitle>
            </h2>
            <ArrowRule className="mt-8 text-white/70" />
            <p className="mt-8 text-base leading-8 text-white/85">
              Share a short brief and we will follow up with next steps, timelines,
              and a tailored engagement plan for {company.location}-based and global
              operations.
            </p>
            <ul className="mt-9 grid gap-3.5">
              {[
                "Custom quote only",
                "Discovery-first engagement",
                "UAE-based · Globally available",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[15px] text-white">
                  <span className="grid h-7 w-7 place-items-center rounded-full border border-white/40 bg-white/12">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-[2rem] p-6 md:p-9">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

function WhyCard({ card }: { card: (typeof whyChooseCards)[number] }) {
  return (
    <article className="relative pt-4">
      <h3 className="pill absolute left-6 top-0 z-10">
        <card.icon className="h-3.5 w-3.5" />
        {card.title}
      </h3>
      <p className="glass rounded-[1.5rem] px-6 pb-6 pt-9 text-[15px] leading-7 text-steel">
        {card.summary}
      </p>
    </article>
  );
}
