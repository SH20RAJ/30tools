import YouTubeDownloader from "@/components/tools/youtube/YouTubeDownloader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle2,
  FileAudio,
  FileVideo,
  MonitorSmartphone,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Link from "next/link";

// dynamic metadata generation
export async function generateMetadata({ searchParams }) {
  const params = await searchParams; // Next.js 15+ await searchParams
  const slug = params?.slug;

  // Default Metadata
  const defaultTitle = "YouTube Video Downloader - 30Tools";
  const defaultDesc = "Download YouTube videos in MP4 and MP3 formats securely and freely. High-speed, high-quality downloads without any software installation.";

  if (!slug) {
    return {
      title: defaultTitle,
      description: defaultDesc,
      alternates: {
        canonical: "https://30tools.com/youtube-downloader",
      },
      openGraph: {
        title: "YouTube Video Downloader | 30Tools",
        description: defaultDesc,
        url: "https://30tools.com/youtube-downloader",
        siteName: "30tools",
        type: "website",
        images: [
          {
            url: "/og-images/youtube-downloader.jpg",
            width: 1200,
            height: 630,
            alt: "YouTube Video Downloader - 30Tools",
          },
        ],
      },
    };
  }

  // Dynamic Metadata based on slug
  // e.g. youtube-downloader-4k -> "Youtube Downloader 4k"
  const readableSlug = slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const title = `${readableSlug} - Free Online Tool | 30Tools`;
  const description = `Best free ${readableSlug}. Download YouTube videos in HD and 4K quality instantly. Fast, secure, and no installation required.`;

  return {
    title: title,
    description: description,
    alternates: {
      canonical: `https://30tools.com/${slug}`,
    },
    openGraph: {
      title: title,
      description: description,
      url: `https://30tools.com/${slug}`,
      siteName: "30tools",
      type: "website",
      images: [
        {
          url: "/og-images/youtube-downloader.jpg",
          width: 1200,
          height: 630,
          alt: `${readableSlug} - 30Tools`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: ["/og-images/youtube-downloader.jpg"],
      creator: "@30tools"
    },
  };
}

export const viewport = {
  themeColor: 'black',
}


const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "YouTube Video Downloader",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Download YouTube videos in HD/4K",
      "Convert to MP3 audio",
      "No software installation needed",
      "Mobile friendly"
    ]
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is this YouTube Downloader free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our tool is 100% free to use with no hidden charges."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to install software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, our downloader works entirely in your browser. No software installation is required."
        }
      },
      {
        "@type": "Question",
        "name": "What formats are supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support high-quality MP4 (video) and MP3 (audio) downloads."
        }
      }
    ]
  }
};

export default function YouTubeDownloaderPage() {
  const features = [
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: "Lightning Fast",
      description: "Get your videos in seconds with our optimized downloader engine.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      title: "Secure & Private",
      description: "We don't store your history. Downloads are processed securely.",
    },
    {
      icon: <MonitorSmartphone className="w-5 h-5 text-blue-500" />,
      title: "Cross-Platform",
      description: "Works flawlessly on Windows, Mac, iOS, and Android devices.",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-violet-500" />,
      title: "Best Quality",
      description: "Download in crystal clear 1080p, 2K, and 4K resolutions.",
    },
  ];

  const steps = [
    { title: "Paste URL", desc: "Copy & paste the YouTube link above." },
    { title: "Select Format", desc: "Choose Video (MP4) or Audio (MP3)." },
    { title: "Download", desc: "Click download and save your file." },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.webApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.faq) }}
      />

      <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">

        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            YouTube <span className="text-primary">Downloader</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The simplest way to download YouTube videos and audio. Fast, free, and no ads.
          </p>
        </div>

        {/* Main Tool */}
        <div className="mb-20">
          <YouTubeDownloader />
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((f, i) => (
            <div key={i} className="bg-card/50 hover:bg-card p-6 rounded-2xl border border-border/50 transition-all duration-200">
              <div className="bg-background w-10 h-10 rounded-xl flex items-center justify-center shadow-sm mb-4 border border-border/50">
                {f.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* How To */}
        <section className="bg-muted/30 rounded-3xl p-8 md:p-12 mb-20 border border-border/50">
          <h2 className="text-2xl font-bold text-center mb-10">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -z-10 -translate-y-1/2" />

            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center bg-background p-6 rounded-2xl border border-border/50 shadow-sm w-full md:w-1/3 z-10">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Formats Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-card p-8 rounded-3xl border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                <FileVideo className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Video Formats</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex justify-between items-center text-sm">
                <span className="font-medium">MP4 4K Ultra HD</span>
                <span className="text-muted-foreground">Highest Quality</span>
              </li>
              <li className="flex justify-between items-center text-sm border-t border-border/50 pt-3">
                <span className="font-medium">MP4 1080p Full HD</span>
                <span className="text-muted-foreground">Standard</span>
              </li>
              <li className="flex justify-between items-center text-sm border-t border-border/50 pt-3">
                <span className="font-medium">MP4 720p HD</span>
                <span className="text-muted-foreground">Data Saver</span>
              </li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-3xl border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
                <FileAudio className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Audio Formats</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex justify-between items-center text-sm">
                <span className="font-medium">MP3 320kbps</span>
                <span className="text-muted-foreground">Crystal Clear</span>
              </li>
              <li className="flex justify-between items-center text-sm border-t border-border/50 pt-3">
                <span className="font-medium">MP3 256kbps</span>
                <span className="text-muted-foreground">High Quality</span>
              </li>
              <li className="flex justify-between items-center text-sm border-t border-border/50 pt-3">
                <span className="font-medium">MP3 128kbps</span>
                <span className="text-muted-foreground">Standard</span>
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">Common Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {jsonLdSchemas.faq.mainEntity.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b-border/50">
                <AccordionTrigger className="text-left font-medium hover:no-underline hover:text-primary">
                  {faq.name}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.acceptedAnswer.text}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Related Tools */}
        <div className="text-center py-10 border-t border-border/50">
          <p className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">Other Tools You Might Like</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/terabox-downloader">
              <span className="px-5 py-2.5 rounded-full bg-muted/50 hover:bg-muted text-sm font-medium transition-colors border border-transparent hover:border-border cursor-pointer">
                Terabox Downloader
              </span>
            </Link>
            <Link href="/instagram-downloader">
              <span className="px-5 py-2.5 rounded-full bg-muted/50 hover:bg-muted text-sm font-medium transition-colors border border-transparent hover:border-border cursor-pointer">
                Instagram Downloader
              </span>
            </Link>
            <Link href="/tiktok-downloader">
              <span className="px-5 py-2.5 rounded-full bg-muted/50 hover:bg-muted text-sm font-medium transition-colors border border-transparent hover:border-border cursor-pointer">
                TikTok Downloader
              </span>
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}
