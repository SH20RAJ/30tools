import YouTubeSummaryGenerator from "@/components/tools/youtube/YouTubeSummaryGenerator";

export const metadata = {
  title: "YouTube Video Summarizer - AI Summary Generator Free | 30tools",
  description: "Get AI-generated summaries of YouTube videos instantly. Summarize long videos in seconds with our free YouTube summarizer tool. Perfect for quick video insights.",
  keywords: [
    "youtube summarizer",
    "youtube video summarizer",
    "youtube summary generator",
    "ai video summarizer",
    "summarize youtube video",
    "youtube video summary",
    "youtube summary tool",
    "youtube video summary generator",
    "ai youtube summarizer",
    "youtube video to summary",
    "youtube summary free",
    "youtube video summarizer ai",
    "summarize youtube video free",
    "youtube summary generator free",
    "youtube video summary online",
    "best youtube summarizer 2024"
  ].join(", "),

  openGraph: {
    title: "YouTube Video Summarizer - AI Summary Generator Free",
    description: "⚡ Get AI-generated summaries of any YouTube video instantly. Free, fast & accurate!",
    url: "https://30tools.com/youtube-summary-generator",
    siteName: "30tools", type: "website",
    images: [{ url: "/og-images/youtube-summary-generator.jpg", width: 1200, height: 630, alt: "YouTube Video Summarizer" }],
  },

  twitter: { card: "summary_large_image", title: "YouTube Video Summarizer - Free AI Tool", description: "⚡ Summarize YouTube videos with AI instantly!", images: ["/og-images/youtube-summary-generator.jpg"], creator: "@30tools" },
  alternates: { canonical: "https://30tools.com/youtube-summary-generator" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org", "@type": "WebApplication",
    "name": "YouTube Video Summarizer",
    "description": "AI-powered tool to generate summaries of YouTube videos instantly.",
    "url": "https://30tools.com/youtube-summary-generator",
    "applicationCategory": ["UtilitiesApplication"],
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "18543" }
  },
  faq: {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How does the YouTube summarizer work?", "acceptedAnswer": { "@type": "Answer", "text": "Our AI analyzes the video transcript and generates a concise summary highlighting key points, main topics, and important insights." } },
      { "@type": "Question", "name": "Is this free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, our YouTube video summarizer is completely free to use with no limits." } },
      { "@type": "Question", "name": "How long does it take to generate a summary?", "acceptedAnswer": { "@type": "Answer", "text": "Summaries are typically generated within 10-30 seconds depending on video length." } }
    ]
  }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function YouTubeSummaryGeneratorPage() {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.webApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.faq) }} />

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li><li>/</li>
              <li><a href="/#youtube-tools" className="hover:text-primary">YouTube Tools</a></li><li>/</li>
              <li className="text-foreground font-medium">YouTube Video Summarizer</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">YouTube Video Summarizer</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Get AI-generated summaries of any YouTube video in seconds. Save time by reading key points instead of watching entire videos.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🤖 AI-Powered</span><span>⚡ Instant Summaries</span><span>🆓 100% Free</span><span>📋 Key Points</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <YouTubeSummaryGenerator />
          </div>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "1️⃣", title: "Paste Video URL", desc: "Copy and paste any YouTube video URL into the tool" },
                { step: "2️⃣", title: "AI Analysis", desc: "Our AI analyzes the video transcript and extracts key points" },
                { step: "3️⃣", title: "Get Summary", desc: "Receive a concise, accurate summary of the video content" }
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Why Use Our Video Summarizer?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "⏱️", title: "Save Time", desc: "Get video insights in 30 seconds instead of watching for hours" },
                { icon: "🤖", title: "AI-Powered", desc: "Advanced AI understands context and extracts key points" },
                { icon: "🎯", title: "Accurate", desc: "High-quality summaries that capture main ideas" },
                { icon: "📝", title: "Key Points", desc: "Bullet-point summaries for easy reading" },
                { icon: "🆓", title: "100% Free", desc: "No registration or payment required" },
                { icon: "♾️", title: "Unlimited", desc: "Summarize as many videos as you want" },
                { icon: "📱", title: "All Devices", desc: "Works on desktop, mobile, and tablet" },
                { icon: "🌐", title: "Any Video", desc: "Works with tutorials, lectures, podcasts, and more" }
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Perfect For</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "🎓", title: "Students", desc: "Quickly understand educational videos and lecture content", color: "blue" },
                { icon: "👔", title: "Professionals", desc: "Get insights from industry talks and webinars fast", color: "green" },
                { icon: "📰", title: "Researchers", desc: "Extract key information from video sources", color: "purple" },
                { icon: "✍️", title: "Content Creators", desc: "Research video topics quickly for your content", color: "orange" },
                { icon: "📚", title: "Learners", desc: "Speed up your learning with quick video summaries", color: "teal" },
                { icon: "💼", title: "Busy People", desc: "Stay informed without spending hours watching", color: "pink" }
              ].map((c, i) => (
                <div key={i} className={`p-6 bg-gradient-to-br from-${c.color}-500/10 to-${c.color}-600/10 rounded-xl border border-border`}>
                  <h3 className="text-xl font-bold mb-3">{c.icon} {c.title}</h3>
                  <p className="text-muted-foreground">{c.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              {[
                { q: "How does the YouTube video summarizer work?", a: "Our AI extracts the video transcript, analyzes the content, identifies key topics and main points, and generates a concise summary that captures the essence of the video." },
                { q: "Is this YouTube summarizer free?", a: "Yes, our video summarizer is 100% free with no hidden charges or limits on usage." },
                { q: "How accurate are the summaries?", a: "Our AI-powered summaries are highly accurate, capturing main ideas, key points, and important details from videos. The quality depends on the clarity of the video's audio/transcript." },
                { q: "What types of videos work best?", a: "The summarizer works great with educational content, tutorials, lectures, podcasts, interviews, documentaries, and any video with clear spoken content." },
                { q: "How long does it take to generate a summary?", a: "Summaries are typically generated within 10-30 seconds, depending on the video length." },
                { q: "Can I summarize videos in other languages?", a: "Yes, our tool supports videos with transcripts/captions in various languages." }
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
                { href: "/youtube-transcript-downloader", icon: "📝", title: "Transcript Downloader", desc: "Download full video transcripts" },
                { href: "/youtube-downloader", icon: "📹", title: "YouTube Downloader", desc: "Download videos in HD, 4K" },
                { href: "/youtube-timestamp-generator", icon: "⏱️", title: "Timestamp Generator", desc: "Generate video timestamps" },
                { href: "/youtube-idea-generator", icon: "💡", title: "Idea Generator", desc: "AI video ideas for creators" }
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
