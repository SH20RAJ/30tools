#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixJavaScriptFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        // Fix extra commas in metadata objects
        // Pattern: },\n,\n  twitter: or },\n,\n  alternates:
        if (content.includes('},\n,\n  twitter:') || content.includes('},\n,\n  alternates:')) {
            content = content.replace(/},\n,\n  twitter:/g, '},\n  twitter:');
            content = content.replace(/},\n,\n  alternates:/g, '},\n  alternates:');
            modified = true;
        }

        // Fix JSX fragments missing closing tags
        // Pattern: return (\n  <>\n...content...\n}\n without proper closing
        const fragmentMatch = content.match(/return \(\s*<>\s*.*?\n\s*}\s*$/ms);
        if (fragmentMatch) {
            // Look for the pattern where JSX fragment isn't closed
            const lines = content.split('\n');
            let inFragment = false;
            let fragmentStart = -1;
            
            for (let i = 0; i < lines.length; i++) {
                if (lines[i].includes('return (') && lines[i + 1] && lines[i + 1].trim() === '<>') {
                    inFragment = true;
                    fragmentStart = i + 1;
                    continue;
                }
                
                if (inFragment && lines[i].trim() === '}' && i === lines.length - 1) {
                    // This is likely missing the closing fragment tag
                    lines.splice(i, 0, '        </>');
                    lines[i + 1] = '    );';
                    modified = true;
                    break;
                }
            }
            
            if (modified) {
                content = lines.join('\n');
            }
        }

        if (modified) {
            fs.writeFileSync(filePath, content);
            console.log(`Fixed: ${filePath}`);
            return true;
        }
        
        return false;
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
        return false;
    }
}

function findJavaScriptFiles(dir) {
    const files = [];
    
    function traverse(currentDir) {
        const entries = fs.readdirSync(currentDir, { withFileTypes: true });
        
        for (const entry of entries) {
            const fullPath = path.join(currentDir, entry.name);
            
            if (entry.isDirectory() && entry.name !== 'node_modules' && !entry.name.startsWith('.')) {
                traverse(fullPath);
            } else if (entry.isFile() && entry.name.endsWith('.js')) {
                files.push(fullPath);
            }
        }
    }
    
    traverse(dir);
    return files;
}

// Main execution
const srcDir = path.join(__dirname, 'src');
console.log('Finding JavaScript files to fix...');
const jsFiles = findJavaScriptFiles(srcDir);

console.log(`Found ${jsFiles.length} JavaScript files`);

let fixedCount = 0;
for (const file of jsFiles) {
    if (fixJavaScriptFile(file)) {
        fixedCount++;
    }
}

console.log(`Fixed ${fixedCount} files`);