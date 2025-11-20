const fs = require('fs');
const path = require('path');

const toolsPath = path.join(__dirname, '../src/constants/tools.json');
const toolsData = JSON.parse(fs.readFileSync(toolsPath, 'utf8'));

const missingSEO = [];

Object.entries(toolsData.categories).forEach(([categoryKey, category]) => {
    category.tools.forEach(tool => {
        const missing = [];
        if (!tool.keywords || tool.keywords.length === 0) missing.push('keywords');
        if (!tool.longTailKeywords || tool.longTailKeywords.length === 0) missing.push('longTailKeywords');
        if (!tool.primaryKeyword) missing.push('primaryKeyword');
        if (!tool.features || tool.features.length === 0) missing.push('features');

        if (missing.length > 0) {
            missingSEO.push({
                id: tool.id,
                name: tool.name,
                category: categoryKey,
                missing
            });
        }
    });
});

console.log(JSON.stringify(missingSEO, null, 2));
console.log(`Total tools with missing SEO: ${missingSEO.length}`);
