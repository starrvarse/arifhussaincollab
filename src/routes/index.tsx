import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code2,
  ExternalLink,
  Check,
  Copy,
  Briefcase,
  Layers,
  GraduationCap,
  HeartHandshake,
  ArrowRight,
  X,
  Menu,
  Building2,
  ShieldCheck,
  Cpu,
  Truck,
  BookOpen,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arif Hussain — Founder, Tech Entrepreneur & Leader" },
      {
        name: "description",
        content:
          "Founder & CEO of BigSur Corp. Sales Director at Arif Plastic Agency. Founder & Trustee of BlueCrest Royal Academy. Trustee at Abul Foundation.",
      },
      {
        property: "og:title",
        content: "Arif Hussain — Founder, Tech Entrepreneur & Leader",
      },
      {
        property: "og:description",
        content:
          "Building enterprise software solutions, distribution networks, and educational institutions in Assam, India.",
      },
      {
        property: "og:image",
        content: "/Intense Side-Gaze Portrait Cutout.png",
      },
    ],
  }),
  component: IndexPage,
});

type Venture = {
  name: string;
  role: string;
  category: string;
  desc: string;
  badges: string[];
  href: string;
  logo: string;
  icon: typeof Briefcase;
};

const familyVentures: Venture[] = [
  {
    name: "Arif Plastic Agency",
    role: "Sales Director",
    category: "SUPER STOCKIST & DISTRIBUTION",
    desc: "Premier regional super stockist & distribution partner since 1999 for leading MNC brands: Pidilite Industries, Mondelez India, Kimberly-Clark & Unicharm.",
    badges: ["Est. 1999", "Pidilite & Mondelez Partner", "Mankachar"],
    href: "https://www.arifplasticagency.in",
    logo: "/arifplasticlogo.png",
    icon: Truck,
  },
  {
    name: "BlueCrest Royal Academy",
    role: "Founder & Trustee",
    category: "PREMIUM K-12 EDUCATION",
    desc: "Prestigious educational institution from Kindergarten to Grade 12 at Kaloghat, South Salmara Mankachar, with modern labs, STEM programs & global standards.",
    badges: ["K-12 Campus", "Under Abul Foundation", "South Salmara"],
    href: "https://www.bluecrestroyalacademy.com",
    logo: "/bluecrestlogo.png",
    icon: GraduationCap,
  },
  {
    name: "Abul Foundation",
    role: "Founder & Secretary (Trustee)",
    category: "CHARITABLE FAMILY TRUST",
    desc: "Registered non-profit trust (DARPAN ID: AS/2026/0952495) in memory of late Abul Hussain, advancing education scholarships, medical clinics & community welfare.",
    badges: ["Darpan: AS/2026/0952495", "Education & Health", "Mankachar"],
    href: "https://www.abulfoundation.org",
    logo: "/abulfoundlogo.png",
    icon: HeartHandshake,
  },
];

function IndexPage() {
  const [activeNav, setActiveNav] = useState<"home" | "products" | "family-business" | "contact">("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("collabwitharif@proton.me");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f8f6f0] text-[#1c2522] selection:bg-[#e5a93b]/30 selection:text-[#1f4b44] flex flex-col justify-between overflow-x-hidden font-sans">
      {/* Top Header Navigation */}
      <header className="relative w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 pt-6 sm:pt-8 pb-4 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-1">
          <a
            href="/"
            onClick={() => {
              setActiveNav("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1f4b44] transition-transform hover:scale-105"
          >
            <span className="text-[#1f4b44]">A</span>rif
            <span className="text-[#e5a93b]">.</span>
          </a>
        </div>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 sm:gap-8 text-sm font-medium text-[#4a5551]">
          <button
            onClick={() => {
              setActiveNav("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`transition-all py-1 px-3.5 rounded-full ${
              activeNav === "home"
                ? "font-semibold text-[#1f4b44] tracking-tight bg-[#ede8dc]/80"
                : "hover:text-[#1f4b44]"
            }`}
          >
            (&nbsp;&nbsp;Home&nbsp;&nbsp;)
          </button>
          <a
            href="#products"
            onClick={() => setActiveNav("products")}
            className={`transition-colors py-1 px-2 ${
              activeNav === "products"
                ? "font-semibold text-[#1f4b44]"
                : "hover:text-[#1f4b44]"
            }`}
          >
            Products
          </a>
          <a
            href="#family-business"
            onClick={() => setActiveNav("family-business")}
            className={`transition-colors py-1 px-2 ${
              activeNav === "family-business"
                ? "font-semibold text-[#1f4b44]"
                : "hover:text-[#1f4b44]"
            }`}
          >
            Family Business
          </a>
          <button
            onClick={() => setIsContactOpen(true)}
            className={`transition-colors py-1 px-2 ${
              activeNav === "contact"
                ? "font-semibold text-[#1f4b44]"
                : "hover:text-[#1f4b44]"
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Right CTA Button & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setIsContactOpen(true)}
            className="group relative inline-flex items-center gap-1.5 sm:gap-2 bg-[#1f4b44] hover:bg-[#183d36] text-white px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wide shadow-md shadow-[#1f4b44]/15 hover:shadow-lg hover:shadow-[#1f4b44]/25 transition-all duration-200 active:scale-95"
          >
            <Mail className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            <span>Get in Touch</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#1f4b44] hover:bg-[#ede8dc]/80 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-5 right-5 z-40 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-[#ede7d8] flex flex-col gap-2 animate-fade-in mt-1">
            <button
              onClick={() => {
                setActiveNav("home");
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`text-left py-2 px-3 rounded-xl text-sm font-medium transition-colors ${
                activeNav === "home"
                  ? "bg-[#edf2f0] text-[#1f4b44] font-bold"
                  : "text-[#4a5551] hover:bg-gray-50"
              }`}
            >
              Home
            </button>
            <a
              href="#products"
              onClick={() => {
                setActiveNav("products");
                setIsMobileMenuOpen(false);
              }}
              className={`py-2 px-3 rounded-xl text-sm font-medium transition-colors ${
                activeNav === "products"
                  ? "bg-[#edf2f0] text-[#1f4b44] font-bold"
                  : "text-[#4a5551] hover:bg-gray-50"
              }`}
            >
              Products &amp; Software
            </a>
            <a
              href="#family-business"
              onClick={() => {
                setActiveNav("family-business");
                setIsMobileMenuOpen(false);
              }}
              className={`py-2 px-3 rounded-xl text-sm font-medium transition-colors ${
                activeNav === "family-business"
                  ? "bg-[#edf2f0] text-[#1f4b44] font-bold"
                  : "text-[#4a5551] hover:bg-gray-50"
              }`}
            >
              Family Business
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsContactOpen(true);
              }}
              className="text-left py-2 px-3 rounded-xl text-sm font-semibold text-[#1f4b44] hover:bg-[#edf2f0] transition-colors"
            >
              Contact Information
            </button>
          </div>
        )}
      </header>

      {/* Main Hero Section */}
      <main className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-4 sm:pt-6 pb-12 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center relative">
          
          {/* LEFT COLUMN: Greeting, Name, Curved Arrow, Experience, Socials */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left z-10 order-2 lg:order-1 pt-2 lg:pt-0">
            {/* Greeting & Name */}
            <div className="space-y-1">
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight text-[#1c2522] leading-tight">
                Hy! I Am
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-[#e5a93b] leading-none">
                Arif Hussain.
              </h1>
            </div>

            {/* Playful Dashed Curved Arrow */}
            <div className="hidden lg:block relative w-60 h-28 my-3 -ml-4 pointer-events-none">
              <svg
                viewBox="0 0 240 100"
                className="w-full h-full overflow-visible"
                fill="none"
              >
                {/* Curved dashed stroke swinging left & pointing straight up towards the name */}
                <path
                  d="M 215 32 C 178 12, 122 18, 85 54 C 55 80, 30 72, 22 28"
                  stroke="#2d5e54"
                  strokeWidth="2.2"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                  className="dashed-arrow-animate"
                  style={{
                    animation: "dash-draw 15s linear infinite",
                  }}
                />
                {/* Solid connector right into arrow tip */}
                <path
                  d="M 22 28 L 22 18"
                  stroke="#2d5e54"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                {/* Crisp symmetric upward chevron arrowhead matching original design */}
                <path
                  d="M 15 28 L 22 17 L 29 28"
                  stroke="#2d5e54"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Experience Block */}
            <div className="flex items-center gap-3 mt-4 lg:mt-1">
              <span className="text-4xl sm:text-5xl lg:text-[52px] font-black text-[#1f4b44] tracking-tight leading-none">
                08
              </span>
              <div className="text-left font-bold text-[11px] sm:text-xs text-[#1f4b44] tracking-wider uppercase leading-tight">
                YEARS
                <br />
                EXPERIENCE
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4 mt-8 lg:mt-10">
              <a
                href="https://www.facebook.com/hussainarif1994"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#e5a93b] hover:text-[#1f4b44] transition-all transform hover:scale-110 active:scale-95"
              >
                <Facebook className="w-5 h-5 fill-current" />
              </a>
              <a
                href="https://www.instagram.com/____.kyrios.____/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#e5a93b] hover:text-[#1f4b44] transition-all transform hover:scale-110 active:scale-95"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:collabwitharif@proton.me"
                aria-label="Email"
                className="text-[#e5a93b] hover:text-[#1f4b44] transition-all transform hover:scale-110 active:scale-95"
              >
                <Mail className="w-5 h-5" strokeWidth={2.2} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#e5a93b] hover:text-[#1f4b44] transition-all transform hover:scale-110 active:scale-95"
              >
                <Linkedin className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>

          {/* CENTER COLUMN: Yellow Ring with Arif Hussain's Real Cutout Image */}
          <div className="lg:col-span-4 flex justify-center items-center relative order-1 lg:order-2 my-2 lg:my-0">
            <div className="relative group">
              {/* Outer decorative ambient glow */}
              <div className="absolute inset-0 rounded-full bg-[#e5a93b]/20 blur-3xl transform scale-110 pointer-events-none" />

              {/* 3D Pop-Out Frame Container with Ample Headroom to Prevent Clipping */}
              <div className="relative mx-auto w-[250px] h-[310px] sm:w-[330px] sm:h-[405px] lg:w-[380px] lg:h-[470px] flex items-end justify-center">
                {/* Yellow Ring Circle Background with Studio Lighting Gradient */}
                <div
                  className="absolute bottom-0 w-[250px] h-[250px] sm:w-[330px] sm:h-[330px] lg:w-[380px] lg:h-[380px] rounded-full border-[5px] sm:border-[6px] border-[#e5a93b]"
                  style={{
                    background: "radial-gradient(circle at 50% 36%, #ffffff 0%, #faf6ef 52%, #ede3cf 100%)",
                    boxShadow: "inset 0 0 35px rgba(229,169,59,0.14), inset 0 -25px 45px rgba(31,75,68,0.06), 0 20px 50px rgba(229,169,59,0.22)",
                  }}
                />

                {/* Real Cutout Image Container: rounded-b-full with Safari WebKit mask & clip-path fixes */}
                <div
                  className="relative z-10 w-[250px] h-[310px] sm:w-[330px] sm:h-[405px] lg:w-[380px] lg:h-[470px] overflow-hidden rounded-b-full pointer-events-none"
                  style={{
                    WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                    maskImage: "radial-gradient(white, black)",
                    WebkitClipPath: "inset(0 0 0 0 round 0 0 9999px 9999px)",
                    clipPath: "inset(0 0 0 0 round 0 0 9999px 9999px)",
                    transform: "translateZ(0)",
                    WebkitTransform: "translateZ(0)",
                    isolation: "isolate",
                  }}
                >
                  <img
                    src="/Intense Side-Gaze Portrait Cutout.png"
                    alt="Arif Hussain"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto h-[290px] sm:h-[385px] lg:h-[450px] max-w-none object-contain object-bottom pointer-events-auto transition-transform duration-500 hover:scale-[1.03] select-none"
                    style={{
                      filter: "drop-shadow(0 14px 28px rgba(31, 75, 68, 0.16))",
                    }}
                  />
                  {/* Subtle bottom curve blend gradient */}
                  <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#1f4b44]/10 to-transparent pointer-events-none rounded-b-full" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Tagline, Floating Production Systems Card, Software Developer Signature */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-between h-full order-3 space-y-8 lg:space-y-12 text-center lg:text-right">
            {/* Top Right Tagline */}
            <div className="max-w-[280px] lg:pt-2">
              <p className="text-sm sm:text-base text-[#4b5551] font-normal leading-relaxed">
                I build reliable software systems,
                <br />
                and I love what I do.
              </p>
            </div>

            {/* Floating Current Flagship / ZiloOne Card */}
            <a
              href="https://zilomail.in"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block bg-white rounded-2xl p-4 sm:p-5 shadow-[0_12px_36px_rgba(31,75,68,0.08)] border border-[#ede7d8] w-full max-w-[250px] text-left transform transition-all duration-300 hover:-translate-y-1 hover:border-[#1f4b44]/40 group"
            >
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-[#e5a93b]" />
                  <span className="text-xs font-semibold text-[#4a5551]">
                    Current Project
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active Dev
                </span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <div>
                  <div className="text-sm sm:text-base font-extrabold text-[#1c2522] group-hover:text-[#1f4b44] tracking-tight transition-colors flex items-center gap-1">
                    <span>ZiloOne Suite</span>
                    <ExternalLink className="w-3 h-3 text-[#8a948f] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-[11px] text-[#6b7570] font-medium">
                    zilomail.in
                  </div>
                </div>
                <div className="text-right pl-2">
                  <span className="text-xs font-mono font-bold text-[#1f4b44] bg-[#f8f6f0] px-1.5 py-0.5 rounded border border-[#eae4d6]">
                    TypeScript
                  </span>
                  <div className="text-[10px] text-[#8a948f] font-semibold mt-0.5">
                    End-to-End
                  </div>
                </div>
              </div>
            </a>

            {/* Bottom Right Signature / Software Developer */}
            <div className="space-y-0.5 pt-2">
              <div className="font-creative text-4xl sm:text-5xl text-[#1f4b44] -rotate-6 transform origin-bottom-right inline-block pr-1 font-bold">
                Software
              </div>
              <div className="text-xl sm:text-2xl font-black text-[#1f4b44] tracking-tight">
                Developer<span className="text-[#e5a93b]">.</span>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Products & Software Platforms Section (Directly after Hero) */}
      <section id="products" className="w-full py-12 sm:py-14 px-6 sm:px-10 lg:px-16 bg-[#f2efe6] border-t border-[#e8e2d4]">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#e6e0d2]">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#e5a93b] mb-1 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5" />
                <span>Featured Project &amp; Platforms</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1f4b44] tracking-tight">
                Software Engineered by Arif Hussain
              </h2>
            </div>
            <a
              href="https://bigsur.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1f4b44] hover:text-[#e5a93b] transition-colors mt-2 sm:mt-0"
            >
              <span>BigSur Corp • bigsur.in</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* FEATURED: ZiloOne — Minimal, Clean Architecture Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e5dfd2] shadow-sm mb-8 transition-all hover:border-[#1f4b44]/40">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Current Flagship Project</span>
                  </span>
                  <a
                    href="https://zilomail.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-[#1f4b44] hover:text-[#e5a93b] transition-colors"
                  >
                    <span>zilomail.in</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="https://zilomail.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl sm:text-3xl font-black text-[#1f4b44] hover:text-[#e5a93b] tracking-tight transition-colors inline-flex items-center gap-2 group"
                  >
                    <span>ZiloOne</span>
                    <ExternalLink className="w-4 h-4 text-[#8a948f] group-hover:text-[#e5a93b] transition-colors" />
                  </a>
                </div>
                <p className="text-sm font-semibold text-[#e5a93b] mt-0.5 mb-2.5">
                  The Self-Hosted Workspace &amp; Business Suite
                </p>

                <p className="text-xs sm:text-sm text-[#55615d] leading-relaxed mb-4">
                  Brings invoicing, inventory, HR, accounting, CRM, mail, meetings, drive, docs, and distribution management onto a single Linux server with central OpenID Connect authentication.
                </p>

                <div className="text-[11px] font-mono text-[#7a8581] mb-3">
                  One installer • One sign-in • One admin panel • 100% TypeScript
                </div>

                {/* Clean tech stack pills */}
                <div className="flex flex-wrap gap-1.5 text-[10px] font-mono text-[#1f4b44]">
                  <span className="bg-[#f8f6f0] px-2.5 py-1 rounded border border-[#eae4d6]">TypeScript</span>
                  <span className="bg-[#f8f6f0] px-2.5 py-1 rounded border border-[#eae4d6]">Next.js 15</span>
                  <span className="bg-[#f8f6f0] px-2.5 py-1 rounded border border-[#eae4d6]">React 19</span>
                  <span className="bg-[#f8f6f0] px-2.5 py-1 rounded border border-[#eae4d6]">PostgreSQL</span>
                  <span className="bg-[#f8f6f0] px-2.5 py-1 rounded border border-[#eae4d6]">Redis</span>
                  <span className="bg-[#f8f6f0] px-2.5 py-1 rounded border border-[#eae4d6]">Caddy</span>
                  <span className="bg-[#f8f6f0] px-2.5 py-1 rounded border border-[#eae4d6]">ZiloSecur</span>
                </div>
              </div>

              {/* Right side: Suite Modules summary & Visit zilomail.in button */}
              <div className="lg:w-80 flex flex-col justify-between space-y-4 pt-4 lg:pt-0 border-t border-[#ede7d8] lg:border-t-0 lg:border-l lg:border-[#f0ece1] lg:pl-6">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#8a948f] mb-2.5">
                    Integrated Applications
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-[#3c4743] font-medium">
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#e5a93b]" />ZiloInvoice</span>
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#e5a93b]" />ZiloAccounting</span>
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#e5a93b]" />ZiloCRM</span>
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#e5a93b]" />ZiloDMS</span>
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#e5a93b]" />ZiloHR &amp; ESS</span>
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#e5a93b]" />ZiloMail &amp; Meet</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://zilomail.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full bg-[#1f4b44] hover:bg-[#183d36] text-white px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all shadow-sm active:scale-95 group"
                  >
                    <span>Visit Platform · zilomail.in</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Syntelix ERP */}
            <a
              href="https://bigsur.in/syntelix"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl p-5 sm:p-6 border border-[#e5dfd2] hover:border-[#1f4b44]/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#1f4b44] bg-[#edf2f0] px-2 py-0.5 rounded">
                    ERP Platform
                  </span>
                  <span className="text-[11px] text-[#7a8581] font-mono">10k+ Users</span>
                </div>
                <h3 className="text-base font-bold text-[#1c2522] group-hover:text-[#1f4b44] transition-colors">
                  Syntelix ERP Suite
                </h3>
                <p className="text-xs text-[#55615d] leading-relaxed mt-1.5">
                  Multi-tenant business OS unifying sales, inventory, HR payroll, and multi-branch operations.
                </p>
                <div className="text-[11px] text-[#7a8581] font-mono mt-3">
                  Multi-Tenant • Cloud &amp; Offline • Real-Time Sync
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#f2ede4] flex items-center justify-between text-xs font-semibold text-[#1f4b44] group-hover:text-[#e5a93b] transition-colors">
                <span>Explore Syntelix</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </a>

            {/* Zilo System & WinAcc Pro */}
            <a
              href="https://bigsur.in/zilosystem"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl p-5 sm:p-6 border border-[#e5dfd2] hover:border-[#e5a93b]/60 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8a6827] bg-[#fbf5e8] px-2 py-0.5 rounded">
                    Billing &amp; Finance
                  </span>
                  <span className="text-[11px] text-[#7a8581] font-mono">Offline-First</span>
                </div>
                <h3 className="text-base font-bold text-[#1c2522] group-hover:text-[#1f4b44] transition-colors">
                  Zilo System &amp; WinAcc Pro
                </h3>
                <p className="text-xs text-[#55615d] leading-relaxed mt-1.5">
                  High-speed GST invoicing, compliant e-invoicing, barcode billing, and local financial accounting.
                </p>
                <div className="text-[11px] text-[#7a8581] font-mono mt-3">
                  GST Invoicing • Barcode POS • Local SQLite DB
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#f2ede4] flex items-center justify-between text-xs font-semibold text-[#1f4b44] group-hover:text-[#e5a93b] transition-colors">
                <span>Explore Zilo System</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </a>

            {/* GradeSync & Distribution DMS */}
            <a
              href="https://bigsur.in/solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl p-5 sm:p-6 border border-[#e5dfd2] hover:border-[#1f4b44]/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#1f4b44] bg-[#edf2f0] px-2 py-0.5 rounded">
                    Vertical Solutions
                  </span>
                  <span className="text-[11px] text-[#7a8581] font-mono">Specialized</span>
                </div>
                <h3 className="text-base font-bold text-[#1c2522] group-hover:text-[#1f4b44] transition-colors">
                  GradeSync &amp; Distribution DMS
                </h3>
                <p className="text-xs text-[#55615d] leading-relaxed mt-1.5">
                  Custom-built portals powering school academic workflows and FMCG supply chain distribution.
                </p>
                <div className="text-[11px] text-[#7a8581] font-mono mt-3">
                  Student LMS • Route Operations • Supply Chain
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#f2ede4] flex items-center justify-between text-xs font-semibold text-[#1f4b44] group-hover:text-[#e5a93b] transition-colors">
                <span>Explore Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Family Businesses & Community Foundations (Down Below) */}
      <section
        id="family-business"
        className="w-full bg-[#f8f6f0] border-t border-[#e8e2d4] py-12 sm:py-14 px-6 sm:px-10 lg:px-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#e6e0d2]">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#e5a93b] mb-1">
                Family Enterprise &amp; Trusts
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1f4b44] tracking-tight">
                Family Businesses &amp; Foundations
              </h2>
            </div>
            <p className="text-xs text-[#6b7570] max-w-sm mt-2 sm:mt-0">
              Super stockist distribution since 1999, K-12 education, and non-profit trusts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {familyVentures.map((venture) => {
              return (
                <a
                  key={venture.name}
                  href={venture.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl p-5 sm:p-6 border border-[#e5dfd2] hover:border-[#e5a93b]/50 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg bg-[#f8f6f0] p-1.5 border border-[#eae4d6] flex items-center justify-center overflow-hidden">
                        <img
                          src={venture.logo}
                          alt={venture.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#1f4b44] bg-[#edf2f0] px-2 py-0.5 rounded">
                        {venture.category}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#1c2522] group-hover:text-[#1f4b44] transition-colors">
                      {venture.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#e5a93b] mt-0.5 mb-2">
                      {venture.role}
                    </p>
                    <p className="text-xs text-[#5f6b67] leading-relaxed mb-3">
                      {venture.desc}
                    </p>
                    <div className="text-[11px] text-[#7a8581] font-mono">
                      {venture.badges.join(" • ")}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#f2ede4] flex items-center justify-between text-xs font-semibold text-[#1f4b44] group-hover:text-[#e5a93b] transition-colors">
                    <span>Visit website</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#1f4b44] text-[#f8f6f0] py-8 sm:py-10 px-5 sm:px-10 lg:px-16 border-t border-[#183c36]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <span className="text-2xl font-black tracking-tight text-white">
              Arif.
            </span>
            <span className="text-xs text-white/60">
              — Founder &amp; CEO of BigSur Corp · Sales Director at Arif Plastic Agency
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-6 text-xs text-white/70">
            <a href="mailto:collabwitharif@proton.me" className="hover:text-[#e5a93b] transition-colors">
              collabwitharif@proton.me
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="tel:+917002414638" className="hover:text-[#e5a93b] transition-colors">
              +91 70024 14638
            </a>
            <span className="hidden sm:inline">•</span>
            <span>© 2026 Arif Hussain</span>
          </div>
        </div>
      </footer>

      {/* CONTACT MODAL */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in overflow-y-auto">
          <div className="bg-white rounded-3xl p-5 sm:p-8 max-w-md w-full shadow-2xl border border-[#ded7c6] relative my-auto max-h-[92vh] overflow-y-auto">
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-bold uppercase tracking-wider text-[#e5a93b] mb-1">
              Connect Directly
            </div>
            <h3 className="text-2xl font-black text-[#1f4b44]">Let's Work Together</h3>
            <p className="text-xs text-[#5e6b66] mt-1 mb-6">
              Reach out for technology partnerships, enterprise ERP deployments, distribution inquiries, or philanthropy.
            </p>

            <div className="space-y-3">
              {/* Email */}
              <div className="p-3.5 rounded-xl bg-[#f8f6f0] border border-[#e5dfd2] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#1f4b44]" />
                  <span className="text-xs font-medium text-[#1c2522]">
                    collabwitharif@proton.me
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg hover:bg-white text-xs font-semibold text-[#1f4b44] flex items-center gap-1 transition-all"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>

              {/* Phone */}
              <a
                href="tel:+917002414638"
                className="p-3.5 rounded-xl bg-[#f8f6f0] border border-[#e5dfd2] flex items-center justify-between hover:border-[#e5a93b] transition-all"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#1f4b44]" />
                  <span className="text-xs font-medium text-[#1c2522]">
                    +91 70024 14638
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
              </a>

              {/* Location */}
              <div className="p-3.5 rounded-xl bg-[#f8f6f0] border border-[#e5dfd2] flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#e5a93b]" />
                <span className="text-xs font-medium text-[#1c2522]">
                  Guwahati &amp; Mankachar, Assam, India
                </span>
              </div>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/____.kyrios.____/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#f8f6f0] border border-[#e5dfd2] flex items-center justify-between hover:border-[#e5a93b] transition-all"
              >
                <div className="flex items-center gap-3">
                  <Instagram className="w-4 h-4 text-[#e5a93b]" />
                  <span className="text-xs font-medium text-[#1c2522]">
                    @____.kyrios.____
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/hussainarif1994"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#f8f6f0] border border-[#e5dfd2] flex items-center justify-between hover:border-[#e5a93b] transition-all"
              >
                <div className="flex items-center gap-3">
                  <Facebook className="w-4 h-4 text-[#1f4b44]" />
                  <span className="text-xs font-medium text-[#1c2522]">
                    facebook.com/hussainarif1994
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setIsContactOpen(false)}
                className="px-4 py-2 bg-[#1f4b44] text-white rounded-lg text-xs font-semibold hover:bg-[#173b35] transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
