import YouTubeSummaryGenerator from '@/components/tools/youtube/YouTubeSummaryGenerator';

export const metadata = {
  title: 'AI YouTube Summary Generator - Free Online Tool | 30tools',
  description: 'Generate intelligent AI summaries of YouTube videos. Extract key insights, topics, and takeaways from any video using advanced artificial intelligence.',
  keywords: [
    'youtube summary generator',
    'ai video summary',
    'youtube ai summary',
    'video content analysis',
    'youtube insights',
    'video summarizer',
    'ai transcript summary',
    'youtube key points',
    'video analysis tool',
    'content extraction'
  ],
  openGraph: {
    title: 'AI YouTube Summary Generator - Intelligent Video Analysis',
    description: 'Transform any YouTube video into comprehensive summaries with AI. Perfect for researchers, students, and content creators.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI YouTube Summary Generator',
    description: 'Generate intelligent summaries of YouTube videos with AI',
  }
};

export default function YouTubeSummaryGeneratorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <YouTubeSummaryGenerator />
    </div>
  );
}
