import VideoTrimmer from "@/components/tools/video/VideoTrimmerTool";

export const metadata = {
  title: "Video Trimmer - Free Online Video Tool | High-Quality Results",
  description: "Professional video trimmer tool. Process videos online for free with high quality output. No watermarks, no registration required. Fast & secure processing.",
  keywords: [
    // Primary keywords
    "video trimmer",
    "video cutter",
    "trim video online",
    "cut video",
    
    // Long-tail keywords
    "video trimmer online free no watermark",
    "professional video cutter browser",
    "trim video clips online free",
    "cut video segments online tool",
    "video editor trim and cut",
    "online video trimmer no download",
    "browser video cutter tool",
    "frame accurate video trimmer",
    "precision video cutting online",
    "video clip trimmer free",
    
    // Use cases
    "trim video for social media",
    "cut video clips for youtube",
    "video trimmer for tiktok",
    "instagram video cutter",
    "remove parts from video",
    "shorten video length online",
    "extract video segments",
    "crop video duration",
    
    // Format specific
    "mp4 video trimmer online",
    "mov video cutter free",
    "webm video trimmer tool",
    "avi video trimmer online",
    "mkv video cutter browser",
    "trim video without quality loss",
    "lossless video trimming",
    "high quality video cutting",
    
    // Technical features
    "timeline video editor",
    "drag and drop video trimmer",
    "preview before cutting video",
    "batch video trimming",
    "custom start end video trim",
    "second precise video cutting",
    "fast video trimmer online",
    "secure video editing browser",
    
    // Question-based
    "how to trim video online",
    "best free video trimmer",
    "cut video without software",
    "trim video in browser",
    "remove video segments online",
    
    // Modifiers
    "unlimited video trimming",
    "professional video trimmer",
    "fast video cutting",
    "easy video trimmer",
    "mobile video cutter"
  ].join(", "),
  authors: [{ name: "30tools Team", url: "https://30tools.com" }],
  creator: "30tools",
  publisher: "30tools",
  category: "Video Tools",
  classification: "Video Editing Tools",
  applicationName: "Video Trimmer",
  metadataBase: new URL('https://30tools.com'),
  alternates: {
    canonical: '/video-trimmer',
  },
  openGraph: {
    title: "Video Trimmer - Professional Online Video Cutter & Editor | 30tools",
    description: "Trim and cut videos online with precision. Professional video trimmer with timeline editor, frame-accurate cutting, and instant preview.",
    url: "https://30tools.com/video-trimmer",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/video-trimmer.jpg",
        width: 1200,
        height: 630,
        alt: "Video Trimmer - Professional Online Video Cutter & Editor",
        type: "image/jpeg"
      },
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@30tools',
    creator: '@30tools',
    title: "Video Trimmer - Professional Online Video Cutter & Editor",
    description: "Trim and cut videos online with precision! Professional video trimmer with timeline editor & frame-accurate cutting. ✂️",
    images: ["/og-images/video-trimmer.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'article:author': '30tools Team',
    'article:section': 'Video Tools',
    'article:tag': 'video editing, video trimming, video cutting, online editor'
  },
};

export default function VideoTrimmerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Video Trimmer - Professional Online Video Cutter & Editor",
    "description": "Trim and cut videos online with precision using our professional video trimmer. Features timeline editor, frame-accurate cutting, multiple format support, and instant preview capabilities.",
    "url": "https://30tools.com/video-trimmer",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web Browser",
    "browserRequirements": "Requires JavaScript and modern browser",
    "softwareVersion": "2.0",
    "datePublished": "2024-01-01",
    "dateModified": "2024-12-20",
    "author": {
      "@type": "Organization",
      "name": "30tools",
      "url": "https://30tools.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "3120",
      "bestRating": "5"
    },
    "featureList": [
      "Frame-accurate video trimming",
      "Timeline-based video editor",
      "Multiple video format support (MP4, MOV, WebM, AVI)",
      "Real-time video preview",
      "Drag and drop interface",
      "Custom start and end time selection",
      "Lossless video cutting",
      "Instant video processing",
      "No watermarks or file size limits",
      "Mobile-responsive interface",
      "Privacy-focused local processing",
      "Professional quality output"
    ],
    "applicationSubCategory": "Video Editor",
    "keywords": "video trimming, video cutting, video editing, online video editor"
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What video formats does the trimmer support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our video trimmer supports all major video formats including MP4, MOV, WebM, AVI, MKV, and more. The output maintains the same format and quality as your original video."
        },
      },
      {
        "@type": "Question", 
        "name": "Is the video trimming process lossless?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our video trimmer uses advanced algorithms to cut videos without re-encoding, ensuring no quality loss during the trimming process. Your original video quality is preserved."
        },
      },
      {
        "@type": "Question",
        "name": "How precise can I be with the trimming?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our video trimmer offers frame-accurate precision, allowing you to trim videos down to the exact frame. You can specify start and end times with millisecond precision."
        },
      },
      {
        "@type": "Question",
        "name": "Are there any file size limitations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There are no artificial file size limits imposed by our tool. The only limitations are your device's available memory and browser capabilities, typically supporting videos up to several GB."
        },
      },
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <VideoTrimmer />
    </>
  );
}
