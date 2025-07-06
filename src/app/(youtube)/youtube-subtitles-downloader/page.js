import YouTubeSubtitlesDownloader from '@/components/tools/youtube/YouTubeSubtitlesDownloader';

export const metadata = {
  title: 'YouTube Subtitles Downloader - Free Online Tool | 30tools',
  description: 'Download and convert YouTube video subtitles to multiple formats (TXT, SRT, VTT, JSON, CSV). Extract captions from any YouTube video instantly.',
  keywords: [
    'youtube subtitles downloader',
    'download youtube captions',
    'srt downloader',
    'vtt subtitles',
    'youtube transcript',
    'subtitle converter',
    'video captions',
    'youtube srt',
    'subtitle formats',
    'caption extractor'
  ],
  openGraph: {
    title: 'YouTube Subtitles Downloader - Multiple Formats',
    description: 'Download YouTube subtitles in TXT, SRT, VTT, JSON, and CSV formats. Perfect for content creators, educators, and researchers.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube Subtitles Downloader',
    description: 'Download YouTube subtitles in multiple formats instantly',
  }
};

export default function YouTubeSubtitlesDownloaderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <YouTubeSubtitlesDownloader />
    </div>
  );
}
