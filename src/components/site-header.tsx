"use client";

import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { BrandMark } from "@/components/brand-mark";
import { SplitTitle } from "@/components/split-title";
import { navigation, services } from "@/content/site";

// The services overview that used to be its own page now opens the dropdown.
const servicesIntro = {
  eyebrow: "Services",
  title: "Custom software and AI services built for operational depth",
  summary:
    "Start with one painful bottleneck or connect a full operating platform across HR, finance, operations, sales, marketing, and management.",
};

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);
  const openedByHover = useRef(false);
  // Mirrors servicesOpen synchronously so hover-then-click never reads a stale value.
  const servicesOpenRef = useRef(false);

  const setServices = (value: boolean) => {
    servicesOpenRef.current = value;
    if (!value) openedByHover.current = false;
    setServicesOpen(value);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the dropdown on an outside click or Escape.
  useEffect(() => {
    if (!servicesOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!panelRef.current?.contains(target) && !triggerRef.current?.contains(target)) {
        setServices(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServices(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };

  const hoverOpen = (event: ReactPointerEvent) => {
    if (event.pointerType !== "mouse") return;
    cancelClose();
    if (!servicesOpenRef.current) openedByHover.current = true;
    setServices(true);
  };

  const hoverClose = (event: ReactPointerEvent) => {
    if (event.pointerType !== "mouse") return;
    cancelClose();
    closeTimer.current = window.setTimeout(() => setServices(false), 180);
  };

  // A click right after hover-opening keeps the menu open instead of toggling it shut.
  const toggleServices = () => {
    if (openedByHover.current) {
      openedByHover.current = false;
      setServices(true);
      return;
    }
    setServices(!servicesOpenRef.current);
  };

  const closeAll = () => {
    setServices(false);
    setOpen(false);
  };

  const onServicePage = services.some((service) => pathname === `/${service.slug}`);

  // Every page opens on a blue field the header floats over; the studio does not.
  const solid = scrolled || open || servicesOpen || pathname.startsWith("/studio");

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
            if (item.servicesMenu) {
              return (
                <button
                  key={item.href}
                  ref={triggerRef}
                  type="button"
                  aria-expanded={servicesOpen}
                  aria-controls="services-menu"
                  onClick={toggleServices}
                  onPointerEnter={hoverOpen}
                  onPointerLeave={hoverClose}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm transition-colors ${
                    servicesOpen || onServicePage
                      ? "bg-white/14 text-white"
                      : "text-white/75 hover:text-white"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    aria-hidden="true"
                    className={`h-3.5 w-3.5 transition-transform duration-300 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              );
            }

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

      {/* Services dropdown (tablet and up) */}
      <div
        id="services-menu"
        ref={panelRef}
        hidden={!servicesOpen}
        onPointerEnter={hoverOpen}
        onPointerLeave={hoverClose}
        className="menu-in absolute inset-x-0 top-full max-md:hidden"
      >
        <div className="mx-auto w-full max-w-[1160px] px-4 pt-3">
          <div className="glass-menu max-h-[calc(100svh-7rem)] overflow-y-auto rounded-[1.75rem] p-3">
            <div className="grid gap-3 lg:grid-cols-[17rem_1fr]">
              <div className="bg-mesh hidden flex-col overflow-hidden rounded-[1.4rem] p-7 lg:flex">
                <p className="pill-glass self-start">{servicesIntro.eyebrow}</p>
                <p className="mt-6 text-[1.75rem] text-white">
                  <SplitTitle>{servicesIntro.title}</SplitTitle>
                </p>
                <p className="mt-5 text-sm leading-6 text-white/80">{servicesIntro.summary}</p>
              </div>

              <ul className="grid gap-1 sm:grid-cols-2 xl:grid-cols-3">
                {services.map((service) => {
                  const current = pathname === `/${service.slug}`;
                  return (
                    <li key={service.slug}>
                      <Link
                        href={`/${service.slug}`}
                        onClick={closeAll}
                        aria-current={current ? "page" : undefined}
                        className={`group flex h-full gap-3.5 rounded-2xl p-4 transition-colors hover:bg-brand/6 focus-visible:bg-brand/6 ${
                          current ? "bg-brand/8" : ""
                        }`}
                      >
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#2f4cf6,#0c29df)] text-white shadow-[0_10px_20px_-10px_rgba(12,41,223,0.9)]">
                          <service.icon className="h-[18px] w-[18px]" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[10px] uppercase tracking-[0.14em] text-brand">
                            {service.eyebrow}
                          </span>
                          <span className="mt-1 flex items-start gap-1.5 text-[15px] font-medium leading-snug text-onyx">
                            {service.title}
                            <ArrowRight
                              aria-hidden="true"
                              className="mt-1 h-3.5 w-3.5 shrink-0 -translate-x-1 text-brand opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                            />
                          </span>
                          <span className="mt-1.5 block text-[13px] leading-5 text-steel">
                            {service.summary}
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {open ? (
        <div className="max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-white/15 md:hidden">
          <nav
            className="mx-auto grid w-full max-w-[1160px] gap-1 px-4 pb-6 pt-3"
            aria-label="Mobile navigation"
          >
            {navigation.map((item) =>
              item.servicesMenu ? (
                <div key={item.href}>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((value) => !value)}
                    aria-expanded={mobileServicesOpen}
                    aria-controls="mobile-services"
                    className="flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-light text-white transition hover:bg-white/10"
                  >
                    {item.label}
                    <ChevronDown
                      aria-hidden="true"
                      className={`h-4 w-4 text-white/60 transition-transform duration-300 ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <ul id="mobile-services" hidden={!mobileServicesOpen} className="grid gap-0.5 pb-2 pl-2">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/${service.slug}`}
                          onClick={closeAll}
                          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] text-white/90 transition hover:bg-white/10"
                        >
                          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/30 bg-white/10">
                            <service.icon className="h-4 w-4" />
                          </span>
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeAll}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-light text-white transition hover:bg-white/10"
                >
                  {item.label}
                  <ArrowRight className="h-4 w-4 text-white/50" />
                </Link>
              ),
            )}
            <Link href="/contact" onClick={closeAll} className="btn btn-light mt-4">
              Book a Free Consultation
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
