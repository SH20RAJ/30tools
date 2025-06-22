import { getAllTools } from '@/constants/tools-utils';

export default function robots() {
  const baseUrl = 'https://30tools.com';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/*.json$',
          '/*?*',  // Block query parameters for cleaner indexing
        ],
        crawlDelay: 1, // Be respectful to crawlers
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/static/',
        ],
        crawlDelay: 0, // No delay for Googlebot
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
        ],
        crawlDelay: 1,
      }
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/enhanced-sitemap.xml`
    ],
    host: baseUrl,
  };
}
