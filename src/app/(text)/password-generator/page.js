import PasswordGeneratorTool from '@/components/tools/text/PasswordGeneratorTool';

export const metadata = {
  title: "Free Password Generator - Create Strong Random Passwords Online | 30tools",
  description: "Generate strong, secure passwords instantly with our 100% free password generator. No limits, no registration. Create random passwords with custom length (8-128 characters), symbols, and numbers.",
  keywords: [
    // Primary high-volume keywords from research
    "password generator",
    "random password generator",
    "password generator 12 characters",
    "password generator free",
    "strong password generator",
    "generate password",
    "password generator 15 characters",
    "lastpass password generator",
    "norton password generator",
    "password generator 8 characters",
    "secure password generator",
    "password generator lastpass",
    "bitwarden password generator",
    "generate strong password",
    "free password generator",
    "generate secure password",
    "google password generator",
    "password generator random",
    "passwords generator",
    "strong random password generator",
    "generate random password",
    "generate a password",
    "last pass password generator",

    // Long-tail keywords for SEO ranking
    "password generator online free no registration unlimited",
    "random password generator strong secure custom length",
    "password generator 12 characters symbols numbers uppercase",
    "strong password generator with special characters",
    "secure password generator for websites accounts business",
    "password generator free no ads clean interface",
    "random password generator copy paste clipboard ready",
    "password generator tool cybersecurity best practices",
    "strong password generator bulk multiple passwords",
    "secure password generator privacy protected local",
    "password generator with character type options",
    "random password generator instant generation one click",
    "password generator for personal business professional use",
    "strong password generator meets security requirements"
  ].join(", "),
  alternates: {
    canonical: "https://30tools.com/password-generator"
  },
  openGraph: {
    title: "Free Password Generator - Create Strong Secure Passwords",
    description: "Generate strong, secure passwords instantly. Customize length, include special characters, numbers, and symbols for maximum security.",
    url: "https://30tools.com/password-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/password-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Free Password Generator Tool - 30tools"
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Free Password Generator - Create Strong Secure Passwords",
    description: "Generate strong, secure passwords instantly. Customize length and character types for maximum security.",
    images: ["/og-images/password-generator.jpg"],
    creator: '@30tools'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function PasswordGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Password Generator - Free Secure Password Creator",
    "description": "Generate strong, secure passwords with customizable length and character sets. Perfect for creating unique passwords for all your accounts.",
    "url": "https://30tools.com/password-generator",
    "applicationCategory": "WebApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "30tools",
      "url": "https://30tools.com"
    },
    "featureList": [
      "Customizable password length",
      "Include/exclude character types",
      "Uppercase and lowercase letters",
      "Numbers and special characters",
      "Password strength indicator",
      "Copy to clipboard",
      "Generate multiple passwords",
      "No storage or logging"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1567"
    }
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
