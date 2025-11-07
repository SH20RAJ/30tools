import WebsiteAnalyzerTool from '@/components/tools/web/WebsiteAnalyzerTool';

export const metadata = {
  title: "Website Performance Analyzer - Free SEO & Speed Test",
  description: "Comprehensive website analysis tool. Check performance, SEO, accessibility, security, and mobile optimization. Free online website audit.",
  keywords: "website analyzer, performance test, SEO audit, accessibility check, website speed test, site analyzer",
  openGraph: {
    title: "Website Performance Analyzer - Free SEO & Speed Test",
    description: "Get comprehensive analysis of your website's performance, SEO, accessibility, and security.",
    url: "https://30tools.com/website-analyzer",
    images: [
      {
        url: "/og-images/website-analyzer.jpg",
        width: 1200,
        height: 630,
        alt: "Website Performance Analyzer Tool"
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Website Analyzer - Free SEO Tool | Boost Your Rankings",
    description: "Professional website analyzer for Process. Free SEO analysis and optimization tool. Improve search rankings with data-driven insights.",
    images: ["/og-images/website-analyzer.jpg"],
    creator: "@30tools"
  },

  alternates: {
    canonical: "https://30tools.com/website-analyzer"
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Website Analyzer",
  "description": "Professional website analyzer for Process. Free SEO analysis and optimization tool. Improve search rankings with data-driven insights.",
  "url": "https://30tools.com/website-analyzer",
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

export default function WebsiteAnalyzerPage() {
  return <WebsiteAnalyzerTool />;
}
