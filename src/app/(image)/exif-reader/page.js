import ExifReaderTool from '@/components/tools/image/ExifReaderTool';

export const metadata = {
  title: 'EXIF Reader - Extract Image Metadata Information | 30tools',
  description: 'Read EXIF data from photos online. Extract camera settings, GPS location, timestamp, and other metadata from JPEG, TIFF, and RAW image files.',
  keywords: [
    "exif reader",
    "exif reader online",
    "free exif reader",
    "exif reader tool",
    "online exif reader free",
    "professional exif reader",
    "exif reader online tool",
    "best exif reader free",
    "exif reader web app",
    "exif reader utility",
    "image editing online",
    "photo editor free",
    "image optimization",
    "image converter tool",
    "photo processing online"
  ],
  openGraph: {
    title: 'EXIF Reader - Extract Image Metadata Information | 30tools',
    description: 'Read EXIF data from photos online. Extract camera settings, GPS location, timestamp, and other metadata from JPEG, TIFF, and RAW image files.',
    type: 'website',
    url: 'https://30tools.com/exif-reader',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EXIF Reader - Extract Image Metadata Information | 30tools',
    description: 'Read EXIF data from photos online. Extract camera settings, GPS location, timestamp, and other metadata from JPEG, TIFF, and RAW image files.',
  },
  canonical: 'https://30tools.com/exif-reader',
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Exif Reader",
  "description": "Professional exif reader for Process images online. Free, fast & secure image processing. No watermarks, maintains original quality.",
  "url": "https://30tools.com/exif-reader",
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

export default function ExifReaderPage() {
  return <ExifReaderTool />;
}