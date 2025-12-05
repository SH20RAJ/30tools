import BulkGoogleIndexChecker from "@/components/tools/seo/BulkGoogleIndexChecker";

export const metadata = {
  title: "Bulk Google Index Checker - Check Indexed URLs Free | 30tools",
  description: "Check if your URLs are indexed by Google. Bulk check multiple pages at once. Free Google index checker tool for SEO.",
  keywords: ["google index checker", "bulk index checker", "check google indexing", "indexed page checker", "is page indexed google", "google indexing tool"].join(", "),
  openGraph: { title: "Bulk Google Index Checker", description: "⚡ Check if your pages are indexed by Google!", url: "https://30tools.com/bulk-google-index-checker", siteName: "30tools", type: "website" },
  alternates: { canonical: "https://30tools.com/bulk-google-index-checker" },
  robots: { index: true, follow: true }
};

const AdUnit = () => (<div className="my-6 flex justify-center"><ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins></div>);

export default function BulkGoogleIndexCheckerPage() {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8"><ol className="flex items-center space-x-2 text-sm text-muted-foreground"><li><a href="/" className="hover:text-primary">Home</a></li><li>/</li><li><a href="/#seo-tools" className="hover:text-primary">SEO Tools</a></li><li>/</li><li className="text-foreground font-medium">Bulk Google Index Checker</li></ol></nav>
          <AdUnit />
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Bulk Google Index Checker</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">Check if your web pages are indexed by Google. Bulk check multiple URLs at once to monitor your site's indexing status.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground"><span>🔍 Bulk Check</span><span>📊 Index Status</span><span>⚡ Fast Results</span><span>🆓 100% Free</span></div>
          </div>
          <AdUnit />
          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16"><BulkGoogleIndexChecker /></div>
          <AdUnit />
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Why Check Index Status?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{ icon: "🔍", title: "Visibility", desc: "Ensure pages appear in search" }, { icon: "🐛", title: "Debug Issues", desc: "Find indexing problems early" }, { icon: "📈", title: "Track Progress", desc: "Monitor new content indexing" }, { icon: "🔧", title: "Fix Problems", desc: "Identify blocked pages" }].map((f, i) => (<div key={i} className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow"><span className="text-4xl mb-4 block">{f.icon}</span><h3 className="text-lg font-semibold mb-2">{f.title}</h3><p className="text-sm text-muted-foreground">{f.desc}</p></div>))}
            </div>
          </section>
          <AdUnit />
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Related SEO Tools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[{ href: "/sitemap-generator", icon: "🗺️", title: "Sitemap Generator", desc: "Create sitemaps" }, { href: "/robots-txt-generator", icon: "🤖", title: "Robots.txt", desc: "Control indexing" }, { href: "/bulk-keyword-rank-checker", icon: "📈", title: "Rank Checker", desc: "Check rankings" }, { href: "/website-analyzer", icon: "🔍", title: "Site Analyzer", desc: "Full analysis" }].map((tool, i) => (<a key={i} href={tool.href} className="group p-5 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all"><div className="flex items-center gap-3 mb-2"><span className="text-2xl">{tool.icon}</span><h3 className="font-semibold group-hover:text-primary transition-colors">{tool.title}</h3></div><p className="text-sm text-muted-foreground">{tool.desc}</p></a>))}
            </div>
          </section>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(5) }} />
    </>
  );
}
