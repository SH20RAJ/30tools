import InstagramDownloader from "@/components/tools/downloaders/InstagramDownloader";

export const metadata = {
  title: "Instagram Downloader - Download IG Videos, Photos, Reels & Stories Free | 30tools",
  description: "Download Instagram videos, photos, Reels, Stories & IGTV in HD quality. Free online IG downloader - save Instagram content without watermark. Works on all devices.",
  keywords: [
    // Primary high-volume keywords (Bing exact-match optimized)
    "instagram downloader",
    "instagram video downloader",
    "download instagram video",
    "instagram reels downloader",
    "instagram story downloader",
    "ig downloader",
    "save instagram video",
    "instagram photo downloader",
    "instagram saver",

    // Long-tail keywords for Bing ranking
    "download instagram reels without watermark free",
    "instagram video downloader online hd quality",
    "save instagram stories anonymous without login",
    "instagram photo downloader high resolution",
    "download instagram igtv videos free online",
    "how to download instagram videos on iphone android",
    "best instagram downloader 2024 free tool",
    "instagram carousel photo downloader all images",
    "download instagram reel audio mp3 free",
    "instagram private video downloader with access",
    "save instagram posts to camera roll free",
    "ig reels video saver no watermark hd"
  ].join(", "),
  openGraph: {
    title: "Instagram Downloader - Save IG Videos, Reels & Stories Free",
    description: "⚡ Download Instagram content in HD quality. Save Reels, Stories, IGTV & photos without watermark. Free & fast!",
    url: "https://30tools.com/instagram-downloader",
    siteName: "30tools",
    type: "website",
    images: [{
      url: "/og-images/instagram-downloader.jpg",
      width: 1200,
      height: 630,
      alt: "Instagram Downloader - Download IG Videos & Reels Free"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Downloader - Save IG Videos & Reels Free",
    description: "⚡ Download Instagram Reels, Stories & Videos in HD. Free, fast & no watermark!",
    images: ["/og-images/instagram-downloader.jpg"],
    creator: "@30tools"
  },
  alternates: { canonical: "https://30tools.com/instagram-downloader" },
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

// JSON-LD structured data for Bing & Google
const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Instagram Downloader",
    "alternateName": ["IG Downloader", "Instagram Video Downloader", "Instagram Saver", "IG Video Saver"],
    "description": "Free online tool to download Instagram videos, photos, Reels, Stories, and IGTV content in HD quality without watermark.",
    "url": "https://30tools.com/instagram-downloader",
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
      "ratingCount": "45632",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": [
      "Download Instagram Reels without watermark",
      "Save Instagram Stories anonymously",
      "Download Instagram videos in HD quality",
      "Save all photos from carousel posts",
      "Download IGTV long-form videos",
      "View and download profile pictures in full size",
      "No registration or login required",
      "Works on all devices and browsers",
      "Fast and secure processing",
      "Unlimited free downloads"
    ]
  },
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Download Instagram Videos, Reels & Stories",
    "description": "Complete guide to downloading Instagram content including videos, Reels, Stories, and photos using our free online tool.",
    "totalTime": "PT1M",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Copy Instagram Link",
        "text": "Open Instagram app or website, find the content you want to download, tap the three dots menu and select 'Copy Link' or 'Copy share URL'."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Paste URL in Downloader",
        "text": "Paste the copied Instagram link into the input field above. Our tool automatically detects whether it's a video, photo, Reel, or Story."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Download Content",
        "text": "Click the Download button to fetch the content. For videos, choose quality options if available. Save to your device instantly."
      }
    ]
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I download Instagram Reels without watermark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our Instagram downloader saves Reels in their original quality without any watermarks. You get the exact video as it was uploaded to Instagram."
        }
      },
      {
        "@type": "Question",
        "name": "How do I download Instagram Stories anonymously?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply paste the Instagram Story link or the profile URL into our downloader. You can view and download Stories without the account owner knowing, as long as the profile is public."
        }
      },
      {
        "@type": "Question",
        "name": "Can I download all photos from an Instagram carousel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! When you paste a carousel post link, our tool detects all images and videos in the carousel and lets you download each one individually or all at once."
        }
      },
      {
        "@type": "Question",
        "name": "Is it free to download Instagram content?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Our Instagram downloader is 100% free with no hidden charges. Download unlimited videos, photos, Reels, and Stories without any subscription or payment."
        }
      },
      {
        "@type": "Question",
        "name": "Does this work on iPhone and Android?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our downloader works on all devices including iPhone, iPad, Android phones and tablets, Windows PC, Mac, and any device with a modern web browser."
        }
      },
      {
        "@type": "Question",
        "name": "Can I download from private Instagram accounts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can only download content from private accounts if you follow that account and are logged in. Public account content can be downloaded by anyone."
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
      { "@type": "ListItem", "position": 3, "name": "Instagram Downloader" }
    ]
  }
};

const contentTypes = [
  { icon: "🎥", title: "Videos", desc: "Download Instagram videos in HD quality" },
  { icon: "📸", title: "Photos", desc: "Save single photos or entire carousels" },
  { icon: "🎞️", title: "Reels", desc: "Download Reels without watermark" },
  { icon: "📖", title: "Stories", desc: "Save Stories before they disappear" },
  { icon: "📺", title: "IGTV", desc: "Download long-form IGTV videos" },
  { icon: "👤", title: "Profile Pics", desc: "View & download full-size DPs" }
];

const features = [
  { icon: "🚫", title: "No Watermark", desc: "Download original content without any watermarks added" },
  { icon: "📺", title: "HD Quality", desc: "Get the highest quality available - up to 1080p HD" },
  { icon: "🔒", title: "Anonymous", desc: "View and download Stories without being detected" },
  { icon: "📱", title: "All Devices", desc: "Works on iPhone, Android, PC, Mac - any browser" },
  { icon: "⚡", title: "Super Fast", desc: "Instant processing - download in seconds" },
  { icon: "🆓", title: "100% Free", desc: "No registration, no subscription, no limits" },
  { icon: "🖼️", title: "Carousel Support", desc: "Download all images from multi-photo posts" },
  { icon: "🔄", title: "Unlimited", desc: "No daily limits - download as much as you want" }
];

const howToSteps = [
  { step: "1", title: "Copy Link", desc: "Open Instagram, find the content, tap ⋯ menu and select 'Copy Link' or share to copy URL." },
  { step: "2", title: "Paste URL", desc: "Paste the Instagram link into the input box above. We auto-detect content type." },
  { step: "3", title: "Download", desc: "Click Download and save videos, photos, or Reels directly to your device." }
];

const faqs = [
  {
    q: "Can I download Instagram Reels without watermark?",
    a: "Yes! Our tool downloads Reels in original quality without watermarks. The video is saved exactly as uploaded."
  },
  {
    q: "How do I download Instagram Stories anonymously?",
    a: "Paste the Story link or profile URL - you can download Stories from public accounts without them knowing you viewed it."
  },
  {
    q: "Can I download all photos from a carousel post?",
    a: "Yes! We detect all images and videos in carousel posts. Download each one individually or all at once."
  },
  {
    q: "Is this Instagram downloader really free?",
    a: "100% free! No hidden charges, subscriptions, or download limits. Save unlimited Instagram content."
  },
  {
    q: "Does it work on iPhone and Android?",
    a: "Works perfectly on all devices - iPhone, Android, iPad, Windows, Mac. Just use your web browser."
  },
  {
    q: "Can I download from private accounts?",
    a: "Only if you follow that account. Public profile content can be downloaded by anyone."
  },
  {
    q: "What quality are the downloads?",
    a: "We provide the highest quality available - typically 1080p HD for videos and full resolution for photos."
  },
  {
    q: "Do I need to install any app?",
    a: "No installation needed! Our downloader works entirely in your web browser. No apps required."
  }
];

const relatedTools = [
  { href: "/instagram-reel-downloader", icon: "🎞️", title: "IG Reels Downloader", desc: "Download Reels specifically" },
  { href: "/instagram-story-downloader", icon: "📖", title: "Story Downloader", desc: "Save Instagram Stories" },
  { href: "/instagram-dp-downloader", icon: "👤", title: "DP Downloader", desc: "Full-size profile pictures" },
  { href: "/instagram-video-downloader", icon: "🎥", title: "Video Downloader", desc: "Focus on video content" },
  { href: "/tiktok-downloader", icon: "🎵", title: "TikTok Downloader", desc: "Download TikTok videos" },
  { href: "/facebook-downloader", icon: "📘", title: "Facebook Downloader", desc: "Download FB videos" }
];

export default function InstagramDownloaderPage() {
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
              <li className="text-foreground font-medium">Instagram Downloader</li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground leading-tight">
              Instagram Downloader
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              Download Instagram videos, photos, Reels, Stories & IGTV in HD quality. Free online tool - save Instagram content without watermark on any device.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full border border-purple-500/20">📸 Photos</span>
              <span className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full border border-purple-500/20">🎥 Videos</span>
              <span className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full border border-purple-500/20">🎞️ Reels</span>
              <span className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full border border-purple-500/20">📖 Stories</span>
              <span className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full border border-purple-500/20">🆓 100% Free</span>
            </div>
          </header>

          {/* Tool Interface */}
          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-12">
            <InstagramDownloader />
          </div>

          {/* Supported Content Types */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Download Any Instagram Content</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {contentTypes.map((f, i) => (
                <div key={i} className="p-5 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all">
                  <span className="text-3xl mb-3 block">{f.icon}</span>
                  <h3 className="font-semibold mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Why Choose Our Instagram Downloader?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((f, i) => (
                <div key={i} className="p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all text-center">
                  <span className="text-2xl mb-2 block">{f.icon}</span>
                  <h3 className="font-semibold text-sm mb-1">{f.title}</h3>
                  <p className="text-xs text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How to Use */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">How to Download From Instagram</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {howToSteps.map((s, i) => (
                <div key={i} className="text-center p-6 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
            <h2 className="text-2xl font-bold mb-4">Free Instagram Video & Photo Downloader Online</h2>
            <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
              <p>
                Our <strong>Instagram downloader</strong> is the ultimate tool to save your favorite Instagram content. Download Instagram Reels, videos, photos, Stories, and IGTV videos in HD quality without any watermarks. Whether you want to save a viral Reel or back up your own content, our free online tool makes it simple.
              </p>
              <p>
                <strong>Download Instagram Reels without watermark</strong> instantly. Unlike other tools, we preserve the original quality and don't add any branding to your downloads. Save Reels in 1080p HD quality directly to your camera roll or downloads folder.
              </p>
              <p>
                <strong>Anonymous Instagram Story viewer and downloader</strong> - view and save Stories without the account owner knowing. Perfect for checking out public profiles or saving Stories before they disappear after 24 hours. Works with all public Instagram accounts.
              </p>
              <p>
                Our tool supports all Instagram content types: single photos, carousel posts (multiple images), video posts, Reels, Stories, IGTV, and even profile pictures in full resolution. No app installation needed - just paste the link and download!
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">More Instagram & Social Media Tools</h2>
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
              <div>👥 45,000+ Users</div>
              <div>💾 2M+ Downloads</div>
              <div>🔒 100% Secure</div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
