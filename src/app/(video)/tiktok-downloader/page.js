import TikTokDownloaderTool from '@/components/tools/video/TikTokDownloaderTool'

export const metadata = {
  title: 'TikTok Video Downloader - Download Without Watermark | 30tools',
  description: 'Free TikTok video downloader. Download TikTok videos without watermarks in HD quality. Fast, safe, and no registration required.',
  keywords: 'tiktok downloader, download tiktok video, tiktok without watermark, tiktok video saver, tiktok mp4 download, save tiktok video',
  openGraph: {
    title: 'TikTok Video Downloader - No Watermark Downloads',
    description: 'Download TikTok videos without watermarks in HD quality. Fast, free, and safe TikTok video downloader.',
    type: 'website',
    url: 'https://30tools.com/tiktok-downloader',
    images: [
      {
        url: 'https://30tools.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TikTok Video Downloader'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TikTok Video Downloader - No Watermark Downloads',
    description: 'Download TikTok videos without watermarks in HD quality. Fast, free, and safe.',
    images: ['https://30tools.com/og-image.jpg']
  },
  alternates: {
    canonical: 'https://30tools.com/tiktok-downloader'
  }
}

export default function TikTokDownloaderPage() {
  return <TikTokDownloaderTool />
}
