import YouTubeTimestampGenerator from "@/components/tools/youtube/YouTubeTimestampGenerator";

export const metadata = {
  title: "YouTube Timestamp Generator - Auto Chapter Timestamps Free | 30tools",
  description: "Generate YouTube timestamps and chapters automatically. Create clickable timestamp links for video navigation. Free AI-powered timestamp generator for content creators.",
  keywords: [
    "youtube timestamp generator",
    "youtube chapters generator",
    "youtube timestamp maker",
    "video timestamp generator",
    "youtube chapter timestamps",
    "auto timestamp generator",
    "youtube timestamp creator",
    "video chapters generator",
    "youtube timestamp tool",
    "create youtube timestamps",
    "youtube video timestamps",
    "youtube timestamp generator free",
    "automatic timestamp generator",
    "youtube chapters maker",
    "youtube timestamp generator ai"
  ].join(", "),

  openGraph: {
    title: "YouTube Timestamp Generator - Auto Chapter Timestamps",
    description: "⚡ Generate YouTube timestamps and chapters automatically. Free tool for content creators!",
    url: "https://30tools.com/youtube-timestamp-generator",
    siteName: "30tools", type: "website",
    images: [{ url: "/og-images/youtube-timestamp-generator.jpg", width: 1200, height: 630, alt: "YouTube Timestamp Generator" }],
  },

  twitter: { card: "summary_large_image", title: "YouTube Timestamp Generator - Free", description: "⚡ Auto-generate YouTube timestamps and chapters!", images: ["/og-images/youtube-timestamp-generator.jpg"], creator: "@30tools" },
  alternates: { canonical: "https://30tools.com/youtube-timestamp-generator" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org", "@type": "WebApplication",
    "name": "YouTube Timestamp Generator",
    "description": "AI-powered tool to generate timestamps and chapters for YouTube videos.",
    "url": "https://30tools.com/youtube-timestamp-generator",
    "applicationCategory": ["UtilitiesApplication"],
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "9847" }
  }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function YouTubeTimestampGeneratorPage() {
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
              <li className="text-foreground font-medium">YouTube Timestamp Generator</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">YouTube Timestamp Generator</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Automatically generate YouTube timestamps and chapters for your videos. Improve viewer experience with clickable navigation points.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>⏱️ Auto Timestamps</span><span>📑 Video Chapters</span><span>🆓 100% Free</span><span>🤖 AI-Powered</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <YouTubeTimestampGenerator />
          </div>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How to Generate YouTube Timestamps</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "1️⃣", title: "Paste Video URL", desc: "Enter your YouTube video URL in the tool" },
                { step: "2️⃣", title: "AI Analysis", desc: "Our AI analyzes the video and identifies key sections" },
                { step: "3️⃣", title: "Get Timestamps", desc: "Copy formatted timestamps to your video description" }
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Benefits of YouTube Timestamps</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "📈", title: "Better SEO", desc: "Timestamps help YouTube understand your content better" },
                { icon: "👀", title: "More Views", desc: "Easier navigation keeps viewers watching longer" },
                { icon: "⏱️", title: "Save Time", desc: "Viewers can jump to sections they're interested in" },
                { icon: "📑", title: "Video Chapters", desc: "Timestamps create clickable chapters in video player" },
                { icon: "🎯", title: "User Experience", desc: "Professional videos have proper timestamps" },
                { icon: "🔍", title: "Discoverability", desc: "Chapters appear in Google search results" },
                { icon: "♿", title: "Accessibility", desc: "Makes content more accessible for all users" },
                { icon: "🤖", title: "AI-Powered", desc: "Automatic detection of topic changes" }
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
                { q: "What are YouTube timestamps?", a: "Timestamps are specific time markers (like 0:00, 1:30, 5:45) in video descriptions that create clickable chapter links, allowing viewers to jump to specific parts of your video." },
                { q: "How do I add timestamps to my YouTube video?", a: "Copy the generated timestamps and paste them into your video's description. Make sure the first timestamp starts at 0:00 and you have at least 3 timestamps for chapters to appear." },
                { q: "Is this timestamp generator free?", a: "Yes, our YouTube timestamp generator is 100% free with unlimited usage." },
                { q: "Do timestamps help with YouTube SEO?", a: "Yes! Timestamps improve watch time by helping viewers navigate, and they create video chapters that can appear in search results, improving discoverability." },
                { q: "What's the minimum timestamps needed for chapters?", a: "YouTube requires at least 3 timestamps with the first one at 0:00, and each chapter must be at least 10 seconds long." },
                { q: "Can I edit the generated timestamps?", a: "Absolutely! The generated timestamps are suggestions. You can edit them to better match your video's actual content sections." }
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
                { href: "/youtube-summary-generator", icon: "📋", title: "Video Summarizer", desc: "AI-generated video summaries" },
                { href: "/youtube-transcript-downloader", icon: "📝", title: "Transcript Downloader", desc: "Download video transcripts" },
                { href: "/youtube-tag-generator", icon: "🏷️", title: "Tag Generator", desc: "SEO-optimized video tags" },
                { href: "/youtube-idea-generator", icon: "💡", title: "Idea Generator", desc: "AI video ideas for creators" }
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
