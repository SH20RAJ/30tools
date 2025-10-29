import XmlSitemapExtractor from '@/components/tools/seo/XmlSitemapExtractor';

export const metadata = {
  title: "Free XML Sitemap Extractor - Extract URLs to CSV, TXT, Excel | 30tools",
  description: "Extract all URLs from XML sitemaps and export them in various formats (CSV, TXT, XML, HTML, Excel). Analyze sitemap structure and URL data for SEO audits and competitor research.",
  keywords: "xml sitemap extractor, sitemap url extractor, sitemap parser, sitemap analyzer, xml parser tool, sitemap crawler, url list extractor, sitemap reader, extract urls from xml sitemap, sitemap url list generator",
  openGraph: {
    title: "Free XML Sitemap Extractor - Extract URLs to CSV, TXT, Excel",
    description: "Extract all URLs from XML sitemaps and export them in various formats. Perfect for SEO audits and competitor research.",
    url: "https://30tools.com/xml-sitemap-extractor",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/xml-sitemap-extractor.jpg",
        width: 1200,
        height: 630,
        alt: "Free XML Sitemap Extractor"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free XML Sitemap Extractor - Extract URLs to CSV, TXT, Excel",
    description: "Extract all URLs from XML sitemaps and export them in various formats. Perfect for SEO audits.",
    images: ["/og-images/xml-sitemap-extractor.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/xml-sitemap-extractor"
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
    'apple-mobile-web-app-title': 'XML Sitemap Extractor - 30tools',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000'
  }
};

export default function XmlSitemapExtractorPage() {
  return <XmlSitemapExtractor />;
}