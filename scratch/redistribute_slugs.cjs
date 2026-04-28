const fs = require('fs');
const path = require('path');

const toolsPath = path.join(__dirname, '../src/constants/tools.json');
const tools = JSON.parse(fs.readFileSync(toolsPath, 'utf8'));

const aiImageGenerator = tools.categories.generators.tools.find(t => t.id === 'ai-image-generator');

const slugsToMove = [
    { slug: "delete-image-background", to: "background-remover" },
    { slug: "picture-background-eraser", to: "background-remover" },
    { slug: "remove-background-from-image-free", to: "background-remover" },
    { slug: "enhance-image-quality", to: "photo-enhancer" },
    { slug: "improve-picture-resolution", to: "photo-enhancer" },
    { slug: "ai-photo-enhancer", to: "photo-enhancer" },
    { slug: "favicon-maker-from-image", to: "favicon-generator" },
    { slug: "ico-file-generator", to: "favicon-generator" },
    { slug: "generate-qr-image", to: "qr-code-generator" },
    { slug: "check-image-location", to: "exif-reader" },
    { slug: "photo-exif-viewer", to: "exif-reader" },
    { slug: "view-image-metadata", to: "exif-reader" },
    { slug: "cut-photo", to: "image-resizer" },
    { slug: "check-image-seo", to: "seo-audit-tool" },
    { slug: "image-seo-analyzer", to: "seo-audit-tool" },
    { slug: "image-optimization-test", to: "seo-audit-tool" },
    { slug: "yt-thumbnail-maker", to: "youtube-thumbnail-downloader" },
    { slug: "online-thumbnail-creator", to: "youtube-thumbnail-downloader" },
    { slug: "randomness-generator", to: "password-generator" },
    { slug: "instagram-font-generator", to: "font-generator" },
    { slug: "lucky-number-generator", to: "number-generator" },
    { slug: "ai-poetry-generator", to: "poetry-generator" },
    { slug: "aesthetic-collage-maker", to: "image-editor" },
    { slug: "aesthetic-bio-generator", to: "bio-generator" }
];

// Helper to find tool by ID across all categories
function findToolById(id) {
    for (const cat of Object.values(tools.categories)) {
        if (!cat.tools) continue;
        const tool = cat.tools.find(t => t.id === id);
        if (tool) return tool;
    }
    return null;
}

// Create missing tools as placeholders
const placeholders = [
    { id: "favicon-generator", name: "Favicon Generator", route: "/favicon-generator", category: "others" },
    { id: "qr-code-generator", name: "QR Code Generator", route: "/qr-code-generator", category: "generators" },
    { id: "font-generator", name: "Font Generator", route: "/font-generator", category: "generators" },
    { id: "number-generator", name: "Number Generator", route: "/number-generator", category: "generators" },
    { id: "poetry-generator", name: "Poetry Generator", route: "/poetry-generator", category: "generators" }
];

placeholders.forEach(p => {
    if (!findToolById(p.id)) {
        if (!tools.categories[p.category]) tools.categories[p.category] = { tools: [] };
        tools.categories[p.category].tools.push({
            ...p,
            description: `Professional ${p.name} tool for free online use.`,
            extraSlugs: []
        });
    }
});

// Move slugs
slugsToMove.forEach(({ slug, to }) => {
    // Remove from ai-image-generator
    if (aiImageGenerator && aiImageGenerator.extraSlugs) {
        aiImageGenerator.extraSlugs = aiImageGenerator.extraSlugs.filter(s => s !== slug);
    }
    
    // Add to target
    const target = findToolById(to);
    if (target) {
        if (!target.extraSlugs) target.extraSlugs = [];
        if (!target.extraSlugs.includes(slug)) {
            target.extraSlugs.push(slug);
        }
    }
});

fs.writeFileSync(toolsPath, JSON.stringify(tools, null, 4));
console.log("Slugs redistributed successfully.");
