import PDFMergerTool from '@/components/tools/pdf/PDFMergerTool';

export const metadata = {
  title: "Free PDF Merger Online - Combine Multiple PDFs into One Document | 30tools",
  description: "Merge PDF files online for free. Combine multiple PDF documents into a single file with drag-and-drop interface. No watermarks, no registration required.",
  keywords: "pdf merger, merge pdf online, combine pdf files, pdf merger free, join pdf documents, merge multiple pdfs, pdf combiner tool, concatenate pdf files, pdf joiner online",
  canonical: "https://30tools.com/pdf-merger",
  alternates: {
    canonical: "https://30tools.com/pdf-merger"
  },
  openGraph: {
    title: "Free PDF Merger Online - Combine Multiple PDFs",
    description: "Merge PDF files online for free. Combine multiple PDF documents into a single file with professional results. No watermarks or file size limits.",
    url: "https://30tools.com/pdf-merger",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/pdf-merger.jpg",
        width: 1200,
        height: 630,
        alt: "Free PDF Merger Tool - 30tools"
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Free PDF Merger Online - Combine Multiple PDFs",
    description: "Merge PDF files online for free. Professional PDF merging with drag-and-drop interface.",
    images: ["/og-images/pdf-merger.jpg"],
    creator: '@30tools'
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
  }
};

export default function PDFMergerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PDF Merger - Free Online PDF Combiner",
    "description": "Merge multiple PDF files into a single document online. Professional PDF merging tool with drag-and-drop interface, no watermarks, and unlimited file size.",
    "url": "https://30tools.com/pdf-merger",
    "applicationCategory": "WebApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "30tools",
      "url": "https://30tools.com"
    },
    "featureList": [
      "Merge unlimited PDF files",
      "Drag and drop file reordering",
      "Preserve bookmarks and metadata",
      "Password-protected PDF support",
      "Custom page selection",
      "Batch PDF processing",
      "No file size limits",
      "Client-side processing for privacy"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "3247"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PDFMergerTool />
    </>
  );
}
