import StartupNameGeneratorTool from '@/components/tools/generators/StartupNameGeneratorTool';

export const metadata = {
  title: "Startup Name Generator - AI-Powered Business Name Ideas | 30tools",
  description: "Generate trendy startup names with AI. Perfect for indie hackers, entrepreneurs, and YC applicants. Get creative business names with domain suggestions.",
  keywords: "startup name generator, business name generator, company name ideas, startup names, business names, domain name generator, indie hacker tools",
  canonical: "https://30tools.com/startup-name-generator",
  openGraph: {
    title: "Startup Name Generator - AI Business Name Ideas",
    description: "Generate trendy startup names loved by indie hackers and VCs. AI-powered suggestions with domain availability.",
    url: "https://30tools.com/startup-name-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/startup-name-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Startup Name Generator Tool - 30tools"
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Startup Name Generator - AI Business Name Ideas",
    description: "Generate trendy startup names loved by indie hackers and VCs. Perfect for your next unicorn! 🦄",
    images: ["/og-images/startup-name-generator.jpg"],
    creator: '@30tools'
  }
};

export default function StartupNameGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Startup Name Generator - AI Business Name Creator",
    "description": "Generate trendy startup names with AI. Perfect for entrepreneurs, indie hackers, and business founders looking for the perfect company name.",
    "url": "https://30tools.com/startup-name-generator",
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
      "AI-powered name generation",
      "Industry-specific suggestions",
      "Domain availability hints",
      "Trending suffix patterns",
      "Save favorite names",
      "Export name lists",
      "Viral-ready names",
      "Indie hacker approved"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StartupNameGeneratorTool />
    </>
  );
}