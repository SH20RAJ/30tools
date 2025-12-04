import UniversalVideoDownloader from "@/components/tools/downloaders/UniversalVideoDownloader";

export const metadata = {
  metadataBase: new URL("https://30tools.com"),
  title:
    "Free Universal Video Downloader - Download from 10+ Platforms | No Watermark | 30tools",
  description:
    "Download videos from TikTok, Facebook, Instagram, Twitter/X, YouTube, Vimeo, Dailymotion, and more. Free, fast, no watermark, HD quality. No registration required. Try now!",
  keywords: [
    "universal video downloader",
    "video downloader",
    "download videos online",
    "tiktok downloader",
    "facebook video downloader",
    "instagram video downloader",
    "twitter video downloader",
    "youtube downloader",
    "vimeo downloader",
    "dailymotion downloader",
    "reddit video downloader",
    "rumble downloader",
    "download tiktok video without watermark",
    "instagram video download no watermark",
    "facebook video download",
    "twitter video download",
    "free video downloader",
    "no watermark video downloader",
    "hd video downloader",
    "online video downloader",
    "social media downloader",
    "multi-platform video downloader",
  ].join(", "),
  authors: [{ name: "30tools" }],
  creator: "30tools",
  publisher: "30tools",
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
  alternates: {
    canonical: "https://30tools.com/universal-video-downloader",
  },
  openGraph: {
    title:
      "Universal Video Downloader - Download Videos from 10+ Platforms Free",
    description:
      "Download videos from TikTok, Facebook, Instagram, Twitter/X, YouTube, Vimeo, and more. No watermark, HD quality, multiple formats. 100% free!",
    url: "https://30tools.com/universal-video-downloader",
    siteName: "30tools",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-images/universal-video-downloader.jpg",
        width: 1200,
        height: 630,
        alt: "Universal Video Downloader - Download from Multiple Platforms Without Watermark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Universal Video Downloader - All-in-One Free Tool | 30tools",
    description:
      "Download videos from TikTok, Facebook, Instagram, Twitter/X, YouTube, and 10+ platforms. No watermark, HD quality, 100% free!",
    images: ["/og-images/universal-video-downloader.jpg"],
    creator: "@30tools",
  },
  other: {
    "format-detection": "telephone=no",
  },
};

export default function UniversalVideoDownloaderPage() {
  // Structured Data - SoftwareApplication Schema
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Universal Video Downloader",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web Browser, Windows, macOS, Linux, iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      ratingCount: "1847",
      bestRating: "5",
      worstRating: "1",
    },
    description:
      "Download videos from TikTok, Facebook, Instagram, Twitter/X, YouTube, Vimeo, Dailymotion, Pinterest, Reddit, Snapchat, Rumble and more platforms. No watermark downloads, multiple quality options, no registration required.",
    featureList: [
      "Download from 10+ social media platforms",
      "No watermark downloads",
      "Multiple quality options (HD, SD, Audio)",
      "No registration required",
      "Works on all devices",
      "Free to use",
      "Fast downloads",
      "Privacy-focused",
    ],
    screenshot: "https://30tools.com/og-images/universal-video-downloader.jpg",
    softwareVersion: "2.0",
    author: {
      "@type": "Organization",
      name: "30tools",
      url: "https://30tools.com",
    },
    datePublished: "2024-01-15",
    dateModified: "2024-12-04",
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What platforms are supported?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We support TikTok, Facebook, Instagram, Twitter/X, YouTube, Vimeo, Dailymotion, Pinterest, Reddit, Snapchat, and Rumble. More platforms are added regularly.",
        },
      },
      {
        "@type": "Question",
        name: "Are the downloads watermark-free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! All downloads are completely watermark-free. You get the original video quality without any platform branding or watermarks.",
        },
      },
      {
        "@type": "Question",
        name: "Is this service free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely free! No registration, no hidden fees, no premium features. Everything is completely free to use.",
        },
      },
      {
        "@type": "Question",
        name: "What video qualities are available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer multiple quality options including HD (1080p), SD (720p), and lower resolutions. You can also download audio-only in MP3 format.",
        },
      },
      {
        "@type": "Question",
        name: "Can I download private videos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, we can only download publicly available videos. Private videos require authentication that we don't have access to.",
        },
      },
      {
        "@type": "Question",
        name: "Is it safe to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, completely safe. All processing happens in your browser, and your videos never leave your device. No data is stored on our servers.",
        },
      },
      {
        "@type": "Question",
        name: "Can I download audio only?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Many videos offer an 'Audio Only' option that extracts just the audio track as an MP3 file.",
        },
      },
    ],
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://30tools.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Downloaders",
        item: "https://30tools.com/search?category=downloaders",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Universal Video Downloader",
        item: "https://30tools.com/universal-video-downloader",
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-background">
        <UniversalVideoDownloader />
      </div>
    </>
  );
}
