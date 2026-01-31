import RobotsTxtGenerator from "@/components/tools/seo/RobotsTxtGenerator";

export const metadata = {
  title: "Robots.txt Generator - Free Robots File Creator | 30tools",
  description: "Generate robots.txt files for your website. Control search engine crawlers with our free robots.txt generator. Easy to use with common presets.",
  keywords: [
    "robots.txt generator",
    "robots txt generator",
    "robots file generator",
    "create robots.txt",
    "robots.txt creator",
    "robots.txt maker",
    "robots.txt generator free",
    "seo robots.txt",
    "robots.txt tool"
  ].join(", "),

  openGraph: {
    title: "Robots.txt Generator - Free Robots File Creator",
    description: "⚡ Generate robots.txt files easily. Control search engine crawlers!",
    url: "https://30tools.com/robots-txt-generator",
    siteName: "30tools", type: "website",
    images: [{ url: "/og-images/robots-txt-generator.jpg", width: 1200, height: 630, alt: "Robots.txt Generator" }],
  },

  twitter: { card: "summary_large_image", title: "Robots.txt Generator - Free", description: "⚡ Create robots.txt files easily!", images: ["/og-images/robots-txt-generator.jpg"], creator: "@30tools" },
  alternates: { canonical: "https://30tools.com/robots-txt-generator" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Robots Txt Generator",
  "description": "Free robots txt generator tool with professional results. No registration required, instant processing, secure & unlimited use.",
  "url": "https://30tools.com/robots-txt-generator",
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

export default function RobotsTxtGeneratorPage() {
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
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li><li>/</li>
              <li><a href="/#seo-tools" className="hover:text-primary">SEO Tools</a></li><li>/</li>
              <li className="text-foreground font-medium">Robots.txt Generator</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Robots.txt Generator</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Create robots.txt files to control how search engine crawlers access your website. Free tool with common presets and custom rules.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🤖 Control Crawlers</span><span>🚫 Block Paths</span><span>✅ Allow Paths</span><span>🆓 100% Free</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <RobotsTxtGenerator />
          </div>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Common Robots.txt Directives</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "✅", title: "Allow", desc: "Permit crawlers to access specific paths" },
                { icon: "🚫", title: "Disallow", desc: "Block crawlers from specific paths" },
                { icon: "🗺️", title: "Sitemap", desc: "Point to your XML sitemap location" },
                { icon: "⏱️", title: "Crawl-delay", desc: "Set delay between crawler requests" },
                { icon: "🤖", title: "User-agent", desc: "Target specific crawlers/bots" },
                { icon: "🔒", title: "Private Areas", desc: "Block admin and login pages" },
                { icon: "📁", title: "Media Folders", desc: "Control access to media files" },
                { icon: "🔍", title: "Search Pages", desc: "Block internal search results" }
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
                { q: "What is robots.txt?", a: "Robots.txt is a text file that tells search engine crawlers which pages or sections of your website they can or cannot access." },
                { q: "Where should I put robots.txt?", a: "The robots.txt file must be placed in the root directory of your website (e.g., https://example.com/robots.txt)." },
                { q: "Can robots.txt block all crawlers?", a: "Yes, you can use 'User-agent: * Disallow: /' to block all crawlers from your entire site, but this is rarely recommended." },
                { q: "Is robots.txt mandatory?", a: "No, but it's highly recommended for SEO. It helps search engines crawl your site more efficiently." },
                { q: "Does robots.txt guarantee privacy?", a: "No, robots.txt is a suggestion, not a security measure. Some bots may ignore it. Use proper authentication for truly private content." }
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
                { href: "/sitemap-generator", icon: "🗺️", title: "Sitemap Generator", desc: "Create XML sitemaps" },
                { href: "/meta-tags-generator", icon: "🏷️", title: "Meta Tags Generator", desc: "Create SEO meta tags" },
                { href: "/schema-generator", icon: "📋", title: "Schema Generator", desc: "Create structured data" },
                { href: "/ssl-checker", icon: "🔒", title: "SSL Checker", desc: "Check SSL certificates" }
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
