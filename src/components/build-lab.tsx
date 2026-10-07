"use client";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Lock,
  Power,
  RotateCcw,
  Send,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  labExperience,
  labFields,
  labIntelligence,
  type LabField,
} from "@/content/build-lab";

type Phase = "gate" | "boot" | "lab" | "assemble" | "blueprint" | "sent";
type Lead = { name: string; company: string; email: string; phone: string };

const steps = ["Core", "Modules", "Experience", "Intelligence"] as const;

const experienceVoice: Record<string, string> = {
  web: "Web platform deployed to every browser.",
  mobile: "Mobile build compiling for iOS and Android.",
  portal: "Client portal opened. Your customers have a door in.",
  bilingual: "Arabic interface online. Right-to-left aligned.",
};

const intelligenceVoice: Record<string, string> = {
  assistant: "AI assistant awake. It is ready to answer your team.",
  documents: "Document intelligence reading at full speed.",
  predictive: "Forecast engine looking ahead.",
  "smart-alerts": "Alert grid armed.",
};

const stepVoice = [
  "Choose the core your software is built around.",
  "Now give it capabilities. Select the modules your team needs.",
  "How will people reach it? Choose the experience.",
  "Final layer: intelligence. Optional, but this is where it gets interesting.",
];

function useReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const query = window.matchMedia("(prefers-reduced-motion: reduce)");
      query.addEventListener("change", onChange);
      return () => query.removeEventListener("change", onChange);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

function makeBuildId() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let id = "";
  for (let i = 0; i < 4; i++) id += alphabet[Math.floor(Math.random() * alphabet.length)];
  return `OG-${id}`;
}

function firstName(name: string) {
  return name.trim().split(/\s+/)[0] || name;
}

/** Types a line out character by character, like a lab assistant speaking. */
function Voice({ text }: { text: string }) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCount((current) => {
        if (current >= text.length) {
          window.clearInterval(timer);
          return current;
        }
        return current + 1;
      });
    }, 22);
    return () => window.clearInterval(timer);
  }, [text]);

  const shown = reduce ? text : text.slice(0, count);

  return (
    <p className="flex items-start gap-3 text-[15px] leading-7 text-[#c9ecff]">
      <Sparkles className="lab-pulse mt-1.5 h-4 w-4 shrink-0 text-[#8fd6ff]" aria-hidden="true" />
      <span aria-hidden="true" className="lab-caret">
        {shown}
      </span>
      <span className="sr-only" aria-live="polite">
        {text}
      </span>
    </p>
  );
}

/* ---------------------------------------------------------------------------
 * The hologram: a core that assembles as the visitor chooses.
 * ------------------------------------------------------------------------ */

// Centre of the hologram. The viewBox starts at 0,0 so CSS rotation
// (transform-box: view-box, origin 50% 50%) pivots exactly here.
const CX = 410;
const CY = 310;

function polar(radius: number, degrees: number) {
  const rad = (degrees * Math.PI) / 180;
  // Rounded so server and browser render identical numbers (no hydration drift).
  const round = (value: number) => Math.round(value * 100) / 100;
  return { x: round(CX + radius * Math.cos(rad)), y: round(CY + radius * Math.sin(rad)) };
}

const ticks = Array.from({ length: 72 }, (_, i) => {
  const angle = i * 5;
  const inner = polar(i % 6 === 0 ? 262 : 268, angle);
  const outer = polar(276, angle);
  return { key: i, ...{ x1: inner.x, y1: inner.y, x2: outer.x, y2: outer.y } };
});


function Hologram({
  company,
  core,
  modules,
  experience,
  intelligence,
  locked = false,
  assembling = false,
}: {
  company?: string;
  core?: string;
  modules: { id: string; title: string }[];
  experience: string[];
  intelligence: number;
  locked?: boolean;
  assembling?: boolean;
}) {
  const coreGlow = locked ? 0.18 : 0.35 + intelligence * 0.14;

  return (
    <svg
      viewBox="0 0 820 620"
      className={`h-auto w-full select-none ${assembling ? "lab-assemble" : ""}`}
      role="img"
      aria-label={
        locked
          ? "Build Lab hologram, locked"
          : `Hologram of your build: ${core ?? "no core yet"}, ${modules.length} modules`
      }
    >
      <defs>
        <radialGradient id="lab-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="35%" stopColor="#8fd6ff" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#2f4cf6" stopOpacity="0" />
        </radialGradient>
        <filter id="lab-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer HUD */}
      <g className="lab-spin" opacity={locked ? 0.35 : 0.7}>
        {ticks.map((tick) => (
          <line
            key={tick.key}
            x1={tick.x1}
            y1={tick.y1}
            x2={tick.x2}
            y2={tick.y2}
            stroke="#8fd6ff"
            strokeWidth={tick.key % 6 === 0 ? 1.6 : 0.8}
            strokeOpacity={tick.key % 6 === 0 ? 0.8 : 0.4}
          />
        ))}
      </g>
      <g className="lab-spin-rev">
        <circle
          cx={CX}
          cy={CY}
          r={240}
          fill="none"
          stroke="#8fd6ff"
          strokeOpacity={locked ? 0.15 : 0.3}
          strokeDasharray="2 10 40 10"
        />
      </g>

      {/* Experience ring: brightens once the build has somewhere to live */}
      <circle
        cx={CX}
        cy={CY}
        r={212}
        fill="none"
        stroke="#8fd6ff"
        strokeOpacity={experience.length ? 0.45 : 0.14}
        strokeDasharray="1 6"
        className={experience.length ? "lab-pulse" : undefined}
      />

      {/* Module ring */}
      <circle cx={CX} cy={CY} r={150} fill="none" stroke="#8fd6ff" strokeOpacity={locked ? 0.12 : 0.28} />
      {modules.map((module, index) => {
        const angle = -90 + (index * 360) / modules.length;
        const node = polar(150, angle);
        const from = polar(72, angle);
        const label = polar(172, angle);
        const cos = Math.cos((angle * Math.PI) / 180);
        const sin = Math.sin((angle * Math.PI) / 180);
        const anchor = cos > 0.3 ? "start" : cos < -0.3 ? "end" : "middle";
        const dy = sin > 0.5 ? 12 : sin < -0.5 ? -4 : 4;
        return (
          <g key={module.id}>
            <line
              x1={from.x}
              y1={from.y}
              x2={node.x}
              y2={node.y}
              stroke="#8fd6ff"
              strokeOpacity="0.65"
              strokeWidth="1.2"
              className="lab-flow"
            />
            <g className="lab-pop">
              <circle cx={node.x} cy={node.y} r={13} fill="#8fd6ff" fillOpacity="0.16" />
              <circle cx={node.x} cy={node.y} r={6} fill="#c9ecff" filter="url(#lab-glow)" />
            </g>
            <text
              x={label.x}
              y={label.y + dy}
              textAnchor={anchor}
              fill="#e6f5ff"
              fontSize="15"
              className="lab-fade"
            >
              {module.title.split(" & ")[0]}
            </text>
          </g>
        );
      })}

      {/* Intelligence particles */}
      {intelligence > 0 ? (
        <g className="lab-spin-fast">
          {Array.from({ length: intelligence * 3 }, (_, i) => {
            const p = polar(98, (i * 360) / (intelligence * 3));
            return <circle key={i} cx={p.x} cy={p.y} r={2.6} fill="#ffffff" filter="url(#lab-glow)" />;
          })}
        </g>
      ) : null}

      {/* Core */}
      <circle cx={CX} cy={CY} r={96} fill="url(#lab-core)" opacity={Math.min(coreGlow, 0.95)} className="lab-pulse" />
      <circle cx={CX} cy={CY} r={70} fill="#030a4a" fillOpacity="0.85" stroke="#8fd6ff" strokeOpacity="0.7" />
      <g className="lab-spin-fast">
        <circle
          cx={CX}
          cy={CY}
          r={60}
          fill="none"
          stroke="#8fd6ff"
          strokeOpacity="0.55"
          strokeDasharray="14 8"
        />
      </g>
      {locked ? (
        <text x={CX} y={CY + 5} textAnchor="middle" fill="#8fd6ff" fontSize="13" letterSpacing="3" className="lab-mono">
          LOCKED
        </text>
      ) : (
        <>
          {company ? (
            <text
              x={CX}
              y={CY - 12}
              textAnchor="middle"
              fill="#8fd6ff"
              fontSize="10.5"
              letterSpacing="2"
              className="lab-mono"
            >
              {company.length > 18 ? `${company.slice(0, 17)}…` : company}
            </text>
          ) : null}
          <text x={CX} y={CY + 12} textAnchor="middle" fill="#ffffff" fontSize={core ? 15 : 12}>
            {core ?? "AWAITING CORE"}
          </text>
        </>
      )}
    </svg>
  );
}

/* ---------------------------------------------------------------------------
 * The lab
 * ------------------------------------------------------------------------ */

export function BuildLab() {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("gate");
  const [lead, setLead] = useState<Lead>({ name: "", company: "", email: "", phone: "" });
  const [buildId, setBuildId] = useState("");
  const [gateError, setGateError] = useState("");
  const [entering, setEntering] = useState(false);

  const [step, setStep] = useState(0);
  const [fieldId, setFieldId] = useState<string>("");
  const [modules, setModules] = useState<string[]>([]);
  const [experience, setExperience] = useState<string[]>([]);
  const [intelligence, setIntelligence] = useState<string[]>([]);
  const [voice, setVoice] = useState("");

  const [note, setNote] = useState("");
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  const [bootCount, setBootCount] = useState(0);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const field: LabField | undefined = labFields.find((item) => item.id === fieldId);
  const chosenModules = field ? field.modules.filter((item) => modules.includes(item.id)) : [];
  const chosenExperience = labExperience.filter((item) => experience.includes(item.id));
  const chosenIntelligence = labIntelligence.filter((item) => intelligence.includes(item.id));

  const bootLines = [
    `Identity confirmed: ${lead.name}`,
    `Allocating private workspace for ${lead.company}`,
    `Loading module library: ${labFields.length} cores, ${labFields.length * 5} modules`,
    "Calibrating holographic interface",
    "Access granted",
  ];

  // Boot sequence: reveal one line at a time, then open the lab.
  const bootTotal = bootLines.length;
  useEffect(() => {
    if (phase !== "boot") return;
    const done = bootCount >= bootTotal;
    const timer = window.setTimeout(
      () => (done ? setPhase("lab") : setBootCount((count) => count + 1)),
      reduce ? 60 : done ? 700 : 520,
    );
    return () => window.clearTimeout(timer);
  }, [phase, bootCount, bootTotal, reduce]);

  // Assembly animation, then the blueprint.
  useEffect(() => {
    if (phase !== "assemble") return;
    const timer = window.setTimeout(() => setPhase("blueprint"), reduce ? 0 : 2400);
    return () => window.clearTimeout(timer);
  }, [phase, reduce]);

  // Move focus to the new heading whenever the view changes.
  useEffect(() => {
    if (phase === "lab" || phase === "blueprint" || phase === "sent") {
      headingRef.current?.focus({ preventScroll: true });
    }
  }, [phase, step]);

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  async function enter(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setGateError("");
    const form = new FormData(event.currentTarget);
    const next: Lead = {
      name: String(form.get("name") ?? "").trim(),
      company: String(form.get("company") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      phone: String(form.get("phone") ?? "").trim(),
    };

    setEntering(true);
    const response = await fetch("/api/build", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kind: "lead", ...next, website: form.get("website") }),
    }).catch(() => null);
    setEntering(false);

    // A bad entry is the visitor's to fix; a delivery hiccup must not lock
    // them out, because the blueprint send carries their details again.
    if (response?.status === 400) {
      const body = await response.json().catch(() => ({}));
      setGateError(body?.error || "Please check your details.");
      return;
    }

    setLead(next);
    setBuildId(makeBuildId());
    setBootCount(0);
    setVoice(`Welcome to the lab, ${firstName(next.name)}. ${stepVoice[0]}`);
    setPhase("boot");
    scrollTop();
  }

  function chooseField(id: string) {
    if (id === fieldId) return;
    const next = labFields.find((item) => item.id === id);
    setFieldId(id);
    setModules([]);
    if (next) setVoice(next.voice);
  }

  function toggle(
    list: string[],
    setList: (value: string[]) => void,
    id: string,
    title: string,
    onLine: string,
  ) {
    if (list.includes(id)) {
      setList(list.filter((item) => item !== id));
      setVoice(`${title} disconnected.`);
    } else {
      setList([...list, id]);
      setVoice(onLine);
    }
  }

  const canContinue =
    (step === 0 && Boolean(field)) ||
    (step === 1 && modules.length > 0) ||
    (step === 2 && experience.length > 0) ||
    step === 3;

  function goTo(next: number) {
    setStep(next);
    setVoice(stepVoice[next]);
    scrollTop();
  }

  function assemble() {
    setPhase("assemble");
    scrollTop();
  }

  async function transmit() {
    setSending(true);
    setSendError("");
    const response = await fetch("/api/build", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "blueprint",
        ...lead,
        buildId,
        field: field?.title,
        modules: chosenModules.map((item) => item.title),
        experience: chosenExperience.map((item) => item.title),
        intelligence: chosenIntelligence.map((item) => item.title),
        note,
      }),
    }).catch(() => null);
    setSending(false);

    if (response?.ok) {
      setPhase("sent");
      scrollTop();
      return;
    }
    setSendError("Transmission failed. Please try again, or email md@oglasglobal.com.");
  }

  const hologram = (
    <>
      <Hologram
        company={lead.company}
        core={field?.title}
        modules={chosenModules}
        experience={experience}
        intelligence={intelligence.length}
        assembling={phase === "assemble"}
      />
      {chosenExperience.length ? (
        <ul className="-mt-2 flex flex-wrap justify-center gap-2" aria-label="Deployed to">
          {chosenExperience.map((item) => (
            <li
              key={item.id}
              className="lab-fade lab-mono flex items-center gap-2 rounded-full border border-[#8fd6ff]/45 bg-[#0a1a8f]/70 px-3.5 py-1.5 text-[10px] text-white shadow-[0_0_20px_-6px_rgba(143,214,255,0.7)]"
            >
              <item.icon className="h-3.5 w-3.5 text-[#8fd6ff]" aria-hidden="true" />
              {item.title}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );

  return (
    <section className="lab-space -mt-20 min-h-[100svh] overflow-clip pb-20 pt-28 md:pb-24 md:pt-32">
      <div aria-hidden="true" className="lab-floor" />
      <div aria-hidden="true" className="lab-scan" />

      <div className="mx-auto w-full max-w-[1240px] px-4">
        {/* ------------------------------------------------ Gate */}
        {phase === "gate" ? (
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rise">
              <p className="lab-mono text-xs text-[#8fd6ff]">Oglas AI · Build Lab</p>
              <h1 className="mt-6 text-[2.6rem] leading-[1.02] text-white sm:text-5xl md:text-6xl lg:text-[3.7rem]">
                <span className="font-serif italic">Build the software</span>
                <br />
                your business runs on.
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/75 md:text-lg">
                Step into the lab. Choose a core, add capabilities, and watch your
                system assemble in real time, designed around the way your
                business works.
              </p>

              <div className="relative mx-auto mt-8 hidden max-w-md opacity-90 lg:block">
                <Hologram modules={[]} experience={[]} intelligence={0} locked />
              </div>
            </div>

            <form onSubmit={enter} className="lab-panel rise rounded-[1.75rem] p-6 [animation-delay:120ms] md:p-9">
              <div className="flex items-center justify-between">
                <p className="lab-mono text-xs text-[#8fd6ff]">Access request</p>
                <Lock className="h-4 w-4 text-[#8fd6ff]" aria-hidden="true" />
              </div>
              <h2 className="mt-4 text-2xl font-light text-white md:text-[1.9rem]">
                Identify yourself to enter
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-white/65">
                Your build is private and saved to your name.
              </p>

              <div className="mt-7 grid gap-4">
                <LabField label="Full name" name="name" autoComplete="name" placeholder="Your name" required />
                <LabField
                  label="Company"
                  name="company"
                  autoComplete="organization"
                  placeholder="Company name"
                  required
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <LabField
                    label="Work email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    required
                  />
                  <LabField label="Phone" name="phone" type="tel" autoComplete="tel" placeholder="+971" />
                </div>
                {/* Honeypot, hidden from people */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label>
                    Website
                    <input name="website" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>
              </div>

              <button type="submit" disabled={entering} className="lab-btn mt-8 w-full">
                <Power className="h-4 w-4" />
                {entering ? "Verifying…" : "Enter the Lab"}
              </button>

              {gateError ? (
                <p role="alert" className="mt-4 rounded-xl border border-red-300/40 bg-red-500/10 p-3 text-sm text-red-100">
                  {gateError}
                </p>
              ) : null}

              <p className="mt-5 text-xs leading-6 text-white/50">
                By entering, you agree that Oglas AI may contact you about your build. See our{" "}
                <Link href="/privacy" className="underline underline-offset-2 hover:text-white">
                  privacy policy
                </Link>
                .
              </p>
            </form>
          </div>
        ) : null}

        {/* ------------------------------------------------ Boot */}
        {phase === "boot" ? (
          <div className="mx-auto grid min-h-[60svh] max-w-2xl place-content-center gap-8">
            <div className="mx-auto w-80 md:w-[28rem]">
              <Hologram modules={[]} experience={[]} intelligence={0} company={lead.company} />
            </div>
            <ol className="lab-mono grid gap-2.5 text-xs text-[#c9ecff] md:text-[13px]" aria-live="polite">
              {bootLines.slice(0, bootCount).map((line, index) => (
                <li
                  key={line}
                  className={`lab-fade flex gap-3 ${index === bootLines.length - 1 ? "text-white" : ""}`}
                >
                  <span className="text-[#8fd6ff]">{index === bootLines.length - 1 ? "■" : ">"}</span>
                  {line}
                  {index < bootLines.length - 1 ? <span className="ml-auto text-[#8fd6ff]">OK</span> : null}
                </li>
              ))}
            </ol>
          </div>
        ) : null}

        {/* ------------------------------------------------ Lab */}
        {phase === "lab" || phase === "assemble" ? (
          <div className="lab-fade">
            {/* HUD bar */}
            <div className="lab-panel flex flex-wrap items-center justify-between gap-4 rounded-2xl px-5 py-3.5">
              <p className="lab-mono text-[11px] text-[#8fd6ff]">
                Build Lab <span className="text-white/40">/</span> {buildId}
              </p>
              <ol className="flex flex-wrap items-center gap-1.5" aria-label="Build steps">
                {steps.map((label, index) => (
                  <li key={label}>
                    <span
                      aria-current={index === step ? "step" : undefined}
                      className={`lab-mono inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] ${
                        index === step
                          ? "bg-[#8fd6ff] text-[#02041c]"
                          : index < step
                            ? "text-[#8fd6ff]"
                            : "text-white/35"
                      }`}
                    >
                      {index < step ? <Check className="h-3 w-3" aria-hidden="true" /> : `0${index + 1}`}{" "}
                      {label}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="lab-mono hidden text-[11px] text-white/55 md:block">
                Operator <span className="text-white">{firstName(lead.name)}</span>
              </p>
            </div>

            <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start">
              {/* Controls */}
              <div className="lab-panel order-2 rounded-[1.75rem] p-6 md:p-8 lg:order-1">
                <p className="lab-mono text-[11px] text-[#8fd6ff]">
                  Step 0{step + 1} / 0{steps.length}
                </p>
                <h1
                  ref={headingRef}
                  tabIndex={-1}
                  className="mt-3 text-[1.9rem] font-light leading-tight text-white outline-none md:text-[2.3rem]"
                >
                  {
                    [
                      "Choose your core",
                      "Add capabilities",
                      "Shape the experience",
                      "Add intelligence",
                    ][step]
                  }
                </h1>

                <div className="mt-7">
                  {step === 0 ? (
                    <div className="grid gap-3 sm:grid-cols-2">
                      {labFields.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          aria-pressed={item.id === fieldId}
                          onClick={() => chooseField(item.id)}
                          className="lab-option flex-col"
                        >
                          <item.icon className="h-5 w-5 text-[#8fd6ff]" aria-hidden="true" />
                          <span>
                            <span className="block text-[16px] text-white">{item.title}</span>
                            <span className="mt-1 block text-[13px] leading-5 text-white/60">{item.line}</span>
                          </span>
                        </button>
                      ))}
                    </div>
                  ) : null}

                  {step === 1 && field ? (
                    <div className="grid gap-2.5">
                      {field.modules.map((item) => {
                        const on = modules.includes(item.id);
                        return (
                          <button
                            key={item.id}
                            type="button"
                            aria-pressed={on}
                            onClick={() =>
                              toggle(modules, setModules, item.id, item.title, `${item.title} online.`)
                            }
                            className="lab-option items-center"
                          >
                            <span
                              className={`grid h-6 w-6 shrink-0 place-items-center rounded-md border ${
                                on ? "border-[#8fd6ff] bg-[#8fd6ff] text-[#02041c]" : "border-white/30"
                              }`}
                              aria-hidden="true"
                            >
                              {on ? <Check className="h-3.5 w-3.5" /> : null}
                            </span>
                            <span>
                              <span className="block text-[16px] text-white">{item.title}</span>
                              <span className="mt-0.5 block text-[13px] leading-5 text-white/60">{item.line}</span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  ) : null}

                  {step === 2 || step === 3 ? (
                    <div className="grid gap-3 sm:grid-cols-2">
                      {(step === 2 ? labExperience : labIntelligence).map((item) => {
                        const list = step === 2 ? experience : intelligence;
                        const setList = step === 2 ? setExperience : setIntelligence;
                        const lines = step === 2 ? experienceVoice : intelligenceVoice;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            aria-pressed={list.includes(item.id)}
                            onClick={() => toggle(list, setList, item.id, item.title, lines[item.id])}
                            className="lab-option flex-col"
                          >
                            <item.icon className="h-5 w-5 text-[#8fd6ff]" aria-hidden="true" />
                            <span>
                              <span className="block text-[16px] text-white">{item.title}</span>
                              <span className="mt-1 block text-[13px] leading-5 text-white/60">{item.line}</span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  ) : null}
                </div>

                <div className="mt-7 border-t border-[#8fd6ff]/15 pt-6">
                  <Voice key={voice} text={voice} />
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                  {step > 0 ? (
                    <button type="button" onClick={() => goTo(step - 1)} className="lab-btn-ghost">
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </button>
                  ) : (
                    <span />
                  )}
                  {step < steps.length - 1 ? (
                    <button
                      type="button"
                      disabled={!canContinue}
                      onClick={() => goTo(step + 1)}
                      className="lab-btn"
                    >
                      Continue
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled={phase === "assemble"}
                      onClick={assemble}
                      className="lab-btn"
                    >
                      <Sparkles className="h-4 w-4" />
                      {phase === "assemble" ? "Assembling…" : "Assemble my software"}
                    </button>
                  )}
                </div>
              </div>

              {/* Hologram */}
              <div className="order-1 lg:sticky lg:top-28 lg:order-2">
                <div className="relative mx-auto max-w-[620px]">
                  {hologram}
                  {phase === "assemble" ? (
                    <p className="lab-mono lab-pulse absolute inset-x-0 top-0 text-center text-xs text-[#8fd6ff]">
                      Compiling blueprint…
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* ------------------------------------------------ Blueprint */}
        {phase === "blueprint" ? (
          <div className="lab-fade grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="mx-auto w-full max-w-[560px]">{hologram}</div>

            <div className="lab-panel rounded-[1.75rem] p-6 md:p-9">
              <p className="lab-mono text-[11px] text-[#8fd6ff]">
                Blueprint {buildId} · Ready
              </p>
              <h1
                ref={headingRef}
                tabIndex={-1}
                className="mt-3 text-[1.9rem] font-light leading-tight text-white outline-none md:text-[2.4rem]"
              >
                <span className="font-serif italic">{lead.company}</span>
                <br />
                {field?.title} System
              </h1>

              <dl className="mt-7 grid gap-5">
                <Spec label="Modules" items={chosenModules.map((item) => item.title)} />
                <Spec label="Experience" items={chosenExperience.map((item) => item.title)} />
                <Spec
                  label="Intelligence"
                  items={chosenIntelligence.map((item) => item.title)}
                  empty="Ready to add later"
                />
              </dl>

              <label className="mt-7 grid gap-2 text-[13px] text-white/70">
                Anything our engineers should know? (optional)
                <textarea
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                  rows={3}
                  maxLength={2000}
                  placeholder="Current systems, number of users, branches…"
                  className="lab-input h-auto resize-none py-3 leading-6"
                />
              </label>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button type="button" onClick={transmit} disabled={sending} className="lab-btn">
                  <Send className="h-4 w-4" />
                  {sending ? "Transmitting…" : "Send blueprint to Oglas AI"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPhase("lab");
                    setVoice("Back in the lab. Adjust anything you like.");
                  }}
                  className="lab-btn-ghost"
                >
                  <RotateCcw className="h-4 w-4" />
                  Adjust build
                </button>
              </div>

              {sendError ? (
                <p role="alert" className="mt-4 rounded-xl border border-red-300/40 bg-red-500/10 p-3 text-sm text-red-100">
                  {sendError}
                </p>
              ) : null}
            </div>
          </div>
        ) : null}

        {/* ------------------------------------------------ Sent */}
        {phase === "sent" ? (
          <div className="lab-fade mx-auto grid max-w-2xl place-items-center text-center">
            <div className="w-full max-w-sm md:max-w-md">{hologram}</div>
            <p className="lab-mono mt-4 text-[11px] text-[#8fd6ff]">Transmission received · {buildId}</p>
            <h1
              ref={headingRef}
              tabIndex={-1}
              className="mt-4 text-[2.2rem] font-light leading-tight text-white outline-none md:text-[3rem]"
            >
              Your blueprint is with our engineers, {firstName(lead.name)}.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/75 md:text-lg">
              The Oglas AI team will review your build and contact you to walk
              through it together.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/custom-software-development" className="lab-btn">
                Explore custom software
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/" className="lab-btn-ghost">
                Back to home
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function LabField({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-[13px] text-white/70">
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        maxLength={200}
        className="lab-input"
      />
    </label>
  );
}

function Spec({ label, items, empty }: { label: string; items: string[]; empty?: string }) {
  return (
    <div>
      <dt className="lab-mono text-[10px] text-[#8fd6ff]">{label}</dt>
      <dd className="mt-2.5 flex flex-wrap gap-2">
        {items.length ? (
          items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#8fd6ff]/35 bg-[#8fd6ff]/10 px-3.5 py-1.5 text-[13px] text-white"
            >
              {item}
            </span>
          ))
        ) : (
          <span className="text-[13px] text-white/50">{empty}</span>
        )}
      </dd>
    </div>
  );
}
