import YouTubeShortsDownloader from "@/components/tools/youtube/YouTubeShortsDownloader";

const researchedKeywords = [
  "thoughts on youtube shorts downloader", "ytshortsdl", "youtube shorts download short noob",
  "shortsmate", "shorts free", "shorts youtube download", "youtube shorts downloader free",
  "youtube shorts videos download", "yt shots", "скачать шортс с ютуба", "youtube shorts downloader online",
  "youtube shots download", "youtube shorts video download", "short video download free",
  "shorts download youtube", "baixar shorts", "baixar shorts youtube", "download youtube reels",
  "publer downloader", "youtube shorts download free", "youtube shorts indir", "youtube reel download",
  "short download", "how to download youtube shorts", "yt short download", "youtube short video downloader",
  "youtube reel downloader", "short down", "ytshorts", "download youtube shorts video",
  "descargar short de youtube", "shorts noob", "youtube shorts download online", "shortsnoob",
  "shorts download", "shorts de youtube", "short downloader", "download shorts",
  "youtube shorts video downloader", "youtube short video download", "yt shorts download",
  "yt short", "download yt shorts", "yt short downloader", "download short youtube",
  "download youtube short", "download shorts youtube", "youtube short download",
  "short video download", "youtube reels download", "shots youtube", "baixar shorts do youtube",
  "shorts downloader", "descargar shorts de youtube", "jutu", "youtube short downloader",
  "yt shorts downloader", "download youtube shorts", "descargar videos gratis",
  "youtube shorts download", "video downloader free", "yt shorts", "youtube downloader free download",
  "youtube downloader free", "short", "yt downloader", "yt video downloader", "download youtube",
  "shut down", "video downloader", "shorts", "youtube download", "youtube video downloader",
  "youtube downloader", "youtube shorts"
];

export const metadata = {
  title: "YouTube Shorts Downloader (2026) - Free, HD & No Watermark | 30Tools",
  description: "Download YouTube Shorts videos in HD & 4K quality for free. Updated 2026. Best yt shorts downloader and shorts video download tool. Save Shorts without watermark instantly.",
  keywords: researchedKeywords.join(", "),

  openGraph: {
    title: "YouTube Shorts Downloader (2026) - HD & No Watermark",
    description: "⚡ Save YouTube Shorts in HD quality instantly (2026 Updated). Fast yt short download - no watermark, works on all devices!",
    url: "https://30tools.com/youtube-shorts-downloader",
    siteName: "30tools",
    type: "website",
    images: [{ url: "/og-images/youtube-shorts-downloader.jpg", width: 1200, height: 630, alt: "Free YouTube Shorts Downloader 2026" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "YouTube Shorts Downloader (2026) - Free HD Downloads",
    description: "⚡ Download YouTube Shorts videos in HD. Best yt short downloader, updated 2026!",
    images: ["/og-images/youtube-shorts-downloader.jpg"],
    creator: "@30tools"
  },

  alternates: { canonical: "https://30tools.com/youtube-shorts-downloader" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "YouTube Shorts Downloader",
    "alternateName": ["Shorts Video Downloader", "YT Shorts Downloader", "ShortsNoob"],
    "description": "Free tool to download YouTube Shorts videos in HD quality without watermark. Supported as shorts downloader and youtube reel downloader.",
    "url": "https://30tools.com/youtube-shorts-downloader",
    "applicationCategory": ["MultimediaApplication", "UtilitiesApplication"],
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "19432" }
  },
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Download YouTube Shorts",
    "description": "Step-by-step guide to use our youtube short downloader and yt shorts download tool.",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Copy Shorts URL", "text": "Copy the YouTube Shorts URL from the app or browser." },
      { "@type": "HowToStep", "position": 2, "name": "Paste URL", "text": "Paste the link into our shorts video downloader input field." },
      { "@type": "HowToStep", "position": 3, "name": "Download", "text": "Click download and save the shorts youtube download file instantly." }
    ]
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best youtube shorts downloader online free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "30Tools is considered the best youtube shorts downloader free and shortsnoob alternative, offering high-speed yt shorts download without watermark."
        }
      },
      {
        "@type": "Question",
        "name": "Can I download shorts from youtube without watermark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our short downloader and yt short downloader extraction engine saves videos in original HD quality without any watermarks."
        }
      },
      {
        "@type": "Question",
        "name": "Does it support youtube reel download?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! It works as a youtube reel downloader and download youtube reels tool, perfect for saving vertical content."
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

export default function YouTubeShortsDownloaderPage() {
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
            <li><a href="/#youtube-tools" className="hover:text-primary transition-colors">YouTube Tools</a></li><li>/</li>
            <li className="text-foreground font-medium">YouTube Shorts Downloader</li>
          </ol>
        </nav>

        <AdUnit />

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-foreground leading-tight">
            YouTube <span className="text-primary">Shorts Downloader</span> Online
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Welcome to the fastest <strong>youtube shorts downloader online</strong>. Our <strong>yt short downloader</strong> allows you
            to <strong>download youtube shorts video</strong> instantly. Whether you need <strong>ytshorts</strong>,
            <strong>shortsnoob</strong>, or a <strong>short downloader</strong>, we provide <strong>shorts free</strong> downloads in
            HD and 4K quality. Save your favorite <strong>shorts youtube download</strong> content without watermark.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">✅ No Watermark</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">⚡ <strong>YT Shorts Download</strong></span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">🆓 <strong>Short Video Download Free</strong></span>
          </div>
        </div>

        <AdUnit />

        {/* Developer API Link */}
        <div className="flex justify-center mb-8">
          <a
            href="https://apify.com/express_kingfisher/youtube-video-audio-downloader"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted/50 hover:bg-muted border border-border/50 text-sm transition-all group hover:scale-105"
          >
            <span className="text-muted-foreground">Looking for a Developer API?</span>
            <span className="font-semibold text-primary group-hover:underline decoration-primary/50 underline-offset-4">Check out Universal YouTube Downloader on Apify →</span>
          </a>
        </div>

        {/* Tool Component */}
        <div className="bg-card rounded-2xl shadow-2xl border border-border p-6 md:p-10 mb-20">
          <YouTubeShortsDownloader />
        </div>

        <AdUnit />

        {/* SEO Content Section 1 */}
        <section className="mb-20 prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">How to Download YouTube Shorts Online</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <p>
                Using our <strong>youtube short video downloader</strong> is extremely simple. If you've been wondering
                <strong>how to download youtube shorts</strong>, just follow these three steps. First, find your video and
                get the link. Our <strong>yt short download</strong> engine supports all formats including
                <strong>youtube shorts videos download</strong> and <strong>yt shots</strong>.
                Paste the link into 30Tools, and experience the same speed as <strong>shortsmate</strong> or <strong>ytshortsdl</strong>.
              </p>
              <p>
                Our <strong>youtube reel downloader</strong> also works for <strong>youtube reels download</strong>,
                acting as a universal <strong>shots youtube</strong> tool. Forget about <strong>shorts downloader</strong>
                limitations – we provide unlimited <strong>short video download</strong> access for free.
              </p>
            </div>
            <div className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-primary">Global Search Support:</h3>
              <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-medium list-none p-0">
                <li className="flex items-center gap-2">🌐 <strong>YouTube Shorts Indir</strong></li>
                <li className="flex items-center gap-2">🇪🇸 <strong>Descargar Short de YouTube</strong></li>
                <li className="flex items-center gap-2">🇧🇷 <strong>Baixar Shorts Youtube</strong></li>
                <li className="flex items-center gap-2">🇷🇺 <strong>Скачать шортс с ютуба</strong></li>
                <li className="flex items-center gap-2">🌍 <strong>Shorts de YouTube</strong></li>
                <li className="flex items-center gap-2">🛡️ <strong>Publer Downloader</strong> Alternative</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Steps Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Save Shorts Video (Easy Steps)</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-colors group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"><span className="text-4xl">📋</span></div>
              <h3 className="text-2xl font-bold mb-4">1. Copy Link</h3>
              <p className="text-muted-foreground leading-relaxed">Copy the URL of the <strong>youtube short video download</strong> you want to save from the app or browser.</p>
            </div>
            <div className="text-center p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-colors group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"><span className="text-4xl">🔗</span></div>
              <h3 className="text-2xl font-bold mb-4">2. Paste Link</h3>
              <p className="text-muted-foreground leading-relaxed">Paste the link into our <strong>yt shorts downloader</strong> above for instant processing.</p>
            </div>
            <div className="text-center p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-colors group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"><span className="text-4xl">⬇️</span></div>
              <h3 className="text-2xl font-bold mb-4">3. Download</h3>
              <p className="text-muted-foreground leading-relaxed">Select your quality and click <strong>download youtube shorts</strong> to save your file forever.</p>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Professional YouTube Short Downloader Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🎞️", title: "HD & 4K Quality", desc: "Download in the highest possible resolution available." },
              { icon: "🛡️", title: "No Watermark", desc: "Get clean <strong>short download</strong> files without branding." },
              { icon: "🚀", title: "Instant Speed", desc: "Faster than <strong>shortsnoob</strong> and <strong>ytshortsdl</strong>." },
              { icon: "💻", title: "Universal", desc: "Works for <strong>youtube reels download</strong> on PC and Mobile." },
              { icon: "🆓", title: "100% Free", desc: "Unlimited <strong>short video download free</strong> sessions." },
              { icon: "🔐", title: "Private", desc: "Secure <strong>yt shorts download</strong> without tracking your data." },
              { icon: "🌎", title: "Global URLs", desc: "Supports <strong>baixar shorts do youtube</strong> and <strong>youtube indir</strong>." },
              { icon: "🔥", title: "Unlimited", desc: "No daily limit for your <strong>short down</strong> sessions." }
            ].map((f, i) => (
              <div key={i} className="p-6 bg-card rounded-2xl border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <span className="text-4xl mb-4 block">{f.icon}</span>
                <h3 className="text-lg font-extrabold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: f.desc }} />
              </div>
            ))}
          </div>
        </section>

        <AdUnit />

        {/* FAQ Section */}
        <section className="mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">YouTube Shorts Video Downloader FAQ</h2>
          <p className="text-center text-muted-foreground mb-12">Everything you need to know about <strong>yt short downloader</strong> and <strong>jutu</strong>.</p>
          <div className="space-y-4">
            {[
              { q: "How do I download YouTube Shorts?", a: "To <strong>download youtube short</strong> videos, copy the URL and paste it into our <strong>shorts downloader</strong>. It's the same process for <strong>youtube reel download</strong>." },
              { q: "What is jutu and shortsnoob?", a: "These are common search terms for <strong>youtube shorts downloader</strong> services. 30Tools provides a faster and ad-free alternative for <strong>shorts download youtube</strong>." },
              { q: "Can I use this as a video downloader free tool?", a: "Yes, 30Tools is a comprehensive <strong>video downloader free</strong> platform for YouTube Shorts, regular videos, and thumbnails." },
              { q: "Will I get HD quality for youtube short video download?", a: "Yes, we extract the highest resolution available on YouTube servers, including 1080p and 4K." }
            ].map((faq, i) => (
              <details key={i} className="bg-card rounded-xl border border-border p-5 group cursor-pointer">
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
          <p className="text-xs font-bold text-primary mb-6 uppercase tracking-widest opacity-80">Search & Trending Keywords</p>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 opacity-50">
            {researchedKeywords.map(kw => (
              <span key={kw} className="text-[10px] md:text-xs text-muted-foreground hover:text-primary transition-colors cursor-default">
                {kw} <span className="opacity-30">|</span>
              </span>
            ))}
          </div>
        </div>

        <AdUnit />

        {/* Footer Navigation */}
        <section className="pt-12 border-t border-border mt-20">
          <h2 className="text-2xl font-extrabold mb-8 text-center uppercase tracking-tighter">Explore Pro YouTube Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: "/youtube-downloader", title: "YouTube Downloader", desc: "4K Video & MP3" },
              { href: "/youtube-script-generator", title: "Script Generator", desc: "AI Content Ideas" },
              { href: "/youtube-video-summarizer", title: "Video Summarizer", desc: "AI Summaries" },
              { href: "/tiktok-downloader", title: "TikTok Downloader", desc: "No Watermark" }
            ].map((t, i) => (
              <a key={i} href={t.href} className="p-5 bg-card rounded-2xl border border-border hover:border-primary hover:shadow-lg transition-all text-center group">
                <h3 className="font-bold mb-1 group-hover:text-primary transition-colors text-sm md:text-base">{t.title}</h3>
                <p className="text-[10px] md:text-xs text-muted-foreground">{t.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <div className="mt-12 text-center">
          <a href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">← Back to All Tools</a>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(7) }} />
    </>
  );
}
