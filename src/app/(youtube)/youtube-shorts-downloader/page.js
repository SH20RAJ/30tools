import YouTubeShortsDownloader from '@/components/tools/youtube/YouTubeShortsDownloader';

export const metadata = {
  title: "YouTube Shorts Downloader - Download Short Videos Free",
  description: "Professional youtube shorts downloader tool. Free online processing with high-quality results. No registration required, instant results.",
  keywords: [
    // Primary keywords
    "youtube shorts downloader",
    "download youtube shorts",
    "youtube short video downloader",
    "download short videos from youtube",
    
    // Long-tail keywords for SEO ranking
    "youtube shorts downloader online free no watermark",
    "download youtube shorts to mp4 hd quality",
    "save youtube short videos to phone gallery",
    "youtube shorts video downloader mobile friendly",
    "download vertical videos from youtube shorts",
    "youtube shorts downloader without software installation",
    "free youtube shorts downloader unlimited downloads",
    "download youtube shorts for offline viewing",
    "youtube shorts to mp4 converter online",
    "best youtube shorts downloader 2024 2025",
    "download youtube shorts with original quality",
    "youtube shorts video saver online tool",
    "extract youtube shorts videos for editing",
    "bulk youtube shorts downloader multiple videos",
    "download private youtube shorts with link"
  ].join(", "),
  openGraph: {
    title: "YouTube Shorts Downloader - Download Short Videos Online",
    description: "Download YouTube Shorts in HD quality. Save vertical short videos from YouTube instantly with our free online downloader.",
    url: "https://30tools.com/youtube-shorts-downloader",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/youtube-shorts-downloader.jpg",
        width: 1200,
        height: 630,
        alt: "YouTube Shorts Downloader - Free Online Tool"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Shorts Downloader - Download Short Videos Free",
    description: "Download YouTube Shorts in HD quality for free. Save vertical videos to your device instantly.",
    images: ["/og-images/youtube-shorts-downloader.jpg"]
  },
  alternates: {
    canonical: "https://30tools.com/youtube-shorts-downloader"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "YouTube Shorts Downloader",
  "description": "Free online tool to download YouTube Shorts videos in high quality for offline viewing",
  "url": "https://30tools.com/youtube-shorts-downloader",
  "applicationCategory": "MultimediaApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Download YouTube Shorts in HD quality",
    "Save vertical short videos",
    "Fast and secure downloading",
    "No software installation required",
    "Works on mobile and desktop",
    "Unlimited free downloads"
  ]
};

export default function YouTubeShortsDownloaderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              YouTube Shorts Downloader
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Download YouTube Shorts videos in high definition quality for free. Our YouTube Shorts downloader lets you save those amazing vertical short videos to your device for offline viewing, content creation, and social media sharing. Perfect for creators, educators, and entertainment enthusiasts who want to enjoy YouTube Shorts anytime, anywhere.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ HD Quality Downloads</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Vertical Video Format</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Mobile Optimized</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ No Watermarks</span>
            </div>
          </div>
          
          <YouTubeShortsDownloader />
          
          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">How to Download YouTube Shorts Videos</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-pink-500 font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Find YouTube Shorts</h3>
                  <p className="text-sm text-muted-foreground">Copy the YouTube Shorts URL from the mobile app or web browser</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-pink-500 font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Paste Shorts Link</h3>
                  <p className="text-sm text-muted-foreground">Paste the YouTube Shorts URL into our downloader tool</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-pink-500 font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Download Instantly</h3>
                  <p className="text-sm text-muted-foreground">Click download and save the YouTube Shorts video to your device</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Why Use Our YouTube Shorts Downloader?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-pink-600">📱 Perfect for Mobile Viewing</h3>
                  <p className="text-sm text-muted-foreground mb-4">Download YouTube Shorts in their original vertical format, perfect for mobile viewing and social media sharing. Our downloader preserves the 9:16 aspect ratio that makes Shorts so engaging.</p>
                  
                  <h3 className="font-medium mb-2 text-pink-600">⚡ Lightning Fast Downloads</h3>
                  <p className="text-sm text-muted-foreground mb-4">YouTube Shorts are typically short videos, and our optimized servers make downloading them incredibly fast. Get your favorite Shorts downloaded in seconds, not minutes.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-pink-600">🎨 Content Creation Ready</h3>
                  <p className="text-sm text-muted-foreground mb-4">Perfect for content creators who want to study successful Shorts, create compilation videos, or use as reference material for their own creative projects.</p>
                  
                  <h3 className="font-medium mb-2 text-pink-600">🔒 Safe and Private</h3>
                  <p className="text-sm text-muted-foreground mb-4">Your downloads are processed securely without storing any personal information. We prioritize your privacy while providing the best YouTube Shorts downloading experience.</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">YouTube Shorts Download FAQ</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">What are YouTube Shorts?</h3>
                  <p className="text-sm text-muted-foreground">YouTube Shorts are vertical videos up to 60 seconds long, designed for mobile viewing. They're YouTube's answer to TikTok-style short-form content.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Can I download YouTube Shorts on my phone?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our YouTube Shorts downloader is fully mobile-optimized and works perfectly on smartphones and tablets.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">What quality are the downloaded Shorts?</h3>
                  <p className="text-sm text-muted-foreground">We download YouTube Shorts in their original quality, typically HD resolution optimized for mobile viewing.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Is it legal to download YouTube Shorts?</h3>
                  <p className="text-sm text-muted-foreground">You can download YouTube Shorts for personal use, educational purposes, or content you have rights to. Always respect copyright and YouTube's terms of service.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
