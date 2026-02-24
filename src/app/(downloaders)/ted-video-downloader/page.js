import Link from 'next/link';
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
  title: "TED Talk Video Downloader - Save TED Videos Free | 30tools",
  description: "Download TED Talk videos and TED-Ed animations for free. Save inspiring TED talks as MP4 offline. No login required. Works on Android, iPhone, and PC.",
  keywords: [
    "ted talk downloader", "download ted talks", "ted video downloader", "save ted talk",
    "ted talk download free", "ted talk mp4 download", "how to download ted talks",
    "ted ed downloader", "save ted video offline", "ted talk saver", "download ted talk videos",
    "ted talk offline viewing", "free ted talk downloader"
  ].join(", "),
  openGraph: {
    title: "TED Talk Video Downloader - Save Inspiring Talks Free",
    description: "⚡ Download TED Talks and TED-Ed videos for free offline viewing. No login required.",
    url: "https://30tools.com/ted-video-downloader",
    siteName: "30tools",
    type: "website",
    images: [{ url: "/og-images/universal-downloader.jpg", width: 1200, height: 630, alt: "TED Talk Video Downloader" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "TED Talk Downloader (2026) - Save Free",
    description: "⚡ Download TED Talks offline for free. Just paste the TED.com URL and download.",
    images: ["/og-images/universal-downloader.jpg"],
    creator: "@30tools"
  },
  alternates: { canonical: "https://30tools.com/ted-video-downloader" },
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
    "name": "TED Talk Video Downloader",
    "alternateName": ["TED to MP4", "Save TED Talk Offline"],
    "description": "Free online tool to download TED Talks and TED-Ed videos as MP4 for offline viewing.",
    "url": "https://30tools.com/ted-video-downloader",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "featureList": ["Download TED Talks as MP4", "Save TED-Ed animations", "No account required", "Works on all devices"]
  },
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Download TED Talk Videos",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Copy TED URL", "text": "Go to ted.com and open the talk you want. Copy the URL from the browser address bar." },
      { "@type": "HowToStep", "position": 2, "name": "Paste URL", "text": "Paste the TED Talk URL into the 30tools downloader input box." },
      { "@type": "HowToStep", "position": 3, "name": "Download MP4", "text": "Click Download and save the TED Talk as an MP4 file to your device for offline viewing." }
    ]
  }
};

export default function TedVideoDownloaderPage() {
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
              <li className="text-foreground font-medium">TED Talk Downloader</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">TED Talk Downloader</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Download TED Talks and TED-Ed videos for free offline viewing. Save inspiring talks to watch on your commute, flight, or anywhere without internet. No login needed.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🎤 TED & TED-Ed</span><span>📚 Educational</span><span>✈️ Watch Offline</span><span>🆓 100% Free</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <UniversalVideoDownloader title="TED Talk Downloader" />
          </div>

          <section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">Why Download TED Talks?</h2>
            <p className="text-muted-foreground mb-8">
              With over 3,000 talks, TED.com is the world's leading source of expert knowledge on technology, entertainment, design, science, and more. While TED offers a download option on their website, it requires multiple clicks and isn't available on mobile. Our <strong>TED Talk Downloader</strong> makes it easier — simply paste the URL and download instantly.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">Offline Learning</h3>
                <p className="text-muted-foreground m-0">Build a personal library of TED Talks for offline learning. Perfect for students, professionals, and lifelong learners who want to study without internet.</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">TED-Ed Animations</h3>
                <p className="text-muted-foreground m-0">Download beautifully animated TED-Ed lessons for classroom use, personal study, or sharing with students and colleagues.</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">Share Knowledge</h3>
                <p className="text-muted-foreground m-0">Save the best TED Talks to show during presentations, workshops, or offline team meetings where internet access is unreliable.</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How to Download TED Talks</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">1</div>
                <h3 className="text-xl font-bold mb-4">Find Your Talk</h3>
                <p className="text-muted-foreground text-sm">Go to ted.com and search for the talk you want to save. Copy the full URL from your browser (e.g. ted.com/talks/name_of_talk).</p>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">2</div>
                <h3 className="text-xl font-bold mb-4">Paste URL</h3>
                <p className="text-muted-foreground text-sm">Paste the TED Talk URL into the input box on this page and click the Download button.</p>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">3</div>
                <h3 className="text-xl font-bold mb-4">Save MP4</h3>
                <p className="text-muted-foreground text-sm">Select the video quality and save the TED Talk as an MP4 file. Now you can watch it offline anytime, anywhere.</p>
              </div>
            </div>
          </section>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">TED Talk Downloader FAQs</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Is it legal to download TED Talks?</h3>
                <p className="text-muted-foreground">TED releases their talks under a Creative Commons Attribution-NonCommercial-NoDerivatives license. Personal offline viewing is allowed. Using downloaded TED talks for commercial purposes or altering them requires separate permission from TED.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Can I download TED-Ed animated videos?</h3>
                <p className="text-muted-foreground">Yes. TED-Ed videos hosted on ted.com can be downloaded using our tool. Some TED-Ed videos are hosted exclusively on YouTube — for those, use our YouTube Video Downloader instead.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">What quality are TED Talk downloads?</h3>
                <p className="text-muted-foreground">TED offers high-quality video production. Downloads are typically available in 480p, 720p HD, and 1080p Full HD depending on the original talk recording quality.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}