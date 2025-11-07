import VoiceRecorder from "@/components/tools/audio/VoiceRecorderTool";

export const metadata = {
  title: "Voice Recorder - Professional Online Audio Recording | 30tools",
  description: "Professional voice recorder tool. Free online processing with high-quality results. No registration required, instant results.",
  keywords: [
    // Primary keywords
    "voice recorder",
    "audio recorder",
    "online voice recorder",
    "record voice",
    
    // Long-tail keywords
    "voice recorder online free no download",
    "professional audio recorder browser",
    "record voice high quality online",
    "microphone recorder web application",
    "voice recording tool online free",
    "audio recorder with waveform display",
    "browser based voice recorder",
    "online dictation recorder free",
    "voice memo recorder online",
    "podcast recorder online free",
    
    // Use cases
    "voice recording for podcasts",
    "interview recording online",
    "meeting audio recorder",
    "voice memo recording tool",
    "dictation recording online",
    "lecture recording voice",
    "music recording online",
    "voice note recorder",
    
    // Technical features
    "wav audio recorder online",
    "mp3 voice recorder browser",
    "real time audio waveform",
    "noise reduction voice recording",
    "high fidelity audio recording",
    "stereo voice recording online",
    "audio recording with playback",
    "voice recorder with timer",
    
    // Question-based
    "how to record voice online",
    "best online voice recorder",
    "record audio in browser",
    "free voice recording tool",
    "record voice without app",
    
    // Modifiers
    "unlimited voice recording",
    "professional voice recorder",
    "secure audio recording",
    "instant voice recording",
    "mobile voice recorder"
  ].join(", "),
  authors: [{ name: "30tools Team", url: "https://30tools.com" }],
  creator: "30tools",
  publisher: "30tools",
  category: "Audio Tools",
  classification: "Audio Recording Tools",
  applicationName: "Voice Recorder",
  metadataBase: new URL('https://30tools.com'),
  alternates: {
    canonical: '/voice-recorder',
  },
  openGraph: {
    title: "Voice Recorder - Professional Online Audio Recording | 30tools",
    description: "Record high-quality audio directly in your browser. Professional voice recorder with real-time waveform, multiple formats, and instant download.",
    url: "https://30tools.com/voice-recorder",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/voice-recorder.jpg",
        width: 1200,
        height: 630,
        alt: "Voice Recorder - Professional Online Audio Recording",
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
    title: "Voice Recorder - Professional Online Audio Recording",
    description: "Record high-quality audio directly in your browser! Professional voice recorder with waveform display & instant download. 🎤",
    images: ["/og-images/voice-recorder.jpg"]
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
    'article:section': 'Audio Tools',
    'article:tag': 'voice recording, audio recording, microphone, browser recording'
  },
};

export default function VoiceRecorderPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Voice Recorder - Professional Online Audio Recording",
    "description": "Record high-quality audio directly in your browser with professional features including real-time waveform display, multiple audio formats, noise reduction, and instant download capabilities.",
    "url": "https://30tools.com/voice-recorder",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web Browser",
    "browserRequirements": "Requires JavaScript and microphone access",
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
      "ratingValue": "4.6",
      "ratingCount": "2340",
      "bestRating": "5"
    },
    "featureList": [
      "High-quality audio recording in browser",
      "Real-time waveform visualization",
      "Multiple audio format support (WAV, MP3)",
      "Recording timer and duration display",
      "Pause and resume recording functionality",
      "Instant audio playback and preview",
      "One-click download of recordings",
      "Noise reduction and audio enhancement",
      "Mobile-responsive interface",
      "No software installation required",
      "Privacy-focused local processing",
      "Professional audio quality settings"
    ],
    "applicationSubCategory": "Audio Recorder",
    "keywords": "voice recording, audio recording, microphone, browser recording, online recorder"
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What audio formats does the voice recorder support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our voice recorder supports multiple high-quality audio formats including WAV (uncompressed) and MP3 (compressed). WAV provides the highest quality while MP3 offers smaller file sizes for easy sharing."
        },
      },
      {
        "@type": "Question", 
        "name": "Is my audio recording stored on your servers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, all audio recording and processing happens locally in your browser. Your recordings are never uploaded to our servers, ensuring complete privacy and security of your audio content."
        },
      },
      {
        "@type": "Question",
        "name": "Can I pause and resume recording?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our voice recorder includes pause and resume functionality, allowing you to take breaks during long recordings without losing your progress or having to start over."
        },
      },
      {
        "@type": "Question",
        "name": "What's the maximum recording duration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There's no artificial limit imposed by our tool. The maximum recording duration depends on your device's available storage and browser capabilities, typically allowing for several hours of continuous recording."
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
      <VoiceRecorder />
    </>
  );
}
