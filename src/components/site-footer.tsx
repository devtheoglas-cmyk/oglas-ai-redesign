import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { OglasBrandmark } from "@/components/oglas-logo";
import { company, navigation, services } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-mesh-deep overflow-hidden text-white">
      <OglasBrandmark className="pointer-events-none absolute -bottom-48 -left-40 -z-10 h-[34rem] w-[34rem] text-white/[0.05]" />
      <div className="mx-auto grid w-full max-w-[1160px] gap-14 px-4 pb-14 pt-20 lg:grid-cols-[1.35fr_0.8fr_1fr]">
        <div>
          <BrandMark />
          <p className="mt-10 max-w-md text-2xl font-light leading-9 text-white/90">
            {company.positioning}
          </p>
          <a
            href={`mailto:${company.email}`}
            className="group mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/8 px-5 py-2.5 text-sm text-white transition hover:border-white hover:bg-white/15"
          >
            {company.email}
            <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div>
          <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/55">
            Pages
          </h2>
          <div className="mt-6 grid gap-3.5">
            {navigation
              .filter((item) => !item.servicesMenu)
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-[15px] text-white/80 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            <Link
              href="/privacy"
              className="w-fit text-[15px] text-white/80 transition hover:text-white"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/55">
            Core Services
          </h2>
          <div className="mt-6 grid gap-3.5">
            {services.slice(0, 5).map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="w-fit text-[15px] text-white/80 transition hover:text-white"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/15 py-6">
        <div className="mx-auto flex w-full max-w-[1160px] flex-col gap-3 px-4 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Oglas AI. All rights reserved.</span>
          <span>Dubai, UAE. Built for global operations.</span>
        </div>
      </div>
    </footer>
  );
}
