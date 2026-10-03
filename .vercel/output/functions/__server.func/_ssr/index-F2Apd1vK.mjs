import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { M as Mail, X, d as Menu, F as Facebook, I as Instagram, L as Linkedin, a as CodeXml, E as ExternalLink, A as ArrowRight, T as Truck, G as GraduationCap, H as HeartHandshake, C as Check, b as Copy, P as Phone, c as MapPin } from "../_libs/lucide-react.mjs";
const familyVentures = [{
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
function IndexPage() {
  const [activeNav, setActiveNav] = reactExports.useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = reactExports.useState(false);
  const [isContactOpen, setIsContactOpen] = reactExports.useState(false);
  const [copiedEmail, setCopiedEmail] = reactExports.useState(false);
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("collabwitharif@proton.me");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#f8f6f0] text-[#1c2522] selection:bg-[#e5a93b]/30 selection:text-[#1f4b44] flex flex-col justify-between overflow-x-hidden font-sans", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "relative w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 pt-6 sm:pt-8 pb-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/", onClick: () => {
        setActiveNav("home");
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, className: "text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1f4b44] transition-transform hover:scale-105", children: [
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#products", onClick: () => setActiveNav("products"), className: `transition-colors py-1 px-2 ${activeNav === "products" ? "font-semibold text-[#1f4b44]" : "hover:text-[#1f4b44]"}`, children: "Products" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#family-business", onClick: () => setActiveNav("family-business"), className: `transition-colors py-1 px-2 ${activeNav === "family-business" ? "font-semibold text-[#1f4b44]" : "hover:text-[#1f4b44]"}`, children: "Family Business" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsContactOpen(true), className: `transition-colors py-1 px-2 ${activeNav === "contact" ? "font-semibold text-[#1f4b44]" : "hover:text-[#1f4b44]"}`, children: "Contact" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 sm:gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setIsContactOpen(true), className: "group relative inline-flex items-center gap-1.5 sm:gap-2 bg-[#1f4b44] hover:bg-[#183d36] text-white px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wide shadow-md shadow-[#1f4b44]/15 hover:shadow-lg hover:shadow-[#1f4b44]/25 transition-all duration-200 active:scale-95", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Get in Touch" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen), className: "md:hidden p-2 rounded-lg text-[#1f4b44] hover:bg-[#ede8dc]/80 transition-colors", "aria-label": "Toggle Navigation Menu", children: isMobileMenuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-5 h-5" }) })
      ] }),
      isMobileMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden absolute top-full left-5 right-5 z-40 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-[#ede7d8] flex flex-col gap-2 animate-fade-in mt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          setActiveNav("home");
          setIsMobileMenuOpen(false);
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }, className: `text-left py-2 px-3 rounded-xl text-sm font-medium transition-colors ${activeNav === "home" ? "bg-[#edf2f0] text-[#1f4b44] font-bold" : "text-[#4a5551] hover:bg-gray-50"}`, children: "Home" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#products", onClick: () => {
          setActiveNav("products");
          setIsMobileMenuOpen(false);
        }, className: `py-2 px-3 rounded-xl text-sm font-medium transition-colors ${activeNav === "products" ? "bg-[#edf2f0] text-[#1f4b44] font-bold" : "text-[#4a5551] hover:bg-gray-50"}`, children: "Products & Software" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#family-business", onClick: () => {
          setActiveNav("family-business");
          setIsMobileMenuOpen(false);
        }, className: `py-2 px-3 rounded-xl text-sm font-medium transition-colors ${activeNav === "family-business" ? "bg-[#edf2f0] text-[#1f4b44] font-bold" : "text-[#4a5551] hover:bg-gray-50"}`, children: "Family Business" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          setIsMobileMenuOpen(false);
          setIsContactOpen(true);
        }, className: "text-left py-2 px-3 rounded-xl text-sm font-semibold text-[#1f4b44] hover:bg-[#edf2f0] transition-colors", children: "Contact Information" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-4 sm:pt-6 pb-12 flex-1 flex flex-col justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left z-10 order-2 lg:order-1 pt-2 lg:pt-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight text-[#1c2522] leading-tight", children: "Hy! I Am" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-[#e5a93b] leading-none", children: "Arif Hussain." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block relative w-60 h-28 my-3 -ml-4 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 240 100", className: "w-full h-full overflow-visible", fill: "none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 215 32 C 178 12, 122 18, 85 54 C 55 80, 30 72, 22 28", stroke: "#2d5e54", strokeWidth: "2.2", strokeDasharray: "6 6", strokeLinecap: "round", className: "dashed-arrow-animate", style: {
            animation: "dash-draw 15s linear infinite"
          } }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:collabwitharif@proton.me", "aria-label": "Email", className: "text-[#e5a93b] hover:text-[#1f4b44] transition-all transform hover:scale-110 active:scale-95", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-5 h-5", strokeWidth: 2.2 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://linkedin.com", target: "_blank", rel: "noopener noreferrer", "aria-label": "LinkedIn", className: "text-[#e5a93b] hover:text-[#1f4b44] transition-all transform hover:scale-110 active:scale-95", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "w-5 h-5 fill-current" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4 flex justify-center items-center relative order-1 lg:order-2 my-2 lg:my-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full bg-[#e5a93b]/20 blur-3xl transform scale-110 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-[250px] h-[310px] sm:w-[330px] sm:h-[405px] lg:w-[380px] lg:h-[470px] flex items-end justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 w-[250px] h-[250px] sm:w-[330px] sm:h-[330px] lg:w-[380px] lg:h-[380px] rounded-full border-[5px] sm:border-[6px] border-[#e5a93b]", style: {
            background: "radial-gradient(circle at 50% 36%, #ffffff 0%, #faf6ef 52%, #ede3cf 100%)",
            boxShadow: "inset 0 0 35px rgba(229,169,59,0.14), inset 0 -25px 45px rgba(31,75,68,0.06), 0 20px 50px rgba(229,169,59,0.22)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-[250px] h-[310px] sm:w-[330px] sm:h-[405px] lg:w-[380px] lg:h-[470px] overflow-hidden rounded-b-full pointer-events-none", style: {
            WebkitMaskImage: "-webkit-radial-gradient(white, black)",
            maskImage: "radial-gradient(white, black)",
            WebkitClipPath: "inset(0 0 0 0 round 0 0 9999px 9999px)",
            clipPath: "inset(0 0 0 0 round 0 0 9999px 9999px)",
            transform: "translateZ(0)",
            WebkitTransform: "translateZ(0)",
            isolation: "isolate"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/Intense Side-Gaze Portrait Cutout.png", alt: "Arif Hussain", className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-auto h-[290px] sm:h-[385px] lg:h-[450px] max-w-none object-contain object-bottom pointer-events-auto transition-transform duration-500 hover:scale-[1.03] select-none", style: {
              filter: "drop-shadow(0 14px 28px rgba(31, 75, 68, 0.16))"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#1f4b44]/10 to-transparent pointer-events-none rounded-b-full" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4 flex flex-col items-center lg:items-end justify-between h-full order-3 space-y-8 lg:space-y-12 text-center lg:text-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[280px] lg:pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm sm:text-base text-[#4b5551] font-normal leading-relaxed", children: [
          "I build reliable software systems,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "and I love what I do."
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://zilomail.in", target: "_blank", rel: "noopener noreferrer", className: "relative block bg-white rounded-2xl p-4 sm:p-5 shadow-[0_12px_36px_rgba(31,75,68,0.08)] border border-[#ede7d8] w-full max-w-[250px] text-left transform transition-all duration-300 hover:-translate-y-1 hover:border-[#1f4b44]/40 group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CodeXml, { className: "w-3.5 h-3.5 text-[#e5a93b]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-[#4a5551]", children: "Current Project" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" }),
              "Active Dev"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm sm:text-base font-extrabold text-[#1c2522] group-hover:text-[#1f4b44] tracking-tight transition-colors flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ZiloOne Suite" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3 text-[#8a948f] opacity-0 group-hover:opacity-100 transition-opacity" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-[#6b7570] font-medium", children: "zilomail.in" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right pl-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono font-bold text-[#1f4b44] bg-[#f8f6f0] px-1.5 py-0.5 rounded border border-[#eae4d6]", children: "TypeScript" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-[#8a948f] font-semibold mt-0.5", children: "End-to-End" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-creative text-4xl sm:text-5xl text-[#1f4b44] -rotate-6 transform origin-bottom-right inline-block pr-1 font-bold", children: "Software" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xl sm:text-2xl font-black text-[#1f4b44] tracking-tight", children: [
            "Developer",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#e5a93b]", children: "." })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "products", className: "w-full py-12 sm:py-14 px-6 sm:px-10 lg:px-16 bg-[#f2efe6] border-t border-[#e8e2d4]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#e6e0d2]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] font-bold uppercase tracking-wider text-[#e5a93b] mb-1 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CodeXml, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Featured Project & Platforms" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-extrabold text-[#1f4b44] tracking-tight", children: "Software Engineered by Arif Hussain" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://bigsur.in", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-1.5 text-xs font-semibold text-[#1f4b44] hover:text-[#e5a93b] transition-colors mt-2 sm:mt-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "BigSur Corp • bigsur.in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-2xl p-6 sm:p-8 border border-[#e5dfd2] shadow-sm mb-8 transition-all hover:border-[#1f4b44]/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-start justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Current Flagship Project" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://zilomail.in", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-1 text-[11px] font-mono font-medium text-[#1f4b44] hover:text-[#e5a93b] transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "zilomail.in" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-2.5 h-2.5" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://zilomail.in", target: "_blank", rel: "noopener noreferrer", className: "text-2xl sm:text-3xl font-black text-[#1f4b44] hover:text-[#e5a93b] tracking-tight transition-colors inline-flex items-center gap-2 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ZiloOne" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4 text-[#8a948f] group-hover:text-[#e5a93b] transition-colors" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-[#e5a93b] mt-0.5 mb-2.5", children: "The Self-Hosted Workspace & Business Suite" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-[#55615d] leading-relaxed mb-4", children: "Brings invoicing, inventory, HR, accounting, CRM, mail, meetings, drive, docs, and distribution management onto a single Linux server with central OpenID Connect authentication." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-mono text-[#7a8581] mb-3", children: "One installer • One sign-in • One admin panel • 100% TypeScript" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5 text-[10px] font-mono text-[#1f4b44]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-[#f8f6f0] px-2.5 py-1 rounded border border-[#eae4d6]", children: "TypeScript" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-[#f8f6f0] px-2.5 py-1 rounded border border-[#eae4d6]", children: "Next.js 15" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-[#f8f6f0] px-2.5 py-1 rounded border border-[#eae4d6]", children: "React 19" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-[#f8f6f0] px-2.5 py-1 rounded border border-[#eae4d6]", children: "PostgreSQL" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-[#f8f6f0] px-2.5 py-1 rounded border border-[#eae4d6]", children: "Redis" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-[#f8f6f0] px-2.5 py-1 rounded border border-[#eae4d6]", children: "Caddy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-[#f8f6f0] px-2.5 py-1 rounded border border-[#eae4d6]", children: "ZiloSecur" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:w-80 flex flex-col justify-between space-y-4 pt-4 lg:pt-0 border-t border-[#ede7d8] lg:border-t-0 lg:border-l lg:border-[#f0ece1] lg:pl-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider text-[#8a948f] mb-2.5", children: "Integrated Applications" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs text-[#3c4743] font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[#e5a93b]" }),
                "ZiloInvoice"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[#e5a93b]" }),
                "ZiloAccounting"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[#e5a93b]" }),
                "ZiloCRM"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[#e5a93b]" }),
                "ZiloDMS"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[#e5a93b]" }),
                "ZiloHR & ESS"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[#e5a93b]" }),
                "ZiloMail & Meet"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://zilomail.in", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-between w-full bg-[#1f4b44] hover:bg-[#183d36] text-white px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all shadow-sm active:scale-95 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Visit Platform · zilomail.in" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://bigsur.in/syntelix", target: "_blank", rel: "noopener noreferrer", className: "group bg-white rounded-xl p-5 sm:p-6 border border-[#e5dfd2] hover:border-[#1f4b44]/40 hover:shadow-md transition-all flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-wider text-[#1f4b44] bg-[#edf2f0] px-2 py-0.5 rounded", children: "ERP Platform" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-[#7a8581] font-mono", children: "10k+ Users" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-[#1c2522] group-hover:text-[#1f4b44] transition-colors", children: "Syntelix ERP Suite" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#55615d] leading-relaxed mt-1.5", children: "Multi-tenant business OS unifying sales, inventory, HR payroll, and multi-branch operations." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-[#7a8581] font-mono mt-3", children: "Multi-Tenant • Cloud & Offline • Real-Time Sync" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-3 border-t border-[#f2ede4] flex items-center justify-between text-xs font-semibold text-[#1f4b44] group-hover:text-[#e5a93b] transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Explore Syntelix" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5 transition-transform group-hover:translate-x-1" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://bigsur.in/zilosystem", target: "_blank", rel: "noopener noreferrer", className: "group bg-white rounded-xl p-5 sm:p-6 border border-[#e5dfd2] hover:border-[#e5a93b]/60 hover:shadow-md transition-all flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-wider text-[#8a6827] bg-[#fbf5e8] px-2 py-0.5 rounded", children: "Billing & Finance" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-[#7a8581] font-mono", children: "Offline-First" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-[#1c2522] group-hover:text-[#1f4b44] transition-colors", children: "Zilo System & WinAcc Pro" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#55615d] leading-relaxed mt-1.5", children: "High-speed GST invoicing, compliant e-invoicing, barcode billing, and local financial accounting." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-[#7a8581] font-mono mt-3", children: "GST Invoicing • Barcode POS • Local SQLite DB" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-3 border-t border-[#f2ede4] flex items-center justify-between text-xs font-semibold text-[#1f4b44] group-hover:text-[#e5a93b] transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Explore Zilo System" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5 transition-transform group-hover:translate-x-1" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://bigsur.in/solutions", target: "_blank", rel: "noopener noreferrer", className: "group bg-white rounded-xl p-5 sm:p-6 border border-[#e5dfd2] hover:border-[#1f4b44]/40 hover:shadow-md transition-all flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-wider text-[#1f4b44] bg-[#edf2f0] px-2 py-0.5 rounded", children: "Vertical Solutions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-[#7a8581] font-mono", children: "Specialized" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-[#1c2522] group-hover:text-[#1f4b44] transition-colors", children: "GradeSync & Distribution DMS" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#55615d] leading-relaxed mt-1.5", children: "Custom-built portals powering school academic workflows and FMCG supply chain distribution." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-[#7a8581] font-mono mt-3", children: "Student LMS • Route Operations • Supply Chain" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-3 border-t border-[#f2ede4] flex items-center justify-between text-xs font-semibold text-[#1f4b44] group-hover:text-[#e5a93b] transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Explore Solutions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5 transition-transform group-hover:translate-x-1" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "family-business", className: "w-full bg-[#f8f6f0] border-t border-[#e8e2d4] py-12 sm:py-14 px-6 sm:px-10 lg:px-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#e6e0d2]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold uppercase tracking-wider text-[#e5a93b] mb-1", children: "Family Enterprise & Trusts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-extrabold text-[#1f4b44] tracking-tight", children: "Family Businesses & Foundations" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#6b7570] max-w-sm mt-2 sm:mt-0", children: "Super stockist distribution since 1999, K-12 education, and non-profit trusts." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-5", children: familyVentures.map((venture) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: venture.href, target: "_blank", rel: "noopener noreferrer", className: "group bg-white rounded-xl p-5 sm:p-6 border border-[#e5dfd2] hover:border-[#e5a93b]/50 hover:shadow-md transition-all flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-[#f8f6f0] p-1.5 border border-[#eae4d6] flex items-center justify-center overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: venture.logo, alt: venture.name, className: "w-full h-full object-contain" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider text-[#1f4b44] bg-[#edf2f0] px-2 py-0.5 rounded", children: venture.category })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-[#1c2522] group-hover:text-[#1f4b44] transition-colors", children: venture.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-[#e5a93b] mt-0.5 mb-2", children: venture.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#5f6b67] leading-relaxed mb-3", children: venture.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-[#7a8581] font-mono", children: venture.badges.join(" • ") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-3 border-t border-[#f2ede4] flex items-center justify-between text-xs font-semibold text-[#1f4b44] group-hover:text-[#e5a93b] transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Visit website" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
          ] })
        ] }, venture.name);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "w-full bg-[#1f4b44] text-[#f8f6f0] py-8 sm:py-10 px-5 sm:px-10 lg:px-16 border-t border-[#183c36]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 text-center sm:text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-black tracking-tight text-white", children: "Arif." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/60", children: "— Founder & CEO of BigSur Corp · Sales Director at Arif Plastic Agency" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-6 text-xs text-white/70", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:collabwitharif@proton.me", className: "hover:text-[#e5a93b] transition-colors", children: "collabwitharif@proton.me" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "•" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+917002414638", className: "hover:text-[#e5a93b] transition-colors", children: "+91 70024 14638" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "•" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "© 2026 Arif Hussain" })
      ] })
    ] }) }),
    isContactOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl p-5 sm:p-8 max-w-md w-full shadow-2xl border border-[#ded7c6] relative my-auto max-h-[92vh] overflow-y-auto", children: [
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
