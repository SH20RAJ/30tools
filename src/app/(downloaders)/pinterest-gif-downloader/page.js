import Link from 'next/link';
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
  title: "Pinterest GIF Downloader - Save Animated GIFs Free | 30tools",
  description: "Download animated GIFs from Pinterest instantly without watermarks. Free online Pinterest GIF saver to save animations directly to your gallery or PC.",
  keywords: [
    "pinterest gif downloader", "download pinterest gif", "how to save gif from pinterest", "pinterest gif save",
    "online pinterest gif downloader", "free pinterest gif downloader", "pinterest gif to gallery",
    "pinterest gif app", "pinterest gif download mobile", "pinterest gif no watermark",
    "pinterest animated image downloader", "save pinterest animation"
  ].join(", "),
  openGraph: {
    title: "Pinterest GIF Downloader - Save Animations to Gallery",
    description: "⚡ Fast and free online tool to download high-quality animated GIFs from Pinterest without watermarks.",
    url: "https://30tools.com/pinterest-gif-downloader",
    siteName: "30tools",
    type: "website",
    images: [{
      url: "/og-images/universal-downloader.jpg", 
      width: 1200,
      height: 630,
      alt: "Pinterest GIF Downloader"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinterest GIF Downloader (2026)",
    description: "⚡ Stop screenshotting! Download actual animated GIFs from Pinterest instantly.",
    images: ["/og-images/universal-downloader.jpg"], 
    creator: "@30tools"
  },
  alternates: { canonical: "https://30tools.com/pinterest-gif-downloader" },
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
    "name": "Pinterest GIF Downloader",
    "alternateName": ["Pinterest Animation Saver", "Save GIF from Pinterest"],
    "description": "Free online tool to extract and download animated GIFs from Pinterest posts without watermarks.",
    "url": "https://30tools.com/pinterest-gif-downloader",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "featureList": [
      "Download actual animated GIFs, not static images",
      "No watermarks added",
      "Works on iPhone, Android, and PC",
      "No app installation required"
    ]
  },
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Save a GIF from Pinterest",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Copy the Pin Link",
        "text": "Open the Pinterest app or website, find the animated GIF you want to save, tap 'Share', and select 'Copy Link'."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Paste the URL",
        "text": "Go to the 30tools Pinterest GIF Downloader and paste the copied link into the search bar."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Download GIF",
        "text": "Click Download. We will extract the actual .gif or .mp4 file so you can save it directly to your device's gallery."
      }
    ]
  }
};

export default function PinterestGifDownloaderPage() {
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
              <li className="text-foreground font-medium">Pinterest GIF Downloader</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Pinterest GIF Downloader</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Extract and save animated GIFs directly from Pinterest to your camera roll or PC. Fast, ad-free, and no watermarks.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🎞️ Keep Animations</span><span>🚫 No Watermarks</span><span>📱 Save to Gallery</span><span>🆓 100% Free</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <UniversalVideoDownloader title="Pinterest GIF Downloader" />
          </div>

          {/* SEO Content: Deep Dive */}
          <section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">The Best Way to Download Animated GIFs from Pinterest</h2>
            <p className="text-muted-foreground mb-8">
              Ever found a hilarious reaction GIF or a beautiful animated aesthetic on Pinterest, only to realize you can't save it to your phone? The native "Download Image" option on Pinterest often only saves a static, frozen frame of the animation. The 30tools <strong>Pinterest GIF Downloader</strong> solves this by extracting the underlying animated file so you can share it natively on WhatsApp, Discord, or iMessage.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="p-8 bg-card rounded-2xl border border-border">
                <h3 className="text-xl font-bold mb-4 mt-0">Save Directly to Gallery</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Unlike screen recording, which captures UI elements and ruins the looping effect, our tool downloads the actual source file. Whether you are on an iPhone, Android, or desktop PC, the GIF saves directly to your downloads folder or camera roll, ready to be used.
                </p>
              </div>
              <div className="p-8 bg-blue-50 dark:bg-blue-950/20 rounded-2xl border border-blue-100 dark:border-blue-900/50">
                <h3 className="text-xl font-bold mb-4 mt-0">No Watermarks Added</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We don't add any annoying "downloaded from 30tools" watermarks to your files. You get the exact, clean, high-quality animation that was uploaded to the original Pin.
                </p>
              </div>
            </div>
          </section>

          {/* How to Download Steps */}
          <section className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">How to Save a GIF from Pinterest to Your Phone</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">1</div>
                <h3 className="text-xl font-bold mb-4">Copy the Link</h3>
                <p className="text-muted-foreground text-sm">Find the animated Pin on Pinterest. Tap the "Share" icon (arrow) and select "Copy Link".</p>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">2</div>
                <h3 className="text-xl font-bold mb-4">Paste into 30tools</h3>
                <p className="text-muted-foreground text-sm">Open our Pinterest GIF Saver in your browser and paste the copied URL into the central search box.</p>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">3</div>
                <h3 className="text-xl font-bold mb-4">Download Animation</h3>
                <p className="text-muted-foreground text-sm">Click Download to extract the file. On mobile, you may need to long-press the resulting file to save it to your Photos app.</p>
              </div>
            </div>
          </section>

          <AdUnit />

          {/* FAQs */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Why does Pinterest only save my GIF as a still image?</h3>
                <p className="text-muted-foreground">The native Pinterest app often converts GIFs to MP4 videos for bandwidth optimization, or simply serves a static thumbnail when you tap "Download Image". Third-party tools like ours are required to extract the actual moving media.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Is there an app I need to install?</h3>
                <p className="text-muted-foreground">No! 30tools is a 100% web-based Pinterest GIF downloader. You do not need to install any sketchy apps from the App Store or Google Play. It works entirely within Safari, Chrome, or any modern browser.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Will the downloaded file be a .GIF or .MP4?</h3>
                <p className="text-muted-foreground">Depending on how the original creator uploaded the file to Pinterest, our tool will extract the highest quality version available. It may be delivered as a traditional .GIF file, or a looping .MP4 video (which most messaging apps treat interchangeably nowadays).</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Can I download Pinterest videos here too?</h3>
                <p className="text-muted-foreground">Yes! Our universal extraction engine also works as a standard <Link href="/pinterest-video-downloader" className="text-primary hover:underline">Pinterest Video Downloader</Link>, allowing you to save standard videos with sound.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}