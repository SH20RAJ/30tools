// Enhanced sitemap with comprehensive tools and SEO optimization
import { getAllTools, getAllCategories } from '@/constants/tools-utils';

function generateSitemap() {
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
  const categoryPages = getAllCategories().map(category => ({
    url: `${baseUrl}/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));
  // Tool pages with enhanced SEO data
  const toolPages = getAllTools().map(tool => ({
    url: `${baseUrl}${tool.route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: tool.popular ? 0.9 : 0.7,
  }));
  return [
    ...staticPages,
    ...categoryPages,
    ...toolPages
  ];
}

function generateSitemapXML() {
  const urls = generateSitemap();
  const urlEntries = urls.map(url => `
    <url>
      <loc>${url.url}</loc>
      <lastmod>${url.lastModified.toISOString()}</lastmod>
      <changefreq>${url.changeFrequency}</changefreq>
      <priority>${url.priority}</priority>
    </url>
  `).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

export async function GET() {
  return new Response(generateSitemapXML(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}