import VideoConverter from "@/components/tools/video/VideoConverterTool";

export const metadata = {
  title: "Video Converter - Convert Video Formats | 30tools",
  description:
    "Professional video converter tool. Process videos online for free with high quality output. No watermarks, no registration required. Fast & secure processing.",
  keywords:
    "video converter, convert video format, mp4 converter, avi converter, mov converter, video format",
  openGraph: {
    title: "Video Converter - Convert Video Formats | 30tools",
    description: "Convert videos between different formats online.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Video Converter - Free Online Video Tool | High-Quality Results",
    description:
      "Professional video converter tool. Process videos online for free with high quality output. No watermarks, no registration required. Fast & secure processing.",
    images: ["/og-images/video-converter.jpg"],
    creator: "@30tools",
  },

  alternates: {
    canonical: "https://30tools.com/video-converter",
  },
};

const _jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Video Converter",
  description:
    "Professional video converter tool. Process videos online for free with high quality output. No watermarks, no registration required. Fast & secure processing.",
  url: "https://30tools.com/video-converter",
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

export default function VideoConverterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Video Converter</h1>
      <VideoConverter />
    </div>
  );
}
