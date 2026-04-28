import fs from 'fs';
import path from 'path';

const toolsJsonPath = path.join(process.cwd(), 'src/constants/tools.json');
const toolsData = JSON.parse(fs.readFileSync(toolsJsonPath, 'utf8'));
const allTools = Object.values(toolsData.categories).flatMap(c => c.tools || []);

// 1. ROUTING AUDIT
const appDir = path.join(process.cwd(), 'src/app');
const explicitlyDefinedRoutes = [];

function scanRoutes(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        if (entry.isDirectory()) {
            if (!entry.name.startsWith('(') && !entry.name.startsWith('[')) {
                const pagePath = path.join(dir, entry.name, 'page.tsx');
                const pageJsxPath = path.join(dir, entry.name, 'page.jsx');
                if (fs.existsSync(pagePath) || fs.existsSync(pageJsxPath)) {
                    explicitlyDefinedRoutes.push('/' + entry.name);
                }
            }
            scanRoutes(path.join(dir, entry.name));
        }
    }
}
scanRoutes(appDir);

// 2. TOOL SYSTEM AUDIT
let missingSeo = 0;
let missingDescriptions = 0;

for (const tool of allTools) {
    if (!tool.seoTitle && !tool.seoDescription) missingSeo++;
    if (!tool.description) missingDescriptions++;
}

// Check component registry
const registryPath = path.join(process.cwd(), 'src/lib/tool-registry.tsx');
let registryContent = '';
if (fs.existsSync(registryPath)) {
    registryContent = fs.readFileSync(registryPath, 'utf8');
}

const toolsWithoutComponents = [];
for (const tool of allTools) {
    if (!registryContent.includes(`"${tool.id}"`)) {
        toolsWithoutComponents.push(tool.id);
    }
}

// 4. SEO AUDIT
// Handled by checking missingSeo above and the dynamic route implementation.

// 5. CONTENT AUDIT
let thinContent = 0;
for (const tool of allTools) {
    if (!tool.features && !tool.howTo && !tool.faqs && !tool.article) {
        thinContent++;
    }
}

console.log("=== ROUTING AUDIT ===");
console.log(`Total Tools in tools.json: ${allTools.length}`);
console.log(`Explicitly Defined Routes: ${explicitlyDefinedRoutes.length}`);

console.log("\n=== TOOL SYSTEM AUDIT ===");
console.log(`Tools missing explicit SEO fields: ${missingSeo}`);
console.log(`Tools missing description: ${missingDescriptions}`);
console.log(`Tools not found in registry (estimated): ${toolsWithoutComponents.length}`);

console.log("\n=== CONTENT AUDIT ===");
console.log(`Tools with thin content (no features, howTo, faqs, article): ${thinContent} / ${allTools.length}`);

