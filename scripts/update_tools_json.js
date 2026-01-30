
const fs = require('fs');
const path = require('path');

const toolsJsonPath = path.join(process.cwd(), 'src/constants/tools.json');
const toolsData = require(toolsJsonPath);

const newTools = [
  "audio-joiner",
  "video-watermark-remover",
  "audio-splitter",
  "background-remover",
  "video-background-remover",
  "youtube-summary-generator",
  "video-joiner",
  "image-to-icon",
  "developer-tools",
  "audio-normalizer",
  "audio-player",
  "faceless-video-generator",
  "video-resizer",
  "zoom-recorder",
  "video-to-audio",
  "generators",
  "pdf-protector",
  "instagram-reel-maker",
  "code-tools",
  "remove-duplicates",
  "images-to-pdf",
  "audio-spectrum",
  "course-video-maker",
  "video-sales-letter",
  "batch-image-processor",
  "pdf-reader",
  "audio-equalizer",
  "text-encoder",
  "ai-video-summarizer",
  "video-splitter",
  "video-rotator",
  "youtube-shorts-creator",
  "watermark-remover",
  "all-downloaders",
  "website-analyzer",
  "text-reverser",
  "line-sorter",
  "meme-video-generator",
  "case-converter",
  "pdf-to-images",
  "podcast-video-creator",
  "image-optimizer"
];

// Ensure 'others' category exists
if (!toolsData.categories.others) {
  toolsData.categories.others = {
    name: "Other Tools",
    slug: "other-tools",
    icon: "Grid", 
    description: "Various useful tools",
    tools: []
  };
}

// Flatten existing tools to check for duplicates
const existingIds = new Set();
Object.values(toolsData.categories).forEach(cat => {
  if (cat.tools) {
    cat.tools.forEach(t => existingIds.add(t.id));
  }
});

let addedCount = 0;

newTools.forEach(toolId => {
  if (existingIds.has(toolId)) {
    console.log(`Skipping ${toolId}, already exists (maybe in filtered list)`);
    return;
  }
  
  // Basic entry
  const toolName = toolId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const entry = {
    id: toolId,
    name: toolName,
    description: `${toolName} - Coming Soon`,
    route: `/${toolId}`,
    popular: false,
    category: "others"
  };

  toolsData.categories.others.tools.push(entry);
  existingIds.add(toolId);
  addedCount++;
});

// Update metadata
toolsData.metadata.totalTools += addedCount;
toolsData.metadata.totalCategories = Object.keys(toolsData.categories).length;

fs.writeFileSync(toolsJsonPath, JSON.stringify(toolsData, null, 2));
console.log(`Added ${addedCount} tools to tools.json`);
