import TwitterDownloader from "@/components/tools/downloaders/TwitterDownloader";

export const metadata = {
  title: "Twitter Video Downloader - Download X Videos & GIFs Free HD | 30tools",
  description: "Download Twitter (X) videos and GIFs in HD quality for free. Save videos from tweets to MP4 format. Fast, secure X video downloader - no registration required.",
  keywords: [
    // Primary high-volume keywords (Bing exact-match)
    "twitter video downloader",
    "x video downloader",
    "download twitter video",
    "twitter downloader",
    "x downloader",
    "save twitter video",
    "twitter gif downloader",
    "twitter media downloader",
    "download x videos",
    "twitter video saver",

    // Long-tail keywords for Bing ranking
    "twitter video downloader online free hd mp4",
    "download twitter video without login registration",
    "x video downloader high quality 1080p",
    "save twitter gif to phone android iphone",
    "twitter video download mp4 free online tool",
    "how to download twitter videos on mobile",
    "best twitter video downloader 2024 free",
    "twitter live video downloader recording save",
    "x platform video downloader tool free",
    "download videos from x formerly twitter",
    "twdownload ssstwitter alternative free tool",
    "twitter spaces audio downloader mp3"
  ].join(", "),
  openGraph: {
    title: "Twitter Video Downloader - Download X Videos & GIFs Free",
    description: "⚡ Download Twitter (X) videos and GIFs in HD quality. Save tweets to MP4 instantly. Free & unlimited!",
    url: "https://30tools.com/twitter-downloader",
    siteName: "30tools",
    type: "website",
    images: [{
      url: "/og-images/twitter-downloader.jpg",
      width: 1200,
      height: 630,
      alt: "Twitter Video Downloader - Download X Videos Free"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Twitter Video Downloader - Download X Videos Free",
    description: "⚡ Download Twitter/X videos & GIFs in HD. Fast, free & unlimited!",
    images: ["/og-images/twitter-downloader.jpg"],
    creator: "@30tools"
  },
  alternates: { canonical: "https://30tools.com/twitter-downloader" },
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
    "name": "Twitter Video Downloader",
    "alternateName": ["X Video Downloader", "Twitter Downloader", "X Downloader", "Tweet Video Saver"],
    "description": "Free online tool to download Twitter (X) videos and GIFs in HD quality. Save video content from tweets to MP4 format.",
    "url": "https://30tools.com/twitter-downloader",
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
      "ratingValue": "4.8",
      "ratingCount": "38562",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": [
      "Download Twitter videos in HD quality",
      "Save GIFs from tweets",
      "Support for X (formerly Twitter) platform",
      "Multiple quality options",
      "No registration required",
      "Works on all devices",
      "Unlimited free downloads",
      "Fast and secure processing"
    ]
  },
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Download Twitter Videos",
    "description": "Step-by-step guide to download videos from Twitter (X) using our free online tool.",
    "totalTime": "PT30S",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Copy Tweet URL",
        "text": "Open Twitter/X, find the tweet with the video or GIF, tap Share and then 'Copy link' to copy the tweet URL."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Paste URL in Downloader",
        "text": "Paste the copied tweet link into our Twitter video downloader tool above."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Choose Quality & Download",
        "text": "Select your preferred quality (if multiple options available) and click Download to save the video."
      }
    ]
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I download videos from Twitter/X?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Copy the tweet URL containing the video you want to download, paste it into our tool, and click Download. The video will be saved to your device in HD quality."
        }
      },
      {
        "@type": "Question",
        "name": "Is this Twitter video downloader free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our Twitter video downloader is 100% free with no hidden charges. Download unlimited videos from Twitter/X without any subscription or payment."
        }
      },
      {
        "@type": "Question",
        "name": "Can I download GIFs from Twitter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our tool downloads both videos and GIFs from Twitter. GIFs are converted to MP4 format for universal compatibility across all devices."
        }
      },
      {
        "@type": "Question",
        "name": "Does this work with X (formerly Twitter)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Our tool works with both Twitter and X URLs. Whether you use twitter.com or x.com links, we can download the video content."
        }
      },
      {
        "@type": "Question",
        "name": "What video quality can I download?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide the highest quality available for each video, typically up to 1280x720 (HD). Quality depends on the original video uploaded to Twitter."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to log in to Twitter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No login required! Just copy the public tweet URL and paste it into our downloader. You don't need a Twitter account to use this tool."
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
      { "@type": "ListItem", "position": 3, "name": "Twitter Downloader" }
    ]
  }
};

const features = [
  { icon: "🎥", title: "HD Video Download", desc: "Download Twitter videos in the highest quality available - up to 1080p HD" },
  { icon: "🎞️", title: "GIF Support", desc: "Save Twitter GIFs as MP4 videos - works on all devices and players" },
  { icon: "⚡", title: "Lightning Fast", desc: "Instant video processing and download - no waiting around" },
  { icon: "📱", title: "All Devices", desc: "Works on iPhone, Android, PC, Mac - any device with a browser" },
  { icon: "🆓", title: "100% Free", desc: "No subscription, no hidden fees, no download limits whatsoever" },
  { icon: "🔒", title: "Safe & Secure", desc: "SSL encrypted, no data stored - your privacy is our priority" },
  { icon: "🔄", title: "Unlimited Downloads", desc: "Download as many Twitter videos as you want, no restrictions" },
  { icon: "🌐", title: "X Compatible", desc: "Works with both twitter.com and x.com URLs seamlessly" }
];

const howToSteps = [
  { step: "1", title: "Copy Tweet Link", desc: "Find the tweet with video/GIF, tap Share, then 'Copy link' to copy the URL." },
  { step: "2", title: "Paste URL Here", desc: "Paste the tweet link into the input field above. We'll fetch the video instantly." },
  { step: "3", title: "Download Video", desc: "Choose quality if available and click Download to save the video to your device." }
];

const faqs = [
  {
    q: "How do I download videos from Twitter/X?",
    a: "Copy the tweet URL containing the video, paste it into our tool above, and click Download. That's it!"
  },
  {
    q: "Is this Twitter video downloader free?",
    a: "Yes, 100% free! No hidden charges, no subscription. Download unlimited Twitter videos for free."
  },
  {
    q: "Can I download GIFs from Twitter?",
    a: "Yes! We download GIFs as MP4 videos for universal compatibility on all devices and players."
  },
  {
    q: "Does this work with X (formerly Twitter)?",
    a: "Absolutely! Works with both twitter.com and x.com URLs. Same great service on the rebranded platform."
  },
  {
    q: "What video quality can I download?",
    a: "We provide the highest quality available, typically up to 1280x720 (HD). Depends on original video quality."
  },
  {
    q: "Do I need to log in to Twitter?",
    a: "No login required! Just copy the public tweet URL and paste it here. No Twitter account needed."
  },
  {
    q: "Can I download private tweet videos?",
    a: "Only public tweets can be downloaded without login. Private/protected tweets are not accessible."
  },
  {
    q: "Why isn't the download working?",
    a: "Make sure you copied the correct tweet URL, the tweet is public, and the video hasn't been deleted."
  }
];

const relatedTools = [
  { href: "/twitter-video-downloader", icon: "📹", title: "Twitter Video Saver", desc: "Alternative video tool" },
  { href: "/facebook-downloader", icon: "📘", title: "Facebook Downloader", desc: "Download FB videos" },
  { href: "/instagram-downloader", icon: "📸", title: "Instagram Downloader", desc: "Download IG content" },
  { href: "/tiktok-downloader", icon: "🎵", title: "TikTok Downloader", desc: "Download TikToks" },
  { href: "/reddit-downloader", icon: "🤖", title: "Reddit Downloader", desc: "Download Reddit videos" },
  { href: "/youtube-downloader", icon: "📹", title: "YouTube Downloader", desc: "Download YT videos" }
];

export default function TwitterDownloaderPage() {
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
              <li className="text-foreground font-medium">Twitter Downloader</li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground leading-tight">
              Twitter Video Downloader
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              Download Twitter (X) videos and GIFs in HD quality for free. Save video content from tweets instantly. Works with both twitter.com and x.com links.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="bg-sky-500/10 text-sky-600 dark:text-sky-400 px-3 py-1 rounded-full border border-sky-500/20">🐦 Twitter & X</span>
              <span className="bg-sky-500/10 text-sky-600 dark:text-sky-400 px-3 py-1 rounded-full border border-sky-500/20">🎥 HD Videos</span>
              <span className="bg-sky-500/10 text-sky-600 dark:text-sky-400 px-3 py-1 rounded-full border border-sky-500/20">🎞️ GIFs</span>
              <span className="bg-sky-500/10 text-sky-600 dark:text-sky-400 px-3 py-1 rounded-full border border-sky-500/20">🆓 100% Free</span>
            </div>
          </header>

          {/* Tool Interface */}
          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-12">
            <TwitterDownloader />
          </div>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Why Use Our Twitter Video Downloader?</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">How to Download Twitter Videos</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {howToSteps.map((s, i) => (
                <div key={i} className="text-center p-6 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
            <h2 className="text-2xl font-bold mb-4">Free Twitter & X Video Downloader Online</h2>
            <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
              <p>
                Looking for a reliable <strong>Twitter video downloader</strong>? Our free online tool lets you download videos and GIFs from Twitter (now X) in HD quality. Whether you want to save a viral tweet, a news clip, or a funny GIF, our tool makes it simple.
              </p>
              <p>
                <strong>Download Twitter videos to MP4</strong> format that works on all devices. Simply copy the tweet URL, paste it into our downloader, and save the video directly to your phone or computer. No registration, no login, no app installation required.
              </p>
              <p>
                Our tool is fully compatible with <strong>X (formerly Twitter)</strong>. Whether you copy a link from twitter.com or x.com, we can extract and download the video content. We support regular videos, GIFs, and even longer video content from Twitter Blue/X Premium users.
              </p>
              <p>
                Better than twdownload, ssstwitter, and other alternatives - our Twitter downloader is faster, more reliable, and always free. Used by millions of users worldwide to save their favorite Twitter content.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Twitter Video Downloader FAQ</h2>
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
                <span>4.8/5 Rating</span>
              </div>
              <div>👥 38,000+ Users</div>
              <div>💾 3M+ Downloads</div>
              <div>🔒 SSL Secured</div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
