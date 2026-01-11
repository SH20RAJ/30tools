import YouTubeToolsNavbar from "@/components/navigation/YouTubeToolsNavbar";
import YouTubeToolsFooter from "@/components/footers/YouTubeToolsFooter";

export const metadata = {
  title: "YouTube Tools - Video Downloader, AI Summarizer & Script Generator | 30Tools",
  description:
    "Free YouTube tools for creators and viewers: Download videos in 4K, generate AI scripts, summarize videos instantly, and download Shorts without watermarks.",
  keywords:
    "youtube tools, youtube downloader, youtube shorts downloader, youtube script generator, youtube video summarizer, ai youtube tools, content creator tools",
  openGraph: {
    title: "YouTube Tools - All-in-One Creator & Viewer Suite",
    description:
      "Download videos, generate scripts, and summarize content with our free YouTube utilities.",
    url: "https://30tools.com/youtube-tools",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/youtube-tools.jpg",
        width: 1200,
        height: 630,
        alt: "Free YouTube Creator Tools",
      },
    ],
    type: "website",
  },
};

const jsonLdSchemas = {
  collectionPage: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "YouTube Creator Tools",
    "description": "Suite of free tools for YouTube content creation and downloading.",
    "url": "https://30tools.com/youtube-tools",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "url": "https://30tools.com/youtube-downloader", "name": "YouTube Downloader" },
        { "@type": "ListItem", "position": 2, "url": "https://30tools.com/youtube-shorts-downloader", "name": "Shorts Downloader" },
        { "@type": "ListItem", "position": 3, "url": "https://30tools.com/youtube-script-generator", "name": "Script Generator" },
        { "@type": "ListItem", "position": 4, "url": "https://30tools.com/youtube-video-summarizer", "name": "Video Summarizer" }
      ]
    }
  }
};

export default function YouTubeLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas.collectionPage) }} />
      <YouTubeToolsNavbar />
      <main className="flex-1">{children}</main>
      <YouTubeToolsFooter />
    </div>
  );
}
