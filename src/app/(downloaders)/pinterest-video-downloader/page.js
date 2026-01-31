import PinterestDownloader from "@/components/tools/downloaders/PinterestDownloader";

export const metadata = {
  title: "Pinterest Video Downloader - Free Online Tool | 30tools",
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
    "pinterest media downloader",
    "save pinterest ideas",
    "pinterest photo saver",
    "download pinterest story"
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

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Pinterest Video Downloader",
    "alternateName": ["Pin Saver", "Pinterest Image Downloader"],
    "description": "Free online tool to download videos, GIFs and Images from Pinterest in HD.",
    "url": "https://30tools.com/pinterest-video-downloader",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "featureList": [
      "Download Pinterest Videos",
      "Save Pinterest GIFs",
      "Download HD Images",
      "No registration required"
    ]
  },
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Download from Pinterest",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Copy Link", "text": "Open the Pin and copy its link." },
      { "@type": "HowToStep", "position": 2, "name": "Paste URL", "text": "Paste the link into the 30Tools Pinterest Downloader." },
      { "@type": "HowToStep", "position": 3, "name": "Download", "text": "Choose to save the Video, GIF, or Image." }
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

          {/* Creative Assets Deep Dive */}
          <section className="bg-red-50 dark:bg-red-950/20 p-8 rounded-2xl border border-red-100 dark:border-red-900/50 mb-16">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-400">Save Inspiration High-Res</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Pinterest is the home of aesthetic videos and mood boards. Our tool ensures you get the
                  <strong>pinterest image downloader hd</strong> experience. No more pixelated screenshots.
                  Perfect for designers and content creators.
                </p>
                <div className="flex gap-4 text-sm font-medium">
                  <a href="/instagram-downloader" className="hover:text-red-600 transition-colors">
                    Need Instagram Inspo?
                  </a>
                  <span>•</span>
                  <a href="/twitter-video-downloader" className="hover:text-red-600 transition-colors">
                    Save Twitter Art
                  </a>
                </div>
              </div>
              <div className="shrink-0 bg-background p-4 rounded-xl shadow-sm border">
                <span className="text-4xl">🎨</span>
              </div>
            </div>
          </section>

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
