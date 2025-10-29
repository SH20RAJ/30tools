import BulkGoogleIndexChecker from '@/components/tools/seo/BulkGoogleIndexChecker';

export const metadata = {
  title: "Bulk Google Index Checker - Check 1000+ URLs at Once",
  description: "Check if multiple URLs are indexed by Google. Verify indexation status for entire websites or URL lists in bulk. Free Google index checker with detailed reports and export options.",
  keywords: "bulk google index checker, google index checker, url index checker, google indexation tool, check if page indexed, google index status, indexed pages checker, google crawl checker, bulk url index verification tool",
  openGraph: {
    title: "Free Bulk Google Index Checker - Check 1000+ URLs at Once",
    description: "Check if multiple URLs are indexed by Google. Verify indexation status for entire websites or URL lists in bulk.",
    url: "https://30tools.com/bulk-google-index-checker",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/bulk-google-index-checker.jpg",
        width: 1200,
        height: 630,
        alt: "Free Bulk Google Index Checker"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Bulk Google Index Checker - Check 1000+ URLs at Once",
    description: "Check if multiple URLs are indexed by Google. Perfect for SEO audits and website analysis.",
    images: ["/og-images/bulk-google-index-checker.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/bulk-google-index-checker"
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
    'apple-mobile-web-app-title': 'Bulk Google Index Checker - 30tools',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000'
  }
};

export default function BulkGoogleIndexCheckerPage() {
  return <BulkGoogleIndexChecker />;
}