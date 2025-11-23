const fs = require('fs');
const path = require('path');

// Read tools.json
const toolsPath = path.join(__dirname, '../src/constants/tools.json');
const toolsData = JSON.parse(fs.readFileSync(toolsPath, 'utf8'));

// Fields to remove (redundant SEO data already in page.js)
const fieldsToRemove = ['keywords', 'longTailKeywords', 'primaryKeyword', 'features'];

// Function to clean tool object
function cleanTool(tool) {
    const cleaned = { ...tool };
    fieldsToRemove.forEach(field => {
        delete cleaned[field];
    });
    return cleaned;
}

// Process all categories
let totalToolsCleaned = 0;
let totalFieldsRemoved = 0;

Object.keys(toolsData.categories).forEach(categoryKey => {
    const category = toolsData.categories[categoryKey];
    if (category.tools && Array.isArray(category.tools)) {
        category.tools = category.tools.map(tool => {
            const originalFields = Object.keys(tool).length;
            const cleaned = cleanTool(tool);
            const removedFields = originalFields - Object.keys(cleaned).length;

            totalToolsCleaned++;
            totalFieldsRemoved += removedFields;

            return cleaned;
        });
    }
});

// Write back to file
fs.writeFileSync(toolsPath, JSON.stringify(toolsData, null, 2), 'utf8');

console.log(`✓ Optimized tools.json`);
console.log(`  - Tools cleaned: ${totalToolsCleaned}`);
console.log(`  - Fields removed: ${totalFieldsRemoved}`);
console.log(`  - Removed fields: ${fieldsToRemove.join(', ')}`);

// Show file size reduction
const stats = fs.statSync(toolsPath);
console.log(`  - New file size: ${(stats.size / 1024).toFixed(2)} KB`);
