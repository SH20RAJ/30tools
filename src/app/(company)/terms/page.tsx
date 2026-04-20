import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Terms of Use Online - No Signup | 30tools",
  description:
    "Read the 30tools Terms of Use. Our privacy-first online toolkit is free, browser-based, and available without registration.",
  keywords:
    "terms of use, terms and conditions, 30tools terms, free online tools terms, no signup terms, browser-based tools terms",
  alternates: {
    canonical: "https://30tools.com/terms",
  },
  openGraph: {
    title: "Free Terms of Use Online - No Signup | 30tools",
    description:
      "Read the 30tools Terms of Use. Our privacy-first online toolkit is free, browser-based, and available without registration.",
    url: "https://30tools.com/terms",
    siteName: "30tools",
    type: "website",
    images: [{ url: "/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Terms of Use Online - No Signup | 30tools",
    description:
      "Read the 30tools Terms of Use. Our privacy-first online toolkit is free, browser-based, and available without registration.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <div className="space-y-8">
        <div className="prose prose-invert max-w-none">
          <h1>Terms of Use</h1>
          <p>
            These Terms of Use govern your access to and use of 30tools. By
            using the site, you agree to the terms described here.
          </p>
          <h2>Use of the Site</h2>
          <p>
            30tools provides free browser-based utilities. You may use the site
            for lawful purposes only. Do not abuse the service, upload harmful
            content, or attempt to compromise platform security.
          </p>
          <h2>Intellectual Property</h2>
          <p>
            All content, design, and functionality on 30tools are the property of
            30tools unless otherwise stated. You may not reproduce or redistribute
            content without permission.
          </p>
          <h2>Disclaimer</h2>
          <p>
            The tools are provided as-is without warranties. We strive for
            accuracy, but we are not liable for any damages resulting from use of
            the site.
          </p>
          <h2>Limitation of Liability</h2>
          <p>
            To the extent permitted by law, 30tools is not responsible for any
            direct, indirect, incidental, or consequential damages from using the
            site.
          </p>
          <h2>Changes to the Terms</h2>
          <p>
            We may update these Terms at any time. Continued use of the site
            after changes constitutes acceptance of the updated terms.
          </p>
          <h2>Contact</h2>
          <p>
            If you have questions about these Terms, please visit our{' '}
            <a href="/contact" className="text-primary hover:underline">
              Contact
            </a>{' '}
            page.
          </p>
        </div>
      </div>
    </main>
  );
}
