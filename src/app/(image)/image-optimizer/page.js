import ImageCompressionTool from '@/components/tools/image/compression';
import { SEO_TEMPLATES } from '@/constants/seo/metadata-templates';

export const metadata = {
  title: SEO_TEMPLATES.IMAGE_OPTIMIZER.title,
  description: SEO_TEMPLATES.IMAGE_OPTIMIZER.description,
  keywords: SEO_TEMPLATES.IMAGE_OPTIMIZER.keywords,
  openGraph: {
    title: SEO_TEMPLATES.IMAGE_OPTIMIZER.title,
    description: SEO_TEMPLATES.IMAGE_OPTIMIZER.description,
    url: `https://30tools.com${SEO_TEMPLATES.IMAGE_OPTIMIZER.canonical}`,
    images: ['/og-image-optimizer.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_TEMPLATES.IMAGE_OPTIMIZER.title,
    description: SEO_TEMPLATES.IMAGE_OPTIMIZER.description,
    images: ['/og-image-optimizer.jpg'],
  },
  alternates: {
    canonical: `https://30tools.com${SEO_TEMPLATES.IMAGE_OPTIMIZER.canonical}`
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

export default function ImageOptimizerPage() {
  return <ImageCompressionTool />;
}
