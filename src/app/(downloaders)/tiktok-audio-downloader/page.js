import TikTokAudioDownloader from "@/components/tools/downloaders/TikTokAudioDownloader";

export const metadata = {
  title: "TikTok to MP3 Converter - Free TikTok MP3 Downloader | 30Tools",
  description: "Convert TikTok to MP3 online for free. Extract high-quality music and sounds from any TikTok video instantly. Simple, fast, and no registration required.",
  keywords: [
    "tiktok to mp3 converter", "convert tiktok to mp3", "tiktok mp3 downloader", "tiktok audio extractor",
    "tiktok sound converter", "tiktok music converter", "save tiktok sounds mp3", "download musically to mp3"
  ].join(", "),
  openGraph: {
    title: "TikTok Audio Downloader (2026) - Save TikTok Sounds as MP3",
    description: "⚡ Download TikTok audio & music in MP3 format instantly! Free quality converter (Updated 2026).",
    url: "https://30tools.com/tiktok-audio-downloader",
    siteName: "30tools",
    type: "website",
    images: [{
      url: "/og-images/tiktok-audio-downloader.jpg", // Assuming image exists or will differ
      width: 1200,
      height: 630,
      alt: "TikTok Audio Downloader 2026"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "TikTok Audio Downloader (2026) - Free MP3",
    description: "⚡ Extract & Save TikTok sounds in MP3. Updated 2026!",
    images: ["/og-images/tiktok-audio-downloader.jpg"],
    creator: "@30tools"
  },
  alternates: { canonical: "https://30tools.com/tiktok-audio-downloader" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function TikTokAudioDownloaderPage() {
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
              <li className="text-foreground font-medium">TikTok Audio Downloader</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">TikTok Audio Downloader</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Extract and download audio from TikTok videos. Save trending TikTok sounds and music as MP3 files to your device.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🎵 Extract Audio</span><span>🎧 MP3 Format</span><span>🎼 Trending Sounds</span><span>🆓 100% Free</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <TikTokAudioDownloader />
          </div>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How to Download TikTok Sounds</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Copy Link", desc: "Find the TikTok video with the sound you want and copy its link." },
                { step: "2", title: "Paste URL", desc: "Paste the link into the audio downloader above." },
                { step: "3", title: "Download MP3", desc: "Click download to save the audio as an MP3 file." }
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
                { href: "/tiktok-downloader", icon: "🎵", title: "TikTok Downloader", desc: "Download Videos" },
                { href: "/soundcloud-downloader", icon: "☁️", title: "SoundCloud Downloader", desc: "Download Music" },
                { href: "/spotify-downloader", icon: "🎧", title: "Spotify Downloader", desc: "Download Songs" },
                { href: "/youtube-downloader", icon: "📹", title: "YouTube Downloader", desc: "Download Videos" }
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
      <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({}); `.repeat(5) }} />
    </>
  );
}
