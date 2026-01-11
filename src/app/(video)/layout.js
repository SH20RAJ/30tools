import VideoToolsNavbar from "@/components/navigation/VideoToolsNavbar";
import VideoToolsFooter from "@/components/footers/VideoToolsFooter";

export const metadata = {
  title: "Video Tools - Terabox Player, Downloader & Converters | 30Tools",
  description:
    "Free online video tools: Terabox video player and downloader, video compression, and format conversion. High-speed, secure, and no installation required.",
  keywords:
    "video tools, terabox downloader, terabox player online, video compressor, video converter, free video tools",
  openGraph: {
    title: "Video Tools - Terabox Player & Video Utilities",
    description:
      "Play Terabox videos online, download content, and optimize your media files for free.",
    url: "https://30tools.com/video-tools",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/video-tools.jpg",
        width: 1200,
        height: 630,
        alt: "Free Video Tools Collection",
      },
    ],
    type: "website",
  },
};

const jsonLdSchemas = {
  collectionPage: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Online Video Tools",
    "description": "Collection of free video utilities including Terabox downloader and player.",
    "url": "https://30tools.com/video-tools",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "url": "https://30tools.com/terabox-downloader", "name": "Terabox Downloader" }
      ]
    }
  }
};

export default function VideoToolsLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.collectionPage) }} />
      <VideoToolsNavbar />
      <main className="flex-1">{children}</main>
      <VideoToolsFooter />
    </div>
  );
}
