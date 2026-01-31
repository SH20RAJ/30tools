import BrokenLinkChecker from "@/components/tools/seo/BrokenLinkChecker";

export const metadata = {
  title: "Broken Link Checker - Find Dead Links Free | 30tools",
  description: "Find broken links on your website for free. Check for 404 errors and dead links that hurt SEO. Free broken link checker tool.",
  keywords: ["broken link checker", "dead link checker", "find broken links", "404 checker", "link checker", "broken link finder", "seo link checker"].join(", "),
  openGraph: { title: "Broken Link Checker - Free", description: "⚡ Find and fix broken links!", url: "https://30tools.com/broken-link-checker", siteName: "30tools", type: "website" },
  alternates: { canonical: "https://30tools.com/broken-link-checker" },
  robots: { index: true, follow: true }
,
  twitter: {
    card: "summary_large_image",
    title: "Broken Link Checker - Free SEO Tool | Boost Your Rankings",
    description: "Professional broken link checker for Process. Free SEO analysis and optimization tool. Improve search rankings with data-driven insights.",
    images: ["/og-images/broken-link-checker.jpg"],
    creator: "@30tools"
  }
};

const AdUnit = () => (<div className="my-6 flex justify-center"><ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins></div>);


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Broken Link Checker",
  "description": "Professional broken link checker for Process. Free SEO analysis and optimization tool. Improve search rankings with data-driven insights.",
  "url": "https://30tools.com/broken-link-checker",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com"
  }
};

export default function BrokenLinkCheckerPage() {
  return (
        <>
            
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8"><ol className="flex items-center space-x-2 text-sm text-muted-foreground"><li><a href="/" className="hover:text-primary">Home</a></li><li>/</li><li><a href="/#seo-tools" className="hover:text-primary">SEO Tools</a></li><li>/</li><li className="text-foreground font-medium">Broken Link Checker</li></ol></nav>
          <AdUnit />
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Broken Link Checker</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">Find and fix broken links on your website. Dead links hurt SEO and user experience - find them all with our free tool.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground"><span>🔗 Link Scanning</span><span>❌ 404 Detection</span><span>📊 Reports</span><span>🆓 100% Free</span></div>
          </div>
          <AdUnit />
          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16"><BrokenLinkChecker /></div>
          <AdUnit />
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Why Fix Broken Links?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{ icon: "📉", title: "Hurts SEO", desc: "Broken links damage search rankings" }, { icon: "😤", title: "Bad UX", desc: "Frustrates visitors and increases bounce" }, { icon: "🔄", title: "Crawl Issues", desc: "Wastes search engine crawl budget" }, { icon: "💔", title: "Trust", desc: "Makes your site look unprofessional" }].map((f, i) => (<div key={i} className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow"><span className="text-4xl mb-4 block">{f.icon}</span><h3 className="text-lg font-semibold mb-2">{f.title}</h3><p className="text-sm text-muted-foreground">{f.desc}</p></div>))}
            </div>
          </section>
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">FAQ</h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              {[{ q: "What is a broken link?", a: "A broken link is a hyperlink that points to a page that no longer exists, usually returning a 404 error." }, { q: "How often should I check for broken links?", a: "Monthly checks are recommended, or after making significant website changes." }, { q: "Is this free?", a: "Yes, 100% free with no limits." }].map((faq, i) => (<details key={i} className="bg-card rounded-xl border border-border p-4 group"><summary className="font-semibold cursor-pointer list-none flex justify-between items-center">{faq.q}<span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span></summary><p className="mt-4 text-muted-foreground">{faq.a}</p></details>))}
            </div>
          </section>
          <AdUnit />
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Related SEO Tools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[{ href: "/website-analyzer", icon: "🔍", title: "Website Analyzer", desc: "Full analysis" }, { href: "/ssl-checker", icon: "🔒", title: "SSL Checker", desc: "Check SSL" }, { href: "/sitemap-generator", icon: "🗺️", title: "Sitemap Generator", desc: "Create sitemaps" }, { href: "/robots-txt-generator", icon: "🤖", title: "Robots.txt", desc: "Control crawlers" }].map((tool, i) => (<a key={i} href={tool.href} className="group p-5 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all"><div className="flex items-center gap-3 mb-2"><span className="text-2xl">{tool.icon}</span><h3 className="font-semibold group-hover:text-primary transition-colors">{tool.title}</h3></div><p className="text-sm text-muted-foreground">{tool.desc}</p></a>))}
            </div>
          </section>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(5) }} />
    </>
  );
}
