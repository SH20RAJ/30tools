import SchemaGenerator from "@/components/tools/seo/SchemaGenerator";

export const metadata = {
  title: "Schema Markup Generator - Free Structured Data Tool | 30tools",
  description: "Generate JSON-LD schema markup for SEO. Create structured data for articles, products, FAQs, organizations, and more. Free schema generator tool.",
  keywords: [
    "schema generator",
    "schema markup generator",
    "structured data generator",
    "json-ld generator",
    "schema.org generator",
    "rich snippets generator",
    "schema markup tool",
    "structured data tool",
    "faq schema generator",
    "product schema generator",
    "article schema generator"
  ].join(", "),

  openGraph: {
    title: "Schema Markup Generator - Structured Data Tool",
    description: "⚡ Generate JSON-LD schema markup for SEO. Rich snippets made easy!",
    url: "https://30tools.com/schema-generator",
    siteName: "30tools", type: "website",
    images: [{ url: "/og-images/schema-generator.jpg", width: 1200, height: 630, alt: "Schema Generator" }],
  },

  twitter: { card: "summary_large_image", title: "Schema Generator - Free", description: "⚡ Create structured data easily!", images: ["/og-images/schema-generator.jpg"], creator: "@30tools" },
  alternates: { canonical: "https://30tools.com/schema-generator" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org", "@type": "WebApplication",
    "name": "Schema Markup Generator",
    "description": "Free tool to generate JSON-LD structured data for SEO.",
    "url": "https://30tools.com/schema-generator",
    "applicationCategory": ["UtilitiesApplication"],
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "15432" }
  }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function SchemaGeneratorPage() {
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
              <li className="text-foreground font-medium">Schema Generator</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Schema Markup Generator</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Generate JSON-LD structured data markup for your website. Create rich snippets for Google search with our free schema generator.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>📋 JSON-LD</span><span>⭐ Rich Snippets</span><span>🔍 Better SEO</span><span>🆓 100% Free</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <SchemaGenerator />
          </div>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Schema Types We Support</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "📰", title: "Article", desc: "Blog posts, news articles, and content" },
                { icon: "🛍️", title: "Product", desc: "E-commerce products with pricing" },
                { icon: "❓", title: "FAQ", desc: "Frequently asked questions" },
                { icon: "🏢", title: "Organization", desc: "Business and company info" },
                { icon: "👤", title: "Person", desc: "Personal profiles and authors" },
                { icon: "📍", title: "Local Business", desc: "Physical business locations" },
                { icon: "⭐", title: "Review", desc: "Product and service reviews" },
                { icon: "📅", title: "Event", desc: "Events with dates and locations" }
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
                { q: "What is schema markup?", a: "Schema markup is structured data that helps search engines understand your content. It can enable rich snippets in search results like ratings, FAQs, and product information." },
                { q: "What is JSON-LD?", a: "JSON-LD (JavaScript Object Notation for Linked Data) is the recommended format for schema markup. It's easy to implement and doesn't interfere with your page content." },
                { q: "How do I add schema to my website?", a: "Copy the generated JSON-LD code and paste it in the <head> or <body> section of your HTML page, wrapped in <script type='application/ld+json'> tags." },
                { q: "Does schema markup improve SEO?", a: "Yes! Schema markup helps search engines understand your content better, can improve click-through rates with rich snippets, and is a ranking factor for some search features." },
                { q: "Is this tool free?", a: "Yes, our schema generator is 100% free with no limits." }
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
                { href: "/meta-tags-generator", icon: "🏷️", title: "Meta Tags Generator", desc: "Create SEO meta tags" },
                { href: "/robots-txt-generator", icon: "🤖", title: "Robots.txt Generator", desc: "Control crawler access" },
                { href: "/sitemap-generator", icon: "🗺️", title: "Sitemap Generator", desc: "Create XML sitemaps" },
                { href: "/google-keyword-research", icon: "🔑", title: "Keyword Research", desc: "Find keywords" }
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
