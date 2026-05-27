#!/usr/bin/env node

/**
 * Add Internal Links Script
 * Adds related tools and category links to improve internal linking
 */

const fs = require('fs');
const path = require('path');

const toolsPath = path.join(__dirname, '../src/constants/tools.json');
const toolsData = JSON.parse(fs.readFileSync(toolsPath, 'utf8'));

// Get all tools
function getAllTools() {
  const tools = [];
  for (const [categoryKey, categoryData] of Object.entries(toolsData.categories || {})) {
    if (categoryData.tools && Array.isArray(categoryData.tools)) {
      tools.push(...categoryData.tools.map(t => ({ ...t, categoryKey })));
    }
  }
  return tools;
}

// Find related tools based on category and keywords
function findRelatedTools(tool, allTools, count = 12) {
  const related = [];
  
  // 1. Same category tools (prioritize)
  const sameCategory = allTools.filter(t => 
    t.categoryKey === tool.categoryKey && t.id !== tool.id
  );
  related.push(...sameCategory.slice(0, 8));
  
  // 2. Popular tools from other categories
  if (related.length < count) {
    const popular = allTools.filter(t => 
      t.popular && t.id !== tool.id && !related.find(r => r.id === t.id)
    );
    related.push(...popular.slice(0, count - related.length));
  }
  
  // 3. Fill remaining with any tools
  if (related.length < count) {
    const remaining = allTools.filter(t => 
      t.id !== tool.id && !related.find(r => r.id === t.id)
    );
    related.push(...remaining.slice(0, count - related.length));
  }
  
  return related.slice(0, count);
}

// Add related tools to each tool
function addRelatedTools() {
  const allTools = getAllTools();
  let updatedCount = 0;
  
  console.log(`\n🔗 Adding internal links to ${allTools.length} tools...\n`);
  
  for (const [categoryKey, categoryData] of Object.entries(toolsData.categories || {})) {
    if (!categoryData.tools || !Array.isArray(categoryData.tools)) continue;
    
    for (let i = 0; i < categoryData.tools.length; i++) {
      const tool = categoryData.tools[i];
      const fullTool = { ...tool, categoryKey };
      
      // Find and add related tools
      const relatedTools = findRelatedTools(fullTool, allTools, 12);
      
      tool.relatedTools = relatedTools.map(t => ({
        id: t.id,
        name: t.name,
        route: t.route,
        description: t.description.slice(0, 100) + '...',
      }));
      
      updatedCount++;
      
      if (updatedCount % 50 === 0) {
        console.log(`✓ Processed ${updatedCount} tools...`);
      }
    }
  }
  
  // Update metadata
  toolsData.metadata.lastUpdated = new Date().toISOString().split('T')[0];
  
  // Save updated tools.json
  fs.writeFileSync(toolsPath, JSON.stringify(toolsData, null, 2));
  
  console.log(`\n✅ Internal linking complete!`);
  console.log(`   Total tools updated: ${updatedCount}`);
  console.log(`   Average related tools per page: 12`);
  console.log(`\n📄 Updated: ${toolsPath}\n`);
}

// Run
try {
  addRelatedTools();
} catch (error) {
  console.error('❌ Error adding internal links:', error.message);
  process.exit(1);
}
