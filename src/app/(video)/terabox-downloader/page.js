import TeraboxPlayerTool from "@/components/tools/video/TeraboxPlayerTool";

export const metadata = {
  title: "Terabox Video Downloader Player | Download Terabox Videos...",
  description:
    "Free terabox downloader tool with professional results. No registration required, instant processing, secure & unlimited use.",
  keywords: [
    "terabox downloader",
    "terabox downloader online",
    "free terabox downloader",
    "terabox downloader tool",
    "online terabox downloader free",
    "professional terabox downloader",
    "terabox downloader online tool",
    "best terabox downloader free",
    "terabox downloader web app",
    "terabox downloader utility",
    "video editing online",
    "video processing tool",
    "video optimization",
    "video converter free",
    "video editor professional",
  ].join(", "),
  openGraph: {
    title: "Terabox Video Downloader Player | Download Videos Online",
    description:
      "Download Terabox videos for free with multiple mirrors. Get direct links, embed videos, and stream content without restrictions. Fast, safe, and easy.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Terabox Video Downloader Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Terabox Video Downloader & Player",
    description:
      "Download Terabox videos with direct links. Free, fast, and unlimited downloads.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/terabox-downloader",
  },
  other: {
    "application-name": "30Tools - Terabox Video Downloader",
    "msapplication-TileColor": "#2563eb",
    "theme-color": "#2563eb",
  },
};

// JSON-LD structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Terabox Video Downloader & Player",
  description:
    "Free online tool to download Terabox videos with direct links and embed custom video players",
  url: "https://30tools.com/terabox-downloader",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  permissions: "browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Download Terabox videos for free",
    "Multiple download mirrors",
    "Custom video player embedding",
    "Mobile-responsive design",
    "No registration required",
    "High-quality downloads",
    "Fast download speeds",
    "Cross-browser compatibility",
  ],
  creator: {
    "@type": "Organization",
    name: "30Tools",
    url: "https://30tools.com",
  },
  datePublished: "2025-01-24",
  dateModified: "2025-01-24",
  inLanguage: "en-US",
  isAccessibleForFree: true,
  browserRequirements:
    "Requires JavaScript. Works with Chrome, Firefox, Safari, Edge.",
  softwareHelp: {
    "@type": "CreativeWork",
    name: "How to Download Terabox Videos",
    text: "Paste your Terabox URL, select player options, click generate to get download links and embed code.",
  },
};

export default function TeraboxDownloaderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Terabox Video Downloader & Player
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Paste a Terabox URL to instantly play and download videos. Auto-loading
          with shareable links.
        </p>
      </div>
      <TeraboxPlayerTool />
    </>
  );
}
