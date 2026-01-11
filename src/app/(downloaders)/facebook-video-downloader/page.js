import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

const researchedKeywords = [
  "download facebook video downloader", "free facebook video downloader online", "facebookvideo downloader",
  "free downloadable facebook videos", "facebook video downloader app", "snap save facebook",
  "facebook video downloader online free", "free download facebook video", "facebook link video downloader",
  "downloader video facebook", "download facebook video free", "private facebook video downloader",
  "fb downloader free", "facebook save video", "snaptik facebook", "facebook video downloader online - download facebook videos",
  "download facebook videos online free", "facebook download videos", "facebook download online",
  "snapface", "video download facebook", "facebook.com video downloader", "facebook online video downloader",
  "fbdownloader online", "facebook photo downloader", "facebook downloader free", "save video facebook",
  "facebook video download free", "facebook download video online", "تنزيل فيديو من فيسبوك",
  "télécharger video facebook", "download facebook video online getfbvideo.pro", "save video from facebook",
  "video downloader facebook", "facebook online downloader", "fd downloader", "facebook converter",
  "facebook link downloader", "telecharger video facebook en ligne", "video facebook download",
  "fbdown net download", "free facebook video downloader", "facebook videos downloader",
  "fdownloader", "download videos from facebook", "تحميل فيديو من فيسبوك", "fb video link downloader",
  "how to download video from facebook", "تحميل فيديو فيسبوك", "how to download facebook videos",
  "getfvid", "download from facebook video", "fdown net", "download facebook reel", "fbdown net",
  "ফেসবুক ভিডিও ডাউনলোড", "save facebook", "fb downloader video", "online facebook video downloader",
  "facebookdownloader", "facebook video downloader hd", "how to download facebook video",
  "facebook video downloader for pc", "fsave", "fbdown.net", "fb reels download", "download reels facebook",
  "facebook videos download", "how to download videos from facebook", "snap facebook", "تحميل فيديو من الفيس بوك",
  "facebook视频下载", "facebook story download", "baixar video facebook", "fb reels downloader",
  "facebook story downloader", "download facebook video online", "facebook private video downloader",
  "baixar video do facebook", "fb reel downloader", "facebook video download online",
  "fb video download online", "save facebook video", "download facebook reels", "fbdownloader video",
  "descargar videos de facebook gratis", "facebook reels downloader", "fb video downloader online",
  "baixar videos do facebook", "fdown.net video downloader", "sss facebook", "facebook reel download",
  "savefrom facebook", "télécharger vidéo facebook", "bajar videos de facebook", "baixar vídeo facebook",
  "bajar video de facebook", "facebook downloader online", "save from facebook", "baixar vídeo do facebook",
  "fb download video", "download facebook videos", "descargar videos facebook", "download fb video",
  "facebook reel downloader", "download from facebook", "snapsave facebook", "snap save",
  "download video from facebook", "descargar video facebook", "facebook video downloader free",
  "facebook reels download", "telecharger video facebook", "fdown.net download", "fdown.net",
  "facebook video", "download video fb", "fdown", "fb download", "fbdownloader", "facebook video downloader online",
  "download video facebook", "fbdown", "fb video download", "facebook downloader video", "facebook download video",
  "descargar video de facebook", "fb downloader", "fb video downloader", "download facebook video", "snapsave",
  "descargar videos de facebook", "facebook video download", "facebook downloader", "facebook download", "downloader", "download", "facebook",
  "facebook private video downloader", "fb private video download", "save private facebook video", "download facebook reel audio", "facebook story saver anonymous", "facebook 4k video downloader", "download high quality facebook video", "facebook to mp4 1080p"
];

export const metadata = {
  title: "Facebook Video Downloader Online - Download FB Videos Free | 30Tools",
  description: "Best free online facebook video downloader to save HD videos from Facebook. Download FB reels, stories, and videos from links instantly. No login needed.",
  keywords: researchedKeywords.join(", "),

  openGraph: {
    title: "Facebook Video Downloader - Download FB Videos Online Free",
    description: "⚡ Fast & Free facebook download video service. Support for HD, 4K, and Private videos. Save from Facebook links instantly!",
    url: "https://30tools.com/facebook-video-downloader",
    siteName: "30tools",
    type: "website",
    images: [{ url: "/og-images/facebook-video-downloader.jpg", width: 1200, height: 630, alt: "Facebook Video Downloader Online" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Facebook Video Downloader - Save FB HD Videos",
    description: "⚡ The ultimate online facebook downloader. Fast, free, and works for all FB videos!",
    images: ["/og-images/facebook-video-downloader.jpg"],
    creator: "@30tools"
  },

  alternates: { canonical: "https://30tools.com/facebook-downloader" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Facebook Video Downloader Online",
    "alternateName": ["FB Video Downloader", "FDownloader", "Getfvid", "FBDown"],
    "description": "Powerful online tool to download facebook videos in MP4 HD quality for free.",
    "url": "https://30tools.com/facebook-video-downloader",
    "applicationCategory": ["MultimediaApplication", "UtilitiesApplication"],
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "14158" }
  },
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Download Facebook Videos Online",
    "description": "Step-by-step guide to download video facebook online with 30Tools.",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Copy FB URL", "text": "Copy the video link from Facebook." },
      { "@type": "HowToStep", "position": 2, "name": "Paste Link", "text": "Paste it into our facebook online video downloader box." },
      { "@type": "HowToStep", "position": 3, "name": "Download HD", "text": "Choose quality and save the facebook download video." }
    ]
  }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

export default function FacebookVideoDownloaderPage() {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.webApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.howTo) }} />

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li><a href="/" className="hover:text-primary transition-colors">Home</a></li><li>/</li>
            <li><a href="/all-downloaders" className="hover:text-primary transition-colors">Downloaders</a></li><li>/</li>
            <li className="text-foreground font-medium">Facebook Video Downloader</li>
          </ol>
        </nav>

        <AdUnit />

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-foreground leading-tight">
            Download <span className="text-primary">Facebook Videos</span> Online
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Get your favorite content with the most reliable <strong>facebook online video downloader</strong>.
            Download <strong>facebook videos online free</strong> in HD, Full HD, and 4K. Whether you use
            <strong>fb downloader</strong> or <strong>fbdown</strong>, 30Tools provides the fastest
            <strong>facebook download video</strong> experience on any browser. Safe, secure, and no login required!
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">⚡ <strong>FB Video Download</strong></span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">🆓 <strong>Download Facebook Video Free</strong></span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">🎬 <strong>Facebook Reels Download</strong></span>
          </div>
        </div>

        <AdUnit />

        {/* Tool Component */}
        <div className="bg-card rounded-2xl shadow-2xl border border-border p-6 md:p-10 mb-20">
          <UniversalVideoDownloader />
        </div>

        <AdUnit />

        {/* Content Section */}
        <section className="mb-20 prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">How to Use Facebook Video Downloader Online Free</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <p>
                To <strong>download facebook videos online</strong>, simply follow these steps. First, copy the
                <strong>facebook link video downloader</strong> URL from your Facebook app. Paste it into the
                <strong>downloader video facebook</strong> input above and hit the download button.
                Our <strong>fbdownloader online</strong> will fetch all available qualities for you.
              </p>
              <p>
                From <strong>private facebook video downloader</strong> features to saving <strong>fb reels</strong>,
                our <strong>facebook downloader free</strong> service handles it all. No need to look for
                <strong>facebook video downloader app</strong> downloads - 30Tools is a lightweight,
                high-speed web alternate.
              </p>
            </div>
            <div className="bg-muted/30 p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold mb-4">Popular Search Alternatives:</h3>
              <ul className="space-y-2 text-sm font-semibold marker:text-primary">
                <li>🔹 <strong>Facebook Story Downloader</strong></li>
                <li>🔹 <strong>Facebook Reel Downloader</strong></li>
                <li>🔹 <strong>FB Downloader Video</strong></li>
                <li>🔹 <strong>FSave</strong> & <strong>FDown</strong></li>
                <li>🔹 <strong>Getfvid</strong> Alternative</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Deep Dive Section: Reels & Private Video */}
        <section className="mb-20 bg-blue-50 dark:bg-blue-950/20 p-8 md:p-12 rounded-3xl border border-blue-100 dark:border-blue-900/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Special Features: <span className="text-primary">Reels & Private Videos</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Download Facebook Reels</h3>
                <p className="text-muted-foreground mb-4">
                  Short-form content is king. Our tool is optimized to <strong>download reels facebook</strong> in full HD.
                  Just paste the reel link. If you also enjoy short videos on other platforms, check out our:
                </p>
                <ul className="space-y-2">
                  <li>
                    <a href="/instagram-downloader" className="flex items-center gap-2 text-primary font-medium hover:underline">
                      📸 Instagram Reels Downloader
                    </a>
                  </li>
                  <li>
                    <a href="/tiktok-downloader" className="flex items-center gap-2 text-primary font-medium hover:underline">
                      🎵 TikTok Video Downloader
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Private Video Support</h3>
                <p className="text-muted-foreground">
                  Trying to save a video from a private group? Most tools fail, but our <strong>facebook private video downloader</strong> logic
                  can handle complex permissions where you have access.
                  (Note: Respect user privacy and copyright always).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How-To Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Capture Facebook Videos in HD Quality</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-card rounded-2xl border border-border hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-bold mb-4">Paste URL</h3>
              <p className="text-muted-foreground">Input the <strong>facebook video download free</strong> link.</p>
            </div>
            <div className="text-center p-8 bg-card rounded-2xl border border-border hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold mb-4">Pick Quality</h3>
              <p className="text-muted-foreground">Select <strong>facebook video downloader hd</strong> or SD.</p>
            </div>
            <div className="text-center p-8 bg-card rounded-2xl border border-border hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold mb-4">Save Video</h3>
              <p className="text-muted-foreground">Enjoy your <strong>save video facebook</strong> content!</p>
            </div>
          </div>
        </section>

        <AdUnit />

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

        {/* Related Section */}
        <section className="pt-12 border-t border-border">
          <h2 className="text-2xl font-bold mb-8 text-center">More Popular Downloaders</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/instagram-video-downloader", title: "Instagram Downloader", icon: "📸" },
              { href: "/tiktok-downloader", title: "TikTok Downloader", icon: "🎵" },
              { href: "/youtube-downloader", title: "YouTube Downloader", icon: "📹" },
              { href: "/facebook-downloader", title: "Main FB Tool", icon: "📘" }
            ].map((t, i) => (
              <a key={i} href={t.href} className="p-6 bg-card rounded-2xl border border-border hover:border-primary transition-all text-center group">
                <span className="text-3xl mb-3 block">{t.icon}</span>
                <h3 className="font-bold group-hover:text-primary transition-colors text-sm">{t.title}</h3>
              </a>
            ))}
          </div>
        </section>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(7) }} />
    </>
  );
}
