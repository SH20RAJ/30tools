import TitleRewriteChecker from '@/components/tools/seo/TitleRewriteChecker';

export const metadata = {
  title: "Title Rewrite Checker - See How Google Changes Your Titles",
  description: "Professional title rewrite checker for Process. Free SEO analysis and optimization tool. Improve search rankings with data-driven insights.",
  keywords: "title rewrite checker, google title rewrite, serp title checker, google title change, title tag rewrite, google title modification, serp snippet preview, title optimization tool, google title rewrite checker free",
  openGraph: {
    title: "Title Rewrite Checker - See How Google Changes Your Titles",
    description: "Check if Google rewrites your page titles in search results. Compare your original titles with what Google displays in SERPs.",
    url: "https://30tools.com/title-rewrite-checker",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/title-rewrite-checker.jpg",
        width: 1200,
        height: 630,
        alt: "Free Title Rewrite Checker"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Title Rewrite Checker - See How Google Changes Your Titles",
    description: "Check if Google rewrites your page titles in search results. Perfect for SEO optimization.",
    images: ["/og-images/title-rewrite-checker.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/title-rewrite-checker"
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
    'apple-mobile-web-app-title': 'Title Rewrite Checker - 30tools',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000'
  }
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Title Rewrite Checker",
  "description": "Professional title rewrite checker for Process. Free SEO analysis and optimization tool. Improve search rankings with data-driven insights.",
  "url": "https://30tools.com/title-rewrite-checker",
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

export default function TitleRewriteCheckerPage() {
  return <TitleRewriteChecker />;
}