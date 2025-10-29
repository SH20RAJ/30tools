import LoremIpsumGeneratorTool from '@/components/tools/text/LoremIpsumGeneratorTool';

export const metadata = {
  title: "Lorem Ipsum Generator - Free Placeholder Text Generator",
  description: "Generate Lorem Ipsum placeholder text instantly. Create dummy text for web design, graphic design, and typesetting. Customizable paragraphs, words, and sentences.",
  keywords: "lorem ipsum generator, placeholder text generator, dummy text generator, lorem ipsum text, fake text generator, lipsum generator, filler text generator, design placeholder text",
  alternates: {
    canonical: "https://30tools.com/lorem-ipsum-generator"
  },
  openGraph: {
    title: "Lorem Ipsum Generator - Free Placeholder Text",
    description: "Generate Lorem Ipsum placeholder text instantly. Perfect for web design, graphic design, and typesetting projects.",
    url: "https://30tools.com/lorem-ipsum-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/lorem-ipsum-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Lorem Ipsum Generator Tool - 30tools"
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lorem Ipsum Generator - Free Placeholder Text",
    description: "Generate Lorem Ipsum placeholder text instantly. Perfect for design and development projects.",
    images: ["/og-images/lorem-ipsum-generator.jpg"],
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

export default function LoremIpsumGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Lorem Ipsum Generator - Placeholder Text Creator",
    "description": "Generate Lorem Ipsum placeholder text instantly. Customizable paragraphs, words, and sentences for web design and typesetting.",
    "url": "https://30tools.com/lorem-ipsum-generator",
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
      "Generate paragraphs, sentences, or words",
      "Customizable text length",
      "Classic Lorem Ipsum text",
      "Copy to clipboard",
      "HTML paragraph formatting",
      "Different text variations",
      "Real-time generation",
      "Mobile-friendly interface"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1203"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LoremIpsumGeneratorTool />
    </>
  );
}
