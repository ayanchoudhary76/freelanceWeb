"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2 } from "lucide-react";
import { handleContact } from "./actions";

// ─── Field style shared across all inputs / selects / textarea ───────────────
const fieldCls =
  "w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200";

const labelCls = "block text-xs font-medium text-muted uppercase tracking-wide mb-1.5";

// ─── Submit button — reads pending state from the nearest <form> ─────────────
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={[
        "w-full rounded-full py-3.5 text-sm font-semibold text-white transition-all duration-200",
        "bg-accent hover:bg-accentHov hover:shadow-lg hover:-translate-y-px active:translate-y-0",
        "flex items-center justify-center gap-2",
        pending ? "opacity-60 cursor-not-allowed translate-y-0 shadow-none" : "",
      ].join(" ")}
    >
      {pending ? (
        <>
          {/* Spinner */}
          <svg
            className="h-4 w-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
          Sending...
        </>
      ) : (
        "Send Message"
      )}
    </button>
  );
}

// ─── Main client component ────────────────────────────────────────────────────
export default function ContactForm() {
  const [state, formAction] = useActionState(handleContact, null);

  return (
    <div className="rounded-2xl border border-border bg-surface p-8 shadow-card">
      {/* Card header */}
      <h2 className="font-display text-2xl font-bold text-text mb-2">
        Send us a message
      </h2>
      <p className="text-muted text-sm mb-8">
        We&apos;ll get back to you within 24 hours.
      </p>

      {state?.success ? (
        /* ── Success state ── */
        <div className="flex flex-col items-center gap-4 py-12 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
            <CheckCircle2 className="h-7 w-7 text-accent stroke-[1.75]" />
          </div>
          <div>
            <p className="font-display font-bold text-xl text-text mb-1">
              Message sent!
            </p>
            <p className="text-sm text-muted">
              We&apos;ll be in touch soon.
            </p>
          </div>
        </div>
      ) : (
        /* ── Form ── */
        <form action={formAction} className="space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="contact-name" className={labelCls}>
              Your Name *
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className={fieldCls}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="contact-email" className={labelCls}>
              Your Email Address *
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className={fieldCls}
            />
          </div>

          {/* Phone / WhatsApp */}
          <div>
            <label htmlFor="contact-phone" className={labelCls}>
              Phone / WhatsApp Number
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              className={fieldCls}
            />
          </div>

          {/* Business */}
          <div>
            <label htmlFor="contact-business" className={labelCls}>
              Business / Brand Name
            </label>
            <input
              id="contact-business"
              name="business"
              type="text"
              placeholder="Your business name"
              className={fieldCls}
            />
          </div>

          {/* Service */}
          <div>
            <label htmlFor="contact-service" className={labelCls}>
              Service Interested In *
            </label>
            <select
              id="contact-service"
              name="service"
              required
              defaultValue=""
              className={fieldCls}
            >
              <option value="" disabled>
                Select a service…
              </option>
              <option value="Website Development">Website Development</option>
              <option value="Shopify & E-commerce">Shopify &amp; E-commerce</option>
              <option value="Shopify Landing Page">Shopify Landing Page</option>
              <option value="Custom Web Application">Custom Web Application</option>
              <option value="Maintenance & Redesign">Maintenance &amp; Redesign</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </div>

          {/* Budget */}
          <div>
            <label htmlFor="contact-budget" className={labelCls}>
              Budget Range
            </label>
            <select
              id="contact-budget"
              name="budget"
              defaultValue=""
              className={fieldCls}
            >
              <option value="" disabled>
                Select a range…
              </option>
              <option value="Under ₹5,000 ($60)">Under ₹5,000 ($60)</option>
              <option value="₹5,000 – ₹15,000 ($60 – $185)">₹5,000 – ₹15,000 ($60 – $185)</option>
              <option value="₹15,000 – ₹30,000 ($185 – $400)">₹15,000 – ₹30,000 ($185 – $400)</option>
              <option value="₹30,000+ ($400+)">₹30,000+ ($400+)</option>
              <option value="Flexible / Not sure">Flexible / Not sure</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="contact-message" className={labelCls}>
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              placeholder="Tell us a bit about your project..."
              className={`${fieldCls} resize-none`}
            />
          </div>

          <SubmitButton />
        </form>
      )}
    </div>
  );
}
