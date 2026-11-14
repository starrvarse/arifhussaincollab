import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-B3UxZUIe.css";
const SITE_URL = "https://www.arifhussain.in";
const SITE_NAME = "Arif Hussain";
const UPDATED = "2026-11-14";
const EMAIL = "collabwitharif@proton.me";
const PHONE = "+91 70024 14638";
const PHONE_HREF = "tel:+917002414638";
const LOCATION = "Guwahati & Mankachar, Assam";
const TITLE = "Arif Hussain — Software Developer & Founder of BigSur Corp";
const DESCRIPTION = "Arif Hussain is a software developer from Assam, India, and the founder of BigSur Corp. He builds ZiloOne, Propus and Syntelix ERP.";
const SHARE_DESCRIPTION = "Software developer and founder of BigSur Corp. Building ZiloOne, a self-hosted business suite, from Assam, India.";
const PORTRAIT = "/img/arif-hussain.webp";
const PORTRAIT_SMALL = "/img/arif-hussain-720.webp";
const SHARE_IMAGE = `${SITE_URL}/og.jpg`;
const GITHUB = "https://github.com/starrvarse";
const FACEBOOK = "https://www.facebook.com/hussainarif1994";
const INSTAGRAM = "https://www.instagram.com/____.kyrios.____/";
const projects = [
  {
    name: "ZiloOne",
    kind: "Self-hosted business suite",
    desc: "Mail, meetings, files, office apps, invoicing, inventory, accounting, HR and CRM on one Linux server with one sign-in. Written end to end in TypeScript.",
    href: "https://zilomail.in",
    category: "BusinessApplication"
  },
  {
    name: "Propus",
    kind: "Data platform",
    desc: "SQL, cache, streams, object storage and search in one server, compatible with PostgreSQL, Redis, Kafka and S3, on its own storage engine.",
    href: "https://bigsur.in/propus",
    category: "DeveloperApplication"
  },
  {
    name: "Antopus",
    kind: "Embedded database",
    desc: "A full database in pure TypeScript: SQL, a typed ORM, documents, search, vectors and row-level security in one file, with zero dependencies.",
    href: "https://bigsur.in/antopus",
    category: "DeveloperApplication"
  },
  {
    name: "Syntelix ERP",
    kind: "Multi-tenant ERP",
    desc: "Sales, purchasing, inventory, HR and payroll, a document drive and team chat for companies with many branches.",
    href: "https://bigsur.in/syntelix",
    category: "BusinessApplication"
  },
  {
    name: "Zilo System",
    kind: "GST billing & POS",
    desc: "Offline-first billing for retail and wholesale: barcode checkout, multi-unit conversion, UPI QR on receipts and GST returns.",
    href: "https://bigsur.in/zilosystem",
    category: "BusinessApplication"
  },
  {
    name: "Finora",
    kind: "Desktop accounting",
    desc: "Offline accounting, inventory and payroll for Windows, with every record kept on the local PC.",
    href: "https://bigsur.in/finora",
    category: "FinanceApplication"
  },
  {
    name: "GradeSync",
    kind: "School management",
    desc: "Admissions, attendance, exams, report cards, fees and parent portals for schools and colleges.",
    href: "https://bigsur.in/solutions/sms",
    category: "EducationalApplication"
  },
  {
    name: "Distribution DMS",
    kind: "Supply chain",
    desc: "Multi-depot stock, salesman routes and beats, and order taking in the field for FMCG distributors.",
    href: "https://bigsur.in/solutions/dms",
    category: "BusinessApplication"
  }
];
const stack = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Rust", "Python", "SQL"] },
  { group: "Product", items: ["React", "Next.js", "Tailwind CSS", "Tauri", "Electron"] },
  { group: "Backend", items: ["Node.js", "Express", "Socket.IO", "WebRTC", "BullMQ"] },
  { group: "Data", items: ["PostgreSQL", "Prisma", "Redis", "SQLite", "Row-level security"] },
  { group: "Infrastructure", items: ["Linux", "Docker", "Caddy", "systemd", "PgBouncer"] },
  { group: "Mail & security", items: ["SMTP", "IMAP", "DKIM & DMARC", "OpenID Connect", "Passkeys & 2FA"] }
];
const faqs = [
  {
    q: "Who is Arif Hussain?",
    a: "Arif Hussain is a software developer and entrepreneur from Assam, India. He is the founder and CEO of BigSur Corp, the sales director of Arif Plastic Agency, the founder and a trustee of BlueCrest Royal Academy, and the founder and secretary of Abul Foundation."
  },
  {
    q: "What software has Arif Hussain built?",
    a: "Through BigSur Corp he has built ZiloOne, a self-hosted workspace and business suite; Propus, a data platform compatible with PostgreSQL, Redis, Kafka and S3; Antopus, an embedded database in pure TypeScript; Syntelix ERP; Zilo System for GST billing; Finora for desktop accounting; GradeSync for schools; and a distribution management system."
  },
  {
    q: "What is Arif Hussain working on now?",
    a: "ZiloOne: mail, meetings, files, office apps, invoicing, inventory, accounting, HR and CRM that a company runs on its own Linux server with one sign-in. It is live at zilomail.in."
  },
  {
    q: "Which technologies does Arif Hussain work with?",
    a: "Mostly TypeScript, React, Next.js and Node.js on PostgreSQL, Prisma and Redis, with Rust for storage engines and desktop apps, and Linux, Docker and Caddy for the servers. He also works on mail infrastructure (SMTP, IMAP, DKIM) and application security."
  },
  {
    q: "Where is Arif Hussain based?",
    a: "In Assam, India. He works between Guwahati, where BigSur Corp was founded in 2023, and Mankachar, where his family has run a distribution business since 1999."
  },
  {
    q: "How can I contact Arif Hussain?",
    a: `Write to ${EMAIL} or call ${PHONE}. Say whether you need the developer, the distributor, the educator or the trustee.`
  }
];
const PERSON = `${SITE_URL}/#arif-hussain`;
const WEBSITE = `${SITE_URL}/#website`;
const PAGE = `${SITE_URL}/#profile`;
const BIGSUR = "https://bigsur.in/#organization";
function structuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        description: DESCRIPTION,
        inLanguage: "en",
        publisher: { "@id": PERSON }
      },
      {
        "@type": "ProfilePage",
        "@id": PAGE,
        url: `${SITE_URL}/`,
        name: TITLE,
        description: DESCRIPTION,
        inLanguage: "en",
        dateModified: UPDATED,
        isPartOf: { "@id": WEBSITE },
        about: { "@id": PERSON },
        mainEntity: { "@id": PERSON },
        primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}${PORTRAIT}`, width: 1254, height: 1254 }
      },
      {
        "@type": "Person",
        "@id": PERSON,
        name: "Arif Hussain",
        givenName: "Arif",
        familyName: "Hussain",
        url: `${SITE_URL}/`,
        image: {
          "@type": "ImageObject",
          url: `${SITE_URL}${PORTRAIT}`,
          width: 1254,
          height: 1254,
          caption: "Arif Hussain, software developer and founder of BigSur Corp"
        },
        description: DESCRIPTION,
        jobTitle: "Software Developer, Founder & CEO of BigSur Corp",
        hasOccupation: [
          {
            "@type": "Occupation",
            name: "Software Developer",
            occupationLocation: { "@type": "Country", name: "India" },
            skills: stack.flatMap((s) => s.items).join(", ")
          },
          { "@type": "Occupation", name: "Entrepreneur" }
        ],
        worksFor: { "@id": BIGSUR },
        affiliation: [
          { "@id": "https://www.arifplasticagency.in/#organization" },
          { "@id": "https://www.bluecrestroyalacademy.com/#organization" },
          { "@id": "https://www.abulfoundation.org/#organization" }
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Guwahati",
          addressRegion: "Assam",
          addressCountry: "IN"
        },
        homeLocation: { "@type": "Place", name: "Mankachar, Assam, India" },
        nationality: { "@type": "Country", name: "India" },
        email: `mailto:${EMAIL}`,
        knowsAbout: [
          "Software development",
          "Full-stack web development",
          "Self-hosted software",
          "ERP software",
          "GST billing software",
          "Mail servers",
          "Database engines",
          "Multi-tenant SaaS",
          "FMCG distribution",
          "School management",
          ...stack.flatMap((s) => s.items)
        ],
        sameAs: [GITHUB, "https://bigsur.in/about", FACEBOOK, INSTAGRAM]
      },
      {
        "@type": "Organization",
        "@id": BIGSUR,
        name: "BigSur Corp",
        url: "https://bigsur.in",
        description: "Software company behind ZiloOne, Propus, Syntelix ERP, Zilo System and Finora.",
        foundingDate: "2023",
        foundingLocation: { "@type": "Place", name: "Guwahati, Assam, India" },
        founder: { "@id": PERSON }
      },
      {
        "@type": "Organization",
        "@id": "https://www.arifplasticagency.in/#organization",
        name: "Arif Plastic Agency",
        url: "https://www.arifplasticagency.in",
        description: "Regional super stockist and distribution partner in Mankachar, Assam, since 1999.",
        foundingDate: "1999"
      },
      {
        "@type": "School",
        "@id": "https://www.bluecrestroyalacademy.com/#organization",
        name: "BlueCrest Royal Academy",
        url: "https://www.bluecrestroyalacademy.com",
        description: "K-12 school at Kaloghat, South Salmara Mankachar, Assam.",
        founder: { "@id": PERSON }
      },
      {
        "@type": "NGO",
        "@id": "https://www.abulfoundation.org/#organization",
        name: "Abul Foundation",
        url: "https://www.abulfoundation.org",
        description: "Registered non-profit trust advancing education, healthcare and community welfare in Assam.",
        founder: { "@id": PERSON }
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#work`,
        name: "Software built by Arif Hussain",
        itemListElement: projects.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "CreativeWork",
            additionalType: "https://schema.org/SoftwareApplication",
            name: p.name,
            description: p.desc,
            url: p.href,
            genre: p.kind,
            creator: { "@id": PERSON },
            publisher: { "@id": BIGSUR }
          }
        }))
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a }
        }))
      }
    ]
  };
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: SITE_NAME },
      { name: "author", content: "Arif Hussain" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "theme-color", content: "#f8f6f0" },
      { name: "apple-mobile-web-app-title", content: SITE_NAME },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_IN" }
    ],
    links: [
      {
        rel: "preload",
        href: "/fonts/plus-jakarta-sans.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: appCss
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicon-96x96.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/android-chrome-192x192.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "manifest",
        href: "/site.webmanifest"
      }
    ],
    scripts: [
      {
        src: "https://p.zilomail.in/z.js",
        async: true,
        "data-site": "ws_9e33nkbk25bdhtnq9exi"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("noscript", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: ".reveal{opacity:1!important;transform:none!important}" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter = () => import("./index-qYflzQBr.mjs");
const SHARE_ALT = "Arif Hussain, software developer and founder of BigSur Corp";
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: TITLE
    }, {
      name: "description",
      content: DESCRIPTION
    }, {
      property: "og:type",
      content: "profile"
    }, {
      property: "og:url",
      content: `${SITE_URL}/`
    }, {
      property: "og:title",
      content: TITLE
    }, {
      property: "og:description",
      content: SHARE_DESCRIPTION
    }, {
      property: "og:image",
      content: SHARE_IMAGE
    }, {
      property: "og:image:type",
      content: "image/jpeg"
    }, {
      property: "og:image:width",
      content: "1200"
    }, {
      property: "og:image:height",
      content: "630"
    }, {
      property: "og:image:alt",
      content: SHARE_ALT
    }, {
      property: "profile:first_name",
      content: "Arif"
    }, {
      property: "profile:last_name",
      content: "Hussain"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: TITLE
    }, {
      name: "twitter:description",
      content: SHARE_DESCRIPTION
    }, {
      name: "twitter:image",
      content: SHARE_IMAGE
    }, {
      name: "twitter:image:alt",
      content: SHARE_ALT
    }, {
      "script:ld+json": structuredData()
    }],
    links: [{
      rel: "canonical",
      href: `${SITE_URL}/`
    }, {
      rel: "me",
      href: GITHUB
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  EMAIL as E,
  FACEBOOK as F,
  GITHUB as G,
  INSTAGRAM as I,
  LOCATION as L,
  PHONE as P,
  PHONE_HREF as a,
  PORTRAIT as b,
  PORTRAIT_SMALL as c,
  faqs as f,
  projects as p,
  router as r,
  stack as s
};
