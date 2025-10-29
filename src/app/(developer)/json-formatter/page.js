import JSONFormatterTool from '@/components/tools/developer/JSONFormatterTool';

export const metadata = {
  title: "JSON Formatter & Validator - Format, Minify, Validate",
  description: "Free JSON formatter and validator online. Format, validate, minify JSON data with error detection and analytics. Perfect for developers, API testing, and data processing.",
  keywords: "json formatter, json validator, json minifier, json beautifier, format json online, validate json, json parser, json editor, json analyzer",
  openGraph: {
    title: "JSON Formatter & Validator - Format, Minify, Validate",
    description: "Free JSON formatter and validator online. Format, validate, minify JSON data with error detection and analytics.",
    url: "https://30tools.com/json-formatter",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/json-formatter.jpg",
        width: 1200,
        height: 630,
        alt: "Free JSON Formatter & Validator Online"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "JSON Formatter & Validator - Format, Minify, Validate",
    description: "Free JSON formatter and validator online. Perfect for developers and API testing.",
    images: ["/og-images/json-formatter.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/json-formatter"
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
  category: 'Developer Tools',
  other: {
    'application-name': '30tools',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'JSON Formatter - 30tools',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000'
  }
};

export default function JSONFormatterPage() {
  return <JSONFormatterTool />;
}
