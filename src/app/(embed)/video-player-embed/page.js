import VideoPlayerEmbedClean from './VideoPlayerEmbedClean';

export const metadata = {
  title: "Video Player Embed - Free Online Tool | Professional Results",
  description: "Free video player embed tool with professional results. No registration required, instant processing, secure & unlimited use.",
  keywords: [
    "video player embed",
    "video player embed online",
    "free video player embed",
    "video player embed tool",
    "online video player embed free",
    "professional video player embed",
    "video player embed online tool",
    "best video player embed free",
    "video player embed web app",
    "video player embed utility",
    "video editing online",
    "video processing tool",
    "video optimization",
    "video converter free",
    "video editor professional"
  ].join(", "),
  robots: "noindex, nofollow"
,
  openGraph: {
    title: "Video Player Embed - Free Online Tool | 30tools",
    description: "Free video player embed tool with professional results. No registration required, instant processing, secure & unlimited use.",
    url: "https://30tools.com/video-player-embed",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/video-player-embed.jpg",
        width: 1200,
        height: 630,
        alt: "Video Player Embed - Free Online Tool | 30tools"
      }
    ],
    type: "website"
  }
,
  twitter: {
    card: "summary_large_image",
    title: "Video Player Embed - Free Online Tool | 30tools",
    description: "Free video player embed tool with professional results. No registration required, instant processing, secure & unlimited use.",
    images: ["/og-images/video-player-embed.jpg"],
    creator: "@30tools"
  }
,
  alternates: {
    canonical: "https://30tools.com/video-player-embed"
  }
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Video Player Embed",
  "description": "Free video player embed tool with professional results. No registration required, instant processing, secure & unlimited use.",
  "url": "https://30tools.com/video-player-embed",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com"
  }
};

export default function VideoPlayerEmbedPage() {
  return <VideoPlayerEmbedClean />;
}
