
import IndexNowClient from '@/components/tools/general/IndexNowClient';
import { Globe } from "lucide-react";

export const metadata = {
  title: "IndexNow Integration - Submit URLs Instantly | 30tools",
  description: "Submit URLs to search engines (Bing, Yandex, etc.) instantly using IndexNow. Boost your SEO with real-time indexing. Free online tool.",
  keywords: "indexnow, submit url, fast indexing, bing webmaster tools, seo tool, indexnow api",
  openGraph: {
    title: "IndexNow Integration - Submit URLs Instantly | 30tools",
    description: "Submit URLs to search engines instantly using IndexNow protocol.",
    url: "https://30tools.com/indexnow",
    siteName: "30tools",
    type: "website",
    images: [{ url: "/og-images/indexnow.jpg", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "IndexNow Integration - Submit URLs Instantly",
    description: "Submit URLs to search engines instantly using IndexNow protocol.",
    images: ["/og-images/indexnow.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/indexnow"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "IndexNow Tool",
  "description": "Submit URLs to search engines instantly using IndexNow protocol.",
  "url": "https://30tools.com/indexnow",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "permissions": "internet",
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

export default function IndexNowPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <Globe className="w-10 h-10 text-primary" />
            IndexNow Integration
          </h1>
          <p className="text-xl text-muted-foreground">
            Submit URLs to search engines instantly using IndexNow protocol
          </p>
        </div>
        <IndexNowClient />
      </div>
    </div>
  );
}
