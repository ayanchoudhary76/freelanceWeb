// ─────────────────────────────────────────────
//  S Solutions — Site-wide constants & copy
// ─────────────────────────────────────────────

export const WHATSAPP_NUMBER = "+919817937397";

/** Pre-filled WhatsApp chat link */
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=Hi%20S%20Solutions%2C%20I%27d%20like%20to%20discuss%20a%20project.`;

export const EMAIL = "hello.s4solutions@gmail.com";

// ── Navigation ──────────────────────────────
export const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

// ── Services ────────────────────────────────
export const SERVICES: { id: string; title: string; tagline: string }[] = [
  {
    id: "website-development",
    title: "Website Development",
    tagline: "Fast, modern, SEO-ready websites tailored to your brand.",
  },
  {
    id: "shopify-ecommerce",
    title: "Shopify & E-commerce",
    tagline: "Full Shopify store setup — from theme to checkout, done right.",
  },
  {
    id: "shopify-landing-page",
    title: "Shopify Product / Landing Page",
    tagline: "High-converting product and landing pages that drive sales.",
  },
  {
    id: "custom-web-apps",
    title: "Custom Web Applications",
    tagline: "Bespoke web apps built to solve your specific business problems.",
  },
  {
    id: "maintenance-redesign",
    title: "Maintenance & Redesign",
    tagline: "Keep your site fast, secure, and looking its best — always.",
  },
];

// ── Pricing ─────────────────────────────────
export const PRICING: {
  name: string;
  fullPrice: number;
  introPrice: number;
  currency: string;
}[] = [
  {
    name: "Landing / Product Page",
    fullPrice: 4000,
    introPrice: 2999,
    currency: "₹",
  },
  {
    name: "Shopify Store",
    fullPrice: 15000,
    introPrice: 12999,
    currency: "₹",
  },
  {
    name: "Custom Website",
    fullPrice: 25000,
    introPrice: 21999,
    currency: "₹",
  },
];

// ── Social Links ─────────────────────────────
export const SOCIAL_LINKS: { platform: string; href: string }[] = [
  { platform: "LinkedIn", href: "https://linkedin.com" },
  { platform: "Instagram", href: "https://instagram.com" },
];
