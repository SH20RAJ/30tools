#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const srcDir = './src';

// Color mappings for simplification
const colorMappings = {
  // Remove all gradient backgrounds
  'bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800': 'bg-background',
  'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800': 'bg-background',
  'bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800': 'bg-background',
  'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800': 'bg-background',
  'bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-900 dark:to-gray-800': 'bg-background',
  'bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-gray-900 dark:to-gray-800': 'bg-background',
  
  // Common gradient patterns
  'bg-gradient-to-br from-blue-600 to-cyan-600': 'bg-primary',
  'bg-gradient-to-br from-purple-600 to-pink-600': 'bg-primary',
  'bg-gradient-to-br from-green-600 to-emerald-600': 'bg-primary',
  'bg-gradient-to-br from-red-600 to-orange-600': 'bg-primary',
  'bg-gradient-to-br from-yellow-600 to-amber-600': 'bg-primary',
  
  'bg-gradient-to-r from-blue-600 to-cyan-600': 'bg-primary',
  'bg-gradient-to-r from-purple-600 to-pink-600': 'bg-primary',
  'bg-gradient-to-r from-green-600 to-emerald-600': 'bg-primary',
  'bg-gradient-to-r from-red-600 to-orange-600': 'bg-primary',
  
  // Specific color backgrounds to neutral equivalents
  'bg-blue-50': 'bg-muted/50',
  'bg-blue-100': 'bg-muted',
  'bg-blue-600': 'bg-primary',
  'bg-blue-700': 'bg-primary/90',
  
  'bg-purple-50': 'bg-muted/50',
  'bg-purple-100': 'bg-muted',
  'bg-purple-600': 'bg-primary',
  'bg-purple-700': 'bg-primary/90',
  
  'bg-green-50': 'bg-muted/50',
  'bg-green-100': 'bg-muted',
  'bg-green-600': 'bg-primary',
  'bg-green-700': 'bg-primary/90',
  
  'bg-red-50': 'bg-destructive/10',
  'bg-red-100': 'bg-destructive/20',
  'bg-red-600': 'bg-destructive',
  'bg-red-700': 'bg-destructive/90',
  
  'bg-yellow-50': 'bg-muted/50',
  'bg-yellow-100': 'bg-muted',
  'bg-yellow-600': 'bg-primary',
  'bg-yellow-700': 'bg-primary/90',
  
  'bg-pink-50': 'bg-muted/50',
  'bg-pink-100': 'bg-muted',
  'bg-pink-600': 'bg-primary',
  'bg-pink-700': 'bg-primary/90',
  
  'bg-indigo-50': 'bg-muted/50',
  'bg-indigo-100': 'bg-muted',
  'bg-indigo-600': 'bg-primary',
  'bg-indigo-700': 'bg-primary/90',
  
  'bg-cyan-50': 'bg-muted/50',
  'bg-cyan-100': 'bg-muted',
  'bg-cyan-600': 'bg-primary',
  'bg-cyan-700': 'bg-primary/90',
  
  'bg-emerald-50': 'bg-muted/50',
  'bg-emerald-100': 'bg-muted',
  'bg-emerald-600': 'bg-primary',
  'bg-emerald-700': 'bg-primary/90',
  
  'bg-orange-50': 'bg-muted/50',
  'bg-orange-100': 'bg-muted',
  'bg-orange-600': 'bg-primary',
  'bg-orange-700': 'bg-primary/90',
  
  'bg-amber-50': 'bg-muted/50',
  'bg-amber-100': 'bg-muted',
  'bg-amber-600': 'bg-primary',
  'bg-amber-700': 'bg-primary/90',
  
  // Text colors
  'text-blue-600': 'text-primary',
  'text-blue-700': 'text-primary',
  'text-blue-800': 'text-foreground',
  'text-purple-600': 'text-primary',
  'text-purple-700': 'text-primary',
  'text-purple-800': 'text-foreground',
  'text-green-600': 'text-primary',
  'text-green-700': 'text-primary',
  'text-green-800': 'text-foreground',
  'text-red-600': 'text-destructive',
  'text-red-700': 'text-destructive',
  'text-red-800': 'text-destructive',
  
  // Border colors
  'border-blue-200': 'border-border',
  'border-blue-300': 'border-border',
  'border-purple-200': 'border-border',
  'border-purple-300': 'border-border',
  'border-green-200': 'border-border',
  'border-green-300': 'border-border',
  'border-red-200': 'border-destructive/50',
  'border-red-300': 'border-destructive/50',
  
  // Focus styles
  'focus:border-blue-500': 'focus:border-primary',
  'focus:ring-blue-500': 'focus:ring-primary',
  'focus:border-purple-500': 'focus:border-primary',
  'focus:ring-purple-500': 'focus:ring-primary',
  'focus:border-green-500': 'focus:border-primary',
  'focus:ring-green-500': 'focus:ring-primary',
  
  // Hover styles
  'hover:bg-blue-700': 'hover:bg-primary/90',
  'hover:bg-purple-700': 'hover:bg-primary/90',
  'hover:bg-green-700': 'hover:bg-primary/90',
  'hover:bg-red-700': 'hover:bg-destructive/90',
};

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      if (!file.startsWith('.') && file !== 'node_modules') {
        arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
      }
    } else {
      if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx')) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });

  return arrayOfFiles;
}

function simplifyFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  // Apply color mappings
  for (const [oldColor, newColor] of Object.entries(colorMappings)) {
    const regex = new RegExp(oldColor.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    if (content.includes(oldColor)) {
      content = content.replace(regex, newColor);
      changed = true;
    }
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Simplified: ${filePath}`);
  }
  
  return changed;
}

console.log('🎨 Starting styling simplification...');

const allFiles = getAllFiles(srcDir);
let totalChanged = 0;

allFiles.forEach(filePath => {
  if (simplifyFile(filePath)) {
    totalChanged++;
  }
});

console.log(`\n🎉 Styling simplification completed!`);
console.log(`📁 Total files processed: ${allFiles.length}`);
console.log(`✨ Files changed: ${totalChanged}`);