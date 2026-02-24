import Link from 'next/link';
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
  title: "CapCut Video Downloader - Save CapCut Videos No Watermark | 30tools",
  description: "Download CapCut videos without watermark for free. Remove CapCut logo and save videos in HD MP4. Works online on Android, iPhone, and PC in seconds.",
  keywords: [
    "capcut video downloader", "download capcut video no watermark", "capcut video saver",
    "capcut downloader without watermark", "save capcut video", "capcut to mp4",
    "remove capcut watermark", "download capcut video online free", "capcut hd download"
  ].join(", "),
  openGraph: {
    title: "CapCut Video Downloader - Remove Watermark Free",
    description: "⚡ Download CapCut videos without the watermark in HD. Free, instant, no login required.",
    url: "https://30tools.com/capcut-video-downloader",
    siteName: "30tools",
    type: "website",
    images: [{ url: "/og-images/universal-downloader.jpg", width: 1200, height: 630, alt: "CapCut Video Downloader" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "CapCut Video Downloader (2026) - No Watermark",
    description: "⚡ Download CapCut videos without watermark in HD. Free online tool.",
    images: ["/og-images/universal-downloader.jpg"],
    creator: "@30tools"
  },
  alternates: { canonical: "https://30tools.com/capcut-video-downloader" },
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
  "name": "CapCut Video Downloader",
  "alternateName": ["Remove CapCut Watermark", "CapCut to MP4 No Watermark"],
  "description": "Free online tool to download CapCut videos without watermark in HD quality.",
  "url": "https://30tools.com/capcut-video-downloader",
  "applicationCategory": "MultimediaApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "featureList": ["Download CapCut videos without watermark", "HD quality output", "No account required", "Instant download"]
};

export default function CapcutVideoDownloaderPage() {
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
              <li className="text-foreground font-medium">CapCut Video Downloader</li>
            </ol>
          </nav>
          <AdUnit />
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">CapCut Video Downloader</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Download CapCut videos without the CapCut watermark in HD quality for free. Just paste the CapCut share link and get a clean, watermark-free MP4 in seconds.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🚫 No Watermark</span><span>📹 HD Quality</span><span>⚡ Instant</span><span>🆓 100% Free</span>
            </div>
          </div>
          <AdUnit />
          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <UniversalVideoDownloader title="CapCut Video Downloader" />
          </div>
          <section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">Why Remove the CapCut Watermark?</h2>
            <p className="text-muted-foreground mb-8">
              CapCut is one of the most popular video editing apps, but every video exported from CapCut includes a prominent "CapCut" watermark. This can look unprofessional when you share your edits on TikTok, Instagram, or YouTube. Our <strong>CapCut Video Downloader</strong> strips the watermark and delivers the clean original video.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">Professional Sharing</h3>
                <p className="text-muted-foreground m-0">Get a clean, watermark-free video perfect for posting to TikTok, Instagram Reels, YouTube Shorts, or LinkedIn without the CapCut logo.</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">HD Quality Preserved</h3>
                <p className="text-muted-foreground m-0">The watermark removal preserves the original video quality. No compression, no pixelation — just the clean video file you created.</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">Works Instantly</h3>
                <p className="text-muted-foreground m-0">Paste your CapCut share link and get your download in seconds. No registration, no ad gates, no slowdowns.</p>
              </div>
            </div>
          </section>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">CapCut Downloader FAQs</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">How do I get the CapCut share link?</h3>
                <p className="text-muted-foreground">Open your CapCut project or a CapCut video published online. Tap Share → Copy Link. Paste that URL into the downloader above and click Download.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Does this remove watermarks from other editors too?</h3>
                <p className="text-muted-foreground">This tool is optimized specifically for CapCut videos shared via CapCut's platform. For TikTok watermarks, use our TikTok Video Downloader instead.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Is saving a CapCut video legal?</h3>
                <p className="text-muted-foreground">Downloading your own CapCut videos for personal use is always allowed. Downloading other users' videos should only be done with their permission and never for commercial repurposing.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}