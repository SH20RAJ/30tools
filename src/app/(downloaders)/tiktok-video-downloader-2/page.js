import TikTokDownloader from "@/components/tools/downloaders/TikTokDownloader";

export const metadata = {
  title: "Tiktok Video Downloader - Free Online Tool | 30tools",
  description:
    "Free tiktok video downloader tool with professional results. No registration required, instant processing, secure & unlimited use.",
  keywords: [
    // Primary TikTok keywords
    "tiktok video downloader",
    "download tiktok video",
    "tiktok downloader",
    "tiktok video download",
    "save tiktok video",
    "tiktok downloader without watermark",
    "download tiktok",
    "tiktok video saver",
    "tiktok mp4 downloader",
    "tiktok hd downloader",

    // Long-tail SEO keywords
    "tiktok video downloader online free",
    "download tiktok video without app",
    "tiktok video downloader hd quality",
    "save tiktok videos to phone",
    "tiktok video downloader no watermark",
    "tiktok video downloader for pc mobile",
    "free tiktok video downloader no login",
    "tiktok video converter mp4 download",
    "bulk tiktok video downloader",
    "tiktok video downloader chrome extension",

    // International keywords
    "descargar videos de tiktok",
    "baixar video do tiktok",
    "télécharger vidéo tiktok",
    "تحميل فيديو من تيك توك",
    "scaricare video da tiktok",
    "tải video tiktok",

    // Feature specific
    "tiktok without watermark",
    "tiktok video quality hd",
    "tiktok audio downloader",
    "tiktok mp3 converter",
    "snaptik tiktok downloader",
    "ssstik tiktok downloader",
  ].join(", "),
  openGraph: {
    title: "TikTok Video Downloader - Download Videos Without Watermark Free",
    description:
      "Download TikTok videos without watermark in HD quality. Free, fast, and secure TikTok downloader without app installation.",
    url: "https://30tools.com/tiktok-video-downloader",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/tiktok-video-downloader.jpg",
        width: 1200,
        height: 630,
        alt: "TikTok Video Downloader - Free Online Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TikTok Video Downloader - Download Videos Without Watermark",
    description:
      "Download TikTok videos without watermark in HD quality. Free TikTok downloader tool.",
    images: ["/og-images/tiktok-video-downloader.jpg"],
  },
  alternates: {
    canonical: "https://30tools.com/tiktok-video-downloader",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "TikTok Video Downloader",
  description:
    "Free online tool to download TikTok videos without watermark in high quality",
  url: "https://30tools.com/tiktok-video-downloader",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  permissions: "browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Download TikTok videos without watermark",
    "HD quality video downloads",
    "Audio extraction to MP3",
    "Fast processing speed",
    "No app installation required",
    "Works on all devices",
    "Unlimited free downloads",
    "Privacy protected",
  ],
};

export default function TikTokVideoDownloaderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black to-pink-500 bg-clip-text text-transparent">
              TikTok Video Downloader
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Download TikTok videos without watermark in high definition
              quality for free. Our advanced TikTok downloader removes
              watermarks and supports HD video downloads with lightning-fast
              speed. Save TikTok videos to your device instantly without any app
              installation. Perfect for content creators, social media managers,
              and personal use.
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

          <TikTokDownloader />

          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                How to Download TikTok Videos Without Watermark
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Copy TikTok URL</h3>
                  <p className="text-sm text-muted-foreground">
                    Copy the TikTok video link from the TikTok app or website
                    share button
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Paste & Process</h3>
                  <p className="text-sm text-muted-foreground">
                    Paste the TikTok URL and our tool will process it to remove
                    watermarks
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-muted/500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Download Clean Video</h3>
                  <p className="text-sm text-muted-foreground">
                    Download the TikTok video without watermark in your
                    preferred quality
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                TikTok Downloader Features
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    🚫 Watermark Removal
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download TikTok videos without the TikTok watermark. Get
                    clean, professional-looking videos perfect for reposting,
                    editing, or personal collection.
                  </p>

                  <h3 className="font-medium mb-2 text-primary">
                    🎵 Audio Extraction
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Extract high-quality audio from TikTok videos and save as
                    MP3 files. Perfect for downloading TikTok music, sounds, and
                    audio clips for your projects.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary">
                    📱 Mobile Optimized
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Specially optimized for mobile devices. Download TikTok
                    videos directly to your phone gallery with just a few taps.
                    Works perfectly on iOS and Android.
                  </p>

                  <h3 className="font-medium mb-2 text-primary">
                    ⚡ Super Fast Processing
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our advanced servers process TikTok videos in seconds. No
                    waiting times, no slow processing - get your watermark-free
                    TikTok videos instantly.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                TikTok Downloader FAQ
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">
                    Is it legal to download TikTok videos?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    You can download TikTok videos for personal use, educational
                    purposes, or content you own. Always respect copyright laws
                    and TikTok's terms of service when downloading videos.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    Can I download private TikTok videos?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    You can only download TikTok videos that are publicly
                    available. Private account videos cannot be downloaded
                    unless you have access to view them.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    What quality options are available?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We offer multiple quality options including HD 720p, SD
                    480p, and mobile-optimized formats. The available qualities
                    depend on the original TikTok video quality.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    Does the downloader work on all devices?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! Our TikTok downloader works on all devices - iPhone,
                    Android, PC, Mac, and tablets. No app installation required,
                    just use your web browser.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    Can I download TikTok audio only?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! You can extract and download just the audio from
                    TikTok videos as high-quality MP3 files, perfect for music
                    and sound effects.
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
