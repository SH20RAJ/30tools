const fs = require('fs');
const path = require('path');

console.log("🛠️ Starting Repair of Unbalanced JSX Fragments...");

function findPageFiles(dir) {
  let results = [];
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
let fixed = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Only target files we likely touched (checking for the jsonLd script injection)
  if (content.includes('dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}')) {
    
    // Simple balance check
    // We specifically look for the empty fragment syntax <> and </>
    const openFrags = (content.match(/<>/g) || []).length;
    const closeFrags = (content.match(/<\/>/g) || []).length;
    
    if (openFrags > closeFrags) {
        console.log(`🔧 Fixing ${path.basename(path.dirname(file))}/${path.basename(file)} (Open: ${openFrags}, Close: ${closeFrags})`);
        
        // Strategy: Insert </> before the return statement implies the end of the render.
        // We look for the last `);` which usually closes the return statement in these components.
        // And we ensure it is followed by `}` (end of function) to avoid matching nested parenthesis.
        
        // This regex looks for ); optionally followed by whitespace, then } at the very end of the file/string
        // or just look for the last ); match in the whole file if strict EOF matching is tricky with newlines.
        
        const lastParenIndex = content.lastIndexOf(');');
        
        if (lastParenIndex !== -1) {
             // Insert </> before the );
             // We add indentation for prettiness
             const before = content.substring(0, lastParenIndex);
             const after = content.substring(lastParenIndex);
             
             // Check if it's already properly closed just before (double check)
             if (!before.trim().endsWith('</>')) {
                 const newContent = before + '\n        </>\n' + after;
                 fs.writeFileSync(file, newContent);
                 fixed++;
             }
        } else {
            console.error(`⚠️ Could not find closing parenthesis for ${file}`);
        }
    }
  }
});

console.log(`\n✅ Repair Complete. Fixed ${fixed} files.`);
