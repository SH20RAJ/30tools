import VideoWatermarkRemoverTool from "@/components/tools/video/VideoWatermarkRemoverTool";

export const metadata = {
  title: "Video Watermark Remover - Remove Watermarks from Videos",
  description:
    "Remove watermarks from videos using AI technology. Clean your videos from logos, text overlays, and watermarks while preserving quality.",
  keywords:
    "video watermark remover, remove watermark from video, ai watermark removal, clean video, remove logo from video, video editor",
  openGraph: {
    title: "Video Watermark Remover - AI-Powered Watermark Removal",
    description:
      "Remove watermarks from videos using advanced AI. Clean your videos while preserving quality and original content.",
    type: "website",
    url: "https://30tools.com/video-watermark-remover",
    images: [
      {
        url: "https://30tools.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Video Watermark Remover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Watermark Remover - AI-Powered Watermark Removal",
    description:
      "Remove watermarks from videos using advanced AI technology. Clean videos while preserving quality.",
    images: ["https://30tools.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://30tools.com/video-watermark-remover",
  },
};

const _jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Video Watermark Remover",
  description:
    "Free video watermark remover tool with professional results. No registration required, instant processing, secure & unlimited use.",
  url: "https://30tools.com/video-watermark-remover",
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

export default function VideoWatermarkRemoverPage() {
  return <VideoWatermarkRemoverTool />;
}
