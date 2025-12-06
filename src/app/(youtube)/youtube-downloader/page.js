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

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              YouTube Video Downloader
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Download YouTube videos in HD quality or convert to MP3 instantly. Fast, free, and secure.
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8">
            <YouTubeDownloader />
          </div>
        </div>
      </div>
    </>
  );
}
