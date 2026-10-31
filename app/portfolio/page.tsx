import type { Metadata } from "next";
import { ExternalLink, Star } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

// ─────────────────────────────────────────────────────────────────────────────
//  Metadata
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Real Shopify stores and web projects built by S Solutions — Petszyy, Hetriv, Shritoys, Asees Global, and Japansh Mart.",
};

// ─────────────────────────────────────────────────────────────────────────────
//  Project data — 5 real client stores
// ─────────────────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    slug: "petszyy",
    name: "Petszyy",
    url: "https://petszyy.com",
    tagline: "Pet products Shopify store — designed for conversion from day one.",
    type: "Shopify E-commerce",
    problem:
      "The client had a product line ready but no online presence. They needed a fully functional, professional Shopify store that could handle sales immediately after launch.",
    role: "Full Shopify store setup — theme customisation, product catalogue, collections, payment gateway, and shipping configuration.",
    stack: ["Shopify", "Liquid", "Custom Sections", "Theme Dev"],
    outcome:
      "Store launched on time and began processing orders in the first week. The client now manages their own products independently with zero ongoing tech overhead.",
    review: {
      quote: "They set everything up perfectly. The store looks great and my customers love the experience. Very professional team.",
      author: "Petszyy Owner",
    },
    status: "Live",
    year: "2024",
  },
  {
    slug: "hetriv",
    name: "Hetriv",
    url: "https://hetriv.com",
    tagline: "Custom Shopify store with a tailored delivery section order flow.",
    type: "Shopify E-commerce",
    problem:
      "The client needed a Shopify store with a non-standard delivery section ordering system that didn't exist out-of-the-box. Standard themes couldn't handle their fulfilment workflow.",
    role: "Shopify store build with custom section development, Studio theme customisation, and a bespoke delivery ordering flow.",
    stack: ["Shopify", "Studio Theme", "Custom Liquid Sections", "JavaScript"],
    outcome:
      "The custom delivery section works seamlessly within Shopify's native checkout — no third-party apps. Store is live and operating daily.",
    review: {
      quote: "The team understood exactly what we needed even when it was hard to explain. The custom delivery flow works perfectly.",
      author: "Hetriv Team",
    },
    status: "Live",
    year: "2024",
  },
  {
    slug: "shritoys",
    name: "Shritoys",
    url: "https://shritoys.com",
    tagline: "Children's toy store — catalogue-first Shopify store built for families.",
    type: "Shopify E-commerce",
    problem:
      "A toy retailer wanted to move their business online but had no digital experience. They needed a clean, trustworthy store that parents would feel comfortable buying from.",
    role: "End-to-end Shopify store — product uploads, collections, mobile-optimised theme, and checkout setup.",
    stack: ["Shopify", "Studio Theme", "E-commerce Setup", "Mobile Optimisation"],
    outcome:
      "Store launched with a full product catalogue. The mobile-first design reflects the client's customer base — most of their traffic comes from phones.",
    review: {
      quote: "We had zero experience with online selling. They handled everything and now our store runs itself. Extremely happy.",
      author: "Shritoys Owner",
    },
    status: "Live",
    year: "2024",
  },
  {
    slug: "aseesglobal",
    name: "Asees Global",
    url: "https://aseesglobal.com",
    tagline: "Global B2B Shopify store — built for wholesale and international buyers.",
    type: "Shopify E-commerce",
    problem:
      "The client sells globally and needed a Shopify store that could handle international customers, multiple product categories, and look trustworthy to wholesale buyers from the US and beyond.",
    role: "Shopify store setup using the Trade theme — optimised for B2B, with multi-category product organisation and international payment support.",
    stack: ["Shopify", "Trade Theme", "B2B Setup", "International Payments"],
    outcome:
      "The store now serves international buyers with full checkout support for USD. The Trade theme gives it a premium, wholesale feel that converts commercial buyers.",
    review: {
      quote: "Our store looks very professional and international buyers trust it. The team delivered exactly what a global store needs.",
      author: "Asees Global Team",
    },
    status: "Live",
    year: "2024",
  },
  {
    slug: "japanshmart",
    name: "Japansh Mart",
    url: "https://japanshmart.com",
    tagline: "Japanese products mart — a curated Shopify store with a distinct cultural identity.",
    type: "Shopify E-commerce",
    problem:
      "The client wanted to sell authentic Japanese products in India but needed a store that captured the aesthetic and cultural feel of Japanese retail — not just a generic Shopify template.",
    role: "Shopify store design and development using the Craft theme — with product curation, cultural branding touches, and collection organisation.",
    stack: ["Shopify", "Craft Theme", "Branding", "Product Curation"],
    outcome:
      "The store has a unique identity that stands out in its niche. Customers frequently comment on the clean, Japan-inspired look and feel of the storefront.",
    review: {
      quote: "I wanted the store to feel Japanese, not just sell Japanese things. They nailed it. The design is exactly what I imagined.",
      author: "Japansh Mart Owner",
    },
    status: "Live",
    year: "2024",
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
//  Shared: WhatsApp SVG icon
// ─────────────────────────────────────────────────────────────────────────────
function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Page Hero
// ─────────────────────────────────────────────────────────────────────────────
function PageHero() {
  const stats = [
    { value: "20+", label: "Clients Delivered" },
    { value: "15+", label: "Shopify Stores Built" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section className="relative bg-bg pt-32 pb-16 border-b border-border overflow-hidden">
      {/* Decorative blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-accent opacity-[0.04] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Eyebrow */}
        <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-5">
          Proven Track Record
        </p>

        {/* H1 */}
        <h1 className="font-display font-bold text-5xl md:text-6xl text-text leading-[1.1] tracking-tight mb-6 max-w-3xl">
          Projects Built &amp;{" "}
          <span className="text-accent">Shipped</span>
        </h1>

        {/* Subtext */}
        <p className="text-muted text-lg max-w-2xl leading-relaxed mb-12">
          We have built and shipped solutions for over <strong>20+ clients worldwide</strong>, including <strong>15+ custom Shopify stores</strong>. Below is a deep dive into 5 of our flagship client stores with real reviews.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-6">
              <div className="text-center sm:text-left">
                <span className="font-display font-bold text-2xl text-text block leading-none">
                  {stat.value}
                </span>
                <span className="text-sm text-muted">{stat.label}</span>
              </div>
              {i < stats.length - 1 && (
                <span
                  aria-hidden="true"
                  className="text-muted/30 text-xl font-light select-none hidden sm:block"
                >
                  ·
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Live status badge
// ─────────────────────────────────────────────────────────────────────────────
function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-accent">
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      Live
    </span>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Star rating display
// ─────────────────────────────────────────────────────────────────────────────
function StarRating() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Single project section
// ─────────────────────────────────────────────────────────────────────────────
function ProjectSection({
  project,
  idx,
  isLast,
}: {
  project: (typeof PROJECTS)[number];
  idx: number;
  isLast: boolean;
}) {
  const bg = idx % 2 === 0 ? "bg-bg" : "bg-surface";

  const contentBlocks = [
    { label: "The Problem", text: project.problem },
    { label: "Our Role", text: project.role },
    { label: "The Outcome", text: project.outcome },
  ] as const;

  return (
    <section
      id={project.slug}
      className={[
        "py-20",
        bg,
        !isLast ? "border-b border-border" : "",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* ── Top bar ── */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text">
              {project.name}
            </h2>
            <p className="text-xs text-muted mt-1 uppercase tracking-widest">
              {project.type}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <LiveBadge />
            <span className="text-sm text-muted">{project.year}</span>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-muted hover:border-accent hover:text-accent transition-all duration-200"
            >
              Visit site
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-muted text-lg leading-relaxed mb-12 max-w-2xl">
          {project.tagline}
        </p>

        {/* ── Two-column body ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: narrative blocks */}
          <div className="lg:col-span-3 flex flex-col">
            {contentBlocks.map((block, blockIdx) => (
              <div
                key={block.label}
                className={
                  blockIdx < contentBlocks.length - 1
                    ? "border-b border-border pb-6 mb-6"
                    : "mb-8"
                }
              >
                <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-2">
                  {block.label}
                </p>
                <p className="text-text text-base leading-relaxed">
                  {block.text}
                </p>
              </div>
            ))}

            {/* WhatsApp link CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id={`portfolio-cta-${project.slug}`}
              className="group inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accentHov transition-colors duration-200 self-start"
            >
              Build something like this →
              <ExternalLink className="h-3.5 w-3.5 opacity-60 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Right: placeholder image + stack + review */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Placeholder image area */}
            <div className="relative h-56 lg:h-64 rounded-2xl bg-surface border border-border overflow-hidden flex items-center justify-center">
              {/* Dot-grid background */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #2E6B4E22 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />
              {/* Radial gradient wash */}
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(46,107,78,0.04) 0%, transparent 70%)",
                }}
              />
              {/* Center label */}
              <div className="relative z-10 flex flex-col items-center gap-2 text-center px-6">
                <span className="font-display font-bold text-xl text-accent">
                  {project.name}
                </span>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted/60 hover:text-accent transition-colors duration-200 uppercase tracking-widest"
                >
                  {project.url.replace("https://", "")} ↗
                </a>
              </div>
              {/* Corner accent */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 right-0 w-20 h-20 rounded-tl-full bg-accent/5"
              />
            </div>

            {/* Stack tags */}
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Client review card */}
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-card">
              <StarRating />
              <blockquote className="mt-3 text-sm text-text leading-relaxed italic">
                &ldquo;{project.review.quote}&rdquo;
              </blockquote>
              <p className="mt-3 text-xs font-semibold text-muted uppercase tracking-wide">
                — {project.review.author}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Maintenance spotlight section
// ─────────────────────────────────────────────────────────────────────────────
function MaintenanceSpotlight() {
  const benefits = [
    {
      title: "Bug Fixes & Patches",
      desc: "Fast turnaround on any issues — broken pages, checkout errors, or display bugs fixed without delay.",
    },
    {
      title: "Performance Optimisation",
      desc: "Speed audits, image compression, theme code cleanup — keeping your store fast for every visitor.",
    },
    {
      title: "Content & Product Updates",
      desc: "New products, banners, copy changes, seasonal collections — handled for you so you stay focused on selling.",
    },
    {
      title: "Shopify App Management",
      desc: "Installing, configuring, or removing apps without breaking your store's existing setup.",
    },
    {
      title: "Security & Uptime Monitoring",
      desc: "Proactive checks to make sure your store is always accessible and your customers' data stays protected.",
    },
    {
      title: "UI / UX Improvements",
      desc: "Ongoing refinements — better mobile layouts, clearer CTAs, improved checkout flow — based on what's working.",
    },
  ];

  return (
    <section className="bg-surface py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">
            Ongoing Support
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text leading-tight mb-6">
            We Don&apos;t Just Build &amp; Leave
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Several of the stores above are on our maintenance plan. Once your
            store is live, keeping it fast, updated, and earning is a separate
            job — and we do that too.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl bg-bg border border-border p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 mb-4">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </div>
              <h3 className="font-display font-bold text-lg text-text mb-2">
                {b.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Pricing note + CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-2xl bg-bg border border-border p-8">
          <div>
            <p className="font-display font-bold text-2xl text-text mb-1">
              Maintenance from <span className="text-accent">₹4,999 / mo</span>
            </p>
            <p className="text-muted text-sm">
              No lock-in. Cancel anytime. Priority response for active clients.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="maintenance-cta"
            className="shrink-0 inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-accentHov hover:shadow-lg hover:-translate-y-px active:translate-y-0"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Ask about maintenance
          </a>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  CTA Band
// ─────────────────────────────────────────────────────────────────────────────
function CtaBand() {
  return (
    <section className="bg-accent py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-6">
          Start Your Project
        </p>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
          Want us to build something for you?
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          Let&apos;s discuss your project.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="portfolio-final-cta"
          className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-accent shadow-xl transition-all duration-200 hover:bg-white/90 hover:shadow-2xl hover:-translate-y-px active:translate-y-0"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Chat on WhatsApp
        </a>
        <p className="mt-8 text-white/50 text-xs">
          Typically replies within a few hours &middot; No obligation
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Page export
// ─────────────────────────────────────────────────────────────────────────────
export default function PortfolioPage() {
  return (
    <>
      <PageHero />
      {PROJECTS.map((project, idx) => (
        <ProjectSection
          key={project.slug}
          project={project}
          idx={idx}
          isLast={idx === PROJECTS.length - 1}
        />
      ))}
      <MaintenanceSpotlight />
      <CtaBand />
    </>
  );
}
