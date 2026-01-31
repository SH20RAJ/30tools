
import PageSpeedTestTool from '@/components/tools/seo/PageSpeedTestTool';

// Static metadata removed in favor of generateMetadata

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
