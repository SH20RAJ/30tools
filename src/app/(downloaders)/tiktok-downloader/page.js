import TikTokDownloader from "@/components/tools/downloaders/TikTokDownloader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle2,
  Copy,
  Download,
  Film,
  Globe,
  Music,
  Smartphone,
  Video,
  Zap,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "TikTok Downloader (2026) - No Watermark, Free & HD | 30Tools",
  description: "Download TikTok videos without watermark in HD quality (Updated 2026). Free TikTok video saver - save to MP4 instantly. No login needed.",
  keywords: [
    "tiktok downloader 2026",
    "download tiktok without watermark",
    "tiktok video downloader",
    "tiktok no watermark",
    "tiktok saver free",
    "save tiktok video",
    "tiktok to mp4",
    "hd tiktok downloader",
    "tiktok audio downloader",
    "updated 2026",
    "online video downloader"
  ].join(", "),
  openGraph: {
    title: "TikTok Downloader (2026) - No Watermark HD Video Download",
    description: "⚡ Download TikTok videos without watermark in HD. Save TikToks to MP4 instantly. Free, fast & unlimited! (Updated 2026)",
    url: "https://30tools.com/tiktok-downloader",
    type: "website",
    images: [{
      url: "/og-images/tiktok-downloader.jpg",
      width: 1200,
      height: 630,
      alt: "Best TikTok Downloader 2026 - No Watermark"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "TikTok Downloader (2026) - No Watermark HD Download",
    description: "⚡ Download TikTok videos without watermark. Save to MP4 in HD quality. Updated 2026!",
    images: ["/og-images/tiktok-downloader.jpg"],
    creator: "@30tools"
  },
  alternates: { canonical: "https://30tools.com/tiktok-downloader" },
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
        "acceptedAnswer": { "@type": "Answer", "text": "Simply copy the TikTok video link from the app (tap Share > Copy Link), paste it into our downloader, and click Download. The video will be saved without the TikTok watermark." }
      },
      {
        "@type": "Question",
        "name": "Is this TikTok downloader free?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, our TikTok downloader is 100% free with no hidden charges. You can download unlimited TikTok videos without watermark at no cost." }
      },
      {
        "@type": "Question",
        "name": "Can I download TikTok videos on iPhone?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes! Our TikTok downloader works perfectly on iPhone and iPad. Just copy the link, paste it here, and save the video to your camera roll or Files app." }
      },
      {
        "@type": "Question",
        "name": "Can I download TikTok audio/music separately?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, we also offer TikTok audio download. Visit our TikTok Audio Downloader to extract MP3 audio from any TikTok video." }
      },
      {
        "@type": "Question",
        "name": "What quality are the downloaded videos?",
        "acceptedAnswer": { "@type": "Answer", "text": "We provide the highest quality available - typically 1080p HD without watermark. The video quality matches or exceeds the original TikTok." }
      }
    ]
  }
};

export default function TikTokDownloaderPage() {
  const features = [
    {
      icon: <CheckCircle2 className="w-6 h-6 text-cyan-500" />,
      title: "No Watermark",
      description: "Download videos clean, without the TikTok logo or username.",
    },
    {
      icon: <Video className="w-6 h-6 text-pink-500" />,
      title: "HD Quality",
      description: "Save videos in 1080p HD MP4 format.",
    },
    {
      icon: <Music className="w-6 h-6 text-yellow-500" />,
      title: "MP3 Audio",
      description: "Extract high-quality audio tracks from TikToks.",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-green-500" />,
      title: "Any Device",
      description: "Compatible with iPhone, Android, Mac, and Windows.",
    },
  ];

  const howToSteps = [
    {
      step: 1,
      title: "Copy Link",
      text: "Open TikTok, tap Share, and select 'Copy Link'.",
      icon: <Copy className="w-6 h-6" />,
    },
    {
      step: 2,
      title: "Paste URL",
      text: "Paste the TikTok link in the box above.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      step: 3,
      title: "Download",
      text: "Click Download button to save video or audio.",
      icon: <Download className="w-6 h-6" />,
    },
  ];

  const faqs = [
    {
      q: "How do I download TikTok videos without watermark?",
      a: "Copy the TikTok video link (Share > Copy Link), paste it into our downloader, and click Download."
    },
    {
      q: "Is this TikTok downloader free?",
      a: "Yes, 100% free! No hidden charges, no subscription needed."
    },
    {
      q: "Can I download TikTok on iPhone?",
      a: "Absolutely! Works perfectly on iPhone and iPad."
    },
    {
      q: "Can I download TikTok audio/sounds?",
      a: "Yes! You can extract MP3 audio from any TikTok video separately."
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.webApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.faq) }} />

      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Hero */}
          <section className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              TikTok <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">Downloader</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Download TikTok videos without watermark in HD. Save MP4 and MP3 instantly.
            </p>
          </section>

          {/* Tool */}
          <section className="bg-card rounded-3xl shadow-xl border border-border/50 p-6 md:p-8">
            <TikTokDownloader />
          </section>

          {/* Features */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="flex gap-4 p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/50 transition-colors shadow-sm">
                <div className="shrink-0 bg-primary/10 p-3 rounded-xl h-fit">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </section>

          {/* How To */}
          <section className="bg-muted/30 rounded-3xl p-8 md:p-12 border border-border/50">
            <h2 className="text-3xl font-bold text-center mb-12">How to Download?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howToSteps.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-background rounded-full mx-auto flex items-center justify-center text-primary shadow-md mb-6 border-2 border-primary/20">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-base md:text-lg font-medium text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Footer Links */}
          <section className="text-center py-8 border-t border-border">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <Link href="/instagram-downloader" className="hover:text-primary transition-colors">Instagram Downloader</Link>
              <span>•</span>
              <Link href="/youtube-downloader" className="hover:text-primary transition-colors">YouTube Downloader</Link>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
