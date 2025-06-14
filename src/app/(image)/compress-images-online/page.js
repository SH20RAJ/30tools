import ImageCompressionTool from '@/components/tools/image/compression';

export const metadata = {
  title: "Compress Images Online Free - Batch Image Compression | 30tools",
  description: "Compress images online for free. Professional batch image compression tool with no watermarks. Support for JPEG, PNG, WebP formats. Instant results.",
  keywords: "compress images online, batch image compression, free online image compressor, compress multiple images, reduce image file size online",
  openGraph: {
    title: "Compress Images Online Free - Batch Image Compression",
    description: "Compress images online for free. Professional batch image compression tool with no watermarks.",
    url: "https://30tools.com/compress-images-online",
    images: ['/og-compress-images-online.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Compress Images Online Free - Batch Image Compression",
    description: "Compress images online for free. Professional batch image compression tool with no watermarks.",
    images: ['/og-compress-images-online.jpg'],
  },
  alternates: {
    canonical: "https://30tools.com/compress-images-online"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function CompressImagesOnlinePage() {
  return <ImageCompressionTool />;
}
