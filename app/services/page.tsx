import type { Metadata } from "next";
import {
  Globe,
  ShoppingBag,
  Layers,
  Code2,
  Wrench,
  Clock,
  Tag,
  Check,
} from "lucide-react";
import { SERVICES, WHATSAPP_URL } from "@/lib/constants";

// ─────────────────────────────────────────────────────────────────────────────
//  Metadata
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore all services offered by S Solutions — Website Development, Shopify & E-commerce, Custom Web Apps, and more.",
};

// ─────────────────────────────────────────────────────────────────────────────
//  Icon lookup map  (avoids a switch, keeps this a Server Component)
// ─────────────────────────────────────────────────────────────────────────────
const ICON_MAP = { Globe, ShoppingBag, Layers, Code2, Wrench } as const;
type IconKey = keyof typeof ICON_MAP;

// ─────────────────────────────────────────────────────────────────────────────
//  Service detail data  (merged with SERVICES by id below)
// ─────────────────────────────────────────────────────────────────────────────
const SERVICES_DETAIL: {
  id: string;
  icon: IconKey;
  timeline: string;
  startingPrice: string;
  includes: string[];
  cta: string;
}[] = [
  {
    id: "website-development",
    icon: "Globe",
    timeline: "1–2 weeks",
    startingPrice: "₹21,999",
    includes: [
      "Custom responsive design",
      "Up to 5 pages",
      "Contact form integration",
      "Basic SEO setup",
      "Mobile-first build",
      "1 round of revisions",
    ],
    cta: "Start your website",
  },
  {
    id: "shopify-ecommerce",
    icon: "ShoppingBag",
    timeline: "2–3 weeks",
    startingPrice: "₹12,999",
    includes: [
      "Full Shopify store setup",
      "Product catalog (up to 20 items)",
      "Payment gateway integration",
      "Shipping & tax configuration",
      "Mobile-optimised theme",
      "1 round of revisions",
    ],
    cta: "Launch your store",
  },
  {
    id: "shopify-landing-page",
    icon: "Layers",
    timeline: "5–7 days",
    startingPrice: "₹2,999",
    includes: [
      "Single high-converting page",
      "Custom sections & layout",
      "Shopify-native (no third-party apps)",
      "Mobile responsive",
      "Optimised for speed",
      "1 round of revisions",
    ],
    cta: "Get your landing page",
  },
  {
    id: "custom-web-apps",
    icon: "Code2",
    timeline: "3–6 weeks",
    startingPrice: "Custom quote",
    includes: [
      "Full-stack custom build",
      "Database design & setup",
      "User auth & role management",
      "API integrations",
      "Production deployment",
      "Handover & documentation",
    ],
    cta: "Discuss your project",
  },
  {
    id: "maintenance-redesign",
    icon: "Wrench",
    timeline: "Ongoing / project-based",
    startingPrice: "₹4,999 / mo",
    includes: [
      "Bug fixes & patches",
      "Performance optimisation",
      "Content updates",
      "Security monitoring",
      "UI/UX improvements",
      "Priority support",
    ],
    cta: "Get ongoing support",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
//  Merge SERVICES (title + tagline) with SERVICES_DETAIL (icon + pricing)
// ─────────────────────────────────────────────────────────────────────────────
const MERGED = SERVICES_DETAIL.map((detail) => {
  const base = SERVICES.find((s) => s.id === detail.id)!;
  return { ...base, ...detail };
});

// ─────────────────────────────────────────────────────────────────────────────
//  Shared: WhatsApp SVG (brand-accurate inline, avoids lucide brand icons)
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
//  Sub-component: Single service section
// ─────────────────────────────────────────────────────────────────────────────
function ServiceSection({
  service,
  idx,
  isLast,
}: {
  service: (typeof MERGED)[number];
  idx: number;
  isLast: boolean;
}) {
  const isEven = idx % 2 === 0; // even → text left; odd → text right
  const Icon = ICON_MAP[service.icon];
  const num = String(idx + 1).padStart(2, "0");
  const bg = isEven ? "bg-bg" : "bg-surface";

  return (
    <section
      id={service.id}
      className={[
        "relative py-20",
        bg,
        !isLast ? "border-b border-border" : "",
      ].join(" ")}
    >
      {/* Decorative number — positioned absolutely in the section bg */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-8 font-display font-bold text-[10rem] leading-none select-none hidden lg:block"
        style={{ color: "rgba(46,107,78,0.06)" }}
      >
        {num}
      </span>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Inner flex — reverses on odd sections at lg */}
        <div
          className={[
            "flex flex-col gap-12 lg:gap-16 lg:flex-row lg:items-center",
            !isEven ? "lg:flex-row-reverse" : "",
          ].join(" ")}
        >
          {/* ── Left/Text column ── */}
          <div className="flex-1 space-y-7">
            {/* Icon + number row */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10">
                <Icon className="h-5 w-5 text-accent stroke-[1.75]" />
              </div>
              <span
                aria-hidden="true"
                className="font-display font-bold text-5xl leading-none text-accent/15 select-none"
              >
                {num}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text leading-snug">
              {service.title}
            </h2>

            {/* Tagline */}
            <p className="text-muted text-lg leading-relaxed max-w-lg">
              {service.tagline}
            </p>

            {/* Metadata pills */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted">
                <Clock className="h-3.5 w-3.5 text-accent shrink-0" />
                {service.timeline}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted">
                <Tag className="h-3.5 w-3.5 text-accent shrink-0" />
                Starting at {service.startingPrice}
              </span>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id={`service-cta-${service.id}`}
              className="inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-accentHov hover:shadow-lg hover:-translate-y-px active:translate-y-0"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {service.cta}
            </a>
          </div>

          {/* ── Right/Detail column ── */}
          <div className="flex-1 max-w-lg lg:max-w-none">
            <div className="rounded-2xl border border-border bg-surface p-8 shadow-card">
              {/* Card header */}
              <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-6">
                What&apos;s included
              </p>

              {/* Checklist */}
              <ul className="space-y-3.5">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <Check className="h-3 w-3 text-accent stroke-[2.5]" />
                    </span>
                    <span className="text-sm text-text leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Fine print */}
              <p className="mt-4 border-t border-border pt-4 text-xs leading-relaxed text-muted/70">
                Extra pages, integrations, or custom features are quoted
                separately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Sub-component: Final CTA band
// ─────────────────────────────────────────────────────────────────────────────
function CtaBand() {
  return (
    <section className="bg-accent py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-6">
          Let&apos;s Figure It Out Together
        </p>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
          Not sure which service fits?
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          Tell us about your project and we&apos;ll recommend the right fit.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="services-final-cta"
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
//  Page Hero
// ─────────────────────────────────────────────────────────────────────────────
function PageHero() {
  return (
    <section className="relative bg-bg pt-32 pb-16 overflow-hidden border-b border-border">
      {/* Decorative bg blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-accent opacity-[0.035] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Eyebrow */}
        <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-5">
          What We Offer
        </p>

        {/* H1 */}
        <h1 className="font-display font-bold text-5xl md:text-6xl text-text leading-[1.1] tracking-tight mb-6 max-w-3xl">
          Services Built for{" "}
          <span className="text-accent">Real Business</span> Needs
        </h1>

        {/* Subtext */}
        <p className="text-muted text-lg max-w-2xl leading-relaxed">
          We don&apos;t build templates. Every service is scoped, quoted, and
          delivered with your specific business in mind.
        </p>

        {/* Quick-jump nav */}
        <nav
          aria-label="Jump to service"
          className="mt-10 flex flex-wrap gap-2"
        >
          {MERGED.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-muted transition-all duration-200 hover:border-accent hover:text-accent hover:-translate-y-px"
            >
              <span
                className="font-display font-bold text-accent/40 text-xs"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {s.title}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Page export
// ─────────────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <>
      <PageHero />

      {MERGED.map((service, idx) => (
        <ServiceSection
          key={service.id}
          service={service}
          idx={idx}
          isLast={idx === MERGED.length - 1}
        />
      ))}

      <CtaBand />
    </>
  );
}
