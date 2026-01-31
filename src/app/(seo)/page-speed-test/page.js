
import PageSpeedTestTool from '@/components/tools/seo/PageSpeedTestTool';

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
    'apple-mobile-web-app-title': 'Page Speed Test - 30tools',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000'
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
import SeoAnalyzer from "@/components/tools/seo/SeoAnalyzer";

export async function generateMetadata() {
    const title = "Website Speed Test - Check Page Load Time";
    const description = "Test your website's speed and performance. Get insights on Core Web Vitals like LCP, FID, and CLS.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/page-speed-test",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/page-speed-test",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function PageSpeedTestPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
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
