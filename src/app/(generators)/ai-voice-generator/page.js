import AIVoiceGeneratorTool from '@/components/tools/generators/AIVoiceGeneratorTool';

export const metadata = {
  title: "AI Voice Generator - Free Text to Speech Tool | 30tools",
  description: "Convert text to natural-sounding speech with AI. Enter your text and download the audio instantly. No signup required.",
  keywords: "ai voice generator, text to speech, ai audio, generate voice, speech ai, free ai voice generator",
  canonical: "https://30tools.com/ai-voice-generator",
  openGraph: {
    title: "AI Voice Generator - Free Text to Speech Tool",
    description: "Convert text to natural-sounding speech with AI. Enter your text and download the audio instantly.",
    url: "https://30tools.com/ai-voice-generator",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/ai-voice-generator.jpg",
        width: 1200,
        height: 630,
        alt: "AI Voice Generator Tool - 30tools"
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Voice Generator - Free Text to Speech Tool",
    description: "Convert text to natural-sounding speech with AI. Enter your text and download the audio instantly.",
    images: ["/og-images/ai-voice-generator.jpg"],
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

export default function AIVoiceGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI Voice Generator - Free Text to Speech Tool",
    "description": "Convert text to natural-sounding speech with AI. Enter your text and download the audio instantly. No signup required.",
    "url": "https://30tools.com/ai-voice-generator",
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
      "Text-to-speech AI",
      "Multiple voices",
      "Download MP3",
      "No signup required",
      "Minimal UI"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2847"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AIVoiceGeneratorTool />
    </>
  );
} 