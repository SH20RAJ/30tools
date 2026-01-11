import TwitterDownloader from "@/components/tools/downloaders/TwitterDownloader";

export const metadata = {
  title: "Twitter Video Downloader (2026) - Save X Videos & GIFs | 30Tools",
  description: "Best free online twitter video downloader to save X videos, GIFs, and media in HD 1080p. Fast, secure, and works on iPhone/Android. (Updated 2026)",
  keywords: [
    "save x videos", "twitter video downloader 2026", "download twitter videos online", "x video saver",
    "save twitter clips hd", "twitter to mp4 free", "rip x video", "save tweet media",
    "download twitter gif", "save x gif", "twitter video downloader iphone", "tweet media saver",
    "x.com video downloader", "twitter news video download", "twitter meme downloader"
  ].join(", "),
  openGraph: {
    title: "Twitter Video Downloader - Save X Videos & GIFs Free",
    description: "⚡ Save Twitter (X) videos and GIFs instantly in HD quality. No registration needed!",
    url: "https://30tools.com/twitter-video-downloader",
    type: "website",
    images: [{
      url: "/og-images/twitter-downloader.jpg",
      width: 1200,
      height: 630,
      alt: "Twitter Video Downloader 2026"
    }],
    siteName: "30tools"
  },
  twitter: {
    card: "summary_large_image",
    title: "Save X Videos - Twitter Downloader",
    description: "Download videos and GIFs from Twitter (X) in seconds.",
    images: ["/og-images/twitter-downloader.jpg"],
    creator: "@30tools"
  },
  alternates: { canonical: "https://30tools.com/twitter-video-downloader" },
  robots: { index: true, follow: true }
};

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Twitter Video Downloader",
    "alternateName": ["X Video Downloader", "Twitter GIF Saver", "Tweet Media Downloader"],
    "description": "Free online tool to download videos and GIFs from Twitter (X) in HD quality.",
    "url": "https://30tools.com/twitter-video-downloader",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "featureList": [
      "Download Twitter videos in HD",
      "Save Twitter GIFs as MP4",
      "Works on X.com links",
      "No registration required",
      "Mobile friendly (iOS/Android)"
    ]
  },
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Download Twitter (X) Videos",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Copy Link", "text": "Click the Share icon on the tweet and select 'Copy Link'." },
      { "@type": "HowToStep", "position": 2, "name": "Paste URL", "text": "Paste the link into the input box above." },
      { "@type": "HowToStep", "position": 3, "name": "Download", "text": "Click Download and choose your preferred video quality." }
    ]
  }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function TwitterVideoDownloaderPage() {
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
              <li className="text-foreground font-medium">Twitter Video Downloader</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Twitter Video Downloader</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Save videos from Twitter (X) to your device. Download tweets with videos and GIFs in high quality MP4 format.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🐦 Save Tweets</span><span>🎥 MP4 Format</span><span>⚡ Fast & Free</span><span>📱 Mobile Friendly</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <TwitterDownloader />
          </div>

          {/* Deep Dive: GIFs & News */}
          <section className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold mb-4">Save Twitter GIFs</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Twitter converts GIFs to video format. Our tool helps you <strong>download twitter gif</strong> content as MP4 files,
                compatible with WhatsApp, Telegram, and Discord. Perfect for meme collectors!
              </p>
              <span className="text-xs bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded">GIF Support</span>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl border border-blue-100 dark:border-blue-900/50">
              <h3 className="text-xl font-bold mb-4">Journalism & News Clips</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                X (Twitter) is the home of breaking news. Journalists and researchers use our <strong>x video downloader</strong> to archive
                important footage for offline reference. Fast, reliable, and high definition.
              </p>
              <span className="text-xs bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded">HD Archive</span>
            </div>
          </section>

          {/* How To Section */}
          <section className="mb-20 text-center">
            <h2 className="text-3xl font-bold mb-12">How to Save X Videos?</h2>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="w-full md:w-64 p-6 bg-card rounded-xl border">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="font-bold mb-2">1. Copy Link</h3>
                <p className="text-sm text-muted-foreground">Tap "Share" on the tweet and copy the link.</p>
              </div>
              <div className="w-full md:w-64 p-6 bg-card rounded-xl border">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="font-bold mb-2">2. Paste URL</h3>
                <p className="text-sm text-muted-foreground">Paste it in the box above.</p>
              </div>
              <div className="w-full md:w-64 p-6 bg-card rounded-xl border">
                <div className="text-4xl mb-4">⬇️</div>
                <h3 className="font-bold mb-2">3. Download</h3>
                <p className="text-sm text-muted-foreground">Save as MP4 in HD quality.</p>
              </div>
            </div>
          </section>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Related Tools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/facebook-downloader", icon: "📘", title: "Facebook Downloader", desc: "Download FB videos" },
                { href: "/instagram-downloader", icon: "📸", title: "Instagram Downloader", desc: "Download IG videos" },
                { href: "/tiktok-downloader", icon: "🎵", title: "TikTok Downloader", desc: "Download TikToks" },
                { href: "/reddit-downloader", icon: "🤖", title: "Reddit Downloader", desc: "Download Reddit videos" }
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
