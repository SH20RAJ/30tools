import YouTubeGifMaker from '@/components/tools/youtube/YouTubeGifMaker';

export const metadata = {
  title: "Youtube Gif Maker - Free Online Tool | Professional Results",
  description: "Professional youtube gif maker with instant results. Free online tool for students, professionals, and businesses worldwide.",
  keywords: "youtube gif maker, youtube to gif converter, animated gif creator, video to gif converter, youtube gif generator, create gif from youtube, youtube clip to gif, animated gif maker, youtube gif downloader, social media gif creator",
  openGraph: {
    title: "YouTube GIF Maker - Create Animated GIFs from YouTube Videos",
    description: "Create high-quality animated GIFs from YouTube video clips with custom settings and optimization.",
    url: "https://30tools.com/youtube-gif-maker",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/youtube-gif-maker.jpg",
        width: 1200,
        height: 630,
        alt: "YouTube GIF Maker Tool"
      }
    ],
    type: "website"
  },
  alternates: {
    canonical: "https://30tools.com/youtube-gif-maker"
  }
,
  twitter: {
    card: "summary_large_image",
    title: "Youtube Gif Maker - Free Online Tool | Professional Results",
    description: "Professional youtube gif maker tool. Free online processing with high-quality results. No registration required, instant results.",
    images: ["/og-images/youtube-gif-maker.jpg"],
    creator: "@30tools"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "YouTube GIF Maker",
  "description": "Professional tool to create high-quality animated GIFs from YouTube video clips with custom settings",
  "url": "https://30tools.com/youtube-gif-maker",
  "applicationCategory": "Multimedia",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Custom time range selection",
    "Quality optimization",
    "Frame rate control",
    "Size customization",
    "Loop settings",
    "Social media optimization"
  ]
};

export default function YouTubeGifMakerPage() {
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
                YouTube GIF Maker
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Create stunning animated GIFs from YouTube video clips with professional quality settings. 
                Perfect for social media content, memes, tutorials, and viral marketing campaigns with 
                optimized file sizes and smooth animations.
              </p>
            </div>
            
            <YouTubeGifMaker />
            
            <div className="mt-12 prose prose-gray max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Professional YouTube to GIF Conversion</h2>
              <p>
                Transform memorable YouTube moments into shareable animated GIFs with our advanced conversion tool. 
                Whether you're creating content for social media marketing, educational materials, or entertainment, 
                our GIF maker provides precise control over timing, quality, and optimization settings to create 
                perfect animated clips that capture attention and drive engagement.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Advanced GIF Creation Features</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Precision Time Selection:</strong> Choose exact start and end times down to the millisecond for perfect clip timing</li>
                <li><strong>Quality Optimization:</strong> Adjust frame rate, resolution, and compression for optimal balance of quality and file size</li>
                <li><strong>Custom Dimensions:</strong> Set specific width and height or maintain aspect ratio for platform-specific requirements</li>
                <li><strong>Loop Control:</strong> Configure infinite loops or set specific repeat counts for different use cases</li>
                <li><strong>Color Optimization:</strong> Smart color palette reduction for smaller file sizes without quality loss</li>
                <li><strong>Social Media Presets:</strong> One-click optimization for Twitter, Instagram, Discord, and other platforms</li>
                <li><strong>Subtitle Retention:</strong> Preserve or remove captions and text overlays as needed</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Social Media & Marketing Applications</h3>
              <p>
                Animated GIFs are powerful tools for digital marketing, social media engagement, and content creation. 
                Our YouTube GIF maker helps you create compelling visual content that increases click-through rates, 
                improves social media engagement, and makes complex concepts more digestible. Perfect for product demos, 
                tutorial highlights, reaction clips, and viral moment capture that drives brand awareness.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Technical Excellence & Performance</h3>
              <p>
                Our GIF creation process uses advanced algorithms to maintain visual quality while optimizing file sizes 
                for web performance. The tool automatically handles frame interpolation, color dithering, and compression 
                optimization to ensure your GIFs load quickly across all devices and platforms while maintaining the 
                smooth, professional appearance that makes content stand out in crowded social feeds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
