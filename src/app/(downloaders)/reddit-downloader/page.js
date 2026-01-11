import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
  title: "Reddit Video Downloader (2026) - Save with Audio | 30Tools",
  description: "Download Reddit videos with audio in HD (Updated 2026). Save Reddit clips & GIFs to MP4. Free, fast & no watermarks.",
  keywords: [
    "reddit video downloader 2026",
    "download reddit video with sound",
    "reddit video saver hd",
    "save reddit gifs mp4",
    "reddit clip downloader",
    "reddit to mp4 converter",
    "updated 2026",
    "download reddit video audio",
    "reddit video downloader with audio",
    "save reddit video to gallery",
    "ripsave reddit",
    "viddit alternative"
  ].join(", "),
  openGraph: {
    title: "Reddit Video Downloader (2026) - Save Videos with Audio",
    description: "⚡ Download Reddit videos with sound in HD quality! Free & unlimited tool (Updated 2026).",
    url: "https://30tools.com/reddit-downloader",
    siteName: "30tools",
    type: "website",
    images: [{
      url: "/og-images/reddit-downloader.jpg", // Assuming image exists or will differ
      width: 1200,
      height: 630,
      alt: "Reddit Video Downloader 2026"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Reddit Video Downloader (2026) - Free Tool",
    description: "⚡ Save Reddit videos with audio in HD. Updated 2026!",
    images: ["/og-images/reddit-downloader.jpg"],
    creator: "@30tools"
  },
  alternates: { canonical: "https://30tools.com/reddit-downloader" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
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
    "name": "Reddit Video Downloader",
    "alternateName": ["Reddit Saver", "Reddit GIF Downloader"],
    "description": "Free online tool to download Reddit videos and GIFs with audio.",
    "url": "https://30tools.com/reddit-downloader",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "featureList": [
      "Download Reddit Videos with Audio",
      "Save Reddit GIFs as MP4",
      "HD Quality Support",
      "No registration"
    ]
  },
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Download Reddit Videos",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Copy Link", "text": "Click 'Share' on the Reddit post and copy the link." },
      { "@type": "HowToStep", "position": 2, "name": "Paste URL", "text": "Paste into the 30Tools Reddit Downloader." },
      { "@type": "HowToStep", "position": 3, "name": "Download", "text": "Save the video with sound to your device." }
    ]
  }
};

export default function RedditDownloaderPage() {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.webApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.howTo) }} />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li>
              <li>/</li>
              <li><a href="/all-downloaders" className="hover:text-primary">Downloaders</a></li>
              <li>/</li>
              <li className="text-foreground font-medium">Reddit Downloader</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Reddit Video Downloader</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Download Reddit videos with audio in high quality. Save videos and GIFs from Reddit posts directly to your device.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🤖 Save Videos</span><span>🔊 With Audio</span><span>🎞️ GIFs</span><span>🆓 100% Free</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <UniversalVideoDownloader />
          </div>

          {/* Audio & GIFs Deep Dive */}
          <section className="bg-orange-50 dark:bg-orange-950/20 p-8 rounded-2xl border border-orange-100 dark:border-orange-900/50 mb-16">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-400">Videos with Sound & GIFs</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Reddit often separates video and audio tracks. Our <strong>reddit video downloader with audio</strong> stitches them back together instantly.
                  We also convert silent GIFs into shareable MP4s.
                </p>
                <div className="flex gap-4 text-sm font-medium">
                  <a href="/tiktok-downloader" className="hover:text-orange-600 transition-colors">
                    Saving TikTok Trends?
                  </a>
                  <span>•</span>
                  <a href="/twitter-video-downloader" className="hover:text-orange-600 transition-colors">
                    Download Twitter News
                  </a>
                </div>
              </div>
              <div className="shrink-0 bg-background p-4 rounded-xl shadow-sm border">
                <span className="text-4xl">🔊</span>
              </div>
            </div>
          </section>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How to Download Reddit Videos</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Copy Link", desc: "Open the Reddit post and copy the share link." },
                { step: "2", title: "Paste URL", desc: "Paste the link into the Reddit downloader above." },
                { step: "3", title: "Download", desc: "Save the video with audio to your device." }
              ].map((s, i) => (
                <div key={i} className="text-center p-6 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{s.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Related Tools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/twitter-downloader", icon: "🐦", title: "Twitter Downloader", desc: "Download Tweets" },
                { href: "/tiktok-downloader", icon: "🎵", title: "TikTok Downloader", desc: "Download TikToks" },
                { href: "/instagram-downloader", icon: "📸", title: "Instagram Downloader", desc: "Download IG videos" },
                { href: "/universal-video-downloader", icon: "🌐", title: "Universal Downloader", desc: "Download from any site" }
              ].map((tool, i) => (
                <a key={i} href={tool.href} className="group p-5 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{tool.icon}</span>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">{tool.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{tool.desc}</p>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(5) }} />
    </>
  );
}
