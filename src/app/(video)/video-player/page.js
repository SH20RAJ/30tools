import VideoPlayerTool from '@/components/tools/video/VideoPlayerTool';

export const metadata = {
  title: "Video Player Generator - 30tools",
  description: "Create professional video players with themes and embed codes. Supports multiple libraries. Free tool, no coding needed!",
  keywords: [
    // Primary keywords
    "video player generator",
    "custom video player",
    "html5 video player generator",
    "free video player creator",
    "online video player builder",
    
    // Player library specific
    "plyr video player generator",
    "video.js player creator",
    "fluid player generator",
    "mediaelement.js player builder",
    "video player embed code generator",
    
    // Feature-based keywords
    "responsive video player generator",
    "video player with custom themes",
    "video player iframe generator",
    "react video player component generator",
    "video player for wordpress",
    "video player for website",
    
    // Long-tail keywords
    "how to create custom video player",
    "embed video player in website",
    "video player generator no coding",
    "free video player with controls",
    "custom video player for business website",
    "video player generator with poster image",
    "mobile friendly video player generator",
    "video player with fullscreen support",
    
    // Use case keywords
    "video player for e-learning",
    "video player for ecommerce",
    "video player for portfolio website",
    "video player for social media",
    "video player for news website",
    "video player for streaming",
    
    // Technical keywords
    "html5 video embed generator",
    "cdn video player generator",
    "javascript video player creator",
    "video player widget generator",
    "video player code generator",
    "video player iframe embed",
    
    // Comparison keywords
    "best video player generator",
    "youtube video player alternative",
    "vimeo player alternative",
    "video player vs youtube embed",
    "custom video player vs default html5",
    
    // Action keywords
    "create video player online",
    "build custom video player",
    "generate video embed code",
    "make video player for website",
    "design custom video player",
    "video player maker tool"
  ],
  openGraph: {
    title: "Video Player Generator - Create Custom HTML5 Video Players",
    description: "Generate professional video players with custom themes, responsive design & embed codes. Supports Plyr, Video.js, Fluid Player & MediaElement.js. Free online tool, no coding required!",
    type: "website",
    images: [
      {
        url: "/og-video-player-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Video Player Generator Tool - Create Custom HTML5 Video Players"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Video Player Generator - Custom HTML5 Video Players",
    description: "Create professional video players with themes, responsive design & embed codes. Supports multiple libraries. Free tool, no coding needed!",
    images: ["/og-video-player-generator.jpg"],
  },
  alternates: {
    canonical: "https://30tools.com/video-player"
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
  category: 'Video Tools',
};

export default function VideoPlayerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Video Player Generator",
    "description": "Free online tool to create custom HTML5 video players with multiple libraries and themes",
    "url": "https://30tools.com/video-player",
    "applicationCategory": "Multimedia",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "creator": {
      "@type": "Organization",
      "name": "30tools"
    },
    "featureList": [
      "Multiple video player libraries (Plyr, Video.js, Fluid Player, MediaElement.js)",
      "Custom themes and styling options",
      "Responsive design for all devices",
      "HTML, React, and iframe embed codes",
      "No coding required",
      "Free to use with no watermarks",
      "CDN-hosted libraries for fast loading",
      "WordPress and website integration"
    ],
    "screenshot": "https://30tools.com/screenshots/video-player-generator.jpg",
    "softwareVersion": "1.0",
    "datePublished": "2025-06-23",
    "dateModified": "2025-06-23"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VideoPlayerTool />
    </>
  );
}
