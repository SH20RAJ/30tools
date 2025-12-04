import YouTubeSubtitlesDownloader from "@/components/tools/youtube/YouTubeSubtitlesDownloader";

export const metadata = {
  title: "YouTube Subtitles Downloader - Download SRT Captions Free | 30tools",
  description: "Download YouTube subtitles and captions in SRT, TXT format for free. Extract closed captions from any YouTube video. Multiple language support.",
  keywords: [
    "youtube subtitles downloader",
    "download youtube subtitles",
    "youtube subtitles download",
    "youtube captions downloader",
    "download youtube captions",
    "youtube srt downloader",
    "youtube cc download",
    "youtube closed captions download",
    "youtube subtitles download srt",
    "youtube subtitle extractor",
    "download youtube subtitles free",
    "youtube subtitles download online",
    "youtube captions download free"
  ].join(", "),

  openGraph: {
    title: "YouTube Subtitles Downloader - Download SRT Free",
    description: "⚡ Download YouTube subtitles and captions in SRT format instantly!",
    url: "https://30tools.com/youtube-subtitles-downloader",
    siteName: "30tools", type: "website",
    images: [{ url: "/og-images/youtube-subtitles-downloader.jpg", width: 1200, height: 630, alt: "YouTube Subtitles Downloader" }],
  },

  twitter: { card: "summary_large_image", title: "YouTube Subtitles Downloader - Free", description: "⚡ Download YouTube captions in SRT format!", images: ["/og-images/youtube-subtitles-downloader.jpg"], creator: "@30tools" },
  alternates: { canonical: "https://30tools.com/youtube-subtitles-downloader" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org", "@type": "WebApplication",
    "name": "YouTube Subtitles Downloader",
    "description": "Free tool to download YouTube subtitles and captions in SRT format.",
    "url": "https://30tools.com/youtube-subtitles-downloader",
    "applicationCategory": ["UtilitiesApplication"],
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "9876" }
  }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function YouTubeSubtitlesDownloaderPage() {
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
              <li className="text-foreground font-medium">YouTube Subtitles Downloader</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">YouTube Subtitles Downloader</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Download YouTube subtitles and closed captions in SRT or TXT format. Support for multiple languages and auto-generated captions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>💬 SRT Format</span><span>🌍 Multi-Language</span><span>🆓 100% Free</span><span>⚡ Instant Download</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <YouTubeSubtitlesDownloader />
          </div>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How to Download Subtitles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "1️⃣", title: "Paste Video URL", desc: "Enter the YouTube video URL in the tool" },
                { step: "2️⃣", title: "Select Language", desc: "Choose your preferred subtitle language" },
                { step: "3️⃣", title: "Download", desc: "Download subtitles in SRT or TXT format" }
              ].map((s, i) => (
                <div key={i} className="text-center p-6 bg-card rounded-xl border border-border">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-3xl">{s.step}</span></div>
                  <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Why Download YouTube Subtitles?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🎬", title: "Video Editing", desc: "Import subtitles into your editing software" },
                { icon: "🌍", title: "Translation", desc: "Use as base for translating to other languages" },
                { icon: "📚", title: "Study", desc: "Review educational content with text" },
                { icon: "♿", title: "Accessibility", desc: "Make content accessible offline" },
                { icon: "📝", title: "Transcription", desc: "Get text version of video content" },
                { icon: "🔍", title: "Research", desc: "Search and analyze video content" },
                { icon: "📖", title: "Reading", desc: "Read captions at your own pace" },
                { icon: "🗣️", title: "Language Learning", desc: "Practice foreign languages" }
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
                { q: "How do I download YouTube subtitles?", a: "Paste the video URL in our tool, select your preferred language if multiple are available, then download the subtitles in SRT or TXT format." },
                { q: "What's the difference between SRT and TXT?", a: "SRT files include timestamps and are used in video editing software. TXT files contain just the text without timing information." },
                { q: "Can I download auto-generated captions?", a: "Yes, our tool supports both manually uploaded subtitles and YouTube's auto-generated captions." },
                { q: "Are subtitles available in multiple languages?", a: "If the video has subtitles in multiple languages, you can choose which language to download." },
                { q: "Is this tool free?", a: "Yes, our YouTube subtitles downloader is 100% free with no limits." }
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
                { href: "/youtube-transcript-downloader", icon: "📝", title: "Transcript Downloader", desc: "Download full transcripts" },
                { href: "/youtube-downloader", icon: "📹", title: "YouTube Downloader", desc: "Download videos in HD" },
                { href: "/youtube-summary-generator", icon: "📋", title: "Video Summarizer", desc: "AI video summaries" },
                { href: "/youtube-thumbnail-downloader", icon: "🖼️", title: "Thumbnail Downloader", desc: "Download HD thumbnails" }
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
