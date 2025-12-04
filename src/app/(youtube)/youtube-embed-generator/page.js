import YouTubeEmbedGenerator from "@/components/tools/youtube/YouTubeEmbedGenerator";

export const metadata = {
  title: "YouTube Embed Generator - Custom Video Embed Code Free | 30tools",
  description: "Generate custom YouTube embed codes with autoplay, loop, start time, and more options. Create responsive embed codes for your website. Free and easy to use.",
  keywords: [
    "youtube embed generator",
    "youtube embed code",
    "youtube embed",
    "embed youtube video",
    "youtube embed code generator",
    "youtube video embed",
    "youtube embed maker",
    "youtube iframe generator",
    "custom youtube embed",
    "responsive youtube embed",
    "youtube embed autoplay",
    "youtube embed loop",
    "youtube embed start time",
    "youtube embed code free"
  ].join(", "),

  openGraph: {
    title: "YouTube Embed Generator - Custom Embed Codes",
    description: "⚡ Generate custom YouTube embed codes with autoplay, loop, and more options!",
    url: "https://30tools.com/youtube-embed-generator",
    siteName: "30tools", type: "website",
    images: [{ url: "/og-images/youtube-embed-generator.jpg", width: 1200, height: 630, alt: "YouTube Embed Generator" }],
  },

  twitter: { card: "summary_large_image", title: "YouTube Embed Generator - Free", description: "⚡ Create custom YouTube embed codes instantly!", images: ["/og-images/youtube-embed-generator.jpg"], creator: "@30tools" },
  alternates: { canonical: "https://30tools.com/youtube-embed-generator" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org", "@type": "WebApplication",
    "name": "YouTube Embed Generator",
    "description": "Free tool to generate custom YouTube embed codes with various options.",
    "url": "https://30tools.com/youtube-embed-generator",
    "applicationCategory": ["UtilitiesApplication"],
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "7543" }
  }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function YouTubeEmbedGeneratorPage() {
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
              <li className="text-foreground font-medium">YouTube Embed Generator</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">YouTube Embed Generator</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Generate custom YouTube embed codes with autoplay, loop, start/end times, and responsive options. Perfect for websites and blogs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>📺 Custom Embeds</span><span>🔄 Autoplay/Loop</span><span>📱 Responsive</span><span>🆓 100% Free</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <YouTubeEmbedGenerator />
          </div>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Embed Customization Options</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "▶️", title: "Autoplay", desc: "Video starts playing automatically when page loads" },
                { icon: "🔄", title: "Loop", desc: "Video repeats continuously after finishing" },
                { icon: "⏱️", title: "Start/End Time", desc: "Specify exact start and end timestamps" },
                { icon: "📱", title: "Responsive", desc: "Embed adapts to any screen size" },
                { icon: "🎛️", title: "Controls", desc: "Show or hide player controls" },
                { icon: "🖼️", title: "Custom Size", desc: "Set exact width and height" },
                { icon: "🔇", title: "Muted", desc: "Start video with audio muted" },
                { icon: "🎨", title: "Modest Branding", desc: "Minimal YouTube branding" }
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How to Use</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "1️⃣", title: "Paste Video URL", desc: "Enter the YouTube video URL you want to embed" },
                { step: "2️⃣", title: "Customize Options", desc: "Select autoplay, loop, size, and other options" },
                { step: "3️⃣", title: "Copy Code", desc: "Copy the generated embed code to your website" }
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
                { q: "How do I embed a YouTube video on my website?", a: "Paste the YouTube video URL in our tool, customize options if needed, then copy the generated embed code and paste it into your website's HTML." },
                { q: "Can I make the video autoplay?", a: "Yes, enable the autoplay option in our generator. Note: most browsers require videos to be muted to autoplay." },
                { q: "How do I start the video at a specific time?", a: "Use the 'Start Time' option to specify when you want the video to begin playing (in seconds)." },
                { q: "Is the embed code responsive?", a: "Yes, enable the responsive option and the embed will automatically adjust to fit any screen size." },
                { q: "Can I hide YouTube controls?", a: "Yes, you can toggle the controls option to show or hide the video player controls." },
                { q: "Is this tool free?", a: "Yes, our YouTube Embed Generator is 100% free with no limits." }
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
                { href: "/youtube-gif-maker", icon: "🎞️", title: "GIF Maker", desc: "Create GIFs from videos" },
                { href: "/youtube-channel-id-finder", icon: "🔍", title: "Channel ID Finder", desc: "Find channel IDs" }
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
