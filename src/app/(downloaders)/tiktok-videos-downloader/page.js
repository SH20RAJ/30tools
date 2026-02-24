import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
  title: "Tiktok Videos Downloader - Free Online Tool | 30tools",
  description: "Download TikTok videos without watermark—free, fast, and in HD MP4 with clear sound. Paste your link, hit download, and save clean, high-quality clips.",
  keywords: [
    "tiktok videos downloader 2026",
    "download tiktok videos video",
    "save tiktok videos media",
    "free online tiktok videos downloader",
    "download videos free"
  ].join(", "),
  openGraph: {
    title: "Tiktok Videos Downloader (2026) - Free Downloader",
    description: "⚡ Download TikTok videos without watermark—free, fast, and in HD MP4 with clear sound. Paste your link, hit download, and save clean, high-quality clips.",
    url: "https://30tools.com/tiktok-videos-downloader",
    siteName: "30tools",
    type: "website",
    images: [{
      url: "/og-images/universal-downloader.jpg", 
      width: 1200,
      height: 630,
      alt: "Tiktok Videos Downloader 2026"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiktok Videos Downloader (2026)",
    description: "⚡ Download TikTok videos without watermark—free, fast, and in HD MP4 with clear sound. Paste your link, hit download, and save clean, high-quality clips.",
    images: ["/og-images/universal-downloader.jpg"], 
    creator: "@30tools"
  },
  alternates: { canonical: "https://30tools.com/tiktok-videos-downloader" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Tiktok Videos Downloader",
    "alternateName": ["30tools Tiktok Videos Downloader", "Free Downloader"],
    "description": "Download TikTok videos without watermark—free, fast, and in HD MP4 with clear sound. Paste your link, hit download, and save clean, high-quality clips.",
    "url": "https://30tools.com/tiktok-videos-downloader",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "featureList": [
      "Download high quality videos",
      "No registration required",
      "Free to use"
    ]
  }
};

export default function TiktokVideosDownloaderPage() {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.webApp) }} />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li>
              <li>/</li>
              <li><a href="/all-downloaders" className="hover:text-primary">Downloaders</a></li>
              <li>/</li>
              <li className="text-foreground font-medium">Tiktok Videos Downloader</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Tiktok Videos Downloader</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Download TikTok videos without watermark—free, fast, and in HD MP4 with clear sound. Paste your link, hit download, and save clean, high-quality clips.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>⚡ Fast</span><span>🎥 HD Quality</span><span>🆓 100% Free</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <UniversalVideoDownloader title="Tiktok Videos Downloader" />
          </div>

          {/* SEO Content: Why Use Us */}
          <section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">Why You Should Use Our Tiktok Videos Downloader</h2>
            <p className="text-muted-foreground mb-8">
              Our free tool makes it easy to download content in high quality. Whether you're using a phone, tablet, or PC, you can save your favorite videos quickly and easily. No software installation is required, just copy the link and start downloading directly from your browser.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">High Quality Downloads</h3>
                <p className="text-muted-foreground m-0">
                  Save media in the best available resolution. Enjoy crisp, clear content offline.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">Easy for All Devices</h3>
                <p className="text-muted-foreground m-0">
                  Works across all devices including mobile phones, PCs, and tablets. Compatible with Android and iOS.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">100% Free</h3>
                <p className="text-muted-foreground m-0">
                  Unlimited downloads at zero cost. We only display a few ads to support development.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}