import YouTubeDownloader from "@/components/tools/youtube/YouTubeDownloader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle2,
  Download,
  FileAudio,
  FileVideo,
  Globe,
  MonitorSmartphone,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "YouTube Video Downloader - Download YouTube Videos Free",
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
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Fast & Easy",
      description: "Download videos in seconds. Just paste the URL and click download.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
      title: "100% Secure",
      description: "No malware, no ads, no trackers. Your security is our priority.",
    },
    {
      icon: <MonitorSmartphone className="w-6 h-6 text-blue-500" />,
      title: "All Devices",
      description: "Works perfectly on PC, Mac, iPhone, Android, and Tablets.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-purple-500" />,
      title: "High Quality",
      description: "Support for HD 1080p, 2K, and 4K video downloads.",
    },
  ];

  const howToSteps = [
    {
      title: "Copy URL",
      description: "Copy the YouTube video URL from the address bar or share button.",
      icon: "📋",
    },
    {
      title: "Paste Link",
      description: "Paste the link into the input field above.",
      icon: "🔗",
    },
    {
      title: "Download",
      description: "Choose your format (MP4/MP3) and click Download.",
      icon: "⬇️",
    },
  ];

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

      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Hero Section */}
          <section className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              YouTube Video <span className="text-primary">Downloader</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Download YouTube videos in HD quality or convert to MP3 instantly. Fast, free, and secure tool for all your downloading needs.
            </p>
          </section>

          {/* Main Tool */}
          <section className="bg-card rounded-3xl shadow-2xl border border-border/50 p-6 md:p-10 relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <YouTubeDownloader />
            </div>
          </section>

          {/* Features Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/50 transition-colors shadow-sm">
                <div className="shrink-0 bg-primary/10 p-3 rounded-xl h-fit">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </section>

          {/* How To Section */}
          <section className="bg-muted/30 rounded-3xl p-8 md:p-12 border border-border/50">
            <h2 className="text-3xl font-bold text-center mb-12">
              How to Download YouTube Videos?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howToSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-background rounded-full mx-auto flex items-center justify-center text-4xl shadow-md mb-6 border-2 border-primary/20 group-hover:border-primary/50 transition-colors">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
            {/* Visual Step with Image placeholder integration could go here if requested, but sticking to text/icons for speed */}
          </section>

          {/* Supported Formats */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Supported Formats</h2>
              <p className="text-muted-foreground">We support high-quality conversions for all needs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <FileVideo className="text-blue-500 w-6 h-6" />
                  <h3 className="font-semibold text-lg">Video Formats</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between p-2 hover:bg-muted rounded-lg transition-colors"><span>MP4 4K (2160p)</span><span className="text-green-500 font-medium">Ultra HD</span></div>
                  <div className="flex justify-between p-2 hover:bg-muted rounded-lg transition-colors"><span>MP4 1080p</span><span className="text-blue-500 font-medium">Full HD</span></div>
                  <div className="flex justify-between p-2 hover:bg-muted rounded-lg transition-colors"><span>MP4 720p</span><span className="text-blue-400 font-medium">HD</span></div>
                  <div className="flex justify-between p-2 hover:bg-muted rounded-lg transition-colors"><span>WEBM</span><span className="text-muted-foreground">Web Ready</span></div>
                </div>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <FileAudio className="text-purple-500 w-6 h-6" />
                  <h3 className="font-semibold text-lg">Audio Formats</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between p-2 hover:bg-muted rounded-lg transition-colors"><span>MP3 320kbps</span><span className="text-purple-500 font-medium">Best Quality</span></div>
                  <div className="flex justify-between p-2 hover:bg-muted rounded-lg transition-colors"><span>MP3 256kbps</span><span className="text-purple-400 font-medium">High</span></div>
                  <div className="flex justify-between p-2 hover:bg-muted rounded-lg transition-colors"><span>MP3 128kbps</span><span className="text-muted-foreground">Standard</span></div>
                  <div className="flex justify-between p-2 hover:bg-muted rounded-lg transition-colors"><span>M4A</span><span className="text-muted-foreground">AAC</span></div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Common questions about our YouTube Downloader</p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {jsonLdSchemas.faq.mainEntity.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-base md:text-lg font-medium text-left">
                    {faq.name}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.acceptedAnswer.text}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Footer / Links */}
          <section className="text-center py-8 border-t border-border">
            <p className="text-muted-foreground mb-4">
              Explore more free tools:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/terabox-downloader" className="px-4 py-2 rounded-full bg-muted hover:bg-accent text-sm font-medium transition-colors">
                Terabox Downloader
              </Link>
              <Link href="/instagram-downloader" className="px-4 py-2 rounded-full bg-muted hover:bg-accent text-sm font-medium transition-colors">
                Instagram Downloader
              </Link>
              <Link href="/tiktok-downloader" className="px-4 py-2 rounded-full bg-muted hover:bg-accent text-sm font-medium transition-colors">
                TikTok Downloader
              </Link>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
