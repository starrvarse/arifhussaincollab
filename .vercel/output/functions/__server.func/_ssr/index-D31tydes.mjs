import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { H as Hand, c as CodeXml, T as Truck, G as GraduationCap, e as HeartHandshake, a as ArrowRight, b as ArrowUpRight, A as ArrowDown, M as Mail, C as Check, d as Copy, P as Phone, f as MapPin, F as Facebook, I as Instagram, L as Linkedin } from "../_libs/lucide-react.mjs";
const EMAIL = "collabwitharif@proton.me";
const PHONE = "+91 70024 14638";
const PHONE_HREF = "tel:+917002414638";
const socials = [{
  label: "Facebook",
  href: "https://www.facebook.com/hussainarif1994",
  icon: Facebook
}, {
  label: "Instagram",
  href: "https://www.instagram.com/____.kyrios.____/",
  icon: Instagram
}, {
  label: "LinkedIn",
  href: "https://linkedin.com",
  icon: Linkedin
}, {
  label: "Email",
  href: `mailto:${EMAIL}`,
  icon: Mail
}];
const scenes = [{
  id: "intro",
  word: "Arif Hussain",
  label: "Hello",
  icon: Hand,
  theme: {
    bg: "#f8f6f0",
    fg: "#1f4b44",
    accent: "#e5a93b",
    disc: "#ffffff"
  },
  kicker: "Hi, I'm Arif",
  title: "One person, four roles.",
  desc: "Developer, distributor, educator and trustee from Assam, India. Scroll to meet each one.",
  itemsTitle: "In short",
  items: [{
    name: "08",
    note: "years building software"
  }, {
    name: "1999",
    note: "family business since"
  }, {
    name: "04",
    note: "roles, one person"
  }]
}, {
  id: "developer",
  word: "Developer",
  label: "Developer",
  icon: CodeXml,
  theme: {
    bg: "#12332d",
    fg: "#f6f3ea",
    accent: "#e5a93b",
    disc: "#1d4a42"
  },
  kicker: "01 — I write software",
  title: "BigSur Corp",
  role: "Founder & CEO",
  desc: "I build reliable software systems — ERP, billing and a self-hosted business suite — end to end in TypeScript.",
  href: "https://bigsur.in",
  logo: "/BigSur-Corp-square.png",
  itemsTitle: "Products",
  items: [{
    name: "ZiloOne",
    note: "Self-hosted business suite",
    href: "https://zilomail.in"
  }, {
    name: "Syntelix ERP",
    note: "Multi-tenant · 10k+ users",
    href: "https://bigsur.in/syntelix"
  }, {
    name: "Zilo System & WinAcc Pro",
    note: "GST billing · offline-first",
    href: "https://bigsur.in/zilosystem"
  }, {
    name: "GradeSync & DMS",
    note: "Schools & distribution",
    href: "https://bigsur.in/solutions"
  }]
}, {
  id: "distributor",
  word: "Distributor",
  label: "Distributor",
  icon: Truck,
  theme: {
    bg: "#e5a93b",
    fg: "#1c2522",
    accent: "#1f4b44",
    disc: "#f3c467"
  },
  kicker: "02 — I move goods",
  title: "Arif Plastic Agency",
  role: "Sales Director",
  desc: "Regional super stockist and distribution partner since 1999, carrying leading brands across Mankachar and beyond.",
  href: "https://www.arifplasticagency.in",
  logo: "/arifplasticlogo.png",
  itemsTitle: "Brands we carry",
  items: [{
    name: "Pidilite Industries"
  }, {
    name: "Mondelez India"
  }, {
    name: "Kimberly-Clark"
  }, {
    name: "Unicharm"
  }]
}, {
  id: "educator",
  word: "Educator",
  label: "Educator",
  icon: GraduationCap,
  theme: {
    bg: "#14305a",
    fg: "#f3f1ea",
    accent: "#8fc0ff",
    disc: "#1f4479"
  },
  kicker: "03 — I run a school",
  title: "BlueCrest Royal Academy",
  role: "Founder & Trustee",
  desc: "A K-12 school at Kaloghat, South Salmara Mankachar, with modern labs, STEM programs and global standards.",
  href: "https://www.bluecrestroyalacademy.com",
  logo: "/bluecrestlogo.png",
  itemsTitle: "On campus",
  items: [{
    name: "Kindergarten → Grade 12"
  }, {
    name: "Modern labs & STEM"
  }, {
    name: "Run under Abul Foundation"
  }]
}, {
  id: "trustee",
  word: "Trustee",
  label: "Trustee",
  icon: HeartHandshake,
  theme: {
    bg: "#f0dfd0",
    fg: "#5b2618",
    accent: "#c8553d",
    disc: "#f8ede2"
  },
  kicker: "04 — I give back",
  title: "Abul Foundation",
  role: "Founder & Secretary",
  desc: "A registered non-profit trust in memory of late Abul Hussain, advancing education, healthcare and community welfare.",
  href: "https://www.abulfoundation.org",
  logo: "/abulfoundlogo.png",
  itemsTitle: "What we fund",
  items: [{
    name: "Education scholarships"
  }, {
    name: "Medical clinics"
  }, {
    name: "Community welfare"
  }, {
    name: "Darpan AS/2026/0952495"
  }]
}];
const roles = scenes.slice(1);
const LAST = scenes.length - 1;
const RING = 2 * Math.PI * 196;
const zilooneShots = [{
  src: "/ziloone/invoice.png",
  label: "Invoicing"
}, {
  src: "/ziloone/accounting.png",
  label: "Accounting"
}, {
  src: "/ziloone/crm-leads.png",
  label: "CRM"
}, {
  src: "/ziloone/hr-employees.png",
  label: "HR"
}, {
  src: "/ziloone/mail-calendar.png",
  label: "Mail"
}, {
  src: "/ziloone/chat.png",
  label: "Chat"
}];
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
function Reveal({
  children,
  delay = 0,
  className = ""
}) {
  const ref = reactExports.useRef(null);
  const [inView, setInView] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, {
      threshold: 0.15,
      rootMargin: "0px 0px -8% 0px"
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: `reveal ${inView ? "is-visible" : ""} ${className}`, style: {
    "--delay": `${delay}ms`
  }, children });
}
function RollingWord({
  text,
  state
}) {
  const y = state === "active" ? "0%" : state === "before" ? "-110%" : "110%";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: text.split("").map((ch, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block overflow-hidden py-[0.08em]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block will-change-transform", style: {
    transform: `translateY(${y})`,
    transition: `transform 0.8s ${EASE} ${i * 28}ms`
  }, children: ch === " " ? " " : ch }) }, i)) });
}
function Line({
  active,
  i,
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, style: {
    opacity: active ? 1 : 0,
    transform: active ? "none" : "translateY(18px)",
    transition: `opacity 0.6s ${EASE} ${active ? 150 + i * 70 : 0}ms, transform 0.6s ${EASE} ${active ? 150 + i * 70 : 0}ms`
  }, children });
}
function ZiloShowcase() {
  const [active, setActive] = reactExports.useState(0);
  const [paused, setPaused] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % zilooneShots.length), 3e3);
    return () => clearInterval(id);
  }, [paused]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pb-12 pr-6 sm:pr-12", onMouseEnter: () => setPaused(true), onMouseLeave: () => setPaused(false), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/10 bg-white overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-4 py-3 border-b border-[#efeadf] bg-[#fbfaf6]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-[#e6e0d2]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-[#e6e0d2]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-[#e6e0d2]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-3 text-[11px] font-mono text-[#8a948f]", children: "zilomail.in" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/ziloone/00-dashboard.png", alt: "ZiloOne dashboard", loading: "lazy", className: "block w-full aspect-[16/10] object-cover object-top" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-0 w-[28%] min-w-[104px] animate-float", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[780/1688] rounded-[1.3rem] sm:rounded-[1.8rem] border-[5px] border-[#0b1f1b] bg-[#0b1f1b] overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.6)]", children: zilooneShots.map((shot, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: shot.src, alt: `ZiloOne ${shot.label}`, loading: "lazy", className: `absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${i === active ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}` }, shot.src)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 flex flex-wrap gap-1 max-w-[66%] text-[11px] font-medium", children: zilooneShots.map((shot, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActive(i), className: `rounded-full px-3 py-1 transition-colors duration-300 ${i === active ? "bg-[#e5a93b] text-[#12332d]" : "text-white/50 hover:text-white"}`, children: shot.label }, shot.src)) })
  ] });
}
function IndexPage() {
  const stageRef = reactExports.useRef(null);
  const [scene, setScene] = reactExports.useState(0);
  const [past, setPast] = reactExports.useState(false);
  const [need, setNeed] = reactExports.useState(0);
  const [copied, setCopied] = reactExports.useState(false);
  reactExports.useEffect(() => {
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
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  const goTo = (i) => {
    const el = stageRef.current;
    if (!el) return;
    const dist = el.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: el.offsetTop + dist * i / LAST,
      behavior: "smooth"
    });
  };
  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  const current = scenes[scene];
  const theme = past ? scenes[0].theme : current.theme;
  const Badge = current.icon;
  const needed = roles[need];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#f8f6f0] text-[#1c2522] selection:bg-[#e5a93b]/40", style: {
    "--bg": theme.bg,
    "--fg": theme.fg,
    "--accent": theme.accent,
    "--disc": theme.disc
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: `fixed inset-x-0 top-0 z-50 text-[var(--fg)] transition-colors duration-700 ${past ? "bg-[#f8f6f0]/85 backdrop-blur-md" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 sm:h-20 max-w-[90rem] items-center justify-between px-6 sm:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => goTo(0), className: "text-2xl font-extrabold tracking-tight animate-fade-in", children: [
        "Arif",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--accent)] transition-colors duration-700", children: "." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `hidden sm:block font-mono text-xs tabular-nums transition-opacity duration-500 ${scene === 0 || past ? "opacity-0" : "opacity-70"}`, children: [
          "0",
          Math.max(scene, 1),
          " / 0",
          LAST
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "group inline-flex items-center gap-2 rounded-full bg-[var(--fg)] px-5 py-2.5 text-sm font-semibold text-[var(--bg)] transition-all duration-700 hover:gap-3 active:scale-95 animate-fade-in", children: [
          "Say hello",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: stageRef, style: {
      height: `${scenes.length * 100}svh`
    }, className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "sticky top-0 h-[100svh] overflow-hidden bg-[var(--bg)] text-[var(--fg)] transition-colors duration-700 [--s:min(34svh,68vw)] lg:[--s:min(56svh,36vw)]", "aria-label": `${current.label}: ${current.title}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-x-0 top-[9svh] h-[16svh] select-none lg:top-[11svh] lg:h-[28svh]", style: {
        transform: "translateX(calc(var(--local, 0) * -12vw))"
      }, children: scenes.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center whitespace-nowrap font-extrabold uppercase leading-none tracking-[-0.045em]", style: {
        fontSize: `min(27svh, ${128 / s.word.length}vw)`
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(RollingWord, { text: s.word, state: i === scene ? "active" : i < scene ? "before" : "after" }) }, s.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-1/2 top-[24svh] h-[var(--s)] w-[var(--s)] -translate-x-1/2 lg:bottom-[11svh] lg:top-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 400 400", className: "pointer-events-none absolute -inset-[9%] h-[118%] w-[118%] animate-spin-slow opacity-25", children: /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "200", cy: "200", r: "196", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeDasharray: "3 10" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full bg-[var(--disc)] transition-colors duration-700" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 400", className: "pointer-events-none absolute inset-0 h-full w-full -rotate-90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "200", cy: "200", r: "196", fill: "none", stroke: "currentColor", strokeOpacity: "0.15", strokeWidth: "3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "200", cy: "200", r: "196", fill: "none", stroke: "var(--accent)", strokeWidth: "6", strokeLinecap: "round", strokeDasharray: RING, style: {
            strokeDashoffset: `calc(${RING}px * (1 - var(--p, 0)))`,
            transition: "stroke 0.7s"
          } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-[124%] overflow-hidden", style: {
          clipPath: "inset(0 0 0 0 round 0 0 9999px 9999px)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/Intense Side-Gaze Portrait Cutout.png", alt: "Arif Hussain", className: "absolute bottom-0 left-1/2 h-[96%] w-auto max-w-none -translate-x-1/2 select-none animate-fade-up", style: {
          animationDelay: "250ms",
          filter: "drop-shadow(0 18px 30px rgba(0,0,0,0.22))"
        } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -right-2 bottom-[8%] flex items-center gap-2 rounded-full bg-[var(--fg)] px-3.5 py-2 text-xs font-semibold text-[var(--bg)] shadow-xl animate-pop-in sm:-right-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "h-3.5 w-3.5" }),
          current.label
        ] }, current.id)
      ] }),
      scenes.map((s, i) => {
        const active = i === scene;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: active ? "" : "pointer-events-none", "aria-hidden": !active, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-6 top-[60.5svh] text-center lg:inset-x-auto lg:bottom-[13svh] lg:left-[max(2.5rem,calc(50vw-40rem))] lg:top-auto lg:w-[min(21rem,27vw)] lg:text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { active, i: 0, className: "font-mono text-[11px] uppercase tracking-[0.18em] opacity-70", children: s.kicker }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Line, { active, i: 1, className: "mt-2 flex items-center justify-center gap-3 lg:mt-3 lg:justify-start", children: [
              s.logo && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-md lg:flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.logo, alt: "", className: "h-full w-full object-contain" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl", children: s.title })
            ] }),
            s.role && /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { active, i: 2, className: "mt-1 text-sm font-semibold text-[var(--accent)]", children: s.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { active, i: 3, className: "mx-auto mt-2 max-w-sm text-[13px] leading-relaxed opacity-80 sm:text-sm lg:mx-0 lg:mt-4", children: s.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { active, i: 4, className: "mt-3 lg:mt-6", children: s.href ? /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: s.href, target: "_blank", rel: "noopener noreferrer", tabIndex: active ? 0 : -1, className: "group inline-flex items-center gap-1.5 text-sm font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "link-underline", "data-active": "true", children: s.href.replace(/^https?:\/\/(www\.)?/, "") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => goTo(1), tabIndex: active ? 0 : -1, className: "inline-flex items-center gap-2 text-sm font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-current/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "h-4 w-4 animate-scroll-cue" }) }),
              "Scroll"
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-[13svh] right-[max(2.5rem,calc(50vw-40rem))] hidden w-[min(21rem,27vw)] lg:block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { active, i: 1, className: "font-mono text-[11px] uppercase tracking-[0.18em] opacity-70", children: s.itemsTitle }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3", children: s.items.map((item, j) => {
              const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-baseline gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: s.id === "intro" ? "text-2xl font-extrabold tabular-nums" : "text-[15px] font-semibold", children: item.name }),
                  item.note && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs opacity-65", children: item.note })
                ] }),
                item.href && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 shrink-0 opacity-40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" })
              ] });
              return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { active, i: 2 + j, className: "border-b border-current/15", children: item.href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: item.href, target: "_blank", rel: "noopener noreferrer", tabIndex: active ? 0 : -1, className: "group flex items-center justify-between gap-3 py-3 transition-[padding] duration-300 hover:pl-2", children: inner }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between gap-3 py-3", children: inner }) }) }, item.name);
            }) })
          ] })
        ] }, s.id);
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "absolute inset-x-0 bottom-0 flex h-[8svh] min-h-12 items-center justify-center gap-1 sm:gap-2", "aria-label": "Roles", children: roles.map((r, i) => {
        const active = scene === i + 1;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => goTo(i + 1), className: `flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-500 ${active ? "bg-[var(--fg)] text-[var(--bg)]" : "opacity-50 hover:opacity-100"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
            "0",
            i + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: active ? "" : "hidden sm:inline", children: r.label })
        ] }, r.id);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#12332d] text-[#f6f3ea]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 sm:px-10 sm:py-32 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#e5a93b]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 animate-ping rounded-full bg-[#e5a93b] opacity-60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative h-2 w-2 rounded-full bg-[#e5a93b]" })
          ] }),
          "Now building"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-5xl font-extrabold tracking-[-0.04em] sm:text-7xl", children: "ZiloOne" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-md text-[15px] leading-relaxed text-white/70", children: "Invoicing, inventory, HR, accounting, CRM, mail, meetings, drive and docs — one self-hosted suite on a single Linux server, with one sign-in." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://zilomail.in", target: "_blank", rel: "noopener noreferrer", className: "group mt-8 inline-flex items-center gap-2 rounded-full bg-[#e5a93b] px-6 py-3 text-sm font-semibold text-[#12332d] transition-all duration-300 hover:gap-3 active:scale-95", children: [
          "Visit zilomail.in",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "lg:col-span-7", delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ZiloShowcase, {}) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "mx-auto max-w-6xl px-6 py-24 text-center sm:px-10 sm:py-36", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.18em] text-[#1f4b44]/60", children: "Which Arif do you need?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 text-[clamp(2.25rem,7vw,5.5rem)] font-extrabold leading-[1] tracking-[-0.04em] text-[#1f4b44]", children: [
          "I'm looking for",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "the",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block animate-rise rounded-[0.25em] px-[0.2em] transition-colors", style: {
            background: needed.theme.bg,
            color: needed.theme.fg
          }, children: needed.label.toLowerCase() }, needed.id) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#e5a93b]", children: "." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 120, className: "mt-10 flex flex-wrap justify-center gap-2", children: roles.map((r, i) => {
        const Icon = r.icon;
        const active = need === i;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setNeed(i), "aria-pressed": active, className: `flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300 active:scale-95 ${active ? "border-[#1f4b44] bg-[#1f4b44] text-white" : "border-[#d9d2c2] text-[#1f4b44] hover:-translate-y-0.5 hover:bg-white"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }),
          r.label
        ] }, r.id);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 240, className: "mt-10 flex flex-wrap items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${EMAIL}?subject=${encodeURIComponent(`Hello Arif — I'm looking for the ${needed.label.toLowerCase()}`)}`, className: "group inline-flex items-center gap-2 rounded-full bg-[#1f4b44] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:gap-3 hover:shadow-xl hover:shadow-[#1f4b44]/25 active:scale-95 sm:text-base", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
          "Write to the ",
          needed.label.toLowerCase(),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: copyEmail, className: "inline-flex items-center gap-2 rounded-full border border-[#d9d2c2] px-5 py-4 text-sm font-semibold text-[#1f4b44] transition-all duration-300 hover:bg-white active:scale-95", children: [
          copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-emerald-600" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-4 w-4" }),
          copied ? "Copied!" : EMAIL
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 320, className: "mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-[#66706c]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: PHONE_HREF, className: "flex items-center gap-1.5 transition-colors hover:text-[#1f4b44]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5 text-[#e5a93b]" }),
          PHONE
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5 text-[#e5a93b]" }),
          "Guwahati & Mankachar, Assam"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-[#e6e0d2]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-[#66706c] sm:flex-row sm:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-extrabold text-[#1f4b44]", children: [
          "Arif",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#e5a93b]", children: "." })
        ] }),
        " ",
        "· Developer, distributor, educator, trustee"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", children: socials.map(({
        label,
        href,
        icon: Icon
      }) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, target: href.startsWith("http") ? "_blank" : void 0, rel: "noopener noreferrer", "aria-label": label, className: "rounded-full p-2 text-[#1f4b44]/60 transition-all hover:-translate-y-0.5 hover:bg-white hover:text-[#1f4b44]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }, label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Arif Hussain"
      ] })
    ] }) })
  ] });
}
export {
  IndexPage as component
};
