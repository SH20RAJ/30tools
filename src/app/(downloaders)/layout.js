import DownloaderToolsNavbar from "@/components/navigation/DownloaderToolsNavbar";
import DownloaderToolsFooter from "@/components/footers/DownloaderToolsFooter";

export const metadata = {
  title: "All Video Downloaders - Save from TikTok, Instagram, YouTube & More | 30Tools",
  description:
    "Free online video downloaders for 30+ platforms including TikTok, Instagram, Facebook, Twitter (X), Reddit, and Pinterest. Save videos in HD MP4 with no watermarks.",
  keywords:
    "online video downloader, all video downloader, tiktok no watermark, instagram saver, facebook video download, twitter video saver, reddit downloader, pinterest video saver, youtube downloader online, 4k video downloader",
  openGraph: {
    title: "All Video Downloaders - Save from Any Site Free",
    description:
      "One place for all your video downloading needs. Save from TikTok, Instagram, Facebook, and more in HD.",
    url: "https://30tools.com/all-downloaders",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/downloader-tools.jpg",
        width: 1200,
        height: 630,
        alt: "Free Downloader Tools Collection",
      },
    ],
    type: "website",
  },
};

const jsonLdSchemas = {
  collectionPage: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Social Media Video Downloaders",
    "description": "Collection of free tools to download videos from TikTok, Instagram, Facebook, Twitter, and other platforms.",
    "url": "https://30tools.com/all-downloaders",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "url": "https://30tools.com/tiktok-downloader", "name": "TikTok Downloader" },
        { "@type": "ListItem", "position": 2, "url": "https://30tools.com/instagram-downloader", "name": "Instagram Downloader" },
        { "@type": "ListItem", "position": 3, "url": "https://30tools.com/facebook-video-downloader", "name": "Facebook Downloader" },
        { "@type": "ListItem", "position": 4, "url": "https://30tools.com/twitter-video-downloader", "name": "Twitter Downloader" }
      ]
    }
  }
};

export default function DownloadersLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.collectionPage) }} />
      <DownloaderToolsNavbar />
      <main className="flex-1">{children}</main>
      <DownloaderToolsFooter />
    </div>
  );
}
