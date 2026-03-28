import fs from 'node:fs';
import path from 'node:path';

const toolsDataPath = path.join(process.cwd(), 'src/constants/tools.json');
const toolsData = JSON.parse(fs.readFileSync(toolsDataPath, 'utf8'));

const rewrites = [];

Object.values(toolsData.categories).forEach(category => {
  if (category.tools) {
    category.tools.forEach(tool => {
      if (tool.extraSlugs && Array.isArray(tool.extraSlugs)) {
        tool.extraSlugs.forEach(slug => {
          rewrites.push({
            source: `/${slug}`,
            destination: tool.route,
          });
        });
      }
    });
  }
});

const outputPath = path.join(process.cwd(), 'src/constants/tool-rewrites.json');
fs.writeFileSync(
  outputPath,
  JSON.stringify(rewrites, null, 2)
);

console.log(`Generated ${rewrites.length} rewrites.`);

