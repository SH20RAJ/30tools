import Link from 'next/link';
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
  title: "Telegram Video Downloader - Save Telegram Videos Free | 30tools",
  description: "Download Telegram videos, GIFs, and media from public channels and groups for free. Fast online Telegram video saver. No app required, works on all devices.",
  keywords: [
    "telegram video downloader", "download telegram video", "save telegram video", "telegram video saver",
    "telegram to mp4", "telegram channel video download", "telegram media downloader",
    "how to download telegram videos", "telegram video download free", "telegram gif downloader",
    "telegram video save online", "download video from telegram channel"
  ].join(", "),
  openGraph: {
    title: "Telegram Video Downloader - Save Channel Videos Free",
    description: "⚡ Download videos, GIFs, and media from Telegram channels for free. Instant, no app needed.",
    url: "https://30tools.com/telegram-video-downloader",
    siteName: "30tools",
    type: "website",
    images: [{ url: "/og-images/universal-downloader.jpg", width: 1200, height: 630, alt: "Telegram Video Downloader" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Telegram Video Downloader (2026) - Free",
    description: "⚡ Save Telegram channel videos and GIFs offline. Free, no login, instant download.",
    images: ["/og-images/universal-downloader.jpg"],
    creator: "@30tools"
  },
  alternates: { canonical: "https://30tools.com/telegram-video-downloader" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Telegram Video Downloader",
  "alternateName": ["Telegram Channel Downloader", "Telegram to MP4"],
  "description": "Free online downloader for Telegram videos, GIFs, and media from public channels.",
  "url": "https://30tools.com/telegram-video-downloader",
  "applicationCategory": "MultimediaApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "featureList": ["Download Telegram videos as MP4", "Save GIFs from Telegram", "Works with public channels", "No app required"]
};

export default function TelegramVideoDownloaderPage() {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li>/</li>
              <li><Link href="/all-downloaders" className="hover:text-primary">Downloaders</Link></li>
              <li>/</li>
              <li className="text-foreground font-medium">Telegram Video Downloader</li>
            </ol>
          </nav>
          <AdUnit />
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Telegram Video Downloader</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Save videos, GIFs, and media from public Telegram channels and groups directly to your device. No Telegram app installation required. Works on all browsers.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>📺 Channel Videos</span><span>🎞️ GIFs</span><span>🌐 Online Tool</span><span>🆓 100% Free</span>
            </div>
          </div>
          <AdUnit />
          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <UniversalVideoDownloader title="Telegram Video Downloader" />
          </div>
          <section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">Save Telegram Channel Videos Offline</h2>
            <p className="text-muted-foreground mb-8">Telegram channels share millions of videos daily — news clips, tutorials, entertainment, and exclusive content. Our <strong>Telegram Video Downloader</strong> lets you save any video from a public Telegram channel directly to your device without needing the Telegram app.</p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">Public Channels</h3>
                <p className="text-muted-foreground m-0">Access and download media from any public Telegram channel by pasting its post link. No channel membership required.</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">Videos & GIFs</h3>
                <p className="text-muted-foreground m-0">Download both MP4 videos and GIF animations from Telegram posts. Files save in their original quality.</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">No App Required</h3>
                <p className="text-muted-foreground m-0">No need to install the Telegram app. Works directly in your web browser on any device.</p>
              </div>
            </div>
          </section>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">Telegram Video Downloader FAQs</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">How do I get the link to a Telegram video?</h3>
                <p className="text-muted-foreground">On Telegram web (web.telegram.org), right-click on the message and select "Copy Message Link". For mobile, long-press the message and tap "Copy Link". Paste that link into our downloader.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Can I download from private Telegram channels?</h3>
                <p className="text-muted-foreground">No. Private Telegram channels require authentication. Our tool only works with publicly accessible Telegram content.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">What file formats are supported?</h3>
                <p className="text-muted-foreground">MP4 video files and GIF animations. The download quality matches the original file uploaded to the Telegram channel.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}