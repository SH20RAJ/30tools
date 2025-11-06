import ExifReaderTool from '@/components/tools/image/ExifReaderTool';

export const metadata = {
  title: 'EXIF Reader - Extract Image Metadata Information | 30tools',
  description: 'Read EXIF data from photos online. Extract camera settings, GPS location, timestamp, and other metadata from JPEG, TIFF, and RAW image files.',
  keywords: [
    'exif reader',
    'exif data viewer',
    'image metadata extractor',
    'photo exif reader',
    'camera settings reader',
    'gps location from photo',
    'image information',
    'photo metadata',
    'exif analyzer',
    'image properties viewer'
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

export default function ExifReaderPage() {
  return <ExifReaderTool />;
}