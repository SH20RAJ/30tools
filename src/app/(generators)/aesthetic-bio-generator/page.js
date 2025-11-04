import AestheticBioGeneratorTool from '@/components/tools/generators/AestheticBioGeneratorTool';
import { 
  BreadcrumbsEnhanced,
  FAQSection, 
  ReviewSnippets,
  RelatedTools,
  ToolFeatures,
  UserComments,
  QuickActions
} from '@/components/seo';
import { GeneratorToolFeatures, GeneratorToolExamples } from '@/components/seo/GeneratorToolsHub';
import { getGeneratorToolFAQs } from '@/constants/seo/generator-faqs';

export const metadata = {
  title: "Free Aesthetic Bio Generator - Instagram, Twitter, TikTok Bios | 30tools",
  description: "Generate aesthetic bios for Instagram, Twitter & TikTok with emojis, fonts & themes. 6 aesthetic styles, AI-powered suggestions. Perfect for influencers, Gen Z & viral profiles.",
  keywords: "aesthetic bio generator, instagram bio generator, twitter bio generator, tiktok bio generator, social media bio, cute bio generator, aesthetic text generator, bio ideas generator, profile bio creator, emoji bio generator, aesthetic bio generator for instagram free, cute bio generator with emojis, aesthetic twitter bio ideas generator, tiktok bio generator aesthetic themes, social media bio creator online, instagram bio maker with fonts, aesthetic profile bio generator, viral bio generator for social media",
  openGraph: {
    title: "Free Aesthetic Bio Generator - Instagram, Twitter, TikTok Bios",
    description: "Generate aesthetic bios for Instagram, Twitter & TikTok with emojis, fonts & themes. Perfect for influencers and viral profiles.",
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
    title: "Free Aesthetic Bio Generator - Instagram, Twitter, TikTok Bios",
    description: "Generate aesthetic bios with emojis and themes for Instagram, Twitter, and TikTok. Perfect for viral profiles!",
    images: ["/og-images/aesthetic-bio-generator.jpg"],
    creator: '@30tools'
  },
  alternates: {
    canonical: "https://30tools.com/aesthetic-bio-generator"
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
  },
  category: 'Generators',
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