import toolsDirectory from '@/constants/tools-directory.json';

export default function robots() {
  const baseUrl = 'https://30tools.com';
  
  // Generate dynamic tool URLs for robots.txt
  const toolUrls = [];
  Object.values(toolsDirectory.categories).forEach(category => {
    category.tools.forEach(tool => {
      toolUrls.push(`${baseUrl}/${tool.slug}`);
      if (tool.seoRoutes) {
        tool.seoRoutes.forEach(route => {
          toolUrls.push(`${baseUrl}/${route}`);
        });
      }
    });
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
