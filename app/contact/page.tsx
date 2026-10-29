import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { WHATSAPP_URL, EMAIL } from "@/lib/constants";
import ContactForm from "./ContactForm";

// ─────────────────────────────────────────────────────────────────────────────
//  Metadata
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with S Solutions. Chat on WhatsApp or fill in a quick form — we typically respond within a few hours.",
};

// ─────────────────────────────────────────────────────────────────────────────
//  Shared: inline SVG icons
// ─────────────────────────────────────────────────────────────────────────────
function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Page Hero
// ─────────────────────────────────────────────────────────────────────────────
function PageHero() {
  return (
    <section className="relative bg-bg pt-32 pb-12 border-b border-border overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-20 w-[440px] h-[440px] rounded-full bg-accent opacity-[0.04] blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-5">
          Get In Touch
        </p>
        <h1 className="font-display font-bold text-5xl md:text-6xl text-text leading-[1.1] tracking-tight mb-6 max-w-3xl">
          Let&apos;s Build Something{" "}
          <span className="text-accent">Together</span>
        </h1>
        <p className="text-muted text-lg max-w-xl leading-relaxed">
          WhatsApp is fastest. The form below works too — we&apos;ll respond
          within a few hours.
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Left column — WhatsApp primary card + secondary info
// ─────────────────────────────────────────────────────────────────────────────
function LeftColumn() {
  const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ayanchoudhary76/", Icon: LinkedInIcon },
    { label: "Instagram", href: "https://www.instagram.com/__sahilberwal", Icon: InstagramIcon },
  ];

  return (
    <div className="flex flex-col">
      {/* ── Big WhatsApp card ── */}
      <div className="rounded-3xl bg-accent p-10 flex flex-col gap-6 shadow-lg">
        {/* Icon wrapper */}
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
          <WhatsAppIcon className="h-8 w-8 text-white" />
        </div>

        <div className="space-y-3">
          <h2 className="font-display font-bold text-3xl text-white leading-snug">
            Chat on WhatsApp
          </h2>
          <p className="text-white/80 text-base leading-relaxed">
            This is the fastest way to reach us. Most conversations start and
            finish here.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-whatsapp-cta"
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-accent shadow-md transition-all duration-200 hover:bg-white/90 hover:shadow-lg hover:-translate-y-px active:translate-y-0"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Start a conversation
          </a>
          <span className="text-white/50 text-xs text-center w-full pl-1">
            Typically replies within a few hours
          </span>
        </div>
      </div>

      {/* ── Secondary info block ── */}
      <div className="mt-8 space-y-6">
        {/* Email */}
        <div>
          <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-3">
            Email
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2.5 text-sm text-muted hover:text-accent transition-colors duration-200 group"
          >
            <Mail className="h-4 w-4 text-accent/60 group-hover:text-accent transition-colors duration-200" />
            {EMAIL}
          </a>
        </div>

        {/* Socials */}
        <div>
          <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-3">
            Social
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-all duration-200 hover:-translate-y-px"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Location note */}
        <p className="text-muted/60 text-xs pt-2">
          Based in India · Available globally
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  Page export  (Server Component)
// ─────────────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <>
      <PageHero />

      <section className="bg-bg py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <LeftColumn />
            {/* ContactForm is a Client Component */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
