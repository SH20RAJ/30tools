import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const toolsPath = path.join(__dirname, '../src/constants/tools.json');
const toolsData = JSON.parse(fs.readFileSync(toolsPath, 'utf8'));

const aiTool = toolsData.categories.generators.tools.find(t => t.id === 'ai-image-generator');

const moves = {
    "robots-txt-generator": ["allow-disallow-generator"],
    "color-palette-generator": ["brand-colors-generator", "color-palette-generator", "color-wheel-generator", "image-color-picker-tool"],
    "hash-generator": ["hash-generator", "secure-hash-generator"],
    "schema-markup-generator": ["json-ld-generator", "rich-snippets-maker"],
    "keyword-research-tool": ["seo-keyword-generator"],
    "zip-creator": ["zip-creator"],
    "instagram-downloader": ["ig-photo-download-hd", "ig-profile-picture-viewer"]
};

console.log("Analyzing extraSlugs for ai-image-generator...");

aiTool.extraSlugs = aiTool.extraSlugs.filter(slug => {
    for (const [targetId, slugs] of Object.entries(moves)) {
        if (slugs.includes(slug)) {
            console.log(`Moving ${slug} to ${targetId}`);
            // Find target tool and add slug
            let found = false;
            for (const cat of Object.values(toolsData.categories)) {
                const targetTool = cat.tools.find(t => t.id === targetId);
                if (targetTool) {
                    if (!targetTool.extraSlugs) targetTool.extraSlugs = [];
                    if (!targetTool.extraSlugs.includes(slug)) targetTool.extraSlugs.push(slug);
                    found = true;
                    break;
                }
            }
            if (!found) {
                console.log(`Target tool ${targetId} not found. Should create it.`);
            }
            return false;
        }
    }
    return true;
});

fs.writeFileSync(toolsPath, JSON.stringify(toolsData, null, 4));
console.log("Cleanup complete.");
