import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Instagram,
  Facebook,
  Github,
  Mail,
  MapPin,
  Phone,
  Check,
  Copy,
  ArrowRight,
  ArrowUpRight,
  ArrowDown,
  Code2,
  Truck,
  GraduationCap,
  HeartHandshake,
  Hand,
  type LucideIcon,
} from "lucide-react";

import {
  DESCRIPTION,
  EMAIL,
  FACEBOOK,
  GITHUB,
  INSTAGRAM,
  LOCATION,
  PHONE,
  PHONE_HREF,
  PORTRAIT,
  PORTRAIT_SMALL,
  SHARE_DESCRIPTION,
  SHARE_IMAGE,
  SITE_URL,
  TITLE,
  faqs,
  projects,
  stack,
  structuredData,
} from "../lib/site";

const SHARE_ALT = "Arif Hussain, software developer and founder of BigSur Corp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: SHARE_DESCRIPTION },
      { property: "og:image", content: SHARE_IMAGE },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: SHARE_ALT },
      { property: "profile:first_name", content: "Arif" },
      { property: "profile:last_name", content: "Hussain" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: SHARE_DESCRIPTION },
      { name: "twitter:image", content: SHARE_IMAGE },
      { name: "twitter:image:alt", content: SHARE_ALT },
      { "script:ld+json": structuredData() },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "me", href: GITHUB },
    ],
  }),
  component: IndexPage,
});

/* -------------------------------------------------------------------------- */
/*                                    Data                                    */
/* -------------------------------------------------------------------------- */

const socials = [
  { label: "Arif Hussain on GitHub", href: GITHUB, icon: Github },
  { label: "Arif Hussain on Facebook", href: FACEBOOK, icon: Facebook },
  { label: "Arif Hussain on Instagram", href: INSTAGRAM, icon: Instagram },
  { label: "Email Arif Hussain", href: `mailto:${EMAIL}`, icon: Mail },
];

const sections = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Questions", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const facts = [
  { term: "Based in", value: "Assam, India" },
  { term: "Company", value: "BigSur Corp" },
  { term: "Writing software", value: "8 years" },
  { term: "Building now", value: "ZiloOne" },
];

type Theme = { bg: string; fg: string; accent: string; disc: string };

type Scene = {
  id: string;
  /** Giant word behind the portrait */
  word: string;
  /** Short label used in the nav + badge */
  label: string;
  icon: LucideIcon;
  theme: Theme;
  kicker: string;
  title: string;
  role?: string;
  desc: string;
  href?: string;
  logo?: string;
  itemsTitle: string;
  items: { name: string; note?: string; href?: string }[];
};

const scenes: Scene[] = [
  {
    id: "intro",
    word: "Arif Hussain",
    label: "Hello",
    icon: Hand,
    theme: { bg: "#f8f6f0", fg: "#1f4b44", accent: "#e5a93b", disc: "#ffffff" },
    kicker: "Hi, I'm Arif",
    title: "One person, four roles.",
    desc: "Software developer, distributor, educator and trustee from Assam, India. Scroll to meet each one.",
    itemsTitle: "In short",
    items: [
      { name: "08", note: "years building software" },
      { name: "1999", note: "family business since" },
      { name: "04", note: "roles, one person" },
    ],
  },
  {
    id: "developer",
    word: "Developer",
    label: "Developer",
    icon: Code2,
    theme: { bg: "#12332d", fg: "#f6f3ea", accent: "#e5a93b", disc: "#1d4a42" },
    kicker: "01 — I write software",
    title: "BigSur Corp",
    role: "Founder & CEO",
    desc: "I build reliable software systems — ERP, billing and a self-hosted business suite — end to end in TypeScript.",
    href: "https://bigsur.in",
    logo: "/img/bigsur-corp.webp",
    itemsTitle: "Products",
    items: [
      { name: "ZiloOne", note: "Self-hosted business suite", href: "https://zilomail.in" },
      { name: "Syntelix ERP", note: "Multi-tenant · 10k+ users", href: "https://bigsur.in/syntelix" },
      { name: "Zilo System & WinAcc Pro", note: "GST billing · offline-first", href: "https://bigsur.in/zilosystem" },
      { name: "GradeSync & DMS", note: "Schools & distribution", href: "https://bigsur.in/solutions" },
    ],
  },
  {
    id: "distributor",
    word: "Distributor",
    label: "Distributor",
    icon: Truck,
    theme: { bg: "#e5a93b", fg: "#1c2522", accent: "#1f4b44", disc: "#f3c467" },
    kicker: "02 — I move goods",
    title: "Arif Plastic Agency",
    role: "Sales Director",
    desc: "Regional super stockist and distribution partner since 1999, carrying leading brands across Mankachar and beyond.",
    href: "https://www.arifplasticagency.in",
    logo: "/img/arif-plastic-agency.webp",
    itemsTitle: "Brands we carry",
    items: [
      { name: "Pidilite Industries" },
      { name: "Mondelez India" },
      { name: "Kimberly-Clark" },
      { name: "Unicharm" },
    ],
  },
  {
    id: "educator",
    word: "Educator",
    label: "Educator",
    icon: GraduationCap,
    theme: { bg: "#14305a", fg: "#f3f1ea", accent: "#8fc0ff", disc: "#1f4479" },
    kicker: "03 — I run a school",
    title: "BlueCrest Royal Academy",
    role: "Founder & Trustee",
    desc: "A K-12 school at Kaloghat, South Salmara Mankachar, with modern labs, STEM programs and global standards.",
    href: "https://www.bluecrestroyalacademy.com",
    logo: "/img/bluecrest-royal-academy.webp",
    itemsTitle: "On campus",
    items: [
      { name: "Kindergarten → Grade 12" },
      { name: "Modern labs & STEM" },
      { name: "Run under Abul Foundation" },
    ],
  },
  {
    id: "trustee",
    word: "Trustee",
    label: "Trustee",
    icon: HeartHandshake,
    theme: { bg: "#f0dfd0", fg: "#5b2618", accent: "#c8553d", disc: "#f8ede2" },
    kicker: "04 — I give back",
    title: "Abul Foundation",
    role: "Founder & Secretary",
    desc: "A registered non-profit trust in memory of late Abul Hussain, advancing education, healthcare and community welfare.",
    href: "https://www.abulfoundation.org",
    logo: "/img/abul-foundation.webp",
    itemsTitle: "What we fund",
    items: [
      { name: "Education scholarships" },
      { name: "Medical clinics" },
      { name: "Community welfare" },
      { name: "Darpan AS/2026/0952495" },
    ],
  },
];

const roles = scenes.slice(1);
const LAST = scenes.length - 1;
const RING = 2 * Math.PI * 196; // circumference of the progress ring

const zilooneShots = [
  { src: "/img/ziloone-invoice.webp", label: "Invoicing" },
  { src: "/img/ziloone-accounting.webp", label: "Accounting" },
  { src: "/img/ziloone-crm-leads.webp", label: "CRM" },
  { src: "/img/ziloone-hr-employees.webp", label: "HR" },
  { src: "/img/ziloone-mail-calendar.webp", label: "Mail" },
  { src: "/img/ziloone-chat.webp", label: "Chat" },
];

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

/* -------------------------------------------------------------------------- */
/*                              Small components                              */
/* -------------------------------------------------------------------------- */

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={{ "--delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

/**
 * A word whose letters roll in from below when it becomes active and roll out
 * through the top when the next one takes over.
 */
function RollingWord({ text, state }: { text: string; state: "before" | "active" | "after" }) {
  const y = state === "active" ? "0%" : state === "before" ? "-110%" : "110%";
  return (
    <>
      {text.split("").map((ch, i) => (
        <span key={i} className="inline-block overflow-hidden py-[0.08em]">
          <span
            className="inline-block will-change-transform"
            style={{
              transform: `translateY(${y})`,
              transition: `transform 0.8s ${EASE} ${i * 28}ms`,
            }}
          >
            {ch === " " ? " " : ch}
          </span>
        </span>
      ))}
    </>
  );
}

/** Wraps scene content so it fades/slides with a per-line stagger. */
function Line({ active, i, children, className = "" }: { active: boolean; i: number; children: ReactNode; className?: string }) {
  return (
    <div
      className={className}
      style={{
        opacity: active ? 1 : 0,
        transform: active ? "none" : "translateY(18px)",
        transition: `opacity 0.6s ${EASE} ${active ? 150 + i * 70 : 0}ms, transform 0.6s ${EASE} ${active ? 150 + i * 70 : 0}ms`,
      }}
    >
      {children}
    </div>
  );
}

function ZiloShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % zilooneShots.length), 3000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div className="relative pb-12 pr-6 sm:pr-12" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {/* Desktop dashboard in a browser frame */}
      <div className="rounded-2xl border border-white/10 bg-white overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#efeadf] bg-[#fbfaf6]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#e6e0d2]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#e6e0d2]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#e6e0d2]" />
          <span className="ml-3 text-[11px] font-mono text-[#8a948f]">zilomail.in</span>
        </div>
        <img
          src="/img/ziloone-dashboard.webp"
          srcSet="/img/ziloone-dashboard-800.webp 800w, /img/ziloone-dashboard.webp 1600w"
          sizes="(min-width: 1024px) 560px, 90vw"
          width={1600}
          height={1000}
          alt="ZiloOne dashboard: sales, purchases, receivables and cash for the month"
          loading="lazy"
          decoding="async"
          className="block w-full aspect-[16/10] object-cover object-top"
        />
      </div>

      {/* Phone cycling through the mobile apps */}
      <div className="absolute bottom-0 right-0 w-[28%] min-w-[104px] animate-float">
        <div className="relative aspect-[780/1688] rounded-[1.3rem] sm:rounded-[1.8rem] border-[5px] border-[#0b1f1b] bg-[#0b1f1b] overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.6)]">
          {zilooneShots.map((shot, i) => (
            <img
              key={shot.src}
              src={shot.src}
              alt={`ZiloOne ${shot.label} on a phone`}
              width={480}
              height={1039}
              loading="lazy"
              decoding="async"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                i === active ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Which app is showing */}
      <div className="absolute bottom-0 left-0 flex flex-wrap gap-1 max-w-[66%] text-[11px] font-medium">
        {zilooneShots.map((shot, i) => (
          <button
            key={shot.src}
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            className={`rounded-full px-3 py-1 transition-colors duration-300 ${
              i === active ? "bg-[#e5a93b] text-[#12332d]" : "text-white/50 hover:text-white"
            }`}
          >
            {shot.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

function IndexPage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [scene, setScene] = useState(0);
  const [past, setPast] = useState(false); // scrolled beyond the pinned stage
  const [need, setNeed] = useState(0); // which role the visitor picked in contact
  const [copied, setCopied] = useState(false);

  // Map scroll position inside the tall stage → active scene + CSS progress vars
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = stageRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const dist = rect.height - window.innerHeight;
      const p = dist > 0 ? Math.min(Math.max(-rect.top / dist, 0), 1) : 0;
      const f = p * LAST;
      const idx = Math.round(f);
      el.style.setProperty("--p", p.toFixed(4));
      el.style.setProperty("--local", (f - idx).toFixed(4));
      setScene(idx);
      setPast(rect.bottom < 80);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const goTo = (i: number) => {
    const el = stageRef.current;
    if (!el) return;
    const dist = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: el.offsetTop + (dist * i) / LAST, behavior: "smooth" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const current = scenes[scene];
  const theme = past ? scenes[0].theme : current.theme;
  const Badge = current.icon;
  const needed = roles[need];

  return (
    <div
      className="bg-[#f8f6f0] text-[#1c2522] selection:bg-[#e5a93b]/40"
      style={
        {
          "--bg": theme.bg,
          "--fg": theme.fg,
          "--accent": theme.accent,
          "--disc": theme.disc,
        } as CSSProperties
      }
    >
      {/* ------------------------------- Header ------------------------------- */}
      <header
        className={`fixed inset-x-0 top-0 z-50 text-[var(--fg)] transition-colors duration-700 ${
          past ? "bg-[#f8f6f0]/85 backdrop-blur-md" : ""
        }`}
      >
        <div className="mx-auto flex h-16 sm:h-20 max-w-[90rem] items-center justify-between px-6 sm:px-10">
          <button onClick={() => goTo(0)} className="text-2xl font-extrabold tracking-tight animate-fade-in">
            Arif<span className="text-[var(--accent)] transition-colors duration-700">.</span>
          </button>

          <div className="flex items-center gap-5">
            <span
              className={`hidden sm:block font-mono text-xs tabular-nums transition-opacity duration-500 ${
                scene === 0 || past ? "opacity-0" : "opacity-70"
              }`}
            >
              0{Math.max(scene, 1)} / 0{LAST}
            </span>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--fg)] px-5 py-2.5 text-sm font-semibold text-[var(--bg)] transition-all duration-700 hover:gap-3 active:scale-95 animate-fade-in"
            >
              Say hello
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* ---------------- The stage: one portrait, four roles ----------------- */}
      <div ref={stageRef} style={{ height: `${scenes.length * 100}svh` }} className="relative">
        <section
          className="sticky top-0 h-[100svh] overflow-hidden bg-[var(--bg)] text-[var(--fg)] transition-colors duration-700 [--s:min(34svh,68vw)] lg:[--s:min(56svh,36vw)]"
          aria-label={`${current.label}: ${current.title}`}
        >
          {/* Giant rolling word (drifts sideways with the scroll) */}
          <div
            className="pointer-events-none absolute inset-x-0 top-[9svh] h-[16svh] select-none lg:top-[11svh] lg:h-[28svh]"
            style={{ transform: "translateX(calc(var(--local, 0) * -12vw))" }}
          >
            {scenes.map((s, i) => {
              // The name is the page's one h1; the role words are decoration.
              const Word = i === 0 ? "h1" : "div";
              return (
                <Word
                  key={s.id}
                  aria-hidden={i === 0 ? undefined : true}
                  aria-label={i === 0 ? "Arif Hussain" : undefined}
                  className="absolute inset-0 m-0 flex items-center justify-center whitespace-nowrap font-extrabold uppercase leading-none tracking-[-0.045em]"
                  style={{ fontSize: `min(27svh, ${128 / s.word.length}vw)` }}
                >
                  <span aria-hidden className="contents">
                    <RollingWord text={s.word} state={i === scene ? "active" : i < scene ? "before" : "after"} />
                  </span>
                </Word>
              );
            })}
          </div>

          {/* Portrait — never moves; the ring fills as the roles go by */}
          <div className="absolute left-1/2 top-[24svh] h-[var(--s)] w-[var(--s)] -translate-x-1/2 lg:bottom-[11svh] lg:top-auto">
            <svg
              viewBox="0 0 400 400"
              className="pointer-events-none absolute -inset-[9%] h-[118%] w-[118%] animate-spin-slow opacity-25"
            >
              <circle cx="200" cy="200" r="196" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 10" />
            </svg>

            <div className="absolute inset-0 rounded-full bg-[var(--disc)] transition-colors duration-700" />

            <svg viewBox="0 0 400 400" className="pointer-events-none absolute inset-0 h-full w-full -rotate-90">
              <circle cx="200" cy="200" r="196" fill="none" stroke="currentColor" strokeOpacity="0.15" strokeWidth="3" />
              <circle
                cx="200"
                cy="200"
                r="196"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={RING}
                style={{
                  strokeDashoffset: `calc(${RING}px * (1 - var(--p, 0)))`,
                  transition: "stroke 0.7s",
                }}
              />
            </svg>

            {/* Cutout: clipped along the bottom of the disc, head pops out the top */}
            <div
              className="absolute inset-x-0 bottom-0 h-[124%] overflow-hidden"
              style={{ clipPath: "inset(0 0 0 0 round 0 0 9999px 9999px)" }}
            >
              <img
                src={PORTRAIT}
                srcSet={`${PORTRAIT_SMALL} 720w, ${PORTRAIT} 1254w`}
                sizes="(min-width: 1024px) min(67vh, 43vw), min(41vh, 81vw)"
                width={1254}
                height={1254}
                alt="Portrait of Arif Hussain, software developer from Assam, India"
                fetchPriority="high"
                decoding="async"
                className="absolute bottom-0 left-1/2 h-[96%] w-auto max-w-none -translate-x-1/2 select-none animate-fade-up"
                style={{ animationDelay: "250ms", filter: "drop-shadow(0 18px 30px rgba(0,0,0,0.22))" }}
              />
            </div>

            {/* Role badge */}
            <div
              key={current.id}
              className="absolute -right-2 bottom-[8%] flex items-center gap-2 rounded-full bg-[var(--fg)] px-3.5 py-2 text-xs font-semibold text-[var(--bg)] shadow-xl animate-pop-in sm:-right-6"
            >
              <Badge className="h-3.5 w-3.5" />
              {current.label}
            </div>
          </div>

          {/* Scene copy — every scene is stacked here; only the active one shows */}
          {scenes.map((s, i) => {
            const active = i === scene;
            return (
              <div key={s.id} className={active ? "" : "pointer-events-none"} aria-hidden={!active}>
                {/* Left (desktop) / below portrait (mobile) */}
                <div className="absolute inset-x-6 top-[60.5svh] text-center lg:inset-x-auto lg:bottom-[13svh] lg:left-[max(2.5rem,calc(50vw-40rem))] lg:top-auto lg:w-[min(21rem,27vw)] lg:text-left">
                  <Line active={active} i={0} className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-70">
                    {s.kicker}
                  </Line>
                  <Line active={active} i={1} className="mt-2 flex items-center justify-center gap-3 lg:mt-3 lg:justify-start">
                    {s.logo && (
                      <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-md lg:flex">
                        <img src={s.logo} alt={`${s.title} logo`} width={44} height={44} loading="lazy" decoding="async" className="h-full w-full object-contain" />
                      </span>
                    )}
                    <h2 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">{s.title}</h2>
                  </Line>
                  {s.role && (
                    <Line active={active} i={2} className="mt-1 text-sm font-semibold text-[var(--accent)]">
                      {s.role}
                    </Line>
                  )}
                  <Line
                    active={active}
                    i={3}
                    className="mx-auto mt-2 max-w-sm text-[13px] leading-relaxed opacity-80 sm:text-sm lg:mx-0 lg:mt-4"
                  >
                    {s.desc}
                  </Line>
                  <Line active={active} i={4} className="mt-3 lg:mt-6">
                    {s.href ? (
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={active ? 0 : -1}
                        className="group inline-flex items-center gap-1.5 text-sm font-semibold"
                      >
                        <span className="link-underline" data-active="true">
                          {s.href.replace(/^https?:\/\/(www\.)?/, "")}
                        </span>
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    ) : (
                      <button
                        onClick={() => goTo(1)}
                        tabIndex={active ? 0 : -1}
                        className="inline-flex items-center gap-2 text-sm font-semibold"
                      >
                        <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-current/30">
                          <ArrowDown className="h-4 w-4 animate-scroll-cue" />
                        </span>
                        Scroll
                      </button>
                    )}
                  </Line>
                </div>

                {/* Right (desktop only) */}
                <div className="absolute bottom-[13svh] right-[max(2.5rem,calc(50vw-40rem))] hidden w-[min(21rem,27vw)] lg:block">
                  <Line active={active} i={1} className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-70">
                    {s.itemsTitle}
                  </Line>
                  <ul className="mt-3">
                    {s.items.map((item, j) => {
                      const inner = (
                        <>
                          <span className="flex items-baseline gap-3">
                            <span className={s.id === "intro" ? "text-2xl font-extrabold tabular-nums" : "text-[15px] font-semibold"}>
                              {item.name}
                            </span>
                            {item.note && <span className="text-xs opacity-65">{item.note}</span>}
                          </span>
                          {item.href && (
                            <ArrowUpRight className="h-4 w-4 shrink-0 opacity-40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                          )}
                        </>
                      );
                      return (
                        <li key={item.name}>
                          <Line active={active} i={2 + j} className="border-b border-current/15">
                            {item.href ? (
                              <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                tabIndex={active ? 0 : -1}
                                className="group flex items-center justify-between gap-3 py-3 transition-[padding] duration-300 hover:pl-2"
                              >
                                {inner}
                              </a>
                            ) : (
                              <div className="flex items-center justify-between gap-3 py-3">{inner}</div>
                            )}
                          </Line>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}

          {/* Role switcher */}
          <nav className="absolute inset-x-0 bottom-0 flex h-[8svh] min-h-12 items-center justify-center gap-1 sm:gap-2" aria-label="Roles">
            {roles.map((r, i) => {
              const active = scene === i + 1;
              return (
                <button
                  key={r.id}
                  onClick={() => goTo(i + 1)}
                  className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-500 ${
                    active ? "bg-[var(--fg)] text-[var(--bg)]" : "opacity-50 hover:opacity-100"
                  }`}
                >
                  <span className="font-mono">0{i + 1}</span>
                  <span className={active ? "" : "hidden sm:inline"}>{r.label}</span>
                </button>
              );
            })}
          </nav>
        </section>
      </div>

      {/* -------------------------------- About ------------------------------- */}
      <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24 sm:px-10 sm:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#1f4b44]/70">About Arif Hussain</p>
            <h2 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-[#1f4b44] sm:text-5xl">
              A developer who runs the businesses he writes software for<span className="text-[#e5a93b]">.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7">
            <div className="space-y-5 text-[15px] leading-relaxed text-[#3c4743] sm:text-[17px]">
              <p>
                I'm <strong className="font-semibold text-[#1c2522]">Arif Hussain</strong>, a software developer and
                founder from Assam, India. I've been writing software for eight years, and in 2023 I started{" "}
                <a href="https://bigsur.in" target="_blank" rel="noopener" className="font-semibold text-[#1f4b44] underline decoration-[#e5a93b] decoration-2 underline-offset-4">
                  BigSur Corp
                </a>{" "}
                in Guwahati to turn that work into products: a self-hosted business suite, a multi-tenant ERP, offline
                billing and accounting, and a data platform.
              </p>
              <p>
                I like owning the whole stack: product, architecture, code, security and the Linux servers it runs on.
                Most of it is TypeScript, React and Node.js on PostgreSQL, with Rust where speed matters.
              </p>
              <p>
                I also know the other side of the screen. My family has run a distribution agency in Mankachar since
                1999, and I founded a K-12 school and a charitable trust there. So when I build billing, distribution or
                school software, I'm building for work I do myself.
              </p>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-x-8 sm:grid-cols-4">
              {facts.map((f) => (
                <div key={f.term} className="border-t border-[#d9d2c2] py-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#66706c]">{f.term}</dt>
                  <dd className="mt-1.5 text-[15px] font-bold text-[#1f4b44]">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------- Work -------------------------------- */}
      <section id="work" className="scroll-mt-20 border-y border-[#e6e0d2] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#1f4b44]/70">Selected work</p>
            <h2 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-[#1f4b44] sm:text-6xl">
              Software I've built<span className="text-[#e5a93b]">.</span>
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-x-12 sm:grid-cols-2 lg:gap-x-16">
            {projects.map((p, i) => (
              <li key={p.name}>
                <Reveal delay={(i % 2) * 100}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener"
                    className="group block border-t border-[#e6e0d2] py-7 transition-[padding] duration-300 hover:pl-2"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl font-extrabold tracking-tight text-[#1f4b44] sm:text-2xl">{p.name}</h3>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-[#1f4b44]/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#1f4b44]" />
                    </div>
                    <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[#8a5f0e]">{p.kind}</p>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-[#4a5551]">{p.desc}</p>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------- Now building: ZiloOne ---------------------- */}
      <section className="bg-[#12332d] text-[#f6f3ea]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 sm:px-10 sm:py-32 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#e5a93b]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#e5a93b] opacity-60" />
                <span className="relative h-2 w-2 rounded-full bg-[#e5a93b]" />
              </span>
              Now building
            </div>
            <h2 className="mt-5 text-5xl font-extrabold tracking-[-0.04em] sm:text-7xl">ZiloOne</h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/70">
              Invoicing, inventory, HR, accounting, CRM, mail, meetings, drive and docs — one self-hosted suite on a
              single Linux server, with one sign-in.
            </p>
            <a
              href="https://zilomail.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#e5a93b] px-6 py-3 text-sm font-semibold text-[#12332d] transition-all duration-300 hover:gap-3 active:scale-95"
            >
              Visit zilomail.in
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={150}>
            <ZiloShowcase />
          </Reveal>
        </div>
      </section>

      {/* -------------------------------- Stack ------------------------------- */}
      <section id="stack" className="mx-auto max-w-6xl scroll-mt-20 px-6 pt-24 sm:px-10 sm:pt-32">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#1f4b44]/70">Stack</p>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-[#1f4b44] sm:text-6xl">
            What I build with<span className="text-[#e5a93b]">.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-x-8 lg:grid-cols-3 lg:gap-x-16">
          {stack.map((s, i) => (
            <Reveal key={s.group} delay={(i % 3) * 80} className="border-t border-[#d9d2c2] py-6">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#66706c]">{s.group}</h3>
              <ul className="mt-3 space-y-1.5 text-[15px] font-semibold text-[#1f4b44]">
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------ Questions ----------------------------- */}
      <section id="faq" className="mx-auto max-w-6xl scroll-mt-20 px-6 pt-24 sm:px-10 sm:pt-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#1f4b44]/70">Questions</p>
            <h2 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-[#1f4b44] sm:text-5xl">
              The short answers<span className="text-[#e5a93b]">.</span>
            </h2>
          </Reveal>
          <div className="lg:col-span-8">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 60} className="border-t border-[#d9d2c2] py-6">
                <h3 className="text-lg font-bold tracking-tight text-[#1f4b44]">{f.q}</h3>
                <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-[#3c4743]">{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------- Contact ------------------------------ */}
      <section id="contact" className="mx-auto max-w-6xl scroll-mt-10 px-6 py-24 text-center sm:px-10 sm:py-36">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#1f4b44]/60">Which Arif do you need?</p>
          <h2 className="mt-6 text-[clamp(2.25rem,7vw,5.5rem)] font-extrabold leading-[1] tracking-[-0.04em] text-[#1f4b44]">
            I'm looking for
            <br />
            the{" "}
            <span className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]">
              <span
                key={needed.id}
                className="inline-block animate-rise rounded-[0.25em] px-[0.2em] transition-colors"
                style={{ background: needed.theme.bg, color: needed.theme.fg }}
              >
                {needed.label.toLowerCase()}
              </span>
            </span>
            <span className="text-[#e5a93b]">.</span>
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-10 flex flex-wrap justify-center gap-2">
          {roles.map((r, i) => {
            const Icon = r.icon;
            const active = need === i;
            return (
              <button
                key={r.id}
                onClick={() => setNeed(i)}
                aria-pressed={active}
                className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300 active:scale-95 ${
                  active
                    ? "border-[#1f4b44] bg-[#1f4b44] text-white"
                    : "border-[#d9d2c2] text-[#1f4b44] hover:-translate-y-0.5 hover:bg-white"
                }`}
              >
                <Icon className="h-4 w-4" />
                {r.label}
              </button>
            );
          })}
        </Reveal>

        <Reveal delay={240} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${EMAIL}?subject=${encodeURIComponent(`Hello Arif — I'm looking for the ${needed.label.toLowerCase()}`)}`}
            className="group inline-flex items-center gap-2 rounded-full bg-[#1f4b44] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:gap-3 hover:shadow-xl hover:shadow-[#1f4b44]/25 active:scale-95 sm:text-base"
          >
            <Mail className="h-4 w-4" />
            Write to the {needed.label.toLowerCase()}
            <ArrowRight className="h-4 w-4" />
          </a>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full border border-[#d9d2c2] px-5 py-4 text-sm font-semibold text-[#1f4b44] transition-all duration-300 hover:bg-white active:scale-95"
          >
            {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied!" : EMAIL}
          </button>
        </Reveal>

        <Reveal delay={320} className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-[#66706c]">
          <a href={PHONE_HREF} className="flex items-center gap-1.5 transition-colors hover:text-[#1f4b44]">
            <Phone className="h-3.5 w-3.5 text-[#e5a93b]" />
            {PHONE}
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-[#e5a93b]" />
            {LOCATION}
          </span>
        </Reveal>
      </section>

      {/* ------------------------------- Footer ------------------------------- */}
      <footer className="border-t border-[#e6e0d2]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-[#66706c] sm:flex-row sm:px-10">
          <span>
            <span className="text-sm font-extrabold text-[#1f4b44]">
              Arif<span className="text-[#e5a93b]">.</span>
            </span>{" "}
            · Developer, distributor, educator, trustee
          </span>
          <nav aria-label="On this page" className="flex flex-wrap justify-center gap-x-5 gap-y-1 font-medium">
            {sections.map((s) => (
              <a key={s.href} href={s.href} className="transition-colors hover:text-[#1f4b44]">
                {s.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-1">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href === GITHUB ? "me noopener" : "noopener noreferrer"}
                aria-label={label}
                className="rounded-full p-2 text-[#1f4b44]/60 transition-all hover:-translate-y-0.5 hover:bg-white hover:text-[#1f4b44]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <span>© {new Date().getFullYear()} Arif Hussain</span>
        </div>
      </footer>
    </div>
  );
}
