import YouTubeGifMaker from "@/components/tools/youtube/YouTubeGifMaker";

export const metadata = {
  title: "YouTube to GIF Maker - Create GIFs from Videos Free | 30tools",
  description: "Convert YouTube videos to animated GIFs for free. Create custom GIFs with specific start and end times. Perfect for social media and memes.",
  keywords: [
    "youtube to gif",
    "youtube gif maker",
    "youtube gif",
    "make gif from youtube",
    "youtube video to gif",
    "create gif from youtube",
    "youtube gif converter",
    "youtube gif creator",
    "youtube gif generator",
    "convert youtube to gif",
    "youtube to gif free",
    "youtube gif maker free",
    "youtube gif online",
    "youtube to gif converter"
  ].join(", "),

  openGraph: {
    title: "YouTube to GIF Maker - Create GIFs Free",
    description: "⚡ Convert YouTube videos to animated GIFs instantly. Free GIF maker!",
    url: "https://30tools.com/youtube-gif-maker",
    siteName: "30tools", type: "website",
    images: [{ url: "/og-images/youtube-gif-maker.jpg", width: 1200, height: 630, alt: "YouTube to GIF Maker" }],
  },

  twitter: { card: "summary_large_image", title: "YouTube to GIF Maker - Free", description: "⚡ Create GIFs from YouTube videos instantly!", images: ["/og-images/youtube-gif-maker.jpg"], creator: "@30tools" },
  alternates: { canonical: "https://30tools.com/youtube-gif-maker" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org", "@type": "WebApplication",
    "name": "YouTube to GIF Maker",
    "description": "Free tool to convert YouTube videos to animated GIFs.",
    "url": "https://30tools.com/youtube-gif-maker",
    "applicationCategory": ["MultimediaApplication"],
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.7", "ratingCount": "11234" }
  }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function YouTubeGifMakerPage() {
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
              <li className="text-foreground font-medium">YouTube to GIF Maker</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">YouTube to GIF Maker</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Convert any YouTube video to an animated GIF. Set custom start/end times, adjust quality, and create perfect GIFs for social media.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🎞️ Animated GIFs</span><span>⏱️ Custom Duration</span><span>🆓 100% Free</span><span>🚀 Fast Conversion</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <YouTubeGifMaker />
          </div>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How to Create GIFs from YouTube</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1️⃣", title: "Paste URL", desc: "Enter the YouTube video URL" },
                { step: "2️⃣", title: "Set Times", desc: "Choose start and end timestamps" },
                { step: "3️⃣", title: "Customize", desc: "Adjust size and quality" },
                { step: "4️⃣", title: "Download", desc: "Get your animated GIF" }
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Perfect For</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "📱", title: "Social Media", desc: "Create engaging GIFs for Twitter, Discord, and more" },
                { icon: "😂", title: "Memes", desc: "Make funny reaction GIFs from videos" },
                { icon: "📝", title: "Blog Posts", desc: "Add animated content to your articles" },
                { icon: "💬", title: "Messaging", desc: "Share memorable video moments as GIFs" },
                { icon: "🎓", title: "Tutorials", desc: "Create quick how-to GIFs from videos" },
                { icon: "📧", title: "Email", desc: "Add GIFs to email campaigns" },
                { icon: "📊", title: "Presentations", desc: "Make slides more engaging with GIFs" },
                { icon: "🎮", title: "Gaming", desc: "Capture and share gaming moments" }
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
                { q: "How do I make a GIF from a YouTube video?", a: "Paste the video URL, set the start and end times for your GIF, customize size/quality if needed, then click convert and download your GIF." },
                { q: "What's the maximum GIF length?", a: "We recommend keeping GIFs under 10-15 seconds for best quality and file size. Longer GIFs result in larger file sizes." },
                { q: "Is this free to use?", a: "Yes, our YouTube to GIF converter is 100% free with no watermarks or limits." },
                { q: "What quality options are available?", a: "You can adjust the GIF quality and frame rate to balance between visual quality and file size." },
                { q: "Can I use these GIFs commercially?", a: "The copyright of the video content still belongs to the original creator. Ensure you have rights to use the content." }
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
                { href: "/youtube-downloader", icon: "📹", title: "YouTube Downloader", desc: "Download videos in HD, 4K" },
                { href: "/youtube-thumbnail-downloader", icon: "🖼️", title: "Thumbnail Downloader", desc: "Download HD thumbnails" },
                { href: "/youtube-shorts-downloader", icon: "📱", title: "Shorts Downloader", desc: "Download Shorts videos" },
                { href: "/youtube-embed-generator", icon: "📺", title: "Embed Generator", desc: "Create embed codes" }
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
