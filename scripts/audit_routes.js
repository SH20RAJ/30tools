const fs = require('fs');
const path = require('path');

const toolsPath = path.join(process.cwd(), 'src/constants/tools.json');
const appPath = path.join(process.cwd(), 'src/app');

function getTools() {
    const data = fs.readFileSync(toolsPath, 'utf8');
    const json = JSON.parse(data);
    const allTools = [];
    Object.values(json.categories).forEach(cat => {
        allTools.push(...cat.tools);
    });
    return allTools;
}

function findFileForRoute(route) {
    // route is like /terabox-downloader or /api-key-tester/openai
    // We need to look in src/app/**/route/page.tsx
    // The grouping folders like (video) are transparent to routing.
    
    // Naive search: walk directory
    // or better: glob pattern matching?
    // Let's walk.
    
    const parts = route.split('/').filter(p => p);
    // e.g. ['terabox-downloader'] or ['api-key-tester', 'openai']
    
    return searchDir(appPath, parts);
}

function searchDir(dir, parts) {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    // Check if we are at the target
    // If parts is empty, we found it? No, we need page.tsx
    
    for (const item of items) {
        if (item.isDirectory()) {
            if (item.name.startsWith('(') && item.name.endsWith(')')) {
                // Route group, transparent
                const found = searchDir(path.join(dir, item.name), parts);
                if (found) return found;
            } else if (parts.length > 0 && item.name === parts[0]) {
                // Match segment
                if (parts.length === 1) {
                    // Last segment, look for page.tsx
                    const pagePath = path.join(dir, item.name, 'page.tsx');
                    if (fs.existsSync(pagePath)) return pagePath;
                     const pageJsPath = path.join(dir, item.name, 'page.js');
                    if (fs.existsSync(pageJsPath)) return pageJsPath;
                } else {
                    // Continue deeper
                    const found = searchDir(path.join(dir, item.name), parts.slice(1));
                    if (found) return found;
                }
            }
        }
    }
    return null;
}

const tools = getTools();
console.log(`Scanning ${tools.length} tools...`);

const report = [];

tools.forEach(tool => {
    const filePath = findFileForRoute(tool.route);
    report.push({
        name: tool.name,
        route: tool.route,
        file: filePath ? path.relative(process.cwd(), filePath) : 'NOT FOUND'
    });
});

console.table(report);

// Also verify H1 count for found files
report.filter(r => r.file !== 'NOT FOUND').forEach(r => {
    const content = fs.readFileSync(r.file, 'utf8');
    const h1Matches = content.match(/<h1/g);
    const h1Count = h1Matches ? h1Matches.length : 0;
    if (h1Count > 1) {
        console.warn(`[WARN] ${r.file} has ${h1Count} H1 tags`);
    }
});
