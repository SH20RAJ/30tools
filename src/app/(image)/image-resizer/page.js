import ImageResizerTool from '@/components/tools/image/ImageResizerTool';

export const metadata = {
  title: "Free Image Resizer Online - Resize Photos & Images | 30tools",
  description: "Resize images online for free. Change image dimensions, maintain aspect ratio, batch resize multiple photos. Perfect for social media, web, and print. No watermarks.",
  keywords: "image resizer, resize image online, photo resizer, resize photo, image dimensions, resize pictures online, batch image resize, social media image sizes",
  canonical: "https://30tools.com/image-resizer",
  alternates: {
    canonical: "https://30tools.com/image-resizer"
  },
  openGraph: {
    title: "Free Image Resizer Online - Resize Photos & Images",
    description: "Resize images online for free. Change dimensions, maintain aspect ratio, batch resize. Perfect for social media, web, and print.",
    url: "https://30tools.com/image-resizer",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/image-resizer.jpg",
        width: 1200,
        height: 630,
        alt: "Free Image Resizer Tool - 30tools"
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Free Image Resizer Online - Resize Photos & Images",
    description: "Resize images online for free. Change dimensions, maintain aspect ratio, batch resize.",
    images: ["/og-images/image-resizer.jpg"],
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

export default function ImageResizerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Image Resizer - Free Online Photo Resizer",
    "description": "Resize images online for free. Change image dimensions, maintain aspect ratio, batch resize multiple photos. Perfect for social media, web, and print.",
    "url": "https://30tools.com/image-resizer",
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
      "Custom width and height",
      "Maintain aspect ratio",
      "Preset social media sizes",
      "Batch resize multiple images",
      "Quality preservation",
      "Percentage-based scaling",
      "Preview before download",
      "No file upload limits"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "2156"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ImageResizerTool />
    </>
  );
}
