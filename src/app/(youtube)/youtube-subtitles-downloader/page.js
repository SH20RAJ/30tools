import YouTubeSubtitlesDownloader from '@/components/tools/youtube/YouTubeSubtitlesDownloader';

export const metadata = {
  title: "Youtube Subtitles Downloader - Free Tool | 30tools",
  description: 'Download and convert YouTube video subtitles to multiple formats (TXT, SRT, VTT, JSON, CSV). Extract captions from any YouTube video instantly.',
  keywords: [
    "youtube subtitles downloader",
    "youtube subtitles downloader online",
    "free youtube subtitles downloader",
    "youtube subtitles downloader tool",
    "online youtube subtitles downloader free",
    "professional youtube subtitles downloader",
    "youtube subtitles downloader online tool",
    "best youtube subtitles downloader free",
    "youtube subtitles downloader web app",
    "youtube subtitles downloader utility",
    "online tool",
    "free utility",
    "web application"
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
,
  alternates: {
    canonical: "https://30tools.com/youtube-subtitles-downloader"
  }
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Youtube Subtitles Downloader",
  "description": "Professional youtube subtitles downloader tool. Free online processing with high-quality results. No registration required, instant results.",
  "url": "https://30tools.com/youtube-subtitles-downloader",
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

export default function YouTubeSubtitlesDownloaderPage() {
  return (
        <>
            
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <YouTubeSubtitlesDownloader />
    </div>
  );
}
