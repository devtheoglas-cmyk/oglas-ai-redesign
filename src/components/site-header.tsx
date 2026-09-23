"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { navigation } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Every page opens on a blue field the header floats over; the studio does not.
  const solid = scrolled || open || pathname.startsWith("/studio");

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-500 ${
        solid
          ? "border-white/15 bg-[#0a1ccf]/80 shadow-[0_18px_40px_-28px_rgba(0,0,80,0.9)] backdrop-blur-xl backdrop-saturate-150"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-[1160px] items-center justify-between gap-6 px-4">
        <BrandMark />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navigation.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-full px-3.5 py-2 text-sm transition-colors ${
                  active ? "bg-white/14 text-white" : "text-white/75 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center lg:flex">
          <Link href="/contact" className="btn btn-light btn-sm">
            Book a Free Consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/15 md:hidden">
          <nav
            className="mx-auto grid w-full max-w-[1160px] gap-1 px-4 pb-6 pt-3"
            aria-label="Mobile navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-light text-white transition hover:bg-white/10"
              >
                {item.label}
                <ArrowRight className="h-4 w-4 text-white/50" />
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-light mt-4"
            >
              Book a Free Consultation
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
