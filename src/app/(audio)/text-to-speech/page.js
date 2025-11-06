import TextToSpeechTool from '@/components/tools/audio/TextToSpeechTool'

export const metadata = {
  title: 'Text to Speech Converter - Free Online TTS Generator',
  description: "Professional text to speech to Process text instantly. Free online text tool with advanced features. Perfect for writers, students & professionals.",
  keywords: 'text to speech, tts, voice synthesis, speech generator, text reader, accessibility tool, voice over, audio converter, speech synthesis, natural voice',
  openGraph: {
    title: 'Free Text to Speech Converter - Natural Voice Synthesis',
    description: 'Convert any text to natural-sounding speech with our free TTS tool. Multiple voices, languages, and customizable settings available.',
    type: 'website',
    url: 'https://30tools.com/text-to-speech',
    images: [
      {
        url: 'https://30tools.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Text to Speech Converter Tool'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Text to Speech Converter - Natural Voice Synthesis',
    description: 'Convert any text to natural-sounding speech with our free TTS tool. Multiple voices and languages supported.',
    images: ['https://30tools.com/og-image.jpg']
  },
  alternates: {
    canonical: 'https://30tools.com/text-to-speech'
  }
}

export default function TextToSpeechPage() {
  return (
    <>
      <TextToSpeechTool />
      
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Text to Speech Converter',
            description: 'Free online text-to-speech converter with natural voice synthesis',
            url: 'https://30tools.com/text-to-speech',
            applicationCategory: 'MultimediaApplication',
            operatingSystem: 'Any',
            permissions: 'browser',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD'
            },
            featureList: [
              'Multiple voice options',
              'Language support',
              'Adjustable speech rate',
              'Pitch control',
              'Volume adjustment',
              'Real-time playback',
              'Pause and resume',
              'Browser-based processing'
            ],
            creator: {
              '@type': 'Organization',
              name: '30tools',
              url: 'https://30tools.com'
            },
            about: {
              '@type': 'Thing',
              name: 'Text-to-Speech Technology',
              description: 'Technology that converts written text into spoken words using synthetic speech'
            }
          })
        }}
      />
    </>
  )
}
