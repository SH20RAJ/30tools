import YouTubeChannelIDFinderTool from '@/components/tools/youtube/YouTubeChannelIDFinderTool';

export const metadata = {
  title: 'YouTube Channel ID Finder - Get Channel ID | 30tools',
  description: 'Find YouTube channel ID from channel URL or name. Get channel statistics, subscriber count, and detailed channel information with our finder tool.',
  keywords: [
    'youtube channel id finder',
    'get youtube channel id',
    'find youtube channel id',
    'youtube channel finder',
    'channel id lookup',
    'youtube channel search',
    'channel id extractor',
    'youtube channel info',
    'channel statistics',
    'youtube api channel id'
  ],
  openGraph: {
    title: 'YouTube Channel ID Finder - Get Channel ID | 30tools',
    description: 'Find YouTube channel ID from channel URL or name. Get channel statistics, subscriber count, and detailed channel information with our finder tool.',
    type: 'website',
    url: 'https://30tools.com/youtube-channel-id-finder',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube Channel ID Finder - Get Channel ID | 30tools',
    description: 'Find YouTube channel ID from channel URL or name. Get channel statistics, subscriber count, and detailed channel information with our finder tool.',
  },
  canonical: 'https://30tools.com/youtube-channel-id-finder',
};

export default function YouTubeChannelIDFinderPage() {
  return <YouTubeChannelIDFinderTool />;
}