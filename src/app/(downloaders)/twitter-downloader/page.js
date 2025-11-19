import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
  title: "Twitter Video Downloader - Download X Videos Free Online",
  description:
    "Download Twitter (X) videos in HD quality for free. Save X videos, GIFs, and images with our fast, secure Twitter downloader. No app required.",
  keywords: [
    // Primary keywords
    "twitter downloader",
    "download twitter video",
    "twitter video downloader online",
    "x video downloader",
    "x twitter downloader",

    // Long-tail keywords for SEO ranking
    "download twitter video online free without software",
    "twitter video downloader high quality hd 1080p",
    "save twitter videos to phone pc laptop",
    "twitter downloader no registration required",
    "free twitter video downloader for mobile desktop",
    "download twitter videos fast secure safe",
    "twitter video downloader supports all formats",
    "download twitter videos mp4 format",
    "twitter video extractor online tool",
    "download twitter videos without watermark",
    "twitter media downloader all tweets",
    "twitter video saver high quality",
    "save twitter content offline viewing",
    "twitter video downloader unlimited downloads",
    "download twitter videos high resolution",
    "x video downloader free",
    "twitter gif downloader",
    "download twitter images photos",
    "twitter video download no app",
    "save twitter videos offline",
  ].join(", "),
  openGraph: {
    title: "Free Twitter Video Downloader - Download X Videos Online",
    description:
      "Download Twitter (X) videos, GIFs, and images in HD quality. Save Twitter content with our fast and secure downloader.",
    url: "https://30tools.com/twitter-downloader",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/twitter-downloader.jpg",
        width: 1200,
        height: 630,
        alt: "Twitter Video Downloader - Free Online Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Twitter Video Downloader - Download X Videos Free",
    description:
      "Download Twitter (X) videos in HD quality for free. Save Twitter content instantly.",
    images: ["/og-images/twitter-downloader.jpg"],
  },
  alternates: {
    canonical: "https://30tools.com/twitter-downloader",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Twitter Video Downloader",
  description:
    "Free online tool to download Twitter (X) videos, GIFs, and images in high quality",
  url: "https://30tools.com/twitter-downloader",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  permissions: "browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Download Twitter videos in HD quality",
    "Save Twitter GIFs and animated content",
    "Download Twitter images and photos",
    "Support for all Twitter content",
    "Fast and secure downloading",
    "No software installation required",
    "Works on all devices and browsers",
  ],
};

export default function TwitterDownloaderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent">
              Twitter Video Downloader
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Download Twitter (X) videos, GIFs, and images in high definition
              quality for free. Our advanced Twitter downloader supports all
              Twitter content types with lightning-fast speed. Save Twitter
              videos, animated GIFs, and images instantly without any software
              installation. Perfect for content creators, researchers, and
              anyone who wants to preserve Twitter content offline.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                ✓ All Twitter Content
              </span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                ✓ HD Quality Downloads
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
                How to Download Twitter Videos Online Free
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-500 font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Copy Twitter URL</h3>
                  <p className="text-sm text-muted-foreground">
                    Copy the Twitter post link containing the video, GIF, or
                    image you want to download
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-500 font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Paste & Analyze</h3>
                  <p className="text-sm text-muted-foreground">
                    Paste the Twitter URL and let our tool analyze the content
                    and available formats
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-500 font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Download Instantly</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose your preferred format and download your Twitter
                    content instantly
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                Why Choose Our Twitter Video Downloader?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-blue-600">
                    🐦 All Twitter Content Types
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download Twitter videos, GIFs, images, and all media content
                    from tweets. Our Twitter downloader supports every type of
                    content shared on the platform.
                  </p>

                  <h3 className="font-medium mb-2 text-blue-600">
                    🎯 High Quality Preservation
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download Twitter content in original quality. Videos up to
                    1080p HD, GIFs in full resolution, and images without
                    compression.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-blue-600">
                    ⚡ Lightning Fast Download Speed
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our optimized servers ensure super-fast Twitter content
                    downloads. No waiting times, no slow downloads - get your
                    Twitter content downloaded in seconds.
                  </p>

                  <h3 className="font-medium mb-2 text-blue-600">
                    🔒 100% Safe and Secure
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Your privacy is our priority. All Twitter downloads are
                    processed securely without storing any personal data. No
                    malware, no viruses, just clean Twitter content.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                Twitter Content Types We Support
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-3xl mb-2">🎬</div>
                  <h3 className="font-medium mb-2">Twitter Videos</h3>
                  <p className="text-sm text-muted-foreground">
                    Download HD Twitter videos from tweets and threads
                  </p>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-3xl mb-2">🎭</div>
                  <h3 className="font-medium mb-2">Twitter GIFs</h3>
                  <p className="text-sm text-muted-foreground">
                    Save animated GIFs and short video clips from tweets
                  </p>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-3xl mb-2">📸</div>
                  <h3 className="font-medium mb-2">Twitter Images</h3>
                  <p className="text-sm text-muted-foreground">
                    Download high-quality images and photos from tweets
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
                    Is it legal to download Twitter videos?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    You can download Twitter content for personal use,
                    educational purposes, or content you own. Always respect
                    copyright laws and Twitter's terms of service when
                    downloading content.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    What Twitter content can I download?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Our Twitter downloader supports videos, GIFs, images, and
                    other media content from public tweets. Works with all types
                    of Twitter content.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    Can I download content from private Twitter accounts?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    No, our tool only works with public Twitter content. Private
                    tweets require authentication that our tool doesn't support.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    Is there a download limit?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    No, there are no download limits! You can download as much
                    Twitter content as you want, completely free of charge.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    What formats are supported?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We support MP4 for videos, GIF for animations, and JPG/PNG
                    for images. Downloads preserve original quality when
                    possible.
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
