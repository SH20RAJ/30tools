import TimestampConverter from "@/components/tools/utilities/TimestampConverterTool";

export const metadata = {
  title: 'Timestamp Converter - Unix Time Converter | 30tools',
  description: "Convert Process instantly with our free timestamp converter. High-quality conversion with privacy protection. No registration required, unlimited use.",
  keywords: 'timestamp converter, unix timestamp, epoch time, date converter, unix time, timestamp to date',
  openGraph: {
    title: 'Timestamp Converter - Unix Time Converter | 30tools',
    description: 'Convert between Unix timestamps and readable dates.',
    type: 'website',
  },
,
  twitter: {
    card: "summary_large_image",
    title: "Timestamp Converter - Free Online Converter | Instant Conversion",
    description: "Convert Process instantly with our free timestamp converter. High-quality conversion with privacy protection. No registration required, unlimited use.",
    images: ["/og-images/timestamp-converter.jpg"],
    creator: "@30tools"
  }
,
  alternates: {
    canonical: "https://30tools.com/timestamp-converter"
  }
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Timestamp Converter",
  "description": "Convert Process instantly with our free timestamp converter. High-quality conversion with privacy protection. No registration required, unlimited use.",
  "url": "https://30tools.com/timestamp-converter",
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

export default function TimestampConverterPage() {
  return <TimestampConverter />;
}
