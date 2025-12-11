import YouTubeTagExtractor from "@/components/tools/youtube/YouTubeTagExtractor";

export const metadata = {
  title: "YouTube Tag Extractor - Extract Video Tags Free | 30tools",
  description: "Extract tags from any YouTube video for free. See what tags successful videos use for SEO. Analyze competitor tags and improve your video optimization.",
  keywords: [
    "youtube tag extractor",
    "extract youtube tags",
    "youtube tags extractor",
    "youtube video tags",
    "get youtube tags",
    "youtube tag finder",
    "youtube tag viewer",
    "youtube tags checker",
    "youtube tag extractor free",
    "extract tags from youtube video",
    "youtube tag analyzer",
    "youtube video tag extractor"
  ].join(", "),

  openGraph: {
    title: "YouTube Tag Extractor - Extract Video Tags",
    description: "⚡ Extract tags from any YouTube video to analyze competitor SEO!",
    url: "https://30tools.com/youtube-tag-extractor",
    siteName: "30tools", type: "website",
    images: [{ url: "/og-images/youtube-tag-extractor.jpg", width: 1200, height: 630, alt: "YouTube Tag Extractor" }],
  },

  twitter: { card: "summary_large_image", title: "YouTube Tag Extractor - Free", description: "⚡ See what tags successful videos use!", images: ["/og-images/youtube-tag-extractor.jpg"], creator: "@30tools" },
  alternates: { canonical: "https://30tools.com/youtube-tag-extractor" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org", "@type": "WebApplication",
    "name": "YouTube Tag Extractor",
    "description": "Free tool to extract and view tags from any YouTube video.",
    "url": "https://30tools.com/youtube-tag-extractor",
    "applicationCategory": ["UtilitiesApplication"],
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "11234" }
  }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function YouTubeTagExtractorPage() {
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
              <li className="text-foreground font-medium">YouTube Tag Extractor</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">YouTube Tag Extractor</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Extract and view tags from any YouTube video. Analyze competitor tag strategies and improve your video SEO.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🏷️ View Hidden Tags</span><span>🔍 Competitor Analysis</span><span>🆓 100% Free</span><span>📋 Copy All</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <YouTubeTagExtractor />
          </div>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Why Extract YouTube Tags?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🔍", title: "Competitor Research", desc: "See what tags successful videos in your niche use" },
                { icon: "📈", title: "Improve SEO", desc: "Learn effective tagging strategies from top performers" },
                { icon: "🎯", title: "Keyword Ideas", desc: "Discover new keywords for your content" },
                { icon: "📊", title: "Trend Analysis", desc: "Identify trending tags in your niche" },
                { icon: "✨", title: "Optimization", desc: "Optimize your own videos with proven tags" },
                { icon: "💡", title: "Inspiration", desc: "Get ideas for future video topics" },
                { icon: "📋", title: "Copy & Use", desc: "Easily copy tags to use in your videos" },
                { icon: "🆓", title: "Free Tool", desc: "No limits or registration required" }
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How to Extract Tags</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "1️⃣", title: "Paste Video URL", desc: "Enter any YouTube video URL" },
                { step: "2️⃣", title: "Extract Tags", desc: "Click to reveal all video tags" },
                { step: "3️⃣", title: "Copy & Analyze", desc: "Copy tags or analyze the strategy" }
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              {[
                { q: "What are YouTube tags?", a: "Tags are keywords that describe your video's content. They help YouTube understand what your video is about and improve discoverability in search and recommendations." },
                { q: "Can I see tags from any video?", a: "Yes, our tool can extract tags from any public YouTube video. The tags are hidden in the page source but our tool reveals them." },
                { q: "Why aren't some videos showing tags?", a: "Some creators choose not to use tags, or YouTube may have deprecated tags for that video. Tags are optional but recommended for SEO." },
                { q: "Is this free?", a: "Yes, our YouTube tag extractor is 100% free with unlimited use." },
                { q: "How do tags help with SEO?", a: "Tags help YouTube's algorithm understand your content and recommend it to relevant viewers. Using good tags can improve your video's discoverability." }
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
                { href: "/youtube-tag-generator", icon: "🏷️", title: "Tag Generator", desc: "Generate SEO tags" },
                { href: "/youtube-downloader", icon: "📹", title: "YouTube Downloader", desc: "Download videos in HD" },
                { href: "/youtube-thumbnail-downloader", icon: "🖼️", title: "Thumbnail Downloader", desc: "Download HD thumbnails" },
                { href: "/youtube-channel-id-finder", icon: "🔍", title: "Channel ID Finder", desc: "Find channel IDs" }
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
