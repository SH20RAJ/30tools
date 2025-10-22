import YouTubeThumbnailDownloader from '@/components/tools/youtube/YouTubeThumbnailDownloader';

export const metadata = {
  title: 'YouTube Thumbnail Downloader - Download HD Thumbnails Free | 30Tools',
  description: 'Download YouTube video thumbnails in HD, FHD, and 4K quality instantly. Free online tool to extract YouTube thumbnail images without watermarks.',
  keywords: [
    'youtube thumbnail downloader',
    'download youtube thumbnail',
    'youtube thumbnail extractor',
    'youtube image downloader',
    'thumbnail downloader hd',
    'youtube thumbnail hd download',
    'youtube thumbnail 4k download',
    'download youtube thumbnail online free',
    'youtube thumbnail downloader without watermark',
    'bulk youtube thumbnail downloader'
  ],
  openGraph: {
    title: 'YouTube Thumbnail Downloader - Download HD Thumbnails Free',
    description: 'Download YouTube video thumbnails in HD, FHD, and 4K quality instantly. Free online tool with no watermarks.',
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
    description: 'Download YouTube video thumbnails in HD, FHD, and 4K quality instantly. Free online tool with no watermarks.',
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
  'description': 'Download YouTube video thumbnails in HD, FHD, and 4K quality instantly',
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
