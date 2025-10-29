import AestheticBioGeneratorTool from '@/components/tools/generators/AestheticBioGeneratorTool';

export const metadata = {
  title: "Aesthetic Bio Generator - Create Instagram Twitter Bios",
  description: "Generate aesthetic bios for Instagram, Twitter, and TikTok with emojis, fonts, and themes. Perfect for Gen Z, influencers, and social media profiles.",
  keywords: "aesthetic bio generator, instagram bio, twitter bio, tiktok bio, social media bio, aesthetic text, bio ideas, profile bio generator",
  canonical: "https://30tools.com/aesthetic-bio-generator",
  openGraph: {
    title: "Aesthetic Bio Generator - Create Viral Social Media Bios",
    description: "Generate aesthetic bios with emojis, fonts, and themes for Instagram, Twitter, and TikTok. Perfect for influencers and Gen Z users.",
    url: "https://30tools.com/aesthetic-bio-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/aesthetic-bio-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Aesthetic Bio Generator Tool - 30tools"
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Aesthetic Bio Generator - Create Viral Social Media Bios",
    description: "Generate aesthetic bios with emojis and themes for Instagram, Twitter, and TikTok.",
    images: ["/og-images/aesthetic-bio-generator.jpg"],
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

export default function AestheticBioGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Aesthetic Bio Generator - Social Media Bio Creator",
    "description": "Generate aesthetic bios for Instagram, Twitter, and TikTok with emojis, fonts, and themes. Perfect for creating viral social media profiles.",
    "url": "https://30tools.com/aesthetic-bio-generator",
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
      "Multiple aesthetic themes",
      "Emoji integration",
      "Font styling options",
      "Platform-specific optimization",
      "Copy to clipboard",
      "AI-powered suggestions",
      "Trending bio formats",
      "Mobile-friendly interface"
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
      <AestheticBioGeneratorTool />
    </>
  );
}