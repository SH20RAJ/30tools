const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src/app');

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
    });
}

const TOOL_PAGE_REGEX = /export async function generateMetadata\(\) \{/g;
const PAGE_COMPONENT_REGEX = /export default function (\w+)\(\) \{/g;

walk(srcDir, (filePath) => {
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.js')) return;
    if (filePath.includes('(landing)') || filePath.includes('layout') || filePath.includes('api')) return;

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // 1. Update generateMetadata for searchParams
    if (content.match(TOOL_PAGE_REGEX)) {
        content = content.replace(
            /export async function generateMetadata\(\) \{/g,
            'export async function generateMetadata({ searchParams }) {\n\tconst params = await searchParams;\n\tconst lang = params.lang || "en";'
        );
        
        // Update generateToolMetadata call to include lang
        content = content.replace(
            /generateToolMetadata\("([\w-]+)",\s*"([\w-]+)"\)/g,
            'generateToolMetadata("$1", "$2", lang)'
        );
        modified = true;
    }

    // 2. Update Page component for searchParams
    if (content.match(PAGE_COMPONENT_REGEX)) {
        content = content.replace(
            /export default function (\w+)\(\) \{/g,
            'export default async function $1({ searchParams }) {\n\tconst params = await searchParams;\n\tconst lang = params.lang || "en";'
        );
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(filePath, content);
        console.log(`[Localize] Updated: ${path.relative(process.cwd(), filePath)}`);
    }
});
