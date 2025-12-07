import TikTokDownloader from "@/components/tools/downloaders/TikTokDownloader";

export const metadata = {
  title: "TikTok Downloader - Download TikTok Videos Without Watermark Free | 30tools",
  description: "Download TikTok videos without watermark in HD quality. Free TikTok video saver - save TikToks to MP4. No registration, works on all devices. Best TikTok downloader 2024.",
  keywords: [
    // Primary high-volume keywords (Bing exact-match)
    "tiktok downloader",
    "download tiktok video",
    "tiktok video downloader",
    "tiktok no watermark",
    "save tiktok video",
    "tiktok saver",
    "download tiktok without watermark",
    "tiktok to mp4",
    "tiktok video saver",

    // Long-tail keywords for Bing ranking
    "tiktok video downloader without watermark free online",
    "download tiktok videos hd quality no watermark",
    "save tiktok to camera roll iphone android",
    "tiktok downloader mp4 high quality free",
    "how to download tiktok videos without watermark",
    "best tiktok video downloader 2024 online free",
    "tiktok video download without logo watermark",
    "save tiktok sounds audio mp3 free download",
    "tiktok slideshow photo downloader images",
    "snaptik alternative tiktok downloader no watermark",
    "ssstiktok savetik tikmate alternative free",
    "download tiktok private video with access"
  ].join(", "),
  openGraph: {
    title: "TikTok Downloader - No Watermark HD Video Download Free",
    description: "⚡ Download TikTok videos without watermark in HD. Save TikToks to MP4 instantly. Free, fast & unlimited!",
    url: "https://30tools.com/tiktok-downloader",
    siteName: "30tools",
    type: "website",
    images: [{
      url: "/og-images/tiktok-downloader.jpg",
      width: 1200,
      height: 630,
      alt: "TikTok Downloader - Download Videos Without Watermark"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "TikTok Downloader - No Watermark HD Download",
    description: "⚡ Download TikTok videos without watermark. Save to MP4 in HD quality. Free & fast!",
    images: ["/og-images/tiktok-downloader.jpg"],
    creator: "@30tools"
  },
  alternates: { canonical: "https://30tools.com/tiktok-downloader" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

// Comprehensive JSON-LD schemas
const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "TikTok Video Downloader",
    "alternateName": ["TikTok Downloader", "TikTok Saver", "TikTok No Watermark", "TT Downloader"],
    "description": "Free online tool to download TikTok videos without watermark in HD quality. Save TikToks to MP4 format on any device.",
    "url": "https://30tools.com/tiktok-downloader",
    "applicationCategory": ["MultimediaApplication", "UtilitiesApplication"],
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript. Works on Chrome, Firefox, Safari, Edge",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "author": {
      "@type": "Organization",
      "name": "30tools",
      "url": "https://30tools.com"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "67845",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": [
      "Download TikTok videos without watermark",
      "HD quality video downloads (1080p)",
      "Save TikTok to MP4 format",
      "Extract TikTok audio as MP3",
      "No registration or login required",
      "Works on iPhone, Android, PC, Mac",
      "Unlimited free downloads",
      "Fast and secure processing",
      "Support for TikTok slideshows",
      "Download private videos (with access)"
    ]
  },
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Download TikTok Videos Without Watermark",
    "description": "Step-by-step guide to download TikTok videos without watermark using our free online tool.",
    "totalTime": "PT30S",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Copy TikTok Video Link",
        "text": "Open the TikTok app, find the video you want to download, tap Share and then 'Copy Link'. You can also copy the URL from TikTok web."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Paste Link in Downloader",
        "text": "Paste the copied TikTok link into the input field above. Our tool processes the video automatically."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Download Without Watermark",
        "text": "Click Download to save the TikTok video without watermark directly to your device in HD quality."
      }
    ]
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I download TikTok videos without watermark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply copy the TikTok video link from the app (tap Share > Copy Link), paste it into our downloader, and click Download. The video will be saved without the TikTok watermark."
        }
      },
      {
        "@type": "Question",
        "name": "Is this TikTok downloader free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our TikTok downloader is 100% free with no hidden charges. You can download unlimited TikTok videos without watermark at no cost."
        }
      },
      {
        "@type": "Question",
        "name": "Can I download TikTok videos on iPhone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our TikTok downloader works perfectly on iPhone and iPad. Just copy the link, paste it here, and save the video to your camera roll or Files app."
        }
      },
      {
        "@type": "Question",
        "name": "Can I download TikTok audio/music separately?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we also offer TikTok audio download. Visit our TikTok Audio Downloader to extract MP3 audio from any TikTok video."
        }
      },
      {
        "@type": "Question",
        "name": "What quality are the downloaded videos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide the highest quality available - typically 1080p HD without watermark. The video quality matches or exceeds the original TikTok."
        }
      },
      {
        "@type": "Question",
        "name": "Is it safe to use this TikTok downloader?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Our tool is SSL secured and doesn't require any personal information. We don't store videos on our servers - downloads happen directly to your device."
        }
      }
    ]
  },
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://30tools.com" },
      { "@type": "ListItem", "position": 2, "name": "Downloaders", "item": "https://30tools.com/all-downloaders" },
      { "@type": "ListItem", "position": 3, "name": "TikTok Downloader" }
    ]
  }
};

const features = [
  { icon: "🚫", title: "No Watermark", desc: "Download TikTok videos completely clean - no TikTok logo or username overlay" },
  { icon: "📺", title: "HD Quality", desc: "Get the highest quality available - up to 1080p HD video resolution" },
  { icon: "⚡", title: "Super Fast", desc: "Lightning-fast processing - download videos in seconds, not minutes" },
  { icon: "📱", title: "All Devices", desc: "Works on iPhone, Android, iPad, Windows PC, Mac - any device" },
  { icon: "🆓", title: "100% Free", desc: "No subscription, no hidden fees, no download limits - completely free" },
  { icon: "🔒", title: "Safe & Secure", desc: "SSL encrypted, no data stored, your privacy is protected" },
  { icon: "🎵", title: "Audio Support", desc: "Extract audio from TikToks as MP3 with our audio downloader" },
  { icon: "🔄", title: "Unlimited", desc: "Download as many TikTok videos as you want, no restrictions" }
];

const howToSteps = [
  { step: "1", title: "Copy TikTok Link", desc: "Open TikTok app, find the video, tap Share button, then tap 'Copy Link'." },
  { step: "2", title: "Paste URL Here", desc: "Paste the copied TikTok link into the input field above. We process it instantly." },
  { step: "3", title: "Download Video", desc: "Click Download to save the TikTok video without watermark to your device." }
];

const faqs = [
  {
    q: "How do I download TikTok videos without watermark?",
    a: "Copy the TikTok video link (Share > Copy Link), paste it into our downloader, and click Download. Done! No watermark on the video."
  },
  {
    q: "Is this TikTok downloader completely free?",
    a: "Yes, 100% free! No hidden charges, no subscription needed. Download unlimited TikToks without paying anything."
  },
  {
    q: "Can I download TikTok on iPhone?",
    a: "Absolutely! Works perfectly on iPhone and iPad. Save videos to your camera roll or Files app directly."
  },
  {
    q: "Can I download TikTok audio/sounds?",
    a: "Yes! Use our TikTok Audio Downloader to extract MP3 audio from any TikTok video separately."
  },
  {
    q: "What video quality do I get?",
    a: "We provide the highest available quality - typically 1080p HD without any watermark or logo."
  },
  {
    q: "Is it safe to use?",
    a: "Completely safe! SSL secured, no personal data required, and we don't store any videos on our servers."
  },
  {
    q: "Can I download TikTok slideshows?",
    a: "Yes, we support TikTok photo slideshows. Download all images from slideshow TikToks easily."
  },
  {
    q: "Why isn't the download working?",
    a: "Make sure you copied the correct link, the video is public, and try refreshing. Some region-restricted videos may not work."
  }
];

const relatedTools = [
  { href: "/tiktok-audio-downloader", icon: "🎵", title: "TikTok Audio Downloader", desc: "Extract MP3 from TikToks" },
  { href: "/tiktok-mp3-converter", icon: "🎧", title: "TikTok to MP3", desc: "Convert TikTok to MP3" },
  { href: "/instagram-reel-downloader", icon: "🎞️", title: "Instagram Reels", desc: "Download IG Reels" },
  { href: "/youtube-shorts-downloader", icon: "📹", title: "YouTube Shorts", desc: "Download Shorts" },
  { href: "/snapchat-video-downloader", icon: "👻", title: "Snapchat Downloader", desc: "Download Snaps" },
  { href: "/twitter-downloader", icon: "🐦", title: "Twitter/X Downloader", desc: "Download Twitter videos" }
];

export default function TikTokDownloaderPage() {
  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.webApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.breadcrumb) }} />

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li className="text-muted-foreground/50">/</li>
              <li><a href="/all-downloaders" className="hover:text-primary transition-colors">Downloaders</a></li>
              <li className="text-muted-foreground/50">/</li>
              <li className="text-foreground font-medium">TikTok Downloader</li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground leading-tight">
              TikTok Video Downloader
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              Download TikTok videos without watermark in HD quality. Free online TikTok saver - save TikToks to MP4 on any device. No registration required.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="bg-black/5 dark:bg-white/10 px-3 py-1 rounded-full">🚫 No Watermark</span>
              <span className="bg-black/5 dark:bg-white/10 px-3 py-1 rounded-full">📺 HD Quality</span>
              <span className="bg-black/5 dark:bg-white/10 px-3 py-1 rounded-full">⚡ Super Fast</span>
              <span className="bg-black/5 dark:bg-white/10 px-3 py-1 rounded-full">🆓 100% Free</span>
            </div>
          </header>

          {/* Tool Interface */}
          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-12">
            <TikTokDownloader />
          </div>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Why Use Our TikTok Downloader?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((f, i) => (
                <div key={i} className="p-5 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all">
                  <span className="text-3xl mb-3 block">{f.icon}</span>
                  <h3 className="font-semibold mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How to Use */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">How to Download TikTok Videos</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {howToSteps.map((s, i) => (
                <div key={i} className="text-center p-6 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-pink-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SEO Content */}
          <section className="mb-12 bg-card rounded-xl border border-border p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">Best Free TikTok Video Downloader Without Watermark</h2>
            <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
              <p>
                Looking for the <strong>best TikTok downloader without watermark</strong>? Our free online tool lets you download TikTok videos in HD quality without the annoying TikTok logo or username overlay. Save your favorite TikToks to watch offline anytime.
              </p>
              <p>
                <strong>Download TikTok without watermark</strong> in just 3 simple steps. Copy the video link from TikTok, paste it here, and download. Our tool removes the watermark and delivers the cleanest possible video quality - up to 1080p HD.
              </p>
              <p>
                Works on all devices and platforms! Whether you're using an iPhone, Android phone, Windows PC, or Mac, our TikTok saver works directly in your browser. No app installation required, no registration, no limits.
              </p>
              <p>
                Better than SnapTik, SSSTikTok, and TikMate - our downloader is faster, more reliable, and always free. We support regular TikTok videos, slideshows, and even private videos (if you have access). Download TikTok videos by millions of users worldwide.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">TikTok Downloader FAQ</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-card rounded-xl border border-border">
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-medium hover:text-primary transition-colors">
                    {faq.q}
                    <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-4 pb-4 text-muted-foreground text-sm">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>

          {/* Related Tools */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">More Video Downloaders</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedTools.map((tool, i) => (
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

          {/* Trust Signals */}
          <section className="text-center py-8 border-t border-border">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span>4.9/5 Rating</span>
              </div>
              <div>👥 67,000+ Users</div>
              <div>💾 5M+ Downloads</div>
              <div>🔒 SSL Secured</div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
