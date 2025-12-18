import AiContentOptimizerTool from "@/components/tools/seo/AiContentOptimizerTool";

export const metadata = {
    title: "AI SEO Content Optimizer - Free Content Optimization Tool | 30tools",
    description: "Optimize your content for SEO with AI. Get suggestions for keywords, readability, and engagement. Free AI-powered SEO content optimizer.",
    keywords: ["ai seo optimizer", "content optimizer", "seo content tool", "ai content optimization", "seo writing assistant", "content optimization ai"].join(", "),
    openGraph: { title: "AI SEO Content Optimizer", description: "⚡ Optimize content with AI!", url: "https://30tools.com/ai-seo-content-optimizer", siteName: "30tools", type: "website" },
    alternates: { canonical: "https://30tools.com/ai-seo-content-optimizer" },
    robots: { index: true, follow: true }
};

const AdUnit = () => (<div className="my-6 flex justify-center"><ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins></div>);

export default function AISEOContentOptimizerPage() {
    return (
        <>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-6xl mx-auto">
                    <nav aria-label="Breadcrumb" className="mb-8"><ol className="flex items-center space-x-2 text-sm text-muted-foreground"><li><a href="/" className="hover:text-primary">Home</a></li><li>/</li><li><a href="/#seo-tools" className="hover:text-primary">SEO Tools</a></li><li>/</li><li className="text-foreground font-medium">AI SEO Content Optimizer</li></ol></nav>
                    <AdUnit />
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">AI SEO Content Optimizer</h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">Optimize your content for search engines with AI. Get intelligent suggestions for keywords, readability, and SEO improvements.</p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground"><span>🤖 AI-Powered</span><span>📝 Content Analysis</span><span>🎯 SEO Tips</span><span>🆓 100% Free</span></div>
                    </div>
                    <AdUnit />
                    <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16"><AiContentOptimizerTool /></div>
                    <AdUnit />
                    <section className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">What We Analyze</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[{ icon: "🔑", title: "Keywords", desc: "Keyword usage and placement" }, { icon: "📖", title: "Readability", desc: "Reading level and flow" }, { icon: "📏", title: "Length", desc: "Content length optimization" }, { icon: "🔗", title: "Structure", desc: "Headings and paragraphs" }].map((f, i) => (<div key={i} className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow"><span className="text-4xl mb-4 block">{f.icon}</span><h3 className="text-lg font-semibold mb-2">{f.title}</h3><p className="text-sm text-muted-foreground">{f.desc}</p></div>))}
                        </div>
                    </section>
                    <AdUnit />
                    <section className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Related SEO Tools</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[{ href: "/keyword-density", icon: "📊", title: "Keyword Density", desc: "Analyze keywords" }, { href: "/meta-tags-generator", icon: "🏷️", title: "Meta Tags", desc: "Create meta tags" }, { href: "/title-rewrite-checker", icon: "✍️", title: "Title Checker", desc: "Check titles" }, { href: "/ai-technical-seo-fixer", icon: "🔧", title: "Technical SEO", desc: "Fix issues" }].map((tool, i) => (<a key={i} href={tool.href} className="group p-5 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all"><div className="flex items-center gap-3 mb-2"><span className="text-2xl">{tool.icon}</span><h3 className="font-semibold group-hover:text-primary transition-colors">{tool.title}</h3></div><p className="text-sm text-muted-foreground">{tool.desc}</p></a>))}
                        </div>
                    </section>
                </div>
            </div>
            <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(5) }} />
        </>
    );
}
