import QRCodeGeneratorTool from '@/components/tools/text/QRCodeGeneratorTool';

export const metadata = {
  title: "Free QR Code Generator Online - Create QR Codes Instantly | 30tools",
  description: "Generate QR codes for free. Create QR codes for URLs, text, WiFi, vCard, SMS, and more. High-quality, customizable QR codes with logo support. Download PNG, SVG, PDF formats.",
  keywords: "qr code generator, create qr code, qr generator online, free qr code maker, qr code creator, generate qr code, custom qr code, qr code with logo, wifi qr code, vcard qr code",
  canonical: "https://30tools.com/qr-code-generator",
  alternates: {
    canonical: "https://30tools.com/qr-code-generator"
  },
  openGraph: {
    title: "Free QR Code Generator - Create Custom QR Codes Online",
    description: "Generate QR codes for URLs, text, WiFi, vCard, SMS, and more. High-quality, customizable QR codes with logo support. Free and unlimited use.",
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
    title: "Free QR Code Generator - Create Custom QR Codes Online",
    description: "Generate QR codes for URLs, text, WiFi, vCard, SMS, and more. High-quality, customizable QR codes with logo support.",
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
    "name": "QR Code Generator - Free QR Code Creator",
    "description": "Generate QR codes for URLs, text, WiFi passwords, vCard contacts, SMS, and more. High-quality, customizable QR codes with logo support and multiple download formats.",
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
      "URL QR codes",
      "Text QR codes",
      "WiFi QR codes",
      "vCard contact QR codes",
      "SMS QR codes",
      "Email QR codes",
      "Custom logo embedding",
      "Multiple download formats (PNG, SVG, PDF)",
      "Color customization",
      "Size adjustment",
      "Error correction levels",
      "High-resolution output"
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
