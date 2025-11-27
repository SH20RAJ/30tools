import YouTubeDownloader from "@/components/tools/youtube/YouTubeDownloader";
import CTAButton from "./CTAButton";

export const metadata = {
  title: "YouTube Video Downloader - Download YouTube Videos Free Online HD MP4 MP3",
  description: "Download YouTube videos in HD, 4K quality for free. Convert YouTube to MP4, MP3 with our fast, secure downloader. No software installation required.",
  keywords: [
    // Primary high-volume keywords
    "youtube downloader",
    "download youtube video",
    "youtube to mp4",
    "youtube to mp3",
    "youtube video downloader online",
    "free youtube downloader",
    "youtube downloader online free",
    "download youtube videos",
    "youtube converter",
    "youtube mp3 downloader",

    // Long-tail keywords for better ranking
    "download youtube video online free without software",
    "youtube video downloader high quality 1080p 4k",
    "convert youtube to mp3 320kbps high quality",
    "youtube downloader no registration required",
    "free youtube video downloader for pc mobile android ios",
    "download youtube videos fast secure safe",
    "youtube to mp4 converter online free unlimited",
    "extract audio from youtube video mp3 converter",
    "bulk youtube video downloader multiple videos",
    "youtube playlist downloader all videos at once",
    "youtube shorts video downloader vertical format",
    "download youtube thumbnail image along with video",
    "best youtube downloader 2024 free online tool",
    "youtube downloader without watermark logo",
    "download youtube video original quality no compression",
    "youtube music downloader mp3 high quality",
    "youtube video downloader chrome firefox safari",
    "download youtube live stream videos recordings"
  ].join(", "),

  // Open Graph for social sharing
  openGraph: {
    title: "Free YouTube Video Downloader - Download HD Videos & MP3 Online",
    description: "⚡ Download YouTube videos in HD, 4K quality. Convert YouTube to MP4, MP3 instantly. Fast, secure, unlimited downloads. No software needed.",
    url: "https://30tools.com/youtube-downloader",
    siteName: "30tools",
    type: "website",
    images: [
      {
        url: "/og-images/youtube-downloader.jpg",
        width: 1200,
        height: 630,
        alt: "Free YouTube Video Downloader - Download HD Videos Online",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Free YouTube Downloader - Download Videos & Convert to MP3",
    description: "⚡ Download YouTube videos in HD, 4K. Convert to MP3 instantly. Fast, secure & unlimited downloads.",
    images: ["/og-images/youtube-downloader.jpg"],
    creator: "@30tools"
  },

  // Canonical URL
  alternates: {
    canonical: "https://30tools.com/youtube-downloader",
  },

  // Robots directives
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

const jsonLdSchemas = {
  // WebApplication Schema
  webApp: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Free YouTube Video Downloader",
    "alternateName": "YouTube to MP4 MP3 Converter",
    "description": "Free online tool to download YouTube videos and convert them to MP4, MP3 formats in HD, 4K quality. No software installation required.",
    "url": "https://30tools.com/youtube-downloader",
    "applicationCategory": ["MultimediaApplication", "UtilitiesApplication"],
    "operatingSystem": "Any",
    "permissions": "browser",
    "browserRequirements": "Requires JavaScript. Works on Chrome, Firefox, Safari, Edge",
    "softwareVersion": "2.0",
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
      "ratingCount": "50847",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": [
      "Download YouTube videos in HD, 1080p, 4K quality",
      "Convert YouTube videos to MP4 format",
      "Extract high-quality audio as MP3 from YouTube videos",
      "Support for multiple video resolutions and qualities",
      "Lightning-fast download speeds with secure processing",
      "No software installation or registration required",
      "Works seamlessly on all devices and web browsers",
      "Unlimited downloads with no restrictions",
      "Private and secure - no data stored",
      "Support for YouTube Shorts and regular videos"
    ]
  },

  // HowTo Schema
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Download YouTube Videos Online Free",
    "description": "Step-by-step guide to download YouTube videos in HD quality using our free online downloader.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Copy YouTube URL",
        "text": "Copy the YouTube video link you want to download from your browser address bar or share menu."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Paste & Select Quality",
        "text": "Paste the URL into the input field and choose your preferred video quality (MP4) or audio format (MP3)."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Download Instantly",
        "text": "Click the download button and save your YouTube video or audio file directly to your device."
      }
    ],
    "totalTime": "PT1M",
    "tool": {
      "@type": "HowToTool",
      "name": "YouTube Downloader"
    }
  },

  // FAQPage Schema
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it legal to download YouTube videos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can download YouTube videos for personal use, educational purposes, or content you own. Always respect copyright laws and YouTube's terms of service when downloading videos."
        }
      },
      {
        "@type": "Question",
        "name": "What video formats are supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our YouTube downloader supports MP4 (video) and MP3 (audio) formats. MP4 files work on all devices and media players, while MP3 is perfect for audio-only content."
        }
      },
      {
        "@type": "Question",
        "name": "Can I download YouTube playlists?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Currently, you can download individual YouTube videos. For playlist downloads, you'll need to copy and paste each video URL separately."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a download limit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, there are no download limits! You can download as many YouTube videos as you want, completely free of charge."
        }
      },
      {
        "@type": "Question",
        "name": "Does this work on mobile phones?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our YouTube downloader is fully responsive and works perfectly on all devices including Android, iPhone (iOS), tablets, and desktop computers."
        }
      }
    ]
  },

  // BreadcrumbList Schema
  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://30tools.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "YouTube Tools",
        "item": "https://30tools.com/#youtube-tools"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "YouTube Downloader"
      }
    ]
  }
};

export default function YouTubeDownloaderPage() {
  return (
    <>
      {/* Inject all structured data schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.webApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.howTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.faq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.breadcrumb) }}
      />

      {/* Hero Section with Gradient Background */}
      <div className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

        <div className="container relative mx-auto px-4 py-12 md:py-20">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li>→</li>
              <li><a href="/#youtube-tools" className="hover:text-primary transition-colors">YouTube Tools</a></li>
              <li>→</li>
              <li className="text-foreground font-medium">YouTube Downloader</li>
            </ol>
          </nav>

          <div className="max-w-5xl mx-auto text-center mb-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              #1 Free YouTube Downloader
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
              YouTube Video Downloader
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Download YouTube videos in <span className="font-semibold text-foreground">HD, 4K quality</span> or convert to <span className="font-semibold text-foreground">MP3 audio</span> instantly. Fast, secure, and completely free - no registration required.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card text-card-foreground border border-border shadow-sm">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium">HD/4K Quality</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card text-card-foreground border border-border shadow-sm">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium">MP4 & MP3</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card text-card-foreground border border-border shadow-sm">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium">Unlimited Downloads</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card text-card-foreground border border-border shadow-sm">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium">100% Secure</span>
              </div>
            </div>
          </div>

          {/* Main Tool */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 backdrop-blur-sm">
              <YouTubeDownloader />
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="max-w-4xl mx-auto mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">50M+</div>
              <div className="text-sm text-muted-foreground">Downloads</div>
            </div>
            <div className="p-4">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">4.9★</div>
              <div className="text-sm text-muted-foreground">User Rating</div>
            </div>
            <div className="p-4">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Free</div>
            </div>
            <div className="p-4">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Download YouTube Videos</h2>
            <p className="text-lg text-muted-foreground">Simple 3-step process to download any YouTube video</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10" />
              <div className="relative bg-card rounded-2xl p-8 border border-border hover:border-red-300 dark:hover:border-red-700 transition-all">
                <div className="w-16 h-16 bg-primary text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Copy YouTube URL</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Copy the link of the YouTube video you want to download from your browser's address bar or the share button.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10" />
              <div className="relative bg-card rounded-2xl p-8 border border-border hover:border-orange-300 dark:hover:border-orange-700 transition-all">
                <div className="w-16 h-16 bg-primary text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Paste & Select Format</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Paste the URL into the input field above and choose your preferred quality (MP4) or audio format (MP3).
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10" />
              <div className="relative bg-card rounded-2xl p-8 border border-border hover:border-purple-300 dark:hover:border-purple-700 transition-all">
                <div className="w-16 h-16 bg-primary text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Download Instantly</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Click the download button and save your video or audio file directly to your device. It's that simple!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-slate-50 dark:bg-slate-900/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our YouTube Downloader?</h2>
              <p className="text-lg text-muted-foreground">The most powerful and user-friendly YouTube downloader</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎥</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">High Quality Video Downloads</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Download YouTube videos in original quality including HD 720p, Full HD 1080p, and even 4K resolution when available. Our downloader preserves the original video quality for the best viewing experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎵</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Convert YouTube to MP3</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Extract high-quality audio from YouTube videos and save as MP3 files. Perfect for downloading music, podcasts, lectures, and audiobooks with crystal-clear sound quality up to 320kbps.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Lightning Fast Downloads</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Our optimized servers ensure super-fast YouTube video downloads. No waiting times, no slow downloads - get your YouTube videos downloaded in seconds, not minutes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">100% Safe and Secure</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Your privacy is our priority. All YouTube downloads are processed securely without storing any personal data. No malware, no viruses, just clean and safe downloads.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Works on All Devices</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Download YouTube videos on any device - desktop, laptop, tablet, or smartphone. Compatible with Windows, Mac, Linux, Android, and iOS devices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">∞</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Unlimited Downloads</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      No download limits, no restrictions. Download as many YouTube videos as you want, completely free of charge. No registration or subscription required.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Everything you need to know about our YouTube downloader</p>
          </div>

          <div className="space-y-4">
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-bold mb-3 flex items-start gap-3">
                <span className="text-primary flex-shrink-0">Q:</span>
                <span>Is it legal to download YouTube videos?</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed ml-8">
                You can download YouTube videos for personal use, educational purposes, or content you own. Always respect copyright laws and YouTube's terms of service when downloading videos.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-bold mb-3 flex items-start gap-3">
                <span className="text-primary flex-shrink-0">Q:</span>
                <span>What video formats are supported?</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed ml-8">
                Our YouTube downloader supports MP4 (video) and MP3 (audio) formats. MP4 files work on all devices and media players, while MP3 is perfect for audio-only content.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-bold mb-3 flex items-start gap-3">
                <span className="text-primary flex-shrink-0">Q:</span>
                <span>Can I download YouTube playlists?</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed ml-8">
                Currently, you can download individual YouTube videos. For playlist downloads, you'll need to copy and paste each video URL separately.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-bold mb-3 flex items-start gap-3">
                <span className="text-primary flex-shrink-0">Q:</span>
                <span>Is there a download limit?</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed ml-8">
                No, there are no download limits! You can download as many YouTube videos as you want, completely free of charge.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-bold mb-3 flex items-start gap-3">
                <span className="text-primary flex-shrink-0">Q:</span>
                <span>Does this work on mobile phones?</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed ml-8">
                Yes, our YouTube downloader is fully responsive and works perfectly on all devices including Android, iPhone (iOS), tablets, and desktop computers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Download YouTube Videos?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Start downloading your favorite YouTube videos in HD quality right now. It's fast, free, and secure!
          </p>
          <CTAButton />
        </div>
      </div>
    </>
  );
}
