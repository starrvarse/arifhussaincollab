import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { M as Mail, F as Facebook, I as Instagram, b as Linkedin, S as Star, L as Layers, T as Truck, G as GraduationCap, H as HeartHandshake, E as ExternalLink, A as ArrowRight, X, C as Check, a as Copy, P as Phone, c as MapPin } from "../_libs/lucide-react.mjs";
const ventures = [{
  name: "BigSur Corp",
  role: "Founder & CEO",
  category: "ENTERPRISE SOFTWARE & ERP",
  desc: "Next-gen multi-tenant platforms, cloud architectures, and offline-first business solutions including Syntelix ERP, Zilo System, and WinAcc Pro.",
  badges: ["Syntelix ERP", "50+ Clients", "Guwahati, Assam"],
  href: "https://bigsur.in",
  logo: "/BigSur-Corp-square.png",
  icon: Layers
}, {
  name: "Arif Plastic Agency",
  role: "Sales Director",
  category: "SUPER STOCKIST & DISTRIBUTION",
  desc: "Premier regional super stockist & distribution partner since 1999 for leading MNC brands: Pidilite Industries, Mondelez India, Kimberly-Clark & Unicharm.",
  badges: ["Est. 1999", "Pidilite & Mondelez Partner", "Mankachar"],
  href: "https://www.arifplasticagency.in",
  logo: "/arifplasticlogo.png",
  icon: Truck
}, {
  name: "BlueCrest Royal Academy",
  role: "Founder & Trustee",
  category: "PREMIUM K-12 EDUCATION",
  desc: "Prestigious educational institution from Kindergarten to Grade 12 at Kaloghat, South Salmara Mankachar, with modern labs, STEM programs & global standards.",
  badges: ["K-12 Campus", "Under Abul Foundation", "South Salmara"],
  href: "https://www.bluecrestroyalacademy.com",
  logo: "/bluecrestlogo.png",
  icon: GraduationCap
}, {
  name: "Abul Foundation",
  role: "Founder & Secretary (Trustee)",
  category: "CHARITABLE FAMILY TRUST",
  desc: "Registered non-profit trust (DARPAN ID: AS/2026/0952495) in memory of late Abul Hussain, advancing education scholarships, medical clinics & community welfare.",
  badges: ["Darpan: AS/2026/0952495", "Education & Health", "Mankachar"],
  href: "https://www.abulfoundation.org",
  logo: "/abulfoundlogo.png",
  icon: HeartHandshake
}];
const customerAvatars = ["https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80"];
function IndexPage() {
  const [activeNav, setActiveNav] = reactExports.useState("home");
  const [isContactOpen, setIsContactOpen] = reactExports.useState(false);
  const [copiedEmail, setCopiedEmail] = reactExports.useState(false);
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("collabwitharif@proton.me");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#f8f6f0] text-[#1c2522] selection:bg-[#e5a93b]/30 selection:text-[#1f4b44] flex flex-col justify-between overflow-x-hidden font-sans", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/", className: "text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1f4b44] transition-transform hover:scale-105", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#1f4b44]", children: "A" }),
        "rif",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#e5a93b]", children: "." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-6 sm:gap-8 text-sm font-medium text-[#4a5551]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          setActiveNav("home");
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }, className: `transition-all py-1 px-3.5 rounded-full ${activeNav === "home" ? "font-semibold text-[#1f4b44] tracking-tight bg-[#ede8dc]/80" : "hover:text-[#1f4b44]"}`, children: "(  Home  )" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#ventures", onClick: () => setActiveNav("ventures"), className: `transition-colors py-1 px-2 ${activeNav === "ventures" ? "font-semibold text-[#1f4b44]" : "hover:text-[#1f4b44]"}`, children: "Ventures" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#products", onClick: () => setActiveNav("products"), className: `transition-colors py-1 px-2 ${activeNav === "products" ? "font-semibold text-[#1f4b44]" : "hover:text-[#1f4b44]"}`, children: "Products" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsContactOpen(true), className: `transition-colors py-1 px-2 ${activeNav === "contact" ? "font-semibold text-[#1f4b44]" : "hover:text-[#1f4b44]"}`, children: "Contact" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setIsContactOpen(true), className: "group relative inline-flex items-center gap-2 bg-[#1f4b44] hover:bg-[#183d36] text-white px-5 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wide shadow-md shadow-[#1f4b44]/15 hover:shadow-lg hover:shadow-[#1f4b44]/25 transition-all duration-200 active:scale-95", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Get in Touch" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-4 sm:pt-6 pb-12 flex-1 flex flex-col justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left z-10 order-2 lg:order-1 pt-2 lg:pt-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight text-[#1c2522] leading-tight", children: "Hy! I Am" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-[#e5a93b] leading-none", children: "Arif Hussain." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block relative w-60 h-28 my-3 -ml-4 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 240 100", className: "w-full h-full overflow-visible", fill: "none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 215 32 C 178 12, 122 18, 85 54 C 55 80, 30 72, 22 28", stroke: "#2d5e54", strokeWidth: "2.2", strokeDasharray: "6 6", strokeLinecap: "round" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 22 28 L 22 18", stroke: "#2d5e54", strokeWidth: "2.2", strokeLinecap: "round" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 15 28 L 22 17 L 29 28", stroke: "#2d5e54", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-4 lg:mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl sm:text-5xl lg:text-[52px] font-black text-[#1f4b44] tracking-tight leading-none", children: "08" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left font-bold text-[11px] sm:text-xs text-[#1f4b44] tracking-wider uppercase leading-tight", children: [
            "YEARS",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "EXPERIENCE"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mt-8 lg:mt-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.facebook.com/hussainarif1994", target: "_blank", rel: "noopener noreferrer", "aria-label": "Facebook", className: "text-[#e5a93b] hover:text-[#1f4b44] transition-all transform hover:scale-110 active:scale-95", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "w-5 h-5 fill-current" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.instagram.com/____.kyrios.____/", target: "_blank", rel: "noopener noreferrer", "aria-label": "Instagram", className: "text-[#e5a93b] hover:text-[#1f4b44] transition-all transform hover:scale-110 active:scale-95", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:collabwitharif@proton.me", "aria-label": "Email", className: "text-[#e5a93b] hover:text-[#1f4b44] transition-all transform hover:scale-110 active:scale-95", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-5 h-5 fill-current" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://linkedin.com", target: "_blank", rel: "noopener noreferrer", "aria-label": "LinkedIn", className: "text-[#e5a93b] hover:text-[#1f4b44] transition-all transform hover:scale-110 active:scale-95", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "w-5 h-5 fill-current" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4 flex justify-center items-center relative order-1 lg:order-2 my-2 lg:my-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full bg-[#e5a93b]/20 blur-2xl transform scale-110 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-[270px] h-[330px] sm:w-[330px] sm:h-[400px] lg:w-[380px] lg:h-[455px] flex items-end justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 w-[270px] h-[270px] sm:w-[330px] sm:h-[330px] lg:w-[380px] lg:h-[380px] rounded-full border-[5px] sm:border-[6px] border-[#e5a93b] bg-[#fbf9f4] shadow-[0_20px_50px_rgba(229,169,59,0.18)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 w-[270px] h-[330px] sm:w-[330px] sm:h-[400px] lg:w-[380px] lg:h-[455px] overflow-hidden rounded-b-full flex items-end justify-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/Intense Side-Gaze Portrait Cutout.png", alt: "Arif Hussain", className: "w-auto h-[106%] sm:h-[110%] max-w-none object-contain object-bottom pointer-events-auto transition-transform duration-500 hover:scale-[1.03] drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)]" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4 flex flex-col items-center lg:items-end justify-between h-full order-3 space-y-8 lg:space-y-12 text-center lg:text-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[280px] lg:pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm sm:text-base text-[#4b5551] font-normal leading-relaxed", children: [
          "I design beautifully simple things,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "and I love what i do."
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-white rounded-2xl p-4 sm:p-5 shadow-[0_12px_36px_rgba(31,75,68,0.08)] border border-[#ede7d8] w-full max-w-[240px] text-left transform transition-transform duration-300 hover:-translate-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-[#4a5551]", children: "12k Reviews On" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5 text-[#e5a93b]", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 fill-current" }, i)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-2", children: customerAvatars.map((url, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: url, alt: "Partner", className: "w-7 h-7 rounded-full border-2 border-white object-cover" }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-extrabold text-[#1c2522]", children: "4.9" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-creative text-4xl sm:text-5xl text-[#1f4b44] -rotate-6 transform origin-bottom-right inline-block pr-1 font-bold", children: "Creative" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xl sm:text-2xl font-black text-[#1f4b44] tracking-tight", children: [
            "Designer",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#e5a93b]", children: "." })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "ventures", className: "w-full bg-[#f2efe6] border-t border-[#e8e2d4] py-16 px-6 sm:px-10 lg:px-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest text-[#e5a93b] mb-2", children: "Ventures & Leadership" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-black text-[#1f4b44] tracking-tight", children: "Built & Led by Arif Hussain" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#5a6561] max-w-md mt-3 md:mt-0", children: "Directing enterprise software engineering at BigSur Corp, regional FMCG distribution since 1999, K-12 education, and community social impact." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: ventures.map((venture) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: venture.href, target: "_blank", rel: "noopener noreferrer", className: "group relative bg-white rounded-2xl p-6 border border-[#e4ded0] shadow-sm hover:shadow-xl hover:border-[#e5a93b]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-[#f8f6f0] p-2 border border-[#eae4d6] flex items-center justify-center overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: venture.logo, alt: venture.name, className: "w-full h-full object-contain" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-[#1f4b44] bg-[#edf2f0] px-2.5 py-1 rounded-full", children: venture.category })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-[#1c2522] group-hover:text-[#1f4b44] transition-colors", children: venture.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-[#e5a93b] mb-2", children: venture.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#5f6b67] leading-relaxed mb-4", children: venture.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-2", children: venture.badges.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-semibold bg-[#f8f6f0] text-[#1f4b44] px-2 py-0.5 rounded border border-[#e5dfd2]", children: b }, b)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-3 border-t border-[#f0ece1] flex items-center justify-between text-xs font-semibold text-[#1f4b44] group-hover:text-[#e5a93b] transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Visit official website" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
          ] })
        ] }, venture.name);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "products", className: "w-full py-16 px-6 sm:px-10 lg:px-16 bg-[#f8f6f0]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest text-[#e5a93b] mb-2", children: "Software & Infrastructure" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-black text-[#1f4b44] tracking-tight", children: "Products Engineered by BigSur Corp" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#5a6561] mt-2", children: "Architected under Arif Hussain's direct leadership for multi-tenant scalability, offline-first reliability, and seamless cloud sync." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl overflow-hidden border border-[#e5dfd2] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-44 bg-gradient-to-br from-[#1f4b44] to-[#14322d] p-6 text-white flex flex-col justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-[#e5a93b] bg-white/10 px-2.5 py-1 rounded-full", children: "Flagship Platform" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-emerald-300 font-semibold", children: "10k+ Active Users" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: "Syntelix ERP Suite" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/75 mt-1", children: "Multi-Tenant All-in-One Business OS" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#55615d] leading-relaxed", children: "Unified enterprise architecture integrating sales, inventory tracking, HR payroll, and real-time intra-company communications across multi-branch organizations." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] bg-[#f2efe6] text-[#1f4b44] px-2 py-0.5 rounded font-medium", children: "Multi-Tenant" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] bg-[#f2efe6] text-[#1f4b44] px-2 py-0.5 rounded font-medium", children: "Real-Time Sync" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] bg-[#f2efe6] text-[#1f4b44] px-2 py-0.5 rounded font-medium", children: "Enterprise Cloud" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 pt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://bigsur.in/syntelix", target: "_blank", rel: "noopener noreferrer", className: "text-xs font-semibold text-[#1f4b44] hover:text-[#e5a93b] flex items-center gap-1 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Explore Syntelix at BigSur" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl overflow-hidden border border-[#e5dfd2] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-44 bg-gradient-to-br from-[#e5a93b] to-[#c68922] p-6 text-white flex flex-col justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-white bg-black/20 px-2.5 py-1 rounded-full", children: "GST Billing & Finance" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-white/90 font-semibold", children: "Offline-First" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: "Zilo System & WinAcc Pro" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/90 mt-1", children: "High-Speed Financial Accounting" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#55615d] leading-relaxed", children: "Engineered for high-volume retail and wholesale merchants with instant barcode scanning, compliant e-invoicing, and seamless offline data integrity." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] bg-[#f2efe6] text-[#1f4b44] px-2 py-0.5 rounded font-medium", children: "GST Invoicing" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] bg-[#f2efe6] text-[#1f4b44] px-2 py-0.5 rounded font-medium", children: "High Speed" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] bg-[#f2efe6] text-[#1f4b44] px-2 py-0.5 rounded font-medium", children: "Local DB" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 pt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://bigsur.in/zilosystem", target: "_blank", rel: "noopener noreferrer", className: "text-xs font-semibold text-[#1f4b44] hover:text-[#e5a93b] flex items-center gap-1 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "View Zilo System" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl overflow-hidden border border-[#e5dfd2] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-44 bg-gradient-to-br from-[#2f6f64] to-[#1c4b43] p-6 text-white flex flex-col justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-[#e5a93b] bg-white/10 px-2.5 py-1 rounded-full", children: "Vertical Solutions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-emerald-200 font-semibold", children: "Specialized" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: "GradeSync & Distribution DMS" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/75 mt-1", children: "Education & Supply Chain Portals" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#55615d] leading-relaxed", children: "Custom-built solutions powering the administrative backbone of modern educational institutions like BlueCrest Royal Academy and large-scale FMCG distribution networks." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] bg-[#f2efe6] text-[#1f4b44] px-2 py-0.5 rounded font-medium", children: "Student LMS" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] bg-[#f2efe6] text-[#1f4b44] px-2 py-0.5 rounded font-medium", children: "Supply Chain" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] bg-[#f2efe6] text-[#1f4b44] px-2 py-0.5 rounded font-medium", children: "Route Tracking" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 pt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://bigsur.in/solutions", target: "_blank", rel: "noopener noreferrer", className: "text-xs font-semibold text-[#1f4b44] hover:text-[#e5a93b] flex items-center gap-1 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Explore All Solutions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
          ] }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "w-full bg-[#1f4b44] text-[#f8f6f0] py-10 px-6 sm:px-10 lg:px-16 border-t border-[#183c36]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-black tracking-tight text-white", children: "Arif." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/60", children: "— Founder & CEO of BigSur Corp · Sales Director at Arif Plastic Agency" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 text-xs text-white/70", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:collabwitharif@proton.me", className: "hover:text-[#e5a93b] transition-colors", children: "collabwitharif@proton.me" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+917002414638", className: "hover:text-[#e5a93b] transition-colors", children: "+91 70024 14638" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "© 2026 Arif Hussain" })
      ] })
    ] }) }),
    isContactOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-[#ded7c6] relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsContactOpen(false), className: "absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-[#e5a93b] mb-1", children: "Connect Directly" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-black text-[#1f4b44]", children: "Let's Work Together" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#5e6b66] mt-1 mb-6", children: "Reach out for technology partnerships, enterprise ERP deployments, distribution inquiries, or philanthropy." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-xl bg-[#f8f6f0] border border-[#e5dfd2] flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4 text-[#1f4b44]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-[#1c2522]", children: "collabwitharif@proton.me" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleCopyEmail, className: "p-1.5 rounded-lg hover:bg-white text-xs font-semibold text-[#1f4b44] flex items-center gap-1 transition-all", children: [
            copiedEmail ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 text-emerald-600" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: copiedEmail ? "Copied" : "Copy" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+917002414638", className: "p-3.5 rounded-xl bg-[#f8f6f0] border border-[#e5dfd2] flex items-center justify-between hover:border-[#e5a93b] transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 text-[#1f4b44]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-[#1c2522]", children: "+91 70024 14638" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5 text-gray-400" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 rounded-xl bg-[#f8f6f0] border border-[#e5dfd2] flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-[#e5a93b]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-[#1c2522]", children: "Guwahati & Mankachar, Assam, India" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.instagram.com/____.kyrios.____/", target: "_blank", rel: "noopener noreferrer", className: "p-3.5 rounded-xl bg-[#f8f6f0] border border-[#e5dfd2] flex items-center justify-between hover:border-[#e5a93b] transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-4 h-4 text-[#e5a93b]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-[#1c2522]", children: "@____.kyrios.____" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5 text-gray-400" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.facebook.com/hussainarif1994", target: "_blank", rel: "noopener noreferrer", className: "p-3.5 rounded-xl bg-[#f8f6f0] border border-[#e5dfd2] flex items-center justify-between hover:border-[#e5a93b] transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "w-4 h-4 text-[#1f4b44]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-[#1c2522]", children: "facebook.com/hussainarif1994" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5 text-gray-400" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 pt-4 border-t border-gray-100 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsContactOpen(false), className: "px-4 py-2 bg-[#1f4b44] text-white rounded-lg text-xs font-semibold hover:bg-[#173b35] transition-all", children: "Close" }) })
    ] }) })
  ] });
}
export {
  IndexPage as component
};
