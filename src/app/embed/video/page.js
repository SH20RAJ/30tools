import { Suspense } from 'react';
import EmbedVideoPlayer from './EmbedVideoPlayer';

export const metadata = {
  title: "Video - Free Online Tool | Professional Results",
  description: "Professional video with instant results. Free online tool for students, professionals, and businesses worldwide. Used by millions worldwide for reliable, fast results.",
  keywords: [
    "video",
    "video online",
    "free video",
    "video tool",
    "online video free",
    "professional video",
    "video online tool",
    "best video free",
    "video web app",
    "video utility",
    "online tool",
    "free utility",
    "web application"
  ].join(", "),
  robots: 'noindex, nofollow'

  openGraph: {
    title: "Video - Free Online Tool | Professional Results",
    description: "Professional video tool. Free online processing with high-quality results. No registration required, instant results.",
    url: "https://30tools.com/video",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/video.jpg",
        width: 1200,
        height: 630,
        alt: "Video - Free Online Tool | Professional Results"
      },
    ],
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Video - Free Online Tool | Professional Results",
    description: "Professional video tool. Free online processing with high-quality results. No registration required, instant results.",
    images: ["/og-images/video.jpg"],
    creator: "@30tools"
  },

  alternates: {
    canonical: "https://30tools.com/video"
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Video",
  "description": "Professional video tool. Free online processing with high-quality results. No registration required, instant results.",
  "url": "https://30tools.com/video",
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
  },
};

export default function EmbedVideoPage() {
  return (
        <>
            
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="min-h-screen bg-black">
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-white">Loading video...</div>
        </div>
      }>
        <EmbedVideoPlayer />
      </Suspense>
    </div>        </>
    );
}