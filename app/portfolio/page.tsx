import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

// ─────────────────────────────────────────────────────────────────────────────
//  Metadata
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Real projects built and shipped by S Solutions — AttendanceLive, CourierPortal, and Chaudhary Kennel.",
};

// ─────────────────────────────────────────────────────────────────────────────
//  Project data
// ─────────────────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    slug: "attendancelive",
    name: "AttendanceLive",
    tagline:
      "Real-time staff attendance tracking — built for daily operational use.",
    problem:
      "The client needed a reliable way to track attendance across multiple staff members without paper registers or manual spreadsheets.",
    role: "Full-stack development, database design, deployment.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "AWS EC2"],
    outcome:
      "System is live and in daily use. Handles real-time check-ins, generates monthly reports, and reduced tracking overhead significantly.",
    status: "Live",
    year: "2024",
  },
  {
    slug: "courierportal",
    name: "CourierPortal",
    tagline:
      "End-to-end courier management dashboard for operations teams.",
    problem:
      "The business was managing orders through WhatsApp and Excel. They needed a central dashboard to track pickups, deliveries, and status updates.",
    role: "Frontend & backend development, UI design, API integration.",
    stack: ["React", "Laravel", "MySQL", "REST API"],
    outcome:
      "Operational efficiency improved with real-time order tracking, driver assignment, and automated status notifications.",
    status: "Live",
    year: "2024",
  },
  {
    slug: "chaudhary-kennel",
    name: "Kennel Portfolio",
    tagline: "Business website with breed showcase and inquiry system.",
    problem:
      "The kennel had no online presence. Customers had to contact them through word of mouth with no way to view available dogs or submit inquiries.",
    role: "Website design and development, contact form integration, SEO setup.",
    stack: ["Next.js", "Tailwind CSS", "Nodemailer"],
    outcome:
      "Online inquiries started coming in within the first week of launch. The breed listing page became the primary lead source.",
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
    { value: "3", label: "Live Projects" },
    { value: "3", label: "Happy Clients" },
    { value: "100%", label: "Production Deployed" },
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
          Our Work
        </p>

        {/* H1 */}
        <h1 className="font-display font-bold text-5xl md:text-6xl text-text leading-[1.1] tracking-tight mb-6 max-w-3xl">
          Projects Built &amp;{" "}
          <span className="text-accent">Shipped</span>
        </h1>

        {/* Subtext */}
        <p className="text-muted text-lg max-w-2xl leading-relaxed mb-12">
          Every project below is live, used by real people, and was built by our
          team from the ground up.
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
      {/* Pulsing dot */}
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      Live
    </span>
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
        <div className="flex flex-wrap items-start justify-between gap-4 mb-10">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text">
            {project.name}
          </h2>
          <div className="flex items-center gap-3">
            <LiveBadge />
            <span className="text-sm text-muted">{project.year}</span>
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
                className={[
                  blockIdx < contentBlocks.length - 1
                    ? "border-b border-border pb-6 mb-6"
                    : "mb-8",
                ].join(" ")}
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

          {/* Right: placeholder image + stack tags */}
          <div className="lg:col-span-2">
            {/* Placeholder image area */}
            <div className="relative h-56 lg:h-72 rounded-2xl bg-surface border border-border overflow-hidden flex items-center justify-center">
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

              {/* Subtle radial gradient wash */}
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
                <span className="text-xs text-muted/50 uppercase tracking-widest">
                  Screenshot placeholder
                </span>
              </div>

              {/* Corner accent */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 right-0 w-20 h-20 rounded-tl-full bg-accent/5"
              />
            </div>

            {/* Stack tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.stack.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
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
      <CtaBand />
    </>
  );
}
