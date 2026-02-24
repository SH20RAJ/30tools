import Link from 'next/link';
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
  title: "Tumblr Video Downloader - Save Tumblr Videos Free | 30tools",
  description: "Download Tumblr videos and GIFs for free. The best online Tumblr video saver. No login required, works on Android, iPhone, and PC.",
  keywords: [
    "tumblr video downloader", "download tumblr video", "save tumblr video", "tumblr video saver",
    "tumblr to mp4", "how to download tumblr video", "tumblr gif downloader",
    "tumblr video download free", "tumblr downloader online"
  ].join(", "),
  openGraph: {
    title: "Tumblr Video Downloader - Save Videos & GIFs Free",
    description: "⚡ Download Tumblr videos and GIFs for free. No login, no watermarks!",
    url: "https://30tools.com/tumblr-video-downloader",
    siteName: "30tools",
    type: "website",
    images: [{ url: "/og-images/universal-downloader.jpg", width: 1200, height: 630, alt: "Tumblr Video Downloader" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tumblr Video Downloader (2026)",
    description: "⚡ Save Tumblr videos and GIFs offline for free. No account needed.",
    images: ["/og-images/universal-downloader.jpg"], 
    creator: "@30tools"
  },
  alternates: { canonical: "https://30tools.com/tumblr-video-downloader" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

const jsonLdSchemas = {
  webApp: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Tumblr Video Downloader",
    "alternateName": ["Tumblr to MP4", "Tumblr GIF Downloader"],
    "description": "Free online tool to download videos and GIFs from Tumblr posts.",
    "url": "https://30tools.com/tumblr-video-downloader",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "featureList": ["Download Tumblr videos as MP4", "Save Tumblr GIFs", "No account required", "Free to use"]
  },
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Download Tumblr Videos",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Copy Post URL", "text": "Open the Tumblr post with the video. Click share and copy the post link." },
      { "@type": "HowToStep", "position": 2, "name": "Paste URL", "text": "Paste the Tumblr URL into the 30tools Tumblr Downloader input box." },
      { "@type": "HowToStep", "position": 3, "name": "Download", "text": "Click Download and select the quality to save it to your device as an MP4." }
    ]
  }
};

export default function TumblrVideoDownloaderPage() {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549" crossOrigin="anonymous" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.webApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.howTo) }} />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li>/</li>
              <li><Link href="/all-downloaders" className="hover:text-primary">Downloaders</Link></li>
              <li>/</li>
              <li className="text-foreground font-medium">Tumblr Video Downloader</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Tumblr Video Downloader</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Save Tumblr videos, GIF animations, and media posts directly to your device for free. No Tumblr account needed.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🎥 Videos & GIFs</span><span>📱 All Devices</span><span>🚫 No Login</span><span>🆓 100% Free</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <UniversalVideoDownloader title="Tumblr Video Downloader" />
          </div>

          <section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">Why Save Tumblr Videos?</h2>
            <p className="text-muted-foreground mb-8">
              Tumblr hosts art, fandom content, music videos, and short films. Unlike mainstream platforms, Tumblr doesn't offer a built-in video download button. Our <strong>Tumblr Video Downloader</strong> fills that gap — letting you save any public Tumblr video or GIF post offline.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">Art & Fandom Content</h3>
                <p className="text-muted-foreground m-0">Save fan animations, art-house clips, and creative videos from Tumblr's unique creator community.</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">GIF Animations</h3>
                <p className="text-muted-foreground m-0">Download GIF animations and video loops from Tumblr posts as actual GIF or MP4 files.</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">No Account Needed</h3>
                <p className="text-muted-foreground m-0">You don't need to be logged in to Tumblr. Just copy the post URL and paste it here.</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How to Download Tumblr Videos</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">1</div>
                <h3 className="text-xl font-bold mb-4">Copy Post URL</h3>
                <p className="text-muted-foreground text-sm">Open the Tumblr post with the video. Click share and copy the post URL.</p>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">2</div>
                <h3 className="text-xl font-bold mb-4">Paste URL</h3>
                <p className="text-muted-foreground text-sm">Paste the Tumblr post URL into the input box on this page and press Download.</p>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">3</div>
                <h3 className="text-xl font-bold mb-4">Save to Device</h3>
                <p className="text-muted-foreground text-sm">Select quality and download the video or GIF directly to your device storage.</p>
              </div>
            </div>
          </section>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">Tumblr Video Downloader FAQs</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Can I download GIFs from Tumblr?</h3>
                <p className="text-muted-foreground">Yes! GIF posts on Tumblr are supported. The GIF may be extracted as .gif or MP4 depending on how it was uploaded.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Does this work with Tumblr blog posts?</h3>
                <p className="text-muted-foreground">Yes, as long as the post is public and contains an embedded video. Copy the direct post URL and paste it here.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Is this tool free?</h3>
                <p className="text-muted-foreground">Completely free. No registration, no premium tier, no watermarks. 30tools is supported by minimal ads.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}