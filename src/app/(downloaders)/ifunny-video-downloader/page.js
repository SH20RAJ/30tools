import Link from 'next/link';
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
  title: "iFunny Video Downloader - Save iFunny Videos & Memes Free | 30tools",
  description: "Download iFunny videos, memes, and GIFs for free. Save funny iFunny content as MP4 without watermarks. No login required. Works on Android, iPhone, and PC.",
  keywords: [
    "ifunny video downloader", "download ifunny video", "ifunny downloader", "save ifunny meme",
    "ifunny to mp4", "ifunny video saver", "download memes from ifunny",
    "how to download ifunny videos", "ifunny without watermark"
  ].join(", "),
  openGraph: {
    title: "iFunny Video Downloader - Save Memes & Videos Free",
    description: "⚡ Download iFunny memes and videos as MP4 without watermarks. Free, instant.",
    url: "https://30tools.com/ifunny-video-downloader",
    siteName: "30tools",
    type: "website",
    images: [{ url: "/og-images/universal-downloader.jpg", width: 1200, height: 630, alt: "iFunny Video Downloader" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "iFunny Video Downloader (2026) - No Watermark",
    description: "⚡ Save iFunny videos and memes offline without watermark. Free.",
    images: ["/og-images/universal-downloader.jpg"],
    creator: "@30tools"
  },
  alternates: { canonical: "https://30tools.com/ifunny-video-downloader" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

const jsonLd = {
  "@context": "https://schema.org", "@type": "WebApplication",
  "name": "iFunny Video Downloader",
  "description": "Free online tool to download iFunny videos and memes as MP4 without watermarks.",
  "url": "https://30tools.com/ifunny-video-downloader",
  "applicationCategory": "MultimediaApplication", "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

export default function IfunnyVideoDownloaderPage() {
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
              <li className="text-foreground font-medium">iFunny Video Downloader</li>
            </ol>
          </nav>
          <AdUnit />
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">iFunny Video Downloader</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Download iFunny videos and meme content without watermarks for free. Save your favorite internet humor from iFunny as MP4 to share anywhere offline.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>😂 Memes</span><span>🚫 No Watermark</span><span>📹 MP4</span><span>🆓 100% Free</span>
            </div>
          </div>
          <AdUnit />
          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <UniversalVideoDownloader title="iFunny Video Downloader" />
          </div>
          <section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">Download iFunny Meme Videos</h2>
            <p className="text-muted-foreground mb-8">iFunny is a popular meme platform with millions of users sharing funny videos, reaction clips, and internet humor. Like many platforms, iFunny adds its watermark when using in-app downloads. Our <strong>iFunny Video Downloader</strong> fetches the original stream for a clean, watermark-free MP4 file.</p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-card rounded-xl border border-border"><h3 className="text-xl font-bold mb-3 mt-0">No Watermark</h3><p className="text-muted-foreground m-0">Get iFunny videos without the iFunny logo watermark — perfect for resharing on Discord, WhatsApp, or Telegram chats.</p></div>
              <div className="p-6 bg-card rounded-xl border border-border"><h3 className="text-xl font-bold mb-3 mt-0">Reaction Content</h3><p className="text-muted-foreground m-0">Build your personal reaction video library from iFunny's huge collection of funny clips, fails, and challenge videos.</p></div>
              <div className="p-6 bg-card rounded-xl border border-border"><h3 className="text-xl font-bold mb-3 mt-0">Instant Download</h3><p className="text-muted-foreground m-0">No waiting, no queues. Paste the iFunny link and your video downloads in seconds to any device.</p></div>
            </div>
          </section>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">iFunny FAQs</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">How do I copy an iFunny video link?</h3>
                <p className="text-muted-foreground">On iFunny, tap the Share button on a video post and select "Copy Link". Paste that URL into the 30tools downloader and click Download.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}