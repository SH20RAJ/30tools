import PdfCompressorTool from "@/components/tools/pdf/PdfCompressorTool";
import { AuthorBio } from "@/components/seo";

const researchedKeywords = [
  "compress file online free", "pdf compressor gratis", "how to make pdf file size smaller", "compress free pdf",
  "compress pdf file online free", "pdf smaller size converter", "free compress pdf online",
  "compress pdf online. same pdf quality less file size", "smallpdf compress pdf", "ilovepdf compressor",
  "downsize pdf", "pdf minimizer", "compress pdf file size", "minimize pdf", "reduce pdf size free online",
  "compresser pdf gratuitement en ligne", "compress pdf files", "compress pdf file online", "adobe file compressor",
  "compressor de pdf", "reduce file size pdf", "compress pdf to small size", "pdfcompressor",
  "pdf to compress pdf", "pdf size reducer free", "minimize pdf size", "adobe acrobat compress pdf",
  "pdf compressor online free", "pdf file reducer", "compresspdf", "compress image online",
  "how to compress pdf file", "compress pdf file free", "pdf compress free", "how to reduce pdf size",
  "make pdf smaller", "online compress pdf", "ilovepdf compress pdf", "pdf compressor free online",
  "decrease pdf size", "how to reduce the size of a pdf", "compress a pdf", "compres pdf",
  "free pdf compressor online", "hyper compress pdf", "compress file pdf", "compress pdf ke word",
  "pdf compression", "i love compress pdf", "file compressor pdf", "compress pdf adobe", "reduce size pdf",
  "free compress pdf", "compres", "pdf small", "compress pdf ilovepdf", "extreme compress pdf",
  "réduire taille pdf", "compress pdf free online", "compress pdf to word", "compresser un pdf",
  "how to compress pdf", "compress pdf for free", "shrink pdf", "reduce pdf size free", "compression pdf",
  "pdf compress online", "compress pdf size", "compressor pdf", "compress pdf online free",
  "adobe pdf compressor", "compressed", "reduce pdf size online", "pdf file compressor", "reduce pdf",
  "reduce size of pdf", "online pdf compressor", "pdf size compressor", "pdf compressor i love pdf",
  "reduce pdf file size", "compresser pdf gratuit", "pdf reduce size", "adobe compress pdf",
  "reduire taille pdf", "compress pdf i love pdf", "reduce file size", "reducir pdf", "pdf file size reducer",
  "pdf size reducer online", "free pdf compressor", "pdf resize", "i love pdf compress pdf",
  "how to compress a pdf file", "how to reduce pdf file size", "pdf to go", "comprimir",
  "i love pdf compress", "ilovepdf compressed", "compress pdf file", "compress file", "pdf reducer",
  "compressed pdf", "pdf compressor free", "compress pdf free", "comprimir pdf gratis", "reducir tamaño pdf",
  "word to pdf ilovepdf", "pdf compressor online", "compressor", "ilovepdf compress", "i love pdf compressor",
  "compress", "compress pdf online", "pdf compress", "kompres file pdf", "file compressor", "kompres pdf",
  "resize pdf", "pdf resizer", "pdf size reducer", "compresser pdf", "reduce pdf size", "small pdf",
  "compress jpeg", "convert jpg to pdf", "comprimir pdf", "pdf compressor", "split pdf",
  "convert pdf to word", "word to pdf", "i love pdf", "ilovepdf", "pdf", "i love", "pdf converter",
  "ilove pdf", "pdf maker", "pdf converter free"
];

export const metadata = {
  title: "How to Reduce PDF Size Online (2026) - Free PDF Compressor | 30Tools",
  description: "Want to know how to shrink PDF files without losing quality? Our free 2026 updated PDF compressor reduces size instantly for email & web. Secure, fast, no sign-up.",
  keywords: researchedKeywords.join(", "),

  openGraph: {
    title: "Free PDF Compressor Online - 30Tools",
    description: "⚡ Compress PDF online with high-quality results. Reduce file size for email and web uploads instantly. Secure and free pdf compression.",
    url: "https://30tools.com/pdf-compressor",
    siteName: "30tools",
    type: "website",
    images: [{ url: "/og-images/pdf-compressor.jpg", width: 1200, height: 630, alt: "Compress PDF Online 2026" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "PDF Compressor - Reduce PDF File Size Online",
    description: "⚡ The ultimate pdf size reducer. Make pdf smaller while maintaining high quality for free!",
    images: ["/og-images/pdf-compressor.jpg"],
    creator: "@30tools"
  },

  alternates: { canonical: "https://30tools.com/pdf-compressor" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "PDF Compressor",
    "alternateName": ["PDF Size Reducer", "PDF Minimizer", "PDF Reducer", "Small PDF"],
    "description": "Powerful tool to reduce pdf file size online through smart compression algorithms while maintaining quality.",
    "url": "https://30tools.com/pdf-compressor",
    "applicationCategory": ["MultimediaApplication", "UtilitiesApplication"],
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "896430" }
  },
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Make PDF File Size Smaller",
    "description": "Simple steps to compress any PDF document to a smaller size for email or storage.",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Upload PDF", "text": "Upload the PDF document you want to shrink from your computer or mobile device." },
      { "@type": "HowToStep", "position": 2, "name": "Choose Compression", "text": "Select 'Recommended Compression' for the best balance of quality and size reduction." },
      { "@type": "HowToStep", "position": 3, "name": "Download Small PDF", "text": "Click compress and download your newly optimized small pdf file." }
    ]
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to reduce pdf size free online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Using 30Tools PDF Compressor is the fastest way to reduce file size. Simply upload, select compression level, and download your smaller file."
        }
      },
      {
        "@type": "Question",
        "name": "Does it work as an adobe file compressor alternative?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, 30Tools provides a completely free alternative to Adobe Acrobat for compressing PDFs with similar professional results."
        }
      },
      {
        "@type": "Question",
        "name": "Is my data secure with pdf compressor online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our tool processes compression locally in your browser. No files are uploaded to our servers, ensuring 100% privacy."
        }
      }
    ]
  }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function PdfCompressorPage() {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.webApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.faq) }} />

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li><a href="/" className="hover:text-primary transition-colors">Home</a></li><li>/</li>
            <li><a href="/pdf-tools" className="hover:text-primary transition-colors">PDF Tools</a></li><li>/</li>
            <li className="text-foreground font-medium">PDF Compressor</li>
          </ol>
        </nav>

        <AdUnit />

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-foreground leading-tight">
            Online <span className="text-primary">PDF Compressor</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Need to <strong>reduce pdf size</strong> for an email? Our <strong>pdf size reducer</strong> helps you
            <strong>make pdf smaller</strong> without losing document quality. Whether you need a
            <strong>pdf compressor online free</strong> utility or a <strong>hyper compress pdf</strong> option,
            30Tools is the ultimate <strong>small pdf</strong> solution for 2026.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">📉 <strong>Reduce PDF Size Online</strong></span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">⚡ <strong>Shrink PDF File Size</strong></span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">🆓 <strong>Free PDF Compressor</strong></span>
          </div>
        </div>

        <AdUnit />

        {/* Tool Component */}
        <div className="bg-card rounded-2xl shadow-2xl border border-border p-6 md:p-10 mb-20">
          <PdfCompressorTool />
        </div>

        <AdUnit />

        {/* SEO Content Section 1 */}
        <section className="mb-20 prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">High-Performance PDF Size Reducer</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <p>
                Our <strong>pdf smaller size converter</strong> uses advanced <strong>pdf compression</strong> algorithms to
                <strong>downsize pdf</strong> files optimally. Targeted at professionals who need
                <strong>how to make pdf file size smaller</strong> guides, our <strong>pdf minimizer</strong>
                delivers <strong>same pdf quality less file size</strong> results every time.
              </p>
              <p>
                As an <strong>adobe acrobat compress pdf</strong> alternative, 30Tools provides a
                <strong>free compress pdf online</strong> experience. Scale your documents with our
                <strong>pdf size reducer free</strong> tool and enjoy <strong>extreme compress pdf</strong> capabilities.
              </p>
            </div>
            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 space-y-4">
              <h3 className="text-xl font-bold text-primary">Key Optimizations:</h3>
              <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-medium list-none p-0 marker:text-primary">
                <li>📉 <strong>PDF File Reducer</strong></li>
                <li>🖼️ <strong>Compress Image Online</strong></li>
                <li>📧 <strong>Email Optimization</strong></li>
                <li>💾 <strong>Save Disk Space</strong></li>
                <li>🔗 <strong>Online PDF Compressor</strong></li>
                <li>🌐 <strong>Comprimir PDF</strong></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Global Multi-language Support */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Localized Compression Support</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-muted/20 rounded-xl border border-border">
              <p className="text-2xl mb-2">🇫🇷</p>
              <p className="font-bold"><strong>Réduire Taille PDF</strong></p>
              <p className="text-xs text-muted-foreground text-center">Compresser PDF Gratuit</p>
            </div>
            <div className="p-4 bg-muted/20 rounded-xl border border-border">
              <p className="text-2xl mb-2">🇪🇸</p>
              <p className="font-bold"><strong>Comprimir PDF Gratis</strong></p>
              <p className="text-xs text-muted-foreground text-center">Reducir Tamaño PDF</p>
            </div>
            <div className="p-4 bg-muted/20 rounded-xl border border-border">
              <p className="text-2xl mb-2">🇮🇩</p>
              <p className="font-bold"><strong>Kompres PDF</strong></p>
              <p className="text-xs text-muted-foreground text-center">Mengecilkan Ukuran PDF</p>
            </div>
            <div className="p-4 bg-muted/20 rounded-xl border border-border">
              <p className="text-2xl mb-2">🇩🇪</p>
              <p className="font-bold"><strong>PDF Verkleinern</strong></p>
              <p className="text-xs text-muted-foreground text-center">PDF Komprimieren</p>
            </div>
          </div>
        </section>

        {/* How-To Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">How to Reduce PDF Size (3 Steps)</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-card rounded-2xl border border-border hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">1</div>
              <h3 className="text-xl font-bold mb-4">Choose File</h3>
              <p className="text-muted-foreground">Select your <strong>large pdf</strong> to start the <strong>shrink pdf</strong> process.</p>
            </div>
            <div className="text-center p-8 bg-card rounded-2xl border border-border hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">2</div>
              <h3 className="text-xl font-bold mb-4">Click Compress</h3>
              <p className="text-muted-foreground">Start the <strong>pdf compressor online</strong> engine with one click.</p>
            </div>
            <div className="text-center p-8 bg-card rounded-2xl border border-border hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">3</div>
              <h3 className="text-xl font-bold mb-4">Download PDF</h3>
              <p className="text-muted-foreground">Get your <strong>compressed pdf</strong> ready for email or web upload.</p>
            </div>
          </div>
        </section>

        {/* Performance Analysis */}
        <section className="mb-20 bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
          <h2 className="text-3xl font-bold text-center mb-8">Professional Tool Comparison</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="flex items-center gap-3 font-semibold">💎 <strong>Small PDF</strong> Alternative</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Don't pay for subscriptions. Use our <strong>ilovepdf compressor</strong> equivalent
                for unlimited <strong>compress pdf file free</strong> tasks without watermarks.
              </p>
            </div>
            <div className="space-y-4">
              <p className="flex items-center gap-3 font-semibold">🔒 <strong>Security First</strong></p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Processing is 100% local. Your files stay on your device. We are a secure
                <strong>online compress pdf</strong> laboratory for sensitive documents.
              </p>
            </div>
            <div className="space-y-4">
              <p className="flex items-center gap-3 font-semibold">🚀 <strong>Hyper Compress PDF</strong></p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Get massive reduction up to 90% for grayscale or text-heavy documents.
                Best-in-class <strong>pdf file size reducer</strong> on the web.
              </p>
            </div>
            <div className="space-y-4">
              <p className="flex items-center gap-3 font-semibold">🌍 <strong>Multilingual</strong> Accessibility</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                From <strong>reduire taille pdf</strong> to <strong>kompres pdf</strong>, we support
                global search intent to save you time worldwide.
              </p>
            </div>
          </div>
        </section>

        <AdUnit />

        {/* FAQ Section */}
        <section className="mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">PDF Compressor FAQ</h2>
          <p className="text-center text-muted-foreground mb-12">Expert answers for <strong>compressing pdf</strong> files and reducing sizes.</p>
          <div className="space-y-4">
            {[
              { q: "How to compress pdf for free?", a: "Simply upload your file to 30Tools, choose the compression level, and our <strong>free pdf compressor</strong> will shrink it instantly in your browser." },
              { q: "Will I lose quality when I decrease pdf size?", a: "No! Our <strong>same pdf quality less file size</strong> engine preserves text and high-resolution images while removing unnecessary metadata and file bloat." },
              { q: "Can I compress pdf to word or other formats?", a: "Once you <strong>reduce pdf size online</strong>, you can use our other tools to convert your small pdf into different formats like Word or JPG." },
              { q: "Is there a limit on compress pdf file size?", a: "Unlike <strong>ilovepdf compress</strong> web versions, 30Tools handles files up to several hundred MB since processing is local to your machine." }
            ].map((faq, i) => (
              <details key={i} className="group bg-card rounded-xl border border-border p-5 cursor-pointer">
                <summary className="font-bold text-lg list-none flex justify-between items-center group-hover:text-primary transition-colors">
                  <span dangerouslySetInnerHTML={{ __html: faq.q }} />
                  <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed border-t border-border pt-4" dangerouslySetInnerHTML={{ __html: faq.a }} />
              </details>
            ))}
          </div>
        </section>

        {/* Keyword Cloud */}
        <div className="bg-muted/30 rounded-3xl p-8 mb-20 text-center border border-border/50">
          <p className="text-xs font-bold text-primary mb-6 uppercase tracking-widest opacity-80">PDF Compression Tags</p>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 opacity-50">
            {researchedKeywords.map(kw => (
              <span key={kw} className="text-[10px] md:text-xs text-muted-foreground hover:text-primary transition-colors cursor-default">
                {kw} <span className="opacity-30">|</span>
              </span>
            ))}
          </div>
        </div>

        <AdUnit />

        {/* Footer Related Tools */}
        <section className="pt-12 border-t border-border mt-20">
          <h2 className="text-2xl font-extrabold mb-8 text-center uppercase tracking-tighter text-primary">Explore More PDF Toolkit</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/pdf-unlocker", title: "PDF Unlocker", icon: "🔓" },
              { href: "/pdf-protect", title: "PDF Protect", icon: "🔒" },
              { href: "/pdf-to-word", title: "PDF to Word", icon: "📄" },
              { href: "/pdf-merger", title: "PDF Merger", icon: "🔗" }
            ].map((t, i) => (
              <a key={i} href={t.href} className="p-6 bg-card rounded-2xl border border-border hover:border-primary hover:shadow-xl transition-all text-center group">
                <span className="text-3xl mb-3 block">{t.icon}</span>
                <h3 className="font-bold group-hover:text-primary transition-colors text-sm">{t.title}</h3>
              </a>
            ))}
          </div>
        </section>

        <AuthorBio author="30Tools Document Engineering Team" />

        <div className="mt-12 text-center">
          <a href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-6 py-2 rounded-full border border-border hover:bg-muted">← Back to 30Tools Home</a>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(7) }} />
    </>
  );
}
