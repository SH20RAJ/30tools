
const fs = require('fs');
const path = require('path');

const toolsComponentsDir = path.join(process.cwd(), 'src/components/tools');
const appDir = path.join(process.cwd(), 'src/app');

// 1. Map all tool components
const componentMap = {};

function scanComponents(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            scanComponents(fullPath);
        } else if (file.endsWith('.jsx') || file.endsWith('.tsx') || file.endsWith('.js')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const match = content.match(/export default function ([A-Z][a-zA-Z0-9]+Tool)/);
            if (match) {
                const componentName = match[1];
                const relativePath = '@/' + path.relative(path.join(process.cwd(), 'src'), fullPath).replace(/\\/g, '/').replace(/\.(jsx|tsx|js)$/, '');
                componentMap[componentName] = relativePath;
            }
        }
    }
}

scanComponents(toolsComponentsDir);
console.log(`Mapped ${Object.keys(componentMap).length} tool components.`);

// 2. Scan and fix page files
function fixPages(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            fixPages(fullPath);
        } else if (file === 'page.js' || file === 'page.tsx') {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // Look for tool component usage
            const toolUsageMatches = content.match(/<([A-Z][a-zA-Z0-9]+Tool)\s*[^>]*\/>/g);
            if (toolUsageMatches) {
                toolUsageMatches.forEach(match => {
                    const componentName = match.match(/<([A-Z][a-zA-Z0-9]+Tool)/)[1];
                    if (componentMap[componentName]) {
                        // Check if import exists
                        if (!content.includes(`import ${componentName}`)) {
                            console.log(`Adding missing import ${componentName} to ${fullPath}`);
                            const importLine = `import ${componentName} from "${componentMap[componentName]}";\n`;
                            content = importLine + content;
                            modified = true;
                        }
                    }
                });
            }

            if (modified) {
                fs.writeFileSync(fullPath, content);
            }
        }
    }
}

fixPages(appDir);
console.log("Finished fixing pages.");
