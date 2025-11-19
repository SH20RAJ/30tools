import YouTubeEmbedGenerator from "@/components/tools/youtube/YouTubeEmbedGenerator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "YouTube Custom Player Embedder — 30tools",
  description:
    "Generate custom embed players for YouTube videos using Plyr, Video.js, FluidPlayer and MediaElement.js.",
  keywords: [
    "YouTube embed",
    "custom player",
    "Plyr",
    "Video.js",
    "FluidPlayer",
    "MediaElement.js",
    "video embedder",
    "YouTube tools",
    "embed generator",
  ],
  authors: [{ name: "30tools" }],
  creator: "30tools",
  publisher: "30tools",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "YouTube Custom Player Embedder — 30tools",
    description:
      "Generate custom embed players for YouTube videos using Plyr, Video.js, FluidPlayer and MediaElement.js.",
    url: "https://30tools.com/youtube-embedder",
    siteName: "30tools",
    images: [
      {
        url: "https://30tools.com/og-image-youtube-embedder.png",
        width: 1200,
        height: 630,
        alt: "YouTube Custom Player Embedder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Custom Player Embedder — 30tools",
    description:
      "Generate custom embed players for YouTube videos using Plyr, Video.js, FluidPlayer and MediaElement.js.",
    images: ["https://30tools.com/twitter-image-youtube-embedder.png"],
    creator: "@30tools",
  },
  alternates: {
    canonical: "https://30tools.com/youtube-embedder",
  },
  category: "tools",
};

export default function Page() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <YouTubeEmbedGenerator />
      </div>
    </main>
  );
}
