import WebsiteAnalyzerTool from "@/components/tools/web/WebsiteAnalyzerTool";

export const metadata = {
  title: "Website Analyzer - Free SEO Site Analysis Tool | 30tools",
  description: "Analyze your website's SEO performance. Get insights on speed, mobile-friendliness, meta tags, and more. Free website analysis tool.",
  keywords: ["website analyzer", "seo analyzer", "site analyzer", "website analysis", "seo audit", "site analysis tool", "website seo checker"].join(", "),
  openGraph: { title: "Website Analyzer - Free SEO Analysis", description: "⚡ Get complete SEO analysis!", url: "https://30tools.com/website-analyzer", siteName: "30tools", type: "website" },
  alternates: { canonical: "https://30tools.com/website-analyzer" },
  robots: { index: true, follow: true }
};

const AdUnit = () => (<div className="my-6 flex justify-center"><ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins></div>);

export default function WebsiteAnalyzerPage() {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8"><ol className="flex items-center space-x-2 text-sm text-muted-foreground"><li><a href="/" className="hover:text-primary">Home</a></li><li>/</li><li><a href="/#seo-tools" className="hover:text-primary">SEO Tools</a></li><li>/</li><li className="text-foreground font-medium">Website Analyzer</li></ol></nav>
          <AdUnit />
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Website Analyzer</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">Get a comprehensive SEO analysis of your website. Check meta tags, headings, images, links, and more.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground"><span>🔍 Full Analysis</span><span>📊 SEO Score</span><span>💡 Recommendations</span><span>🆓 100% Free</span></div>
          </div>
          <AdUnit />
          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16"><WebsiteAnalyzerTool /></div>
          <AdUnit />
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">What We Analyze</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{ icon: "🏷️", title: "Meta Tags", desc: "Title, description, keywords" }, { icon: "📑", title: "Headings", desc: "H1-H6 structure" }, { icon: "🖼️", title: "Images", desc: "Alt text and optimization" }, { icon: "🔗", title: "Links", desc: "Internal and external links" }, { icon: "📱", title: "Mobile", desc: "Mobile-friendliness" }, { icon: "⚡", title: "Speed", desc: "Page load time" }, { icon: "🔒", title: "SSL", desc: "Security status" }, { icon: "📋", title: "Schema", desc: "Structured data" }].map((f, i) => (<div key={i} className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow"><span className="text-4xl mb-4 block">{f.icon}</span><h3 className="text-lg font-semibold mb-2">{f.title}</h3><p className="text-sm text-muted-foreground">{f.desc}</p></div>))}
            </div>
          </section>
          <AdUnit />
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Related SEO Tools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[{ href: "/ssl-checker", icon: "🔒", title: "SSL Checker", desc: "Check SSL" }, { href: "/broken-link-checker", icon: "🔗", title: "Broken Links", desc: "Find dead links" }, { href: "/meta-tags-generator", icon: "🏷️", title: "Meta Tags", desc: "Create meta tags" }, { href: "/schema-generator", icon: "📋", title: "Schema", desc: "Structured data" }].map((tool, i) => (<a key={i} href={tool.href} className="group p-5 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all"><div className="flex items-center gap-3 mb-2"><span className="text-2xl">{tool.icon}</span><h3 className="font-semibold group-hover:text-primary transition-colors">{tool.title}</h3></div><p className="text-sm text-muted-foreground">{tool.desc}</p></a>))}
            </div>
          </section>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(5) }} />
    </>
  );
}
