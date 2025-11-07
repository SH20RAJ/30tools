import WhatsAppDPDownloaderTool from '@/components/tools/utilities/WhatsAppDPDownloaderTool';

export const metadata = {
  title: 'WhatsApp DP Downloader - Download Profile Pictures | 30tools',
  description: 'Download WhatsApp profile pictures in high quality. Free WhatsApp DP downloader tool to save profile photos from any WhatsApp contact.',
  keywords: [
    "whatsapp dp downloader",
    "whatsapp dp downloader online",
    "free whatsapp dp downloader",
    "whatsapp dp downloader tool",
    "online whatsapp dp downloader free",
    "professional whatsapp dp downloader",
    "whatsapp dp downloader online tool",
    "best whatsapp dp downloader free",
    "whatsapp dp downloader web app",
    "whatsapp dp downloader utility",
    "online tool",
    "free utility",
    "web application"
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


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Whatsapp Dp Downloader",
  "description": "Professional whatsapp dp downloader tool. Free online processing with high-quality results. No registration required, instant results.",
  "url": "https://30tools.com/whatsapp-dp-downloader",
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
  },
};

export default function WhatsAppDPDownloaderPage() {
  return <WhatsAppDPDownloaderTool />;
}