import XMLFormatter from "@/components/tools/code/XMLFormatterTool";

export const metadata = {
  title: 'XML Formatter - Format and Validate XML | 30tools',
  description: "Professional xml formatter with instant results. Free online tool for students, professionals, and businesses worldwide.",
  keywords: 'xml formatter, xml validator, format xml, xml beautifier, xml editor, xml syntax',
  openGraph: {
    title: 'XML Formatter - Format and Validate XML | 30tools',
    description: 'Format and validate XML documents online.',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "Xml Formatter - Free Online Tool | Professional Results",
    description: "Professional xml formatter tool. Free online processing with high-quality results. No registration required, instant results.",
    images: ["/og-images/xml-formatter.jpg"],
    creator: "@30tools"
  }
,
  alternates: {
    canonical: "https://30tools.com/xml-formatter"
  }
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Xml Formatter",
  "description": "Professional xml formatter tool. Free online processing with high-quality results. No registration required, instant results.",
  "url": "https://30tools.com/xml-formatter",
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

export default function XMLFormatterPage() {
  return <XMLFormatter />;
}
