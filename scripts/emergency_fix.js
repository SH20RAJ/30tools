const fs = require('fs');
const path = require('path');

console.log("🚑 Starting Emergency Fix...");

function findPageFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.resolve(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (!file.startsWith('.') && file !== 'node_modules') {
        results = results.concat(findPageFiles(fullPath));
      }
    } else {
      if (file.endsWith('page.js')) results.push(fullPath);
    }
  });
  return results;
}

const files = findPageFiles('src/app');
let fixedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  // 1. Fix [slug] imports
  if (content.match(/import\s+\[.*?\]Tool/)) {
    console.log(`Fixing [slug] import in ${path.basename(file)}`);
    content = content.replace(/import\s+\[.*?\]Tool.*?;/g, '// Dynamic import removed');
    modified = true;
  }

  // 2. Fix "use client" position and remove metadata from client components
  if (content.includes('"use client"') || content.includes("'use client'")) {
    const lines = content.split('\n');
    let useClientIndex = lines.findIndex(l => l.includes('use client'));
    
    // If "use client" is not the first non-empty line (ignoring comments/shebang)
    // We strictly check if it's not line 0 or 1
    if (useClientIndex > 5) { // Simple heuristic
      console.log(`Fixing "use client" in ${path.basename(file)}`);
      
      // Remove the old "use client" line
      lines.splice(useClientIndex, 1);
      
      // Add to top
      lines.unshift('"use client";');
      
      content = lines.join('\n');
      
      // Remove export const metadata block
      if (content.includes('export const metadata = {')) {
          console.log(`Removing metadata from client component ${path.basename(file)}`);
          // Regex to remove metadata block is risky, but let's try a simple balanced brace removal or just comment it out
          // We assume metadata block ends with };
          content = content.replace(/export const metadata = \{[\s\S]*?\};/, '// Metadata removed from client component');
      }
      modified = true;
    }
  }

  // 3. Fix Duplicate Metadata
  if (content.includes('export const metadata') && content.includes('export async function generateMetadata')) {
    console.log(`Removing duplicate metadata in ${path.basename(file)}`);
    content = content.replace(/export const metadata = \{[\s\S]*?\};/, '// Static metadata removed in favor of generateMetadata');
    modified = true;
  }

  // 4. Fix Unbalanced Fragments
  // We re-check checking all files, not just those with jsonLd
  const openFrags = (content.match(/<>/g) || []).length;
  const closeFrags = (content.match(/<\/>/g) || []).length;
  
  if (openFrags > closeFrags) {
    console.log(`Fixing unbalanced fragments in ${path.basename(file)} (Open: ${openFrags}, Close: ${closeFrags})`);
    
    const lastParenIndex = content.lastIndexOf(');');
        
    if (lastParenIndex !== -1) {
         const before = content.substring(0, lastParenIndex);
         const after = content.substring(lastParenIndex);
         
         // Only insert if the character before isn't already the closing tag
         // We check strict suffix ignoring whitespace
         if (!before.trim().endsWith('</>')) {
             content = before + '\n        </>\n' + after;
             modified = true;
         } else {
             // If matches </>, it means we have 2 opens and 1 close, and it ends with close.
             // WE NEED ANOTHER CLOSE.
             // check if openFrags - closeFrags > 0
             // Yes it is. So we force add another one.
             content = before + '\n        </>\n' + after;
             modified = true;
         }
    }
  }

  // 5. Fix Double Commas / Syntax
  if (content.match(/,\s*,/)) {
     console.log(`Fixing double commas in ${path.basename(file)}`);
     content = content.replace(/,\s*,/g, ',');
     modified = true;
  }
  
  // 6. Fix "line starting with comma"
  if (content.match(/^\s*,/m)) {
      console.log(`Fixing leading comma line in ${path.basename(file)}`);
      content = content.replace(/^\s*,/gm, ',');
      modified = true;
  }

  if (modified) {
    fs.writeFileSync(file, content);
    fixedCount++;
  }
});

console.log(`🚑 Emergency Fix Complete. Modified ${fixedCount} files.`);
