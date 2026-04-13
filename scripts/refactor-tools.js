
const fs = require('fs');
const path = require('path');

const toolsFilePath = path.join(__dirname, 'src/constants/tools.json');
const toolsData = JSON.parse(fs.readFileSync(toolsFilePath, 'utf8'));

const SITE_NAME = "30tools";
const SITE_URL = "https://30tools.com";

// Low KD Strategy: "Free [Tool Name] Online - No Signup | 30tools"
function generateLowKDTitle(toolName) {
    // Basic low-KD pattern
    return `Free ${toolName} Online - Fast & No Signup | ${SITE_NAME}`;
}

function generateMetadata(tool) {
    const title = generateLowKDTitle(tool.name);
    const description = tool.seoDescription || tool.description;
    
    return `export const metadata = {
  title: "${title}",
  description: "${description}",
  keywords: ${JSON.stringify(tool.keywords || [])},
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};`;
}

function processTools() {
    Object.values(toolsData.categories).forEach(category => {
        if (!category.tools) return;

        category.tools.forEach(tool => {
            if (tool.external) return;

            // Map route to file path
            // Route is like "/ai-image-generator"
            // We need to find the file. Based on listing it seems they are in src/app/(category)/[slug]/page.js
            const categorySlug = category.slug;
            const toolSlug = tool.route.startsWith('/') ? tool.route.slice(1) : tool.route;
            
            let pagePath = path.join(__dirname, 'src/app', `(${categorySlug})`, toolSlug, 'page.js');
            if (!fs.existsSync(pagePath)) {
                pagePath = path.join(__dirname, 'src/app', toolSlug, 'page.js');
            }

            if (fs.existsSync(pagePath)) {
                let content = fs.readFileSync(pagePath, 'utf8');

                // 1. Replace generateToolMetadata export
                const metadataMatch = content.match(/export const metadata = generateToolMetadata\([\s\S]*?\);/);
                if (metadataMatch) {
                    const newMetadata = generateMetadata(tool);
                    content = content.replace(metadataMatch[0], newMetadata);
                }

                // 2. Inject/Update hardcoded arrays if missing or to ensure they are up to date
                // We'll look for where toolData is defined in page.js and inject after it or replace it
                const toolDataMatch = content.match(/const toolData = {[\s\S]*?};/);
                if (toolDataMatch) {
                    const updatedToolData = {
                        id: tool.id,
                        name: tool.name,
                        description: tool.description,
                        category: tool.category,
                        route: tool.route,
                        features: tool.features || [],
                        benefits: tool.benefits || [],
                        useCases: tool.useCases || [],
                        faqs: tool.faqs || []
                    };
                    const toolDataStr = `const toolData = ${JSON.stringify(updatedToolData, null, 2)};`;
                    content = content.replace(toolDataMatch[0], toolDataStr);
                }

                // 3. Remove generateToolMetadata import
                content = content.replace(/import \{ generateToolMetadata \} from "@\/lib\/seo-helper";\n?/, '');

                fs.writeFileSync(pagePath, content);
                console.log(`Updated: ${pagePath}`);
            } else {
                console.warn(`Could not find page for tool: ${tool.id} at ${pagePath}`);
            }
        });
    });
}

processTools();

// After processing, strip tools.json
const strippedCategories = {};
Object.entries(toolsData.categories).forEach(([key, category]) => {
    const strippedTools = (category.tools || []).map(tool => ({
        id: tool.id,
        name: tool.name,
        description: tool.description,
        route: tool.route,
        extraSlugs: tool.extraSlugs,
        popular: tool.popular,
        category: tool.category
    }));
    strippedCategories[key] = {
        ...category,
        tools: strippedTools
    };
    // Also remove from category level if needed
    delete strippedCategories[key].features;
    delete strippedCategories[key].faqs;
});

const strippedData = {
    metadata: toolsData.metadata,
    categories: strippedCategories
};

fs.writeFileSync(toolsFilePath, JSON.stringify(strippedData, null, 2));
console.log("Stripped tools.json successfully.");
