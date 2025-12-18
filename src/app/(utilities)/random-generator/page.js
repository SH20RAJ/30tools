import RandomGenerator from "@/components/tools/utilities/RandomGeneratorTool";

export const metadata = {
  title: "Random Generator - Advanced Random Data Creator | 30tools",
  description:
    "Generate Process instantly with our free random generator. Professional quality results, unlimited generations. Perfect for creators, developers & businesses.",
  keywords: [
    // Primary keywords
    "random generator",
    "random number generator",
    "random string generator",
    "random password generator",

    // Long-tail keywords
    "random number generator with range",
    "secure random password generator",
    "random uuid generator online",
    "random color generator hex",
    "random data generator for testing",
    "bulk random number generator",
    "cryptographically secure random",
    "random string generator custom length",
    "random password generator secure",
    "random email generator fake",

    // Developer-focused
    "random data generator for developers",
    "random api key generator",
    "random hash generator online",
    "random json data generator",
    "random csv data generator",
    "test data generator random",
    "mock data generator random",
    "placeholder data generator",

    // Use cases
    "random number picker",
    "lottery number generator",
    "random name generator",
    "random word generator",
    "random date generator",
    "random time generator",
    "random ip address generator",
    "random mac address generator",

    // Question-based
    "how to generate random numbers",
    "best random generator online",
    "secure random generator tool",
    "random data for testing",
    "generate random passwords",

    // Modifiers
    "truly random generator",
    "cryptographically secure random",
    "unlimited random generation",
    "bulk random data generator",
    "professional random generator",
  ].join(", "),
  authors: [{ name: "30tools Team", url: "https://30tools.com" }],
  creator: "30tools",
  publisher: "30tools",
  category: "Utility Tools",
  classification: "Random Data Tools",
  applicationName: "Random Generator",
  metadataBase: new URL("https://30tools.com"),
  alternates: {
    canonical: "/random-generator",
  },
  openGraph: {
    title: "Random Generator - Advanced Random Data Creator | 30tools",
    description:
      "Generate random numbers, passwords, strings, UUIDs, colors, and more. Advanced random data generator with customizable options for developers and testers.",
    url: "https://30tools.com/random-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/random-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Random Generator - Advanced Random Data Creator",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@30tools",
    creator: "@30tools",
    title: "Random Generator - Advanced Random Data Creator",
    description:
      "Generate random numbers, passwords, strings, UUIDs, colors & more! Advanced random data generator for developers & testers. 🎲",
    images: ["/og-images/random-generator.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "article:author": "30tools Team",
    "article:section": "Utility Tools",
    "article:tag":
      "random generator, data generation, testing tools, developer utilities",
  },
};

export default function RandomGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Random Generator - Advanced Random Data Creator",
    description:
      "Generate random numbers, passwords, strings, UUIDs, colors, and more. Advanced random data generator with customizable options for developers, testers, and general users with cryptographically secure algorithms.",
    url: "https://30tools.com/random-generator",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web Browser",
    browserRequirements: "Requires JavaScript",
    softwareVersion: "2.0",
    datePublished: "2024-01-01",
    dateModified: "2024-12-20",
    author: {
      "@type": "Organization",
      name: "30tools",
      url: "https://30tools.com",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      ratingCount: "1820",
      bestRating: "5",
    },
    featureList: [
      "Random number generation with custom ranges",
      "Secure password generator with customizable rules",
      "Random string generator with character sets",
      "UUID/GUID generator (v1, v4)",
      "Random color generator (Hex, RGB, HSL)",
      "Random date and time generator",
      "Bulk data generation capabilities",
      "Cryptographically secure algorithms",
      "Export results in multiple formats",
      "Copy to clipboard functionality",
      "Real-time generation preview",
      "Mobile-responsive interface",
    ],
    applicationSubCategory: "Random Data Generator",
    keywords:
      "random generator, data generation, testing tools, developer utilities, secure random",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How secure are the random numbers generated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our random generator uses cryptographically secure algorithms provided by the Web Crypto API when available, ensuring high-quality randomness suitable for security-sensitive applications like password generation.",
        },
      },
      {
        "@type": "Question",
        name: "Can I generate bulk random data?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! You can generate multiple random values at once and export them in various formats including CSV, JSON, and plain text. Perfect for testing and development purposes.",
        },
      },
      {
        "@type": "Question",
        name: "What types of random data can I generate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can generate random numbers, secure passwords, strings, UUIDs, colors (Hex/RGB/HSL), dates, times, email addresses, IP addresses, and more. Each type has customizable parameters.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <RandomGenerator />
    </>
  );
}
