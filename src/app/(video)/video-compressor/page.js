import VideoCompressorTool from "@/components/tools/video/VideoCompressorTool";

export const metadata = {
  title: "Free Video Compressor - Reduce Video File Size by 80%",
  description:
    "Compress videos online for free. Reduce file sizes by up to 80% without quality loss. Perfect for WhatsApp and social media.",
  keywords:
    "video compressor, compress video online, reduce video file size, free video compressor, compress video for whatsapp, video size reducer, compress mp4 online, video optimizer, compress video for whatsapp online free, reduce video size without losing quality, video compressor for email attachment, compress video online no watermark, bulk video compressor free",
  openGraph: {
    title: "Free Video Compressor Online - Reduce Video File Size by 80%",
    description:
      "Compress videos online for free. Reduce file sizes by up to 80% without quality loss. Perfect for WhatsApp and social media.",
    url: "https://30tools.com/video-compressor",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/video-compressor.jpg",
        width: 1200,
        height: 630,
        alt: "Free Video Compressor Online",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Video Compressor Online - Reduce Video File Size by 80%",
    description:
      "Compress videos online for free. Perfect for WhatsApp, social media, and web optimization.",
    images: ["/og-images/video-compressor.jpg"],
    creator: "@30tools",
  },
  alternates: {
    canonical: "https://30tools.com/video-compressor",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Video Tools",
  other: {
    "application-name": "30tools",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Video Compressor - 30tools",
    "format-detection": "telephone=no",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#000000",
  },
};

const _jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Video Compressor",
  description:
    "Professional video compressor tool. Process videos online for free with high quality output. No watermarks, no registration required. Fast & secure processing.",
  url: "https://30tools.com/video-compressor",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  permissions: "browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: "30tools",
    url: "https://30tools.com",
  },
};

export default function VideoCompressorPage() {
  return <VideoCompressorTool />;
}
