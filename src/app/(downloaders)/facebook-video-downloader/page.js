import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";
import Link from 'next/link';

const researchedKeywords = [
  "facebook video downloader", "download facebook video", "free facebook video downloader",
  "fb video downloader", "facebook reels downloader", "facebook story downloader",
  "download facebook reels", "download facebook video online", "facebook video to mp4",
  "facebook video downloader hd", "private facebook video downloader", "download fb video without watermark",
  "download video from facebook", "facebook live video download", "save facebook video",
  "best facebook downloader", "fbdown online", "download fb reels", "facebook image saver",
  "fast facebook downloader 2026", "facebook downloader phone", "fdown alternative"
];

export const metadata = {
  title: "Facebook Video Downloader - Save FB Reels & Stories HD | 30tools",
  description: "Download Facebook videos, Reels, and Stories in HD for free. No login required. Save private FB videos and FB live streams instantly to MP4.",
  keywords: researchedKeywords.join(", "),

  openGraph: {
    title: "Facebook Video Downloader (2026) - Free HD MP4 Saver",
    description: "⚡ Fast & Free Facebook video downloader. Save HD, 4K, Reels, and Stories without watermarks.",
    url: "https://30tools.com/facebook-video-downloader",
    siteName: "30tools",
    type: "website",
    images: [{ url: "/og-images/facebook-video-downloader.jpg", width: 1200, height: 630, alt: "Facebook Video Downloader" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Facebook Video Downloader HD (2026)",
    description: "⚡ The ultimate online Facebook downloader. Fast, free, and works for all FB Reels, Stories, and HD Videos!",
    images: ["/og-images/facebook-video-downloader.jpg"],
    creator: "@30tools"
  },

  alternates: { canonical: "https://30tools.com/facebook-video-downloader" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Facebook Video Downloader Online",
    "alternateName": ["FB Video Saver", "Facebook Reels Downloader", "FDownloader"],
    "description": "Powerful online tool to download Facebook videos, Reels, and Stories in HD quality for free.",
    "url": "https://30tools.com/facebook-video-downloader",
    "applicationCategory": ["MultimediaApplication", "UtilitiesApplication"],
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "featureList": [
      "Download Facebook Videos in HD/4K",
      "Save Facebook Reels and Stories",
      "Private Facebook video downloader support",
      "No login required",
      "100% Free"
    ]
  },
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Download Facebook Videos and Reels Online",
    "description": "Step-by-step guide to downloading FB media with 30tools.",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Copy the FB Link", "text": "Open the Facebook app or website, find the video or Reel, tap the 'Share' arrow, and select 'Copy Link'." },
      { "@type": "HowToStep", "position": 2, "name": "Paste into Downloader", "text": "Go to the 30tools Facebook Video Downloader and paste the copied URL into the central search box." },
      { "@type": "HowToStep", "position": 3, "name": "Save as MP4", "text": "Click Download, select your preferred resolution (SD, HD, 1080p), and the video will save to your device." }
    ]
  }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function FacebookVideoDownloaderPage() {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.webApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.howTo) }} />

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li><li>/</li>
            <li><Link href="/all-downloaders" className="hover:text-primary transition-colors">Downloaders</Link></li><li>/</li>
            <li className="text-foreground font-medium">Facebook Video Downloader</li>
          </ol>
        </nav>

        <AdUnit />

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-foreground leading-tight">
            Download <span className="text-primary">Facebook Videos</span> Online
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Get your favorite content with our highly reliable <strong>Facebook Video Downloader</strong>. Download Facebook videos, Reels, and Stories in HD, Full HD, and 4K directly to your phone or PC. No app installation or login required.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">⚡ <strong>Supports FB Reels</strong></span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">🆓 <strong>100% Free</strong></span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">🎬 <strong>HD MP4 Downloads</strong></span>
          </div>
        </div>

        <AdUnit />

        {/* Tool Component */}
        <div className="bg-card rounded-2xl shadow-2xl border border-border p-6 md:p-10 mb-20">
          <UniversalVideoDownloader title="Facebook Video Downloader" />
        </div>

        <AdUnit />

        {/* Content Section */}
        <section className="mb-20 prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Use the Best Free Facebook Video Downloader</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Downloading videos from Facebook used to be a hassle. With the 30tools <strong>FB video downloader</strong>, saving your favorite clips, hilarious reels, and memorable stories is just one click away. We pull the raw MP4 file directly from Facebook's servers, allowing you to bypass restrictive app-only viewing and save files locally.
              </p>
              <p className="text-muted-foreground">
                Whether you need a <strong>private Facebook video downloader</strong> solution or simply want to archive public <strong>FB Reels</strong> offline, our fast, secure, web-based tool handles it all. Forget downloading bulky, suspicious apps. 30tools works effortlessly on iPhones, Android devices, Mac, and Windows.
              </p>
            </div>
            <div className="bg-muted/30 p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-4">Core Features:</h3>
              <ul className="space-y-2 text-sm font-semibold marker:text-primary">
                <li>🔹 <strong>Facebook Story Downloader Support</strong></li>
                <li>🔹 <strong>Facebook Reels Extractor</strong></li>
                <li>🔹 <strong>Save Live Videos (Post-Broadcast)</strong></li>
                <li>🔹 <strong>No Watermarks on Output</strong></li>
                <li>🔹 <strong>Supports 1080p and 4K Resolution</strong></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Deep Dive Section: Reels & Private Video */}
        <section className="mb-20 bg-blue-50 dark:bg-blue-950/20 p-8 md:p-12 rounded-3xl border border-blue-100 dark:border-blue-900/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Special Features: <span className="text-primary">Reels & Mobile Support</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Download Facebook Reels</h3>
                <p className="text-muted-foreground mb-4">
                  Short-form content is the best way to share quick laughs and tips. Our tool is optimized to download Facebook Reels in full HD. Just paste the reel link the exact same way you would a normal video.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Mobile Device Friendly</h3>
                <p className="text-muted-foreground">
                  Need to download FB videos straight to your iPhone's camera roll or Android gallery? Our browser tool does exactly that. No need to install third-party sketchy apps from the App Store.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How-To Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">How to Save Facebook Videos in 3 Steps</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-card rounded-2xl border border-border hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-bold mb-4">Copy Link</h3>
              <p className="text-muted-foreground">Find the video or Reel on FB, tap the 'Share' arrow, and click "Copy Link".</p>
            </div>
            <div className="text-center p-8 bg-card rounded-2xl border border-border hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold mb-4">Paste URL</h3>
              <p className="text-muted-foreground">Return here to 30tools and paste the link into the search box at the top of the page.</p>
            </div>
            <div className="text-center p-8 bg-card rounded-2xl border border-border hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold mb-4">Download MP4</h3>
              <p className="text-muted-foreground">Select your desired resolution (e.g. 1080p HD) and save the video directly to your device.</p>
            </div>
          </div>
        </section>

        <AdUnit />

        {/* FAQs Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">Is it really free to download Facebook videos?</h3>
              <p className="text-muted-foreground">Yes! Our Facebook video downloader is completely 100% free. There are no limits on the number of times you can download, and we never ask for your credit card or to create an account.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">Can I download Reels and Stories?</h3>
              <p className="text-muted-foreground">Absolutely. As long as you have the URL link to the Facebook Reel or Story (and it is public), our tool can fetch the raw MP4 file for you to save.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">Are the downloaded videos high quality?</h3>
              <p className="text-muted-foreground">Yes. We extract all available resolutions provided by Facebook, ranging from standard definition (SD) all the way up to Full HD (1080p) and 4K when the original uploader provides it.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">Do you keep a copy of the videos I download?</h3>
              <p className="text-muted-foreground">No. 30tools operates strictly as an intermediary fetcher. We do not host, store, or log any of the videos you download. Your downloads are entirely private.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">Is it legal to download videos from Facebook?</h3>
              <p className="text-muted-foreground">Downloading videos for personal, offline viewing is generally acceptable. However, downloading and redistributing copyrighted material without the creator's explicit permission is a violation of copyright law. Always respect intellectual property.</p>
            </div>
          </div>
        </section>

        {/* Keyword Cloud */}
        <div className="bg-muted/30 rounded-3xl p-8 mb-20 text-center border border-border/50">
          <p className="text-xs font-bold text-primary mb-6 uppercase tracking-widest opacity-80">Search & Trending Keywords</p>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 opacity-50">
            {researchedKeywords.map(kw => (
              <span key={kw} className="text-[10px] md:text-xs text-muted-foreground hover:text-primary transition-colors cursor-default">
                {kw} <span className="opacity-30">|</span>
              </span>
            ))}
          </div>
        </div>

        <AdUnit />

        {/* Related Section */}
        <section className="pt-12 border-t border-border">
          <h2 className="text-2xl font-bold mb-8 text-center">More Popular Downloaders</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/instagram-videos-downloader", title: "Instagram Downloader", icon: "📸" },
              { href: "/tiktok-videos-downloader", title: "TikTok Downloader", icon: "🎵" },
              { href: "/youtube-video-downloader", title: "YouTube Downloader", icon: "📹" },
              { href: "/pinterest-video-downloader", title: "Pinterest Downloader", icon: "📌" }
            ].map((t, i) => (
              <Link key={i} href={t.href} className="p-6 bg-card rounded-2xl border border-border hover:border-primary transition-all text-center group">
                <span className="text-3xl mb-3 block">{t.icon}</span>
                <h3 className="font-bold group-hover:text-primary transition-colors text-sm">{t.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(7) }} />
    </>
  );
}
