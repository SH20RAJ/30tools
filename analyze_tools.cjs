#!/usr/bin/env node
/**
 * Tool Implementation Analyzer
 * Run from project root
 */

const fs = require('fs');
const path = require('path');

// Project root is current working directory
const BASE = process.cwd();
const TOOLS_JSON = path.join(BASE, 'src/constants/tools.json');

const toolsData = JSON.parse(fs.readFileSync(TOOLS_JSON, 'utf8'));

let tools = [];
for (const catKey of Object.keys(toolsData.categories)) {
  const cat = toolsData.categories[catKey];
  for (const tool of cat.tools) {
    tools.push({
      id: tool.id,
      name: tool.name,
      route: tool.route,
      category: catKey,
    });
  }
}

console.log(`Total tools: ${tools.length}\n`);

// Group by category
const byCategory = tools.reduce((acc, t) => {
  (acc[t.category] = acc[t.category] || []).push(t);
  return acc;
}, {});

function fileExists(p) { return fs.existsSync(p); }

// Common component locations
function getComponentPaths(toolId, category) {
  const name = toolId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
  return [
    path.join(BASE, 'components/tools', category, `${name}.jsx`),
    path.join(BASE, 'components/tools', category, `${name}.tsx`),
    path.join(BASE, 'components/tools', 'image', `${name}.jsx`),
    path.join(BASE, 'components/tools', 'pdf', `${name}.jsx`),
    path.join(BASE, 'components/tools', 'video', `${name}.jsx`),
    path.join(BASE, 'components/tools', 'audio', `${name}.jsx`),
    path.join(BASE, 'components/tools', 'generators', `${name}.jsx`),
    path.join(BASE, 'components/tools', 'text', `${name}.jsx`),
    path.join(BASE, 'components/tools', 'developer', `${name}.jsx`),
    path.join(BASE, 'components/tools', 'seo', `${name}.jsx`),
    path.join(BASE, 'components/tools', 'utilities', `${name}.jsx`),
    path.join(BASE, 'components/tools', 'downloaders', `${name}.jsx`),
    path.join(BASE, 'components/tools', 'youtube', `${name}.jsx`),
  ];
}

function usesGenericMount(content) {
  return content.includes('RegisteredToolMount') || content.includes('ToolPageContent');
}

function usesBuiltInComponents(content) {
  const patterns = [
    'UniversalUnitConverter', 'BaseConverter', 'BuiltInCalculators',
    'BuiltInMarkup', 'BuiltInSerialization', 'BuiltInSafeHttp',
    'TextCompareMount', 'SimpleRepeater', 'WordCounterMount',
    'RemoveBreaks', 'CommaSeparatorMount', 'SlugMount', 'TagsFromText',
    'DownloaderEngine', 'YouTubeChannelIDFinderTool'
  ];
  return patterns.some(p => content.includes(p));
}

let summary = {
  total: tools.length,
  hasDedicatedPage: 0,
  usesGenericMount: 0,
  missingComponent: 0,
  handledByBuiltIn: 0,
  unknown: 0
};

for (const [category, catTools] of Object.entries(byCategory)) {
  console.log(`\n${'='.repeat(65)}`);
  console.log(`CATEGORY: ${category} (${catTools.length} tools)`);
  console.log(`─`.repeat(65));

   for (const t of catTools) {
     const routePath = t.route.replace(/^\//, '');
     const groupFolder = `(${category})`;
     const pagePath = path.join(BASE, 'src/app', groupFolder, routePath, 'page.tsx');
     const pageExists = fileExists(pagePath);
    let pageContent = '';
    let status = '  ';

    if (pageExists) {
      pageContent = fs.readFileSync(pagePath, 'utf8');
      if (usesGenericMount(pageContent)) {
        status = '⚠️ ';
        summary.usesGenericMount++;
      } else {
        status = '✓';
        summary.hasDedicatedPage++;
      }
    } else {
      // Check if it's handled by generic [slug] route
      const genericRoute = path.join(BASE, 'app', 'tools', '[slug]', 'page.tsx');
      if (fileExists(genericRoute)) {
        const genericContent = fs.readFileSync(genericRoute, 'utf8');
        // Tools registered in tool-registry likely go through this
        status = '⚡';
        summary.unknown++;
      } else {
        status = '❌';
        summary.missingComponent++;
      }
    }

    // Check component existence
    const compPaths = getComponentPaths(t.id, category);
    const compExists = compPaths.some(fileExists);
    if (!compExists && pageExists && !usesGenericMount(pageContent)) {
      // Maybe component is inline or uses built-ins
      if (usesBuiltInComponents(pageContent)) {
        // ok
      } else {
        // Check if it imports something
      }
    }

    console.log(`${status} ${t.id.padEnd(45)} ${t.route}`);
  }
}

console.log(`\n${'='.repeat(65)}`);
console.log('SUMMARY:');
console.log(`  Total tools:            ${summary.total}`);
console.log(`  Pages with dedicated component (not using generic mount): ${summary.hasDedicatedPage}`);
console.log(`  Pages using generic RegisteredToolMount: ${summary.usesGenericMount}`);
console.log(`  Tools without page component (likely generic [slug]): ${summary.unknown}`);
console.log(`  Pages missing entirely: ${summary.missingComponent}`);
