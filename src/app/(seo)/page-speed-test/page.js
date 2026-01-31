
import SeoAnalyzer from "@/components/tools/seo/SeoAnalyzer";

export const metadata = {
  title: "Page Speed Test - Free SEO Tool | Boost Your Rankings",
  description: "Professional page speed test for Process. Free SEO analysis and optimization tool. Improve search rankings with data-driven insights.",
  keywords: [
    "page speed test",
    "page speed test online",
    "free page speed test",
    "page speed test tool",
    "online page speed test free",
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
    title: "Page Speed Test - Free SEO Tool | Boost Your Rankings",
    description: "Professional page speed test for Process. Free SEO analysis and optimization tool. Improve search rankings with data-driven insights.",
    url: "https://30tools.com/page-speed-test",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/page-speed-test.jpg",
        width: 1200,
        height: 630,
        alt: "Page Speed Test - Free SEO Tool | Boost Your Rankings"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Page Speed Test - Free SEO Tool | Boost Your Rankings",
    description: "Professional page speed test for Process. Free SEO analysis and optimization tool. Improve search rankings with data-driven insights.",
    images: ["/og-images/page-speed-test.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/page-speed-test"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Page Speed Test",
  "description": "Professional page speed test for Process. Free SEO analysis and optimization tool. Improve search rankings with data-driven insights.",
  "url": "https://30tools.com/page-speed-test",
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

export default function PageSpeedTestPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    Page Speed <span className="text-primary">Test</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Analyze your website's loading speed and performance metrics.
                </p>
            </div>
            <SeoAnalyzer type="page-speed" title="Test Speed" />
        </div>
    );
}
