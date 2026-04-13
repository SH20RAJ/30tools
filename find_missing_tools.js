import fs from 'fs';
import path from 'path';

const toolsJson = JSON.parse(fs.readFileSync('src/constants/tools.json', 'utf8'));

// The all-pages.txt I read earlier had both .tsx and .js
const existingPages = fs.readFileSync('all-pages.txt', 'utf8')
    .split('\n')
    .filter(line => line.trim() !== '')
    .map(line => {
        const parts = line.split('/');
        const pageFileName = parts[parts.length - 1];
        if (!pageFileName.startsWith('page.')) return null;
        
        const pageIndex = parts.indexOf(pageFileName);
        
        // Remove 'src', 'app', and groups like '(text)'
        const routeParts = parts.slice(2, pageIndex).filter(p => !p.startsWith('('));
        return '/' + routeParts.join('/');
    })
    .filter(route => route !== null);

const allTools = [];
for (const category in toolsJson.categories) {
    allTools.push(...toolsJson.categories[category].tools);
}

const missingTools = allTools.filter(tool => {
    if (!tool.route) return false;
    // Handle dynamic routes like /image-converter/[slug]
    if (tool.route.includes('[slug]')) return false;
    // Avoid double counting by normalize route
    const normalizedRoute = tool.route.startsWith('/') ? tool.route : '/' + tool.route;
    return !existingPages.includes(normalizedRoute);
});

console.log('Missing Tools count:', missingTools.length);
missingTools.forEach(tool => {
    console.log(`${tool.id}: ${tool.route} (${tool.category})`);
});
