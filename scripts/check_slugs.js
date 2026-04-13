import fs from 'fs';
import path from 'path';

const basePath = '/Users/shaswatraj/Desktop/earn/30tools';
const toolsJsonPath = path.join(basePath, 'src/constants/tools.json');
const urlsTxtPath = path.join(basePath, 'scripts/urls.txt');

// Load existing tools
const toolsData = JSON.parse(fs.readFileSync(toolsJsonPath, 'utf8'));

// Build set of existing valid slugs
const existingSlugs = new Set();
// Map from existing slug/extraSlug to tool id
const slugToTool = new Map();

for (const tool of toolsData) {
  existingSlugs.add(tool.slug);
  slugToTool.set(tool.slug, tool);
  if (tool.extraSlugs) {
    for (const es of tool.extraSlugs) {
      existingSlugs.add(es);
      slugToTool.set(es, tool);
    }
  }
}

// Load URLs
const urlsText = fs.readFileSync(urlsTxtPath, 'utf8');
const urls = urlsText.split('\n').filter(Boolean);

let foundSlugsCount = 0;
let missingSlugs = [];

for (const url of urls) {
  try {
    const urlObj = new URL(url);
    let slug = urlObj.pathname.slice(1).replace(/\/$/, ''); // remove leading and trailing slash
    
    // Ignore empty slug (home page)
    if (!slug) continue;
    
    // Check if valid slug
    if (existingSlugs.has(slug)) {
      foundSlugsCount++;
    } else {
      missingSlugs.push(slug);
    }
  } catch (e) {
    console.error('Invalid URL:', url);
  }
}

console.log(`Total URLs: ${urls.length}`);
console.log(`Valid URLs (slug exists): ${foundSlugsCount}`);
console.log(`Missing URLs (404): ${missingSlugs.length}`);
fs.writeFileSync(path.join(basePath, 'missing_slugs.txt'), missingSlugs.join('\n'));
console.log('Wrote missing slugs to missing_slugs.txt');
