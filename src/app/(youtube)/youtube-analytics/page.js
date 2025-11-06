import YouTubeVideoAnalyticsTool from '@/components/tools/youtube/YouTubeVideoAnalyticsTool';

export const metadata = {
  title: 'YouTube Video Analytics - Analyze Video Performance | 30tools',
  description: 'Analyze YouTube video performance, get detailed analytics, view counts, engagement rates, and optimization suggestions for your YouTube videos.',
  keywords: [
    'youtube video analytics',
    'youtube analytics tool',
    'youtube video analyzer',
    'youtube performance tracker',
    'youtube video stats',
    'youtube metrics',
    'youtube insights',
    'video performance analysis',
    'youtube seo analyzer',
    'youtube optimization'
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

export default function YouTubeVideoAnalyticsPage() {
  return <YouTubeVideoAnalyticsTool />;
}