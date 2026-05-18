import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Sparkles, I as Instagram, F as Facebook, M as Mail, A as ArrowUpRight } from "../_libs/lucide-react.mjs";
const avatar = "/assets/arif-avatar-BFgF4sh8.jpg";
const businessLinks = [{
  label: "BigSur Corp",
  sub: "Digital platforms & ERP",
  href: "https://bigsur.in",
  logo: "/BigSur-Corp-square.png",
  variant: "gold"
}, {
  label: "Arif Plastic Agency",
  sub: "Distribution · family business",
  href: "https://www.arifplasticagency.in",
  logo: "/arifplasticlogo.png",
  variant: "ocean"
}, {
  label: "BlueCrest Royal Academy",
  sub: "Education initiative",
  href: "https://www.bluecrestroyalacademy.com",
  logo: "/bluecrestlogo.png",
  variant: "emerald"
}, {
  label: "Abul Foundation",
  sub: "Family Trust · Social impact",
  href: "https://www.abulfoundation.org",
  logo: "/abulfoundlogo.png",
  variant: "rose"
}];
const socialLinks = [{
  label: "Instagram",
  href: "https://www.instagram.com/____.kyrios.____/",
  icon: Instagram
}, {
  label: "Facebook",
  href: "https://www.facebook.com/hussainarif1994",
  icon: Facebook
}, {
  label: "Email",
  href: "mailto:connect@arifhussain.in",
  icon: Mail
}];
const hoverStyles = {
  gold: "hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] hover:border-amber-500/40",
  sunset: "hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] hover:border-orange-500/40",
  ocean: "hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] hover:border-blue-500/40",
  emerald: "hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] hover:border-emerald-500/40",
  rose: "hover:shadow-[0_0_25px_rgba(236,72,153,0.15)] hover:border-fuchsia-500/40"
};
function LinkCard({
  link,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: link.href, target: "_blank", rel: "noopener noreferrer", style: {
    animationDelay: `${0.15 + index * 0.08}s`
  }, className: `animate-fade-up group relative flex items-center gap-4 overflow-hidden rounded-2xl px-5 py-4 bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.07] active:scale-[0.98] text-white ${hoverStyles[link.variant]}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-md p-1.5 border border-white/10 overflow-hidden transition-transform duration-300 group-hover:scale-105", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: link.logo, alt: link.label, className: "h-full w-full object-contain rounded-lg" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold tracking-tight text-white group-hover:text-white transition-colors duration-300", children: link.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-white/60 group-hover:text-white/80 transition-colors duration-300", children: link.sub })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 text-white/50 transition-all duration-300 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 -z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-blob absolute -top-20 -left-16 h-72 w-72 rounded-full opacity-40 blur-3xl", style: {
        background: "var(--gradient-sunset)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-blob absolute top-1/3 -right-20 h-80 w-80 rounded-full opacity-35 blur-3xl", style: {
        background: "var(--gradient-gold)",
        animationDelay: "3s"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-blob absolute bottom-0 left-1/4 h-72 w-72 rounded-full opacity-25 blur-3xl", style: {
        background: "var(--gradient-sunset)",
        animationDelay: "6s"
      } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto flex min-h-screen w-full max-w-md flex-col items-center pb-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up relative w-full overflow-hidden", style: {
        animationDelay: "0s",
        height: "420px"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: avatar, alt: "Arif Hussain", className: "w-full h-full object-cover", style: {
          objectPosition: "center 30%",
          display: "block"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute bottom-0 left-0 w-full", style: {
          height: "40%",
          background: "linear-gradient(to bottom, transparent 0%, var(--background) 100%)"
        } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 w-full -mt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full px-6 py-8 flex flex-col items-center min-h-[calc(100vh-326px)]", style: {
        animationDelay: "0.05s",
        background: "linear-gradient(to bottom, transparent 0%, var(--background) 100px, var(--background) 100%)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "signature-text shimmer-text animate-fade-up text-5xl sm:text-6xl md:text-7xl tracking-normal pt-10 pb-3 px-8 leading-normal font-normal inline-block -rotate-12 transform", style: {
          animationDelay: "0.05s"
        }, children: "Arif Hussain" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up mt-6 flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[var(--gold)] backdrop-blur-sm", style: {
          animationDelay: "0.1s"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tracking-wide", children: "Entrepreneur · Founder · Leader" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "animate-fade-up mt-4 max-w-xs text-center text-sm leading-relaxed text-white/70", style: {
          animationDelay: "0.15s"
        }, children: [
          "Building digital platforms, ERP systems, and smart technology from India. Founder & CEO of ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "BigSur Corp" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "animate-fade-up mt-8 flex w-full flex-col items-center gap-3", style: {
          animationDelay: "0.2s"
        }, "aria-label": "Social", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-white/50", children: "— Connect —" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: socialLinks.map(({
            label,
            href,
            icon: Icon
          }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href, target: "_blank", rel: "noopener noreferrer", "aria-label": label, className: "group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-transparent", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100", style: {
              background: "var(--gradient-sunset)"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "relative h-5 w-5 transition-colors group-hover:text-white" })
          ] }, href)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-8 flex w-full flex-col gap-3", "aria-label": "Ventures", children: businessLinks.map((link, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(LinkCard, { link, index: i }, link.href)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "animate-fade-up mt-12 text-xs text-white/40", style: {
          animationDelay: "0.8s"
        }, children: [
          "© 2026 Arif Hussain · Crafted By ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-white/80 transition-colors duration-300 hover:text-[var(--gold)]", children: "BigSur Corp." })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  Index as component
};
