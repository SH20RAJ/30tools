import ImageCompressionTool from '@/components/tools/image/compression';
import { SEO_TEMPLATES } from '@/constants/seo/metadata-templates';

export const metadata = {
  title: SEO_TEMPLATES.FREE_IMAGE_COMPRESSOR.title,
  description: SEO_TEMPLATES.FREE_IMAGE_COMPRESSOR.description,
  keywords: SEO_TEMPLATES.FREE_IMAGE_COMPRESSOR.keywords,
  openGraph: {
    title: SEO_TEMPLATES.FREE_IMAGE_COMPRESSOR.title,
    description: SEO_TEMPLATES.FREE_IMAGE_COMPRESSOR.description,
    url: `https://30tools.com${SEO_TEMPLATES.FREE_IMAGE_COMPRESSOR.canonical}`,
    images: ['/og-free-image-compressor.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_TEMPLATES.FREE_IMAGE_COMPRESSOR.title,
    description: SEO_TEMPLATES.FREE_IMAGE_COMPRESSOR.description,
    images: ['/og-free-image-compressor.jpg'],
  },
  alternates: {
    canonical: `https://30tools.com${SEO_TEMPLATES.FREE_IMAGE_COMPRESSOR.canonical}`
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

export default function FreeImageCompressorPage() {
  return <ImageCompressionTool />;
}
