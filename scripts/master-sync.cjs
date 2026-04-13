
const fs = require('fs');
const path = require('path');

const toolsFilePath = path.join(process.cwd(), 'src/constants/tools.json');
const toolsData = JSON.parse(fs.readFileSync(toolsFilePath, 'utf8'));

const SITE_NAME = "30tools";

// 1. Scan filesystem for all pages and sync with tools.json
function syncToolsWithFilesystem() {
    const appDir = path.join(process.cwd(), 'src/app');
    const toolPages = [];

    function walkDir(dir, routePrefix = '') {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const fullPath = path.join(dir, file);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                // Skip some folders
                if (['api', 'feed.xml', 'embed', 'landing', 'archive', 'css'].includes(file)) continue;
                
                // Route group or normal folder
                let nextPrefix = routePrefix;
                if (!file.startsWith('(')) {
                    nextPrefix += `/${file}`;
                }
                walkDir(fullPath, nextPrefix);
            } else if (file === 'page.js' || file === 'page.tsx') {
                if (routePrefix === '') continue; // Skip root page
                toolPages.push({
                    path: fullPath,
                    route: routePrefix
                });
            }
        }
    }

    walkDir(appDir);

    // Track all routes in tools.json
    const existingRoutes = new Set();
    Object.values(toolsData.categories).forEach(cat => {
        cat.tools.forEach(t => existingRoutes.add(t.route));
    });

    // Add missing tools to "others" or appropriate category
    if (!toolsData.categories.others) {
        toolsData.categories.others = {
            name: "Other Tools",
            slug: "others",
            icon: "DotsHorizontalIcon",
            description: "Explore our collection of other useful online tools",
            tools: []
        };
    }

    toolPages.forEach(page => {
        if (!existingRoutes.has(page.route)) {
            console.log(`Adding missing tool: ${page.route}`);
            // Infer name from route
            const name = page.route.split('/').pop().split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            
            // Try to find correct category based on parent folder
            let category = 'others';
            if (page.path.includes('(image)')) category = 'image';
            else if (page.path.includes('(pdf)')) category = 'pdf';
            else if (page.path.includes('(video)')) category = 'video';
            else if (page.path.includes('(audio)')) category = 'audio';
            else if (page.path.includes('(text)')) category = 'text';
            else if (page.path.includes('(generators)')) category = 'generators';
            else if (page.path.includes('(downloaders)')) category = 'downloaders';
            else if (page.path.includes('(seo)')) category = 'seo';
            else if (page.path.includes('(developer)')) category = 'developer';
            else if (page.path.includes('(utilities)')) category = 'utilities';
            else if (page.path.includes('(youtube)')) category = 'youtube';

            const newTool = {
                id: page.route.split('/').pop(),
                name: name,
                description: `Free ${name} online tool. Fast and secure.`,
                route: page.route,
                extraSlugs: [],
                popular: false,
                category: category
            };

            if (toolsData.categories[category]) {
                toolsData.categories[category].tools.push(newTool);
            } else {
                toolsData.categories.others.tools.push(newTool);
            }
            existingRoutes.add(page.route);
        }

        // Clean up page.js/tsx
        let content = fs.readFileSync(page.path, 'utf8');
        
        // Remove generateMetadata
        const metadataFuncRegex = /export async function generateMetadata\([\s\S]*?\}[\n\r]/g;
        content = content.replace(metadataFuncRegex, '');

        // Replace metadata export with hardcoded one if it uses generateToolMetadata or similar
        const metadataCallRegex = /export const metadata = generateToolMetadata\([\s\S]*?\);/g;
        if (metadataCallRegex.test(content)) {
            const tool = findToolByRoute(page.route);
            if (tool) {
                const title = `Free ${tool.name} Online - No Signup | ${SITE_NAME}`;
                const description = tool.description.replace(/"/g, "'").replace(/\n/g, ' ');
                const newMetadata = `export const metadata = {
  title: "${title}",
  description: "${description}",
  robots: { index: true, follow: true },
};`;
                content = content.replace(metadataCallRegex, newMetadata);
            }
        }

        // Cleanup imports
        content = content.replace(/import \{[\s\S]*?generateToolMetadata[\s\S]*?\} from ["'].*?lib\/seo-helper["'];?\n?/g, '');
        content = content.replace(/import .* from ["'].*?lib\/seo-helper["'];?\n?/g, '');
        content = content.replace(/'use client';?\n?/, ''); // Ensure server component

        fs.writeFileSync(page.path, content);
    });

    fs.writeFileSync(toolsFilePath, JSON.stringify(toolsData, null, 2));
    console.log(`Synced ${toolPages.length} pages.`);
}

function findToolByRoute(route) {
    for (const cat of Object.values(toolsData.categories)) {
        const tool = cat.tools.find(t => t.route === route);
        if (tool) return tool;
    }
    return null;
}

syncToolsWithFilesystem();

// 2. Create src/lib/tools.ts
const toolsTsContent = `
import toolsData from "@/constants/tools.json";

export interface Tool {
  id: string;
  name: string;
  description: string;
  route: string;
  category: string;
  extraSlugs?: string[];
  popular?: boolean;
}

export interface Category {
  name: string;
  slug: string;
  icon: string;
  description: string;
  tools: Tool[];
}

export const categories = toolsData.categories as Record<string, Category>;

export function getAllTools(): Tool[] {
  return Object.values(categories).flatMap(cat => cat.tools);
}

export function getToolByRoute(route: string): Tool | undefined {
  return getAllTools().find(t => t.route === route);
}

export function getToolById(id: string): Tool | undefined {
  return getAllTools().find(t => t.id === id);
}

export function getAllCategories(): Category[] {
  return Object.values(categories);
}
`;

fs.mkdirSync(path.join(process.cwd(), 'src/lib'), { recursive: true });
fs.writeFileSync(path.join(process.cwd(), 'src/lib/tools.ts'), toolsTsContent);
console.log("Created src/lib/tools.ts");
