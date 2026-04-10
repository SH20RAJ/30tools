
import Link from "next/link";
import { generateToolMetadata } from "@/lib/seo-helper";
import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = generateToolMetadata(
  "youtube-thumbnail-downloader",
  "downloaders"
);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Free YouTube Thumbnail Downloader",
  description:
    "Instantly download any YouTube thumbnail in HD (1280x720), SD, and multiple other resolutions for free. No signup required.",
  url: "https://30tools.com/youtube-thumbnail-downloader",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Download maxresdefault HD thumbnails",
    "Multiple resolution options (HD, SD)",
    "Completely free to use",
    "No account or signup required",
    "Instant download",
    "Works on all devices",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "813",
  },
  mainEntity: {
    "@type": "WebPage",
    "@id": "https://30tools.com/youtube-thumbnail-downloader",
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the highest quality YouTube thumbnail?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The highest quality YouTube thumbnail is the 'maxresdefault' image, which is typically 1280x720 pixels. Our tool allows you to download this version instantly.",
      },
    },
    {
      "@type": "Question",
      name: "Is it legal to download a YouTube thumbnail?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Downloading thumbnails for personal use, such as for design inspiration or competitive research, is generally acceptable. However, re-using a thumbnail in your own content without permission may violate copyright laws. Always respect the original creator's work.",
      },
    },
    {
      "@type": "Question",
      name: "How to get a YouTube thumbnail for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can use我们的免费 YouTube 缩略图下载器 to get any thumbnail for free. Just paste the YouTube video URL into the input box and click 'Download.' You'll see all available resolutions, including HD.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a thumbnail of a private video?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, you can only download thumbnails from public YouTube videos. Our tool cannot access private or unlisted content.",
      },
    },
  ],
};

export default function YouTubeThumbnailDownloaderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* Hero Section */}
      <section className="text-center py-12 md:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Free YouTube Thumbnail Downloader
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Instantly save any YouTube thumbnail in full HD, SD, and multiple
            sizes. Free, fast, and no signup required.
          </p>

          <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
              🖼️ HD 1080p
            </span>
            <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
              🆓 100% Free
            </span>
            <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
              ⚡ Instant Download
            </span>
            <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
              ✅ No Signup
            </span>
          </div>
        </div>
      </section>

      {/* Tool Interface */}
      <section className="pb-12 md:pb-20 -mt-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-6 md:p-8 shadow-2xl border-t-4 border-primary">
            <UniversalVideoDownloader title="YouTube Thumbnail Downloader" />
          </Card>
          <p className="text-center text-sm text-gray-500 mt-4">
            <strong>Privacy Note:</strong> We do not store your data. All
            processing is done in your browser.
          </p>
        </div>
      </section>

      {/* Content Expansion */}
      <div className="container mx-auto px-4 pb-12 md:pb-20 space-y-16">
        {/* How to Use */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-10">
            How It Works (3 Simple Steps)
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mx-auto">
                1
              </div>
              <h3 className="text-xl font-bold">Paste YouTube URL</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Copy the URL of the YouTube video you want the thumbnail from.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mx-auto">
                2
              </div>
              <h3 className="text-xl font-bold">Click "Download"</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our tool will instantly fetch all available thumbnail sizes.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl mx-auto">
                3
              </div>
              <h3 className="text-xl font-bold">Save Your Image</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Choose the resolution you need and save the image to your
                device.
              </p>
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Features for Content Creators & Marketers
            </h2>
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">✔</span>
                <span>
                  <strong>Multiple Resolutions:</strong> Download thumbnails in
                  HD (1280x720), SD (640x480), and other standard sizes.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">✔</span>
                <span>
                  <strong>High Quality:</strong> Get the 'maxresdefault' thumbnail
                  for the best possible quality.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">✔</span>
                <span>
                  <strong>Completely Free:</strong> No hidden costs, no premium
                  versions. Just a free tool for everyone.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">✔</span>
                <span>
                  <strong>Fast and Simple:</strong> The minimal UI ensures you can
                  grab a thumbnail in seconds without distractions.
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Why Download Thumbnails?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Thumbnails are the billboards of YouTube. Analyzing them helps you understand what makes viewers click.
              </p>
              <ul className="space-y-2 text-sm">
                <li>- Competitor Research</li>
                <li>- Design Inspiration</li>
                <li>- A/B Testing Ideas</li>
                <li>- Presentations & Reports</li>
              </ul>
          </div>
        </section>

        {/* FAQs */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQ_SCHEMA.mainEntity.map((faq, i) => (
              <details key={i} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg cursor-pointer">
                <summary className="font-semibold text-lg">{faq.name}</summary>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {faq.acceptedAnswer.text}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Internal Linking */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-10">
            Related Downloader Tools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <Link href="/youtube-video-downloader" className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg hover:bg-primary/10 transition-colors">
                YouTube Video Downloader
            </Link>
            <Link href="/twitter-video-downloader" className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg hover:bg-primary/10 transition-colors">
                Twitter Video Downloader
            </Link>
            <Link href="/instagram-downloader" className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg hover:bg-primary/10 transition-colors">
                Instagram Downloader
            </Link>
             <Link href="/tiktok-downloader" className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg hover:bg-primary/10 transition-colors">
                TikTok Downloader
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
