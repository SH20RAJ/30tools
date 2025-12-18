import FacebookDownloader from "@/components/tools/downloaders/FacebookDownloader";

export const metadata = {
  title: "Facebook Video Downloader (2026) - Free, HD & 4K | 30Tools",
  description: "Download Facebook videos in HD, Full HD 1080p & 4K (Updated 2026). Save FB Reels, Stories, and private videos for free. No watermark, no login.",
  keywords: [
    "facebook video downloader 2026",
    "fb video downloader",
    "download facebook video",
    "facebook downloader hd",
    "save facebook video pc",
    "facebook reels downloader",
    "facebook story saver",
    "download fb video 1080p",
    "updated 2026",
    "facebook video download online"
  ].join(", "),
  openGraph: {
    title: "Facebook Video Downloader (2026) - Free HD & 4K Tool",
    description: "⚡ Download Facebook videos, Reels & Stories in HD/4K quality. Free online FB downloader - no registration required! (Updated 2026)",
    url: "https://30tools.com/facebook-downloader",
    siteName: "30tools",
    type: "website",
    images: [{
      url: "/og-images/facebook-downloader.jpg",
      width: 1200,
      height: 630,
      alt: "Facebook Video Downloader 2026 - Free HD/4K"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Facebook Video Downloader (2026) - Free HD & 4K",
    description: "⚡ Download Facebook videos in HD. Save Reels, Stories & Posts. Updated 2026!",
    images: ["/og-images/facebook-downloader.jpg"],
    creator: "@30tools"
  },
  alternates: { canonical: "https://30tools.com/facebook-downloader" },
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

// Comprehensive JSON-LD schemas for Bing & Google
const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Facebook Video Downloader",
    "alternateName": ["FB Video Downloader", "Facebook Downloader", "FB Downloader"],
    "description": "Free online tool to download Facebook videos in HD, Full HD, and 4K quality. Download FB Reels, Stories, and video posts without watermark.",
    "url": "https://30tools.com/facebook-downloader",
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
      "ratingCount": "32847",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": [
      "Download Facebook videos in HD, 1080p, 4K quality",
      "Save Facebook Reels without watermark",
      "Download Facebook Stories before they expire",
      "No registration or login required",
      "Works on all devices - PC, Android, iPhone",
      "Unlimited free downloads",
      "Fast and secure processing",
      "Support for private videos (with access)"
    ]
  },
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Download Facebook Videos Online Free",
    "description": "Step-by-step guide to download Facebook videos in HD quality using our free online downloader.",
    "totalTime": "PT1M",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Copy Facebook Video URL",
        "text": "Open Facebook, find the video you want to download, click the three dots menu and select 'Copy link' or copy the URL from your browser."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Paste URL and Choose Quality",
        "text": "Paste the copied Facebook video link into the input field above. Select your preferred quality - SD, HD, or 4K."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Download and Save",
        "text": "Click the Download button and save the Facebook video directly to your device. The download starts automatically."
      }
    ]
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it free to download Facebook videos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our Facebook video downloader is 100% free to use. There are no hidden charges, subscription fees, or download limits. You can download unlimited Facebook videos without paying anything."
        }
      },
      {
        "@type": "Question",
        "name": "Can I download Facebook videos without watermark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our tool downloads Facebook videos in their original quality without adding any watermarks. The downloaded video will be exactly as it appears on Facebook."
        }
      },
      {
        "@type": "Question",
        "name": "How do I download Facebook Reels?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To download Facebook Reels: Open the Reel on Facebook, tap the three-dot menu, copy the link, paste it into our downloader above, and click Download. The Reel will be saved to your device."
        }
      },
      {
        "@type": "Question",
        "name": "Does this work on mobile phones?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our Facebook downloader works perfectly on all devices including Android phones, iPhones (iOS), tablets, and desktop computers. No app installation needed - just use your web browser."
        }
      },
      {
        "@type": "Question",
        "name": "Can I download private Facebook videos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can only download private Facebook videos if you have access to view them. If you can see the video on Facebook, you can download it. Videos from public pages and profiles can be downloaded by anyone."
        }
      },
      {
        "@type": "Question",
        "name": "What video quality options are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer multiple quality options: SD (360p/480p), HD (720p), Full HD (1080p), and when available, 4K quality. Choose the quality that best suits your needs and storage space."
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
      { "@type": "ListItem", "position": 3, "name": "Facebook Downloader" }
    ]
  }
};

const features = [
  { icon: "📺", title: "HD & 4K Quality", desc: "Download videos in the highest quality available - HD, Full HD, or 4K" },
  { icon: "🚀", title: "Lightning Fast", desc: "Ultra-fast processing with instant download links - no waiting" },
  { icon: "🔒", title: "100% Secure", desc: "Your data stays private. We don't store videos or personal info" },
  { icon: "📱", title: "All Devices", desc: "Works on PC, Mac, Android, iPhone - any device with a browser" },
  { icon: "🆓", title: "Completely Free", desc: "No hidden fees, no subscriptions, no registration required" },
  { icon: "🚫", title: "No Watermark", desc: "Download original videos without any added watermarks" },
  { icon: "🔄", title: "Unlimited Downloads", desc: "Download as many Facebook videos as you want, no limits" },
  { icon: "🎬", title: "All Content Types", desc: "Videos, Reels, Stories, Live recordings, and more" }
];

const howToSteps = [
  { step: "1", title: "Copy Video Link", desc: "Find the Facebook video, click the three dots (⋯) menu, and select 'Copy link'. Or copy the URL directly from your browser." },
  { step: "2", title: "Paste & Choose Quality", desc: "Paste the link in the input field above. Our tool automatically fetches available quality options." },
  { step: "3", title: "Download & Save", desc: "Select your preferred quality (HD/SD) and click Download. The video saves directly to your device." }
];

const faqs = [
  {
    q: "Is it free to download Facebook videos?",
    a: "Yes, our Facebook video downloader is 100% free. No hidden charges, subscriptions, or download limits. Download unlimited videos for free."
  },
  {
    q: "Can I download Facebook videos without watermark?",
    a: "Yes! We download videos in their original quality without adding any watermarks. You get the exact video as uploaded on Facebook."
  },
  {
    q: "How do I download Facebook Reels?",
    a: "Open the Facebook Reel, tap the three-dot menu, copy the link, paste it into our downloader, and click Download. That's it!"
  },
  {
    q: "Does this work on iPhone and Android?",
    a: "Absolutely! Our downloader works on all devices - Android, iPhone, iPad, Windows PC, Mac, and any device with a web browser."
  },
  {
    q: "Can I download private Facebook videos?",
    a: "You can download private videos only if you have permission to view them on Facebook. Public videos can be downloaded by anyone."
  },
  {
    q: "What quality options are available?",
    a: "We offer SD (360p/480p), HD (720p), Full HD (1080p), and 4K when available. Choose based on your needs and storage space."
  },
  {
    q: "Is it legal to download Facebook videos?",
    a: "Downloading videos for personal use is generally acceptable. Always respect copyright and don't redistribute content without permission."
  },
  {
    q: "Why isn't my download working?",
    a: "Make sure you copied the correct link, the video is public or you have access, and try refreshing the page. Some live videos may not be available immediately."
  }
];

const relatedTools = [
  { href: "/facebook-story-downloader", icon: "📖", title: "FB Story Downloader", desc: "Download Facebook Stories" },
  { href: "/facebook-video-downloader", icon: "🎥", title: "FB Video Saver", desc: "Alternative video downloader" },
  { href: "/instagram-downloader", icon: "📸", title: "Instagram Downloader", desc: "Download IG videos & photos" },
  { href: "/tiktok-downloader", icon: "🎵", title: "TikTok Downloader", desc: "Download TikTok videos" },
  { href: "/youtube-downloader", icon: "📹", title: "YouTube Downloader", desc: "Download YouTube videos" },
  { href: "/twitter-downloader", icon: "🐦", title: "Twitter Downloader", desc: "Download Twitter/X videos" }
];

export default function FacebookDownloaderPage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.webApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.breadcrumb) }} />

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">

          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li className="text-muted-foreground/50">/</li>
              <li><a href="/all-downloaders" className="hover:text-primary transition-colors">Downloaders</a></li>
              <li className="text-muted-foreground/50">/</li>
              <li className="text-foreground font-medium">Facebook Downloader</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <header className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground leading-tight">
              Facebook Video Downloader
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              Download Facebook videos in HD, Full HD, and 4K quality for free. Save FB Reels, Stories, and video posts without watermark. Works on all devices.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">⚡ Fast Download</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">📺 HD Quality</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">🔒 Secure</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">🆓 100% Free</span>
            </div>
          </header>

          {/* Tool Interface */}
          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-12">
            <FacebookDownloader />
          </div>

          {/* Features Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Why Use Our Facebook Video Downloader?</h2>
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

          {/* How to Use Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">How to Download Facebook Videos</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {howToSteps.map((s, i) => (
                <div key={i} className="text-center p-6 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SEO Content Section */}
          <section className="mb-12 bg-card rounded-xl border border-border p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">Free Online Facebook Video Downloader</h2>
            <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
              <p>
                Looking for the <strong>best free Facebook video downloader</strong>? Our online tool lets you download Facebook videos, Reels, Stories, and live broadcasts in HD quality without any software installation. Whether you're on a PC, Mac, Android, or iPhone, our downloader works seamlessly in your web browser.
              </p>
              <p>
                <strong>Download Facebook videos without watermark</strong> in multiple quality options including SD (480p), HD (720p), Full HD (1080p), and even 4K when available. Simply copy the Facebook video URL, paste it into our downloader, and save the video directly to your device in seconds.
              </p>
              <p>
                Our Facebook downloader supports all types of content: regular video posts, Facebook Reels, Stories (before they expire), Watch videos, and even live video recordings. No registration, no login, no hidden fees – just fast, free, and unlimited Facebook video downloads.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-card rounded-xl border border-border">
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-medium hover:text-primary transition-colors">
                    {faq.q}
                    <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-4 pb-4 text-muted-foreground text-sm">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Related Tools Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Related Video Downloaders</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedTools.map((tool, i) => (
                <a
                  key={i}
                  href={tool.href}
                  className="group p-5 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all"
                >
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
              <div>👥 32,000+ Users</div>
              <div>💾 1M+ Downloads</div>
              <div>🔒 SSL Secured</div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
