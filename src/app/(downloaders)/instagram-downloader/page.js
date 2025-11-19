import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
  title: "Instagram Video Downloader - Download Instagram Videos & Reels Free",
  description:
    "Download Instagram videos, Reels, IGTV, and Stories in HD quality for free. Save Instagram content with our fast, secure Instagram downloader. No app required.",
  keywords: [
    // Primary keywords
    "instagram downloader",
    "download instagram video",
    "instagram video downloader online",
    "instagram reels downloader",
    "instagram stories downloader",

    // Long-tail keywords for SEO ranking
    "download instagram video online free without software",
    "instagram video downloader high quality hd 1080p",
    "save instagram videos to phone pc laptop",
    "instagram downloader no registration required",
    "free instagram video downloader for mobile desktop",
    "download instagram videos fast secure safe",
    "instagram video downloader supports all formats",
    "download instagram reels mp4 format",
    "instagram video extractor online tool",
    "download instagram videos without watermark",
    "instagram media downloader all content",
    "instagram video saver high quality",
    "save instagram content offline viewing",
    "instagram video downloader unlimited downloads",
    "download instagram videos high resolution",
    "instagram igtv downloader",
    "instagram stories video downloader",
    "download instagram carousel photos",
    "instagram post downloader multiple photos",
    "instagram album downloader",
  ].join(", "),
  openGraph: {
    title: "Free Instagram Video Downloader - Download Reels & Videos Online",
    description:
      "Download Instagram videos, Reels, IGTV, and Stories in HD quality. Save Instagram content with our fast and secure downloader.",
    url: "https://30tools.com/instagram-downloader",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/instagram-downloader.jpg",
        width: 1200,
        height: 630,
        alt: "Instagram Video Downloader - Free Online Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Video Downloader - Download Videos & Reels Free",
    description:
      "Download Instagram videos, Reels, and Stories in HD quality for free. Save Instagram content instantly.",
    images: ["/og-images/instagram-downloader.jpg"],
  },
  alternates: {
    canonical: "https://30tools.com/instagram-downloader",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Instagram Video Downloader",
  description:
    "Free online tool to download Instagram videos, Reels, IGTV, and Stories in high quality",
  url: "https://30tools.com/instagram-downloader",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  permissions: "browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Download Instagram videos in HD quality",
    "Save Instagram Reels and Stories",
    "Download IGTV videos",
    "Support for carousel posts",
    "Fast and secure downloading",
    "No software installation required",
    "Works on all devices and browsers",
  ],
};

export default function InstagramDownloaderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Instagram Video Downloader
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Download Instagram videos, Reels, IGTV, and Stories in high
              definition quality for free. Our advanced Instagram downloader
              supports all Instagram content types with lightning-fast speed.
              Save Instagram videos, Reels, Stories, and IGTV content instantly
              without any software installation. Perfect for content creators,
              social media managers, and anyone who wants to save Instagram
              content offline.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                ✓ All Instagram Content
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
                How to Download Instagram Videos Online Free
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-500 font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Copy Instagram URL</h3>
                  <p className="text-sm text-muted-foreground">
                    Copy the Instagram post, Reel, or Story link you want to
                    download
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-500 font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Paste & Analyze</h3>
                  <p className="text-sm text-muted-foreground">
                    Paste the URL and let our tool detect the content type and
                    available formats
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-500 font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Download Instantly</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose your preferred format and download your Instagram
                    content
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                Why Choose Our Instagram Video Downloader?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-purple-600">
                    📱 All Instagram Content Types
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download Instagram videos, Reels, IGTV, Stories, carousel
                    posts, and multiple photos from albums. Our Instagram
                    downloader supports every type of Instagram content.
                  </p>

                  <h3 className="font-medium mb-2 text-purple-600">
                    🎯 High Quality Downloads
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download Instagram content in original quality including HD
                    videos and high-resolution photos. Preserve the quality of
                    your favorite Instagram content.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-purple-600">
                    ⚡ Lightning Fast Download Speed
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our optimized servers ensure super-fast Instagram content
                    downloads. No waiting times, no slow downloads - get your
                    Instagram content downloaded in seconds.
                  </p>

                  <h3 className="font-medium mb-2 text-purple-600">
                    🔒 100% Safe and Secure
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Your privacy is our priority. All Instagram downloads are
                    processed securely without storing any personal data. No
                    malware, no viruses, just clean Instagram content.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                Instagram Content We Support
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-3xl mb-2">🎬</div>
                  <h3 className="font-medium mb-2">Instagram Videos</h3>
                  <p className="text-sm text-muted-foreground">
                    Download regular Instagram video posts in HD quality
                  </p>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-3xl mb-2">📱</div>
                  <h3 className="font-medium mb-2">Instagram Reels</h3>
                  <p className="text-sm text-muted-foreground">
                    Save viral Instagram Reels and short-form videos
                  </p>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-3xl mb-2">📺</div>
                  <h3 className="font-medium mb-2">IGTV Videos</h3>
                  <p className="text-sm text-muted-foreground">
                    Download longer-form IGTV content and tutorials
                  </p>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-3xl mb-2">📖</div>
                  <h3 className="font-medium mb-2">Stories</h3>
                  <p className="text-sm text-muted-foreground">
                    Save temporary Instagram Stories before they disappear
                  </p>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-3xl mb-2">🖼️</div>
                  <h3 className="font-medium mb-2">Carousel Posts</h3>
                  <p className="text-sm text-muted-foreground">
                    Download multiple photos from carousel posts
                  </p>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-3xl mb-2">📸</div>
                  <h3 className="font-medium mb-2">Photo Albums</h3>
                  <p className="text-sm text-muted-foreground">
                    Save entire photo albums and multiple image posts
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
                    Is it legal to download Instagram videos?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    You can download Instagram content for personal use,
                    educational purposes, or content you own. Always respect
                    copyright laws and Instagram's terms of service when
                    downloading content.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    What Instagram content can I download?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Our Instagram downloader supports videos, Reels, IGTV,
                    Stories, carousel posts, and photo albums from public
                    Instagram accounts.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    Can I download private Instagram content?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    No, our tool only works with public Instagram content.
                    Private posts require authentication that our tool doesn't
                    support.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    Is there a download limit?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    No, there are no download limits! You can download as much
                    Instagram content as you want, completely free of charge.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    What formats are supported?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We support MP4 for videos and JPG/PNG for images. Downloads
                    preserve original quality when possible.
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
