import Link from 'next/link';
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
  title: "Pinterest Video Downloader - Save Pinterest Videos Free | 30tools",
  description: "Download Pinterest videos and video pins as MP4 for free. Save any Pinterest video to your device without watermarks. No login required. Works on all devices.",
  keywords: [
    "pinterest video downloader", "download pinterest video", "save pinterest video", "pinterest to mp4",
    "pinterest video saver", "pinterest video download free", "how to download pinterest videos",
    "pinterest pin video download", "pinterest video grabber"
  ].join(", "),
  openGraph: {
    title: "Pinterest Video Downloader - Save Video Pins Free",
    description: "⚡ Download Pinterest videos and video pins as MP4 for free. Instant, no login.",
    url: "https://30tools.com/pinterest-video-downloader",
    siteName: "30tools",
    type: "website",
    images: [{ url: "/og-images/universal-downloader.jpg", width: 1200, height: 630, alt: "Pinterest Video Downloader" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinterest Video Downloader (2026) - Free",
    description: "⚡ Save Pinterest video pins offline as MP4. Free, no watermarks.",
    images: ["/og-images/universal-downloader.jpg"],
    creator: "@30tools"
  },
  alternates: { canonical: "https://30tools.com/pinterest-video-downloader" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org", "@type": "WebApplication",
    "name": "Pinterest Video Downloader",
    "alternateName": ["Pinterest to MP4", "Save Pinterest Video Pin"],
    "description": "Free online tool to download Pinterest videos and video pins as MP4 without watermarks.",
    "url": "https://30tools.com/pinterest-video-downloader",
    "applicationCategory": "MultimediaApplication", "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "featureList": ["Download Pinterest video pins", "No watermarks", "No account required", "Works on all devices"]
  },
  howTo: {
    "@context": "https://schema.org", "@type": "HowTo",
    "name": "How to Download Pinterest Videos",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Copy Pinterest URL", "text": "Find the Pinterest video pin and copy its URL from the browser address bar." },
      { "@type": "HowToStep", "position": 2, "name": "Paste URL", "text": "Paste the Pinterest video URL into the 30tools downloader." },
      { "@type": "HowToStep", "position": 3, "name": "Download MP4", "text": "Click Download and save the Pinterest video as an MP4 file." }
    ]
  }
};

export default function PinterestVideoDownloaderPage() {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.webApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.howTo) }} />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li>/</li>
              <li><Link href="/all-downloaders" className="hover:text-primary">Downloaders</Link></li>
              <li>/</li>
              <li className="text-foreground font-medium">Pinterest Video Downloader</li>
            </ol>
          </nav>
          <AdUnit />
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Pinterest Video Downloader</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Save Pinterest video pins as MP4 files for free. Download DIY tutorials, recipe videos, fashion clips, and all Pinterest video content without watermarks. No login needed.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>📌 Video Pins</span><span>🎨 DIY & Recipes</span><span>📹 MP4</span><span>🆓 100% Free</span>
            </div>
          </div>
          <AdUnit />
          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <UniversalVideoDownloader title="Pinterest Video Downloader" />
          </div>
          <section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">Save Pinterest Video Inspiration Offline</h2>
            <p className="text-muted-foreground mb-8">Pinterest is a visual discovery engine featuring hundreds of millions of ideas — from DIY crafts and home decor to cooking guides and fashion inspiration, many shared as video pins. Our <strong>Pinterest Video Downloader</strong> lets you save those creative video pins directly to your device for offline reference.</p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-card rounded-xl border border-border"><h3 className="text-xl font-bold mb-3 mt-0">DIY & Crafts</h3><p className="text-muted-foreground m-0">Download DIY craft video tutorials from Pinterest to follow step-by-step without needing internet access while you work.</p></div>
              <div className="p-6 bg-card rounded-xl border border-border"><h3 className="text-xl font-bold mb-3 mt-0">Recipe Videos</h3><p className="text-muted-foreground m-0">Save cooking and baking recipe videos from Pinterest to watch in the kitchen without keeping your phone screen active and burning mobile data.</p></div>
              <div className="p-6 bg-card rounded-xl border border-border"><h3 className="text-xl font-bold mb-3 mt-0">Fashion & Style</h3><p className="text-muted-foreground m-0">Download fashion lookbook videos, styling tutorials, and outfit inspiration from Pinterest for your personal style archive.</p></div>
            </div>
          </section>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">Pinterest Video Downloader FAQs</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">How do I get the Pinterest video pin URL?</h3>
                <p className="text-muted-foreground">Click on a Pinterest video pin to open it. Copy the URL from your browser's address bar (e.g. pinterest.com/pin/...). Paste it into 30tools and click Download.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Can I download Pinterest videos on iPhone?</h3>
                <p className="text-muted-foreground">Yes. Open 30tools in Safari on your iPhone, paste the Pinterest URL, click Download, then long-press the video and tap "Save to Photos".</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
