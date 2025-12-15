import YouTubePackDownloader from "@/components/tools/youtube/YouTubePackDownloader";

export const metadata = {
  title: "YouTube Pack Downloader - Download Multiple Videos Free | 30tools",
  description: "Download multiple YouTube videos at once. Batch download playlist videos, channel content, and more. Free bulk YouTube video downloader.",
  keywords: [
    "youtube pack downloader",
    "youtube batch downloader",
    "download multiple youtube videos",
    "youtube playlist downloader",
    "youtube bulk download",
    "download youtube playlist",
    "youtube video pack download",
    "mass youtube downloader",
    "youtube batch download free",
    "download entire youtube playlist"
  ].join(", "),

  openGraph: {
    title: "YouTube Pack Downloader - Batch Download Videos",
    description: "⚡ Download multiple YouTube videos at once!",
    url: "https://30tools.com/youtube-pack-downloader",
    siteName: "30tools", type: "website",
    images: [{ url: "/og-images/youtube-pack-downloader.jpg", width: 1200, height: 630, alt: "YouTube Pack Downloader" }],
  },

  twitter: { card: "summary_large_image", title: "YouTube Pack Downloader - Free", description: "⚡ Batch download videos!", images: ["/og-images/youtube-pack-downloader.jpg"], creator: "@30tools" },
  alternates: { canonical: "https://30tools.com/youtube-pack-downloader" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org", "@type": "WebApplication",
    "name": "YouTube Pack Downloader",
    "description": "Free tool to download multiple YouTube videos at once.",
    "url": "https://30tools.com/youtube-pack-downloader",
    "applicationCategory": ["MultimediaApplication"],
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.7", "ratingCount": "5678" }
  }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function YouTubePackDownloaderPage() {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.webApp) }} />

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li><li>/</li>
              <li><a href="/#youtube-tools" className="hover:text-primary">YouTube Tools</a></li><li>/</li>
              <li className="text-foreground font-medium">YouTube Pack Downloader</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">YouTube Pack Downloader</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Download multiple YouTube videos at once. Perfect for downloading playlists, channel content, and video collections.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>📦 Batch Download</span><span>📋 Playlists</span><span>🆓 100% Free</span><span>⚡ Fast</span>
            </div>
          </div>

          <AdUnit />

          <div className="flex justify-center mb-8">
            <a
              href="https://apify.com/express_kingfisher/youtube-video-audio-downloader"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 hover:bg-muted border border-border/50 text-sm transition-colors group"
            >
              <span className="text-muted-foreground">Looking for a Developer API?</span>
              <span className="font-medium text-primary group-hover:underline decoration-primary/50 underline-offset-4">Check out Universal YouTube Downloader on Apify →</span>
            </a>
          </div>
          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <YouTubePackDownloader />
          </div>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "📦", title: "Batch Download", desc: "Download multiple videos at once" },
                { icon: "📋", title: "Playlist Support", desc: "Download entire playlists easily" },
                { icon: "🎬", title: "Multiple Formats", desc: "Choose MP4, MP3, and more" },
                { icon: "⚡", title: "Fast Downloads", desc: "Optimized for speed" },
                { icon: "📱", title: "All Devices", desc: "Works on any device" },
                { icon: "🆓", title: "Free Forever", desc: "No limits or charges" },
                { icon: "🔒", title: "Secure", desc: "Safe and private downloads" },
                { icon: "🎯", title: "Quality Options", desc: "HD, Full HD, 4K available" }
              ].map((f, i) => (
                <div key={i} className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
                  <span className="text-4xl mb-4 block">{f.icon}</span>
                  <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              {[
                { q: "How many videos can I download at once?", a: "You can add multiple video URLs and download them in a batch. There's no strict limit on the number of videos." },
                { q: "Can I download YouTube playlists?", a: "Yes! Just paste the playlist URL and we'll extract all video URLs for batch downloading." },
                { q: "Is this free?", a: "Yes, our YouTube pack downloader is 100% free with no limits." },
                { q: "What quality options are available?", a: "You can choose from various quality options including HD, Full HD, and 4K when available." }
              ].map((faq, i) => (
                <details key={i} className="bg-card rounded-xl border border-border p-4 group">
                  <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                    {faq.q}<span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Related YouTube Tools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/youtube-downloader", icon: "📹", title: "YouTube Downloader", desc: "Single video downloads" },
                { href: "/youtube-shorts-downloader", icon: "📱", title: "Shorts Downloader", desc: "Download Shorts" },
                { href: "/youtube-thumbnail-downloader", icon: "🖼️", title: "Thumbnail Downloader", desc: "Download thumbnails" },
                { href: "/youtube-transcript-downloader", icon: "📝", title: "Transcript Downloader", desc: "Download transcripts" }
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

      <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(7) }} />
    </>
  );
}
