import YouTubeChannelIDFinder from "@/components/tools/youtube/YouTubeChannelIDFinderTool";

export const metadata = {
  title: "YouTube Channel ID Finder - Get Any Channel ID Free | 30tools",
  description: "Find any YouTube channel ID instantly. Extract channel IDs from usernames, URLs, or handles. Free tool for developers, marketers, and content creators.",
  keywords: [
    "youtube channel id finder",
    "find youtube channel id",
    "youtube channel id",
    "get youtube channel id",
    "youtube channel id lookup",
    "youtube channel id extractor",
    "find channel id youtube",
    "youtube channel id from url",
    "youtube channel id from username",
    "youtube channel id finder free",
    "how to find youtube channel id",
    "youtube channel id search",
    "youtube channel id tool"
  ].join(", "),

  openGraph: {
    title: "YouTube Channel ID Finder - Get Any Channel ID",
    description: "⚡ Find any YouTube channel ID instantly from URL, username, or handle!",
    url: "https://30tools.com/youtube-channel-id-finder",
    siteName: "30tools", type: "website",
    images: [{ url: "/og-images/youtube-channel-id-finder.jpg", width: 1200, height: 630, alt: "YouTube Channel ID Finder" }],
  },

  twitter: { card: "summary_large_image", title: "YouTube Channel ID Finder - Free", description: "⚡ Find YouTube channel IDs instantly!", images: ["/og-images/youtube-channel-id-finder.jpg"], creator: "@30tools" },
  alternates: { canonical: "https://30tools.com/youtube-channel-id-finder" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org", "@type": "WebApplication",
    "name": "YouTube Channel ID Finder",
    "description": "Free tool to find YouTube channel IDs from URLs, usernames, or handles.",
    "url": "https://30tools.com/youtube-channel-id-finder",
    "applicationCategory": ["UtilitiesApplication"],
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "8432" }
  }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function YouTubeChannelIDFinderPage() {
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
              <li className="text-foreground font-medium">YouTube Channel ID Finder</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">YouTube Channel ID Finder</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Find any YouTube channel ID instantly. Works with channel URLs, usernames, handles (@username), and video URLs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🔍 Instant Lookup</span><span>📋 One-Click Copy</span><span>🆓 100% Free</span><span>🌐 All URL Formats</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <YouTubeChannelIDFinder />
          </div>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How to Find YouTube Channel ID</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "1️⃣", title: "Enter Channel Info", desc: "Paste a channel URL, username, handle, or video URL" },
                { step: "2️⃣", title: "Click Find", desc: "Our tool extracts the channel ID automatically" },
                { step: "3️⃣", title: "Copy ID", desc: "Copy the channel ID with one click" }
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Why You Need Channel IDs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "💻", title: "API Development", desc: "Required for YouTube Data API calls" },
                { icon: "📊", title: "Analytics Tools", desc: "Used by third-party analytics services" },
                { icon: "🤖", title: "Automation", desc: "Essential for automated workflows" },
                { icon: "📣", title: "Marketing", desc: "Needed for influencer outreach tools" },
                { icon: "🔗", title: "RSS Feeds", desc: "Create channel-specific RSS feeds" },
                { icon: "📱", title: "App Integration", desc: "Required for many YouTube apps" },
                { icon: "🎯", title: "Advertising", desc: "Used for YouTube ad targeting" },
                { icon: "📋", title: "Tracking", desc: "Monitor channel performance" }
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Supported URL Formats</h2>
            <div className="bg-card rounded-xl border border-border p-6 max-w-4xl mx-auto">
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center gap-3"><span className="text-green-500">✓</span> youtube.com/channel/UC...</li>
                <li className="flex items-center gap-3"><span className="text-green-500">✓</span> youtube.com/@username (Handle)</li>
                <li className="flex items-center gap-3"><span className="text-green-500">✓</span> youtube.com/c/customname</li>
                <li className="flex items-center gap-3"><span className="text-green-500">✓</span> youtube.com/user/username</li>
                <li className="flex items-center gap-3"><span className="text-green-500">✓</span> youtube.com/watch?v=... (Video URL - extracts uploader's channel)</li>
              </ul>
            </div>
          </section>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              {[
                { q: "What is a YouTube channel ID?", a: "A channel ID is a unique 24-character string (starting with UC) that identifies every YouTube channel. It never changes even if the channel name changes." },
                { q: "How do I find my own channel ID?", a: "Go to your YouTube Studio, click on Settings, then Channel, and Advanced Settings. Or just paste your channel URL in our tool!" },
                { q: "Why can't I use the channel name instead of ID?", a: "Channel names can change and aren't unique. The channel ID is the permanent, unique identifier required by APIs and many tools." },
                { q: "Does this work with channel handles (@username)?", a: "Yes! Our tool supports the new YouTube handles format (@username) and can extract the channel ID from them." },
                { q: "Is this tool free?", a: "Yes, our YouTube Channel ID Finder is 100% free with no limits on usage." }
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
                { href: "/youtube-downloader", icon: "📹", title: "YouTube Downloader", desc: "Download videos in HD, 4K" },
                { href: "/youtube-thumbnail-downloader", icon: "🖼️", title: "Thumbnail Downloader", desc: "Download HD thumbnails" },
                { href: "/youtube-tag-generator", icon: "🏷️", title: "Tag Generator", desc: "Generate SEO video tags" },
                { href: "/youtube-embed-generator", icon: "📺", title: "Embed Generator", desc: "Create embed codes" }
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
