import YouTubeScriptGenerator from "@/components/tools/youtube/YouTubeScriptGenerator";

export const metadata = {
  title: "YouTube Script Generator - AI Video Script Writer Free | 30tools",
  description: "Generate engaging YouTube video scripts with AI. Create professional scripts for tutorials, vlogs, reviews, and more. Free AI-powered script writing tool.",
  keywords: [
    "youtube script generator",
    "youtube script writer",
    "video script generator",
    "ai script generator",
    "youtube video script",
    "script generator for youtube",
    "youtube script ai",
    "video script writer",
    "youtube script generator free",
    "ai video script generator",
    "youtube script template",
    "youtube video script generator",
    "script writing for youtube"
  ].join(", "),

  openGraph: {
    title: "YouTube Script Generator - AI Script Writer",
    description: "⚡ Generate engaging YouTube video scripts with AI instantly!",
    url: "https://30tools.com/youtube-script-generator",
    siteName: "30tools", type: "website",
    images: [{ url: "/og-images/youtube-script-generator.jpg", width: 1200, height: 630, alt: "YouTube Script Generator" }],
  },

  twitter: { card: "summary_large_image", title: "YouTube Script Generator - Free AI", description: "⚡ Generate video scripts with AI!", images: ["/og-images/youtube-script-generator.jpg"], creator: "@30tools" },
  alternates: { canonical: "https://30tools.com/youtube-script-generator" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org", "@type": "WebApplication",
    "name": "YouTube Script Generator",
    "description": "AI-powered tool to generate YouTube video scripts.",
    "url": "https://30tools.com/youtube-script-generator",
    "applicationCategory": ["UtilitiesApplication"],
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "12345" }
  }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function YouTubeScriptGeneratorPage() {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.webApp) }} />

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li><li>/</li>
              <li><a href="/#youtube-tools" className="hover:text-primary">YouTube Tools</a></li><li>/</li>
              <li className="text-foreground font-medium">YouTube Script Generator</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">YouTube Script Generator</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Generate engaging, professional YouTube video scripts with AI. Perfect for tutorials, vlogs, reviews, and any video content.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🤖 AI-Powered</span><span>✍️ Pro Scripts</span><span>🆓 100% Free</span><span>⚡ Instant</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <YouTubeScriptGenerator />
          </div>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Script Types We Generate</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "📚", title: "Tutorials", desc: "Step-by-step educational content" },
                { icon: "🎬", title: "Vlogs", desc: "Personal and lifestyle videos" },
                { icon: "⭐", title: "Reviews", desc: "Product and service reviews" },
                { icon: "📰", title: "News/Commentary", desc: "Opinion and reaction videos" },
                { icon: "🎯", title: "How-To Guides", desc: "Instructional content" },
                { icon: "📊", title: "Explainers", desc: "Complex topic breakdowns" },
                { icon: "🎤", title: "Interviews", desc: "Q&A and interview formats" },
                { icon: "😂", title: "Entertainment", desc: "Skits and comedy content" }
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How to Generate Scripts</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "1️⃣", title: "Enter Topic", desc: "Describe your video topic and target audience" },
                { step: "2️⃣", title: "Select Style", desc: "Choose your preferred script format and tone" },
                { step: "3️⃣", title: "Generate", desc: "Get a complete, ready-to-record script" }
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
                { q: "How does the AI script generator work?", a: "Our AI analyzes your topic, target audience, and preferred style to generate a complete video script with hook, main content, and call-to-action." },
                { q: "Can I customize the generated scripts?", a: "Absolutely! The generated scripts are starting points that you can edit and personalize to match your voice and style." },
                { q: "Is this free to use?", a: "Yes, our YouTube script generator is 100% free with no limits on usage." },
                { q: "What makes a good YouTube script?", a: "A good script has a strong hook, clear structure, engaging content, and a call-to-action. Our AI includes all these elements." },
                { q: "Can it generate scripts for any niche?", a: "Yes, our AI can generate scripts for virtually any niche or topic. Just describe your video idea and audience." }
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Related YouTube Tools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/youtube-idea-generator", icon: "💡", title: "Idea Generator", desc: "Get video ideas" },
                { href: "/youtube-tag-generator", icon: "🏷️", title: "Tag Generator", desc: "SEO-optimized tags" },
                { href: "/youtube-thumbnail-downloader", icon: "🖼️", title: "Thumbnail Downloader", desc: "Download HD thumbnails" },
                { href: "/youtube-timestamp-generator", icon: "⏱️", title: "Timestamp Generator", desc: "Generate timestamps" }
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

      <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(7) }} />
    </>
  );
}
