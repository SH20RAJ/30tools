
import FacebookStoryDownloader from '@/components/tools/downloaders/FacebookStoryDownloader';
import { BreadcrumbsEnhanced } from "@/components/seo";

export const metadata = {
  title: "Facebook Story Downloader (2026) - Download FB Stories & Videos | 30Tools",
  description: "Free Facebook Story Downloader. Download FB stories, videos, and reels in HD quality (MP4) anonymously. No registration, fast & secure online tool.",
  keywords: [
    "facebook story downloader",
    "download facebook stories",
    "fb story saver",
    "facebook video downloader",
    "save fb story",
    "facebook reels downloader",
    "story saver for facebook",
    "online facebook downloader",
    "hd facebook video downloader",
    "anonymous facebook story viewer"
  ].join(", "),
  openGraph: {
    title: "Facebook Story Downloader - Save FB Stories & Videos Free",
    description: "Download Facebook stories and videos in HD 1080p. Fast, free, and no watermark. Works on mobile and desktop.",
    type: "website",
    url: "https://30tools.com/facebook-story-downloader",
    images: [
      {
        url: "/og-images/facebook-story-downloader.jpg",
        width: 1200,
        height: 630,
        alt: "Facebook Story Downloader"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Facebook Story Downloader - Save FB Stories Free",
    description: "Download Facebook stories instantly. No login required.",
  },
  alternates: {
    canonical: "https://30tools.com/facebook-story-downloader"
  },
  other: {
    "application-name": "Facebook Story Downloader",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Facebook Story Downloader",
  "description": "Free online tool to download Facebook stories and videos in HD quality.",
  "url": "https://30tools.com/facebook-story-downloader",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Download Facebook Stories",
    "Download Facebook Reels",
    "HD Quality Support",
    "No Registration Required",
    "Mobile Friendly"
  ]
};

export default function FacebookStoryDownloaderPage() {
  const breadcrumbs = [
    { name: "Downloader Tools", url: "/downloaders" },
    { name: "Facebook Story Downloader", url: "/facebook-story-downloader" },
  ];

  return (
    <div className="min-h-screen bg-background pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="container mx-auto px-4 pt-6">
        <BreadcrumbsEnhanced customBreadcrumbs={breadcrumbs} />
      </div>

      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <section className="text-center mb-12 space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Facebook Story <span className="text-primary">Downloader</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Save Facebook stories, videos, and reels to your device in high quality (MP4).
            <br className="hidden md:inline" /> Fast, free, and anonymous.
          </p>
        </section>

        {/* Tool Section */}
        <section className="mb-20">
          <FacebookStoryDownloader />
        </section>

        {/* Content Section for SEO */}
        <section className="max-w-4xl mx-auto prose dark:prose-invert">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">How to Download Facebook Stories?</h2>
              <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                <li>
                  <strong className="text-foreground">Copy the Link:</strong> Open the Facebook app or website, find the story you want to save, tap the "Share" button, and select "Copy Link".
                </li>
                <li>
                  <strong className="text-foreground">Paste URL:</strong> Go to 30tools.com/facebook-story-downloader and paste the link into the input box above.
                </li>
                <li>
                  <strong className="text-foreground">Download:</strong> Click the "Download" button. Wait a moment for us to process the video, then save it to your device.
                </li>
              </ol>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Why use our Story Saver?</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                   <span className="mt-1 text-primary">✓</span>
                   <span><strong>High Quality:</strong> Download videos in 1080p HD whenever available.</span>
                </li>
                 <li className="flex items-start gap-2">
                   <span className="mt-1 text-primary">✓</span>
                   <span><strong>Anonymous:</strong> The uploader won't know you viewed or downloaded their story.</span>
                </li>
                 <li className="flex items-start gap-2">
                   <span className="mt-1 text-primary">✓</span>
                   <span><strong>Cross-Platform:</strong> Works perfectly on iPhone (iOS), Android, Windows, and Mac.</span>
                </li>
                 <li className="flex items-start gap-2">
                   <span className="mt-1 text-primary">✓</span>
                   <span><strong>100% Free:</strong> No hidden costs or premium subscriptions required.</span>
                </li>
              </ul>
            </div>
          </div>

           <div className="mt-12 p-6 bg-muted/30 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="font-semibold text-lg">Is it legal to download Facebook stories?</h3>
                    <p className="text-muted-foreground">You should only download stories for personal use. Respect the copyright and privacy of the content creators. Do not re-upload content without permission.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-lg">Where are the videos saved?</h3>
                    <p className="text-muted-foreground">Videos are usually saved in the "Downloads" folder on Windows/Mac or in the Gallery/Files app on Android/iOS.</p>
                </div>
                 <div>
                    <h3 className="font-semibold text-lg">Does this tool work for private accounts?</h3>
                    <p className="text-muted-foreground">Currently, we only support downloading stories from public accounts and pages for privacy reasons.</p>
                </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
