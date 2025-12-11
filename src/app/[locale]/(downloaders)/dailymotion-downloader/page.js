import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
  title: "Dailymotion Video Downloader - Save Dailymotion Videos | 30tools",
  description: "Download Dailymotion videos in HD quality (1080p, 4K). Save Dailymotion videos to MP4 format for free. Online Dailymotion downloader.",
  keywords: [
    "dailymotion video downloader",
    "download dailymotion video",
    "save dailymotion video",
    "dailymotion downloader online",
    "dailymotion to mp4",
    "download dailymotion hd",
    "dailymotion video saver"
  ].join(", "),
  openGraph: {
    title: "Dailymotion Video Downloader - Free HD Download",
    description: "⚡ Download Dailymotion videos in HD quality!",
    url: "https://30tools.com/dailymotion-downloader",
    siteName: "30tools",
    type: "website",
  },
  alternates: { canonical: "https://30tools.com/dailymotion-downloader" },
  robots: { index: true, follow: true }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function DailymotionDownloaderPage() {
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
              <li className="text-foreground font-medium">Dailymotion Downloader</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Dailymotion Video Downloader</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Download Dailymotion videos in high quality (HD, 4K). Save your favorite videos from Dailymotion to watch offline.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🎥 Save Videos</span><span>📺 HD Quality</span><span>⚡ Fast Speed</span><span>🆓 100% Free</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <UniversalVideoDownloader />
          </div>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How to Download Dailymotion Videos</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Copy Link", desc: "Go to Dailymotion, find the video, and copy its URL." },
                { step: "2", title: "Paste URL", desc: "Paste the link into the downloader box above." },
                { step: "3", title: "Download", desc: "Click download and save the video in your preferred quality." }
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
                { href: "/vimeo-downloader", icon: "📺", title: "Vimeo Downloader", desc: "Download Vimeo videos" },
                { href: "/youtube-downloader", icon: "📹", title: "YouTube Downloader", desc: "Download YT videos" },
                { href: "/facebook-downloader", icon: "📘", title: "Facebook Downloader", desc: "Download FB videos" },
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
