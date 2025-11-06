import YouTubeTrendsAnalyzerTool from '@/components/tools/youtube/YouTubeTrendsAnalyzerTool';

export const metadata = {
  title: 'YouTube Trends - Trending Videos & Analytics | 30tools',
  description: 'Discover trending YouTube videos, analyze viral content, and track YouTube trends by category and region. Get insights into popular YouTube content.',
  keywords: [
    'youtube trends',
    'trending youtube videos',
    'youtube analytics',
    'viral youtube content',
    'youtube trending now',
    'youtube popular videos',
    'youtube trend analysis',
    'youtube statistics',
    'youtube insights',
    'trending video analyzer'
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

export default function YouTubeTrendsPage() {
  return <YouTubeTrendsAnalyzerTool />;
}