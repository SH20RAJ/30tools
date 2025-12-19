import InstagramDownloader from "@/components/tools/downloaders/InstagramDownloader";
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
  Image as ImageIcon,
  Smartphone,
  Video,
  Zap,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Instagram Downloader (2026) - Save Video, Reels, Story & Photo | 30Tools",
  description: "Download Instagram Videos, Reels, Stories & Photos in HD 1080p. Updated 2026. Anonymous, Free, No Watermark. Works on iPhone/Android.",
  keywords: [
    "instagram downloader 2026", "instagram login", "ig login", "انستا", "instagram.com login",
    "instagram entrar", "instagram login account", "ig downloader free", "save instagram video",
    "instagram to mp4", "instagram story viewer", "no watermark", "anonymous story viewer",
    "instagram app download", "insta login", "isnta", "ins", "inst"
  ].join(", "),
  openGraph: {
    title: "Instagram Downloader (2026) - Save Reels & Stories Free",
    description: "⚡ Download Instagram Reels, Stories & Videos in HD. Free, fast & no watermark! (Updated 2026)",
    url: "https://30tools.com/instagram-downloader",
    type: "website",
    images: [{
      url: "/og-images/instagram-downloader.jpg",
      width: 1200,
      height: 630,
      alt: "Best Instagram Downloader 2026"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Downloader (2026) - Free & No Watermark",
    description: "⚡ Download Instagram Reels, Stories & Videos in HD. Updated 2026!",
    images: ["/og-images/instagram-downloader.jpg"],
    creator: "@30tools"
  },
  alternates: { canonical: "https://30tools.com/instagram-downloader" },
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
        "acceptedAnswer": { "@type": "Answer", "text": "Yes! Our Instagram downloader saves Reels in their original quality without any watermarks. You get the exact video as it was uploaded to Instagram." }
      },
      {
        "@type": "Question",
        "name": "How do I download Instagram Stories anonymously?",
        "acceptedAnswer": { "@type": "Answer", "text": "Simply paste the Instagram Story link or the profile URL into our downloader. You can view and download Stories without the account owner knowing, as long as the profile is public." }
      },
      {
        "@type": "Question",
        "name": "Can I download all photos from an Instagram carousel?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes! When you paste a carousel post link, our tool detects all images and videos in the carousel and lets you download each one individually or all at once." }
      },
      {
        "@type": "Question",
        "name": "Is it free to download Instagram content?",
        "acceptedAnswer": { "@type": "Answer", "text": "Absolutely! Our Instagram downloader is 100% free with no hidden charges. Download unlimited videos, photos, Reels, and Stories without any subscription or payment." }
      },
      {
        "@type": "Question",
        "name": "Does this work on iPhone and Android?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, our downloader works on all devices including iPhone, iPad, Android phones and tablets, Windows PC, Mac, and any device with a modern web browser." }
      },
      {
        "@type": "Question",
        "name": "Can I download from private Instagram accounts?",
        "acceptedAnswer": { "@type": "Answer", "text": "You can only download content from private accounts if you follow that account and are logged in. Public account content can be downloaded by anyone." }
      }
    ]
  }
};

export default function InstagramDownloaderPage() {
  const features = [
    {
      icon: <Video className="w-6 h-6 text-pink-500" />,
      title: "Reels & Videos",
      description: "Download Reels and Videos in HD without watermark.",
    },
    {
      icon: <ImageIcon className="w-6 h-6 text-purple-500" />,
      title: "Photos & Carousels",
      description: "Save single photos or entire carousel albums instantly.",
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Story Saver",
      description: "Download Instagram Stories anonymously before they disappear.",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-blue-500" />,
      title: "All Devices",
      description: "Works perfectly on iOS, Android, PC, and Mac.",
    },
  ];

  const howToSteps = [
    {
      step: 1,
      title: "Copy Link",
      text: "Find the post/reel/story, tap share (⋯), and copy link.",
      icon: <Copy className="w-6 h-6" />,
    },
    {
      step: 2,
      title: "Paste URL",
      text: "Paste the link in the box above.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      step: 3,
      title: "Download",
      text: "Click download to save to your device.",
      icon: <Download className="w-6 h-6" />,
    },
  ];

  const faqs = [
    {
      q: "Can I download Instagram Reels without watermark?",
      a: "Yes! Our Instagram downloader saves Reels in their original quality without any watermarks."
    },
    {
      q: "How do I download Instagram Stories anonymously?",
      a: "Simply paste the Instagram Story link. You can view and download Stories without the account owner knowing."
    },
    {
      q: "Is it free to download Instagram content?",
      a: "Absolutely! Our Instagram downloader is 100% free with no hidden charges."
    },
    {
      q: "Does this work on iPhone and Android?",
      a: "Yes, our downloader works on all devices including iPhone, iPad, Android phones and tablets."
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
              Instagram <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Downloader</span> (2026)
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Fastest <strong>instagram login</strong> alternative for <strong>instagram downloader</strong> tasks. Download Instagram Videos, Reels, Stories, and Photos in HD. Free, secure, and no watermark. Best <strong>ig login</strong> and <strong>ansta</strong> downloader.
            </p>
          </section>

          {/* Tool */}
          <section className="bg-card rounded-3xl shadow-xl border border-border/50 p-6 md:p-8">
            <InstagramDownloader />
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
              <Link href="/tiktok-downloader" className="hover:text-primary transition-colors">TikTok Downloader</Link>
              <span>•</span>
              <Link href="/youtube-downloader" className="hover:text-primary transition-colors">YouTube Downloader</Link>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
