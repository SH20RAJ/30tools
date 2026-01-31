
import MetaTagAnalyzerTool from '@/components/tools/seo/MetaTagAnalyzerTool';

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
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Seo Tools',
  other: {
    'application-name': '30tools',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Meta Tag Analyzer - 30tools',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000'
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
import SeoAnalyzer from "@/components/tools/seo/SeoAnalyzer";

export async function generateMetadata() {
    const title = "Meta Tag Analyzer - Check SEO Titles & Descriptions";
    const description = "Analyze your website's meta tags instantly. Check title length, meta description, and robots tags for SEO optimization.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/meta-tag-analyzer",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/meta-tag-analyzer",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function MetaTagAnalyzerPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
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
