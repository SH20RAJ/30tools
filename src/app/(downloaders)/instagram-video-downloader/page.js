import InstagramDownloader from "@/components/tools/downloaders/InstagramDownloader";

const researchedKeywords = [
  "download instagram videos online", "instagram to video", "instagram viral video download",
  "download instagram video hd", "download for instagram", "instagram hd video downloader",
  "how to download video from instagram", "instagram video download --", "download instagram video free",
  "insta video", "download from insta", "instagram video downloader extension", "instagram download online",
  "dredown", "download insta videos", "how to download videos from instagram", "download ig videos",
  "instagram downloader for pc", "video download instagram", "download from instagram video",
  "instagram video downloader snapinsta", "download videos from instagram", "downloader for instagram",
  "ig download video", "instagram link video download", "video downloader instagram",
  "instagram video downloader free", "instagram video downloader online free", "save from net instagram",
  "instagram videos downloader", "instagram video downloader without watermark", "instagram online downloader",
  "online instagram video downloader", "instagram downloader pc", "instagram video saver",
  "instagram copy link download", "instagram downloader hd", "download gram", "video instagram download",
  "ins download", "instagram link downloader", "download instagram video online",
  "instagram download videos", "save from insta", "saveig", "ig video download",
  "instagram video download online", "instagram video downloader hd", "download videos instagram",
  "how to download instagram videos", "insta post download", "savefrom instagram",
  "instasnap", "downloader instagram", "saveinsta app", "snap instagram", "instagram save",
  "sssinstagram downloader", "instagram downloader online", "descargar vídeo de instagram",
  "insta saver download", "instagram converter", "save ig", "instasaver", "telecharger video instagram",
  "instagram videos", "instagram link download", "insta download video", "download insta video",
  "télécharger vidéo instagram", "savegram", "télécharger vidéos instagram", "fastdl",
  "download ig video", "save instagram video", "download video from instagram",
  "instagram videos download", "save free", "download instagram post", "instagram saver",
  "descargar de instagram", "insta saver", "downloadgram", "instadownloader", "save from instagram",
  "insta video downloader", "ig video downloader", "instagram downloader video", "sss instagram",
  "i gram", "sssinstagram", "insta post downloader", "save instagram", "snapinsta app",
  "instagram post downloader", "ig download", "download ig", "download instagram videos",
  "snapinsta download", "descargar videos instagram", "gramsnap", "igram download",
  "instagram reels downloader", "baixar videos do instagram", "insta save", "insta reel downloader",
  "insta download", "instagram video indir", "descargar video instagram", "download from instagram",
  "saveinsta", "instagram video downloader online", "instasave", "instagram post download",
  "snap insta", "instagram video", "download video ig", "descargar video de instagram",
  "insta video download", "igram world", "insta downloader", "save insta", "baixar video instagram",
  "download video instagram", "instagram reels download", "ig downloader", "baixar vídeo do instagram",
  "descargar videos de instagram", "instagram download video", "download instagram",
  "download instagram video", "instagram reel downloader", "instagram video download",
  "ingram", "igram", "snapinsta", "instagram downloader", "instagram download", "insta", "instagram"
];

export const metadata = {
  title: "Instagram Video Downloader (2026) - Save IG Videos & Reels Free | 30Tools",
  description: "Best free instagram video downloader to save IG videos, reels, and photos in HD quality. Download from Instagram link without watermark. High-speed insta video saver tool.",
  keywords: researchedKeywords.join(", "),

  openGraph: {
    title: "Instagram Video Downloader (2026) - Free & HD",
    description: "⚡ Fast & Free instagram video downloader online. Save videos from IG posts and reels instantly. No app required - download for instagram HD!",
    url: "https://30tools.com/instagram-video-downloader",
    siteName: "30tools",
    type: "website",
    images: [{ url: "/og-images/instagram-video-downloader.jpg", width: 1200, height: 630, alt: "Save Instagram Videos 2026" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Instagram Video Downloader (2026) - Save IG HD Videos",
    description: "⚡ The ultimate insta video download tool. Fast, free, and works for any IG video from link!",
    images: ["/og-images/instagram-video-downloader.jpg"],
    creator: "@30tools"
  },

  alternates: { canonical: "https://30tools.com/instagram-video-downloader" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Instagram Video Downloader",
    "alternateName": ["IG Video Downloader", "Insta Saver", "SnapInsta", "IGram"],
    "description": "Professional tool to download instagram videos online in HD quality for free using a private link.",
    "url": "https://30tools.com/instagram-video-downloader",
    "applicationCategory": ["MultimediaApplication", "UtilitiesApplication"],
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "32150" }
  },
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Download Videos from Instagram",
    "description": "Simple guide on how to download video from instagram using our instagram link downloader.",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Copy Instagram Link", "text": "Copy the URL of the video or reel from the Instagram app or website." },
      { "@type": "HowToStep", "position": 2, "name": "Paste IG URL", "text": "Paste the instagram link into our video downloader instagram input box." },
      { "@type": "HowToStep", "position": 3, "name": "Download IG Video", "text": "Click download to save your insta video download in HD format." }
    ]
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to download instagram video online free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply use 30Tools Instagram Video Downloader. It's a free online tool to download instagram videos and reels in one click."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a watermark on downloaded IG videos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, our instagram video downloader without watermark saves all content in original high definition quality."
        }
      },
      {
        "@type": "Question",
        "name": "Does it work as an instagram reels downloader?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our tool functions as a professional instagram reel downloader and snap instagram alternative."
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

export default function InstagramVideoDownloaderPage() {
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
            <li><a href="/all-downloaders" className="hover:text-primary transition-colors">Downloaders</a></li><li>/</li>
            <li className="text-foreground font-medium">Instagram Video Downloader</li>
          </ol>
        </nav>

        <AdUnit />

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-foreground leading-tight">
            Instagram <span className="text-primary">Video Downloader</span> Online
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            The ultimate <strong>instagram video downloader online</strong> is here. Our <strong>download for instagram</strong> tool helps you
            <strong>download instagram video hd</strong> quality content in seconds. Whether you need an <strong>instagram to video</strong> converter
            or a way to <strong>save instagram video</strong>, 30Tools is the best <strong>instagram hd video downloader</strong> without limits.
            Download IG reels, stories, and videos for free.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">✅ No Watermark</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">⚡ <strong>Insta Video Download</strong></span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">🆓 <strong>Download Instagram Video Free</strong></span>
          </div>
        </div>

        <AdUnit />

        {/* Tool Component */}
        <div className="bg-card rounded-2xl shadow-2xl border border-border p-6 md:p-10 mb-20">
          <InstagramDownloader />
        </div>

        <AdUnit />

        {/* SEO Content Section 1 */}
        <section className="mb-20 prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Fastest Instagram Video Saver & IG Downloader</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <p>
                Wondering <strong>how to download video from instagram</strong>? Our tool acts as a powerful <strong>instagram link downloader</strong>
                and <strong>insta video downloader</strong>. Just copy the <strong>instagram link video download</strong> and paste it above.
                Whether you use <strong>snapinsta</strong>, <strong>igram</strong>, or <strong>instasave</strong>, you'll find that 30Tools
                is the most reliable <strong>ig downloader</strong> alternative with zero intrusive ads.
              </p>
              <p>
                We support all platforms, including <strong>instagram downloader for pc</strong> and mobile. If you need a
                <strong>instagram video downloader extension</strong> like speed, our web-based <strong>insta saver</strong>
                delivers instant results for <strong>instagram download video</strong> requests.
              </p>
            </div>
            <div className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-primary">Global Alternative Search:</h3>
              <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-medium list-none p-0">
                <li className="flex items-center gap-2">📸 <strong>Instagram Reels Downloader</strong></li>
                <li className="flex items-center gap-2">🛡️ <strong>SnapInsta App</strong> Alternative</li>
                <li className="flex items-center gap-2">🌍 <strong>Igram World</strong> & <strong>Igram</strong></li>
                <li className="flex items-center gap-2">📉 <strong>Fastdl</strong> & <strong>Dredown</strong></li>
                <li className="flex items-center gap-2">📱 <strong>Insta Saver Download</strong></li>
                <li className="flex items-center gap-2">⚡ <strong>Instagram Converter</strong></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Multi-language Support */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Global Instagram Indir & Download Support</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-muted/20 rounded-xl border border-border">
              <p className="text-2xl mb-2">🇹🇷</p>
              <p className="font-bold"><strong>Instagram Video Indir</strong></p>
              <p className="text-xs text-muted-foreground text-center">Hızlı <strong>instagram giriş</strong> ve indir</p>
            </div>
            <div className="p-4 bg-muted/20 rounded-xl border border-border">
              <p className="text-2xl mb-2">🇪🇸</p>
              <p className="font-bold"><strong>Descargar Video Instagram</strong></p>
              <p className="text-xs text-muted-foreground text-center"><strong>Instagram iniciar sesión</strong> gratis</p>
            </div>
            <div className="p-4 bg-muted/20 rounded-xl border border-border">
              <p className="text-2xl mb-2">🇧🇷</p>
              <p className="font-bold"><strong>Baixar Video Instagram</strong></p>
              <p className="text-xs text-muted-foreground text-center"><strong>Instagram entrar</strong> agora</p>
            </div>
            <div className="p-4 bg-muted/20 rounded-xl border border-border">
              <p className="text-2xl mb-2">🇫🇷</p>
              <p className="font-bold"><strong>Telecharger Video Instagram</strong></p>
              <p className="text-xs text-muted-foreground text-center"><strong>Instagram connexion</strong> rapide</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-6">
            <div className="p-4 bg-muted/20 rounded-xl border border-border">
              <p className="text-2xl mb-2">🇷🇺</p>
              <p className="font-bold"><strong>Инстаграм</strong></p>
              <p className="text-xs text-muted-foreground text-center"><strong>инстаграм вход</strong> без пароля</p>
            </div>
            <div className="p-4 bg-muted/20 rounded-xl border border-border">
              <p className="text-2xl mb-2">🇸🇦</p>
              <p className="font-bold"><strong>انستقرام</strong></p>
              <p className="text-xs text-muted-foreground text-center"><strong>انستا</strong> تحميل مباشر</p>
            </div>
            <div className="p-4 bg-muted/20 rounded-xl border border-border">
              <p className="text-2xl mb-2">🇮🇷</p>
              <p className="font-bold"><strong>اینستاگرام</strong></p>
              <p className="text-xs text-muted-foreground text-center">دانلود راحت و سریع</p>
            </div>
            <div className="p-4 bg-muted/20 rounded-xl border border-border">
              <p className="text-2xl mb-2">🇯🇵</p>
              <p className="font-bold"><strong>インスタグラム</strong></p>
              <p className="text-xs text-muted-foreground text-center"><strong>インスタ</strong> 保存ツール</p>
            </div>
          </div>
        </section>

        {/* How to use */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">How to Save Videos from Instagram (3 Simple Steps)</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-colors group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"><span className="text-4xl">🖇️</span></div>
              <h3 className="text-2xl font-bold mb-4">1. Copy IG URL</h3>
              <p className="text-muted-foreground leading-relaxed">Find the <strong>instagram link video download</strong> or reel URL and copy it.</p>
            </div>
            <div className="text-center p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-colors group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"><span className="text-4xl">📥</span></div>
              <h3 className="text-2xl font-bold mb-4">2. Paste Link</h3>
              <p className="text-muted-foreground leading-relaxed">Paste it into our <strong>online instagram video downloader</strong> input area.</p>
            </div>
            <div className="text-center p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-colors group">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"><span className="text-4xl">📱</span></div>
              <h3 className="text-2xl font-bold mb-4">3. Save Video</h3>
              <p className="text-muted-foreground leading-relaxed">Click <strong>download instagram video</strong> and save the file to your gallery.</p>
            </div>
          </div>
        </section>

        {/* Technical Features Section */}
        <section className="mb-20 bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
          <h2 className="text-3xl font-bold text-center mb-8">Professional IG Downloader Features</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="flex items-center gap-3 font-semibold">🎞️ <strong>Instagram Reels Download</strong> Ready</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Full optimized for vertical content. Experience the same speed as <strong>snapinsta download</strong>
                dedicated servers for <strong>insta reel downloader</strong> tasks.
              </p>
            </div>
            <div className="space-y-4">
              <p className="flex items-center gap-3 font-semibold">🔒 <strong>Private & Secure</strong> Save</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                No logins required. Use our <strong>instagram post download</strong> service without ever sharing
                your credentials - safe <strong>save instagram</strong> experience.
              </p>
            </div>
            <div className="space-y-4">
              <p className="flex items-center gap-3 font-semibold">💎 <strong>HD Video</strong> Extraction</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every <strong>download ig video</strong> session ensures the highest resolution available. We act as a
                true <strong>instagram downloader hd</strong> engine.
              </p>
            </div>
            <div className="space-y-4">
              <p className="flex items-center gap-3 font-semibold">🌍 <strong>No App</strong> Needed</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Works on any browser. A perfect <strong>instagram video saver</strong> and <strong>gramsnap</strong>
                alternative for Chrome, Safari, and Firefox users.
              </p>
            </div>
          </div>
        </section>

        <AdUnit />

        {/* FAQ Section */}
        <section className="mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Instagram Video Downloader FAQ</h2>
          <p className="text-center text-muted-foreground mb-12">Expert answers for <strong>savefrom instagram</strong> and <strong>sss instagram</strong> tools.</p>
          <div className="space-y-4">
            {[
              { q: "How to download instagram videos for free?", a: "Copy the video URL, paste it into the 30Tools <strong>instagram video downloader free</strong> box, and click download. It's completely free!" },
              { q: "Is this tool comparable to snapinsta or igram?", a: "Yes, 30Tools is a premium <strong>instagram download video</strong> alternative to <strong>snapinsta app</strong> and <strong>igram download</strong> with no malicious ads." },
              { q: "Can I use this on my iPhone or Android?", a: "Absolutely! Our <strong>mobile instagram video downloader</strong> works perfectly on all smartphones and tablets." },
              { q: "Where does my video save?", a: "Your file is saved in the default 'Downloads' folder of your device when you click <strong>download instagram post</strong>." }
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

        {/* Related Downloaders Footer */}
        <section className="pt-12 border-t border-border mt-20">
          <h2 className="text-2xl font-extrabold mb-8 text-center uppercase tracking-tighter text-primary">Discover More Downloaders</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/tiktok-downloader", title: "TikTok Downloader", icon: "🎵" },
              { href: "/facebook-downloader", title: "Facebook Downloader", icon: "📘" },
              { href: "/twitter-video-downloader", title: "Twitter Downloader", icon: "🐦" },
              { href: "/universal-video-downloader", title: "Universal Downloader", icon: "🌐" }
            ].map((t, i) => (
              <a key={i} href={t.href} className="p-6 bg-card rounded-2xl border border-border hover:border-primary hover:shadow-xl transition-all text-center group">
                <span className="text-3xl mb-3 block">{t.icon}</span>
                <h3 className="font-bold group-hover:text-primary transition-colors text-sm">{t.title}</h3>
              </a>
            ))}
          </div>
        </section>

        <div className="mt-12 text-center">
          <a href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-6 py-2 rounded-full border border-border hover:bg-muted">← Return to House of 30Tools</a>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(7) }} />
    </>
  );
}
