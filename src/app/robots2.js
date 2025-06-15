import { getAllTools } from '@/constants/tools-utils';

export default function robots() {
  const baseUrl = 'https://30tools.com';
  
  // Generate dynamic tool URLs for robots.txt
  const toolUrls = [];
  getAllTools().forEach(tool => {
    toolUrls.push(`${baseUrl}${tool.route}`);
  });

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/_next/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
