import TikTokAudioDownloader from "@/components/tools/downloaders/TikTokAudioDownloader";

export const metadata = {
  title: "TikTok MP3 Converter - Convert TikTok to MP3 Free | 30tools",
  description: "Convert TikTok videos to MP3 audio. Extract music and sounds from TikTok videos easily. Free online TikTok to MP3 converter.",
  keywords: [
    "tiktok mp3 converter",
    "convert tiktok to mp3",
    "tiktok to mp3",
    "tiktok audio extractor",
    "tiktok sound converter",
    "tiktok music converter",
    "mp3 downloader tiktok"
  ].join(", "),
  openGraph: {
    title: "TikTok MP3 Converter - Convert Videos to Audio",
    description: "⚡ Convert TikTok videos to MP3 instantly!",
    url: "https://30tools.com/tiktok-mp3-converter",
    siteName: "30tools",
    type: "website",
  },
  alternates: { canonical: "https://30tools.com/tiktok-audio-downloader" },
  robots: { index: true, follow: true }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function TikTokMP3ConverterPage() {
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
              <li className="text-foreground font-medium">TikTok MP3 Converter</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">TikTok MP3 Converter</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Convert TikTok videos to high-quality MP3 audio files. Extract music, sounds, and voiceovers from any TikTok video instantly.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🔄 Convert to MP3</span><span>🎵 High Quality</span><span>⚡ Instant</span><span>🆓 100% Free</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <TikTokAudioDownloader />
          </div>

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
      <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(5) }} />
    </>
  );
}
