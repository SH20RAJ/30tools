import YouTubeIdeaGenerator from "@/components/tools/youtube/YouTubeIdeaGenerator";

export const metadata = {
  title: "YouTube Video Idea Generator - AI Content Ideas Free | 30tools",
  description: "Generate viral YouTube video ideas with AI. Get trending content ideas for your niche. Perfect for content creators, vloggers, and YouTubers looking for inspiration.",
  keywords: [
    "youtube video ideas",
    "youtube idea generator",
    "youtube content ideas",
    "video ideas generator",
    "youtube video idea generator",
    "youtube channel ideas",
    "youtube content ideas generator",
    "viral video ideas",
    "youtube niche ideas",
    "youtube video topics",
    "youtube video ideas generator free",
    "ai video idea generator",
    "content ideas for youtube",
    "youtube video ideas 2024"
  ].join(", "),

  openGraph: {
    title: "YouTube Video Idea Generator - AI Powered",
    description: "⚡ Generate viral YouTube video ideas with AI. Get trending content ideas instantly!",
    url: "https://30tools.com/youtube-idea-generator",
    siteName: "30tools", type: "website",
    images: [{ url: "/og-images/youtube-idea-generator.jpg", width: 1200, height: 630, alt: "YouTube Idea Generator" }],
  },

  twitter: { card: "summary_large_image", title: "YouTube Idea Generator - Free AI Tool", description: "⚡ Get viral video ideas for your channel!", images: ["/og-images/youtube-idea-generator.jpg"], creator: "@30tools" },
  alternates: { canonical: "https://30tools.com/youtube-idea-generator" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org", "@type": "WebApplication",
    "name": "YouTube Video Idea Generator",
    "description": "AI-powered tool to generate YouTube video ideas and content topics.",
    "url": "https://30tools.com/youtube-idea-generator",
    "applicationCategory": ["UtilitiesApplication"],
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "14567" }
  }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function YouTubeIdeaGeneratorPage() {
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
              <li className="text-foreground font-medium">YouTube Idea Generator</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">YouTube Video Idea Generator</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Generate viral YouTube video ideas with AI. Get trending content topics for your niche and never run out of video ideas again!
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🤖 AI-Powered</span><span>🔥 Trending Ideas</span><span>🆓 100% Free</span><span>💡 Unlimited Ideas</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <YouTubeIdeaGenerator />
          </div>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "1️⃣", title: "Enter Your Niche", desc: "Tell us your channel's topic or niche" },
                { step: "2️⃣", title: "AI Generation", desc: "Our AI analyzes trends and generates ideas" },
                { step: "3️⃣", title: "Get Ideas", desc: "Receive unique video ideas tailored to you" }
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Popular Niche Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🎮", title: "Gaming", desc: "Game reviews, walkthroughs, esports" },
                { icon: "💄", title: "Beauty", desc: "Makeup tutorials, skincare, reviews" },
                { icon: "🍳", title: "Cooking", desc: "Recipes, food reviews, kitchen tips" },
                { icon: "💻", title: "Tech", desc: "Reviews, tutorials, unboxings" },
                { icon: "💪", title: "Fitness", desc: "Workouts, nutrition, motivation" },
                { icon: "📚", title: "Education", desc: "Tutorials, courses, explainers" },
                { icon: "🎵", title: "Music", desc: "Covers, production, reviews" },
                { icon: "✈️", title: "Travel", desc: "Vlogs, guides, tips" }
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
                { q: "How does the YouTube idea generator work?", a: "Our AI analyzes trending topics, search patterns, and successful video formats in your niche to generate unique, relevant video ideas tailored to your channel." },
                { q: "Are these ideas guaranteed to go viral?", a: "While we generate ideas based on trending patterns, success depends on execution, timing, and many other factors. Use these as inspiration and add your unique creativity." },
                { q: "Is this free to use?", a: "Yes, our YouTube video idea generator is 100% free with unlimited idea generation." },
                { q: "Can I use these ideas for any niche?", a: "Absolutely! Just enter your niche or topic and our AI will generate ideas specific to that category." },
                { q: "How often are trending topics updated?", a: "Our AI continuously learns from current trends to provide relevant and timely ideas." }
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
                { href: "/youtube-script-generator", icon: "✍️", title: "Script Generator", desc: "Generate video scripts" },
                { href: "/youtube-tag-generator", icon: "🏷️", title: "Tag Generator", desc: "SEO-optimized tags" },
                { href: "/youtube-thumbnail-downloader", icon: "🖼️", title: "Thumbnail Downloader", desc: "Download HD thumbnails" },
                { href: "/youtube-summary-generator", icon: "📋", title: "Video Summarizer", desc: "AI video summaries" }
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
