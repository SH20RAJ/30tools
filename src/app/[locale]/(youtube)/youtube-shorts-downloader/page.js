import YouTubeShortsDownloader from "@/components/tools/youtube/YouTubeShortsDownloader";

export const metadata = {
  title: "YouTube Shorts Downloader (2026) - Free, HD & No Watermark | 30Tools",
  description: "Download YouTube Shorts videos in HD & 4K quality for free. Updated 2026. Save Shorts without watermark instantly. No app or signup needed.",
  keywords: [
    "youtube shorts downloader 2026",
    "download youtube shorts free",
    "youtube shorts video downloader",
    "no watermark shorts downloader",
    "save youtube shorts",
    "youtube shorts to mp4",
    "free shorts downloader",
    "hd shorts downloader",
    "updated 2026",
    "online video downloader"
  ].join(", "),

  openGraph: {
    title: "YouTube Shorts Downloader (2026) - Free, HD & No Watermark",
    description: "⚡ Download YouTube Shorts videos in HD quality instantly (2026 Updated). Free, no watermark, works on all devices!",
    url: "https://30tools.com/youtube-shorts-downloader",
    siteName: "30tools",
    type: "website",
    images: [{ url: "/og-images/youtube-shorts-downloader.jpg", width: 1200, height: 630, alt: "Free YouTube Shorts Downloader 2026" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "YouTube Shorts Downloader (2026) - Free HD Downloads",
    description: "⚡ Download YouTube Shorts videos in HD. No watermark, updated 2026!",
    images: ["/og-images/youtube-shorts-downloader.jpg"],
    creator: "@30tools"
  },

  alternates: { canonical: "https://30tools.com/youtube-shorts-downloader" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org", "@type": "WebApplication",
    "name": "YouTube Shorts Downloader", "alternateName": "Shorts Video Downloader",
    "description": "Free tool to download YouTube Shorts videos in HD quality without watermark.",
    "url": "https://30tools.com/youtube-shorts-downloader",
    "applicationCategory": ["MultimediaApplication", "UtilitiesApplication"],
    "operatingSystem": "Any", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "15632" }
  },
  howTo: {
    "@context": "https://schema.org", "@type": "HowTo",
    "name": "How to Download YouTube Shorts",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Copy Shorts URL", "text": "Copy the YouTube Shorts URL from the app or browser" },
      { "@type": "HowToStep", "position": 2, "name": "Paste URL", "text": "Paste the URL into our Shorts downloader" },
      { "@type": "HowToStep", "position": 3, "name": "Download", "text": "Click download to save the Shorts video" }
    ]
  },
  faq: {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How do I download YouTube Shorts?", "acceptedAnswer": { "@type": "Answer", "text": "Copy the Shorts URL, paste it in our tool, and click download. Your video will be saved in HD quality." } },
      { "@type": "Question", "name": "Is downloading Shorts free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, our YouTube Shorts downloader is 100% free with no limits." } },
      { "@type": "Question", "name": "Will there be a watermark?", "acceptedAnswer": { "@type": "Answer", "text": "No, videos are downloaded without any watermark in original quality." } }
    ]
  }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function YouTubeShortsDownloaderPage() {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.webApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.faq) }} />

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary">Home</a></li><li>/</li>
              <li><a href="/#youtube-tools" className="hover:text-primary">YouTube Tools</a></li><li>/</li>
              <li className="text-foreground font-medium">YouTube Shorts Downloader</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">YouTube Shorts Downloader</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Download YouTube Shorts videos in HD quality instantly. Save vertical videos without watermark - works on all devices!
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>✅ No Watermark</span><span>⚡ Instant Download</span><span>📱 All Devices</span><span>🆓 100% Free</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <YouTubeShortsDownloader />
          </div>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How to Download YouTube Shorts</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-card rounded-xl border border-border">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-3xl">1️⃣</span></div>
                <h3 className="text-xl font-semibold mb-3">Copy Shorts URL</h3>
                <p className="text-muted-foreground">Open the Shorts video and copy the URL from your browser or app share button.</p>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border border-border">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-3xl">2️⃣</span></div>
                <h3 className="text-xl font-semibold mb-3">Paste URL</h3>
                <p className="text-muted-foreground">Paste the Shorts URL into the input field above.</p>
              </div>
              <div className="text-center p-6 bg-card rounded-xl border border-border">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-3xl">3️⃣</span></div>
                <h3 className="text-xl font-semibold mb-3">Download</h3>
                <p className="text-muted-foreground">Click download and save the Shorts video to your device.</p>
              </div>
            </div>
          </section>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Why Use Our Shorts Downloader?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🎬", title: "HD Quality", desc: "Download Shorts in the highest quality available" },
                { icon: "🚫", title: "No Watermark", desc: "Videos saved without any watermarks or logos" },
                { icon: "⚡", title: "Fast Download", desc: "Lightning-fast downloads with optimized servers" },
                { icon: "📱", title: "All Devices", desc: "Works on iPhone, Android, PC, Mac, tablets" },
                { icon: "🆓", title: "100% Free", desc: "No hidden fees, unlimited downloads forever" },
                { icon: "🔒", title: "Private & Secure", desc: "We don't store your data or URLs" },
                { icon: "🌐", title: "No App Needed", desc: "Works directly in your browser" },
                { icon: "♾️", title: "Unlimited", desc: "No daily limits or restrictions" }
              ].map((f, i) => (
                <div key={i} className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
                  <span className="text-4xl mb-4 block">{f.icon}</span>
                  <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              {[
                { q: "How do I download YouTube Shorts?", a: "Simply copy the Shorts URL from YouTube, paste it into our tool, and click download. The video will be saved to your device in HD quality without any watermark." },
                { q: "Is this Shorts downloader really free?", a: "Yes, our YouTube Shorts downloader is 100% free with no hidden charges. You can download unlimited Shorts videos." },
                { q: "Will there be a watermark on downloaded videos?", a: "No, all videos are downloaded in their original quality without any watermarks or logos added." },
                { q: "Does this work on mobile phones?", a: "Yes! Our tool works perfectly on all devices including Android phones, iPhones, tablets, and desktop computers." },
                { q: "What Shorts URL formats are supported?", a: "We support youtube.com/shorts/VIDEO_ID and shared links from the YouTube app." },
                { q: "Can I download Shorts without the YouTube app?", a: "Yes, you just need the Shorts URL. No YouTube app or any other app installation is required." }
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
                { href: "/youtube-downloader", icon: "📹", title: "YouTube Downloader", desc: "Download videos in HD, 4K, or MP3" },
                { href: "/youtube-thumbnail-downloader", icon: "🖼️", title: "Thumbnail Downloader", desc: "Download HD video thumbnails" },
                { href: "/youtube-transcript-downloader", icon: "📝", title: "Transcript Downloader", desc: "Extract video transcripts" },
                { href: "/youtube-summary-generator", icon: "📋", title: "Video Summarizer", desc: "AI-generated video summaries" }
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

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Explore More Free Tools</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { href: "/instagram-downloader", icon: "📸", title: "Instagram", color: "pink" },
                { href: "/tiktok-downloader", icon: "🎵", title: "TikTok", color: "cyan" },
                { href: "/twitter-video-downloader", icon: "🐦", title: "Twitter", color: "blue" },
                { href: "/image-compressor", icon: "🗜️", title: "Compressor", color: "green" },
                { href: "/qr-code-generator", icon: "📲", title: "QR Code", color: "violet" },
                { href: "/", icon: "🛠️", title: "All Tools", color: "primary" }
              ].map((t, i) => (
                <a key={i} href={t.href} className={`group p-4 bg-gradient-to-br from-${t.color}-500/10 to-${t.color}-600/10 rounded-xl border border-border hover:border-${t.color}-500 transition-all text-center`}>
                  <span className="text-3xl block mb-2">{t.icon}</span>
                  <span className={`font-medium text-sm group-hover:text-${t.color}-500 transition-colors`}>{t.title}</span>
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
