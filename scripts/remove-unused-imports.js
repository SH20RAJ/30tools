#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Find all JS/JSX/TS/TSX files in src directory
function findFiles(dir, fileExtensions = ['.js', '.jsx', '.ts', '.tsx']) {
  const files = [];
  
  function scanDir(directory) {
    const items = fs.readdirSync(directory);
    
    for (const item of items) {
      const fullPath = path.join(directory, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDir(fullPath);
      } else if (stat.isFile() && fileExtensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  scanDir(dir);
  return files;
}

// Remove unused imports from a file
function removeUnusedImports(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const usedIdentifiers = new Set();
  const importLines = [];
  const codeLines = [];
  let changed = false;
  
  // Separate imports from code
  let inImportSection = true;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.startsWith('import ') && inImportSection) {
      importLines.push({ line: lines[i], index: i });
    } else if (line === '' && inImportSection) {
      // Keep empty lines in import section
      importLines.push({ line: lines[i], index: i });
    } else {
      if (inImportSection && line !== '') {
        inImportSection = false;
      }
      codeLines.push(lines[i]);
    }
  }
  
  // Find all used identifiers in the code
  const codeContent = codeLines.join('\n');
  
  // Parse imports and check if they're used
  const newImportLines = [];
  
  for (const { line } of importLines) {
    if (line.trim() === '') {
      newImportLines.push(line);
      continue;
    }
    
    if (!line.trim().startsWith('import ')) {
      newImportLines.push(line);
      continue;
    }
    
    try {
      // Extract imported identifiers
      const importMatch = line.match(/import\s+(.+?)\s+from\s+['"](.+?)['"]/);
      if (!importMatch) {
        newImportLines.push(line);
        continue;
      }
      
      const importPart = importMatch[1];
      const moduleName = importMatch[2];
      
      // Handle different import types
      let identifiers = [];
      
      if (importPart.includes('{')) {
        // Named imports: import { a, b, c } from 'module'
        const namedImports = importPart.match(/\{([^}]+)\}/);
        if (namedImports) {
          identifiers = namedImports[1]
            .split(',')
            .map(id => id.trim().split(' as ')[0].trim())
            .filter(id => id && id !== '');
        }
      } else if (importPart.includes('*')) {
        // Namespace import: import * as name from 'module'
        const namespaceMatch = importPart.match(/\*\s+as\s+(\w+)/);
        if (namespaceMatch) {
          identifiers = [namespaceMatch[1]];
        }
      } else {
        // Default import: import name from 'module'
        const defaultImport = importPart.trim();
        if (defaultImport && !defaultImport.includes(',')) {
          identifiers = [defaultImport];
        }
      }
      
      // Check if any identifier is used
      const usedIds = identifiers.filter(id => {
        // Check for usage in code (simple regex check)
        const regex = new RegExp(`\\b${id}\\b`, 'g');
        return regex.test(codeContent);
      });
      
      if (usedIds.length > 0) {
        if (usedIds.length < identifiers.length && importPart.includes('{')) {
          // Reconstruct import with only used identifiers
          const newImportPart = `{ ${usedIds.join(', ')} }`;
          const newImportLine = line.replace(/\{[^}]+\}/, newImportPart);
          newImportLines.push(newImportLine);
          changed = true;
        } else {
          newImportLines.push(line);
        }
      } else {
        // Remove unused import entirely
        console.log(`Removing unused import: ${line.trim()} from ${filePath}`);
        changed = true;
      }
    } catch (error) {
      // If parsing fails, keep the original line
      newImportLines.push(line);
    }
  }
  
  if (changed) {
    const newContent = newImportLines.concat([''], codeLines).join('\n');
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`✓ Updated ${filePath}`);
    return true;
  }
  
  return false;
}

// Remove unused variables (simple cases)
function removeUnusedVariables(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;
  let changed = false;
  
  // Remove simple unused variable declarations
  const unusedVarPatterns = [
    /const\s+(\w+)\s*=\s*[^;]+;\s*$/gm,
    /let\s+(\w+)\s*=\s*[^;]+;\s*$/gm,
    /var\s+(\w+)\s*=\s*[^;]+;\s*$/gm
  ];
  
  // This is a basic implementation - in practice, you'd want more sophisticated analysis
  return changed;
}

// Main function
function cleanUnusedImports() {
  const srcDir = path.join(process.cwd(), 'src');
  const files = findFiles(srcDir);
  
  console.log(`Found ${files.length} files to process...`);
  
  let processedCount = 0;
  
  for (const file of files) {
    try {
      const result = removeUnusedImports(file);
      if (result) {
        processedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`\n✅ Processed ${processedCount} files with changes`);
  console.log(`📁 Total files scanned: ${files.length}`);
}

// Run if called directly
if (require.main === module) {
  cleanUnusedImports();
}

module.exports = { cleanUnusedImports };