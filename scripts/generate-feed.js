#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read tools.json
const toolsData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'constants', 'tools.json'), 'utf8'));

// Base URL for your site
const BASE_URL = 'https://30tools.com';

// Generate RSS feed
function generateRSSFeed() {
  const now = new Date().toUTCString();
  
  // Get all tools from all categories
  const allTools = [];
  Object.values(toolsData.categories).forEach(category => {
    category.tools.forEach(tool => {
      allTools.push({
        ...tool,
        categoryName: category.name
      });
    });
  });

  // Sort by popularity and take first 10
  const popularTools = allTools
    .filter(tool => tool.popular)
    .slice(0, 10);

  const rssItems = popularTools.map(tool => `
    <item>
      <title>${tool.name} - ${tool.description}</title>
      <description><![CDATA[${tool.description}. Free online tool - no registration required.]]></description>
      <link>${BASE_URL}${tool.route}</link>
      <guid>${BASE_URL}${tool.route}</guid>
      <pubDate>${now}</pubDate>
      <category>${tool.categoryName}</category>
    </item>
  `).join('');

  const rssContent = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>30tools - Free Online Toolkit</title>
    <description>Access ${toolsData.metadata.totalTools}+ free online tools for image compression, video conversion, PDF editing, password generation, QR codes, and more. No sign-up required.</description>
    <link>${BASE_URL}</link>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <language>en-US</language>
    <lastBuildDate>${now}</lastBuildDate>
    <pubDate>${now}</pubDate>
    <managingEditor>support@30tools.com (30tools Team)</managingEditor>
    <webMaster>support@30tools.com (30tools Team)</webMaster>
    <generator>30tools RSS Generator</generator>
    <ttl>60</ttl>
    <image>
      <url>${BASE_URL}/icons/icon-512x512.png</url>
      <title>30tools</title>
      <link>${BASE_URL}</link>
      <width>144</width>
      <height>144</height>
      <description>30tools - Free Online Toolkit</description>
    </image>
    ${rssItems}
  </channel>
</rss>`;

  return rssContent;
}

// Generate sitemap for all tools
function generateToolsSitemap() {
  const now = new Date().toISOString();
  
  // Get all tools from all categories
  const allTools = [];
  Object.values(toolsData.categories).forEach(category => {
    category.tools.forEach(tool => {
      allTools.push(tool);
    });
  });

  const sitemapItems = allTools.map(tool => `
  <url>
    <loc>${BASE_URL}${tool.route}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${tool.popular ? '0.9' : '0.8'}</priority>
  </url>`).join('');

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${BASE_URL}/search</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  ${sitemapItems}
</urlset>`;

  return sitemapContent;
}

// Write files
try {
  const publicDir = path.join(__dirname, '..', 'public');
  
  // Generate and write RSS feed
  const rssContent = generateRSSFeed();
  fs.writeFileSync(path.join(publicDir, 'feed.xml'), rssContent);
  console.log('✅ RSS feed generated: public/feed.xml');
  
  // Generate and write enhanced sitemap
  const sitemapContent = generateToolsSitemap();
  fs.writeFileSync(path.join(publicDir, 'enhanced-sitemap.xml'), sitemapContent);
  console.log('✅ Enhanced sitemap generated: public/enhanced-sitemap.xml');
  
  // Display stats
  const totalTools = Object.values(toolsData.categories).reduce((sum, cat) => sum + cat.tools.length, 0);
  const popularTools = Object.values(toolsData.categories).reduce((sum, cat) => 
    sum + cat.tools.filter(tool => tool.popular).length, 0);
  
  console.log(`\n📊 Statistics:`);
  console.log(`   Total Tools: ${totalTools}`);
  console.log(`   Popular Tools: ${popularTools}`);
  console.log(`   Categories: ${Object.keys(toolsData.categories).length}`);
  console.log(`   Last Updated: ${toolsData.metadata.lastUpdated}`);
  
} catch (error) {
  console.error('❌ Error generating feeds:', error);
  process.exit(1);
}
