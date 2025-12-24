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
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const YouTubeDownloader = dynamic(
  () => import("@/components/tools/youtube/YouTubeDownloader"),
  {
    loading: () => <ToolSkeleton />,
  }
);

// dynamic metadata generation
export const metadata = {
  title: "YouTube Video Downloader - 100% Free Online YT Downloader (2026)",
  description: "Best free YouTube downloader for computer and mobile. Download videos in 4K, 1080p, and MP3 instantly. No software required, 100% free and secure.",
  keywords: [
    "youtube downloader online", "youtube video downloader online", "yt video downloader", "download youtube videos", "download video youtube", "download youtube video", "youtube video download", "youtube downloader free", "clipto ai youtube downloader", "free youtube downloader for computer", "best youtube downloader", "savenet youtube downloader", "download youtube free", "free online youtube downloader", "youtube downloader pc", "savefrom.net youtube downloader", "telecharger video youtube en ligne", "download video from youtube free", "video youtube downloader", "youtube downloader app", "gen youtube downloader", "youtube downloader online free", "free youtube download", "free youtube downloader online", "ymate youtube downloader", "savefrom youtube downloader", "downloader youtube video", "youtube downloader free online", "youtube视频解析", "youtube link downloader", "youtube video download free", "download youtube video online", "youtube download online", "youtube downloader hd", "youtubedownloader", "you tube downloader", "free download youtube", "download youtube video free", "descargar de youtube", "youtube online downloader", "youtube video download online", "ssyoutube.com downloader", "youtube free downloader", "youtube free download", "download yt video", "download youtube videos online", "descargador de videos de youtube", "download youtube videos free", "yt video download", "bajar videos de youtube", "ytdownloader", "youtube videos downloader", "online youtube downloader", "downloader youtube", "youtube download free", "youtube downloader video", "油管视频下载", "yt download", "video download", "video downloader free", "télécharger vidéo youtube", "free youtube video downloader", "youtube download video", "video downloader youtube", "free video downloader", "download video from youtube", "descargar video youtube", "descargar videos", "youtube downloader for pc", "download video", "youtube downloader free download", "ssyoutube", "free youtube downloader", "descargar videos de youtube gratis", "download from youtube", "telecharger video youtube", "youtube video downloader free", "скачать видео с ютуба", "youtube downloader online", "save from youtube", "youtube downloader free", "youtube video downloader online", "savefrom youtube", "descargar video de youtube", "youtube视频下载", "download youtube video", "youtube下载", "yt downloader", "yt video downloader", "youtube video download", "descargar videos youtube", "save from net", "download youtube videos", "download video youtube", "savefrom", "savefrom.net", "download youtube", "descargar videos de youtube", "video downloader", "youtube converter", "youtube download", "youtube video downloader", "youtube downloader", "youtube", "video downloader youtube free", "turboscribe youtube video downloader free", "savefrom net youtube video downloader free", "youtube videos downloader free", "youtube free downloader online", "video downloader from youtube", "video downloader free for youtube", "download youtube video for free", "youtube hd downloader", "online youtube video downloader free", "youtube download online free", "snapsave youtube", "free youtube video downloader online", "free video downloader youtube", "download video youtube free", "youtubedownload", "you tube video download", "free download youtube video", "sss youtube", "youtube free video downloader", "youtube video downloader free online", "socialplug yt downloader", "youtube video downloader hd", "online video downloader youtube", "youtube video free download", "download youtube videos for free", "downloader video youtube", "free downloading videos from youtube", "ss downloader", "download youtube videos online free", "save from network youtube downloader"
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
    images: [
      {
        url: "/og-images/youtube-downloader.png",
        width: 1200,
        height: 630,
        alt: "Free Online YouTube Video Downloader 2026",
      },
    ],
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
      title: "Fastest YT Downloader",
      description: "Experience the fastest way to download YouTube videos with our optimized yt downloader engine.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      title: "Secure Video Download",
      description: "Our free video downloader is safe and secure. No ads, no malware, and total privacy for your you tube downloader sessions.",
    },
    {
      icon: <MonitorSmartphone className="w-5 h-5 text-blue-500" />,
      title: "YouTube Downloader for PC & Mobile",
      description: "Whether you need a youtube downloader for pc or a youtube downloader app for mobile, our tool works on all devices.",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-violet-500" />,
      title: "Best YouTube Downloader HD",
      description: "The best youtube downloader for 4K video and high-quality MP3 audio extraction instantly.",
    },
  ];

  const steps = [
    { title: "YouTube Link Downloader", desc: "Paste your you tube link into the downloader youtube box above." },
    { title: "Select Video Format", desc: "Choose from MP4, MP3, or HD format options." },
    { title: "Download YouTube Free", desc: "Save your youtube video download free to your device instantly." },
  ];

  return (
    <ToolSEOLayout
      toolId="youtube-downloader"
      faqs={faqs}
      features={features}
      howTo={howTo}
      titleOverride={<>Best <span className="text-primary">YouTube Video Downloader</span> - Free Online Download</>}
    >
      <div className="text-center space-y-4 mb-4">
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Welcome to the <strong>best youtube downloader</strong> online! Our <strong>free online youtube downloader</strong> is the fastest solution to <strong>download youtube video online</strong> for free. Whether you are using a <strong>youtube downloader for computer</strong> or looking for a <strong>youtube downloader pc</strong> version, our web-based <strong>yt video downloader</strong> works seamlessly on all browsers. 30Tools provides a reliable <strong>youtube converter</strong> to extract high-quality audio or save full-length films in 4K.
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

      {/* Main Tool */}
      <div className="mb-20">
        <YouTubeDownloader />
      </div>

      {/* SEO Text Section 1 */}
      <section className="mb-20 prose prose-slate dark:prose-invert max-w-none px-4">
        <h2 className="text-3xl font-bold mb-6">How to Download Video from YouTube Free</h2>
        <p>
          Using our <strong>youtube downloader online</strong> is effortless. If you've been wondering how to <strong>download youtube videos</strong> efficiently, you've found the perfect solution. Our <strong>youtubedownloader</strong> handles 4K and MP3 formats with ease. Simply paste your link into the <strong>youtube link downloader</strong> box to begin. We provide a seamless <strong>youtube free download</strong> service regarding <strong>youtube downloader hd</strong> quality for all users.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-10 not-prose">
          <div className="bg-card p-6 rounded-2xl border border-border/50">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
              <Zap className="w-5 h-5" /> Gen YouTube Downloader
            </h3>
            <p className="text-sm text-muted-foreground">
              Our <strong>gen youtube downloader</strong> technology ensures that you can <strong>download yt video</strong> content without any restrictions. It's the most powerful <strong>yt video download</strong> tool available in 2026.
            </p>
          </div>
          <div className="bg-card p-6 rounded-2xl border border-border/50">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
              <ShieldCheck className="w-5 h-5" /> SaveFrom YouTube
            </h3>
            <p className="text-sm text-muted-foreground">
              Alternative to <strong>savefrom</strong> and <strong>savefrom.net</strong>, our site offers even better speeds for <strong>youtube videos downloader</strong> services. Safe, private, and 100% free.
            </p>
          </div>
        </div>
      </section>

      {/* Finance & Monetization Section (High CPC) */}
      <section className="mb-20 bg-gradient-to-br from-primary/5 to-transparent p-8 md:p-12 rounded-3xl border border-primary/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            YouTube Monetization & <span className="text-primary">Creator Finance</span> Guide
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                Passive Income Streams
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Top creators use our tool to analyze successful content. By saving videos for fair-use commentary or compilation research, you can build a library of high-performing ideas. Leveraging <strong>affiliate marketing</strong> and <strong>digital asset management</strong> strategies allows you to diversify your <strong>revenue streams</strong> beyond just AdSense.
              </p>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-500" />
                Content Rights & Fair Use
              </h3>
              <p className="text-sm text-muted-foreground">
                Understanding <strong>content rights</strong> is crucial for any <strong>online business</strong>. When you <strong>download youtube videos</strong> for educational purposes, ensure you add transformative value to avoid copyright strikes, protecting your channel's <strong>long-term monetization</strong> potential.
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl shadow-sm border border-border/50">
              <h4 className="font-bold mb-4">Creator Economy Stats (2025)</h4>
              <ul className="space-y-4">
                <li className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Digital Ad Spend</span>
                  <span className="font-semibold text-green-600">$450B+</span>
                </li>
                <li className="flex justify-between items-center text-sm border-t border-border/50 pt-3">
                  <span className="text-muted-foreground">Affiliate Payouts</span>
                  <span className="font-semibold text-green-600">$17B+</span>
                </li>
                <li className="flex justify-between items-center text-sm border-t border-border/50 pt-3">
                  <span className="text-muted-foreground">Influencer Market</span>
                  <span className="font-semibold text-green-600">$21B+</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-border/50">
                <p className="text-xs text-muted-foreground italic">
                  *Maximize your <strong>ROI</strong> by using professional tools to streamline your workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {featureCards.map((f, i) => (
          <div key={i} className="bg-card/50 hover:bg-card p-6 rounded-2xl border border-border/50 transition-all duration-200">
            <div className="bg-background w-10 h-10 rounded-xl flex items-center justify-center shadow-sm mb-4 border border-border/50">
              {f.icon}
            </div>
            <h3 className="font-bold text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>

      {/* How To Steps */}
      <section className="bg-muted/30 rounded-3xl p-8 md:p-12 mb-20 border border-border/50">
        <h2 className="text-2xl font-bold text-center mb-10">Free Online YouTube Downloader Guide</h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -z-10 -translate-y-1/2" />

          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center bg-background p-6 rounded-2xl border border-border/50 shadow-sm w-full md:w-1/3 z-10">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                {i + 1}
              </div>
              <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Multi-language Support text for Global SEO */}
      <section className="mb-20 text-center bg-primary/5 py-10 rounded-3xl border border-primary/10">
        <h2 className="text-2xl font-bold mb-6">Global Online Video Downloader</h2>
        <p className="text-sm text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed mb-6">
          Notre service gratuit vous permet de <strong>télécharger vidéo youtube</strong> ou <strong>télécharger vidéo youtube en ligne</strong> très rapidement.
          Si deseas <strong>descargar video youtube</strong> o <strong>descargar de youtube</strong> gratis, utiliza nuestro <strong>descargador de videos de youtube</strong> profesional.
          Nós também suportamos quem deseja <strong>baixar videos de youtube</strong> em alta definição.
          Для тех, кто хочет <strong>скачать видео с ютуба</strong>, наш сервис работает безупречно.
          支持 <strong>youtube视频下载</strong> 和 <strong>youtube视频解析</strong>，轻松 <strong>youtube下载</strong> 各种 <strong>油管视频下载</strong> 内容。
        </p>
        <div className="flex flex-wrap justify-center gap-2 px-4 opacity-70">
          <Badge variant="outline">ssyoutube</Badge>
          <Badge variant="outline">ytdownloader</Badge>
          <Badge variant="outline">savefrom</Badge>
          <Badge variant="outline">snapsave youtube</Badge>
          <Badge variant="outline">clipto ai youtube downloader</Badge>
          <Badge variant="outline">ymate youtube downloader</Badge>
          <Badge variant="outline">savenet youtube downloader</Badge>
        </div>
      </section>

      {/* Formats Info */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-card p-8 rounded-3xl border border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
              <FileVideo className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">YouTube Downloader Video Formats</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex justify-between items-center text-sm">
              <span className="font-medium">MP4 4K Ultra HD Downloader</span>
              <span className="text-muted-foreground text-xs uppercase bg-green-500/10 text-green-600 px-2 py-0.5 rounded">Best Quality</span>
            </li>
            <li className="flex justify-between items-center text-sm border-t border-border/50 pt-3">
              <span className="font-medium">Free Download YouTube 1080p</span>
              <span className="text-muted-foreground">Standard HD</span>
            </li>
            <li className="flex justify-between items-center text-sm border-t border-border/50 pt-3">
              <span className="font-medium">YouTube Downloader PC 720p</span>
              <span className="text-muted-foreground">Optimized</span>
            </li>
          </ul>
        </div>

        <div className="bg-card p-8 rounded-3xl border border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
              <FileAudio className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">YouTube Converter to MP3</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex justify-between items-center text-sm">
              <span className="font-medium">High Bitrate 320kbps MP3</span>
              <span className="text-muted-foreground text-xs uppercase bg-purple-500/10 text-purple-600 px-2 py-0.5 rounded">HQ Audio</span>
            </li>
            <li className="flex justify-between items-center text-sm border-t border-border/50 pt-3">
              <span className="font-medium">Best YouTube Downloader Audio</span>
              <span className="text-muted-foreground">256kbps</span>
            </li>
            <li className="flex justify-between items-center text-sm border-t border-border/50 pt-3">
              <span className="font-medium">Fast YT Video Downloader MP3</span>
              <span className="text-muted-foreground">Standard</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Related Tools */}
      <div className="text-center py-10 border-t border-border/50">
        <p className="text-sm font-bold text-muted-foreground mb-6 uppercase tracking-widest text-primary/80">Other Powerful Free Online Tools</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/terabox-downloader">
            <span className="px-5 py-2.5 rounded-full bg-muted/50 hover:bg-muted text-sm font-medium transition-all border border-transparent hover:border-primary/20 cursor-pointer hover:shadow-sm">
              Terabox Downloader
            </span>
          </Link>
          <Link href="/instagram-downloader">
            <span className="px-5 py-2.5 rounded-full bg-muted/50 hover:bg-muted text-sm font-medium transition-all border border-transparent hover:border-primary/20 cursor-pointer hover:shadow-sm">
              Instagram Downloader
            </span>
          </Link>
          <Link href="/tiktok-downloader">
            <span className="px-5 py-2.5 rounded-full bg-muted/50 hover:bg-muted text-sm font-medium transition-all border border-transparent hover:border-primary/20 cursor-pointer hover:shadow-sm">
              TikTok Downloader
            </span>
          </Link>
        </div>
      </div>
    </ToolSEOLayout>
  );
}
