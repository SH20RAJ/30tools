import AiVoiceSearchOptimizerTool from "@/components/tools/seo/AiVoiceSearchOptimizerTool";

export const metadata = {
    title: "Voice Search Optimizer - Optimize for Voice SEO Free | 30tools",
    description: "Optimize your content for voice search. Get suggestions for conversational keywords and featured snippets. Free voice search optimization tool.",
    keywords: ["voice search optimizer", "voice seo", "voice search optimization", "optimize for voice search", "voice search seo", "alexa seo", "google assistant seo"].join(", "),
    openGraph: { title: "Voice Search Optimizer", description: "⚡ Optimize content for voice search!", url: "https://30tools.com/voice-search-optimizer", siteName: "30tools", type: "website" },
    alternates: { canonical: "https://30tools.com/voice-search-optimizer" },
    robots: { index: true, follow: true }
};

const AdUnit = () => (<div className="my-6 flex justify-center"><ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins></div>);

export default function VoiceSearchOptimizerPage() {
    return (
        <>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-6xl mx-auto">
                    <nav aria-label="Breadcrumb" className="mb-8"><ol className="flex items-center space-x-2 text-sm text-muted-foreground"><li><a href="/" className="hover:text-primary">Home</a></li><li>/</li><li><a href="/#seo-tools" className="hover:text-primary">SEO Tools</a></li><li>/</li><li className="text-foreground font-medium">Voice Search Optimizer</li></ol></nav>
                    <AdUnit />
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Voice Search Optimizer</h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">Optimize your content for voice search queries. Get suggestions for conversational keywords, question phrases, and featured snippet optimization.</p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground"><span>🎤 Voice SEO</span><span>❓ Question Keywords</span><span>📱 Smart Speakers</span><span>🆓 100% Free</span></div>
                    </div>
                    <AdUnit />
                    <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16"><AiVoiceSearchOptimizerTool /></div>
                    <AdUnit />
                    <section className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Why Voice Search Matters</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[{ icon: "📈", title: "50%+ Searches", desc: "Voice searches growing rapidly" }, { icon: "🏠", title: "Smart Speakers", desc: "Alexa, Google Home, Siri" }, { icon: "❓", title: "Question Format", desc: "Natural conversational queries" }, { icon: "🎯", title: "Local SEO", desc: "Great for local businesses" }].map((f, i) => (<div key={i} className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow"><span className="text-4xl mb-4 block">{f.icon}</span><h3 className="text-lg font-semibold mb-2">{f.title}</h3><p className="text-sm text-muted-foreground">{f.desc}</p></div>))}
                        </div>
                    </section>
                    <section className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">FAQ</h2>
                        <div className="space-y-4 max-w-4xl mx-auto">
                            {[{ q: "How is voice search different from text search?", a: "Voice searches are typically longer, more conversational, and often phrased as questions (who, what, where, when, why, how)." }, { q: "How do I optimize for voice search?", a: "Use conversational language, answer common questions directly, optimize for featured snippets, and ensure fast page loading." }, { q: "Is this free?", a: "Yes, 100% free with no limits." }].map((faq, i) => (<details key={i} className="bg-card rounded-xl border border-border p-4 group"><summary className="font-semibold cursor-pointer list-none flex justify-between items-center">{faq.q}<span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span></summary><p className="mt-4 text-muted-foreground">{faq.a}</p></details>))}
                        </div>
                    </section>
                    <AdUnit />
                    <section className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Related SEO Tools</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[{ href: "/google-keyword-research", icon: "🔍", title: "Keywords", desc: "Keyword research" }, { href: "/schema-generator", icon: "📋", title: "Schema", desc: "Structured data" }, { href: "/ai-seo-content-optimizer", icon: "🤖", title: "AI Optimizer", desc: "Content optimization" }, { href: "/meta-tags-generator", icon: "🏷️", title: "Meta Tags", desc: "Create meta tags" }].map((tool, i) => (<a key={i} href={tool.href} className="group p-5 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all"><div className="flex items-center gap-3 mb-2"><span className="text-2xl">{tool.icon}</span><h3 className="font-semibold group-hover:text-primary transition-colors">{tool.title}</h3></div><p className="text-sm text-muted-foreground">{tool.desc}</p></a>))}
                        </div>
                    </section>
                </div>
            </div>
            <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(5) }} />
        </>
    );
}
