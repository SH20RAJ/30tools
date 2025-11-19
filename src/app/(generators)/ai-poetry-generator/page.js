import AIPoetryGeneratorTool from "@/components/tools/generators/AIPoetryGeneratorTool";

export const metadata = {
  title: "AI Poetry Generator - Free Poem Maker | 30tools",
  description:
    "Free ai poetry generator tool with professional results. No registration required, instant processing, secure & unlimited use.",
  keywords:
    "ai poetry generator, poem generator, ai poem, generate poem, poetry ai, free ai poetry generator",
  canonical: "https://30tools.com/ai-poetry-generator",
  openGraph: {
    title: "AI Poetry Generator - Free Poem Maker",
    description:
      "Create original poems on any topic with AI. Enter a theme or mood and get a unique poem instantly.",
    url: "https://30tools.com/ai-poetry-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/ai-poetry-generator.jpg",
        width: 1200,
        height: 630,
        alt: "AI Poetry Generator Tool - 30tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Poetry Generator - Free Poem Maker",
    description:
      "Create original poems on any topic with AI. Enter a theme or mood and get a unique poem instantly.",
    images: ["/og-images/ai-poetry-generator.jpg"],
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

export default function AIPoetryGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AI Poetry Generator - Free Poem Maker",
    description:
      "Create original poems on any topic with AI. Enter a theme or mood and get a unique poem instantly. No signup required.",
    url: "https://30tools.com/ai-poetry-generator",
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
      "AI poem creation",
      "Custom themes",
      "Instant results",
      "Copy & share",
      "Minimal UI",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "2847",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AIPoetryGeneratorTool />
    </>
  );
}
