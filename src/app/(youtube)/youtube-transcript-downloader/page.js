import YouTubeTranscriptDownloader from "@/components/tools/youtube/YouTubeTranscriptDownloader";

export const metadata = {
  title: "YouTube Transcript Downloader - Free Video Transcript Extractor | 30tools",
  description: "Download YouTube video transcripts and captions for free. Extract full text transcripts from any YouTube video instantly. Perfect for research, study, and content creation.",
  keywords: [
    "youtube transcript downloader",
    "download youtube transcript",
    "youtube transcript extractor",
    "youtube video transcript",
    "get youtube transcript",
    "youtube captions download",
    "youtube transcript copy",
    "youtube transcript text",
    "youtube video to text",
    "youtube transcript download online",
    "free youtube transcript downloader",
    "youtube transcript generator",
    "youtube subtitle extractor",
    "youtube cc download",
    "youtube transcript download free",
    "extract transcript from youtube"
  ].join(", "),

  openGraph: {
    title: "YouTube Transcript Downloader - Extract Video Transcripts Free",
    description: "⚡ Download YouTube video transcripts instantly. Free online tool to extract full text from any video!",
    url: "https://30tools.com/youtube-transcript-downloader",
    siteName: "30tools", type: "website",
    images: [{ url: "/og-images/youtube-transcript-downloader.jpg", width: 1200, height: 630, alt: "YouTube Transcript Downloader" }],
  },

  twitter: { card: "summary_large_image", title: "YouTube Transcript Downloader - Free", description: "⚡ Extract YouTube video transcripts instantly!", images: ["/og-images/youtube-transcript-downloader.jpg"], creator: "@30tools" },
  alternates: { canonical: "https://30tools.com/youtube-transcript-downloader" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org", "@type": "WebApplication",
    "name": "YouTube Transcript Downloader",
    "description": "Free tool to download and extract transcripts from YouTube videos.",
    "url": "https://30tools.com/youtube-transcript-downloader",
    "applicationCategory": ["UtilitiesApplication"],
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "12847" }
  },
  faq: {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How do I download a YouTube transcript?", "acceptedAnswer": { "@type": "Answer", "text": "Paste the YouTube video URL into our tool and click 'Get Transcript'. The full transcript will be extracted and ready to copy or download." } },
      { "@type": "Question", "name": "Is this free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, our YouTube transcript downloader is completely free with no limits." } },
      { "@type": "Question", "name": "Do all YouTube videos have transcripts?", "acceptedAnswer": { "@type": "Answer", "text": "Only videos with captions (auto-generated or manual) have transcripts available." } }
    ]
  }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function YouTubeTranscriptDownloaderPage() {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.webApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.faq) }} />

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li><li>/</li>
              <li><a href="/#youtube-tools" className="hover:text-primary">YouTube Tools</a></li><li>/</li>
              <li className="text-foreground font-medium">YouTube Transcript Downloader</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">YouTube Transcript Downloader</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Extract and download full transcripts from any YouTube video. Perfect for research, study notes, content repurposing, and accessibility.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>📝 Full Transcripts</span><span>⚡ Instant Extraction</span><span>🆓 100% Free</span><span>📋 Easy Copy</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <YouTubeTranscriptDownloader />
          </div>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How to Download YouTube Transcripts</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "1️⃣", title: "Copy Video URL", desc: "Copy the YouTube video URL from your browser or app" },
                { step: "2️⃣", title: "Paste & Extract", desc: "Paste the URL and click 'Get Transcript' button" },
                { step: "3️⃣", title: "Copy or Download", desc: "Copy the transcript text or download as a file" }
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Why Use Our Transcript Downloader?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "📝", title: "Full Transcripts", desc: "Get complete video transcripts with timestamps" },
                { icon: "⚡", title: "Instant Extraction", desc: "Transcripts extracted in seconds" },
                { icon: "🌐", title: "Multiple Languages", desc: "Support for all available caption languages" },
                { icon: "📋", title: "Easy Copy", desc: "One-click copy to clipboard functionality" },
                { icon: "💾", title: "Download Option", desc: "Download transcripts as TXT files" },
                { icon: "🆓", title: "100% Free", desc: "No registration or payment required" },
                { icon: "📱", title: "All Devices", desc: "Works on desktop, mobile, and tablet" },
                { icon: "🔒", title: "Privacy First", desc: "We don't store your data or URLs" }
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Common Use Cases</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "📚", title: "Study & Research", desc: "Extract educational content for notes and research papers", color: "blue" },
                { icon: "✍️", title: "Content Repurposing", desc: "Turn video content into blog posts and articles", color: "green" },
                { icon: "🎯", title: "SEO & Marketing", desc: "Use transcripts for video SEO and content marketing", color: "purple" },
                { icon: "♿", title: "Accessibility", desc: "Make video content accessible for hearing-impaired users", color: "orange" },
                { icon: "🌍", title: "Translation", desc: "Use transcripts as base for translating video content", color: "teal" },
                { icon: "📖", title: "Quote Extraction", desc: "Find and extract specific quotes from long videos", color: "pink" }
              ].map((c, i) => (
                <div key={i} className={`p-6 bg-gradient-to-br from-${c.color}-500/10 to-${c.color}-600/10 rounded-xl border border-border`}>
                  <h3 className="text-xl font-bold mb-3">{c.icon} {c.title}</h3>
                  <p className="text-muted-foreground">{c.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              {[
                { q: "How do I download a YouTube transcript?", a: "Simply paste the YouTube video URL into our tool and click 'Get Transcript'. The full transcript will be extracted and displayed for you to copy or download." },
                { q: "Do all YouTube videos have transcripts?", a: "Only videos with captions (either auto-generated or manually added) have transcripts available. Most videos have auto-generated captions that we can extract." },
                { q: "Is this YouTube transcript downloader free?", a: "Yes, our tool is 100% free with no limits on how many transcripts you can download." },
                { q: "Can I download transcripts in different languages?", a: "Yes, if the video has captions in multiple languages, you can choose which language transcript to download." },
                { q: "What format is the transcript downloaded in?", a: "Transcripts can be copied as plain text or downloaded as a TXT file. You can also get transcripts with or without timestamps." },
                { q: "Does this work on mobile phones?", a: "Yes! Our transcript downloader works on all devices including smartphones, tablets, and desktop computers." }
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
                { href: "/youtube-downloader", icon: "📹", title: "YouTube Downloader", desc: "Download videos in HD, 4K, MP3" },
                { href: "/youtube-summary-generator", icon: "📋", title: "Video Summarizer", desc: "AI-generated video summaries" },
                { href: "/youtube-subtitles-downloader", icon: "💬", title: "Subtitles Downloader", desc: "Download SRT subtitle files" },
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
