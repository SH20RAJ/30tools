import YouTubeTrendsAnalyzerTool from "@/components/tools/youtube/YouTubeTrendsAnalyzerTool";

export const metadata = {
  title: "YouTube Trending Videos - Explore Trends by Country Free | 30tools",
  description: "Discover trending YouTube videos from any country. Explore what's popular on YouTube right now. Free trending videos tool with country filtering.",
  keywords: [
    "youtube trending",
    "youtube trends",
    "youtube trending videos",
    "youtube popular videos",
    "whats trending on youtube",
    "youtube trending today",
    "youtube trending by country",
    "youtube trending videos today",
    "youtube trending now",
    "youtube popular today",
    "youtube viral videos"
  ].join(", "),

  openGraph: {
    title: "YouTube Trending Videos - Explore Trends",
    description: "⚡ Discover trending YouTube videos from any country!",
    url: "https://30tools.com/youtube-trends",
    siteName: "30tools", type: "website",
    images: [{ url: "/og-images/youtube-trends.jpg", width: 1200, height: 630, alt: "YouTube Trending Videos" }],
  },

  twitter: { card: "summary_large_image", title: "YouTube Trends - Explore Trending", description: "⚡ Discover trending videos!", images: ["/og-images/youtube-trends.jpg"], creator: "@30tools" },
  alternates: { canonical: "https://30tools.com/youtube-trends" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org", "@type": "WebApplication",
    "name": "YouTube Trending Videos",
    "description": "Explore trending YouTube videos from any country.",
    "url": "https://30tools.com/youtube-trends",
    "applicationCategory": ["UtilitiesApplication"],
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.7", "ratingCount": "9876" }
  }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function YouTubeTrendsPage() {
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
              <li className="text-foreground font-medium">YouTube Trends</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">YouTube Trending Videos</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover what's trending on YouTube right now. Explore popular videos from different countries and categories.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🔥 Hot Videos</span><span>🌍 By Country</span><span>🆓 100% Free</span><span>📊 Updated</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <YouTubeTrendsAnalyzerTool />
          </div>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Why Track YouTube Trends?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "💡", title: "Content Ideas", desc: "Get inspiration from what's popular" },
                { icon: "📈", title: "Stay Current", desc: "Know what people are watching now" },
                { icon: "🎯", title: "Market Research", desc: "Understand your audience interests" },
                { icon: "🌍", title: "Global View", desc: "See trends from different countries" },
                { icon: "🔥", title: "Viral Content", desc: "Discover viral videos early" },
                { icon: "📊", title: "Competitor Analysis", desc: "See what works in your niche" },
                { icon: "🎬", title: "Entertainment", desc: "Find popular content to watch" },
                { icon: "📱", title: "Social Sharing", desc: "Find shareable content" }
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
                { q: "How often are trends updated?", a: "YouTube trending videos are updated in real-time by YouTube. Our tool fetches the latest trending data whenever you visit." },
                { q: "Can I see trends from different countries?", a: "Yes! You can filter trending videos by country to see what's popular in different regions around the world." },
                { q: "Is this free?", a: "Yes, our YouTube trends tool is 100% free with no limits." },
                { q: "How does YouTube determine trending?", a: "YouTube's trending algorithm considers view count, view velocity, where views come from, video age, and how the video compares to other recent uploads." }
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
                { href: "/youtube-idea-generator", icon: "💡", title: "Idea Generator", desc: "Get video ideas" },
                { href: "/youtube-analytics", icon: "📊", title: "Video Analytics", desc: "Analyze videos" },
                { href: "/youtube-tag-generator", icon: "🏷️", title: "Tag Generator", desc: "SEO-optimized tags" },
                { href: "/youtube-downloader", icon: "📹", title: "YouTube Downloader", desc: "Download videos" }
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
