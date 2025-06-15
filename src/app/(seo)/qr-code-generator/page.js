import QRCodeGeneratorTool from '@/components/tools/utilities/QRCodeGeneratorTool';

export const metadata = {
  title: "Free QR Code Generator Online - Create Custom QR Codes | 30tools",
  description: "Generate QR codes instantly for URLs, text, WiFi, contact cards, and more. Customize colors, add logos, and download high-quality PNG/SVG QR codes for free.",
  keywords: "qr code generator, free qr code generator, qr code maker, create qr code online, custom qr code generator, qr code creator, generate qr code free, qr code generator with logo",
  canonical: "https://30tools.com/qr-code-generator",
  alternates: {
    canonical: "https://30tools.com/qr-code-generator"
  },
  openGraph: {
    title: "Free QR Code Generator - Create Custom QR Codes Online",
    description: "Generate QR codes instantly for URLs, text, WiFi, contact cards. Customize colors, add logos, download high-quality QR codes for free.",
    url: "https://30tools.com/qr-code-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/qr-code-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Free QR Code Generator Tool - 30tools"
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Free QR Code Generator - Create Custom QR Codes",
    description: "Generate QR codes instantly for URLs, text, WiFi, contact cards. Customize and download for free.",
    images: ["/og-images/qr-code-generator.jpg"],
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

export default function QRCodeGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "QR Code Generator - Free Custom QR Code Creator",
    "description": "Generate QR codes instantly for URLs, text, WiFi passwords, contact information, and more. Customize colors, add logos, and download high-quality QR codes.",
    "url": "https://30tools.com/qr-code-generator",
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
      "Generate QR codes for URLs, text, WiFi",
      "Custom colors and styling",
      "Logo embedding support",
      "High-resolution downloads",
      "Multiple file formats (PNG, SVG)",
      "Batch QR code generation",
      "No expiration or limits",
      "Mobile-friendly interface"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "3421"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <QRCodeGeneratorTool />
    </>
  );
}
