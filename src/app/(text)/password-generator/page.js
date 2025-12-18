import PasswordGeneratorTool from "@/components/tools/text/PasswordGeneratorTool";

export const metadata = {
  title: "Password Generator (2026) - Strong & Secure Passwords | 30Tools",
  description: "Generate 100% secure, random passwords instantly (Updated 2026). Create strong passwords with custom length & characters. Client-side only - totally private.",
  keywords: [
    "password generator 2026",
    "strong password generator free",
    "secure password maker",
    "random password creator",
    "generate secure password online",
    "password generator 32 characters",
    "complex password generator",
    "updated 2026",
    "offline password generator"
  ].join(", "),
  alternates: {
    canonical: "https://30tools.com/password-generator",
  },
  openGraph: {
    title: "Password Generator (2026) - Create Strong Passwords",
    description: "⚡ Generate impossible-to-hack passwords instantly! Secure, private & client-side only (Updated 2026).",
    url: "https://30tools.com/password-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/password-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Free Password Generator 2026 - Secure Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Password Generator (2026) - Secure Tool",
    description: "⚡ Create strong, secure passwords instantly. Updated 2026!",
    images: ["/og-images/password-generator.jpg"],
    creator: "@30tools",
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

export default function PasswordGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Password Generator - Free Secure Password Creator",
    description:
      "Generate strong, secure passwords with customizable length and character sets. Perfect for creating unique passwords for all your accounts.",
    url: "https://30tools.com/password-generator",
    applicationCategory: "WebApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    creator: {
      "@type": "Organization",
      name: "30tools",
      url: "https://30tools.com",
    },
    featureList: [
      "Customizable password length",
      "Include/exclude character types",
      "Uppercase and lowercase letters",
      "Numbers and special characters",
      "Password strength indicator",
      "Copy to clipboard",
      "Generate multiple passwords",
      "No storage or logging",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1567",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PasswordGeneratorTool />
    </>
  );
}
