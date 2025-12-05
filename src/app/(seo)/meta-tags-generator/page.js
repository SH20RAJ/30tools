import MetaTagsGeneratorTool from "@/components/tools/seo/MetaTagsGeneratorTool";

export const metadata = {
  title: "Meta Tags Generator - Free SEO Meta Tag Creator | 30tools",
  description: "Generate SEO-optimized meta tags for your website. Create title tags, meta descriptions, Open Graph, and Twitter Cards instantly. Free meta tag generator tool.",
  keywords: [
    "meta tags generator",
    "meta tag creator",
    "seo meta tags",
    "meta description generator",
    "title tag generator",
    "open graph generator",
    "twitter card generator",
    "meta tags generator free",
    "seo tags generator",
    "website meta tags",
    "html meta tags generator",
    "meta tags for seo"
  ].join(", "),

  openGraph: {
    title: "Meta Tags Generator - Free SEO Meta Tag Creator",
    description: "⚡ Generate SEO-optimized meta tags instantly. Title, description, OG & Twitter Cards!",
    url: "https://30tools.com/meta-tags-generator",
    siteName: "30tools", type: "website",
    images: [{ url: "/og-images/meta-tags-generator.jpg", width: 1200, height: 630, alt: "Meta Tags Generator" }],
  },

  twitter: { card: "summary_large_image", title: "Meta Tags Generator - Free", description: "⚡ Create SEO meta tags instantly!", images: ["/og-images/meta-tags-generator.jpg"], creator: "@30tools" },
  alternates: { canonical: "https://30tools.com/meta-tags-generator" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org", "@type": "WebApplication",
    "name": "Meta Tags Generator",
    "description": "Free tool to generate SEO-optimized meta tags for websites.",
    "url": "https://30tools.com/meta-tags-generator",
    "applicationCategory": ["UtilitiesApplication"],
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "18765" }
  }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function MetaTagsGeneratorPage() {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.webApp) }} />

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li><li>/</li>
              <li><a href="/#seo-tools" className="hover:text-primary">SEO Tools</a></li><li>/</li>
              <li className="text-foreground font-medium">Meta Tags Generator</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Meta Tags Generator</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Generate SEO-optimized meta tags for your website instantly. Create title tags, meta descriptions, Open Graph tags, and Twitter Cards with our free tool.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🏷️ Title Tags</span><span>📝 Meta Descriptions</span><span>📱 Open Graph</span><span>🐦 Twitter Cards</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <MetaTagsGeneratorTool />
          </div>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">What Meta Tags We Generate</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🏷️", title: "Title Tag", desc: "SEO-optimized page titles for search results" },
                { icon: "📝", title: "Meta Description", desc: "Compelling descriptions that improve CTR" },
                { icon: "🔗", title: "Canonical URL", desc: "Prevent duplicate content issues" },
                { icon: "📱", title: "Open Graph", desc: "Rich previews on Facebook and LinkedIn" },
                { icon: "🐦", title: "Twitter Cards", desc: "Beautiful Twitter link previews" },
                { icon: "🤖", title: "Robots Meta", desc: "Control search engine crawling" },
                { icon: "🌐", title: "Language Tags", desc: "Specify content language" },
                { icon: "📊", title: "Viewport", desc: "Mobile-responsive settings" }
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How to Use</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "1️⃣", title: "Enter Details", desc: "Fill in your page title, description, and URL" },
                { step: "2️⃣", title: "Customize Tags", desc: "Add Open Graph images and Twitter Card settings" },
                { step: "3️⃣", title: "Copy Code", desc: "Copy the generated HTML code to your website" }
              ].map((s, i) => (
                <div key={i} className="text-center p-6 bg-card rounded-xl border border-border">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-3xl">{s.step}</span></div>
                  <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              {[
                { q: "What are meta tags?", a: "Meta tags are HTML elements that provide information about your webpage to search engines and social media platforms. They appear in the <head> section of your HTML." },
                { q: "Why are meta tags important for SEO?", a: "Meta tags help search engines understand your content, which can improve rankings. The title tag and meta description also appear in search results, affecting click-through rates." },
                { q: "What is Open Graph?", a: "Open Graph is a protocol that controls how your content appears when shared on Facebook, LinkedIn, and other platforms. It includes title, description, and image settings." },
                { q: "What are Twitter Cards?", a: "Twitter Cards are similar to Open Graph but specifically for Twitter. They define how your links appear when shared on Twitter." },
                { q: "Is this tool free?", a: "Yes, our meta tags generator is 100% free with no limits on usage." }
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
                { href: "/schema-generator", icon: "📋", title: "Schema Generator", desc: "Create structured data" },
                { href: "/robots-txt-generator", icon: "🤖", title: "Robots.txt Generator", desc: "Control crawler access" },
                { href: "/sitemap-generator", icon: "🗺️", title: "Sitemap Generator", desc: "Create XML sitemaps" },
                { href: "/keyword-density", icon: "🔑", title: "Keyword Density", desc: "Analyze keyword usage" }
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

      <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(6) }} />
    </>
  );
}
