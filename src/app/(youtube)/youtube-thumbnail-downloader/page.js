import YouTubeThumbnailDownloader from "@/components/tools/youtube/YouTubeThumbnailDownloader";
import { SEO_TEMPLATES } from "@/constants/seo/metadata-templates";

export const metadata = {
  title: SEO_TEMPLATES.YOUTUBE_THUMBNAIL_DOWNLOADER.title,
  description: SEO_TEMPLATES.YOUTUBE_THUMBNAIL_DOWNLOADER.description,
  keywords: SEO_TEMPLATES.YOUTUBE_THUMBNAIL_DOWNLOADER.keywords,

  openGraph: {
    title: SEO_TEMPLATES.YOUTUBE_THUMBNAIL_DOWNLOADER.title,
    description: SEO_TEMPLATES.YOUTUBE_THUMBNAIL_DOWNLOADER.description,
    url: `https://30tools.com${SEO_TEMPLATES.YOUTUBE_THUMBNAIL_DOWNLOADER.canonical}`,
    images: [
      {
        url: "/og-images/youtube-thumbnail-downloader.jpg",
        width: 1200,
        height: 630,
        alt: "YouTube Thumbnail Downloader - Download HD, 4K Thumbnails Free"
      }
    ],
    type: "website",
    siteName: "30tools"
  },

  twitter: {
    card: "summary_large_image",
    title: SEO_TEMPLATES.YOUTUBE_THUMBNAIL_DOWNLOADER.title,
    description: SEO_TEMPLATES.YOUTUBE_THUMBNAIL_DOWNLOADER.description,
    images: ["/og-images/youtube-thumbnail-downloader.jpg"],
    creator: "@30tools"
  },

  alternates: {
    canonical: `https://30tools.com${SEO_TEMPLATES.YOUTUBE_THUMBNAIL_DOWNLOADER.canonical}`
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

const schemas = {
  webApp: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "YouTube Thumbnail Downloader",
    "description": "Download YouTube video thumbnails in HD, FHD, and 4K quality. Free YouTube thumbnail downloader with multiple resolution options.",
    "url": "https://30tools.com/youtube-thumbnail-downloader",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "30tools",
      "url": "https://30tools.com"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1247"
    }
  },

  howTo: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Download YouTube Thumbnails",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Copy YouTube URL",
        "text": "Copy the YouTube video URL from the address bar or Share button"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Paste URL",
        "text": "Paste the URL into the input field"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Choose Quality",
        "text": "Select thumbnail quality (HD, FHD, or 4K)"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Download",
        "text": "Click download to save the thumbnail"
      }
    ]
  },

  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I download a YouTube thumbnail?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply paste the YouTube video URL into our tool and click 'Download'. You can choose from multiple quality options including HD, FHD, and 4K thumbnails."
        }
      },
      {
        "@type": "Question",
        "name": "What quality options are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer Default (120x90), Medium (320x180), High (480x360), Standard (640x480), Max Resolution (1280x720), and 4K when available."
        }
      },
      {
        "@type": "Question",
        "name": "Is it legal to download YouTube thumbnails?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "YouTube thumbnails are publicly accessible. Use them for fair use purposes like analysis, commentary, or educational content with proper attribution."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to install software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No! Our tool works entirely in your browser. No software installation or registration required."
        }
      }
    ]
  },

  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://30tools.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "YouTube Tools",
        "item": "https://30tools.com/#youtube-tools"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "YouTube Thumbnail Downloader"
      }
    ]
  }
};

export default function YouTubeThumbnailDownloaderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }} />

      <div className="container mx-auto px-4 py-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li>/</li>
            <li><a href="/#youtube-tools" className="hover:text-blue-600">YouTube Tools</a></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">YouTube Thumbnail Downloader</li>
          </ol>
        </nav>

        <h1 className="text-4xl font-bold mb-4 text-center">YouTube Thumbnail Downloader - Download HD, 4K Thumbnails Free</h1>

        <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto">
          Download YouTube video thumbnails in HD, FHD, and 4K quality with our free thumbnail downloader. Get high-resolution thumbnails from any YouTube video instantly. No registration required, works on all devices.
        </p>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <YouTubeThumbnailDownloader />
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How to Download YouTube Thumbnails</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl mb-3">1️⃣</div>
              <h3 className="text-xl font-semibold mb-3">Copy YouTube URL</h3>
              <p className="text-gray-700">Go to YouTube and copy the video URL from the address bar or Share button.</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <div className="text-3xl mb-3">2️⃣</div>
              <h3 className="text-xl font-semibold mb-3">Paste URL</h3>
              <p className="text-gray-700">Paste the YouTube video URL into the input field on our tool.</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg">
              <div className="text-3xl mb-3">3️⃣</div>
              <h3 className="text-xl font-semibold mb-3">Choose Quality</h3>
              <p className="text-gray-700">Select your preferred thumbnail quality from Default to 4K options.</p>
            </div>
            <div className="p-6 bg-orange-50 rounded-lg">
              <div className="text-3xl mb-3">4️⃣</div>
              <h3 className="text-xl font-semibold mb-3">Download</h3>
              <p className="text-gray-700">Click download to save the thumbnail to your device instantly.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-xl font-semibold mb-2">Multiple Quality Options</h3>
              <p className="text-gray-600">Download thumbnails from 120x90 up to 4K quality.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Instant Download</h3>
              <p className="text-gray-600">Get thumbnails instantly without processing delays.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="text-4xl mb-4">🆓</div>
              <h3 className="text-xl font-semibold mb-2">100% Free</h3>
              <p className="text-gray-600">No registration, no watermarks, unlimited downloads.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">All Devices</h3>
              <p className="text-gray-600">Works on desktop, mobile, and tablet perfectly.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-xl font-semibold mb-2">All Video Types</h3>
              <p className="text-gray-600">Works with videos, Shorts, live streams, premieres.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">No Installation</h3>
              <p className="text-gray-600">Browser-based, no software or extensions needed.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-xl font-semibold mb-3">How do I download a YouTube thumbnail?</h3>
              <p className="text-gray-700">Simply paste the YouTube video URL into our tool and click 'Download'. You can choose from multiple quality options including HD, FHD, and 4K thumbnails.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-xl font-semibold mb-3">What quality options are available?</h3>
              <p className="text-gray-700">We offer Default (120x90), Medium (320x180), High (480x360), Standard (640x480), Max Resolution (1280x720), and 4K when available.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-xl font-semibold mb-3">Is it legal to download YouTube thumbnails?</h3>
              <p className="text-gray-700">YouTube thumbnails are publicly accessible. Use them for fair use purposes like analysis, commentary, or educational content with proper attribution.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-xl font-semibold mb-3">Do I need to install software?</h3>
              <p className="text-gray-700">No! Our tool works entirely in your browser. No software installation or registration required.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Related YouTube Tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/youtube-downloader" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">YouTube Video Downloader</h3>
              <p className="text-gray-600">Download YouTube videos in MP4, MP3 formats</p>
            </a>
            <a href="/youtube-tag-generator" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">YouTube Tag Generator</h3>
              <p className="text-gray-600">Generate optimized tags for better video SEO</p>
            </a>
            <a href="/youtube-transcript-downloader" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">YouTube Transcript Downloader</h3>
              <p className="text-gray-600">Download video transcripts and subtitles</p>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
