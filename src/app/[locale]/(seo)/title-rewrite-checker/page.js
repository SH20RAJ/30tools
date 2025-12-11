import TitleRewriteChecker from "@/components/tools/seo/TitleRewriteChecker";

export const metadata = {
  title: "Title Rewrite Checker - Check Google Title Changes Free | 30tools",
  description: "Check if Google rewrites your page titles. Analyze title tag effectiveness and see how your titles appear in search results. Free title checker tool.",
  keywords: ["title rewrite checker", "google title rewrite", "seo title checker", "title tag checker", "serp title checker", "google title changes"].join(", "),
  openGraph: { title: "Title Rewrite Checker", description: "⚡ Check if Google rewrites your titles!", url: "https://30tools.com/title-rewrite-checker", siteName: "30tools", type: "website" },
  alternates: { canonical: "https://30tools.com/title-rewrite-checker" },
  robots: { index: true, follow: true }
};

const AdUnit = () => (<div className="my-6 flex justify-center"><ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins></div>);

export default function TitleRewriteCheckerPage() {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8"><ol className="flex items-center space-x-2 text-sm text-muted-foreground"><li><a href="/" className="hover:text-primary">Home</a></li><li>/</li><li><a href="/#seo-tools" className="hover:text-primary">SEO Tools</a></li><li>/</li><li className="text-foreground font-medium">Title Rewrite Checker</li></ol></nav>
          <AdUnit />
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Title Rewrite Checker</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">Check if Google rewrites your page titles in search results. Analyze your title tags and see how they actually appear in SERPs.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground"><span>🏷️ Title Analysis</span><span>🔍 SERP Preview</span><span>📊 Rewrite Check</span><span>🆓 100% Free</span></div>
          </div>
          <AdUnit />
          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16"><TitleRewriteChecker /></div>
          <AdUnit />
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Why Google Rewrites Titles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{ icon: "📏", title: "Too Long", desc: "Titles over 60 characters" }, { icon: "🔄", title: "Repetitive", desc: "Keyword stuffing detected" }, { icon: "❓", title: "Not Descriptive", desc: "Doesn't match page content" }, { icon: "📝", title: "Better Match", desc: "H1 or content is clearer" }].map((f, i) => (<div key={i} className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow"><span className="text-4xl mb-4 block">{f.icon}</span><h3 className="text-lg font-semibold mb-2">{f.title}</h3><p className="text-sm text-muted-foreground">{f.desc}</p></div>))}
            </div>
          </section>
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">FAQ</h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              {[{ q: "Why does Google rewrite my title?", a: "Google may rewrite titles that are too long, don't match page content, contain keyword stuffing, or when H1 headings seem more descriptive." }, { q: "How can I prevent title rewrites?", a: "Keep titles under 60 characters, ensure they accurately describe page content, avoid keyword stuffing, and match your H1 tag." }, { q: "Is this free?", a: "Yes, 100% free with unlimited checks." }].map((faq, i) => (<details key={i} className="bg-card rounded-xl border border-border p-4 group"><summary className="font-semibold cursor-pointer list-none flex justify-between items-center">{faq.q}<span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span></summary><p className="mt-4 text-muted-foreground">{faq.a}</p></details>))}
            </div>
          </section>
          <AdUnit />
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Related SEO Tools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[{ href: "/meta-tags-generator", icon: "🏷️", title: "Meta Tags", desc: "Create meta tags" }, { href: "/keyword-density", icon: "📊", title: "Keyword Density", desc: "Analyze keywords" }, { href: "/ai-seo-content-optimizer", icon: "🤖", title: "AI Optimizer", desc: "Optimize content" }, { href: "/website-analyzer", icon: "🔍", title: "Site Analyzer", desc: "Full analysis" }].map((tool, i) => (<a key={i} href={tool.href} className="group p-5 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all"><div className="flex items-center gap-3 mb-2"><span className="text-2xl">{tool.icon}</span><h3 className="font-semibold group-hover:text-primary transition-colors">{tool.title}</h3></div><p className="text-sm text-muted-foreground">{tool.desc}</p></a>))}
            </div>
          </section>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(5) }} />
    </>
  );
}
