import UniversalVideoDownloader from '@/components/tools/downloaders/UniversalVideoDownloader';

export const metadata = {
  title: "Rumble Video Downloader - Download Rumble Videos Free Online",
  description: "Download Rumble videos in HD quality for free. Save Rumble videos with our fast, secure Rumble downloader. No software installation required.",
  keywords: [
    // Primary keywords
    "rumble downloader",
    "download rumble video",
    "rumble video downloader online",
    "rumble video download",
    "rumble video saver",

    // Long-tail keywords for SEO ranking
    "download rumble video online free without software",
    "rumble video downloader high quality hd 1080p 4k",
    "save rumble videos to phone pc laptop",
    "rumble downloader no registration required",
    "free rumble video downloader for mobile desktop",
    "download rumble videos fast secure safe",
    "rumble video downloader supports all formats",
    "download rumble videos mp4 format",
    "rumble video extractor online tool",
    "download rumble videos without watermark",
    "rumble media downloader all channels",
    "rumble video saver high quality",
    "save rumble content offline viewing",
    "rumble video downloader unlimited downloads",
    "download rumble videos high resolution"
  ].join(", "),
  openGraph: {
    title: "Free Rumble Video Downloader - Download HD Videos Online",
    description: "Download Rumble videos in HD and 4K quality. Save Rumble content with our fast and secure downloader.",
    url: "https://30tools.com/rumble-downloader",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/rumble-downloader.jpg",
        width: 1200,
        height: 630,
        alt: "Rumble Video Downloader - Free Online Tool"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rumble Video Downloader - Download Videos Free",
    description: "Download Rumble videos in HD quality for free. Save Rumble content instantly.",
    images: ["/og-images/rumble-downloader.jpg"]
  },
  alternates: {
    canonical: "https://30tools.com/rumble-downloader"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Rumble Video Downloader",
  "description": "Free online tool to download Rumble videos in high quality",
  "url": "https://30tools.com/rumble-downloader",
  "applicationCategory": "MultimediaApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Download Rumble videos in HD quality",
    "Support for 4K resolution videos",
    "Fast and secure downloading",
    "No software installation required",
    "Works on all devices and browsers"
  ]
};

export default function RumbleDownloaderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Rumble Video Downloader
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Download Rumble videos in high definition quality for free. Our advanced Rumble downloader supports HD and 4K video downloads with lightning-fast speed. Save Rumble videos instantly without any software installation. Perfect for offline viewing, content creation, and sharing Rumble content.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ HD & 4K Quality Downloads</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ All Rumble Content</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ No Registration Required</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Unlimited Downloads</span>
            </div>
          </div>

          <UniversalVideoDownloader />

          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">How to Download Rumble Videos Online Free</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-500 font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Copy Rumble URL</h3>
                  <p className="text-sm text-muted-foreground">Copy the Rumble video link you want to download from your browser address bar</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-500 font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Paste & Select Quality</h3>
                  <p className="text-sm text-muted-foreground">Paste the URL and choose your preferred video quality (HD, 4K when available)</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-500 font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Download Instantly</h3>
                  <p className="text-sm text-muted-foreground">Click download and save your Rumble video to your device</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Why Choose Our Rumble Video Downloader?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-blue-600">🎥 High Quality Rumble Downloads</h3>
                  <p className="text-sm text-muted-foreground mb-4">Download Rumble videos in original quality including HD 720p, Full HD 1080p, and even 4K resolution when available. Our Rumble downloader preserves the original video quality for the best viewing experience.</p>

                  <h3 className="font-medium mb-2 text-blue-600">🎯 Support for All Rumble Channels</h3>
                  <p className="text-sm text-muted-foreground mb-4">Works with every Rumble channel and video. Download content from news channels, entertainment, educational content, and independent creators on the Rumble platform.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-blue-600">⚡ Lightning Fast Download Speed</h3>
                  <p className="text-sm text-muted-foreground mb-4">Our optimized servers ensure super-fast Rumble video downloads. No waiting times, no slow downloads - get your Rumble videos downloaded in seconds, not minutes.</p>

                  <h3 className="font-medium mb-2 text-blue-600">🔒 100% Safe and Secure</h3>
                  <p className="text-sm text-muted-foreground mb-4">Your privacy is our priority. All Rumble downloads are processed securely without storing any personal data. No malware, no viruses, just clean and safe Rumble video downloads.</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Rumble Video Quality Options</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-3xl mb-2">📺</div>
                  <h3 className="font-medium mb-2">HD 720p</h3>
                  <p className="text-sm text-muted-foreground">High Definition quality perfect for most viewing needs and smaller file sizes</p>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-3xl mb-2">🎬</div>
                  <h3 className="font-medium mb-2">Full HD 1080p</h3>
                  <p className="text-sm text-muted-foreground">Full High Definition for crystal clear video quality and professional content</p>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-3xl mb-2">🎯</div>
                  <h3 className="font-medium mb-2">4K Ultra HD</h3>
                  <p className="text-sm text-muted-foreground">Ultra High Definition 4K resolution for the best possible video quality</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Is it legal to download Rumble videos?</h3>
                  <p className="text-sm text-muted-foreground">You can download Rumble videos for personal use, educational purposes, or content you own. Always respect copyright laws and Rumble's terms of service when downloading videos.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">What video formats are supported?</h3>
                  <p className="text-sm text-muted-foreground">Our Rumble downloader supports MP4 format, which is compatible with all devices and media players. Downloads preserve the original video quality.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Can I download 4K Rumble videos?</h3>
                  <p className="text-sm text-muted-foreground">Yes! If the original Rumble video is available in 4K, our downloader will offer 4K download options to preserve the highest quality available.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Is there a download limit?</h3>
                  <p className="text-sm text-muted-foreground">No, there are no download limits! You can download as many Rumble videos as you want, completely free of charge.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}