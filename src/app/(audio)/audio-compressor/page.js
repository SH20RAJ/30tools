import AudioCompressorTool from '@/components/tools/audio/AudioCompressorTool';

export const metadata = {
  title: "Free Audio Compressor - Reduce MP3, WAV File Size",
  description: "Compress audio files online for free. Reduce MP3, WAV, FLAC, OGG file sizes by up to 90% while maintaining quality. Perfect for email, storage, and web use.",
  keywords: "audio compressor, compress audio online, reduce audio file size, mp3 compressor, wav compressor, audio file compressor, compress audio free, reduce mp3 size",
  alternates: {
    canonical: "https://30tools.com/audio-compressor"
  },
  openGraph: {
    title: "Free Audio Compressor Online - Reduce File Size",
    description: "Compress audio files online for free. Reduce MP3, WAV, FLAC file sizes by up to 90% while maintaining quality.",
    url: "https://30tools.com/audio-compressor",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/audio-compressor.jpg",
        width: 1200,
        height: 630,
        alt: "Free Audio Compressor Tool - 30tools"
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Free Audio Compressor Online - Reduce File Size",
    description: "Compress audio files online for free. Reduce MP3, WAV, FLAC file sizes while maintaining quality.",
    images: ["/og-images/audio-compressor.jpg"],
    creator: '@30tools'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function AudioCompressorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Audio Compressor - Free Online Audio File Reducer",
    "description": "Compress audio files online for free. Reduce MP3, WAV, FLAC, OGG file sizes by up to 90% while maintaining audio quality.",
    "url": "https://30tools.com/audio-compressor",
    "applicationCategory": "WebApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "30tools",
      "url": "https://30tools.com"
    },
    "featureList": [
      "Compress MP3, WAV, FLAC, OGG files",
      "Adjustable quality settings",
      "Batch audio compression",
      "Maintain audio quality",
      "No file size limits",
      "Client-side processing",
      "No watermarks added",
      "Mobile-friendly interface"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "892"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AudioCompressorTool />
    </>
  );
}
