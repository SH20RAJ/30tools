import dynamic from "next/dynamic";
import ToolSkeleton from "@/components/tools/youtube/ToolSkeleton";
import ToolSEOLayout from "@/components/seo/ToolSEOLayout";
import {
  ShieldCheck,
  Zap,
  Download,
  Smartphone,
  Video,
  Music
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const YouTubeDownloader = dynamic(
  () => import("@/components/tools/youtube/YouTubeDownloader"),
  { loading: () => <ToolSkeleton /> }
);

export const metadata = {
  title: "Fast YouTube Downloader Online (2026) - No Ads & 100% Free",
  description: "Download YouTube videos safely in 4K MP4 or MP3. Fastest online downloader for mobile and PC with no software installation.",
  keywords: [
    "safe youtube downloader",
    "fast youtube downloader",
    "youtube downloader no ads",
    "youtube 4k downloader free",
    "download youtube video high quality",
    "youtube to mp3 fast",
    "youtube video saver online",
    "best youtube downloader 2026",
    "free youtube downloader iphone",
    "youtube downloader for android"
  ].join(", "),
  alternates: {
    canonical: "https://30tools.com/youtube-downloader",
  },
  openGraph: {
    title: "Fast & Safe YouTube Downloader - 4K Video & MP3",
    description: "Download YouTube videos instantly. No ads, no malware, no waiting. Works on all devices.",
    url: "https://30tools.com/youtube-downloader",
    siteName: "30Tools",
    locale: "en_US",
    type: "website",
    images: [{
      url: "/og-images/youtube-downloader.png",
      width: 1200,
      height: 630,
      alt: "Fast YouTube Downloader 2026",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast YouTube Downloader - No Ads",
    description: "Download YT videos in seconds. 100% Free & Secure.",
    images: ["/og-images/youtube-downloader.png"],
    creator: "@30tools",
  },
};

export const viewport = {
  themeColor: 'black',
}

export default function YouTubeDownloaderPage() {
  const features = [
    "Instant 4K & MP3 Download",
    "Zero Ads & 100% Secure",
    "No Software Required",
    "Mobile Friendly"
  ];

  const faqs = [
    {
      question: "Is this YouTube Downloader really free?",
      answer: "Yes, 30Tools Video Downloader is completely free to use without any hidden fees or subscription requirements."
    },
    {
      question: "Is it safe to download videos here?",
      answer: "Absolutely. Our tool is secure, does not serve annoying pop-up ads, and requires no software installation."
    },
    {
      question: "How do I download 4K videos?",
      answer: "Just paste the link, wait for processing, and select the highest quality option (up to 4K) from the download list."
    },
    {
      question: "Does it work on iPhone and Android?",
      answer: "Yes, our web-based tool works perfectly on all mobile browsers including Chrome, Safari, and Firefox."
    }
  ];

  const howTo = {
    name: "How to Download",
    steps: [
      {
        name: "Paste Link",
        text: "Copy video URL and paste it below.",
        url: "https://30tools.com/youtube-downloader#step1"
      },
      {
        name: "Select Quality",
        text: "Choose MP4 or MP3 format.",
        url: "https://30tools.com/youtube-downloader#step2"
      },
      {
        name: "Download",
        text: "Save the file instantly.",
        url: "https://30tools.com/youtube-downloader#step3"
      }
    ]
  };

  return (
    <ToolSEOLayout
      toolId="youtube-downloader"
      faqs={faqs}
      features={features}
      howTo={howTo}
      titleOverride={<span className="hidden">YouTube Downloader</span>}
    >

      {/* Hero Section - Minimal & Clean */}
      <div className="text-center space-y-6 pt-12 pb-16 relative">
        <Badge variant="outline" className="px-3 py-1 text-muted-foreground mb-4 font-normal bg-muted/20 border-border/50">
          v6.0 Engine Update • 2026
        </Badge>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          YouTube <span className="text-foreground/80">Video Downloader</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Fast, clean, and secure downloader for 4K Video and High-Quality Audio.
          <br className="hidden sm:inline" /> No ads. No waiting.
        </p>
      </div>

      {/* Main Tool */}
      <div className="mb-20 w-full px-0 sm:px-4">
        <YouTubeDownloader />
      </div>

      {/* Minimal Features Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-20 px-4">
        {[
          { icon: <Zap className="w-5 h-5" />, title: "Lighting Fast", desc: "Instant processing" },
          { icon: <ShieldCheck className="w-5 h-5" />, title: "100% Secure", desc: "No malware/ads" },
          { icon: <Video className="w-5 h-5" />, title: "4K Support", desc: "Crystal clear" },
          { icon: <Music className="w-5 h-5" />, title: "MP3 Audio", desc: "High quality" }
        ].map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center p-4 rounded-xl bg-muted/10 border border-border/40 hover:bg-muted/20 transition-colors">
            <div className="mb-3 text-foreground/80">{f.icon}</div>
            <h3 className="font-semibold text-sm mb-1">{f.title}</h3>
            <p className="text-xs text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* SEO Content (Minimal but Keyword Rich) */}
      <div className="max-w-3xl mx-auto px-4 py-12 border-t border-border/40 text-center">
        <h2 className="text-2xl font-bold mb-4">Why use 30Tools Video Downloader?</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          We prioritize speed and safety. Unlike other sites, we don't bombard you with ads or track your data.
          Our tool is the best <strong>youtube video downloader</strong> for converting content instantly.
          Whether you need a <strong>youtube to mp3 converter</strong> for music or a <strong>youtube to mp4</strong> tool for high-quality video,
          we support it all. From <strong>ytmp4</strong> conversions to <strong>yt to mp3</strong> extraction, everything is processed in the cloud.
          Compatible with all devices, making it the perfect <strong>youtube downloader for android</strong> and iPhone.
          No need to search for <strong>y2 mate</strong> or <strong>4kvideodownloader</strong> software—our online tool handles 4K downloads directly in your browser.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><Smartphone className="w-4 h-4" /> Works on Mobile</span>
          <span className="flex items-center gap-1"><Download className="w-4 h-4" /> Unlimited Downloads</span>
          <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> HTTPS Secure</span>
        </div>
      </div>

    </ToolSEOLayout>
  );
}
