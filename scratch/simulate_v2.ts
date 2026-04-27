import fs from 'fs';
import path from 'path';

// Read all page.tsx files to find toolIds
function findToolIds(dir: string, toolIds: string[]) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            findToolIds(fullPath, toolIds);
        } else if (file === 'page.tsx') {
            const content = fs.readFileSync(fullPath, 'utf8');
            const match = content.match(/<RegisteredToolMount\s+toolId=\{([^}]+)\}/);
            if (match) {
                const toolId = path.basename(path.dirname(fullPath));
                toolIds.push(toolId);
            }
        }
    }
}

const toolIds: string[] = [];
findToolIds('src/app', toolIds);
console.log(`Found ${toolIds.length} tools using RegisteredToolMount.`);

// Parse RegisteredToolMount.tsx to find ALL hardcoded strings or variables it handles
const mountCode = fs.readFileSync('src/components/tools/shared/RegisteredToolMount.tsx', 'utf8');
const handledToolIds = new Set<string>();

// Look for exact string matches like toolId === "xxx"
const directMatches = mountCode.matchAll(/toolId\s*===\s*"([^"]+)"/g);
for (const match of directMatches) {
    handledToolIds.add(match[1]);
}

// Look for Set.has(toolId)
const setMatches = mountCode.matchAll(/([A-Z0-9_]+)\.has\(toolId\)/g);
for (const match of setMatches) {
    const setName = match[1];
    // Find the definition of this set
    const setDefMatch = mountCode.match(new RegExp(`const ${setName} = new Set\\(\\[([^\\]]+)\\]\\)`));
    if (setDefMatch) {
        const items = setDefMatch[1].match(/"([^"]+)"/g);
        if (items) {
            for (const item of items) {
                handledToolIds.add(item.replace(/"/g, ''));
            }
        }
    }
}

// Look for map.has(toolId) or map[toolId]
import { UNIT_TOOL_MAP, BASE_CONVERTER_MAP, IMAGE_FORMAT_TOOL_MAP } from '../src/components/tools/shared/tool-id-registry';
for (const key of Object.keys(UNIT_TOOL_MAP)) handledToolIds.add(key);
for (const key of Object.keys(BASE_CONVERTER_MAP)) handledToolIds.add(key);
for (const key of Object.keys(IMAGE_FORMAT_TOOL_MAP)) handledToolIds.add(key);
handledToolIds.add('json-minify');
handledToolIds.add('json-to-tsv-converter');
handledToolIds.add('json-to-json-schema');

const unhandled: string[] = [];
for (const toolId of toolIds) {
    // Special handling for includes
    if (toolId.includes("downloader") || toolId.includes("extractor")) {
        continue;
    }
    
    if (!handledToolIds.has(toolId)) {
        unhandled.push(toolId);
    }
}

console.log("UNHANDLED_START");
console.log(unhandled.join("\n"));
console.log("UNHANDLED_END");
