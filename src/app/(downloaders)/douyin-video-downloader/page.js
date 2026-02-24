import Link from 'next/link';
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
  title: "Douyin Video Downloader - Save Douyin Videos No Watermark | 30tools",
  description: "Download Douyin videos without watermark for free. Save Chinese TikTok (Douyin) videos as HD MP4. No login required. Works on all devices.",
  keywords: [
    "douyin video downloader", "download douyin video no watermark", "douyin downloader",
    "save douyin video", "douyin to mp4", "chinese tiktok downloader", "douyin video saver",
    "how to download douyin videos", "douyin without watermark"
  ].join(", "),
  openGraph: {
    title: "Douyin Video Downloader - Save Chinese TikTok Videos Free",
    description: "⚡ Download Douyin (Chinese TikTok) videos without watermark. Free, instant, no login.",
    url: "https://30tools.com/douyin-video-downloader",
    siteName: "30tools",
    type: "website",
    images: [{ url: "/og-images/universal-downloader.jpg", width: 1200, height: 630, alt: "Douyin Video Downloader" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Douyin Video Downloader (2026) - No Watermark",
    description: "⚡ Save Douyin videos without watermark for free. Works globally.",
    images: ["/og-images/universal-downloader.jpg"],
    creator: "@30tools"
  },
  alternates: { canonical: "https://30tools.com/douyin-video-downloader" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

const jsonLd = {
  "@context": "https://schema.org", "@type": "WebApplication",
  "name": "Douyin Video Downloader",
  "alternateName": ["Chinese TikTok Downloader", "Douyin No Watermark"],
  "description": "Free online tool to download Douyin (Chinese TikTok) videos without watermark as HD MP4.",
  "url": "https://30tools.com/douyin-video-downloader",
  "applicationCategory": "MultimediaApplication", "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

export default function DouyinVideoDownloaderPage() {
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
              <li className="text-foreground font-medium">Douyin Video Downloader</li>
            </ol>
          </nav>
          <AdUnit />
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Douyin Video Downloader</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Download Douyin (Chinese TikTok) videos without watermarks in HD MP4 for free. Save trending Chinese short videos to any device. No login required.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🇨🇳 Chinese TikTok</span><span>🚫 No Watermark</span><span>📹 HD MP4</span><span>🆓 100% Free</span>
            </div>
          </div>
          <AdUnit />
          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <UniversalVideoDownloader title="Douyin Video Downloader" />
          </div>
          <section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">What is Douyin?</h2>
            <p className="text-muted-foreground mb-8">Douyin is the original Chinese version of TikTok, operated by ByteDance exclusively for the Chinese market. It features unique content not available on global TikTok including Chinese cuisine, fashion, comedy, and lifestyle trends. Our <strong>Douyin Video Downloader</strong> makes it easy to download Douyin videos without the watermark from anywhere in the world.</p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">Exclusive Chinese Content</h3>
                <p className="text-muted-foreground m-0">Access and save Douyin content that never makes it to global TikTok — unique Chinese culture, food, comedy, and music trends.</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">No Watermark</h3>
                <p className="text-muted-foreground m-0">Unlike Douyin's in-app save function, our tool removes the watermark to give you a clean video for resharing on other platforms.</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">Global Access</h3>
                <p className="text-muted-foreground m-0">Our server-side downloader accesses Douyin content regardless of your country. Works from India, US, UK, and anywhere worldwide.</p>
              </div>
            </div>
          </section>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">Douyin Downloader FAQs</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">What's the difference between Douyin and TikTok?</h3>
                <p className="text-muted-foreground">Douyin is the Chinese domestic version of TikTok by ByteDance. Both apps look similar but have separate content libraries. Douyin also features real-name authentication and heavier content moderation for the Chinese market.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">How do I get a Douyin video link?</h3>
                <p className="text-muted-foreground">In the Douyin app, tap Share on any video and select "Copy Link". Paste the link into the 30tools downloader to fetch the watermark-free MP4.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}