import YouTubeTagExtractor from "@/components/tools/youtube/YouTubeTagExtractor";

export const metadata = {
  title: "YouTube Tag Generator - Free SEO Tags for Videos | 30tools",
  description: "Generate SEO-optimized tags for YouTube videos. Increase video visibility with relevant keywords. Free YouTube tag generator tool.",
  keywords: ["youtube tag generator", "youtube tags", "video tags generator", "youtube seo tags", "youtube keyword tags", "yt tag generator", "youtube tags free"].join(", "),
  openGraph: { title: "YouTube Tag Generator - Free", description: "⚡ Generate SEO tags for YouTube videos!", url: "https://30tools.com/youtube-tag-generator", siteName: "30tools", type: "website" },
  alternates: { canonical: "https://30tools.com/youtube-tag-generator" },
  robots: { index: true, follow: true }
};

const AdUnit = () => (<div className="my-6 flex justify-center"><ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins></div>);

export default function YouTubeTagGeneratorPage() {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8"><ol className="flex items-center space-x-2 text-sm text-muted-foreground"><li><a href="/" className="hover:text-primary">Home</a></li><li>/</li><li><a href="/#seo-tools" className="hover:text-primary">SEO Tools</a></li><li>/</li><li className="text-foreground font-medium">YouTube Tag Generator</li></ol></nav>
          <AdUnit />
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">YouTube Tag Generator</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">Generate SEO-optimized tags for your YouTube videos. Improve discoverability and get more views with the right tags.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground"><span>🏷️ SEO Tags</span><span>📈 More Views</span><span>🎯 Relevant Keywords</span><span>🆓 100% Free</span></div>
          </div>
          <AdUnit />
          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16"><YouTubeTagExtractor /></div>
          <AdUnit />
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Why Use YouTube Tags?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{ icon: "🔍", title: "Discoverability", desc: "Help YouTube understand your content" }, { icon: "📈", title: "Rankings", desc: "Rank higher in search results" }, { icon: "🎯", title: "Relevance", desc: "Appear in related videos" }, { icon: "👥", title: "Audience", desc: "Reach the right viewers" }].map((f, i) => (<div key={i} className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow"><span className="text-4xl mb-4 block">{f.icon}</span><h3 className="text-lg font-semibold mb-2">{f.title}</h3><p className="text-sm text-muted-foreground">{f.desc}</p></div>))}
            </div>
          </section>
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">FAQ</h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              {[{ q: "How many tags should I use?", a: "YouTube allows up to 500 characters for tags. Use 5-15 relevant tags that describe your video content." }, { q: "Do YouTube tags still matter?", a: "Yes! While titles and descriptions are more important, tags help YouTube understand your content and show it to the right audience." }, { q: "Is this free?", a: "Yes, 100% free with no limits." }].map((faq, i) => (<details key={i} className="bg-card rounded-xl border border-border p-4 group"><summary className="font-semibold cursor-pointer list-none flex justify-between items-center">{faq.q}<span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span></summary><p className="mt-4 text-muted-foreground">{faq.a}</p></details>))}
            </div>
          </section>
          <AdUnit />
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Related Tools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[{ href: "/youtube-tag-extractor", icon: "🔍", title: "Tag Extractor", desc: "Extract video tags" }, { href: "/tiktok-tag-generator", icon: "🎵", title: "TikTok Tags", desc: "TikTok hashtags" }, { href: "/youtube-thumbnail-downloader", icon: "🖼️", title: "Thumbnails", desc: "Download thumbnails" }, { href: "/youtube-downloader", icon: "📹", title: "YT Downloader", desc: "Download videos" }].map((tool, i) => (<a key={i} href={tool.href} className="group p-5 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all"><div className="flex items-center gap-3 mb-2"><span className="text-2xl">{tool.icon}</span><h3 className="font-semibold group-hover:text-primary transition-colors">{tool.title}</h3></div><p className="text-sm text-muted-foreground">{tool.desc}</p></a>))}
            </div>
          </section>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(5) }} />
    </>
  );
}
