import TwitterDownloader from "@/components/tools/downloaders/TwitterDownloader";

export const metadata = {
  title: "Save X Videos - Twitter Video Downloader Online (2026) | 30Tools",
  description:
    "Best free online twitter video downloader to save X videos and GIFs in HD quality. fast, secure, and no registration required (Updated 2026).",
  keywords: [
    "save x videos", "twitter video downloader 2026", "download twitter videos online", "x video saver",
    "save twitter clips hd", "twitter to mp4 free", "rip x video", "save tweet media"
  ].join(", "),
  openGraph: {
    title: "Twitter Video Saver - Download X Videos",
    description: "⚡ Save Twitter (X) videos instantly!",
    url: "https://30tools.com/twitter-video-downloader",
    siteName: "30tools",
    type: "website",
  },
  alternates: { canonical: "https://30tools.com/twitter-downloader" },
  robots: { index: true, follow: true }
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
