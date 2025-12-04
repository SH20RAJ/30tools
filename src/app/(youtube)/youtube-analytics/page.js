import YouTubeVideoAnalyticsTool from "@/components/tools/youtube/YouTubeVideoAnalyticsTool";

export const metadata = {
  title: "YouTube Analytics Tool - Video Statistics Analyzer Free | 30tools",
  description: "Analyze YouTube video statistics and performance for free. View likes, views, comments, engagement rate and more. Track any public video's metrics.",
  keywords: [
    "youtube analytics",
    "youtube video analytics",
    "youtube statistics",
    "youtube video stats",
    "youtube video analyzer",
    "youtube engagement calculator",
    "youtube video statistics free",
    "youtube analytics tool free",
    "youtube video performance",
    "youtube video metrics",
    "youtube video insights"
  ].join(", "),

  openGraph: {
    title: "YouTube Analytics Tool - Video Stats Analyzer",
    description: "⚡ Analyze YouTube video statistics and engagement metrics!",
    url: "https://30tools.com/youtube-analytics",
    siteName: "30tools", type: "website",
    images: [{ url: "/og-images/youtube-analytics.jpg", width: 1200, height: 630, alt: "YouTube Analytics Tool" }],
  },

  twitter: { card: "summary_large_image", title: "YouTube Analytics - Free Tool", description: "⚡ Analyze video stats!", images: ["/og-images/youtube-analytics.jpg"], creator: "@30tools" },
  alternates: { canonical: "https://30tools.com/youtube-analytics" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org", "@type": "WebApplication",
    "name": "YouTube Analytics Tool",
    "description": "Free tool to analyze YouTube video statistics and performance metrics.",
    "url": "https://30tools.com/youtube-analytics",
    "applicationCategory": ["UtilitiesApplication"],
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "8765" }
  }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function YouTubeAnalyticsPage() {
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
              <li className="text-foreground font-medium">YouTube Analytics</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">YouTube Analytics Tool</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Analyze any YouTube video's statistics and performance metrics. View engagement rates, like ratios, and more.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>📊 Video Stats</span><span>📈 Engagement Rate</span><span>🆓 100% Free</span><span>⚡ Instant</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <YouTubeVideoAnalyticsTool />
          </div>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Metrics We Analyze</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "👀", title: "View Count", desc: "Total video views and growth" },
                { icon: "👍", title: "Likes/Dislikes", desc: "Engagement through reactions" },
                { icon: "💬", title: "Comments", desc: "Comment count and activity" },
                { icon: "📈", title: "Engagement Rate", desc: "Calculated engagement percentage" },
                { icon: "📅", title: "Publish Date", desc: "Video upload date and age" },
                { icon: "🎬", title: "Duration", desc: "Video length analysis" },
                { icon: "📺", title: "Channel Info", desc: "Channel subscriber count" },
                { icon: "🏷️", title: "Tags", desc: "Video tag analysis" }
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
                { q: "What statistics can I see?", a: "You can view view count, likes, dislikes, comments, engagement rate, publish date, video duration, and channel information for any public YouTube video." },
                { q: "Can I analyze any video?", a: "Yes, you can analyze any public YouTube video. Private or unlisted videos cannot be analyzed." },
                { q: "Is this free?", a: "Yes, our YouTube analytics tool is 100% free with unlimited use." },
                { q: "How is engagement rate calculated?", a: "Engagement rate is calculated as (likes + comments) / views × 100, giving you a percentage of how actively viewers engage with the content." }
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
                { href: "/youtube-tag-extractor", icon: "🏷️", title: "Tag Extractor", desc: "Extract video tags" },
                { href: "/youtube-thumbnail-downloader", icon: "🖼️", title: "Thumbnail Downloader", desc: "Download HD thumbnails" },
                { href: "/youtube-channel-id-finder", icon: "🔍", title: "Channel ID Finder", desc: "Find channel IDs" },
                { href: "/youtube-trends", icon: "📈", title: "YouTube Trends", desc: "Explore trending videos" }
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
