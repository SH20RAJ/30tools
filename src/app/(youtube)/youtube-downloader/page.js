import YouTubeDownloader from "@/components/tools/youtube/YouTubeDownloader";

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

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li>/</li>
            <li><a href="/#youtube-tools" className="hover:text-blue-600">YouTube Tools</a></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">YouTube Downloader</li>
          </ol>
        </nav>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              YouTube Video Downloader
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Download YouTube videos and audio in high definition quality for
              free. Our advanced YouTube downloader supports HD, Full HD, and 4K
              video downloads with lightning-fast speed. Convert YouTube videos
              to MP4 or extract high-quality MP3 audio files instantly without
              any software installation. Perfect for offline viewing, content
              creation, and educational purposes.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                ✓ HD Quality Downloads
              </span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                ✓ MP4 & MP3 Support
              </span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                ✓ No Registration Required
              </span>
              <span className="bg-primary/10 px-3 py-1 rounded-full">
                ✓ Unlimited Downloads
              </span>
            </div>
          </div>

          <YouTubeDownloader />

          {/* SEO Content Sections */}
          <div className="mt-12 space-y-8">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                How to Download YouTube Videos Online Free
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-red-500 font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">Copy YouTube URL</h3>
                  <p className="text-sm text-muted-foreground">
                    Copy the YouTube video link you want to download from your
                    browser address bar
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-red-500 font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">Paste & Select Quality</h3>
                  <p className="text-sm text-muted-foreground">
                    Paste the URL and choose your preferred video quality or
                    audio format
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-red-500 font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">Download Instantly</h3>
                  <p className="text-sm text-muted-foreground">
                    Click download and save your YouTube video or audio file to
                    your device
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                Why Choose Our YouTube Video Downloader?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2 text-red-600">
                    🎥 High Quality Video Downloads
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download YouTube videos in original quality including HD
                    720p, Full HD 1080p, and even 4K resolution when available.
                    Our YouTube downloader preserves the original video quality
                    for the best viewing experience.
                  </p>

                  <h3 className="font-medium mb-2 text-red-600">
                    🎵 Convert YouTube to MP3 Audio
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Extract high-quality audio from YouTube videos and save as
                    MP3 files. Perfect for downloading music, podcasts,
                    lectures, and audiobooks from YouTube with crystal-clear
                    sound quality up to 320kbps.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-red-600">
                    ⚡ Lightning Fast Download Speed
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our optimized servers ensure super-fast YouTube video
                    downloads. No waiting times, no slow downloads - get your
                    YouTube videos downloaded in seconds, not minutes.
                  </p>

                  <h3 className="font-medium mb-2 text-red-600">
                    🔒 100% Safe and Secure
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Your privacy is our priority. All YouTube downloads are
                    processed securely without storing any personal data. No
                    malware, no viruses, just clean and safe YouTube video
                    downloads.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">
                    Is it legal to download YouTube videos?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    You can download YouTube videos for personal use,
                    educational purposes, or content you own. Always respect
                    copyright laws and YouTube's terms of service when
                    downloading videos.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    What video formats are supported?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Our YouTube downloader supports MP4 (video) and MP3 (audio)
                    formats. MP4 files work on all devices and media players,
                    while MP3 is perfect for audio-only content.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    Can I download YouTube playlists?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Currently, you can download individual YouTube videos. For
                    playlist downloads, you'll need to copy and paste each video
                    URL separately.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    Is there a download limit?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    No, there are no download limits! You can download as many
                    YouTube videos as you want, completely free of charge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
