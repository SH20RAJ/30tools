import dynamic from "next/dynamic";
import ToolSkeleton from "@/components/tools/youtube/ToolSkeleton";
import ToolSEOLayout from "@/components/seo/ToolSEOLayout";
import {
  CheckCircle2,
  FileAudio,
  FileVideo,
  MonitorSmartphone,
  ShieldCheck,
  Zap,
  TrendingUp,
  ArrowDown,
  Globe2,
  Smartphone,
  Download
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const YouTubeDownloader = dynamic(
  () => import("@/components/tools/youtube/YouTubeDownloader"),
  { loading: () => <ToolSkeleton /> }
);

export const metadata = {
  title: "YouTube Video Downloader - 100% Free Online YT Downloader (2026)",
  description: "Best free YouTube downloader for computer and mobile. Download videos in 4K, 1080p, and MP3 instantly. No software required, 100% free and secure.",
  keywords: [
    "youtube downloader online", "youtube video downloader online", "yt video downloader", "download youtube videos", "download video youtube", "youtube video download", "youtube downloader free", "clipto ai youtube downloader", "free youtube downloader for computer", "best youtube downloader", "savenet youtube downloader", "download youtube free", "free online youtube downloader", "youtube downloader pc", "savefrom.net youtube downloader", "telecharger video youtube en ligne", "download video from youtube free", "video youtube downloader", "youtube downloader app", "gen youtube downloader", "youtube downloader online free", "free youtube download", "free youtube downloader online", "ymate youtube downloader", "savefrom youtube downloader", "downloader youtube video", "youtube downloader free online", "youtube视频解析", "youtube link downloader", "youtube video download free", "download youtube video online", "youtube download online", "youtube downloader hd", "youtubedownloader", "you tube downloader", "free download youtube", "download youtube video free", "descargar de youtube", "youtube online downloader", "youtube video download online", "ssyoutube.com downloader", "youtube free downloader", "youtube free download", "download yt video", "download youtube videos online", "descargador de videos de youtube", "download youtube videos free", "yt video download", "bajar videos de youtube", "ytdownloader", "youtube videos downloader", "online youtube downloader", "downloader youtube", "youtube download free", "youtube downloader video", "油管视频下载", "yt download", "video download", "video downloader free", "télécharger vidéo youtube", "free youtube video downloader", "youtube download video", "video downloader youtube", "free video downloader", "download video from youtube", "descargar video youtube", "descargar videos", "youtube downloader for pc", "download video", "youtube downloader free download", "ssyoutube", "free youtube downloader", "descargar videos de youtube gratis", "download from youtube", "telecharger video youtube", "youtube video downloader free", "скачать видео с ютуба", "youtube downloader online", "save from youtube", "youtube downloader free", "youtube video downloader online", "savefrom youtube", "descargar video de youtube", "youtube视频下载", "download youtube video", "youtube下载", "yt downloader", "yt video downloader", "youtube video download", "descargar videos youtube", "save from net", "download youtube videos", "download video youtube", "savefrom", "savefrom.net", "download youtube", "descargar videos de youtube", "video downloader", "youtube converter", "youtube download", "youtube video downloader", "youtube downloader", "youtube", "video downloader youtube free", "turboscribe youtube video downloader free", "savefrom net youtube video downloader free", "youtube videos downloader free", "youtube free downloader online", "video downloader from youtube", "video downloader free for youtube", "download youtube video for free", "youtube hd downloader", "online youtube video downloader free", "youtube download online free", "snapsave youtube", "free youtube video downloader online", "free video downloader youtube", "download video youtube free", "youtubedownload", "you tube video download", "free download youtube video", "sss youtube", "youtube free video downloader", "youtube video downloader free online", "socialplug yt downloader", "youtube video downloader hd", "online video downloader youtube", "youtube video free download", "download youtube videos for free", "downloader video youtube", "free downloading videos from youtube", "ss downloader", "download youtube videos online free", "save from network youtube downloader"
  ].join(", "),
  authors: [{ name: "30Tools Team" }],
  creator: "30Tools",
  publisher: "30Tools",
  alternates: {
    canonical: "https://30tools.com/youtube-downloader",
  },
  openGraph: {
    title: "Best Free YouTube Video Downloader (2026) - 4K & MP3",
    description: "Download YouTube videos and audio in high definition. Fast, secure, and 100% free YouTube downloader online. No installation needed.",
    url: "https://30tools.com/youtube-downloader",
    siteName: "30Tools",
    locale: "en_US",
    type: "website",
    images: [{
      url: "/og-images/youtube-downloader.png",
      width: 1200,
      height: 630,
      alt: "Free Online YouTube Video Downloader 2026",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free YouTube Downloader Online - Download YT Videos",
    description: "Lightning-fast YT video downloader. No software, no ads, no install.",
    images: ["/og-images/youtube-downloader.png"],
    creator: "@30tools",
  },
};

export const viewport = {
  themeColor: 'black',
}

export default function YouTubeDownloaderPage() {
  const features = [
    "Fastest YT downloader engine",
    "Secure video download without ads",
    "YouTube downloader for PC & Mobile",
    "Support for 4K video and high-quality MP3"
  ];

  const faqs = [
    {
      question: "What is the best YouTube downloader for computer in 2026?",
      answer: "30Tools is the best free YouTube downloader for computer and PC, providing high-speed 4K video downloads and MP3 conversion directly in your browser without software installation."
    },
    {
      question: "Is this free online YouTube downloader safe to use?",
      answer: "Yes, our YouTube downloader online free is 100% secure. We do not store your data or download history, and there's no need to install any apps or software."
    },
    {
      question: "How can I download YouTube videos for free?",
      answer: "Simply paste the YouTube link into our youtube link downloader, select your preferred quality (MP4 or MP3), and click download to save the video for free."
    },
    {
      question: "Can I download YouTube videos in HD and 4K?",
      answer: "Absolutely! Our youtube downloader hd supports downloads in 1080p, 2K, and 4K resolution, as well as crystal clear 320kbps MP3 audio."
    }
  ];

  const howTo = {
    name: "How to Download YouTube Videos for Free",
    steps: [
      {
        name: "Copy and Paste YouTube Link",
        text: "Copy the URL of the you tube video you want to download and paste it into our youtube downloader video box.",
        url: "https://30tools.com/youtube-downloader#step1"
      },
      {
        name: "Choose Video Download Format",
        text: "Select your desired quality from the online youtube downloader options (e.g., 4K, 1080p MP4 or 320kbps MP3).",
        url: "https://30tools.com/youtube-downloader#step2"
      },
      {
        name: "Start YouTube Video Download",
        text: "Click the download button to finish the youtube free download process and save the file to your device.",
        url: "https://30tools.com/youtube-downloader#step3"
      }
    ]
  };

  const featureCards = [
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: "Fastest Speed",
      description: "Our engine processes videos instantly. No waiting, no queues.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      title: "100% Secure",
      description: "Safe downloads with no ads, trackers, or malware risks.",
    },
    {
      icon: <MonitorSmartphone className="w-5 h-5 text-blue-500" />,
      title: "All Devices",
      description: "Works perfectly on PC, Mac, iPhone, and Android phones.",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-violet-500" />,
      title: "High Quality",
      description: "Download in 4K, 1080p, and convert to high-quality MP3.",
    },
  ];

  return (
    <ToolSEOLayout
      toolId="youtube-downloader"
      faqs={faqs}
      features={features}
      howTo={howTo}
      titleOverride={<span className="hidden">YouTube Downloader</span>} // Hide default title to use custom hero
    >

      {/* Hero Section */}
      <div className="text-center space-y-6 pt-8 pb-12 md:pt-12 md:pb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />

        <Badge variant="outline" className="px-3 py-1 bg-background/50 backdrop-blur border-primary/20 text-primary">
          🎉 Updated for 2026
        </Badge>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
          Download <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600">YouTube Videos</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Free online downloader for <strong>4K Video</strong> and <strong>MP3 Audio</strong>. <br className="hidden md:inline" />
          Fast, secure, and no installation required.
        </p>
      </div>

      {/* Main Tool */}
      <div className="mb-24 w-full px-0 sm:px-4">
        <YouTubeDownloader />
      </div>

      {/* Minimal Features Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-24 px-4">
        {featureCards.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center p-6 rounded-3xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-4">
              {f.icon}
            </div>
            <h3 className="font-bold text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.description}</p>
          </div>
        ))}
      </div>

      {/* How To Steps - Clean Horizontal */}
      <section className="mb-24 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How to Download</h2>
          <p className="text-muted-foreground">Get your video in 3 simple steps</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start gap-8 relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-border to-transparent -z-10" />

          {[
            { title: "Paste Link", desc: "Copy video URL from YouTube app or browser", icon: <ArrowDown className="w-5 h-5" /> },
            { title: "Select Format", desc: "Choose your preferred quality (MP4/MP3)", icon: <CheckCircle2 className="w-5 h-5" /> },
            { title: "Download", desc: "Save file instantly to your device", icon: <Download className="w-5 h-5" /> }
          ].map((step, i) => (
            <div key={i} className="flex-1 flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-full bg-background border-4 border-muted group-hover:border-primary/20 flex items-center justify-center text-lg font-bold shadow-sm mb-6 transition-colors relative z-10 text-primary">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground max-w-[200px] mx-auto leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SEO Content Section (Below Fold) */}
      <div className="bg-muted/30 border-t border-border/50 py-16">
        <div className="container max-w-4xl mx-auto px-4 prose prose-slate dark:prose-invert">
          <h2>Ultimate YouTube Downloader Online</h2>
          <p>
            Experience the best <strong>youtube downloader</strong> on the web. 30Tools offers a premium <strong>free online youtube downloader</strong> service that puts quality first. Whether you need a <strong>youtube downloader for pc</strong> to archive content or a mobile solution, our platform is optimized for all devices.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-10 not-prose">
            <div className="bg-background p-6 rounded-2xl border border-border/50">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-blue-500" /> Global Support
              </h3>
              <p className="text-sm text-muted-foreground">
                We support users worldwide. Easily <strong>descargar videos de youtube</strong> (Spanish), <strong>télécharger vidéo youtube</strong> (French), or <strong>скачать видео с ютуба</strong> (Russian).
              </p>
            </div>
            <div className="bg-background p-6 rounded-2xl border border-border/50">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-green-500" /> Mobile Ready
              </h3>
              <p className="text-sm text-muted-foreground">
                Our <strong>youtube downloader app</strong> compatible web interface means you can save videos directly to your iPhone or Android gallery without installing suspicious apps.
              </p>
            </div>
          </div>

          <h3>High Definition Downloads</h3>
          <p>
            Don't settle for low quality. Our <strong>youtube downloader hd</strong> engine supports resolutions up to 4K. Use our <strong>youtube link downloader</strong> to grab crystal clear MP4 files or use the <strong>youtube converter</strong> mode for high-fidelity 320kbps audio.
          </p>

          <div className="text-sm text-muted-foreground mt-8 pt-8 border-t border-border/50">
            <p className="italic">
              Disclaimer: Please respect copyright laws and YouTube's terms of service. This tool is intended for personal use and for downloading content you have rights to (e.g., your own videos or public domain content).
            </p>
          </div>
        </div>
      </div>

    </ToolSEOLayout>
  );
}
