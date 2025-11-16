import UniversalVideoDownloader from '@/components/tools/downloaders/UniversalVideoDownloader';

export const metadata = {
  title: "TikTok Video Downloader - Download TikTok Videos Without Watermark",
  description: "Download TikTok videos without watermark in HD quality for free. Save TikTok videos, music, and sounds with our fast, secure TikTok downloader. No app required.",
  keywords: [
    // Primary keywords
    "tiktok downloader",
    "download tiktok video",
    "tiktok video downloader without watermark",
    "tiktok video download",
    "tiktok video saver",

    // Long-tail keywords for SEO ranking
    "download tiktok video online free without watermark",
    "tiktok video downloader high quality hd 1080p 4k",
    "save tiktok videos to phone pc laptop without watermark",
    "tiktok downloader no registration required",
    "free tiktok video downloader for mobile desktop",
    "download tiktok videos fast secure safe no watermark",
    "tiktok video downloader supports all formats",
    "download tiktok videos mp4 format without watermark",
    "tiktok video extractor online tool no watermark",
    "download tiktok videos without watermark app",
    "tiktok media downloader all videos no watermark",
    "tiktok video saver high quality no watermark",
    "save tiktok content offline viewing no watermark",
    "tiktok video downloader unlimited downloads no watermark",
    "download tiktok videos high resolution no watermark",
    "tiktok mp4 downloader without watermark",
    "tiktok video download without logo",
    "remove tiktok watermark download video",
    "tiktok video downloader clean no watermark"
  ].join(", "),
  openGraph: {
    title: "Free TikTok Video Downloader - Download Without Watermark",
    description: "Download TikTok videos without watermark in HD quality. Save TikTok content with our fast and secure downloader.",
    url: "https://30tools.com/tiktok-downloader",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/tiktok-downloader.jpg",
        width: 1200,
        height: 630,
        alt: "TikTok Video Downloader - Download Without Watermark"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "TikTok Video Downloader - Download Videos Without Watermark",
    description: "Download TikTok videos without watermark in HD quality for free. Save TikTok content instantly.",
    images: ["/og-images/tiktok-downloader.jpg"]
  },
  alternates: {
    canonical: "https://30tools.com/tiktok-downloader"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "TikTok Video Downloader",
  "description": "Free online tool to download TikTok videos without watermark in high quality",
  "url": "https://30tools.com/tiktok-downloader",
  "applicationCategory": "MultimediaApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Download TikTok videos without watermark",
    "Save TikTok videos in HD quality",
    "Download TikTok audio and music",
    "Fast and secure downloading",
    "No software installation required",
    "Works on all devices and browsers"
  ]
};

export default function TikTokDownloaderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              TikTok Video Downloader
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Download TikTok videos without watermark in high definition quality for free. Our advanced TikTok downloader removes watermarks automatically and supports HD video downloads with lightning-fast speed. Save TikTok videos, music, and sounds instantly without any software installation. Perfect for content creators, social media managers, and anyone who wants clean TikTok content.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ No Watermark Downloads</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ HD Quality Videos</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Audio & Music Download</span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">✓ Unlimited Downloads</span>
            </div>
          </div>

          <UniversalVideoDownloader />

          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">How to Download TikTok Videos Without Watermark</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-pink-500 font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Copy TikTok URL</h3>
                  <p className="text-sm text-muted-foreground">Copy the TikTok video link you want to download from the TikTok app or website</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-pink-500 font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Paste & Remove Watermark</h3>
                  <p className="text-sm text-muted-foreground">Paste the URL and our tool will automatically remove the TikTok watermark</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-pink-500 font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Download Clean Video</h3>
                  <p className="text-sm text-muted-foreground">Download your TikTok video in HD quality without any watermark or logo</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Why Choose Our TikTok Video Downloader?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-pink-600">🚫 No Watermark Technology</h3>
                  <p className="text-sm text-muted-foreground mb-4">Our advanced AI technology automatically removes TikTok watermarks, giving you clean, professional-looking videos perfect for content creation and social media sharing.</p>

                  <h3 className="font-medium mb-2 text-pink-600">🎵 Download TikTok Audio & Music</h3>
                  <p className="text-sm text-muted-foreground mb-4">Extract and download the audio from any TikTok video as MP3. Perfect for saving viral sounds, music, and audio clips for your own content creation.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-pink-600">⚡ Lightning Fast Download Speed</h3>
                  <p className="text-sm text-muted-foreground mb-4">Our optimized servers ensure super-fast TikTok video downloads. Get your favorite TikTok videos downloaded in seconds with automatic watermark removal.</p>

                  <h3 className="font-medium mb-2 text-pink-600">🔒 100% Safe and Secure</h3>
                  <p className="text-sm text-muted-foreground mb-4">Your privacy is our priority. All TikTok downloads are processed securely without storing any personal data. No malware, no viruses, just clean TikTok content.</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">TikTok Download Options</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-3xl mb-2">🎬</div>
                  <h3 className="font-medium mb-2">Video Without Watermark</h3>
                  <p className="text-sm text-muted-foreground">Download clean MP4 videos without TikTok logo or watermark</p>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-3xl mb-2">🎵</div>
                  <h3 className="font-medium mb-2">Audio MP3</h3>
                  <p className="text-sm text-muted-foreground">Extract and download TikTok audio as high-quality MP3 files</p>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-3xl mb-2">📱</div>
                  <h3 className="font-medium mb-2">Mobile Friendly</h3>
                  <p className="text-sm text-muted-foreground">Works perfectly on phones, tablets, and all mobile devices</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Does this TikTok downloader remove watermarks?</h3>
                  <p className="text-sm text-muted-foreground">Yes! Our TikTok downloader uses advanced technology to automatically remove watermarks, giving you clean videos perfect for reposting or content creation.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Is it legal to download TikTok videos?</h3>
                  <p className="text-sm text-muted-foreground">You can download TikTok videos for personal use, educational purposes, or content you own. Always respect copyright laws and TikTok's terms of service when downloading videos.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Can I download private TikTok videos?</h3>
                  <p className="text-sm text-muted-foreground">No, our tool only works with public TikTok videos. Private videos require authentication that our tool doesn't support.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">What video quality options are available?</h3>
                  <p className="text-sm text-muted-foreground">We support HD quality downloads up to 1080p. The download quality depends on the original video quality uploaded to TikTok.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Is there a download limit?</h3>
                  <p className="text-sm text-muted-foreground">No, there are no download limits! You can download as many TikTok videos as you want, completely free of charge.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}