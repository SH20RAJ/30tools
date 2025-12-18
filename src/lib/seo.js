/**
 * Centralized SEO utility for 30tools
 */

const BASE_URL = 'https://30tools.com';

/**
 * Generate standard metadata for a page
 */
export function generateMetadata({
  title,
  description,
  path = '',
  image = '/og-image.jpg',
  noIndex = false,
  locale = 'en',
}) {
  const url = `${BASE_URL}${path.startsWith('/') ? path : '/' + path}`;
  
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: '30tools',
      locale: locale === 'en' ? 'en_US' : locale,
      type: 'website',
      images: [
        {
          url: image.startsWith('http') ? image : `${BASE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.startsWith('http') ? image : `${BASE_URL}${image}`],
      creator: '@30tools',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Generate WebApplication JSON-LD
 */
export function generateWebAppSchema({
  name,
  description,
  path,
  category = 'UtilitiesApplication',
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url: `${BASE_URL}${path.startsWith('/') ? path : '/' + path}`,
    applicationCategory: category,
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Organization',
      name: '30tools',
      url: BASE_URL,
    },
  };
}

/**
 * Generate FAQ JSON-LD
 */
export function generateFAQSchema(faqs) {
  if (!faqs || faqs.length === 0) return null;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate SoftwareApplication JSON-LD for tools
 */
export function generateToolSchema({
  name,
  description,
  path,
  category = 'UtilitiesApplication',
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url: `${BASE_URL}${path.startsWith('/') ? path : '/' + path}`,
    applicationCategory: category,
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1250',
    },
  };
}
