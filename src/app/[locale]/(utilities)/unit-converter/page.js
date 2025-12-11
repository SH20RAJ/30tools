import UnitConverterTool from "@/components/tools/utilities/UnitConverterTool";

export const metadata = {
  title: "Free Unit Converter - Length, Weight, Temperature",
  description:
    "Convert units of measurement online for free. Length, weight, temperature, volume, area, speed conversions. Metric to Imperial and vice versa.",
  keywords:
    "unit converter, length converter, weight converter, temperature converter, metric converter, feet to meters, celsius to fahrenheit, kg to pounds",
  alternates: {
    canonical: "https://30tools.com/unit-converter",
  },
  openGraph: {
    title: "Free Unit Converter Online - All Units of Measurement",
    description:
      "Convert between metric and imperial units. Length, weight, temperature, volume, area, speed, and energy conversions.",
    url: "https://30tools.com/unit-converter",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/unit-converter.jpg",
        width: 1200,
        height: 630,
        alt: "Free Unit Converter Tool - 30tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Unit Converter Online - All Units of Measurement",
    description:
      "Convert units of measurement instantly. Metric to Imperial conversions and more.",
    images: ["/og-images/unit-converter.jpg"],
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

export default function UnitConverterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Unit Converter - Free Online Unit Conversion Tool",
    description:
      "Professional unit converter supporting length, weight, temperature, volume, area, speed, and energy conversions. Essential for students, engineers, and professionals.",
    url: "https://30tools.com/unit-converter",
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
      "20+ unit categories",
      "Instant conversion",
      "High precision results",
      "Metric and Imperial systems",
      "Reverse conversion",
      "Copy results",
      "Mobile optimized",
      "Favorites system",
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
      <UnitConverterTool />
    </>
  );
}
