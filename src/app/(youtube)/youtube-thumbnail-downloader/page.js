import YouTubeThumbnailDownloader from '@/components/tools/youtube/YouTubeThumbnailDownloader';

export const metadata = {
  title: 'YouTube Thumbnail Downloader - 30tools',
  description: 'Download YouTube video thumbnails in HD, FHD, and 4K quality instantly. Free YouTube thumbnail downloader online tool to extract thumbnail images without watermarks. Best thumbnail grabber for all YouTube videos.',
  keywords: [
    'youtube thumbnail downloader',
    'download youtube thumbnail',
    'youtube thumbnail',
    'thumbnail downloader',
    'thumbnail maker',
    'youtube downloader',
    'thumbnail download',
    'youtube thumbnail download',
    'yt thumbnail downloader',
    'youtube thumbnail maker',
    'thumbnail grabber',
    'youtube thumbnail grabber',
    'ai thumbnail maker',
    'download thumbnail youtube',
    'thumbnail maker free',
    'youtube image',
    'best youtube downloader',
    'youtube downloaders',
    'video thumbnail',
    'online thumbnail maker',
    'get youtube thumbnail',
    'youtube thumbnails',
    'download yt thumbnail',
    'youtube thumbnail downloader online',
    'thumbnail maker ai',
    'free thumbnail maker',
    'thumbnail ai',
    'youtube video thumbnail download',
    'baixar thumbnail youtube',
    'descargar miniaturas de youtube',
    'tải thumbnail youtube',
    'youtube サムネ ダウンロード',
    'youtube jpg',
    'youtube pic',
    'create thumbnail for youtube',
    'best youtube downloader for pc',
    'youtube downloader for pc',
    'youtube downloader free download',
    'youtube downloader app',
    'ai thumbnail generator free',
    'youtube video',
    'youtube com',
    'youtube.com',
    'youtube tv',
    'youtube videos',
    'www.youtube.com',
    'you tube',
    'youtub',
    'youtuber',
    'tube'
  ],
  openGraph: {
    title: 'YouTube Thumbnail Downloader - Download HD Thumbnails Free',
    description: 'Download YouTube video thumbnails in HD, FHD, and 4K quality instantly. Free YouTube thumbnail downloader online with no watermarks. Best thumbnail grabber tool.',
    type: 'website',
    url: 'https://30tools.com/youtube-thumbnail-downloader',
    images: [
      {
        url: 'https://30tools.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'YouTube Thumbnail Downloader Tool'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube Thumbnail Downloader - Download HD Thumbnails Free',
    description: 'Download YouTube video thumbnails in HD, FHD, and 4K quality instantly. Free YouTube thumbnail downloader online with no watermarks.',
    images: ['https://30tools.com/og-image.jpg']
  },
  alternates: {
    canonical: 'https://30tools.com/youtube-thumbnail-downloader'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  'name': 'YouTube Thumbnail Downloader',
  'description': 'Download YouTube video thumbnails in HD, FHD, and 4K quality instantly. Best free YouTube thumbnail downloader and grabber tool online.',
  'url': 'https://30tools.com/youtube-thumbnail-downloader',
  'applicationCategory': 'Multimedia',
  'operatingSystem': 'Any',
  'offers': {
    '@type': 'Offer',
    'price': '0',
    'priceCurrency': 'USD'
  },
  'featureList': [
    'HD/FHD/4K quality downloads',
    'Multiple thumbnail sizes',
    'Bulk download support',
    'No watermarks',
    'Fast processing'
  ]
};

export default function YouTubeThumbnailDownloaderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <YouTubeThumbnailDownloader />
    </>
  );
}
