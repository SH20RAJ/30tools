import YouTubeVideoAnalyticsTool from '@/components/tools/youtube/YouTubeVideoAnalyticsTool';

export const metadata = {
  title: 'YouTube Video Analytics - Analyze Video Performance | 30tools',
  description: 'Analyze YouTube video performance, get detailed analytics, view counts, engagement rates, and optimization suggestions for your YouTube videos.',
  keywords: [
    "youtube analytics",
    "youtube analytics online",
    "free youtube analytics",
    "youtube analytics tool",
    "online youtube analytics free",
    "professional youtube analytics",
    "youtube analytics online tool",
    "best youtube analytics free",
    "youtube analytics web app",
    "youtube analytics utility",
    "online tool",
    "free utility",
    "web application"
  ],
  openGraph: {
    title: 'YouTube Video Analytics - Analyze Video Performance | 30tools',
    description: 'Analyze YouTube video performance, get detailed analytics, view counts, engagement rates, and optimization suggestions for your YouTube videos.',
    type: 'website',
    url: 'https://30tools.com/youtube-video-analytics',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube Video Analytics - Analyze Video Performance | 30tools',
    description: 'Analyze YouTube video performance, get detailed analytics, view counts, engagement rates, and optimization suggestions for your YouTube videos.',
  },
  canonical: 'https://30tools.com/youtube-video-analytics',
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Youtube Analytics",
  "description": "Professional youtube analytics tool. Free online processing with high-quality results. No registration required, instant results.",
  "url": "https://30tools.com/youtube-analytics",
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
  },
};

export default function YouTubeVideoAnalyticsPage() {
  return <YouTubeVideoAnalyticsTool />;
}