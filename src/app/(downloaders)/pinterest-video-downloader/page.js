import PinterestDownloader from "@/components/tools/downloaders/PinterestDownloader";

export const metadata = {
  title: "Pinterest Video Downloader (2026) - Save Pins Application | 30Tools",
  description: "Download Pinterest videos, GIFs & Images in HD (Updated 2026). Save Pins to your phone or PC. Free, fast & no watermarks.",
  keywords: [
    "pinterest video downloader 2026",
    "download pinterest video",
    "save pinterest gif",
    "pinterest image downloader hd",
    "download pins free",
    "pinterest saver online",
    "pinterest to mp4",
    "updated 2026",
    "pinterest media downloader"
  ].join(", "),
  openGraph: {
    title: "Pinterest Video Downloader (2026) - Save Videos & GIFs",
    description: "⚡ Download Pinterest videos, GIFs & Images in HD quality! Free & unlimited tool (Updated 2026).",
    url: "https://30tools.com/pinterest-video-downloader",
    siteName: "30tools",
    type: "website",
    images: [{
      url: "/og-images/pinterest-downloader.jpg", // Assuming image exists or will differ
      width: 1200,
      height: 630,
      alt: "Pinterest Video Downloader 2026"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinterest Video Downloader (2026) - Free Pin Saver",
    description: "⚡ Save Pinterest videos & GIFs in HD. Updated 2026!",
    images: ["/og-images/pinterest-downloader.jpg"], // Consistency
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

export default function PinterestVideoDownloaderPage() {
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
              <li className="text-foreground font-medium">Pinterest Video Downloader</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Pinterest Video Downloader</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Download videos, GIFs, and images from Pinterest in high quality. Save creative ideas and inspiration directly to your device.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>📌 Save Pins</span><span>🎥 Videos & GIFs</span><span>🖼️ Images</span><span>🆓 100% Free</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <PinterestDownloader />
          </div>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How to Download Pinterest Videos</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Copy Link", desc: "Find the Pinterest pin you want to save and copy its link." },
                { step: "2", title: "Paste URL", desc: "Paste the link into the downloader box above." },
                { step: "3", title: "Download", desc: "Click download and save the video or image." }
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
                { href: "/instagram-downloader", icon: "📸", title: "Instagram Downloader", desc: "Download IG content" },
                { href: "/tiktok-downloader", icon: "🎵", title: "TikTok Downloader", desc: "Download TikToks" },
                { href: "/twitter-downloader", icon: "🐦", title: "Twitter Downloader", desc: "Download Tweets" },
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
