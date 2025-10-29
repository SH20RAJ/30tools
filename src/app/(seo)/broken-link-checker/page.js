import BrokenLinkChecker from '@/components/tools/seo/BrokenLinkChecker';

export const metadata = {
  title: "Free Broken Link Checker - Find 404 Errors & Dead Links | 30tools",
  description: "Find broken links on any website. Check for 404 errors, redirect chains, and link health across entire websites or specific pages. Free broken link detector with detailed reports.",
  keywords: "broken link checker, dead link finder, 404 error checker, link validator, website link checker, broken url finder, link health checker, dead link detector, free broken link checker online",
  openGraph: {
    title: "Free Broken Link Checker - Find 404 Errors & Dead Links",
    description: "Find broken links on any website. Check for 404 errors, redirect chains, and link health across entire websites.",
    url: "https://30tools.com/broken-link-checker",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/broken-link-checker.jpg",
        width: 1200,
        height: 630,
        alt: "Free Broken Link Checker"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Broken Link Checker - Find 404 Errors & Dead Links",
    description: "Find broken links on any website. Perfect for SEO audits and website maintenance.",
    images: ["/og-images/broken-link-checker.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/broken-link-checker"
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
    'apple-mobile-web-app-title': 'Broken Link Checker - 30tools',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000'
  }
};

export default function BrokenLinkCheckerPage() {
  return <BrokenLinkChecker />;
}