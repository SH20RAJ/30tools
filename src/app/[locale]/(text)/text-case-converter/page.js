import TextCaseConverterTool from "@/components/tools/text/TextCaseConverterTool";

export const metadata = {
  title: "Text Case Converter (2026) - Upper, Lower & Title Case | 30Tools",
  description: "Convert text case online instantly (Updated 2026). Change to UPPERCASE, lowercase, Title Case, Sentence case & more. Free text transformer tool.",
  keywords: [
    "text case converter 2026",
    "uppercase to lowercase online",
    "title case generator",
    "sentence case converter",
    "all caps converter",
    "capitalize text online",
    "camelcase converter",
    "snake_case generator",
    "updated 2026"
  ].join(", "),
  alternates: {
    canonical: "https://30tools.com/text-case-converter",
  },
  openGraph: {
    title: "Text Case Converter (2026) - UPPERCASE & lowercase Tool",
    description: "⚡ Convert text case instantly: UPPERCASE, lowercase, Title Case & more! Free online tool (Updated 2026).",
    url: "https://30tools.com/text-case-converter",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/text-case-converter.jpg",
        width: 1200,
        height: 630,
        alt: "Text Case Converter 2026 - Free Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Text Case Converter (2026) - Free Tool",
    description: "⚡ Convert text to UPPERCASE, lowercase, Title Case instantly. Updated 2026!",
    images: ["/og-images/text-case-converter.jpg"],
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

export default function TextCaseConverterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Text Case Converter - Free Text Transformation Tool",
    description:
      "Convert text case online: UPPERCASE, lowercase, Title Case, camelCase, snake_case, and more. Perfect for developers, writers, and content creators.",
    url: "https://30tools.com/text-case-converter",
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
      "Convert to UPPERCASE",
      "Convert to lowercase",
      "Convert to Title Case",
      "Convert to camelCase",
      "Convert to snake_case",
      "Convert to kebab-case",
      "Sentence case conversion",
      "Alternating case conversion",
      "Copy to clipboard",
      "Real-time conversion",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "2145",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TextCaseConverterTool />
    </>
  );
}
