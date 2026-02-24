import Link from 'next/link';
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
  title: "Mashable Video Downloader - Save Mashable Videos Free | 30tools",
  description: "Download Mashable tech, science, and entertainment videos for free. Save Mashable web explainers and tech news clips as MP4. No login required. All devices.",
  keywords: [
    "mashable video downloader", "download mashable video", "save mashable video",
    "mashable to mp4", "mashable tech video download", "mashable downloader free",
    "how to download mashable videos", "mashable clip saver"
  ].join(", "),
  openGraph: {
    title: "Mashable Video Downloader - Save Tech Videos Free",
    description: "⚡ Download Mashable tech, science, and entertainment videos as MP4. Free, instant.",
    url: "https://30tools.com/mashable-video-downloader",
    siteName: "30tools",
    type: "website",
    images: [{ url: "/og-images/universal-downloader.jpg", width: 1200, height: 630, alt: "Mashable Video Downloader" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mashable Video Downloader (2026)",
    description: "⚡ Save Mashable videos offline as MP4. Free, no login.",
    images: ["/og-images/universal-downloader.jpg"],
    creator: "@30tools"
  },
  alternates: { canonical: "https://30tools.com/mashable-video-downloader" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } }
};

const AdUnit = () => (
  <div className="my-6 flex justify-center">
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-format="autorelaxed" data-ad-client="ca-pub-1828915420581549" data-ad-slot="4669751596"></ins>
  </div>
);

const jsonLd = {
  "@context": "https://schema.org", "@type": "WebApplication",
  "name": "Mashable Video Downloader",
  "description": "Free online tool to download Mashable tech, science, and entertainment videos as MP4.",
  "url": "https://30tools.com/mashable-video-downloader",
  "applicationCategory": "MultimediaApplication", "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

export default function MashableVideoDownloaderPage() {
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
              <li className="text-foreground font-medium">Mashable Video Downloader</li>
            </ol>
          </nav>
          <AdUnit />
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Mashable Video Downloader</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Download Mashable tech explainers, science news, and entertainment videos as MP4 for free. Save Mashable's engaging web content for offline viewing or reference.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>💻 Tech Videos</span><span>🔬 Science</span><span>📹 MP4</span><span>🆓 100% Free</span>
            </div>
          </div>
          <AdUnit />
          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <UniversalVideoDownloader title="Mashable Video Downloader" />
          </div>
          <section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">Save Mashable Tech & Science Content Offline</h2>
            <p className="text-muted-foreground mb-8">Mashable is a leading digital media brand covering technology, science, entertainment, and culture. Their video content ranges from product reviews and tech explainers to science news and viral internet stories. Our <strong>Mashable Video Downloader</strong> lets you save those videos for offline viewing, presentations, or research.</p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-card rounded-xl border border-border"><h3 className="text-xl font-bold mb-3 mt-0">Tech Explainers</h3><p className="text-muted-foreground m-0">Save Mashable's in-depth technology explainer videos about AI, gadgets, apps, and internet culture for offline learning.</p></div>
              <div className="p-6 bg-card rounded-xl border border-border"><h3 className="text-xl font-bold mb-3 mt-0">Science News</h3><p className="text-muted-foreground m-0">Download Mashable science and space explainer videos for educational use, school projects, or personal curiosity.</p></div>
              <div className="p-6 bg-card rounded-xl border border-border"><h3 className="text-xl font-bold mb-3 mt-0">Viral Content</h3><p className="text-muted-foreground m-0">Archive Mashable's viral videos and internet culture commentary for research, media studies, or entertainment.</p></div>
            </div>
          </section>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">Mashable FAQs</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">How do I download a Mashable video?</h3>
                <p className="text-muted-foreground">Go to the Mashable article or video page. Copy the URL from your browser. Paste it into the 30tools downloader and click Download to save the video as MP4.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}