const fs = require('fs');
const path = require('path');

const toolsPath = path.join(__dirname, 'src/constants/tools.json');
const toolsData = JSON.parse(fs.readFileSync(toolsPath, 'utf8'));

let allTools = [];

for (const category in toolsData.categories) {
    const tools = toolsData.categories[category].tools;
    tools.forEach(tool => {
        allTools.push({
            id: tool.id,
            name: tool.name,
            route: tool.route,
            category: category
        });
    });
}

console.log(JSON.stringify(allTools, null, 2));
