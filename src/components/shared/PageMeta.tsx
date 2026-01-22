import { Metadata } from 'next';

interface PageMetaProps {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  noIndex?: boolean;
}

// NOTE: This is a helper function, not a component, because Next.js metadata is exported as a const Object usually.
// However, if we need it as a component to inject specific tags, we can, but standard practice in App Router is `export const metadata`.

export function generatePageMetadata({
  title,
  description,
  url,
  imageUrl = '/og-image.jpg',
  noIndex = false,
}: PageMetaProps): Metadata {
  return {
    title: title,
    description: description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: title,
      description: description,
      url: url,
      siteName: '30Tools',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [imageUrl],
      creator: '@30tools',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    }
  };
}

export default function PageMeta({ ...props }: PageMetaProps) {
  // Safe failover if someone tries to use it as a component, though standard App Router uses export const metadata.
  // This can be used for <Head> based pages if any, but we are assuming App Router exclusively as per prompt.
  return null;
}
