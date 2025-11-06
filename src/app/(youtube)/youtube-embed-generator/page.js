import YouTubeEmbedGenerator from '@/components/tools/youtube/YouTubeEmbedGenerator';

export const metadata = {
  title: "Youtube Embed Generator - Free Online Tool | Professional Results",
  description: "Free youtube embed generator tool with professional results. No registration required, instant processing, secure & unlimited use.",
  keywords: "youtube embed generator, youtube embed code, custom youtube player, youtube iframe generator, responsive youtube embed, youtube player customization, embed youtube video, youtube embed options, website video embed, blog video embed",
  openGraph: {
    title: "YouTube Embed Code Generator - Custom Player Options",
    description: "Generate customized YouTube embed codes with advanced player options and responsive design.",
    url: "https://30tools.com/youtube-embed-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/youtube-embed-generator.jpg",
        width: 1200,
        height: 630,
        alt: "YouTube Embed Code Generator Tool"
      }
    ],
    type: "website"
  },
  alternates: {
    canonical: "https://30tools.com/youtube-embed-generator"
  }
,
  twitter: {
    card: "summary_large_image",
    title: "Youtube Embed Generator - Free Online Tool | 30tools",
    description: "Free youtube embed generator tool with professional results. No registration required, instant processing, secure & unlimited use.",
    images: ["/og-images/youtube-embed-generator.jpg"],
    creator: "@30tools"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "YouTube Embed Code Generator",
  "description": "Professional tool to generate customized YouTube embed codes with advanced player options and privacy settings",
  "url": "https://30tools.com/youtube-embed-generator",
  "applicationCategory": "Multimedia",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Custom player dimensions",
    "Privacy-enhanced embedding",
    "Responsive design options",
    "Advanced player controls",
    "Multiple embed formats",
    "Real-time preview"
  ]
};

export default function YouTubeEmbedGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-cute">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-4">
                YouTube Embed Code Generator
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Generate customized YouTube embed codes with advanced player options, privacy settings, 
                and responsive design. Perfect for websites, blogs, and professional presentations with 
                full control over player appearance and functionality.
              </p>
            </div>
            
            <YouTubeEmbedGenerator />
            
            <div className="mt-12 prose prose-gray max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Professional YouTube Video Embedding</h2>
              <p>
                Create custom YouTube embed codes that perfectly match your website's design and requirements. 
                Our advanced embed generator provides complete control over player dimensions, privacy settings, 
                autoplay options, and responsive behavior, ensuring optimal user experience across all devices 
                while maintaining fast loading speeds and privacy compliance.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Advanced Embed Customization Features</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Custom Player Dimensions:</strong> Set exact width and height or use responsive aspect ratios for perfect fit</li>
                <li><strong>Privacy-Enhanced Mode:</strong> Enable privacy-enhanced embedding to protect visitor data and comply with GDPR</li>
                <li><strong>Autoplay Controls:</strong> Configure autoplay, muting, and loop settings for optimal user experience</li>
                <li><strong>Player Interface Options:</strong> Customize controls, related videos, fullscreen, and branding elements</li>
                <li><strong>Responsive Design:</strong> Generate mobile-friendly embeds that adapt to any screen size automatically</li>
                <li><strong>Start Time Precision:</strong> Set exact start and end times for targeted content presentation</li>
                <li><strong>Multiple Embed Formats:</strong> Choose from iframe, object, or JavaScript embedding methods</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Website Performance & SEO Benefits</h3>
              <p>
                Properly embedded YouTube videos can significantly boost your website's engagement metrics, 
                reduce bounce rates, and improve SEO rankings. Our embed generator creates lightweight, 
                fast-loading video players that maintain excellent Core Web Vitals scores while providing 
                rich multimedia content that search engines love and visitors engage with.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Privacy & Compliance Features</h3>
              <p>
                Stay compliant with data protection regulations using our privacy-enhanced embedding options. 
                The generator includes settings for GDPR compliance, cookie consent management, and 
                privacy-first video loading that protects visitor data while maintaining full functionality. 
                Perfect for business websites, educational platforms, and content publishers who prioritize user privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
