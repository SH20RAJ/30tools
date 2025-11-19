import ImageConverterTool from "@/components/tools/image/ImageConverterTool";

export const metadata = {
  title: "Image Converter - Convert JPG, PNG, WEBP, GIF, HEIC",
  description:
    "Convert Process instantly with our free image converter. High-quality conversion with privacy protection. No registration required, unlimited use.",
  keywords:
    "image converter, convert image format, jpg to png, png to jpg, webp converter, heic to jpeg, gif converter, batch image conversion, image format changer",
  alternates: {
    canonical: "https://30tools.com/image-converter",
  },
  openGraph: {
    title: "Free Image Converter Online - Convert Any Image Format",
    description:
      "Convert between JPG, PNG, WEBP, GIF, HEIC and more. Batch processing, quality control, and instant download. No registration required.",
    url: "https://30tools.com/image-converter",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/image-converter.jpg",
        width: 1200,
        height: 630,
        alt: "Free Image Converter Tool - 30tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Image Converter Online - Convert Any Image Format",
    description:
      "Convert between JPG, PNG, WEBP, GIF, HEIC and more. Batch processing with quality control.",
    images: ["/og-images/image-converter.jpg"],
    creator: "@30tools",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function ImageConverterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Image Converter - Free Online Image Format Converter",
    description:
      "Convert images between different formats including JPG, PNG, WEBP, GIF, HEIC. Batch processing with quality and resolution control.",
    url: "https://30tools.com/image-converter",
    applicationCategory: "WebApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    creator: {
      "@type": "Organization",
      name: "30tools",
      url: "https://30tools.com",
    },
    featureList: [
      "Convert between 8+ image formats",
      "Batch image conversion",
      "Quality and resolution control",
      "HEIC to JPEG conversion",
      "WebP format support",
      "Maintain EXIF data option",
      "Custom compression settings",
      "Instant download",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "2847",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ImageConverterTool />
    </>
  );
}
