const fs = require('fs');
const toolsData = JSON.parse(fs.readFileSync('src/constants/tools.json', 'utf8'));
const categories = toolsData.categories;

const allTools = [];
Object.values(categories).forEach(category => {
    if (category.tools) {
        category.tools.forEach(tool => {
            allTools.push(tool);
        });
    }
});

const report = [];

allTools.forEach(tool => {
    if (tool.extraSlugs && tool.extraSlugs.length > 0) {
        const unrelated = tool.extraSlugs.filter(slug => {
            const keywords = tool.id.split('-');
            // Check if any keyword of the tool ID is in the slug
            const matches = keywords.some(kw => slug.includes(kw));
            return !matches;
        });

        if (unrelated.length > 5) {
            report.push({
                toolId: tool.id,
                totalExtraSlugs: tool.extraSlugs.length,
                unrelatedCount: unrelated.length,
                samples: unrelated.slice(0, 10)
            });
        }
    }
});

console.log(JSON.stringify(report, null, 2));
