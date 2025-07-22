'use client';

import dynamic from 'next/dynamic';

// Use dynamic import for the component
const TechBroQuoteGeneratorTool = dynamic(
  () => import('@/components/tools/generators/TechBroQuoteGeneratorTool')
);

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