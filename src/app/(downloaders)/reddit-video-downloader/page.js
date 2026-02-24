import Link from 'next/link';
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
  title: "Reddit Video Downloader - Save Reddit Videos with Sound | 30tools",
  description: "Download Reddit videos with sound in HD for free. Our Reddit to MP4 saver (Viddit/RedditSave alternative) works fast on mobile & PC.",
  keywords: [
    "reddit video downloader", "download reddit videos", "reddit video saver", "save reddit video with sound",
    "reddit mp4 downloader", "free reddit video downloader", "online reddit video downloader", 
    "reddit gif downloader", "reddit video to mp4", "how to download videos from reddit",
    "redditsave alternative", "viddit alternative", "download reddit video on iphone", "reddit video download no sound fix"
  ].join(", "),
  openGraph: {
    title: "Reddit Video Downloader - Save Reddit Videos with Sound",
    description: "⚡ Best free Reddit to MP4 downloader. Save Reddit videos with audio instantly in high quality.",
    url: "https://30tools.com/reddit-video-downloader",
    siteName: "30tools",
    type: "website",
    images: [{
      url: "/og-images/universal-downloader.jpg", 
      width: 1200,
      height: 630,
      alt: "Reddit Video Downloader"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Reddit Video Downloader with Sound (2026)",
    description: "⚡ Fast and free Reddit video saver. Download Reddit to MP4 with audio.",
    images: ["/og-images/universal-downloader.jpg"], 
    creator: "@30tools"
  },
  alternates: { canonical: "https://30tools.com/reddit-video-downloader" },
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
    "name": "Reddit Video Downloader (with Audio)",
    "alternateName": ["RedditSave Alternative", "Viddit Alternative", "Reddit to MP4 Converter"],
    "description": "Download Reddit videos with sound in HD for free. The best online Reddit video saver.",
    "url": "https://30tools.com/reddit-video-downloader",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "featureList": [
      "Download Reddit videos with sound",
      "Reddit to MP4 converter",
      "Save Reddit GIFs",
      "No account required",
      "Mobile and desktop support"
    ]
  },
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Download Reddit Videos with Sound",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Copy the Reddit Post Link",
        "text": "Find the Reddit post containing the video. Click the 'Share' button and select 'Copy Link'."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Paste the Link into 30tools",
        "text": "Navigate to the 30tools Reddit Video Downloader and paste the copied URL into the search box."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Download the MP4",
        "text": "Our tool will merge the video and audio tracks. Click the Download button to save the file with sound."
      }
    ]
  }
};

export default function RedditVideoDownloaderPage() {
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
              <li className="text-foreground font-medium">Reddit Video Downloader</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Reddit Video Downloader</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Download Reddit videos with sound in HD MP4 for free. Our fast, secure Reddit saver works flawlessly on mobile and PC without any app installation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🔊 Includes Audio Track</span><span>🎥 HD Quality</span><span>🤖 No Bots Needed</span><span>🆓 100% Free</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <UniversalVideoDownloader title="Reddit Video Downloader" />
          </div>

          {/* SEO Content: Why Use Us + Deep Dive */}
          <section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">The Best Way to Download Reddit Videos with Sound</h2>
            <p className="text-muted-foreground mb-8">
              Reddit separates video and audio tracks on their servers, which is why when you try to save a video directly from the app (or use a low-quality downloader), you often get a silent video file. The 30tools <strong>Reddit Video Downloader</strong> automatically extracts, syncs, and merges both tracks in the background, delivering a perfectly synced MP4 file with sound.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left mt-8">
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">Fix the "No Sound" Issue</h3>
                <p className="text-muted-foreground m-0">
                  We use advanced server-side processing similar to <code>u/SaveVideo</code> to guarantee that if the original Reddit post has audio, your downloaded MP4 will have audio.
                </p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-950/20 p-6 rounded-xl border border-orange-100 dark:border-orange-900/50">
                <h3 className="text-xl font-bold mb-3 mt-0">RedditSave & Viddit Alternative</h3>
                <p className="text-muted-foreground m-0">
                  Looking for a cleaner, ad-light alternative to RapidSave (formerly RedditSave) or Viddit? Our tool provides a faster, more modern interface for saving Reddit clips.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">Reddit GIF Downloader</h3>
                <p className="text-muted-foreground m-0">
                  Reddit often hosts GIFs as muted MP4s. Simply paste the link to the thread, and we'll extract the file so you can share it natively on WhatsApp or Discord.
                </p>
              </div>
            </div>
          </section>
        
          {/* How to Download Steps */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How to Download from Reddit on iPhone & PC</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center relative overflow-hidden">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">1</div>
                <h3 className="text-xl font-bold mb-4">Copy the Post URL</h3>
                <p className="text-muted-foreground">Open the Reddit app or website. Tap the 'Share' arrow under the post containing the video and select 'Copy Link'.</p>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center relative overflow-hidden">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">2</div>
                <h3 className="text-xl font-bold mb-4">Paste the URL</h3>
                <p className="text-muted-foreground">Navigate back to 30tools and paste the copied Reddit link into the search box at the top of the page.</p>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center relative overflow-hidden">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">3</div>
                <h3 className="text-xl font-bold mb-4">Save to Device</h3>
                <p className="text-muted-foreground">Click the Download button. We'll process the audio/video tracks and provide an MP4 file to save to your camera roll or downloads folder.</p>
              </div>
            </div>
          </section>

          <AdUnit />

          {/* FAQs */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Why do some Reddit downloaders produce videos without sound?</h3>
                <p className="text-muted-foreground">To save bandwidth, Reddit streams video and audio as two separate files (Dynamic Adaptive Streaming over HTTP). Basic downloaders only grab the video file. 30tools uses an extraction engine that downloads both and merges them before giving you the final MP4.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Do I need to tag a Reddit Bot (like u/SaveVideo)?</h3>
                <p className="text-muted-foreground">No! You don't need to clog up comment sections trying to trigger a bot that might be banned anyway. Just copy the link and use our website—it's faster and cleaner.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Can I download Reddit videos on my iPhone?</h3>
                <p className="text-muted-foreground">Yes. Just use Safari or Chrome on your iOS device. Once you click download, Safari will ask if you want to save the file. It will go to your "Files" app, where you can then save it directly to your Photos gallery.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Are my downloads anonymous?</h3>
                <p className="text-muted-foreground">Absolutely. We do not track your download history, require a Reddit account connection, or save any files you download on our servers. Your privacy is protected.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}