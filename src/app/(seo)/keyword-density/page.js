import KeywordDensity from "@/components/tools/seo/KeywordDensityTool";

export const metadata = {
  title: 'Keyword Density Checker - Analyze Text Keywords | 30tools',
  description: "Professional keyword density for Process. Free SEO analysis and optimization tool. Improve search rankings with data-driven insights.",
  keywords: 'keyword density, keyword frequency, seo analysis, keyword checker, content analysis, text analysis',
  openGraph: {
    title: 'Keyword Density Checker - Analyze Text Keywords | 30tools',
    description: 'Check keyword density and frequency in text.',
    type: 'website',
  },

  twitter: {
    card: "summary_large_image",
    title: "Keyword Density - Free SEO Tool | Boost Your Rankings",
    description: "Professional keyword density for Process. Free SEO analysis and optimization tool. Improve search rankings with data-driven insights.",
    images: ["/og-images/keyword-density.jpg"],
    creator: "@30tools"
  },

  alternates: {
    canonical: "https://30tools.com/keyword-density"
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Keyword Density",
  "description": "Professional keyword density for Process. Free SEO analysis and optimization tool. Improve search rankings with data-driven insights.",
  "url": "https://30tools.com/keyword-density",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com"
  },
};

export default function KeywordDensityPage() {
  return <KeywordDensity />;
}
