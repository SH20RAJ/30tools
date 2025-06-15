import JsonFormatterTool from '@/components/tools/code/JsonFormatterTool';

export const metadata = {
  title: "Free JSON Formatter & Validator Online - Format, Validate JSON | 30tools",
  description: "Format, validate, and analyze JSON data with detailed statistics. Real-time validation, minification, and comprehensive error reporting. Perfect for developers.",
  keywords: "json formatter, json validator, format json online, validate json, json minifier, json beautifier, json parser, json analyzer",
  openGraph: {
    title: "Free JSON Formatter & Validator - Format and Validate JSON Online",
    description: "Format, validate, and analyze JSON data with real-time validation and detailed statistics.",
    url: "https://30tools.com/json-formatter",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/json-formatter.jpg",
        width: 1200,
        height: 630,
        alt: "Free JSON Formatter & Validator"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free JSON Formatter & Validator - Format and Validate JSON Online",
    description: "Real-time JSON validation with detailed analytics. Perfect for API development.",
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
  category: 'Code Tools',
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

export default function JsonFormatterPage() {
  return <JsonFormatterTool />;
}
