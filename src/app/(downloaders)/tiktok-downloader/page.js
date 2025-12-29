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
  UserCheck
} from "lucide-react";
import { AuthorBio } from "@/components/seo";
import Link from "next/link";

export const metadata = {
  title: "How to Download TikTok Videos Without Watermark (2026) | 30Tools",
  description: "Want to save TikTok videos to your camera roll without the logo? Use our free 2026 updated TikTok downloader for fast, HD, no-watermark downloads. No sign-up, unlimited use.",
  keywords: [
    "tiktok downloader 2026", "snaptik", "ssstik", "ssstiktok", "download tiktok without watermark",
    "musicallydown", "savetik", "tiktokio", "tikmate", "save tt", "tiktok no watermark",
    "tiktok video downloader hd", "download tiktoks", "tiktok download videos", "tt downloader",
    "تحميل فيديوهات تيك توك", "بتنزيل فيديو تيك توك", "baixar videos tiktok", "descargar de tiktok",
    "télécharger vidéo tiktok", "tiktok视频下载", "tiktok converter", "douyin downloader",
    "tik tok download video without watermark", "tiktok link download", "save tiktok video no watermark",
    "tiktok downloader sss", "snaptik tiktok downloader", "tiktok video downloader free"
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
    "name": "TikTok Video Downloader - Snaptik & SSSTik Alternative",
    "alternateName": ["TikTok Downloader", "TikTok Saver", "SSSTik", "SnapTik", "TT Downloader", "TikTok No Watermark"],
    "description": "Fastest TikTok video downloader online. Save TikTok videos in HD and MP4 format without watermark. Best Snaptik & SSSTik alternative (Updated 2026).",
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
        "name": "How to download TikTok videos without watermark for free?",
        "acceptedAnswer": { "@type": "Answer", "text": "To download TikTok videos without watermark for free, copy the video link from TikTok, paste it into our SSSTik & Snaptik alternative tool at 30Tools, and click Download. You will get the HD MP4 version instantly." }
      },
      {
        "@type": "Question",
        "name": "Is this a Snaptik or SSSTiktok alternative?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, our TikTok downloader is a faster and safe alternative to Snaptik, SSSTik, and MusicallyDown. We provide high-speed HD downloads with no registration required." }
      },
      {
        "@type": "Question",
        "name": "Can I save TikTok videos to MP4 on iPhone/Android?",
        "acceptedAnswer": { "@type": "Answer", "text": "Absolutely! Our tool works on all mobile devices. Save TikToks directly to your camera roll or files app in MP4 format without any logos." }
      },
      {
        "@type": "Question",
        "name": "Where are my TikTok downloads saved?",
        "acceptedAnswer": { "@type": "Answer", "text": "Downloaded videos are typically saved in your device's default 'Downloads' folder. On iPhone, you might find them in the 'Files' app or your 'Photos' library depending on your browser settings." }
      },
      {
        "@type": "Question",
        "name": "Do you support TikTok MP3 or audio extraction?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, we support both TikTok MP4 and MP3 formats. You can extract the high-quality original audio or music from any TikTok video easily." }
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
              TikTok <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">Video Downloader</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Wondering how to save TikToks without the logo? Our 2026 updated TikTok downloader is the fastest way to get HD videos to your camera roll for free.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20">No Watermark!</span>
              <span className="bg-pink-500/10 text-pink-600 dark:text-pink-400 px-3 py-1 rounded-full border border-pink-500/20">HD MP4 & MP3</span>
              <span className="bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 px-3 py-1 rounded-full border border-yellow-500/20">Save TT Free</span>
            </div>
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

          {/* SEO Content Section */}
          <section className="prose prose-sm max-w-none text-muted-foreground bg-muted/20 p-8 rounded-3xl border border-border/50 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Best TikTok Downloader Online - SSSTik & Snaptik Alternative</h2>
              <p>
                <strong>30Tools TikTok Downloader</strong> is a free, professional tool that helps you <strong>download TikTok videos without watermark</strong> online. We provide the fastest way to <strong>save TikToks</strong> in HD resolution (MP4) or extract audio (MP3) from your favorite trends. Whether you are searching for a <strong>tiktok converter</strong>, <strong>douyin downloader</strong>, or a reliable <strong>tiktok video downloader free</strong> service, we've got you covered. Compare us to <strong>Snaptik</strong>, <strong>SSSTik</strong>, or <strong>MusicallyDown</strong> - our <strong>tiktok downloader sss</strong> service offers high-speed downloads without intrusive ads.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-foreground">Download TikTok Without Watermark</h3>
                <p>
                  Removing the TikTok watermark is easy with our tool. Just paste the link and our server will remove the TikTok logo and username instantly. It's the perfect solution for reposting clips or saving videos for offline viewing without the distracting floating icon.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground">Fast & Unlimited TikTok Saver</h3>
                <p>
                  Save as many TikToks as you need! We have no limits on the number of downloads per day. Our service is completely free and works on all devices, including iPhone (iOS), Android, PC, and Mac.
                </p>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="font-bold text-foreground mb-4">International Support - تحميل فيديو تيك توك</h3>
              <p className="text-xs italic leading-relaxed">
                Our global users search for us as: <strong>descargar videos de tiktok sin marca de agua</strong> (Spanish), <strong>baixar video tiktok sem marca d'agua</strong> (Portuguese), <strong>télécharger vidéo tiktok sans filigrane</strong> (French), <strong>tiktok视频下载</strong> (Chinese), and <strong>تحميل فيديوهات تيك توك</strong> (Arabic). We support <strong>tik tok download video without watermark</strong> queries in all languages to help you <strong>save tiktok video</strong> content anywhere in the world.
              </p>
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
            <div className="bg-pink-500/5 p-6 rounded-2xl border border-pink-500/10">
              <p className="text-sm text-center italic">
                Note: We are not affiliated with TikTok, ByteDance, or Douyin. Please respect other people's copyrights when downloading content.
              </p>
            </div>
            <AuthorBio author="30Tools Video Engineering Team" />
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
