import type { Metadata } from "next";
import Link from "next/link";
import { getRouteById } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Free Privacy Policy Online - No Signup | 30tools",
  description:
    "Read the 30tools Privacy Policy. We explain what data we collect, how we protect it, and how our privacy-first browser-based tools work. No signup required.",
  keywords:
    "privacy policy, 30tools privacy, free online tools privacy, no signup privacy, browser-based tools privacy",
  alternates: {
    canonical: "https://30tools.com/privacy",
  },
  openGraph: {
    title: "Free Privacy Policy Online - No Signup | 30tools",
    description:
      "Read the 30tools Privacy Policy. We explain what data we collect, how we protect it, and how our privacy-first browser-based tools work. No signup required.",
    url: "https://30tools.com/privacy",
    siteName: "30tools",
    type: "website",
    images: [{ url: "/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Privacy Policy Online - No Signup | 30tools",
    description:
      "Read the 30tools Privacy Policy. We explain what data we collect, how we protect it, and how our privacy-first browser-based tools work. No signup required.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <div className="space-y-8">
        <div className="prose prose-invert max-w-none">
          <h1>Privacy Policy</h1>
          <p>
            30tools is committed to providing privacy-first browser-based tools.
            This page explains what information we collect, why we collect it,
            and how we protect your data.
          </p>
          <h2>What We Collect</h2>
          <p>
            We do not require registration or personal accounts to use the site.
            Most tools operate entirely in your browser, so your input data stays
            on your device.
          </p>
          <h2>Analytics & Cookies</h2>
          <p>
            We may use minimal analytics to measure site performance and improve
            the user experience. Tracking is limited to non-identifying metrics.
          </p>
          <h2>Third-Party Services</h2>
          <p>
            We may use third-party services for hosting, performance, or security.
            These services are governed by their own privacy policies.
          </p>
          <h2>Data Security</h2>
          <p>
            We take reasonable steps to protect the site and any information that
            is transmitted to us. The safest use is with our browser-based tools
            that process data locally.
          </p>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. The latest version will
            always be available at <strong>https://30tools.com/privacy</strong>.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have questions about privacy, please visit our{' '}
            <Link href={getRouteById("contact")} className="text-primary hover:underline">
              Contact
            </Link>{' '}
            page.
          </p>
        </div>
      </div>
    </main>
  );
}
