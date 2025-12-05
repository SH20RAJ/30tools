import KeywordResearchTool from "@/components/tools/seo/KeywordResearchTool";

export const metadata = {
  title: "Bing Keyword Research Tool - Free Keyword Finder | 30tools",
  description: "Find keywords for Bing SEO. Analyze search volume and competition for Bing search engine. Free Bing keyword research tool.",
  keywords: [
    "bing keyword research",
    "bing keywords",
    "bing keyword tool",
    "bing seo keywords",
    "bing keyword finder",
    "bing search keywords",
    "microsoft keyword research"
  ].join(", "),

  openGraph: {
    title: "Bing Keyword Research Tool - Free",
    description: "⚡ Find keywords for Bing SEO!",
    url: "https://30tools.com/bing-keyword-research",
    siteName: "30tools", type: "website",
  },

  alternates: { canonical: "https://30tools.com/bing-keyword-research" },
  robots: { index: true, follow: true }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function BingKeywordResearchPage() {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li><li>/</li>
              <li><a href="/#seo-tools" className="hover:text-primary">SEO Tools</a></li><li>/</li>
              <li className="text-foreground font-medium">Bing Keyword Research</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Bing Keyword Research</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Find valuable keywords for Bing search engine optimization. Bing has 10%+ of search market share - don't ignore it!
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🔍 Bing Data</span><span>📊 Search Volume</span><span>💡 Suggestions</span><span>🆓 100% Free</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <KeywordResearchTool />
          </div>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Why Optimize for Bing?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "📊", title: "10%+ Market Share", desc: "Bing handles billions of searches" },
                { icon: "👥", title: "Different Audience", desc: "Older, higher-income demographics" },
                { icon: "🏆", title: "Less Competition", desc: "Easier to rank than on Google" },
                { icon: "💰", title: "Higher CPC", desc: "Often higher ad conversion rates" }
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
                { q: "Is Bing SEO different from Google SEO?", a: "While the fundamentals are similar, Bing places more emphasis on social signals, meta keywords, and exact match keywords compared to Google." },
                { q: "Is this tool free?", a: "Yes, our Bing keyword research tool is 100% free." }
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
                { href: "/google-keyword-research", icon: "🔍", title: "Google Keywords", desc: "Google keyword research" },
                { href: "/keyword-density", icon: "📊", title: "Keyword Density", desc: "Analyze usage" },
                { href: "/meta-tags-generator", icon: "🏷️", title: "Meta Tags", desc: "Create meta tags" },
                { href: "/bulk-keyword-rank-checker", icon: "📈", title: "Rank Checker", desc: "Check rankings" }
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
