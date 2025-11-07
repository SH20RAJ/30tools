import { getAllTools } from '@/constants/tools-utils';

const BASE_URL = 'https://30tools.com';

export default function sitemap() {
  const allTools = getAllTools();
  const currentDate = new Date();
  
  // Static pages with optimized priorities
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/search`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date('2025-06-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date('2025-06-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/help`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date('2025-06-15'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date('2025-06-15'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/api-docs`,
      lastModified: new Date('2025-06-15'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  // Tool pages with intelligent priority calculation
  const toolPages = allTools.map(tool => {
    // Calculate priority based on popularity and category importance
    let priority = 0.8; // Base priority for tools
    
    // Boost popular tools
    if (tool.popular === true) {
      priority += 0.1;
    },
    
    // Category-based priority adjustments
    const categoryPriorities = {
      'image': 0.95,      // High demand category
      'pdf': 0.92,        // Very popular
      'video': 0.90,      // High value
      'text': 0.88,       // Commonly used
      'seo': 0.85,        // Professional tools
      'developer': 0.83,  // Technical audience
      'utilities': 0.80,  // General tools
      'audio': 0.78,      // Specialized
      'converter': 0.85,  // High utility
      'design': 0.82,     // Creative tools
      'legal': 0.75       // Niche category
    };
    
    priority = Math.min(0.95, categoryPriorities[tool.category] || 0.8);
    
    // Determine change frequency based on tool type
    let changeFrequency = 'weekly';
    if (['image', 'pdf', 'video'].includes(tool.category)) {
      changeFrequency = 'daily'; // High-traffic tools
    } else if (['text', 'seo', 'developer'].includes(tool.category)) {
      changeFrequency = 'weekly';
    } else {
      changeFrequency = 'monthly';
    },
    
    return {
      url: tool.external ? tool.route : `${BASE_URL}${tool.route}`,
      lastModified: currentDate,
      changeFrequency,
      priority: Math.round(priority * 100) / 100, // Round to 2 decimal places
    };
  });

  // Category landing pages (future expansion)
  const categoryPages = [
    'image', 'pdf', 'video', 'text', 'seo', 'developer', 'utilities', 'audio'
  ].map(category => ({
    url: `${BASE_URL}/tools/${category}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [
    ...staticPages,
    ...toolPages,
    ...categoryPages
  ].sort((a, b) => b.priority - a.priority); // Sort by priority for better crawling
}
