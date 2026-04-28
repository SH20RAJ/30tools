const fs = require('fs');
const path = require('path');

const toolsJsonPath = path.join(process.cwd(), 'src/constants/tools.json');
const toolsData = JSON.parse(fs.readFileSync(toolsJsonPath, 'utf8'));

const appDir = path.join(process.cwd(), 'src/app');

function findPage(dir, slug) {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
        if (item.isDirectory()) {
            const fullPath = path.join(dir, item.name);
            // If it's a route group (starts with '('), recurse
            if (item.name.startsWith('(')) {
                const found = findPage(fullPath, slug);
                if (found) return found;
            } else if (item.name === slug) {
                // Check if page.tsx or page.js exists in this dir
                if (fs.existsSync(path.join(fullPath, 'page.tsx')) || fs.existsSync(path.join(fullPath, 'page.js'))) {
                    return true;
                }
            }
        }
    }
    return false;
}

const missingTools = [];
const allTools = Object.values(toolsData.categories).flatMap(c => c.tools);

for (const tool of allTools) {
    const slug = tool.route.startsWith('/') ? tool.route.slice(1) : tool.route;
    if (!slug) continue; // Skip home page
    
    // Check if it's an intent page
    const isIntent = tool.isIntent || false;
    if (isIntent) continue;

    // Check if physical file exists
    if (!findPage(appDir, slug)) {
        missingTools.push({ id: tool.id, name: tool.name, route: tool.route });
    }
}

console.log('--- Missing Tools (Physical Pages) ---');
missingTools.forEach(t => console.log(`${t.name} (${t.id}): ${t.route}`));
console.log(`Total missing: ${missingTools.length}`);
