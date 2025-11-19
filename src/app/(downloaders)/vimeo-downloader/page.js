import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
  title: "Vimeo Video Downloader - Download Vimeo Videos Free Online",
  description:
    "Download Vimeo videos in HD and 4K quality for free. Save Vimeo videos with our fast, secure Vimeo downloader. No software installation required.",
  keywords: [
    // Primary keywords
    "vimeo downloader",
    "download vimeo video",
    "vimeo video downloader online",
    "vimeo video download",
    "vimeo video saver",

    // Long-tail keywords for SEO ranking
    "download vimeo video online free without software",
    "vimeo video downloader high quality hd 1080p 4k",
    "save vimeo videos to phone pc laptop",
    "vimeo downloader no registration required",
    "free vimeo video downloader for mobile desktop",
    "download vimeo videos fast secure safe",
    "vimeo video downloader supports all formats",
    "download vimeo videos mp4 format",
    "vimeo video extractor online tool",
    "download vimeo videos without watermark",
    "vimeo media downloader all videos",
    "vimeo video saver high quality",
    "save vimeo content offline viewing",
    "vimeo video downloader unlimited downloads",
    "download vimeo videos high resolution",
    "vimeo 4k downloader",
    "vimeo hd video download",
    "download vimeo private videos",
    "vimeo video download no app",
    "save vimeo videos offline",
  ].join(", "),
  openGraph: {
    title: "Free Vimeo Video Downloader - Download HD & 4K Videos Online",
    description:
      "Download Vimeo videos in HD and 4K quality. Save Vimeo content with our fast and secure downloader.",
    url: "https://30tools.com/vimeo-downloader",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/vimeo-downloader.jpg",
        width: 1200,
        height: 630,
        alt: "Vimeo Video Downloader - Free Online Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vimeo Video Downloader - Download Videos Free",
    description:
      "Download Vimeo videos in HD and 4K quality for free. Save Vimeo content instantly.",
    images: ["/og-images/vimeo-downloader.jpg"],
  },
  alternates: {
    canonical: "https://30tools.com/vimeo-downloader",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Vimeo Video Downloader",
  description: "Free online tool to download Vimeo videos in HD and 4K quality",
  url: "https://30tools.com/vimeo-downloader",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  permissions: "browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Download Vimeo videos in HD quality",
    "Support for 4K resolution videos",
    "Fast and secure downloading",
    "No software installation required",
    "Works on all devices and browsers",
  ],
};

export default function VimeoDownloaderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Vimeo Video Downloader
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Download Vimeo videos in high definition and 4K quality for free.
              Our advanced Vimeo downloader supports professional video content
              with lightning-fast speed. Save Vimeo videos instantly without any
              software installation. Perfect for content creators, educators,
              and professionals who need high-quality video downloads.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                ✓ HD & 4K Quality Downloads
              </span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                ✓ Professional Videos
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
                How to Download Vimeo Videos Online Free
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Copy Vimeo URL</h3>
                  <p className="text-sm text-muted-foreground">
                    Copy the Vimeo video link you want to download from your
                    browser address bar
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Paste & Select Quality</h3>
                  <p className="text-sm text-muted-foreground">
                    Paste the URL and choose your preferred video quality (HD,
                    4K when available)
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Download Instantly</h3>
                  <p className="text-sm text-muted-foreground">
                    Click download and save your Vimeo video to your device
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                Why Choose Our Vimeo Video Downloader?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-blue-700">
                    🎥 Professional Quality Downloads
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download Vimeo videos in original professional quality
                    including HD 720p, Full HD 1080p, and even 4K resolution
                    when available. Perfect for content creators and
                    professionals.
                  </p>

                  <h3 className="font-medium mb-2 text-blue-700">
                    🎯 Support for All Vimeo Content
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Works with every Vimeo video including public videos,
                    showcases, and content from Vimeo On Demand. Download
                    professional videos from creators worldwide.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-blue-700">
                    ⚡ Lightning Fast Download Speed
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our optimized servers ensure super-fast Vimeo video
                    downloads. No waiting times, no slow downloads - get your
                    professional Vimeo videos downloaded in seconds.
                  </p>

                  <h3 className="font-medium mb-2 text-blue-700">
                    🔒 100% Safe and Secure
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Your privacy is our priority. All Vimeo downloads are
                    processed securely without storing any personal data. No
                    malware, no viruses, just clean professional video content.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                Vimeo Video Quality Options
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-3xl mb-2">📺</div>
                  <h3 className="font-medium mb-2">HD 720p</h3>
                  <p className="text-sm text-muted-foreground">
                    High Definition quality perfect for most professional
                    content and smaller file sizes
                  </p>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-3xl mb-2">🎬</div>
                  <h3 className="font-medium mb-2">Full HD 1080p</h3>
                  <p className="text-sm text-muted-foreground">
                    Full High Definition for crystal clear professional video
                    quality
                  </p>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-3xl mb-2">🎯</div>
                  <h3 className="font-medium mb-2">4K Ultra HD</h3>
                  <p className="text-sm text-muted-foreground">
                    Ultra High Definition 4K resolution for the best possible
                    professional video quality
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
                    Is it legal to download Vimeo videos?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    You can download Vimeo videos for personal use, educational
                    purposes, or content you own. Always respect copyright laws
                    and Vimeo's terms of service when downloading videos.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    What video formats are supported?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Our Vimeo downloader supports MP4 format, which is
                    compatible with all devices and media players. Downloads
                    preserve the original professional video quality.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    Can I download 4K Vimeo videos?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! If the original Vimeo video is available in 4K, our
                    downloader will offer 4K download options to preserve the
                    highest professional quality available.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    Is there a download limit?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    No, there are no download limits! You can download as many
                    Vimeo videos as you want, completely free of charge.
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
