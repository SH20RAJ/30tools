import Link from 'next/link';
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
  title: "LinkedIn Video Downloader - Save HD Videos Free | 30tools",
  description: "Download LinkedIn videos in HD MP4 format for free. Fast online LinkedIn video downloader. Save professional videos, webinars, and posts directly to your device.",
  keywords: [
    "linkedin video downloader", "download linkedin videos", "free linkedin video downloader", "save linkedin videos",
    "online linkedin video downloader", "linkedin video download", "linkedin video to mp4", 
    "high quality linkedin video download", "download linkedin video no software", "how to download linkedin videos",
    "linkedin post video downloader", "save linkedin learning video"
  ].join(", "),
  openGraph: {
    title: "LinkedIn Video Downloader - Save HD Videos Free",
    description: "⚡ Fast, free online tool to download high-quality LinkedIn videos directly to your PC, Mac, or mobile device.",
    url: "https://30tools.com/linkedin-video-downloader",
    siteName: "30tools",
    type: "website",
    images: [{
      url: "/og-images/universal-downloader.jpg", 
      width: 1200,
      height: 630,
      alt: "LinkedIn Video Downloader"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "LinkedIn Video Downloader (2026)",
    description: "⚡ Download LinkedIn videos in HD MP4 format for free. No software needed.",
    images: ["/og-images/universal-downloader.jpg"], 
    creator: "@30tools"
  },
  alternates: { canonical: "https://30tools.com/linkedin-video-downloader" },
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
    "name": "LinkedIn Video Downloader",
    "alternateName": ["Save LinkedIn Videos HD", "LinkedIn to MP4 Converter"],
    "description": "Free online tool to extract and download MP4 videos from public LinkedIn posts, articles, and feeds.",
    "url": "https://30tools.com/linkedin-video-downloader",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "featureList": [
      "Download LinkedIn videos in high quality (HD MP4)",
      "No account or registration required",
      "Works on Windows, Mac, iOS, and Android",
      "Fast, ad-light experience"
    ]
  },
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Download LinkedIn Videos",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Copy the LinkedIn Post Link",
        "text": "Find the LinkedIn post with the video. Click the three dots (⋯) in the top right corner of the post and select 'Copy link to post'."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Paste the Link",
        "text": "Navigate to the 30tools LinkedIn Video Downloader and paste the URL you just copied into the text box."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Download the MP4",
        "text": "Click the Download button. Choose your preferred video quality (e.g., 720p HD or 1080p if available) and save it to your device."
      }
    ]
  }
};

export default function LinkedinVideoDownloaderPage() {
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
              <li className="text-foreground font-medium">LinkedIn Video Downloader</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">LinkedIn Video Downloader</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Download professional webinars, presentations, and insights from LinkedIn directly to your device as high-quality MP4 files. No software required.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>💼 Professional HD</span><span>💻 Works on Desktop</span><span>📱 Mobile Friendly</span><span>🆓 100% Free</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <UniversalVideoDownloader title="LinkedIn Video Downloader" />
          </div>

          {/* SEO Content: Deep Dive */}
          <section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">Why Use Our LinkedIn Video Saver?</h2>
            <p className="text-muted-foreground mb-8">
              LinkedIn is a goldmine of professional knowledge, filled with industry insights, keynote speeches, mini-webinars, and portfolio showcases. However, LinkedIn doesn't offer a native way to save these videos for offline viewing or personal archiving. The 30tools <strong>LinkedIn Video Downloader</strong> bridges this gap, allowing you to build your personal library of professional content.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="p-8 bg-card rounded-2xl border border-border">
                <h3 className="text-xl font-bold mb-4 mt-0">Capture Valuable Insights</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Posts on the LinkedIn feed disappear quickly. By converting LinkedIn videos to MP4, you can save keynotes, tutorial snippets, and competitor analyses to your local drive. Review the material offline during your commute, take detailed notes, or study communication techniques at your own pace without distractions.
                </p>
              </div>
              <div className="p-8 bg-blue-50 dark:bg-blue-950/20 rounded-2xl border border-blue-100 dark:border-blue-900/50">
                <h3 className="text-xl font-bold mb-4 mt-0">No Third-Party Software</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Many legacy downloader tools require you to install bloated browser extensions or potentially unsafe desktop software. 30tools operates entirely in the cloud. Just paste the URL of any public LinkedIn post, and our servers do the heavy lifting, delivering a clean, safe MP4 file straight to your browser.
                </p>
              </div>
            </div>
          </section>

          {/* How to Download Steps */}
          <section className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">How to Download a Video from LinkedIn (PC & Mobile)</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">1</div>
                <h3 className="text-xl font-bold mb-4">Get the Post Link</h3>
                <p className="text-muted-foreground text-sm">Scroll to the LinkedIn video. Click the three dots (⋯) at the top right of the post. Select "Copy link to post".</p>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">2</div>
                <h3 className="text-xl font-bold mb-4">Paste into 30tools</h3>
                <p className="text-muted-foreground text-sm">Open the 30tools LinkedIn Downloader. Paste the copied link into the search box and hit enter.</p>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">3</div>
                <h3 className="text-xl font-bold mb-4">Save to Device</h3>
                <p className="text-muted-foreground text-sm">Select the highest quality available from the output options and click Download to save the MP4 video.</p>
              </div>
            </div>
          </section>

          <AdUnit />

          {/* FAQs */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Can I download private LinkedIn videos?</h3>
                <p className="text-muted-foreground">No. 30tools respects user privacy and platform security. Our tool can only fetch videos from public posts that are accessible without logging into a LinkedIn account. Videos shared in private groups or via direct messages cannot be downloaded.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Is it legal to download videos from LinkedIn?</h3>
                <p className="text-muted-foreground">Downloading LinkedIn videos for personal, offline viewing (such as saving a tutorial for later study) is generally considered fair use. However, you do not own the copyright. Re-uploading, distributing, or using the downloaded videos for commercial purposes without the creator's explicit consent is a violation of copyright law.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Why is the video downloading in a low resolution?</h3>
                <p className="text-muted-foreground">Our tool extracts the highest quality video file made available by LinkedIn's servers. If the original uploader published the video in 480p, we can only retrieve it in 480p. If they uploaded an HD 1080p source, you will be able to download the HD version.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Do I need to sign in to LinkedIn to use this?</h3>
                <p className="text-muted-foreground">Absolutely not. Our downloader works completely independently of your LinkedIn account. You don't need to log in to LinkedIn, and you don't need to create an account on 30tools to use the service.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}