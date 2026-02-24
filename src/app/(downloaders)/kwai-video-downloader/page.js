import Link from 'next/link';
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
  title: "Kwai Video Downloader - Save Kwai Videos No Watermark | 30tools",
  description: "Download Kwai videos without watermark for free. Save Kwai short videos as MP4 to your device. No login needed. Works on Android, iPhone, and PC instantly.",
  keywords: [
    "kwai video downloader", "download kwai video no watermark", "kwai downloader", "save kwai video",
    "kwai to mp4", "kwai video download free", "kwai video saver", "kwai without watermark",
    "how to download kwai videos", "kwai short video download"
  ].join(", "),
  openGraph: {
    title: "Kwai Video Downloader - Save Videos Without Watermark",
    description: "⚡ Download Kwai short videos without watermark in HD. Free, no login required.",
    url: "https://30tools.com/kwai-video-downloader",
    siteName: "30tools",
    type: "website",
    images: [{ url: "/og-images/universal-downloader.jpg", width: 1200, height: 630, alt: "Kwai Video Downloader" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kwai Video Downloader (2026) - No Watermark Free",
    description: "⚡ Save Kwai videos without watermark as HD MP4. Free, instant.",
    images: ["/og-images/universal-downloader.jpg"],
    creator: "@30tools"
  },
  alternates: { canonical: "https://30tools.com/kwai-video-downloader" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Kwai Video Downloader",
  "alternateName": ["Kwai to MP4", "Save Kwai No Watermark"],
  "description": "Free online tool to download Kwai short videos without watermark as MP4.",
  "url": "https://30tools.com/kwai-video-downloader",
  "applicationCategory": "MultimediaApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "featureList": ["Download Kwai videos without watermark", "HD MP4 quality", "No account required"]
};

export default function KwaiVideoDownloaderPage() {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li>/</li>
              <li><Link href="/all-downloaders" className="hover:text-primary">Downloaders</Link></li>
              <li>/</li>
              <li className="text-foreground font-medium">Kwai Video Downloader</li>
            </ol>
          </nav>
          <AdUnit />
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Kwai Video Downloader</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Download Kwai short videos without the Kwai watermark. Save trending Kwai content as clean HD MP4 files — free, no login required. Works on all devices.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🚫 No Watermark</span><span>📱 Short Videos</span><span>📹 HD MP4</span><span>🆓 100% Free</span>
            </div>
          </div>
          <AdUnit />
          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <UniversalVideoDownloader title="Kwai Video Downloader" />
          </div>
          <section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">About Kwai Video Downloader</h2>
            <p className="text-muted-foreground mb-8">Kwai is a global short-video platform popular in Brazil, Southeast Asia, and the Middle East — similar to TikTok. Like TikTok, Kwai adds a watermark to downloaded videos. Our <strong>Kwai Video Downloader</strong> fetches the original video stream without the watermark so you get clean, shareable MP4 files.</p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">No Watermark</h3>
                <p className="text-muted-foreground m-0">Get the clean original video without the Kwai logo overlay. Perfect for downloading and resharing on other platforms.</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">Trending Content</h3>
                <p className="text-muted-foreground m-0">Save viral Kwai challenges, dances, comedy, and tutorials at the peak of their trend for sharing across platforms.</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">All Regions</h3>
                <p className="text-muted-foreground m-0">Works with Kwai videos from Brazil, Indonesia, the Gulf, India, and all other regions where Kwai is active.</p>
              </div>
            </div>
          </section>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">Kwai Downloader FAQs</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">How do I get the Kwai video link?</h3>
                <p className="text-muted-foreground">Open the Kwai app, find the video you want, tap Share → Copy Link. Then paste that link into the 30tools Kwai Downloader.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Does this remove the Kwai watermark?</h3>
                <p className="text-muted-foreground">Yes. Our tool fetches the original video stream from Kwai's servers, which doesn't contain the watermark added by the Kwai app's share function.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}