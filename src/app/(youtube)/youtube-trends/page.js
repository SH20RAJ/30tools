import YouTubeTrendsAnalyzerTool from '@/components/tools/youtube/YouTubeTrendsAnalyzerTool';

export const metadata = {
  title: 'YouTube Trends - Trending Videos & Analytics | 30tools',
  description: 'Discover trending YouTube videos, analyze viral content, and track YouTube trends by category and region. Get insights into popular YouTube content.',
  keywords: [
    "youtube trends",
    "youtube trends online",
    "free youtube trends",
    "youtube trends tool",
    "online youtube trends free",
    "professional youtube trends",
    "youtube trends online tool",
    "best youtube trends free",
    "youtube trends web app",
    "youtube trends utility",
    "online tool",
    "free utility",
    "web application"
  ],
  openGraph: {
    title: 'YouTube Trends - Trending Videos & Analytics | 30tools',
    description: 'Discover trending YouTube videos, analyze viral content, and track YouTube trends by category and region. Get insights into popular YouTube content.',
    type: 'website',
    url: 'https://30tools.com/youtube-trends',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube Trends - Trending Videos & Analytics | 30tools',
    description: 'Discover trending YouTube videos, analyze viral content, and track YouTube trends by category and region. Get insights into popular YouTube content.',
  },
  canonical: 'https://30tools.com/youtube-trends',
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Youtube Trends",
  "description": "Professional youtube trends tool. Free online processing with high-quality results. No registration required, instant results.",
  "url": "https://30tools.com/youtube-trends",
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

export default function YouTubeTrendsPage() {
  return <YouTubeTrendsAnalyzerTool />;
}