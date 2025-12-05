import XmlSitemapExtractor from "@/components/tools/seo/XmlSitemapExtractor";

export const metadata = {
  title: "XML Sitemap Extractor - Extract URLs from Sitemaps Free | 30tools",
  description: "Extract all URLs from any XML sitemap. Parse sitemap.xml files and get a complete list of URLs. Free sitemap extractor tool.",
  keywords: ["sitemap extractor", "xml sitemap extractor", "extract sitemap urls", "sitemap parser", "sitemap url list", "parse sitemap xml"].join(", "),
  openGraph: { title: "XML Sitemap Extractor", description: "⚡ Extract URLs from any sitemap!", url: "https://30tools.com/xml-sitemap-extractor", siteName: "30tools", type: "website" },
  alternates: { canonical: "https://30tools.com/xml-sitemap-extractor" },
  robots: { index: true, follow: true }
};

const AdUnit = () => (<div className="my-6 flex justify-center"><ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins></div>);

export default function XMLSitemapExtractorPage() {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8"><ol className="flex items-center space-x-2 text-sm text-muted-foreground"><li><a href="/" className="hover:text-primary">Home</a></li><li>/</li><li><a href="/#seo-tools" className="hover:text-primary">SEO Tools</a></li><li>/</li><li className="text-foreground font-medium">XML Sitemap Extractor</li></ol></nav>
          <AdUnit />
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">XML Sitemap Extractor</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">Extract all URLs from any XML sitemap. Analyze competitor sitemaps or get a complete list of your own site's pages.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground"><span>📋 Extract URLs</span><span>🗺️ Parse Sitemaps</span><span>📊 URL Count</span><span>🆓 100% Free</span></div>
          </div>
          <AdUnit />
          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16"><XmlSitemapExtractor /></div>
          <AdUnit />
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Use Cases</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{ icon: "🔍", title: "Competitor Analysis", desc: "Discover all pages on competitor sites" }, { icon: "📊", title: "Site Audit", desc: "Get complete URL inventory" }, { icon: "🔗", title: "Link Building", desc: "Find link opportunities" }, { icon: "📈", title: "Content Gap", desc: "Compare content coverage" }].map((f, i) => (<div key={i} className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow"><span className="text-4xl mb-4 block">{f.icon}</span><h3 className="text-lg font-semibold mb-2">{f.title}</h3><p className="text-sm text-muted-foreground">{f.desc}</p></div>))}
            </div>
          </section>
          <AdUnit />
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Related SEO Tools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[{ href: "/sitemap-generator", icon: "🗺️", title: "Sitemap Generator", desc: "Create sitemaps" }, { href: "/bulk-google-index-checker", icon: "📋", title: "Index Checker", desc: "Check indexing" }, { href: "/broken-link-checker", icon: "🔗", title: "Broken Links", desc: "Find dead links" }, { href: "/website-analyzer", icon: "🔍", title: "Site Analyzer", desc: "Full analysis" }].map((tool, i) => (<a key={i} href={tool.href} className="group p-5 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all"><div className="flex items-center gap-3 mb-2"><span className="text-2xl">{tool.icon}</span><h3 className="font-semibold group-hover:text-primary transition-colors">{tool.title}</h3></div><p className="text-sm text-muted-foreground">{tool.desc}</p></a>))}
            </div>
          </section>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(5) }} />
    </>
  );
}
