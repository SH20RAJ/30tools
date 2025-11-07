import BulkKeywordRankChecker from '@/components/tools/seo/BulkKeywordRankChecker';

export const metadata = {
  title: "Bulk Keyword Rank Checker - Track 500+ Keywords at Once",
  description: "Professional bulk keyword rank checker for Process. Free SEO analysis and optimization tool. Improve search rankings with data-driven insights.",
  keywords: "bulk keyword rank checker, keyword position tracker, google rank checker, serp checker, rank tracking tool, keyword ranking tool, google ranking checker, bulk rank tracker online free, check google rankings for multiple keywords, keyword position checker free",
  openGraph: {
    title: "Free Bulk Keyword Rank Checker - Track 500+ Keywords at Once",
    description: "Check Google rankings for multiple keywords at once. Track keyword positions for any domain across different locations and devices.",
    url: "https://30tools.com/bulk-keyword-rank-checker",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/bulk-keyword-rank-checker.jpg",
        width: 1200,
        height: 630,
        alt: "Free Bulk Keyword Rank Checker"
      },
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Bulk Keyword Rank Checker - Track 500+ Keywords at Once",
    description: "Check Google rankings for multiple keywords at once. Perfect for SEO professionals and agencies.",
    images: ["/og-images/bulk-keyword-rank-checker.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/bulk-keyword-rank-checker"
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
  category: 'SEO Tools',
  other: {
    'application-name': '30tools',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Bulk Keyword Rank Checker - 30tools',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000'
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Bulk Keyword Rank Checker",
  "description": "Professional bulk keyword rank checker for Process. Free SEO analysis and optimization tool. Improve search rankings with data-driven insights.",
  "url": "https://30tools.com/bulk-keyword-rank-checker",
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

export default function BulkKeywordRankCheckerPage() {
  return <BulkKeywordRankChecker />;
}