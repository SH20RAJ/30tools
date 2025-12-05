import InstagramDownloader from "@/components/tools/downloaders/InstagramDownloader";

export const metadata = {
  title: "Instagram Downloader - Download Video, Photo, Reels, Stories | 30tools",
  description: "Download Instagram videos, photos, reels, stories, and IGTV. Save content from Instagram in high quality (HD/4K). Free online IG downloader.",
  keywords: [
    "instagram downloader",
    "instagram video downloader",
    "instagram photo downloader",
    "instagram reels downloader",
    "instagram story saver",
    "ig downloader",
    "download instagram content"
  ].join(", "),
  openGraph: {
    title: "Instagram Downloader - Save Videos, Reels & Stories",
    description: "⚡ Download Instagram content in HD quality!",
    url: "https://30tools.com/instagram-downloader",
    siteName: "30tools",
    type: "website",
  },
  alternates: { canonical: "https://30tools.com/instagram-downloader" },
  robots: { index: true, follow: true }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function InstagramDownloaderPage() {
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
              <li className="text-foreground font-medium">Instagram Downloader</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Instagram Downloader</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              The ultimate tool to download Instagram videos, photos, Reels, Stories, and IGTV. Save high-quality content directly to your device.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>📸 Photos</span><span>🎥 Videos</span><span>🎞️ Reels</span><span>📖 Stories</span><span>🆓 100% Free</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <InstagramDownloader />
          </div>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Supported Content</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🎥", title: "Videos", desc: "Download IG videos in HD" },
                { icon: "📸", title: "Photos", desc: "Save single or carousel photos" },
                { icon: "🎞️", title: "Reels", desc: "Download Instagram Reels" },
                { icon: "📖", title: "Stories", desc: "Save Stories anonymously" },
                { icon: "📺", title: "IGTV", desc: "Download long IGTV videos" },
                { icon: "👤", title: "Profile Pic", desc: "View & download DPs" }
              ].map((f, i) => (
                <div key={i} className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
                  <span className="text-4xl mb-4 block">{f.icon}</span>
                  <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Related Tools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/instagram-reel-downloader", icon: "🎞️", title: "Reels Downloader", desc: "Download Reels" },
                { href: "/instagram-story-downloader", icon: "📖", title: "Story Downloader", desc: "Download Stories" },
                { href: "/instagram-dp-downloader", icon: "👤", title: "DP Downloader", desc: "Download Profile Pics" },
                { href: "/facebook-downloader", icon: "📘", title: "Facebook Downloader", desc: "Download FB videos" }
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
