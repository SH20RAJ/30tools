import dynamic from "next/dynamic";
import ToolSkeleton from "@/components/tools/youtube/ToolSkeleton";

const YouTubeDownloader = dynamic(
  () => import("@/components/tools/youtube/YouTubeDownloader"),
  {
    loading: () => <ToolSkeleton />,
  }
);
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
import { Badge } from "@/components/ui/badge";

// dynamic metadata generation
export const metadata = {
  title: "YouTube Video Downloader - Download YT Videos Online Free (2026)",
  description: "Download YouTube videos for free in 4K, 1080p, and MP3. The #1 YouTube video downloader online for computer and mobile. No signup, no software, 100% secure.",
  keywords: [
    "youtube video downloader", "youtube downloader", "youtube download", "youtube converter", "yt video downloader", "yt downloader", "youtube", "video downloader", "descargar videos de youtube", "download youtube", "savefrom.net", "savefrom", "download video youtube", "download youtube videos", "save from net", "descargar videos youtube", "youtube video download", "youtube下载", "download youtube video", "youtube视频下载", "descargar video de youtube", "savefrom youtube", "youtube video downloader online", "youtube downloader free", "save from youtube", "youtube downloader online", "télécharger vidéo youtube", "video downloader free", "video download", "yt download", "油管视频下载", "youtube downloader video", "youtube download free", "downloader youtube", "online youtube downloader", "youtube videos downloader", "ytdownloader", "baixar videos de youtube", "yt video download", "download youtube videos free", "descargador de videos de youtube", "download youtube videos online", "download yt video", "youtube free download", "youtube free downloader", "ssyoutube.com downloader", "youtube video download online", "youtube online downloader", "descargar de youtube", "download youtube video free", "free download youtube", "you tube downloader", "youtubedownloader", "youtube downloader hd", "youtube download online", "download youtube video online", "youtube video download free", "youtube link downloader", "youtube视频解析", "youtube downloader free online", "downloader youtube video", "savefrom youtube downloader", "ymate youtube downloader", "free youtube downloader online", "free youtube download", "youtube downloader online free", "gen youtube downloader", "youtube downloader app", "video youtube downloader", "download video from youtube free", "telecharger video youtube en ligne", "savefrom.net youtube downloader", "youtube downloader pc", "free online youtube downloader", "download youtube free", "savenet youtube downloader", "best youtube downloader", "free youtube downloader for computer", "clipto ai youtube downloader", "snapsave youtube", "free youtube video downloader online", "free video downloader youtube", "download video youtube free", "youtubedownload", "you tube video download", "free download youtube video", "sss youtube", "youtube free video downloader", "youtube video downloader free online", "socialplug yt downloader", "youtube video downloader hd", "online video downloader youtube", "youtube video free download", "download youtube videos for free", "downloader video youtube", "free downloading videos from youtube", "ss downloader", "download youtube videos online free", "save from network youtube downloader", "video downloader youtube free", "turboscribe youtube video downloader free", "savefrom net youtube video downloader free", "youtube videos downloader free", "youtube free downloader online", "video downloader from youtube", "video downloader free for youtube", "download youtube video for free", "youtube hd downloader", "online youtube video downloader free", "youtube download online free"
  ].join(", "),
  authors: [{ name: "30Tools Team" }],
  creator: "30Tools",
  publisher: "30Tools",
  alternates: {
    canonical: "https://30tools.com/youtube-downloader",
  },
  openGraph: {
    title: "YouTube Video Downloader - Download HD & 4K Videos Free",
    description: "The fastest way to download YouTube videos online. Supports MP4, MP3, 1080p and 4K. 100% Free and secure.",
    url: "https://30tools.com/youtube-downloader",
    siteName: "30Tools",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-images/youtube-downloader.png",
        width: 1200,
        height: 630,
        alt: "Free YouTube Video Downloader Online 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Video Downloader - Online YT Video Download",
    description: "Download your favorite YouTube videos in high quality. No install needed.",
    images: ["/og-images/youtube-downloader.png"],
    creator: "@30tools",
  },
};

export const viewport = {
  themeColor: 'black',
}


const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "YouTube Video Downloader - 30Tools",
    "description": "Premium free online YouTube video downloader for downloading videos in HD, 1080p, and 4K.",
    "url": "https://30tools.com/youtube-downloader",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Download YouTube videos free online",
      "Fastest YT video downloader",
      "YouTube downloader for PC and mobile",
      "YouTube to MP4 conversion in 4K",
      "No registration required"
    ]
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to download YouTube videos online for free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply paste the YouTube URL into our youtube video downloader, select the video quality (like 1080p or 4K), and click download. It is 100% free with no signup."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best YouTube downloader in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "30Tools is rated as the best youtube downloader because it offers lightning-fast speeds, 4K video support, and works as a youtube downloader for PC and mobile without software."
        }
      },
      {
        "@type": "Question",
        "name": "Can I download YouTube videos on mobile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our yt video downloader is fully responsive and works as a youtube downloader app directly in your mobile browser. Save videos to your phone instantly."
        }
      },
      {
        "@type": "Question",
        "name": "Is this youtube video download service safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. 30Tools provides a secure video download environment with no ads, no malware, and total privacy for all users."
        }
      }
    ]
  },
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to use YouTube Video Downloader",
    "description": "Step-by-step guide on how to download youtube videos using our free online tool.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Copy YouTube URL",
        "text": "Copy the link of the you tube video from the address bar or share button.",
        "url": "https://30tools.com/youtube-downloader#step1"
      },
      {
        "@type": "HowToStep",
        "name": "Paste in Downloader",
        "text": "Paste the link into the youtube downloader video box at the top of this page.",
        "url": "https://30tools.com/youtube-downloader#step2"
      },
      {
        "@type": "HowToStep",
        "name": "Download Your Video",
        "text": "Select 1080p, 4K or MP3 quality and click the download button to finish.",
        "url": "https://30tools.com/youtube-downloader#step3"
      }
    ]
  }
};

export default function YouTubeDownloaderPage() {
  const features = [
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: "Fastest YouTube Video Downloader",
      description: "Get your videos in record time with our high-speed youtube download engine.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      title: "Safe & Private Download",
      description: "We protect your privacy. No data storage, just clean youtube video download sessions.",
    },
    {
      icon: <MonitorSmartphone className="w-5 h-5 text-blue-500" />,
      title: "Cross-Device Support",
      description: "The perfect youtube downloader for pc, mac, android, and ios devices.",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-violet-500" />,
      title: "High Definition Quality",
      description: "Download in crystal clear 1080p, 2K, and 4K resolutions with our youtube downloader hd.",
    },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.howTo) }}
      />

      <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">

        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            Top <span className="text-primary">YouTube Video Downloader</span> - Fast & Free
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Searching for the <strong>best youtube downloader</strong> to save your favorite content? Look no further. Our <strong>online youtube downloader</strong> allows you to <strong>download youtube video online</strong> for free without limits. Whether you need a <strong>youtube downloader for computer</strong> or a mobile solution, our platform is optimized for every <strong>yt downloader</strong> need.
          </p>

          <div className="flex justify-center mt-6">
            <a
              href="https://apify.com/express_kingfisher/youtube-video-audio-downloader"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 hover:bg-muted border border-border/50 text-sm transition-colors group"
            >
              <span className="text-muted-foreground">Looking for a Developer API?</span>
              <span className="font-medium text-primary group-hover:underline decoration-primary/50 underline-offset-4">Check out our Universal YouTube Downloader API →</span>
            </a>
          </div>
        </div>

        {/* Ad Unit 1 */}
        <div className="mb-12 text-center overflow-hidden">
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
            crossOrigin="anonymous"
          ></script>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-format="autorelaxed"
            data-ad-client="ca-pub-1828915420581549"
            data-ad-slot="9420953810"
          ></ins>
          <script
            dangerouslySetInnerHTML={{
              __html: "(adsbygoogle = window.adsbygoogle || []).push({});",
            }}
          ></script>
        </div>

        {/* Main Tool */}
        <div className="mb-20">
          <YouTubeDownloader />
        </div>

        {/* SEO Text Section 1 */}
        <section className="mb-20 prose prose-slate dark:prose-invert max-w-none px-4">
          <h2 className="text-3xl font-bold mb-6">Professional YouTube Video Downloader Features</h2>
          <p>
            When it comes to <strong>youtube video download</strong>, speed and reliability are everything. Our <strong>youtube downloader free</strong> tool utilizes advanced scrapers (similar to <strong>savefrom</strong> or <strong>ssyoutube</strong>) to fetch the direct source link. This makes us the most consistent <strong>youtube free downloader</strong> on the internet. You can perform a <strong>youtube video download free</strong> in just three clicks.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-10 not-prose">
            <div className="bg-card p-6 rounded-2xl border border-border/50">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
                <FileVideo className="w-5 h-5" /> Online YouTube Downloader
              </h3>
              <p className="text-sm text-muted-foreground">
                Our <strong>online video downloader youtube</strong> platform supports all formats including MKV, MP4, and WEBM. It's the ultimate <strong>video downloader youtube</strong> suite for 2026.
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border/50">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
                <FileAudio className="w-5 h-5" /> YouTube Converter MP3
              </h3>
              <p className="text-sm text-muted-foreground">
                Need audio only? Use our <strong>youtube converter</strong> to extract sound from your <strong>you tube</strong> videos at 320kbps. High-fidelity <strong>yt download</strong> every time.
              </p>
            </div>
          </div>
        </section>

        {/* Ad Unit 2 */}
        <div className="mb-20 text-center overflow-hidden">
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
            crossOrigin="anonymous"
          ></script>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-format="autorelaxed"
            data-ad-client="ca-pub-1828915420581549"
            data-ad-slot="9420953810"
          ></ins>
          <script
            dangerouslySetInnerHTML={{
              __html: "(adsbygoogle = window.adsbygoogle || []).push({});",
            }}
          ></script>
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

        {/* Global SEO Support */}
        <section className="mb-20 text-center bg-muted/40 py-12 rounded-3xl border border-border/50">
          <h2 className="text-2xl font-bold mb-6 italic">International YT Downloader</h2>
          <p className="text-sm text-muted-foreground max-w-4xl mx-auto px-6 leading-relaxed mb-8">
            Access our <strong>free online youtube downloader</strong> from anywhere in the world.
            Vous pouvez <strong>télécharger vidéo youtube</strong> gratuitement avec notre outil rapide.
            Simplemente pega el enlace para <strong>descargar videos de youtube</strong> en alta resolución.
            Nossa plataforma é ideal para <strong>baixar videos de youtube</strong> no celular ou PC.
            支持 <strong>youtube下载</strong> 和 <strong>youtube视频解析</strong>，专业的 <strong>油管视频下载</strong> 器。
            Наш <strong>скачать видео с ютуба</strong> сервис работает быстро и без рекламы.
          </p>
          <div className="flex flex-wrap justify-center gap-3 px-4">
            <Badge variant="secondary" className="px-4 py-1">ytdownloader</Badge>
            <Badge variant="secondary" className="px-4 py-1">ssyoutube</Badge>
            <Badge variant="secondary" className="px-4 py-1">savefrom.net</Badge>
            <Badge variant="secondary" className="px-4 py-1">snapsave youtube</Badge>
            <Badge variant="secondary" className="px-4 py-1">ymate youtube downloader</Badge>
          </div>
        </section>

        {/* Ad Unit 3 */}
        <div className="mb-20 text-center overflow-hidden">
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
            crossOrigin="anonymous"
          ></script>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-format="autorelaxed"
            data-ad-client="ca-pub-1828915420581549"
            data-ad-slot="9420953810"
          ></ins>
          <script
            dangerouslySetInnerHTML={{
              __html: "(adsbygoogle = window.adsbygoogle || []).push({});",
            }}
          ></script>
        </div>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto mb-20 bg-card p-8 md:p-12 rounded-3xl border border-border/50 shadow-sm">
          <h2 className="text-3xl font-bold text-center mb-10">YouTube Video Downloader FAQ</h2>
          <Accordion type="single" collapsible className="w-full">
            {jsonLdSchemas.faq.mainEntity.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b-border/30">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline hover:text-primary transition-colors py-5">
                  {faq.name}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.acceptedAnswer.text}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Conclusion SEO Text */}
        <section className="mb-20 prose prose-slate dark:prose-invert max-w-none px-4 text-center">
          <p className="text-xl font-medium text-foreground italic mb-6">
            "Your hunt for the perfect <strong>youtube downloader</strong> ends here."
          </p>
          <p>
            Whether you typed <strong>youtube downloader app</strong>, <strong>youtube downloader free download</strong>, or <strong>how to download youtube videos</strong> into your search bar, you found the most capable tool. Our <strong>online youtube downloader</strong> is engineered to handle 4K streams and high-bitrate audio with ease. We are a better alternative to <strong>savefrom</strong>, <strong>savefrom net</strong>, and <strong>ss downloader</strong>. Try our <strong>youtube link downloader</strong> today and join millions of happy users.
          </p>
          <p>
            Don't forget to check our <strong>youtube videos downloader</strong> for your mobile devices. It works just like a dedicated app but without the storage bloat. Save content from <strong>you tube</strong> to your gallery in seconds. 30Tools: The <strong>best online video downloader youtube</strong> can offer.
          </p>
        </section>

        {/* Ad Unit 4 */}
        <div className="mb-20 text-center overflow-hidden">
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
            crossOrigin="anonymous"
          ></script>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-format="autorelaxed"
            data-ad-client="ca-pub-1828915420581549"
            data-ad-slot="9420953810"
          ></ins>
          <script
            dangerouslySetInnerHTML={{
              __html: "(adsbygoogle = window.adsbygoogle || []).push({});",
            }}
          ></script>
        </div>

        {/* Developer Network */}
        <section className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
          <h2 className="text-2xl font-bold mb-8 text-center">Explore Our Utility Ecosystem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="https://coders.30tools.com/" target="_blank" className="p-6 bg-background rounded-2xl border border-border/50 hover:shadow-lg transition-all">
              <h3 className="font-bold mb-2">🚀 Coders Tools</h3>
              <p className="text-sm text-muted-foreground">JSON formatters, API testers, and dev utilities.</p>
            </a>
            <a href="https://online-tools.30tools.com/" target="_blank" className="p-6 bg-background rounded-2xl border border-border/50 hover:shadow-lg transition-all">
              <h3 className="font-bold mb-2">🔧 Universal Utils</h3>
              <p className="text-sm text-muted-foreground">Hashing, encryption, and encoding tools.</p>
            </a>
            <a href="https://terabox.beer/" target="_blank" className="p-6 bg-background rounded-2xl border border-border/50 hover:shadow-lg transition-all">
              <h3 className="font-bold mb-2">📦 TeraBox Saver</h3>
              <p className="text-sm text-muted-foreground">Download videos from TeraBox directly.</p>
            </a>
          </div>
        </section>

        {/* Better Footer / Related Links */}
        <div className="mt-20 text-center border-t border-border/50 pt-16 pb-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/youtube-downloader" className="text-sm font-semibold text-primary hover:underline">YouTube Downloader</Link>
            <Link href="/instagram-downloader" className="text-sm font-semibold text-primary hover:underline">Instagram Downloader</Link>
            <Link href="/tiktok-downloader" className="text-sm font-semibold text-primary hover:underline">TikTok Downloader</Link>
            <Link href="/terabox-downloader" className="text-sm font-semibold text-primary hover:underline">TeraBox Downloader</Link>
          </div>
          <p className="text-xs text-muted-foreground mt-8">
            © 2026 30Tools - The #1 YouTube Video Downloader online. All rights reserved.
          </p>
        </div>

      </div>
    </>
  );
}
