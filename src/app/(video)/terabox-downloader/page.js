import TeraboxPlayerTool from '@/components/tools/video/TeraboxPlayerTool';

export const metadata = {
  title: 'Terabox Video Downloader Player | Download Terabox Videos...',
  description: 'Download Terabox videos for free with our online downloader. Get direct download links, embed videos with custom players, and stream Terabox content without limits. Fast, safe, and easy to use.',
  keywords: [
    // Primary keywords
    'terabox video downloader',
    'download terabox videos',
    'terabox downloader free',
    'terabox video player',
    'terabox online downloader',
    
    // Long-tail keywords
    'how to download videos from terabox',
    'terabox video downloader without login',
    'free terabox downloader online',
    'download terabox movies free',
    'terabox direct download link',
    'terabox video downloader no limit',
    'embed terabox videos website',
    'terabox player generator',
    'terabox video streaming',
    'download large files from terabox',
    
    // Alternative spellings and variations
    'tera box video downloader',
    'terra box downloader',
    'terabox file downloader',
    'terabox mp4 downloader',
    'terabox movie downloader',
    'terabox video extractor',
    'terabox link downloader',
    'terabox video converter',
    'terabox downloader tool',
    'terabox video saver',
    
    // Question-based keywords
    'how to download from terabox',
    'can i download terabox videos',
    'terabox download not working',
    'fastest terabox downloader',
    'best terabox video downloader',
    'safe terabox downloader',
    'terabox downloader for mobile',
    'terabox downloader chrome',
    'terabox downloader android',
    'terabox downloader ios',
    
    // Feature-based keywords
    'terabox batch downloader',
    'terabox high quality download',
    'terabox original quality download',
    'terabox resume download',
    'terabox multiple mirrors',
    'terabox fast download',
    'terabox unlimited download',
    'terabox premium downloader free',
    'terabox no ads downloader',
    'terabox direct link generator'
  ].join(', '),
  openGraph: {
    title: 'Terabox Video Downloader Player | Download Videos Online',
    description: 'Download Terabox videos for free with multiple mirrors. Get direct links, embed videos, and stream content without restrictions. Fast, safe, and easy.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Terabox Video Downloader Tool'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Terabox Video Downloader & Player',
    description: 'Download Terabox videos with direct links. Free, fast, and unlimited downloads.',
    images: ['/og-image.png']
  },
  alternates: {
    canonical: '/terabox-downloader'
  },
  other: {
    'application-name': '30Tools - Terabox Video Downloader',
    'msapplication-TileColor': '#2563eb',
    'theme-color': '#2563eb'
  }
};

// JSON-LD structured data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Terabox Video Downloader & Player',
  description: 'Free online tool to download Terabox videos with direct links and embed custom video players',
  url: 'https://30tools.com/terabox-downloader',
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'Any',
  permissions: 'browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  featureList: [
    'Download Terabox videos for free',
    'Multiple download mirrors',
    'Custom video player embedding',
    'Mobile-responsive design',
    'No registration required',
    'High-quality downloads',
    'Fast download speeds',
    'Cross-browser compatibility'
  ],
  creator: {
    '@type': 'Organization',
    name: '30Tools',
    url: 'https://30tools.com'
  },
  datePublished: '2025-01-24',
  dateModified: '2025-01-24',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  browserRequirements: 'Requires JavaScript. Works with Chrome, Firefox, Safari, Edge.',
  softwareHelp: {
    '@type': 'CreativeWork',
    name: 'How to Download Terabox Videos',
    text: 'Paste your Terabox URL, select player options, click generate to get download links and embed code.'
  }
};

export default function TeraboxDownloaderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TeraboxPlayerTool />
    </>
  );
}
