
import SeoAnalyzer from "@/components/tools/seo/SeoAnalyzer";

export const metadata = {
  title: "Meta Tag Analyzer - Free SEO Tool | Boost Your Rankings",
  description: "Professional meta tag analyzer for Process. Free SEO analysis and optimization tool. Improve search rankings with data-driven insights.",
  keywords: [
    "meta tag analyzer",
    "meta tag analyzer online",
    "free meta tag analyzer",
    "meta tag analyzer tool",
    "online meta tag analyzer free",
    "seo tool",
    "online seo tool",
    "free seo tool",
    "seo analyzer",
    "seo checker",
    "search engine optimization",
    "seo audit",
    "professional seo tool",
    "website optimization",
    "ranking tool",
    "seo analysis",
    "seo insights",
    "search optimization"
  ].join(", "),
  openGraph: {
    title: "Meta Tag Analyzer - Free SEO Tool | Boost Your Rankings",
    description: "Professional meta tag analyzer for Process. Free SEO analysis and optimization tool. Improve search rankings with data-driven insights.",
    url: "https://30tools.com/meta-tag-analyzer",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/meta-tag-analyzer.jpg",
        width: 1200,
        height: 630,
        alt: "Meta Tag Analyzer - Free SEO Tool | Boost Your Rankings"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Tag Analyzer - Free SEO Tool | Boost Your Rankings",
    description: "Professional meta tag analyzer for Process. Free SEO analysis and optimization tool. Improve search rankings with data-driven insights.",
    images: ["/og-images/meta-tag-analyzer.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/meta-tag-analyzer"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Meta Tag Analyzer",
  "description": "Professional meta tag analyzer for Process. Free SEO analysis and optimization tool. Improve search rankings with data-driven insights.",
  "url": "https://30tools.com/meta-tag-analyzer",
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
  }
};

export default function MetaTagAnalyzerPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
             <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    Meta Tag <span className="text-primary">Analyzer</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Examine your page's meta tags to ensure they are optimized for search engines.
                </p>
            </div>
            <SeoAnalyzer type="meta-tags" title="Analyze Meta Tags" />
        </div>
    );
}
