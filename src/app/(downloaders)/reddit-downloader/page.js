import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
  title: "Reddit Video Downloader - Download Reddit Videos Free Online",
  description:
    "Download Reddit videos in HD quality for free. Save Reddit videos, GIFs, and images with our fast, secure Reddit downloader. No software installation required.",
  keywords: [
    // Primary keywords
    "reddit downloader",
    "download reddit video",
    "reddit video downloader online",
    "reddit gif downloader",
    "reddit image downloader",

    // Long-tail keywords for SEO ranking
    "download reddit video online free without software",
    "reddit video downloader high quality hd 1080p",
    "save reddit videos to phone pc laptop",
    "reddit downloader no registration required",
    "free reddit video downloader for mobile desktop",
    "download reddit videos fast secure safe",
    "reddit video downloader supports all formats",
    "download reddit gifs animated images",
    "reddit video downloader unlimited downloads",
    "save reddit content offline viewing",
    "reddit video extractor online tool",
    "download reddit videos without watermark",
    "reddit media downloader all subreddits",
    "reddit video saver high quality",
    "download reddit videos mp4 format",
  ].join(", "),
  openGraph: {
    title: "Free Reddit Video Downloader - Download HD Videos Online",
    description:
      "Download Reddit videos, GIFs, and images in HD quality. Save Reddit content with our fast and secure downloader.",
    url: "https://30tools.com/reddit-downloader",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/reddit-downloader.jpg",
        width: 1200,
        height: 630,
        alt: "Reddit Video Downloader - Free Online Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reddit Video Downloader - Download Videos Free",
    description:
      "Download Reddit videos in HD quality for free. Save Reddit content instantly.",
    images: ["/og-images/reddit-downloader.jpg"],
  },
  alternates: {
    canonical: "https://30tools.com/reddit-downloader",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Reddit Video Downloader",
  description:
    "Free online tool to download Reddit videos, GIFs, and images in high quality",
  url: "https://30tools.com/reddit-downloader",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  permissions: "browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Download Reddit videos in HD quality",
    "Save Reddit GIFs and animated content",
    "Download Reddit images and photos",
    "Support for all Reddit subreddits",
    "Fast and secure downloading",
    "No software installation required",
    "Works on all devices and browsers",
  ],
};

export default function RedditDownloaderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Reddit Video Downloader
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Download Reddit videos, GIFs, and images in high definition
              quality for free. Our advanced Reddit downloader supports all
              Reddit subreddits and content types with lightning-fast speed.
              Save Reddit videos, animated GIFs, and images instantly without
              any software installation. Perfect for offline viewing, content
              creation, and sharing Reddit content.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                ✓ HD Quality Downloads
              </span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                ✓ All Reddit Content
              </span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                ✓ No Registration Required
              </span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                ✓ Unlimited Downloads
              </span>
            </div>
          </div>

          <UniversalVideoDownloader />

          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                How to Download Reddit Videos Online Free
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-orange-500 font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Copy Reddit URL</h3>
                  <p className="text-sm text-muted-foreground">
                    Copy the Reddit post link containing the video, GIF, or
                    image you want to download
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-orange-500 font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Paste & Analyze</h3>
                  <p className="text-sm text-muted-foreground">
                    Paste the Reddit URL and let our tool analyze the content
                    and available formats
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-orange-500 font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Download Instantly</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose your preferred format and download your Reddit
                    content instantly
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                Why Choose Our Reddit Video Downloader?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-orange-600">
                    🎥 Download All Reddit Content Types
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download Reddit videos, GIFs, images, and animated content
                    from any subreddit. Our Reddit downloader supports all
                    popular formats including MP4, GIF, JPG, PNG, and more.
                  </p>

                  <h3 className="font-medium mb-2 text-orange-600">
                    🎯 Support for All Subreddits
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Works with every Reddit subreddit including r/videos,
                    r/gifs, r/funny, r/memes, and millions of other communities.
                    No restrictions on content type or subreddit.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-orange-600">
                    ⚡ Lightning Fast Download Speed
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our optimized servers ensure super-fast Reddit content
                    downloads. Get your favorite Reddit videos and GIFs
                    downloaded in seconds, not minutes.
                  </p>

                  <h3 className="font-medium mb-2 text-orange-600">
                    🔒 100% Safe and Secure
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Your privacy is our priority. All Reddit downloads are
                    processed securely without storing any personal data. No
                    malware, no viruses, just clean and safe Reddit content
                    downloads.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                Reddit Content Types We Support
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-3xl mb-2">🎬</div>
                  <h3 className="font-medium mb-2">Reddit Videos</h3>
                  <p className="text-sm text-muted-foreground">
                    Download HD Reddit videos from r/videos,
                    r/educationalvideos, and other video subreddits
                  </p>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-3xl mb-2">🎭</div>
                  <h3 className="font-medium mb-2">Reddit GIFs</h3>
                  <p className="text-sm text-muted-foreground">
                    Save animated GIFs from r/gifs, r/reactiongifs, and
                    GIF-heavy subreddits
                  </p>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-3xl mb-2">📸</div>
                  <h3 className="font-medium mb-2">Reddit Images</h3>
                  <p className="text-sm text-muted-foreground">
                    Download high-quality images from r/photography,
                    r/EarthPorn, and image subreddits
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">
                    Is it legal to download Reddit videos?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    You can download Reddit content for personal use,
                    educational purposes, or content you own. Always respect
                    copyright laws and Reddit's terms of service when
                    downloading content.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    What Reddit content can I download?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Our Reddit downloader supports videos, GIFs, images, and
                    other media content from any public Reddit post. Works with
                    all subreddits and content types.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    Can I download content from private subreddits?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    No, our tool only works with public Reddit content. Private
                    subreddit content requires authentication that our tool
                    doesn't support.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    Is there a download limit?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    No, there are no download limits! You can download as much
                    Reddit content as you want, completely free of charge.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    What formats are supported?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We support all common formats including MP4 for videos, GIF
                    for animations, and JPG/PNG for images. Downloads preserve
                    original quality when possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
