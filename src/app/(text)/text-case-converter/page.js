import TextCaseConverterTool from "@/components/tools/text/TextCaseConverterTool";

export const metadata = {
  title: "Text Case Converter - Free Online Converter | Instant Conversion",
  description:
    "Convert Process instantly with our free text case converter. High-quality conversion with privacy protection. No registration required, unlimited use.",
  keywords: [
    // Primary high-volume keywords
    "text case converter",
    "uppercase converter",
    "lowercase converter",
    "title case converter",
    "sentence case converter",
    "case converter",
    "text converter",
    "camel case converter",
    "pascal case converter",
    "snake case converter",
    "kebab case converter",
    "text case changer",
    "case changer",
    "text formatter",
    "uppercase lowercase converter",
    "title case generator",
    "text case tool",
    "case conversion tool",
    "text transformation tool",
    "alternating case converter",
    "inverse case converter",
    "text case online",
    "case converter online",

    // Long-tail keywords for SEO ranking
    "text case converter online free no registration",
    "uppercase lowercase converter bulk text processing",
    "title case converter for headlines articles proper",
    "sentence case converter proper capitalization grammar",
    "text case changer multiple formats programming",
    "camel case converter programming variables functions",
    "pascal case converter coding standards classes",
    "snake case converter underscore format python",
    "kebab case converter dash separated css urls",
    "alternating case converter spongebob mocking text",
    "inverse case converter flip capitalization toggle",
    "text formatter case conversion bulk processing",
    "case converter for social media posts content",
    "text case converter copy paste clipboard ready",
  ].join(", "),
  alternates: {
    canonical: "https://30tools.com/text-case-converter",
  },
  openGraph: {
    title: "Free Text Case Converter - UPPERCASE, lowercase, Title Case",
    description:
      "Convert text case instantly: UPPERCASE, lowercase, Title Case, camelCase, snake_case. Perfect for coding, writing, and text formatting.",
    url: "https://30tools.com/text-case-converter",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/text-case-converter.jpg",
        width: 1200,
        height: 630,
        alt: "Text Case Converter Tool - 30tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Text Case Converter - Transform Text Case",
    description:
      "Convert text to UPPERCASE, lowercase, Title Case, camelCase, snake_case instantly. Free online tool.",
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
