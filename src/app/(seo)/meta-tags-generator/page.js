import MetaTagsGeneratorTool from '@/components/tools/seo/MetaTagsGeneratorTool';

export const metadata = {
  title: "Free Meta Tags Generator - Create SEO Meta Tags Online | 30tools",
  description: "Generate SEO-optimized meta tags for your website. Create title tags, meta descriptions, Open Graph tags, and Twitter Cards. Free meta tag generator with character limits and previews.",
  keywords: "meta tags generator, seo meta tags, meta tag creator, html meta tags generator, open graph generator, twitter card generator, meta description generator, title tag generator, seo tags generator",
  canonical: "https://30tools.com/meta-tags-generator",
  alternates: {
    canonical: "https://30tools.com/meta-tags-generator"
  },
  openGraph: {
    title: "Free Meta Tags Generator - Create SEO Meta Tags Online",
    description: "Generate SEO-optimized meta tags for your website. Create title tags, meta descriptions, Open Graph tags, and Twitter Cards with real-time previews.",
    url: "https://30tools.com/meta-tags-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/meta-tags-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Free Meta Tags Generator Tool - 30tools"
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Free Meta Tags Generator - Create SEO Meta Tags Online",
    description: "Generate SEO-optimized meta tags with real-time previews. Perfect for improving search rankings and social media sharing.",
    images: ["/og-images/meta-tags-generator.jpg"],
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

export default function MetaTagsGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Meta Tags Generator - Free SEO Meta Tag Creator",
    "description": "Generate SEO-optimized meta tags for websites. Create title tags, meta descriptions, Open Graph tags, and Twitter Cards with real-time character counting and preview.",
    "url": "https://30tools.com/meta-tags-generator",
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
      "SEO title tag generation",
      "Meta description optimization", 
      "Open Graph tags for social media",
      "Twitter Card meta tags",
      "Real-time character counting",
      "Search result preview",
      "Social media preview",
      "Copy and download HTML code"
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
      <MetaTagsGeneratorTool />
    </>
  );
}
