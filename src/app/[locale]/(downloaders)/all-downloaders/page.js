import Link from "next/link";

export const metadata = {
  title: "Free Video Downloaders - Download Videos from Any Site | 30tools",
  description: "Download videos from YouTube, Facebook, Instagram, TikTok, Twitter, and more. 100% free online video downloaders for all platforms.",
  keywords: [
    "video downloader",
    "online video downloader",
    "free video downloader",
    "youtube downloader",
    "facebook downloader",
    "instagram downloader",
    "tiktok downloader",
    "twitter downloader",
    "all video downloader"
  ].join(", "),
  openGraph: {
    title: "Free Video Downloaders - Download from Any Site",
    description: "⚡ Download videos from 50+ websites for free!",
    url: "https://30tools.com/all-downloaders",
    siteName: "30tools",
    type: "website",
  },
  alternates: { canonical: "https://30tools.com/all-downloaders" },
  robots: { index: true, follow: true }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

const tools = [
  { name: "YouTube Downloader", href: "/youtube-downloader", icon: "📹", desc: "Download YouTube videos" },
  { name: "Facebook Downloader", href: "/facebook-downloader", icon: "📘", desc: "Download FB videos" },
  { name: "Instagram Downloader", href: "/instagram-downloader", icon: "📸", desc: "Download IG photos & videos" },
  { name: "TikTok Downloader", href: "/tiktok-downloader", icon: "🎵", desc: "Download TikToks without watermark" },
  { name: "Twitter Downloader", href: "/twitter-downloader", icon: "🐦", desc: "Download Twitter videos" },
  { name: "Pinterest Downloader", href: "/pinterest-video-downloader", icon: "📌", desc: "Download Pinterest videos" },
  { name: "Snapchat Downloader", href: "/snapchat-video-downloader", icon: "👻", desc: "Download Snapchat stories" },
  { name: "Vimeo Downloader", href: "/vimeo-downloader", icon: "📺", desc: "Download Vimeo videos" },
  { name: "Dailymotion Downloader", href: "/dailymotion-downloader", icon: "🎥", desc: "Download Dailymotion videos" },
  { name: "Reddit Downloader", href: "/reddit-downloader", icon: "🤖", desc: "Download Reddit videos" },
  { name: "SoundCloud Downloader", href: "/soundcloud-downloader", icon: "☁️", desc: "Download SoundCloud music" },
  { name: "Spotify Downloader", href: "/spotify-downloader", icon: "🎧", desc: "Download Spotify songs" },
];

export default function AllDownloadersPage() {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li>/</li>
              <li className="text-foreground font-medium">All Downloaders</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">All Video Downloaders</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Download videos, audio, and photos from your favorite social media platforms. Fast, free, and easy to use.
            </p>
          </div>

          <AdUnit />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {tools.map((tool, i) => (
              <Link key={i} href={tool.href} className="group p-6 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-4xl">{tool.icon}</span>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{tool.name}</h3>
                </div>
                <p className="text-muted-foreground">{tool.desc}</p>
              </Link>
            ))}
          </div>

          <AdUnit />
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(3) }} />
    </>
  );
}
