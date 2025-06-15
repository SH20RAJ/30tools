import CsvToJsonTool from '@/components/tools/code/CsvToJsonTool';

export const metadata = {
  title: "Free CSV to JSON Converter Online - Convert CSV Data to JSON | 30tools",
  description: "Convert CSV data to JSON format with customizable delimiters and output structures. Smart data type detection, flexible formatting options. Perfect for developers.",
  keywords: "csv to json converter, convert csv to json online, csv json converter, csv parser, data conversion, csv to json api, excel to json",
  openGraph: {
    title: "Free CSV to JSON Converter - Convert CSV Data to JSON Online",
    description: "Convert CSV to JSON with smart data type detection and flexible output formats.",
    url: "https://30tools.com/csv-to-json",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/csv-to-json.jpg",
        width: 1200,
        height: 630,
        alt: "Free CSV to JSON Converter"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free CSV to JSON Converter - Convert CSV Data to JSON Online",
    description: "Smart CSV to JSON conversion with multiple output formats. Perfect for data integration.",
    images: ["/og-images/csv-to-json.jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/csv-to-json"
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
    'apple-mobile-web-app-title': 'CSV to JSON - 30tools',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000'
  }
};

export default function CsvToJsonPage() {
  return <CsvToJsonTool />;
}
