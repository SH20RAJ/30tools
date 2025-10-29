#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Load tools.json
const toolsData = JSON.parse(fs.readFileSync('src/constants/tools.json', 'utf8'));

// Get all tool routes from tools.json
const allRoutes = new Set();
Object.values(toolsData.categories).forEach(category => {
  category.tools.forEach(tool => {
    if (!tool.external && tool.route) {
      allRoutes.add(tool.route);
    }
  });
});

// Find existing directories in app
const appDir = 'src/app';
const existingTools = new Set();

function findPageDirectories(dir) {
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Check if this directory contains a page.js or page.tsx
      const hasPage = fs.existsSync(path.join(fullPath, 'page.js')) || 
                     fs.existsSync(path.join(fullPath, 'page.tsx'));
      
      if (hasPage) {
        // Extract route from path
        let route = fullPath.replace(appDir, '').replace(/^\(.*?\)/, '');
        if (route && !route.includes('(') && !route.includes(')')) {
          existingTools.add(route);
        }
      }
      
      // Recursively search subdirectories
      if (!item.startsWith('.')) {
        findPageDirectories(fullPath);
      }
    }
  });
}

findPageDirectories(appDir);

// Find missing tools
const missingTools = [];
allRoutes.forEach(route => {
  if (!existingTools.has(route)) {
    missingTools.push(route);
  }
});

console.log('=== MISSING TOOLS ===');
console.log(`Total tools in tools.json: ${allRoutes.size}`);
console.log(`Existing tools: ${existingTools.size}`);
console.log(`Missing tools: ${missingTools.length}`);
console.log('\nMissing tool routes:');
missingTools.sort().forEach(route => {
  console.log(route);
});

// Find tools that exist but aren't in tools.json
const extraTools = [];
existingTools.forEach(route => {
  if (!allRoutes.has(route)) {
    extraTools.push(route);
  }
});

if (extraTools.length > 0) {
  console.log('\n=== EXTRA TOOLS (exist but not in tools.json) ===');
  extraTools.sort().forEach(route => {
    console.log(route);
  });
}