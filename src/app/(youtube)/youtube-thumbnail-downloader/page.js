import YouTubeThumbnailDownloader from "@/components/tools/youtube/YouTubeThumbnailDownloader";

export const metadata = {
  title: "Youtube Thumbnail Downloader - Free Tool | 30tools",
  description:
    "Professional youtube thumbnail downloader with instant results. Free online tool for students, professionals, and businesses worldwide.",
  keywords: [
    "youtube thumbnail downloader",
    "youtube thumbnail downloader online",
    "free youtube thumbnail downloader",
    "youtube thumbnail downloader tool",
    "online youtube thumbnail downloader free",
    "professional youtube thumbnail downloader",
    "youtube thumbnail downloader online tool",
    "best youtube thumbnail downloader free",
    "youtube thumbnail downloader web app",
    "youtube thumbnail downloader utility",
    "online tool",
    "free utility",
    "web application",
  ],
  openGraph: {
    title: "YouTube Thumbnail Downloader - Download HD Thumbnails Free",
    description:
      "Download YouTube video thumbnails in HD, FHD, and 4K quality instantly. Free YouTube thumbnail downloader online with no watermarks. Best thumbnail grabber tool.",
    type: "website",
    url: "https://30tools.com/youtube-thumbnail-downloader",
    images: [
      {
        url: "https://30tools.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "YouTube Thumbnail Downloader Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Thumbnail Downloader - Download HD Thumbnails Free",
    description:
      "Download YouTube video thumbnails in HD, FHD, and 4K quality instantly. Free YouTube thumbnail downloader online with no watermarks.",
    images: ["https://30tools.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://30tools.com/youtube-thumbnail-downloader",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "YouTube Thumbnail Downloader",
  description:
    "Download YouTube video thumbnails in HD, FHD, and 4K quality instantly. Best free YouTube thumbnail downloader and grabber tool online.",
  url: "https://30tools.com/youtube-thumbnail-downloader",
  applicationCategory: "Multimedia",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "HD/FHD/4K quality downloads",
    "Multiple thumbnail sizes",
    "Bulk download support",
    "No watermarks",
    "Fast processing",
  ],
};

export default function YouTubeThumbnailDownloaderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <YouTubeThumbnailDownloader />
    </>
  );
}
