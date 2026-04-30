const fs = require('fs');
const path = require('path');

const toolsPath = path.join(__dirname, '../src/constants/tools.json');

// Read the tools.json file
const toolsData = JSON.parse(fs.readFileSync(toolsPath, 'utf-8'));

let totalSlugsProcessed = 0;
let totalReplacements = 0;

// Iterate through all categories
Object.keys(toolsData.categories).forEach((categoryName) => {
  const category = toolsData.categories[categoryName];
  
  if (category.tools && Array.isArray(category.tools)) {
    // Iterate through each tool in the category
    category.tools.forEach((tool) => {
      if (tool.extraSlugs && Array.isArray(tool.extraSlugs)) {
        // Process each slug
        tool.extraSlugs = tool.extraSlugs.map((slug) => {
          totalSlugsProcessed++;
          const originalSlug = slug;
          const newSlug = slug.replace(/\s+/g, '-');
          
          if (originalSlug !== newSlug) {
            totalReplacements++;
            console.log(`Updated: "${originalSlug}" → "${newSlug}"`);
          }
          
          return newSlug;
        });
      }
    });
  }
});

// Write the updated data back to the file
fs.writeFileSync(toolsPath, JSON.stringify(toolsData, null, 2) + '\n');

console.log(`\n✅ Done!`);
console.log(`Total slugs processed: ${totalSlugsProcessed}`);
console.log(`Total replacements made: ${totalReplacements}`);
