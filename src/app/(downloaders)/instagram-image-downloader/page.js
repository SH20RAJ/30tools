import Link from 'next/link';
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
  title: "Instagram Photo Downloader - Save IG Images Free | 30tools",
  description: "Download Instagram photos, carousel posts, and profile pictures in full HD for free. Save any public Instagram image without watermark. No login required.",
  keywords: [
    "instagram photo downloader", "download instagram photos", "instagram image downloader",
    "save instagram photos", "instagram picture downloader", "instagram photo saver",
    "how to download instagram photos", "download instagram carousel", "save instagram post images",
    "instagram photo download without watermark", "instagram photo grabber", "ig photo downloader",
    "download instagram photos by username", "instagram hd photo downloader"
  ].join(", "),
  openGraph: {
    title: "Instagram Photo Downloader - Save HD Photos Free",
    description: "⚡ Download Instagram photos and carousel posts in HD. No watermark, no login, completely free.",
    url: "https://30tools.com/instagram-image-downloader",
    siteName: "30tools",
    type: "website",
    images: [{ url: "/og-images/universal-downloader.jpg", width: 1200, height: 630, alt: "Instagram Photo Downloader" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Photo Downloader (2026) - No Watermark",
    description: "⚡ Save Instagram photos and carousels in full HD. Free, no login, instant download.",
    images: ["/og-images/universal-downloader.jpg"],
    creator: "@30tools"
  },
  alternates: { canonical: "https://30tools.com/instagram-image-downloader" },
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
    "name": "Instagram Photo Downloader",
    "alternateName": ["Instagram Image Saver", "IG Photo Grabber"],
    "description": "Free online tool to download Instagram photos, carousel posts and images in HD without watermarks.",
    "url": "https://30tools.com/instagram-image-downloader",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "featureList": [
      "Download Instagram photos in HD",
      "Save carousel posts (all images)",
      "No watermark added",
      "No account required"
    ]
  },
  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Download Instagram Photos",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Copy Post URL", "text": "Open the Instagram post you want to download. Tap the three-dot menu and select 'Copy Link'." },
      { "@type": "HowToStep", "position": 2, "name": "Paste URL", "text": "Paste the Instagram post URL into the 30tools Instagram Photo Downloader input box." },
      { "@type": "HowToStep", "position": 3, "name": "Download Photo", "text": "Click Download. For carousel posts, all images will be available. Save them to your gallery in full HD." }
    ]
  }
};

export default function InstagramImageDownloaderPage() {
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
              <li className="text-foreground font-medium">Instagram Photo Downloader</li>
            </ol>
          </nav>

          <AdUnit />

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Instagram Photo Downloader</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Download Instagram photos and carousel post images in full HD resolution for free. Save any public Instagram image without watermarks. No login required.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>🖼️ Full HD</span><span>🎠 Carousel Support</span><span>🚫 No Watermark</span><span>🆓 100% Free</span>
            </div>
          </div>

          <AdUnit />

          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
            <UniversalVideoDownloader title="Instagram Photo Downloader" />
          </div>

          <section className="mb-16 prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">Why You Need an Instagram Photo Downloader</h2>
            <p className="text-muted-foreground mb-8">
              Instagram doesn't provide a native download button for posts. Whether you want to <strong>download Instagram carousel photos</strong>, save a friend's travel pictures, or archive your favorite photographer's work, our Instagram Photo Downloader extracts images in their original HD quality — no screenshots, no quality loss.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">Full Carousel Downloads</h3>
                <p className="text-muted-foreground m-0">Instagram carousel posts contain up to 10 images. Our tool fetches every photo in the carousel — not just the first one — so you don't miss anything.</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">Original HD Quality</h3>
                <p className="text-muted-foreground m-0">Screen captures reduce image quality. We download photos directly in their original JPEG format at the highest resolution Instagram stores.</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-3 mt-0">No Watermarks Added</h3>
                <p className="text-muted-foreground m-0">Unlike many photo-saving apps, 30tools never adds our logo or watermark to downloaded images. You get the clean, original file.</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How to Save Instagram Photos</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">1</div>
                <h3 className="text-xl font-bold mb-4">Copy Post URL</h3>
                <p className="text-muted-foreground text-sm">Open the Instagram post, tap the ⋯ menu, and select "Copy Link". On desktop, copy the URL from your browser address bar.</p>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">2</div>
                <h3 className="text-xl font-bold mb-4">Paste & Fetch</h3>
                <p className="text-muted-foreground text-sm">Paste the Instagram URL into the box above. Our system fetches all the images from the post, including all carousel slides.</p>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mb-6">3</div>
                <h3 className="text-xl font-bold mb-4">Download HD Photos</h3>
                <p className="text-muted-foreground text-sm">Click Download on each image you want to save. The JPEG photos are saved directly to your device's gallery or downloads folder.</p>
              </div>
            </div>
          </section>

          <AdUnit />

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">Instagram Photo Downloader FAQs</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Can I download all photos from an Instagram carousel post?</h3>
                <p className="text-muted-foreground">Yes! Our tool fetches every image in a carousel post, not just the first one. After pasting the link, you'll see all available photos from the carousel with individual download buttons.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">How do I save Instagram photos on iPhone?</h3>
                <p className="text-muted-foreground">Open Safari on your iPhone, go to 30tools.com, paste the Instagram post link, then tap and hold the displayed image and choose "Add to Photos". The photo will save to your iPhone's Camera Roll.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Can I download photos from private Instagram accounts?</h3>
                <p className="text-muted-foreground">No. Our tool can only access publicly available Instagram posts. Photos from private accounts are not accessible without that account accepting your follow request.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">In what format are Instagram photos downloaded?</h3>
                <p className="text-muted-foreground">Instagram photos are downloaded as JPEG (.jpg) files in the highest resolution available. The typical resolution is 1080×1080 for square posts, or 1080×1350 for portrait-format posts.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}