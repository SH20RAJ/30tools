import dynamic from "next/dynamic";

export const metadata = {
  title: "Tech Bro Quote Generator - Free Online Tool | 30tools",
  description:
    "Free tech bro quote generator tool with professional results. No registration required, instant processing, secure & unlimited use.",
  keywords: [
    "tech bro quote generator",
    "tech bro quote generator online",
    "free tech bro quote generator",
    "tech bro quote generator tool",
    "online tech bro quote generator free",
    "generator",
    "online generator",
    "free generator",
    "generator tool",
    "create online",
    "instant generator",
    "professional generator",
    "unlimited generator",
    "creative tool",
    "content generator",
    "business generator",
    "developer tool",
    "generator app",
  ].join(", "),
  openGraph: {
    title: "Tech Bro Quote Generator - Free Online Tool | 30tools",
    description:
      "Free tech bro quote generator tool with professional results. No registration required, instant processing, secure & unlimited use.",
    url: "https://30tools.com/tech-bro-quote-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/tech-bro-quote-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Tech Bro Quote Generator - Free Online Tool | 30tools",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Bro Quote Generator - Free Online Tool | 30tools",
    description:
      "Free tech bro quote generator tool with professional results. No registration required, instant processing, secure & unlimited use.",
    images: ["/og-images/tech-bro-quote-generator.jpg"],
    creator: "@30tools",
  },
  alternates: {
    canonical: "https://30tools.com/tech-bro-quote-generator",
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
  category: "Generator Tools",
  other: {
    "application-name": "30tools",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Tech Bro Quote Generator - 30tools",
    "format-detection": "telephone=no",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#000000",
  },
};

const TechBroQuoteGeneratorTool = dynamic(
  () => import("@/components/tools/generators/TechBroQuoteGeneratorTool"),
);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Tech Bro Quote Generator",
  description:
    "Generate satirical tech bro quotes and startup buzzwords for social media content and memes.",
  url: "https://30tools.com/tech-bro-quote-generator",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  permissions: "browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Satirical startup quotes",
    "Buzzword combinations",
    "LinkedIn-style formatting",
    "Meme template export",
    "Social media sharing",
  ],
};

export default function TechBroQuoteGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TechBroQuoteGeneratorTool />
    </>
  );
}
