import WhatsAppDPDownloaderTool from '@/components/tools/utilities/WhatsAppDPDownloaderTool';

export const metadata = {
  title: 'WhatsApp DP Downloader - Download Profile Pictures | 30tools',
  description: 'Download WhatsApp profile pictures in high quality. Free WhatsApp DP downloader tool to save profile photos from any WhatsApp contact.',
  keywords: [
    'whatsapp dp downloader',
    'whatsapp profile picture downloader',
    'download whatsapp dp',
    'whatsapp photo downloader',
    'save whatsapp profile picture',
    'whatsapp dp saver',
    'profile picture downloader',
    'whatsapp image downloader'
  ],
  openGraph: {
    title: 'WhatsApp DP Downloader - Download Profile Pictures | 30tools',
    description: 'Download WhatsApp profile pictures in high quality. Free WhatsApp DP downloader tool to save profile photos from any WhatsApp contact.',
    type: 'website',
    url: 'https://30tools.com/whatsapp-dp-downloader',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsApp DP Downloader - Download Profile Pictures | 30tools',
    description: 'Download WhatsApp profile pictures in high quality. Free WhatsApp DP downloader tool to save profile photos from any WhatsApp contact.',
  },
  canonical: 'https://30tools.com/whatsapp-dp-downloader',
};

export default function WhatsAppDPDownloaderPage() {
  return <WhatsAppDPDownloaderTool />;
}