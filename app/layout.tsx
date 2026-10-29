import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ── Google Fonts ──────────────────────────────────────────────────────────────
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// ── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "S Solutions — Websites, Shopify Stores & Web Apps",
    template: "%s | S Solutions",
  },
  description:
    "S Solutions is a 4–5 person agency that builds fast, beautiful websites, Shopify stores, and custom web applications for businesses.",
  keywords: [
    "web design",
    "web development",
    "Shopify",
    "e-commerce",
    "web apps",
    "India",
    "S Solutions",
  ],
  authors: [{ name: "S Solutions" }],
  creator: "S Solutions",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "S Solutions",
    title: "S Solutions — Websites, Shopify Stores & Web Apps",
    description:
      "We build fast, beautiful websites, Shopify stores, and custom web applications for businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "S Solutions — Websites, Shopify Stores & Web Apps",
    description:
      "We build fast, beautiful websites, Shopify stores, and custom web applications for businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ── Root Layout ───────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-bg text-text font-sans antialiased">
        {/* ── Site-wide Navigation ── */}
        <Navbar />

        {/* ── Main Content ── */}
        <main className="min-h-screen">{children}</main>

        {/* ── Site-wide Footer ── */}
        <Footer />
      </body>
    </html>
  );
}
