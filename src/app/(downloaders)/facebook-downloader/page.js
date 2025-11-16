import UniversalVideoDownloader from '@/components/tools/downloaders/UniversalVideoDownloader';

export const metadata = {
  title: "Facebook Video Downloader - Download Facebook Videos Free Online",
  description: "Download Facebook videos, Reels, and Live videos in HD quality for free. Save Facebook content with our fast, secure Facebook downloader. No app required.",
  keywords: [
    // Primary keywords
    "facebook downloader",
    "download facebook video",
    "facebook video downloader online",
    "facebook reels downloader",
    "facebook video download",

    // Long-tail keywords for SEO ranking
    "download facebook video online free without software",
    "facebook video downloader high quality hd 1080p",
    "save facebook videos to phone pc laptop",
    "facebook downloader no registration required",
    "free facebook video downloader for mobile desktop",
    "download facebook videos fast secure safe",
    "facebook video downloader supports all formats",
    "download facebook reels mp4 format",
    "facebook video extractor online tool",
    "download facebook videos without watermark",
    "facebook media downloader all videos",
    "facebook video saver high quality",
    "save facebook content offline viewing",
    "facebook video downloader unlimited downloads",
    "download facebook videos high resolution",
    "facebook live video downloader",
    "facebook story video downloader",
    "download facebook private videos",
    "facebook video download no app",
    "save facebook videos offline",
    "facebook reel downloader free",
    "download facebook videos without login"
  ].join(", "),
  openGraph: {
    title: "Free Facebook Video Downloader - Download Reels & Videos Online",
    description: "Download Facebook videos, Reels, and Live videos in HD quality. Save Facebook content with our fast and secure downloader.",
    url: "https://30tools.com/facebook-downloader",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/facebook-downloader.jpg",
        width: 1200,
        height: 630,
        alt: "Facebook Video Downloader - Free Online Tool"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Facebook Video Downloader - Download Videos & Reels Free",
    description: "Download Facebook videos, Reels, and Live videos in HD quality for free. Save Facebook content instantly.",
    images: ["/og-images/facebook-downloader.jpg"]
  },
  alternates: {
    canonical: "https://30tools.com/facebook-downloader"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Facebook Video Downloader",
  "description": "Free online tool to download Facebook videos, Reels, and Live videos in high quality",
  "url": "https://30tools.com/facebook-downloader",
  "applicationCategory": "MultimediaApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Download Facebook videos in HD quality",
    "Save Facebook Reels and Live videos",
    "Support for all Facebook content",
    "Fast and secure downloading",
    "No software installation required",
    "Works on all devices and browsers"
  ]
};

export default function FacebookDownloaderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Facebook Video Downloader
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Download Facebook videos, Reels, and Live videos in high definition quality for free. Our advanced Facebook downloader supports all Facebook content types with lightning-fast speed. Save Facebook videos, Reels, and Live content instantly without any software installation. Perfect for content creators, social media managers, and anyone who wants to save Facebook content offline.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ All Facebook Content</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ HD Quality Downloads</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ No Registration Required</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Unlimited Downloads</span>
            </div>
          </div>

          <UniversalVideoDownloader />

          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">How to Download Facebook Videos Online Free</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Copy Facebook URL</h3>
                  <p className="text-sm text-muted-foreground">Copy the Facebook video, Reel, or Live video link you want to download</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Paste & Analyze</h3>
                  <p className="text-sm text-muted-foreground">Paste the Facebook URL and let our tool detect the content type and available formats</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Download Instantly</h3>
                  <p className="text-sm text-muted-foreground">Choose your preferred format and download your Facebook content</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Why Choose Our Facebook Video Downloader?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-blue-700">📱 All Facebook Content Types</h3>
                  <p className="text-sm text-muted-foreground mb-4">Download Facebook videos, Reels, Live videos, and Stories from posts and profiles. Our Facebook downloader supports every type of Facebook video content.</p>

                  <h3 className="font-medium mb-2 text-blue-700">🎯 High Quality Downloads</h3>
                  <p className="text-sm text-muted-foreground mb-4">Download Facebook content in original quality including HD videos and high-resolution media. Preserve the quality of your favorite Facebook content.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-blue-700">⚡ Lightning Fast Download Speed</h3>
                  <p className="text-sm text-muted-foreground mb-4">Our optimized servers ensure super-fast Facebook content downloads. No waiting times, no slow downloads - get your Facebook content downloaded in seconds.</p>

                  <h3 className="font-medium mb-2 text-blue-700">🔒 100% Safe and Secure</h3>
                  <p className="text-sm text-muted-foreground mb-4">Your privacy is our priority. All Facebook downloads are processed securely without storing any personal data. No malware, no viruses, just clean Facebook content.</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Facebook Content We Support</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-3xl mb-2">🎬</div>
                  <h3 className="font-medium mb-2">Facebook Videos</h3>
                  <p className="text-sm text-muted-foreground">Download regular Facebook video posts in HD quality</p>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-3xl mb-2">📱</div>
                  <h3 className="font-medium mb-2">Facebook Reels</h3>
                  <p className="text-sm text-muted-foreground">Save viral Facebook Reels and short-form videos</p>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-3xl mb-2">🔴</div>
                  <h3 className="font-medium mb-2">Live Videos</h3>
                  <p className="text-sm text-muted-foreground">Download Facebook Live videos after they end</p>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-3xl mb-2">📖</div>
                  <h3 className="font-medium mb-2">Stories</h3>
                  <p className="text-sm text-muted-foreground">Save temporary Facebook Stories before they disappear</p>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-3xl mb-2">👥</div>
                  <h3 className="font-medium mb-2">Group Videos</h3>
                  <p className="text-sm text-muted-foreground">Download videos from Facebook groups and communities</p>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-3xl mb-2">📄</div>
                  <h3 className="font-medium mb-2">Page Videos</h3>
                  <p className="text-sm text-muted-foreground">Save videos from Facebook Pages and businesses</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Is it legal to download Facebook videos?</h3>
                  <p className="text-sm text-muted-foreground">You can download Facebook videos for personal use, educational purposes, or content you own. Always respect copyright laws and Facebook's terms of service when downloading videos.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">What Facebook content can I download?</h3>
                  <p className="text-sm text-muted-foreground">Our Facebook downloader supports videos, Reels, Live videos, Stories, and media from public Facebook posts, groups, and pages.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Can I download private Facebook content?</h3>
                  <p className="text-sm text-muted-foreground">No, our tool only works with public Facebook content. Private posts require authentication that our tool doesn't support.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Is there a download limit?</h3>
                  <p className="text-sm text-muted-foreground">No, there are no download limits! You can download as much Facebook content as you want, completely free of charge.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">What formats are supported?</h3>
                  <p className="text-sm text-muted-foreground">We support MP4 for videos, which is compatible with all devices and media players. Downloads preserve original quality when possible.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}