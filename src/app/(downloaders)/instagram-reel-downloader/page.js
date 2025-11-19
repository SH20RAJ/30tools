import InstagramReelDownloader from "@/components/tools/downloaders/InstagramReelDownloader";

export const metadata = {
  title: "Instagram Reel Downloader - Free Online Tool | 30tools",
  description:
    "Professional instagram reel downloader tool. Free online processing with high-quality results. No registration required, instant results.",
  keywords: [
    // Primary Instagram Reel keywords
    "instagram reel downloader",
    "download instagram reel",
    "instagram reels downloader",
    "ig reel downloader",
    "save instagram reel",
    "instagram reel download",
    "download ig reels",
    "instagram reel saver",
    "instagram reels video downloader",
    "ig reels downloader",

    // Long-tail SEO keywords
    "instagram reel downloader online free",
    "download instagram reel without watermark",
    "instagram reel downloader hd quality",
    "save instagram reels to phone",
    "instagram reel downloader for pc mobile",
    "free instagram reel downloader no login",
    "instagram reel video converter mp4",
    "bulk instagram reel downloader",
    "instagram reel downloader without app",
    "instagram reel audio downloader mp3",

    // International keywords
    "descargar reels de instagram",
    "baixar reels do instagram",
    "télécharger reels instagram",
    "تحميل ريلز انستقرام",
    "scaricare reels instagram",
    "tải reels instagram",

    // Feature specific
    "instagram reel without watermark",
    "instagram reel hd download",
    "instagram reel audio extraction",
    "instagram reel mp4 download",
    "instagram reel full quality",
  ].join(", "),
  openGraph: {
    title: "Instagram Reel Downloader - Download Reels HD Without Watermark",
    description:
      "Download Instagram Reels in HD quality without watermark. Free, fast, and secure Instagram Reel downloader.",
    url: "https://30tools.com/instagram-reel-downloader",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/instagram-reel-downloader.jpg",
        width: 1200,
        height: 630,
        alt: "Instagram Reel Downloader - Free Online Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Reel Downloader - Download Reels Without Watermark",
    description:
      "Download Instagram Reels in HD quality without watermark. Free Instagram Reel downloader.",
    images: ["/og-images/instagram-reel-downloader.jpg"],
  },
  alternates: {
    canonical: "https://30tools.com/instagram-reel-downloader",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Instagram Reel Downloader",
  description:
    "Free online tool to download Instagram Reels in HD quality without watermark",
  url: "https://30tools.com/instagram-reel-downloader",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  permissions: "browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Download Instagram Reels in HD",
    "Remove watermarks from Reels",
    "Audio extraction to MP3",
    "Fast processing speed",
    "No app installation required",
    "Works on all devices",
    "Unlimited free downloads",
    "Privacy protected downloads",
  ],
};

export default function InstagramReelDownloaderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-background">
              Instagram Reel Downloader
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Download Instagram Reels in high definition quality without
              watermark for free. Our advanced Instagram Reel downloader
              supports HD video downloads with lightning-fast speed. Save
              Instagram Reels to your device instantly without any app
              installation. Perfect for content creators, social media managers,
              and entertainment purposes.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                ✓ No Watermark
              </span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                ✓ HD Quality
              </span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                ✓ Audio Extraction
              </span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                ✓ Unlimited Downloads
              </span>
            </div>
          </div>

          <InstagramReelDownloader />

          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                How to Download Instagram Reels Without Watermark
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Copy Reel URL</h3>
                  <p className="text-sm text-muted-foreground">
                    Copy the Instagram Reel link from the Instagram app or
                    website share option
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Paste & Process</h3>
                  <p className="text-sm text-muted-foreground">
                    Paste the Reel URL and our tool will process it to remove
                    watermarks
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Download Clean Reel</h3>
                  <p className="text-sm text-muted-foreground">
                    Download the Instagram Reel without watermark in your
                    preferred quality
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                Instagram Reel Downloader Features
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    🚫 Watermark Removal
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download Instagram Reels without the Instagram watermark.
                    Get clean, professional-looking videos perfect for
                    reposting, editing, or personal collection without branding.
                  </p>

                  <h3 className="font-medium mb-2 text-primary">
                    🎵 Audio Extraction
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Extract high-quality audio from Instagram Reels and save as
                    MP3 files. Perfect for downloading trending music, sounds,
                    and audio clips from popular Reels.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    📱 Mobile Optimized
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Specially designed for mobile users. Download Instagram
                    Reels directly to your phone gallery with optimized
                    performance for iOS and Android devices.
                  </p>

                  <h3 className="font-medium mb-2 text-primary">
                    ⚡ Lightning Speed
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our high-performance servers process Instagram Reels in
                    seconds. No waiting queues, no slow processing - get your
                    watermark-free Reels instantly.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                Instagram Reel Downloader FAQ
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">
                    Can I download Reels without the Instagram watermark?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! Our tool specializes in removing Instagram watermarks
                    from Reels, giving you clean videos perfect for content
                    creation and sharing.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    What quality options are available for Reels?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We provide multiple quality options including HD 720p, SD
                    480p, and mobile-optimized formats depending on the original
                    Reel quality.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    Can I download audio from Instagram Reels?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! Extract and download just the audio from
                    Instagram Reels as high-quality MP3 files, perfect for music
                    and sound effects.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    Do I need an Instagram account to download Reels?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    No Instagram login required! Our Reel downloader works
                    anonymously without needing any Instagram account access or
                    personal information.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    Can I download private account Reels?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    You can only download Reels from public Instagram accounts
                    or accounts you have access to view. Private content
                    requires proper viewing permissions.
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
