import YouTubeVideoSummarizer from "@/components/tools/youtube/YouTubeVideoSummarizer";

export const metadata = {
    title: "YouTube Video Summarizer - AI Summary Tool Free | 30tools",
    description: "Summarize YouTube videos with AI instantly. Get key points and takeaways from any video in seconds. Free AI-powered video summarization tool.",
    keywords: [
        "youtube video summarizer",
        "youtube summarizer",
        "summarize youtube video",
        "video summarizer ai",
        "youtube video summary",
        "ai video summarizer",
        "youtube summary tool",
        "youtube video to summary",
        "video summary generator",
        "youtube video summarizer free"
    ].join(", "),

    openGraph: {
        title: "YouTube Video Summarizer - AI Summary Tool",
        description: "⚡ Summarize YouTube videos with AI instantly!",
        url: "https://30tools.com/youtube-video-summarizer",
        siteName: "30tools", type: "website",
        images: [{ url: "/og-images/youtube-video-summarizer.jpg", width: 1200, height: 630, alt: "YouTube Video Summarizer" }],
    },

    twitter: { card: "summary_large_image", title: "YouTube Video Summarizer - Free", description: "⚡ AI video summaries!", images: ["/og-images/youtube-video-summarizer.jpg"], creator: "@30tools" },
    alternates: { canonical: "https://30tools.com/youtube-video-summarizer" },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const jsonLdSchemas = {
    webApp: {
        "@context": "https://schema.org", "@type": "WebApplication",
        "name": "YouTube Video Summarizer",
        "description": "AI-powered tool to summarize YouTube videos instantly.",
        "url": "https://30tools.com/youtube-video-summarizer",
        "applicationCategory": ["UtilitiesApplication"],
        "operatingSystem": "Any",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "13456" }
    }
};

const AdUnit = () => (
    <div className="my-6 flex justify-center">
        <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
    </div>
);

export default function YouTubeVideoSummarizerPage() {
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
                            <li className="text-foreground font-medium">YouTube Video Summarizer</li>
                        </ol>
                    </nav>

                    <AdUnit />

                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">YouTube Video Summarizer</h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                            Get AI-powered summaries of any YouTube video. Extract key points and main takeaways in seconds without watching the entire video.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                            <span>🤖 AI-Powered</span><span>📋 Key Points</span><span>🆓 100% Free</span><span>⚡ Instant</span>
                        </div>
                    </div>

                    <AdUnit />

                    <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
                        <YouTubeVideoSummarizer />
                    </div>

                    <AdUnit />

                    <section className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Why Summarize YouTube Videos?</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: "⏱️", title: "Save Time", desc: "Get video highlights in seconds" },
                                { icon: "📚", title: "Study Aid", desc: "Perfect for educational content" },
                                { icon: "🎯", title: "Key Points", desc: "Extract main takeaways quickly" },
                                { icon: "📝", title: "Note Taking", desc: "Great for research and notes" },
                                { icon: "🌐", title: "Any Video", desc: "Works with tutorials, lectures, reviews" },
                                { icon: "💬", title: "Quick Preview", desc: "Know what videos are about first" },
                                { icon: "🆓", title: "Free Tool", desc: "No limits on summaries" },
                                { icon: "📱", title: "All Devices", desc: "Works on mobile and desktop" }
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
                                { q: "How does the video summarizer work?", a: "Our AI analyzes the video's transcript, identifies key topics and main points, then generates a concise summary that captures the essential information." },
                                { q: "How accurate are the summaries?", a: "Our AI provides highly accurate summaries, though quality depends on the clarity of the video's audio and available captions." },
                                { q: "Is this free?", a: "Yes, our YouTube video summarizer is 100% free with unlimited use." },
                                { q: "What types of videos work best?", a: "Educational content, tutorials, lectures, podcasts, and any video with clear spoken content works great." }
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
                                { href: "/youtube-transcript-downloader", icon: "📝", title: "Transcript Downloader", desc: "Download transcripts" },
                                { href: "/youtube-summary-generator", icon: "📋", title: "Summary Generator", desc: "Alternative summarizer" },
                                { href: "/youtube-timestamp-generator", icon: "⏱️", title: "Timestamp Generator", desc: "Generate timestamps" },
                                { href: "/youtube-downloader", icon: "📹", title: "YouTube Downloader", desc: "Download videos" }
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
