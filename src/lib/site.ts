/**
 * Everything search engines and AI assistants read about the site lives here:
 * the address, the titles, the facts and the structured data built from them.
 * The page shows the same facts, so the two never disagree.
 */

export const SITE_URL = "https://www.arifhussain.in";
export const SITE_NAME = "Arif Hussain";
export const UPDATED = "2026-11-14";

export const EMAIL = "collabwitharif@proton.me";
export const PHONE = "+91 70024 14638";
export const PHONE_HREF = "tel:+917002414638";
export const LOCATION = "Guwahati & Mankachar, Assam";

export const TITLE = "Arif Hussain — Software Developer & Founder of BigSur Corp";
export const DESCRIPTION =
  "Arif Hussain is a software developer from Assam, India, and the founder of BigSur Corp. He builds ZiloOne, Propus and Syntelix ERP.";
export const SHARE_DESCRIPTION =
  "Software developer and founder of BigSur Corp. Building ZiloOne, a self-hosted business suite, from Assam, India.";

export const PORTRAIT = "/img/arif-hussain.webp";
export const PORTRAIT_SMALL = "/img/arif-hussain-720.webp";
export const SHARE_IMAGE = `${SITE_URL}/og.jpg`;

export const GITHUB = "https://github.com/starrvarse";
export const FACEBOOK = "https://www.facebook.com/hussainarif1994";
export const INSTAGRAM = "https://www.instagram.com/____.kyrios.____/";

export type Project = {
  name: string;
  kind: string;
  desc: string;
  href: string;
  /** schema.org applicationCategory */
  category: string;
};

export const projects: Project[] = [
  {
    name: "ZiloOne",
    kind: "Self-hosted business suite",
    desc: "Mail, meetings, files, office apps, invoicing, inventory, accounting, HR and CRM on one Linux server with one sign-in. Written end to end in TypeScript.",
    href: "https://zilomail.in",
    category: "BusinessApplication",
  },
  {
    name: "Propus",
    kind: "Data platform",
    desc: "SQL, cache, streams, object storage and search in one server, compatible with PostgreSQL, Redis, Kafka and S3, on its own storage engine.",
    href: "https://bigsur.in/propus",
    category: "DeveloperApplication",
  },
  {
    name: "Antopus",
    kind: "Embedded database",
    desc: "A full database in pure TypeScript: SQL, a typed ORM, documents, search, vectors and row-level security in one file, with zero dependencies.",
    href: "https://bigsur.in/antopus",
    category: "DeveloperApplication",
  },
  {
    name: "Syntelix ERP",
    kind: "Multi-tenant ERP",
    desc: "Sales, purchasing, inventory, HR and payroll, a document drive and team chat for companies with many branches.",
    href: "https://bigsur.in/syntelix",
    category: "BusinessApplication",
  },
  {
    name: "Zilo System",
    kind: "GST billing & POS",
    desc: "Offline-first billing for retail and wholesale: barcode checkout, multi-unit conversion, UPI QR on receipts and GST returns.",
    href: "https://bigsur.in/zilosystem",
    category: "BusinessApplication",
  },
  {
    name: "Finora",
    kind: "Desktop accounting",
    desc: "Offline accounting, inventory and payroll for Windows, with every record kept on the local PC.",
    href: "https://bigsur.in/finora",
    category: "FinanceApplication",
  },
  {
    name: "GradeSync",
    kind: "School management",
    desc: "Admissions, attendance, exams, report cards, fees and parent portals for schools and colleges.",
    href: "https://bigsur.in/solutions/sms",
    category: "EducationalApplication",
  },
  {
    name: "Distribution DMS",
    kind: "Supply chain",
    desc: "Multi-depot stock, salesman routes and beats, and order taking in the field for FMCG distributors.",
    href: "https://bigsur.in/solutions/dms",
    category: "BusinessApplication",
  },
];

export const stack: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Rust", "Python", "SQL"] },
  { group: "Product", items: ["React", "Next.js", "Tailwind CSS", "Tauri", "Electron"] },
  { group: "Backend", items: ["Node.js", "Express", "Socket.IO", "WebRTC", "BullMQ"] },
  { group: "Data", items: ["PostgreSQL", "Prisma", "Redis", "SQLite", "Row-level security"] },
  { group: "Infrastructure", items: ["Linux", "Docker", "Caddy", "systemd", "PgBouncer"] },
  { group: "Mail & security", items: ["SMTP", "IMAP", "DKIM & DMARC", "OpenID Connect", "Passkeys & 2FA"] },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "Who is Arif Hussain?",
    a: "Arif Hussain is a software developer and entrepreneur from Assam, India. He is the founder and CEO of BigSur Corp, the sales director of Arif Plastic Agency, the founder and a trustee of BlueCrest Royal Academy, and the founder and secretary of Abul Foundation.",
  },
  {
    q: "What software has Arif Hussain built?",
    a: "Through BigSur Corp he has built ZiloOne, a self-hosted workspace and business suite; Propus, a data platform compatible with PostgreSQL, Redis, Kafka and S3; Antopus, an embedded database in pure TypeScript; Syntelix ERP; Zilo System for GST billing; Finora for desktop accounting; GradeSync for schools; and a distribution management system.",
  },
  {
    q: "What is Arif Hussain working on now?",
    a: "ZiloOne: mail, meetings, files, office apps, invoicing, inventory, accounting, HR and CRM that a company runs on its own Linux server with one sign-in. It is live at zilomail.in.",
  },
  {
    q: "Which technologies does Arif Hussain work with?",
    a: "Mostly TypeScript, React, Next.js and Node.js on PostgreSQL, Prisma and Redis, with Rust for storage engines and desktop apps, and Linux, Docker and Caddy for the servers. He also works on mail infrastructure (SMTP, IMAP, DKIM) and application security.",
  },
  {
    q: "Where is Arif Hussain based?",
    a: "In Assam, India. He works between Guwahati, where BigSur Corp was founded in 2023, and Mankachar, where his family has run a distribution business since 1999.",
  },
  {
    q: "How can I contact Arif Hussain?",
    a: `Write to ${EMAIL} or call ${PHONE}. Say whether you need the developer, the distributor, the educator or the trustee.`,
  },
];

/* -------------------------------------------------------------------------- */
/*                               Structured data                              */
/* -------------------------------------------------------------------------- */

const PERSON = `${SITE_URL}/#arif-hussain`;
const WEBSITE = `${SITE_URL}/#website`;
const PAGE = `${SITE_URL}/#profile`;
const BIGSUR = "https://bigsur.in/#organization";

export function structuredData() {
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
        publisher: { "@id": PERSON },
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
        primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}${PORTRAIT}`, width: 1254, height: 1254 },
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
          caption: "Arif Hussain, software developer and founder of BigSur Corp",
        },
        description: DESCRIPTION,
        jobTitle: "Software Developer, Founder & CEO of BigSur Corp",
        hasOccupation: [
          {
            "@type": "Occupation",
            name: "Software Developer",
            occupationLocation: { "@type": "Country", name: "India" },
            skills: stack.flatMap((s) => s.items).join(", "),
          },
          { "@type": "Occupation", name: "Entrepreneur" },
        ],
        worksFor: { "@id": BIGSUR },
        affiliation: [
          { "@id": "https://www.arifplasticagency.in/#organization" },
          { "@id": "https://www.bluecrestroyalacademy.com/#organization" },
          { "@id": "https://www.abulfoundation.org/#organization" },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Guwahati",
          addressRegion: "Assam",
          addressCountry: "IN",
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
          ...stack.flatMap((s) => s.items),
        ],
        sameAs: [GITHUB, "https://bigsur.in/about", FACEBOOK, INSTAGRAM],
      },
      {
        "@type": "Organization",
        "@id": BIGSUR,
        name: "BigSur Corp",
        url: "https://bigsur.in",
        description: "Software company behind ZiloOne, Propus, Syntelix ERP, Zilo System and Finora.",
        foundingDate: "2023",
        foundingLocation: { "@type": "Place", name: "Guwahati, Assam, India" },
        founder: { "@id": PERSON },
      },
      {
        "@type": "Organization",
        "@id": "https://www.arifplasticagency.in/#organization",
        name: "Arif Plastic Agency",
        url: "https://www.arifplasticagency.in",
        description: "Regional super stockist and distribution partner in Mankachar, Assam, since 1999.",
        foundingDate: "1999",
      },
      {
        "@type": "School",
        "@id": "https://www.bluecrestroyalacademy.com/#organization",
        name: "BlueCrest Royal Academy",
        url: "https://www.bluecrestroyalacademy.com",
        description: "K-12 school at Kaloghat, South Salmara Mankachar, Assam.",
        founder: { "@id": PERSON },
      },
      {
        "@type": "NGO",
        "@id": "https://www.abulfoundation.org/#organization",
        name: "Abul Foundation",
        url: "https://www.abulfoundation.org",
        description:
          "Registered non-profit trust advancing education, healthcare and community welfare in Assam.",
        founder: { "@id": PERSON },
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
            publisher: { "@id": BIGSUR },
          },
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}
