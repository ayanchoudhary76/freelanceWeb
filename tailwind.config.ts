import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./lib/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── S Solutions Design Tokens ──
        bg: "#FDFBF7",          // primary background
        surface: "#F4F0EA",     // card / section background
        text: "#1C2826",        // primary body text
        muted: "#5A6B65",       // secondary / muted text
        accent: "#2E6B4E",      // CTA, links, highlights
        accentHov: "#245a3e",   // hover state of accent
        border: "#E2DDD6",      // dividers, card borders
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        glow: "0 0 0 3px rgba(46, 107, 78, 0.15)",
        card: "0 1px 3px 0 rgba(28, 40, 38, 0.06), 0 1px 2px -1px rgba(28, 40, 38, 0.06)",
        "card-hover":
          "0 10px 24px -4px rgba(28, 40, 38, 0.10), 0 4px 8px -2px rgba(28, 40, 38, 0.06)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#1C2826",
            a: {
              color: "#2E6B4E",
              "&:hover": { color: "#245a3e" },
            },
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
