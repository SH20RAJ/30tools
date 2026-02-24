import Link from 'next/link';
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
  title: "Vimeo Video Downloader - Save HD Vimeo Videos Free | 30tools",
  description: "Download Vimeo videos in HD MP4, 1080p, and 4K for free. The best online Vimeo downloader. No account needed, works on all devices.",
  keywords: [
    "vimeo video downloader", "download vimeo videos", "free vimeo downloader", "save vimeo video",
    "vimeo to mp4", "vimeo video download", "how to download vimeo videos", "vimeo downloader online",
    "vimeo hd downloader", "vimeo 1080p download", "download private vimeo video", "vimeo video saver"
  ].join(", "),
  openGraph: {
    title: "Vimeo Video Downloader - Save HD Videos Free",
    description: "⚡ Download Vimeo videos in HD, 1080p, or 4K instantly. Free, no account needed, works online!",
    url: "https://30tools.com/vimeo-video-downloader",
    siteName: "30tools",
    type: "website",
    images: [{ url: "/og-images/universal-downloader.jpg", width: 1200, height: 630, alt: "Vimeo Video Downloader" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vimeo Video Downloader (2026)",
    description: "⚡ Download Vimeo videos in HD MP4 for free. No login, no software.",
    images: ["/og-images/universal-downloader.jpg"], 
    creator: "@30tools"
  },
  alternates: { canonical: "https://30tools.com/vimeo-video-downloader" },
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
    "name": "Vimeo Video Downloader",
    "alternateName": ["Vimeo to MP4 Converter", "Save Vimeo Video HD"],
    "description": "Free online tool to download Vimeo videos in HD, 1080p, and 4K format.",
    "url": "https://30tools.com/vimeo-video-downloader",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "featureList": [
      "Download Vimeo videos in HD 1080p and 4K",
      "No account required",
      "Free to use",
      "Works on all devices"
    ]
  },
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Download Vimeo Videos",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Copy Vimeo URL", "text": "Open the Vimeo video you want to download. Copy the URL from the browser address bar." },
      { "@type": "HowToStep", "position": 2, "name": "Paste URL", "text": "Paste the Vimeo link into the 30tools Vimeo Downloader text box." },
      { "@type": "HowToStep", "position": 3, "name": "Download MP4", "text": "Select your preferred quality (HD/1080p/4K if available) and click Download to save the MP4 file." }
    ]
  }
};

export default function VimeoVideoDownloaderPage() {
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
              <li className="text-foreground font-medium">Vimeo Video Downloader</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Vimeo Video Downloader</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Download Vimeo videos in HD, 1080p, or 4K format. The fastest free Vimeo to MP4 converter online — no login, no software, no watermarks.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🎥 4K & HD</span><span>🔒 No Watermarks</span><span>📱 All Devices</span><span>🆓 100% Free</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <UniversalVideoDownloader title="Vimeo Video Downloader" />
          </div>

          {/* SEO Content: Why Use Us */}
          <section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">Why Vimeo Creators Need a Downloader</h2>
            <p className="text-muted-foreground mb-8">
              Vimeo is the platform of choice for filmmakers, artists, and creative professionals. Unlike YouTube, Vimeo focuses on quality over quantity, often hosting films, showreels, and portfolio work in pristine 4K. But Vimeo's download options are locked behind the paid Pro plan for many videos. Our <strong>Vimeo Video Downloader</strong> breaks that barrier.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">HD & 4K Quality</h3>
                <p className="text-muted-foreground m-0">
                  Extract the highest resolution available — 720p, 1080p, or 4K depending on the video. Perfect for offline playback on your 4K monitor or TV.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">No Vimeo Account</h3>
                <p className="text-muted-foreground m-0">
                  You don't need a Vimeo Pro subscription or even a free account. Simply paste the URL of any public Vimeo video.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">Works Offline</h3>
                <p className="text-muted-foreground m-0">
                  Download your favorite Vimeo films for offline viewing on planes, in remote areas, or on devices without internet access.
                </p>
              </div>
            </div>
          </section>

        
          {/* How to Download Steps */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How to Download from Vimeo with 30tools</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center relative overflow-hidden">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">1</div>
                <h3 className="text-xl font-bold mb-4">Copy the URL</h3>
                <p className="text-muted-foreground">Find the Vimeo video or image you want to download. Click Share and select "Copy Link".</p>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center relative overflow-hidden">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">2</div>
                <h3 className="text-xl font-bold mb-4">Paste the URL</h3>
                <p className="text-muted-foreground">Return to 30tools and paste the copied Vimeo link into the input box at the top of this page.</p>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center relative overflow-hidden">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">3</div>
                <h3 className="text-xl font-bold mb-4">Download Media</h3>
                <p className="text-muted-foreground">Click the "Download" button. Choose your preferred format and quality to save the file directly to your device.</p>
              </div>
            </div>
          </section>

          <AdUnit />

          {/* FAQs */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">Vimeo Downloader FAQs</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Can I download private Vimeo videos?</h3>
                <p className="text-muted-foreground">Our tool can only download public Vimeo videos. Private videos and videos with password protection require authentication and cannot be accessed by third-party extractors.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">What formats can I download Vimeo videos in?</h3>
                <p className="text-muted-foreground">Vimeo videos are downloaded as MP4 files. Depending on the original upload, you may see multiple quality options such as 360p, 720p, 1080p HD, or 2160p 4K.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Is this different from Vimeo's own download feature?</h3>
                <p className="text-muted-foreground">Yes. Vimeo only allows downloads if the video creator explicitly enables the download option, and it's often restricted to paid Vimeo members. Our tool makes downloading simpler for any public video.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Do I need to pay or create an account?</h3>
                <p className="text-muted-foreground">No. 30tools is completely free and does not require you to register or log in. Just paste the Vimeo URL and click Download.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}