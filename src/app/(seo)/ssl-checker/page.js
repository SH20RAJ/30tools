import SSLChecker from "@/components/tools/seo/SSLChecker";

export const metadata = {
  title: "SSL Checker - Free SSL Certificate Checker Tool | 30tools",
  description: "Check SSL certificates for any website. Verify SSL validity, expiration, and security. Free SSL/TLS certificate checker tool.",
  keywords: [
    "ssl checker",
    "ssl certificate checker",
    "check ssl certificate",
    "ssl tester",
    "ssl certificate tester",
    "ssl validator",
    "https checker",
    "ssl expiry checker",
    "ssl certificate check free"
  ].join(", "),

  openGraph: {
    title: "SSL Checker - Free Certificate Checker",
    description: "⚡ Check SSL certificates for any website!",
    url: "https://30tools.com/ssl-checker",
    siteName: "30tools", type: "website",
  },

  alternates: { canonical: "https://30tools.com/ssl-checker" },
  robots: { index: true, follow: true }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function SSLCheckerPage() {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li><li>/</li>
              <li><a href="/#seo-tools" className="hover:text-primary">SEO Tools</a></li><li>/</li>
              <li className="text-foreground font-medium">SSL Checker</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">SSL Certificate Checker</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Check SSL/TLS certificates for any website. Verify validity, expiration dates, issuer, and security configuration.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🔒 Security Check</span><span>📅 Expiry Date</span><span>✅ Validation</span><span>🆓 100% Free</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <SSLChecker />
          </div>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">What We Check</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "✅", title: "Validity", desc: "Is the certificate valid?" },
                { icon: "📅", title: "Expiration", desc: "When does it expire?" },
                { icon: "🏢", title: "Issuer", desc: "Who issued the certificate?" },
                { icon: "🔐", title: "Encryption", desc: "Encryption strength" },
                { icon: "🔗", title: "Chain", desc: "Certificate chain status" },
                { icon: "🌐", title: "Domain Match", desc: "Does it match your domain?" },
                { icon: "⚠️", title: "Vulnerabilities", desc: "Security issues" },
                { icon: "📋", title: "Details", desc: "Full certificate info" }
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
                { q: "What is an SSL certificate?", a: "SSL (Secure Sockets Layer) certificates encrypt data between your browser and a website, ensuring secure communication and showing the padlock icon in browsers." },
                { q: "Why is SSL important for SEO?", a: "Google uses HTTPS as a ranking factor. Websites with valid SSL certificates rank higher and appear more trustworthy to users." },
                { q: "What happens if my SSL expires?", a: "Browsers will show security warnings, users may leave your site, and your search rankings can drop. Always renew before expiration." },
                { q: "Is this tool free?", a: "Yes, our SSL checker is 100% free with unlimited checks." }
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
                { href: "/website-analyzer", icon: "🔍", title: "Website Analyzer", desc: "Full site analysis" },
                { href: "/broken-link-checker", icon: "🔗", title: "Broken Link Checker", desc: "Find broken links" },
                { href: "/robots-txt-generator", icon: "🤖", title: "Robots.txt Generator", desc: "Control crawlers" },
                { href: "/sitemap-generator", icon: "🗺️", title: "Sitemap Generator", desc: "Create sitemaps" }
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
