// Enhanced sitemap with comprehensive tools and SEO optimization
import toolsDirectory from '@/constants/tools-directory.json';

export default function sitemap() {
  const baseUrl = 'https://30tools.com';
  
  // Static pages with high priority
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/help`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/api-docs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    }
  ];

  // Category pages
  const categoryPages = Object.entries(toolsDirectory.categories).map(([, category]) => ({
    url: `${baseUrl}/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Tool pages - include all routes for each tool
  const toolPages = [];
  Object.values(toolsDirectory.categories).forEach(category => {
    if (category.tools) {
      category.tools.forEach(tool => {
        // Add all routes for each tool
        tool.routes?.forEach((route, index) => {
          const priority = tool.completed ? 0.9 : 0.7; // Higher priority for completed tools
          const changeFreq = tool.completed ? 'weekly' : 'monthly';
          
          // Primary route gets higher priority
          const routePriority = index === 0 ? priority : priority - 0.1;
          
          toolPages.push({
            url: `${baseUrl}${route}`,
            lastModified: new Date(),
            changeFrequency: changeFreq,
            priority: Math.max(routePriority, 0.5), // Minimum priority of 0.5
          });
        });
      });
    }
  });

  // Search pages for popular terms (for SEO)
  const popularSearchTerms = [
    'image compressor',
    'pdf merger', 
    'video converter',
    'resize image',
    'compress video',
    'pdf splitter',
    'image converter',
    'video compressor',
    'pdf compressor',
    'image resizer'
  ];

  const searchPages = popularSearchTerms.map(term => ({
    url: `${baseUrl}/search?q=${encodeURIComponent(term)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  // Combine all pages
  const allPages = [
    ...staticPages,
    ...categoryPages,
    ...toolPages,
    ...searchPages
  ];

  // Sort by priority (descending) for better SEO
  return allPages.sort((a, b) => (b.priority || 0) - (a.priority || 0));
}
