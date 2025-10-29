import URLShortenerTool from '@/components/tools/utilities/URLShortenerTool';

export const metadata = {
  title: "Free URL Shortener - Create Short Links with Analytics",
  description: "Free URL shortener with custom aliases, QR codes, and click analytics. Create short, trackable links instantly. Perfect for social media, marketing campaigns, and link management.",
  keywords: "url shortener, short link generator, custom url shortener, link shortener free, shorten url online, tiny url, short links with analytics, qr code generator",
  openGraph: {
    title: "Free URL Shortener - Create Short Links with Analytics",
    description: "Free URL shortener with custom aliases, QR codes, and click analytics. Create short, trackable links instantly.",
    url: "https://30tools.com/url-shortener",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/url-shortener.jpg",
        width: 1200,
        height: 630,
        alt: "Free URL Shortener Online"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free URL Shortener - Create Short Links with Analytics",
    description: "Free URL shortener with custom aliases, QR codes, and click analytics.",
    images: ["/og-images/url-shortener.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/url-shortener"
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
  category: 'Utility Tools',
  other: {
    'application-name': '30tools',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'URL Shortener - 30tools',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000'
  }
};

export default function URLShortenerPage() {
  return <URLShortenerTool />;
}
