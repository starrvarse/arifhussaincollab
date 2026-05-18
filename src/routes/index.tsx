import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, GraduationCap, Heart, ArrowUpRight, Instagram, Facebook, Mail, Building2, Sparkles } from "lucide-react";
import avatar from "@/assets/arif-avatar.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arif Hussain — Entrepreneur & Founder" },
      { name: "description", content: "Founder & CEO of BigSur Corp. Sales Director at Arif Plastic Agency. Founder of BlueCrest Royal Academy." },
      { property: "og:title", content: "Arif Hussain — Entrepreneur & Founder" },
      { property: "og:description", content: "Digital platforms, ERP systems, education, and family business — all in one place." },
    ],
  }),
  component: Index,
});

type Variant = "gold" | "sunset" | "ocean" | "emerald" | "rose";

type Link = {
  label: string;
  sub: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  variant: Variant;
};

const businessLinks: Link[] = [
  { label: "BigSur Corp", sub: "Digital platforms & ERP", href: "https://bigsur.in", icon: Briefcase, variant: "gold" },
  { label: "Arif Plastic Agency", sub: "Distribution · family business", href: "https://www.arifplasticagency.in", icon: Building2, variant: "ocean" },
  { label: "BlueCrest Royal Academy", sub: "Education initiative", href: "https://www.bluecrestroyalacademy.com", icon: GraduationCap, variant: "emerald" },
  { label: "Abul Foundation", sub: "Social impact", href: "https://www.abulfoundation.org", icon: Heart, variant: "rose" },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/____.kyrios.____/", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/hussainarif1994", icon: Facebook },
  { label: "Email", href: "mailto:connect@arifhussain.in", icon: Mail },
];

const variantBg: Record<Variant, string> = {
  gold: "var(--gradient-gold)",
  sunset: "var(--gradient-sunset)",
  ocean: "var(--gradient-ocean)",
  emerald: "var(--gradient-emerald)",
  rose: "var(--gradient-rose)",
};

function LinkCard({ link, index }: { link: Link; index: number }) {
  const Icon = link.icon;
  const isGold = link.variant === "gold";

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        backgroundImage: variantBg[link.variant],
        animationDelay: `${0.15 + index * 0.08}s`,
      }}
      className={`animate-fade-up animate-gradient group relative flex items-center gap-4 overflow-hidden rounded-2xl px-5 py-4 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)] active:scale-[0.98] ${
        isGold ? "text-[oklch(0.15_0.04_280)]" : "text-white"
      }`}
    >
      {/* sheen */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl backdrop-blur-sm ${isGold ? "bg-black/15" : "bg-white/20"}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="font-semibold tracking-tight">{link.label}</div>
        <div className={`text-xs ${isGold ? "opacity-75" : "opacity-90"}`}>{link.sub}</div>
      </div>
      <ArrowUpRight className="h-4 w-4 opacity-70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="animate-blob absolute -top-20 -left-16 h-72 w-72 rounded-full opacity-40 blur-3xl"
          style={{ background: "var(--gradient-sunset)" }}
        />
        <div
          className="animate-blob absolute top-1/3 -right-20 h-80 w-80 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient-ocean)", animationDelay: "3s" }}
        />
        <div
          className="animate-blob absolute bottom-0 left-1/4 h-72 w-72 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient-emerald)", animationDelay: "6s" }}
        />
      </div>

      <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-5 pb-12 pt-12">
        {/* Avatar */}
        <div className="animate-fade-up relative" style={{ animationDelay: "0s" }}>
          <div className="animate-ring-pulse rounded-full p-[3px]" style={{ background: "var(--gradient-gold)" }}>
            <div className="rounded-full bg-[oklch(0.16_0.04_280)] p-[3px]">
              <img
                src={avatar}
                alt="Arif Hussain"
                width={112}
                height={112}
                className="h-28 w-28 rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Identity */}
        <h1 className="shimmer-text animate-fade-up mt-5 text-3xl font-bold tracking-tight" style={{ animationDelay: "0.05s" }}>
          Arif Hussain
        </h1>
        <div
          className="animate-fade-up mt-2 flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[var(--gold)] backdrop-blur-sm"
          style={{ animationDelay: "0.1s" }}
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span className="tracking-wide">Entrepreneur · Founder · Leader</span>
        </div>
        <p
          className="animate-fade-up mt-4 max-w-xs text-center text-sm leading-relaxed text-white/70"
          style={{ animationDelay: "0.15s" }}
        >
          Building digital platforms, ERP systems, and smart technology from India.
          Founder & CEO of <span className="text-white">BigSur Corp</span>.
        </p>

        {/* Socials */}
        <section
          className="animate-fade-up mt-8 flex w-full flex-col items-center gap-3"
          style={{ animationDelay: "0.2s" }}
          aria-label="Social"
        >
          <div className="text-[10px] uppercase tracking-[0.3em] text-white/50">— Connect —</div>
          <div className="flex gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-transparent"
              >
                <span
                  className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "var(--gradient-sunset)" }}
                />
                <Icon className="relative h-5 w-5 transition-colors group-hover:text-white" />
              </a>
            ))}
          </div>
        </section>

        {/* Links */}
        <section className="mt-8 flex w-full flex-col gap-3" aria-label="Ventures">
          {businessLinks.map((link, i) => (
            <LinkCard key={link.href} link={link} index={i} />
          ))}
        </section>

        <footer className="animate-fade-up mt-12 text-xs text-white/40" style={{ animationDelay: "0.8s" }}>
          © {new Date().getFullYear()} Arif Hussain · Crafted with care
        </footer>
      </main>
    </div>
  );
}
