import AIImageGeneratorTool from '@/components/tools/generators/AIImageGeneratorTool';

export const metadata = {
  title: "AI Image Generator - Free Text to Image Tool | 30tools",
  description: "Generate stunning images from text prompts using free AI. Enter your idea, get a unique image instantly. No signup required.",
  keywords: "ai image generator, text to image, image ai, generate image, ai art, free ai image generator",
  canonical: "https://30tools.com/ai-image-generator",
  openGraph: {
    title: "AI Image Generator - Free Text to Image Tool",
    description: "Generate stunning images from text prompts using free AI. Enter your idea, get a unique image instantly.",
    url: "https://30tools.com/ai-image-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/ai-image-generator.jpg",
        width: 1200,
        height: 630,
        alt: "AI Image Generator Tool - 30tools"
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Image Generator - Free Text to Image Tool",
    description: "Generate stunning images from text prompts using free AI. Enter your idea, get a unique image instantly.",
    images: ["/og-images/ai-image-generator.jpg"],
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

export default function AIImageGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI Image Generator - Free Text to Image Tool",
    "description": "Generate stunning images from text prompts using free AI. Enter your idea, get a unique image instantly. No signup required.",
    "url": "https://30tools.com/ai-image-generator",
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
      "Text-to-image AI",
      "No signup required",
      "Fast generation",
      "Download image",
      "Shareable results"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2847"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AIImageGeneratorTool />
    </>
  );
} 