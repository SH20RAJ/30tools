import ExcuseGeneratorTool from "@/components/tools/generators/ExcuseGeneratorTool";

export const metadata = {
  title: "Excuse Generator - Creative Funny Excuses for Any Situation",
  description:
    "Generate creative and funny excuses for work, school, social events, and family situations. AI-powered excuse maker with believability levels.",
  keywords:
    "excuse generator, funny excuses, creative excuses, excuse maker, work excuses, school excuses, social excuses",
  canonical: "https://30tools.com/excuse-generator",
  openGraph: {
    title: "Excuse Generator - Creative & Funny Excuses",
    description:
      "Generate creative and funny excuses for any situation! Perfect for work, school, and social events. 😅",
    url: "https://30tools.com/excuse-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/excuse-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Excuse Generator Tool - 30tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Excuse Generator - Creative & Funny Excuses",
    description:
      "Generate creative and funny excuses for any situation! Perfect for when you need a good excuse 😅",
    images: ["/og-images/excuse-generator.jpg"],
    creator: "@30tools",
  },
};

export default function ExcuseGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Excuse Generator - Creative Excuse Maker",
    description:
      "Generate creative and funny excuses for work, school, social events, and family situations. AI-powered with believability levels.",
    url: "https://30tools.com/excuse-generator",
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
      "Multiple excuse categories",
      "Believability levels",
      "AI-powered creativity",
      "Situation-specific excuses",
      "Social media sharing",
      "Humor-focused content",
      "Random excuse generator",
      "Copy to clipboard",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ExcuseGeneratorTool />
    </>
  );
}
