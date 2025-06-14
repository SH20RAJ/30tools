import toolsDirectory from '@/constants/tools-directory.json';

const BASE_URL = 'https://30tools.com';

export default function sitemap() {
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // Generate category pages
  const categoryPages = Object.entries(toolsDirectory.categories).map(([key, category]) => ({
    url: `${BASE_URL}/${key}-tools`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Generate tool pages
  const toolPages = [];
  
  Object.values(toolsDirectory.categories).forEach(category => {
    category.tools.forEach(tool => {
      // Primary tool page
      toolPages.push({
        url: `${BASE_URL}/${tool.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: tool.featured ? 0.9 : 0.8,
      });

      // SEO route variations
      if (tool.seoRoutes && tool.seoRoutes.length > 0) {
        tool.seoRoutes.forEach(seoRoute => {
          toolPages.push({
            url: `${BASE_URL}/${seoRoute}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
          });
        });
      }
    });
  });

  return [
    ...staticPages,
    ...categoryPages,
    ...toolPages,
  ];
}
