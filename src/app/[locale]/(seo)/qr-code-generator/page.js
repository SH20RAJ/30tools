import QRCodeGeneratorTool from "@/components/tools/utilities/QRCodeGeneratorTool";

export const metadata = {
  title: "QR Code Generator - Free QR Code Maker | 30tools",
  description: "Generate QR codes for URLs, text, WiFi, and more. Customize colors and download in PNG. Free QR code generator tool.",
  keywords: ["qr code generator", "qr code maker", "create qr code", "free qr code", "qr code creator", "qr code generator free", "custom qr code"].join(", "),
  openGraph: { title: "QR Code Generator - Free", description: "⚡ Create custom QR codes instantly!", url: "https://30tools.com/qr-code-generator", siteName: "30tools", type: "website" },
  alternates: { canonical: "https://30tools.com/qr-code-generator" },
  robots: { index: true, follow: true }
};

const AdUnit = () => (<div className="my-6 flex justify-center"><ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins></div>);

export default function QRCodeGeneratorPage() {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8"><ol className="flex items-center space-x-2 text-sm text-muted-foreground"><li><a href="/" className="hover:text-primary">Home</a></li><li>/</li><li><a href="/#seo-tools" className="hover:text-primary">SEO Tools</a></li><li>/</li><li className="text-foreground font-medium">QR Code Generator</li></ol></nav>
          <AdUnit />
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">QR Code Generator</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">Create custom QR codes for websites, text, WiFi, emails, and more. Download in high quality for print or digital use.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground"><span>📱 Scannable</span><span>🎨 Customizable</span><span>⬇️ Download PNG</span><span>🆓 100% Free</span></div>
          </div>
          <AdUnit />
          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16"><QRCodeGeneratorTool /></div>
          <AdUnit />
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">QR Code Types</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{ icon: "🔗", title: "URL", desc: "Link to any website" }, { icon: "📝", title: "Text", desc: "Plain text messages" }, { icon: "📶", title: "WiFi", desc: "Share WiFi credentials" }, { icon: "📧", title: "Email", desc: "Email address with subject" }, { icon: "📞", title: "Phone", desc: "Click-to-call numbers" }, { icon: "📍", title: "Location", desc: "GPS coordinates" }, { icon: "📱", title: "SMS", desc: "Pre-filled text messages" }, { icon: "💳", title: "vCard", desc: "Contact cards" }].map((f, i) => (<div key={i} className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow"><span className="text-4xl mb-4 block">{f.icon}</span><h3 className="text-lg font-semibold mb-2">{f.title}</h3><p className="text-sm text-muted-foreground">{f.desc}</p></div>))}
            </div>
          </section>
          <AdUnit />
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Related Tools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[{ href: "/meta-tags-generator", icon: "🏷️", title: "Meta Tags", desc: "Create meta tags" }, { href: "/schema-generator", icon: "📋", title: "Schema", desc: "Structured data" }, { href: "/sitemap-generator", icon: "🗺️", title: "Sitemap", desc: "Create sitemaps" }, { href: "/ssl-checker", icon: "🔒", title: "SSL Checker", desc: "Check SSL" }].map((tool, i) => (<a key={i} href={tool.href} className="group p-5 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all"><div className="flex items-center gap-3 mb-2"><span className="text-2xl">{tool.icon}</span><h3 className="font-semibold group-hover:text-primary transition-colors">{tool.title}</h3></div><p className="text-sm text-muted-foreground">{tool.desc}</p></a>))}
            </div>
          </section>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(5) }} />
    </>
  );
}
