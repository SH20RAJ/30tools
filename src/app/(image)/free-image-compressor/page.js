import ImageCompressionTool from '@/components/tools/image/compression';
import { SEO_TEMPLATES } from '@/constants/seo/metadata-templates';

export const metadata = {
  title: SEO_TEMPLATES.IMAGE_COMPRESSOR.title,
  description: SEO_TEMPLATES.IMAGE_COMPRESSOR.description,
  keywords: SEO_TEMPLATES.IMAGE_COMPRESSOR.keywords,
  openGraph: {
    title: SEO_TEMPLATES.IMAGE_COMPRESSOR.title,
    description: SEO_TEMPLATES.IMAGE_COMPRESSOR.description,
    url: `https://30tools.com${SEO_TEMPLATES.IMAGE_COMPRESSOR.canonical}`,
    images: ['/og-image-compressor.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_TEMPLATES.IMAGE_COMPRESSOR.title,
    description: SEO_TEMPLATES.IMAGE_COMPRESSOR.description,
    images: ['/og-image-compressor.jpg'],
  },
  alternates: {
    canonical: `https://30tools.com${SEO_TEMPLATES.IMAGE_COMPRESSOR.canonical}`
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


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Free Image Compressor",
  "description": "Professional free image compressor for Process images online. Free, fast & secure image processing. No watermarks, maintains original quality.",
  "url": "https://30tools.com/free-image-compressor",
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
  }
};

export default function ImageCompressorPage() {
  return <ImageCompressionTool />;
}
