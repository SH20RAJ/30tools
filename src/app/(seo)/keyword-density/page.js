import KeywordDensityTool from "@/components/tools/seo/KeywordDensityTool";

export const metadata = {
  title: "Keyword Density Checker - Free SEO Analysis Tool | 30tools",
  description: "Analyze keyword density in your content. Check keyword frequency, distribution, and optimize for SEO. Free keyword density checker tool.",
  keywords: [
    "keyword density checker",
    "keyword density analyzer",
    "keyword frequency checker",
    "keyword density tool",
    "seo keyword density",
    "check keyword density",
    "keyword density calculator"
  ].join(", "),

  openGraph: {
    title: "Keyword Density Checker - SEO Analysis",
    description: "⚡ Analyze keyword density for better SEO!",
    url: "https://30tools.com/keyword-density",
    siteName: "30tools", type: "website",
  },

  alternates: { canonical: "https://30tools.com/keyword-density" },
  robots: { index: true, follow: true }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function KeywordDensityPage() {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li><li>/</li>
              <li><a href="/#seo-tools" className="hover:text-primary">SEO Tools</a></li><li>/</li>
              <li className="text-foreground font-medium">Keyword Density Checker</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Keyword Density Checker</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Analyze the keyword density and frequency in your content. Ensure optimal keyword usage for SEO without over-optimization.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>📊 Density Analysis</span><span>🔢 Word Count</span><span>📈 Frequency</span><span>🆓 100% Free</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <KeywordDensityTool />
          </div>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">What We Analyze</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "📊", title: "Keyword Density", desc: "Percentage of keyword occurrences" },
                { icon: "🔢", title: "Word Count", desc: "Total words in your content" },
                { icon: "📈", title: "Frequency", desc: "How often each word appears" },
                { icon: "🔤", title: "N-grams", desc: "2-word and 3-word phrases" }
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
                { q: "What is the ideal keyword density?", a: "While there's no perfect number, most SEO experts recommend keeping keyword density between 1-3%. Focus on natural writing over hitting specific percentages." },
                { q: "What is keyword stuffing?", a: "Keyword stuffing is the practice of overusing keywords in content, which can result in penalties from search engines. Our tool helps you avoid this." },
                { q: "Is this tool free?", a: "Yes, our keyword density checker is 100% free with unlimited use." }
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
                { href: "/google-keyword-research", icon: "🔍", title: "Keyword Research", desc: "Find keywords" },
                { href: "/meta-tags-generator", icon: "🏷️", title: "Meta Tags", desc: "Create meta tags" },
                { href: "/ai-seo-content-optimizer", icon: "🤖", title: "AI Content Optimizer", desc: "Optimize content" },
                { href: "/title-rewrite-checker", icon: "✍️", title: "Title Checker", desc: "Check titles" }
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
