import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
  title:
    "Universal Video Downloader - Download from TikTok, Facebook, Instagram, Twitter/X, Vimeo, Dailymotion, Reddit, Rumble",
  description:
    "Download videos from TikTok, Facebook, Instagram, Twitter/X, Vimeo, Dailymotion, Reddit, Rumble and more platforms. No watermark downloads, multiple quality options, and no registration required.",
  keywords: [
    "universal video downloader",
    "video downloader",
    "tiktok downloader",
    "facebook video downloader",
    "instagram video downloader",
    "twitter video downloader",
    "vimeo downloader",
    "dailymotion downloader",
    "reddit video downloader",
    "rumble downloader",
    "download tiktok video without watermark",
    "instagram video download no watermark",
    "facebook video download",
    "twitter video download",
    "vimeo video downloader",
    "dailymotion video downloader",
    "reddit video downloader",
    "rumble video downloader",
    "free video downloader",
    "no watermark video downloader",
    "multiple platform video downloader",
    "universal social media downloader",
  ].join(", "),
  openGraph: {
    title: "Universal Video Downloader - Download Videos from Any Platform",
    description:
      "Download videos from TikTok, Facebook, Instagram, Twitter/X, Vimeo, Dailymotion, Reddit, Rumble and more. No watermark, multiple quality options, no registration.",
    url: "https://30tools.com/universal-video-downloader",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/universal-video-downloader.jpg",
        width: 1200,
        height: 630,
        alt: "Universal Video Downloader - Download from Multiple Platforms",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Universal Video Downloader - All-in-One Video Downloader",
    description:
      "Download videos from TikTok, Facebook, Instagram, Twitter/X, Vimeo, Dailymotion, Reddit, Rumble and more platforms.",
    images: ["/og-images/universal-video-downloader.jpg"],
  },
};

export default function UniversalVideoDownloaderPage() {
  return (
    <div className="min-h-screen bg-background">
      <UniversalVideoDownloader />
    </div>
  );
}
