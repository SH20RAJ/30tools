import AIImageGeneratorTool from '@/components/tools/generators/AIImageGeneratorTool';

export const metadata = {
  title: "AI Image Generator - Free Text to Image Creator | 30tools",
  description: "Generate stunning AI images from text prompts instantly. Free AI art generator with advanced features, styles, and image history. Create unique images with no signup required.",
  keywords: [
    // Primary keywords
    "ai image generator",
    "text to image ai",
    "ai art generator",
    "free ai image creator",
    "artificial intelligence image",
    
    // Long-tail keywords for SEO ranking
    "free ai image generator no signup",
    "text to image generator online",
    "ai art creator from text description",
    "artificial intelligence image maker",
    "generate images from text prompts",
    "ai picture generator free online",
    "text to ai art converter",
    "free ai image creation tool",
    "artificial intelligence art generator",
    "ai image generator with styles",
    "text description to image ai",
    "create ai images from text",
    "ai image maker free unlimited",
    "artificial intelligence image creator"
  ].join(", "),
  openGraph: {
    title: "Free AI Image Generator - Create Images from Text",
    description: "Generate stunning AI images from text prompts instantly. Free AI art generator with advanced features and styles. No signup required.",
    url: "https://30tools.com/ai-image-generator",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/ai-image-generator.jpg",
        width: 1200,
        height: 630,
        alt: "AI Image Generator - Free Text to Image Tool"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Image Generator - Free Text to Image Creator",
    description: "Generate stunning AI images from text prompts instantly. Free AI art generator with advanced features and no signup required.",
    images: ["/og-images/ai-image-generator.jpg"],
    creator: '@30tools'
  },
  alternates: {
    canonical: "https://30tools.com/ai-image-generator"
  }
};

export default function AIImageGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI Image Generator - Free Text to Image Creator",
    "description": "Generate stunning AI images from text prompts instantly using advanced artificial intelligence. Free AI art generator with multiple styles, high-quality output, and no signup required.",
    "url": "https://30tools.com/ai-image-generator",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web Browser",
    "browserRequirements": "Requires JavaScript",
    "softwareVersion": "2.0",
    "datePublished": "2024-01-01",
    "dateModified": "2024-12-20",
    "author": {
      "@type": "Organization",
      "name": "30tools",
      "url": "https://30tools.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "2847",
      "bestRating": "5"
    },
    "featureList": [
      "Advanced AI text-to-image generation",
      "Multiple art styles (photorealistic, digital art, oil painting, anime)",
      "Custom image dimensions and sizes",
      "High-quality image downloads",
      "Image generation history tracking",
      "Favorite images management",
      "Seed-based reproducible results",
      "No signup or registration required",
      "Unlimited daily generations",
      "Privacy-focused local storage",
      "Real-time image preview",
      "Professional quality outputs"
    ],
    "applicationSubCategory": "Image Generator",
    "keywords": "ai image generator, text to image, artificial intelligence, digital art, image creation"
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does the AI image generator work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AI image generator uses advanced machine learning models to convert text descriptions into visual images. Simply enter a detailed text prompt describing what you want to see, select your preferred style and settings, and the AI will create a unique image based on your description."
        }
      },
      {
        "@type": "Question", 
        "name": "Is the AI image generator completely free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our AI image generator is completely free to use with no hidden costs, signup requirements, or usage limits. You can generate unlimited images and download them in high quality."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use generated images commercially?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can use the generated images for commercial purposes. However, we recommend checking that your generated content doesn't infringe on existing copyrights or trademarks."
        }
      },
      {
        "@type": "Question",
        "name": "What image formats and sizes are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generated images are available in high-quality PNG format with multiple size options including square formats (512x512, 1024x1024), landscape (1024x768), portrait (768x1024), and HD wallpaper (1920x1080) dimensions."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <AIImageGeneratorTool />
    </>
  );
} 