
const fs = require('fs');
const path = require('path');

const tools = [
  "audio-joiner",
  "video-watermark-remover",
  "audio-splitter",
  "background-remover", // This was in tools.json but maybe missing file? No, it has Premium tag. I'll include just in case user reported it (it was in list: video-background-remover, not just background-remover).
  // Reported list:
  "video-background-remover",
  "youtube-summary-generator",
  "video-joiner",
  "image-to-icon",
  "developer-tools", // Is a category, might need page
  "audio-normalizer",
  "audio-player",
  "faceless-video-generator",
  "video-resizer",
  "zoom-recorder",
  "video-to-audio",
  "generators", // Category
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

const baseDir = path.join(process.cwd(), 'src/app');

function createToolPage(toolId) {
  const toolDir = path.join(baseDir, toolId);
  const pageFile = path.join(toolDir, 'page.tsx');

  if (!fs.existsSync(toolDir)) {
    fs.mkdirSync(toolDir, { recursive: true });
  }

  const toolName = toolId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  const content = `
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "${toolName} - Free Online Tool | 30Tools" },
  description: "Free online ${toolName}. Fast, secure, and easy to use with no registration required.",
};

export default function ToolPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">${toolName}</h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
        We are currently building this tool to help you with your ${toolName.toLowerCase()} needs.
        <br />
        Stay tuned, it will be available soon!
      </p>
      <div className="p-8 bg-muted/30 rounded-2xl border border-border inline-block">
        <span className="text-2xl font-bold text-primary">Coming Soon 🚀</span>
      </div>
    </div>
  );
}
`;

  if (!fs.existsSync(pageFile)) {
    fs.writeFileSync(pageFile, content);
    console.log(`Created ${toolId}`);
  } else {
    console.log(`Skipped ${toolId}, already exists`);
  }
}

tools.forEach(createToolPage);
