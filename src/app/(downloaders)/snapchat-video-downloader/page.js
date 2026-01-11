import SnapchatDownloader from "@/components/tools/downloaders/SnapchatDownloader";

export const metadata = {
  title: "Snapchat Video Downloader - Save Snapchat Stories Free | 30tools",
  description: "Download Snapchat videos and stories anonymously. Save Snaps and Spotlight videos in high quality. Free Snapchat video downloader tool.",
  keywords: [
    "snapchat video downloader",
    "download snapchat stories",
    "snapchat story saver",
    "save snapchat video",
    "snapchat spotlight downloader",
    "anonymous snapchat viewer",
    "download snaps",
    "save snapchat memories",
    "snapchat video saver app",
    "download public snaps",
    "save snapchat spotlight video"
  ].join(", "),
  openGraph: {
    title: "Snapchat Video Downloader - Save Stories & Spotlight",
    description: "⚡ Download Snapchat videos and stories anonymously!",
    url: "https://30tools.com/snapchat-video-downloader",
    siteName: "30tools",
    type: "website",
  },
  alternates: { canonical: "https://30tools.com/snapchat-video-downloader" },
  robots: { index: true, follow: true }
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
    "name": "Snapchat Video Downloader",
    "alternateName": ["Snap Saver", "Spotlight Downloader"],
    "description": "Free online tool to download Snapchat videos, Stories, and Spotlight content anonymously.",
    "url": "https://30tools.com/snapchat-video-downloader",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "featureList": [
      "Download Snapchat Stories",
      "Save Spotlight Videos",
      "Anonymous Viewing",
      "No Watermark"
    ]
  },
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Download Snapchat Videos",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Copy Link", "text": "Open Snapchat, tap share on the Story/Spotlight, and copy link." },
      { "@type": "HowToStep", "position": 2, "name": "Paste URL", "text": "Paste the link into the Snap Saver tool." },
      { "@type": "HowToStep", "position": 3, "name": "Download", "text": "Save the snap locally." }
    ]
  }
};

export default function SnapchatVideoDownloaderPage() {
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
              <li className="text-foreground font-medium">Snapchat Video Downloader</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Snapchat Video Downloader</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Download Snapchat videos, Stories, and Spotlight content. Save Snaps anonymously to your device in high quality.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>👻 Save Snaps</span><span>🌟 Spotlight</span><span>🕵️ Anonymous</span><span>🆓 100% Free</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <SnapchatDownloader />
          </div>

          {/* Anonymous & Spotlight Deep Dive */}
          <section className="bg-yellow-50 dark:bg-yellow-950/20 p-8 rounded-2xl border border-yellow-100 dark:border-yellow-900/50 mb-16">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-yellow-700 dark:text-yellow-400">Spotlight & Anonymous Saving</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Looking for a <strong>snapchat spotlight downloader</strong>? We support public Spotlight videos and Stories.
                  Save content as an <strong>anonymous snapchat viewer</strong> without notifying the user.
                  Great for archiving memories.
                </p>
                <div className="flex gap-4 text-sm font-medium">
                  <a href="/instagram-story-downloader" className="hover:text-yellow-600 transition-colors">
                    Instagram Story Saver
                  </a>
                  <span>•</span>
                  <a href="/tiktok-downloader" className="hover:text-yellow-600 transition-colors">
                    TikTok Saver
                  </a>
                </div>
              </div>
              <div className="shrink-0 bg-background p-4 rounded-xl shadow-sm border">
                <span className="text-4xl">👻</span>
              </div>
            </div>
          </section>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How to Download Snaps</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Copy Link", desc: "Open Snapchat and copy the link of the Story or Spotlight video." },
                { step: "2", title: "Paste URL", desc: "Paste the link into the downloader tool above." },
                { step: "3", title: "Download", desc: "Click download to save the video to your gallery." }
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
                { href: "/tiktok-downloader", icon: "🎵", title: "TikTok Downloader", desc: "Download TikToks" },
                { href: "/instagram-story-downloader", icon: "📖", title: "IG Story Downloader", desc: "Download IG stories" },
                { href: "/facebook-story-downloader", icon: "📘", title: "FB Story Downloader", desc: "Download FB stories" },
                { href: "/youtube-shorts-downloader", icon: "📹", title: "Shorts Downloader", desc: "Download Shorts" }
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
