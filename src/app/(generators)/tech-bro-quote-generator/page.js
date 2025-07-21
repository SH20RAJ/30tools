import TechBroQuoteGeneratorTool from '@/components/tools/generators/TechBroQuoteGeneratorTool';

export const metadata = {
  title: "Tech Bro Quote Generator - Create Satirical Startup Quotes | 30tools",
  description: "Generate hilarious satirical tech bro quotes and startup buzzwords. Perfect for LinkedIn memes, Twitter content, and startup parody. Free AI-powered quote generator.",
  keywords: "tech bro quotes, startup quotes, satirical quotes, buzzword generator, LinkedIn memes, startup parody, tech humor, entrepreneur quotes",
  canonical: "https://30tools.com/tech-bro-quote-generator",
  openGraph: {
    title: "Tech Bro Quote Generator - Satirical Startup Quotes",
    description: "Create hilarious tech bro quotes and startup buzzwords for memes and social media content.",
    url: "https://30tools.com/tech-bro-quote-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/tech-bro-quote-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Tech Bro Quote Generator"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Bro Quote Generator - Satirical Startup Quotes",
    description: "Create hilarious tech bro quotes and startup buzzwords for memes and social media content.",
    images: ["/og-images/tech-bro-quote-generator.jpg"],
    creator: "@30tools_com"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Tech Bro Quote Generator",
  "description": "Generate satirical tech bro quotes and startup buzzwords for social media content and memes.",
  "url": "https://30tools.com/tech-bro-quote-generator",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Satirical startup quotes",
    "Buzzword combinations",
    "LinkedIn-style formatting",
    "Meme template export",
    "Social media sharing"
  ]
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