import YouTubeCommentResponder from "@/components/tools/youtube/YouTubeCommentResponder";

export const metadata = {
  title: "YouTube Comment Reply Generator - AI Response Writer Free | 30tools",
  description: "Generate professional YouTube comment replies with AI. Create engaging responses to viewer comments. Save time with AI-powered comment management.",
  keywords: [
    "youtube comment reply generator",
    "youtube comment responder",
    "ai comment reply",
    "youtube comment writer",
    "comment response generator",
    "youtube comment ai",
    "auto reply youtube comments",
    "youtube comment reply template",
    "youtube comment reply generator free",
    "ai youtube comment response"
  ].join(", "),

  openGraph: {
    title: "YouTube Comment Reply Generator - AI Powered",
    description: "⚡ Generate professional YouTube comment replies with AI!",
    url: "https://30tools.com/youtube-comment-responder",
    siteName: "30tools", type: "website",
    images: [{ url: "/og-images/youtube-comment-responder.jpg", width: 1200, height: 630, alt: "YouTube Comment Reply Generator" }],
  },

  twitter: { card: "summary_large_image", title: "YouTube Comment Reply Generator - Free", description: "⚡ AI-powered comment responses!", images: ["/og-images/youtube-comment-responder.jpg"], creator: "@30tools" },
  alternates: { canonical: "https://30tools.com/youtube-comment-responder" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org", "@type": "WebApplication",
    "name": "YouTube Comment Reply Generator",
    "description": "AI-powered tool to generate YouTube comment replies.",
    "url": "https://30tools.com/youtube-comment-responder",
    "applicationCategory": ["UtilitiesApplication"],
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.7", "ratingCount": "6543" }
  }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function YouTubeCommentResponderPage() {
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
              <li className="text-foreground font-medium">YouTube Comment Reply Generator</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">YouTube Comment Reply Generator</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Generate professional, engaging replies to YouTube comments with AI. Save hours of time while maintaining genuine viewer engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🤖 AI-Powered</span><span>💬 Engaging Replies</span><span>🆓 100% Free</span><span>⚡ Instant</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <YouTubeCommentResponder />
          </div>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Why Reply to YouTube Comments?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "📈", title: "Algorithm Boost", desc: "Engagement signals help your videos rank higher" },
                { icon: "👥", title: "Build Community", desc: "Create loyal subscribers through interaction" },
                { icon: "💬", title: "More Comments", desc: "Replies encourage more discussion" },
                { icon: "❤️", title: "Show You Care", desc: "Viewers appreciate creator responses" },
                { icon: "⏱️", title: "Save Time", desc: "AI generates replies in seconds" },
                { icon: "✨", title: "Stay Consistent", desc: "Maintain engagement on all videos" },
                { icon: "🎯", title: "Professional", desc: "Well-crafted, thoughtful responses" },
                { icon: "🔄", title: "Scale", desc: "Handle high comment volumes easily" }
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "1️⃣", title: "Paste Comment", desc: "Copy the viewer's comment you want to reply to" },
                { step: "2️⃣", title: "Select Tone", desc: "Choose friendly, professional, or casual tone" },
                { step: "3️⃣", title: "Get Reply", desc: "Copy the AI-generated response and post it" }
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
                { q: "How does the AI generate replies?", a: "Our AI analyzes the comment's content, sentiment, and context to generate relevant, thoughtful replies that feel authentic and engaging." },
                { q: "Can I customize the tone of replies?", a: "Yes, you can choose between friendly, professional, or casual tones to match your channel's voice." },
                { q: "Is this free to use?", a: "Yes, our YouTube comment reply generator is 100% free with no limits." },
                { q: "Will replies sound natural?", a: "Our AI is trained to generate human-like responses that feel genuine and conversational." },
                { q: "Can it handle negative comments?", a: "Yes, the AI can generate appropriate, professional responses to negative or critical comments." }
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
                { href: "/youtube-script-generator", icon: "✍️", title: "Script Generator", desc: "Generate video scripts" },
                { href: "/youtube-tag-generator", icon: "🏷️", title: "Tag Generator", desc: "SEO-optimized tags" },
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
