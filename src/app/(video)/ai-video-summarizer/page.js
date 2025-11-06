import AiVideoSummarizerTool from '@/components/tools/video/AiVideoSummarizerTool'

export const metadata = {
  title: 'AI Video Summarizer - Get Instant Video Summaries | 30tools',
  description: 'Free AI-powered video summarizer that creates instant summaries of long videos, meetings, lectures, and presentations. Save time with automated video analysis.',
  keywords: 'ai video summarizer, video summary, ai transcript, meeting summary, lecture summary, video analysis, ai video tool, automatic video summary',
  openGraph: {
    title: 'AI Video Summarizer - Instant Video Summaries',
    description: 'Get AI-powered summaries of long videos, meetings, and lectures. Save time with automatic video analysis and key insight extraction.',
    type: 'website',
    url: 'https://30tools.com/ai-video-summarizer',
    images: [
      {
        url: 'https://30tools.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Video Summarizer Tool'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Video Summarizer - Instant Video Summaries',
    description: 'Get AI-powered summaries of long videos, meetings, and lectures. Save time with automatic video analysis.',
    images: ['https://30tools.com/og-image.jpg']
  },
  alternates: {
    canonical: 'https://30tools.com/ai-video-summarizer'
  }
}


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Ai Video Summarizer",
  "description": "Free ai video summarizer tool with professional results. No registration required, instant processing, secure & unlimited use.",
  "url": "https://30tools.com/ai-video-summarizer",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com"
  }
};

export default function AiVideoSummarizerPage() {
  return <AiVideoSummarizerTool />
}
