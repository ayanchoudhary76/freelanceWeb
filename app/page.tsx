import Link from "next/link";
import { Check, Rocket, BadgeCheck, Timer } from "lucide-react";
import { SERVICES, PRICING, WHATSAPP_URL } from "@/lib/constants";

// ─────────────────────────────────────────────────────────────
//  Shared: WhatsApp SVG icon (inline, brand-accurate)
// ─────────────────────────────────────────────────────────────
function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
//  1. Hero Section
// ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-screen bg-bg flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-accent opacity-[0.04] blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-[400px] h-[400px] rounded-full bg-accent opacity-[0.03] blur-2xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ── Left: Copy ── */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <p className="inline-flex items-center gap-2 text-xs font-semibold text-muted uppercase tracking-widest">
              <span className="w-6 h-px bg-muted/50" />
              4–5 Person Agency · Production-Deployed Work
            </p>

            {/* H1 */}
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-text leading-[1.1] tracking-tight">
              We Build Websites,{" "}
              <span className="block">Shopify Stores &amp;</span>
              <span className="text-accent">Web Apps</span>
            </h1>

            {/* Subtext */}
            <p className="text-muted text-lg max-w-lg leading-relaxed">
              Fixed pricing. Fast turnaround. Real systems shipped to production
              — not just mockups.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-cta"
                className="inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-accentHov hover:shadow-lg hover:-translate-y-px active:translate-y-0"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </a>
              <Link
                href="portfolio"
                id="hero-portfolio-cta"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-text transition-all duration-200 hover:border-accent hover:text-accent hover:-translate-y-px"
              >
                View Our Work
                <span aria-hidden="true">↓</span>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-2">
              {["Production Deployed", "Fixed Pricing", "Fast Turnaround"].map(
                (badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/10">
                      <Check className="h-3 w-3 text-accent stroke-[2.5]" />
                    </span>
                    {badge}
                  </div>
                )
              )}
            </div>
          </div>

          {/* ── Right: Decorative Card Stack ── */}
          <div className="relative flex items-center justify-center lg:justify-end h-[420px]">
            {/* Background blob behind cards */}
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-80 h-80 rounded-full bg-accent opacity-[0.06] blur-3xl" />
            </div>

            {/* Card 2 — back (slightly offset) */}
            <div
              aria-hidden="true"
              className="absolute top-14 right-4 lg:right-0 w-72 rounded-2xl bg-surface border border-border shadow-card p-6 rotate-3 transition-transform duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Timer className="h-4 w-4 text-accent" />
                </div>
                <span className="text-xs font-semibold text-muted uppercase tracking-wider">
                  Delivery Time
                </span>
              </div>
              <p className="font-display font-bold text-2xl text-text">2–3 weeks</p>
              <p className="text-sm text-muted mt-1">Average project turnaround</p>
              <div className="mt-4 h-1.5 rounded-full bg-border overflow-hidden">
                <div className="h-full w-3/4 rounded-full bg-accent/50" />
              </div>
            </div>

            {/* Card 1 — front */}
            <div className="relative w-72 rounded-2xl bg-surface border border-border shadow-card-hover p-6 -rotate-1">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                  </span>
                  <span className="text-xs font-semibold text-muted uppercase tracking-wider">
                    Live Right Now
                  </span>
                </div>
                <span className="text-xs text-muted/60">↑ 3 projects</span>
              </div>

              <p className="font-display font-bold text-3xl text-text">
                3 Live Projects
              </p>
              <p className="text-sm text-muted mt-1.5">
                In production. Used by real users daily.
              </p>

              <div className="mt-5 space-y-2">
                {[
                  { name: "AttendanceLive", pct: "100%" },
                  { name: "CourierPortal", pct: "100%" },
                  { name: "Chaudhary Kennel", pct: "100%" },
                ].map((p) => (
                  <div key={p.name} className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 rounded-full bg-border overflow-hidden">
                      <div
                        className="h-full rounded-full bg-accent"
                        style={{ width: p.pct }}
                      />
                    </div>
                    <span className="text-xs text-muted w-28 truncate">{p.name}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs text-muted">Satisfaction</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg
                      key={s}
                      viewBox="0 0 12 12"
                      fill="#2E6B4E"
                      className="h-3 w-3"
                      aria-hidden="true"
                    >
                      <path d="M6 1l1.236 2.502 2.764.402-2 1.95.472 2.751L6 7.25l-2.472 1.355.472-2.751-2-1.95 2.764-.402z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
//  2. Services Snapshot
// ─────────────────────────────────────────────────────────────
function ServicesSection() {
  return (
    <section id="services" className="bg-bg py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text mb-5">
            What We Build
          </h2>
          <p className="text-muted text-lg">
            Everything your business needs online — designed, built, and delivered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="group relative bg-surface rounded-2xl border border-border p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 flex flex-col"
            >
              {/* Number badge */}
              <span
                className="font-display font-bold text-4xl leading-none mb-6 block select-none"
                style={{ color: "rgba(46,107,78,0.18)" }}
                aria-hidden="true"
              >
                {String(idx + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="font-display font-bold text-xl text-text mb-2">
                {service.title}
              </h3>

              {/* Tagline */}
              <p className="text-muted text-sm leading-relaxed flex-1">
                {service.tagline}
              </p>

              {/* Arrow link */}
              <Link
                href={`/services#${service.id}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-all duration-200 group-hover:gap-2.5"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn more
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom anchor */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accentHov transition-colors duration-200 border-b border-accent/30 pb-0.5 hover:border-accent"
          >
            See full service details →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
//  3. Why Us
// ─────────────────────────────────────────────────────────────
const WHY_US = [
  {
    icon: Rocket,
    title: "Production-Deployed Work",
    desc: "Every project we've shipped is live and used by real users — not a demo or a proof-of-concept.",
  },
  {
    icon: BadgeCheck,
    title: "Fixed, Transparent Pricing",
    desc: "No hidden fees. You know the full cost before we write a single line of code.",
  },
  {
    icon: Timer,
    title: "Fast Turnaround",
    desc: "Most projects delivered in 2–3 weeks. We respect your timeline as much as our own.",
  },
];

function WhyUsSection() {
  return (
    <section className="bg-surface py-24 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-3">
            Our Commitment
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text">
            Why Teams Choose S Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_US.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-start p-8 rounded-2xl bg-bg border border-border shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/10">
                <Icon className="h-5 w-5 text-accent stroke-[1.75]" />
              </div>
              <h3 className="font-display font-bold text-xl text-text mb-3">
                {title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
//  4. Featured Work (Portfolio Preview)
// ─────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    slug: "attendancelive",
    name: "AttendanceLive",
    desc: "Real-time staff attendance tracking system.",
    tags: ["Next.js", "Node.js", "AWS"],
  },
  {
    slug: "courierportal",
    name: "CourierPortal",
    desc: "End-to-end courier management dashboard.",
    tags: ["React", "Laravel", "MySQL"],
  },
  {
    slug: "chaudhary-kennel",
    name: "Kennel Portfolio",
    desc: "Kennel business website with breed listings & inquiry flow.",
    tags: ["Next.js", "Tailwind"],
  },
];

function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-bg py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header — left aligned */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-3">
              Case Studies
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-text">
              Featured Work
            </h2>
            <p className="text-muted text-lg mt-3">
              A few of the systems we've built and shipped.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="shrink-0 text-sm font-medium text-accent hover:text-accentHov border-b border-accent/30 pb-0.5 hover:border-accent transition-colors duration-200"
          >
            View all work →
          </Link>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.slug}
              className="group flex flex-col bg-bg rounded-2xl border border-border overflow-hidden shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              {/* Placeholder image area */}
              <div className="relative h-52 bg-surface flex items-center justify-center overflow-hidden">
                {/* Grid pattern overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #2E6B4E22 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="relative flex flex-col items-center gap-2">
                  <span className="font-display font-bold text-xl text-accent">
                    {project.name}
                  </span>
                  <span className="text-xs text-muted uppercase tracking-widest">
                    Live Project
                  </span>
                </div>
                {/* Corner accent */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-full bg-accent/5"
                />
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-bold text-xl text-text mb-1.5">
                  {project.name}
                </h3>
                <p className="text-muted text-sm mb-4 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="mt-auto">
                  <Link
                    href={`/portfolio#${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-all duration-200 group-hover:gap-2.5"
                  >
                    View case study
                    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
//  5. Pricing Teaser
// ─────────────────────────────────────────────────────────────
const PRICING_FEATURES: Record<string, string[]> = {
  "Landing / Product Page": [
    "Custom design",
    "Mobile responsive",
    "Delivered in 5–7 days",
  ],
  "Shopify Store": [
    "Full store setup",
    "Product pages",
    "Delivered in 2–3 weeks",
  ],
  "Custom Website": [
    "Fully bespoke",
    "Scalable architecture",
    "Delivered in 3–4 weeks",
  ],
};

function PricingSection() {
  return (
    <section className="bg-surface py-24 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Intro banner */}
        <div className="mb-12 mx-auto max-w-2xl">
          <div className="rounded-2xl bg-accent px-8 py-5 text-center text-white shadow-lg">
            <p className="text-lg font-semibold tracking-tight">
              🎉 Intro Pricing — First 10 Clients Only
            </p>
            <p className="text-white/75 text-sm mt-1">
              Lock in our launch prices before they go up.
            </p>
          </div>
        </div>

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text mb-4">
            Simple, Honest Pricing
          </h2>
          <p className="text-muted">
            No surprises. No hourly billing. Just one clear number.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start md:items-center">
          {PRICING.map((tier, idx) => {
            const isFeatured = tier.name === "Shopify Store";
            const features = PRICING_FEATURES[tier.name] ?? [];

            return (
              <div
                key={tier.name}
                className={[
                  "relative flex flex-col rounded-2xl bg-bg p-8 shadow-card transition-all duration-300",
                  isFeatured
                    ? "border-2 border-accent scale-105 shadow-card-hover z-10"
                    : "border border-border hover:shadow-card-hover hover:-translate-y-1",
                ].join(" ")}
              >
                {isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-block rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan name */}
                <h3 className="font-display font-bold text-xl text-text mb-6">
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="mb-2">
                  <span className="text-muted text-sm line-through">
                    {tier.currency}
                    {tier.fullPrice.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-display text-2xl font-bold text-text">
                    {tier.currency}
                  </span>
                  <span className="font-display text-5xl font-bold text-text leading-none tracking-tight">
                    {tier.introPrice.toLocaleString("en-IN")}
                  </span>
                </div>
                <p className="text-xs text-accent font-medium mb-8">
                  Intro price for first 10 clients
                </p>

                {/* Feature list */}
                <ul className="space-y-3 mb-8 flex-1">
                  {features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm text-muted">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                        <Check className="h-3 w-3 text-accent stroke-[2.5]" />
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`pricing-cta-${idx}`}
                  className={[
                    "flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-all duration-200",
                    isFeatured
                      ? "bg-accent text-white hover:bg-accentHov shadow-md hover:shadow-lg hover:-translate-y-px"
                      : "border border-border text-text hover:border-accent hover:text-accent",
                  ].join(" ")}
                >
                  Get Started
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
//  6. Final CTA Band
// ─────────────────────────────────────────────────────────────
function CtaBand() {
  return (
    <section className="bg-accent py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
        {/* Decorative top label */}
        <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-6">
          Let's Work Together
        </p>

        <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
          Ready to build something?
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          Let's talk about your project. No pressure, no jargon.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="final-whatsapp-cta"
          className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-accent shadow-xl transition-all duration-200 hover:bg-white/90 hover:shadow-2xl hover:-translate-y-px active:translate-y-0"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Chat on WhatsApp
        </a>

        {/* Micro trust signal */}
        <p className="mt-8 text-white/50 text-xs">
          Typically replies within a few hours · No obligation
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
//  Page Export
// ─────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <PortfolioSection />
      <PricingSection />
      <CtaBand />
    </>
  );
}
