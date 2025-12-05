import KeywordResearchTool from "@/components/tools/seo/KeywordResearchTool";

export const metadata = {
  title: "Google Keyword Research Tool - Free Keyword Finder | 30tools",
  description: "Find high-volume keywords for Google SEO. Analyze search volume, competition, and keyword suggestions. Free Google keyword research tool.",
  keywords: [
    "google keyword research",
    "keyword research tool",
    "keyword finder",
    "google keywords",
    "seo keyword research",
    "keyword analysis",
    "keyword planner",
    "keyword research free",
    "google keyword tool",
    "keyword suggestions",
    "long tail keywords"
  ].join(", "),

  openGraph: {
    title: "Google Keyword Research Tool - Free Keyword Finder",
    description: "⚡ Find high-volume keywords for Google SEO!",
    url: "https://30tools.com/google-keyword-research",
    siteName: "30tools", type: "website",
  },

  twitter: { card: "summary_large_image", title: "Google Keyword Research - Free", description: "⚡ Find SEO keywords!", creator: "@30tools" },
  alternates: { canonical: "https://30tools.com/google-keyword-research" },
  robots: { index: true, follow: true }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function GoogleKeywordResearchPage() {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li><li>/</li>
              <li><a href="/#seo-tools" className="hover:text-primary">SEO Tools</a></li><li>/</li>
              <li className="text-foreground font-medium">Google Keyword Research</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Google Keyword Research</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Find high-volume, low-competition keywords for your Google SEO strategy. Get keyword suggestions, search volume, and competition data.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🔍 Search Volume</span><span>📊 Competition</span><span>💡 Suggestions</span><span>🆓 100% Free</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <KeywordResearchTool />
          </div>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">What You Get</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "📊", title: "Search Volume", desc: "Monthly search volume data" },
                { icon: "🎯", title: "Competition", desc: "Keyword competition level" },
                { icon: "💡", title: "Suggestions", desc: "Related keyword ideas" },
                { icon: "📈", title: "Trends", desc: "Keyword trending data" },
                { icon: "🔗", title: "Long-tail", desc: "Long-tail keyword variations" },
                { icon: "❓", title: "Questions", desc: "Question-based keywords" },
                { icon: "🌍", title: "Local", desc: "Location-based keywords" },
                { icon: "📋", title: "Export", desc: "Download keyword lists" }
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
                { q: "What is keyword research?", a: "Keyword research is the process of finding and analyzing search terms that people enter into search engines. It helps you understand what your audience is searching for." },
                { q: "Why is keyword research important?", a: "Keyword research helps you create content that matches user intent, improve your search rankings, and drive targeted traffic to your website." },
                { q: "What are long-tail keywords?", a: "Long-tail keywords are longer, more specific phrases (3+ words) that typically have lower search volume but higher conversion rates and less competition." },
                { q: "Is this tool free?", a: "Yes, our Google keyword research tool is 100% free with no limits." }
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Related SEO Tools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/bing-keyword-research", icon: "🔍", title: "Bing Keyword Research", desc: "Bing keywords" },
                { href: "/keyword-density", icon: "📊", title: "Keyword Density", desc: "Analyze keyword usage" },
                { href: "/bulk-keyword-rank-checker", icon: "📈", title: "Rank Checker", desc: "Check rankings" },
                { href: "/youtube-tag-generator", icon: "🏷️", title: "Tag Generator", desc: "YouTube tags" }
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
