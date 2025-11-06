#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// SEO analysis script for 30tools
console.log('🔍 30tools SEO Analysis Starting...\n');

const appDir = './src/app';
const seoIssues = [];
const pageAnalysis = [];

// Helper function to extract metadata from file content
function extractMetadata(content, filePath) {
  const metadata = {
    hasTitle: false,
    titleLength: 0,
    hasDescription: false,
    descriptionLength: 0,
    hasKeywords: false,
    keywordCount: 0,
    hasOpenGraph: false,
    hasTwitterCard: false,
    hasCanonical: false,
    hasStructuredData: false,
    title: '',
    description: '',
    issues: []
  };

  // Extract title
  const titleMatch = content.match(/title:\s*["'`]([^"'`]+)["'`]/);
  if (titleMatch) {
    metadata.hasTitle = true;
    metadata.title = titleMatch[1];
    metadata.titleLength = titleMatch[1].length;
  }

  // Extract description
  const descMatch = content.match(/description:\s*["'`]([^"'`]+)["'`]/);
  if (descMatch) {
    metadata.hasDescription = true;
    metadata.description = descMatch[1];
    metadata.descriptionLength = descMatch[1].length;
  }

  // Check for keywords
  metadata.hasKeywords = content.includes('keywords');
  if (metadata.hasKeywords) {
    const keywordMatches = content.match(/keywords[^}]+/g);
    if (keywordMatches) {
      const keywordContent = keywordMatches[0];
      metadata.keywordCount = (keywordContent.match(/["'`][^"'`]+["'`]/g) || []).length;
    }
  }

  // Check for OpenGraph
  metadata.hasOpenGraph = content.includes('openGraph');

  // Check for Twitter Card
  metadata.hasTwitterCard = content.includes('twitter');

  // Check for canonical
  metadata.hasCanonical = content.includes('canonical');

  // Check for structured data
  metadata.hasStructuredData = content.includes('application/ld+json') || content.includes('schema.org');

  // Analyze SEO issues
  if (!metadata.hasTitle) {
    metadata.issues.push('❌ Missing title');
  } else if (metadata.titleLength < 30 || metadata.titleLength > 65) {
    metadata.issues.push(`⚠️ Title length ${metadata.titleLength} chars (optimal: 30-65)`);
  }

  if (!metadata.hasDescription) {
    metadata.issues.push('❌ Missing description');
  } else if (metadata.descriptionLength < 120 || metadata.descriptionLength > 160) {
    metadata.issues.push(`⚠️ Description length ${metadata.descriptionLength} chars (optimal: 120-160)`);
  }

  if (!metadata.hasKeywords) {
    metadata.issues.push('❌ Missing keywords');
  } else if (metadata.keywordCount < 10) {
    metadata.issues.push(`⚠️ Only ${metadata.keywordCount} keywords (recommended: 15-25)`);
  }

  if (!metadata.hasOpenGraph) {
    metadata.issues.push('❌ Missing OpenGraph tags');
  }

  if (!metadata.hasTwitterCard) {
    metadata.issues.push('❌ Missing Twitter Card');
  }

  if (!metadata.hasCanonical) {
    metadata.issues.push('❌ Missing canonical URL');
  }

  if (!metadata.hasStructuredData) {
    metadata.issues.push('❌ Missing structured data');
  }

  return metadata;
}

// Function to find all page.js files
function findPageFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const entries = fs.readdirSync(currentDir);
    
    entries.forEach(entry => {
      const fullPath = path.join(currentDir, entry);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !entry.startsWith('.') && entry !== 'node_modules') {
        traverse(fullPath);
      } else if (entry === 'page.js') {
        files.push(fullPath);
      }
    });
  }
  
  traverse(dir);
  return files;
}

// Main analysis function
function analyzeSEO() {
  const pageFiles = findPageFiles(appDir);
  
  console.log(`📊 Found ${pageFiles.length} pages to analyze\n`);
  
  let totalIssues = 0;
  let pagesWithIssues = 0;
  
  pageFiles.forEach((filePath, index) => {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const relativePath = filePath.replace('./src/app/', '');
      const metadata = extractMetadata(content, filePath);
      
      pageAnalysis.push({
        path: relativePath,
        fullPath: filePath,
        metadata,
        hasIssues: metadata.issues.length > 0
      });
      
      if (metadata.issues.length > 0) {
        pagesWithIssues++;
        totalIssues += metadata.issues.length;
        
        console.log(`📄 ${relativePath}`);
        if (metadata.title) {
          console.log(`   Title: "${metadata.title}" (${metadata.titleLength} chars)`);
        }
        if (metadata.description) {
          console.log(`   Desc: "${metadata.description.substring(0, 80)}..." (${metadata.descriptionLength} chars)`);
        }
        metadata.issues.forEach(issue => {
          console.log(`   ${issue}`);
        });
        console.log('');
      }
      
    } catch (error) {
      console.error(`❌ Error analyzing ${filePath}:`, error.message);
    }
  });
  
  // Summary report
  console.log('\n🎯 SEO ANALYSIS SUMMARY');
  console.log('='.repeat(50));
  console.log(`📊 Total Pages Analyzed: ${pageFiles.length}`);
  console.log(`❌ Pages with SEO Issues: ${pagesWithIssues}`);
  console.log(`✅ Pages without Issues: ${pageFiles.length - pagesWithIssues}`);
  console.log(`⚠️ Total Issues Found: ${totalIssues}`);
  console.log(`📈 Success Rate: ${((pageFiles.length - pagesWithIssues) / pageFiles.length * 100).toFixed(1)}%`);
  
  // Issue breakdown
  const issueTypes = {
    'Missing title': 0,
    'Title length': 0,
    'Missing description': 0,
    'Description length': 0,
    'Missing keywords': 0,
    'Keywords count': 0,
    'Missing OpenGraph': 0,
    'Missing Twitter Card': 0,
    'Missing canonical': 0,
    'Missing structured data': 0
  };
  
  pageAnalysis.forEach(page => {
    page.metadata.issues.forEach(issue => {
      if (issue.includes('Missing title')) issueTypes['Missing title']++;
      else if (issue.includes('Title length')) issueTypes['Title length']++;
      else if (issue.includes('Missing description')) issueTypes['Missing description']++;
      else if (issue.includes('Description length')) issueTypes['Description length']++;
      else if (issue.includes('Missing keywords')) issueTypes['Missing keywords']++;
      else if (issue.includes('keywords')) issueTypes['Keywords count']++;
      else if (issue.includes('Missing OpenGraph')) issueTypes['Missing OpenGraph']++;
      else if (issue.includes('Missing Twitter Card')) issueTypes['Missing Twitter Card']++;
      else if (issue.includes('Missing canonical')) issueTypes['Missing canonical']++;
      else if (issue.includes('Missing structured data')) issueTypes['Missing structured data']++;
    });
  });
  
  console.log('\n📋 ISSUE BREAKDOWN:');
  Object.entries(issueTypes).forEach(([issue, count]) => {
    if (count > 0) {
      console.log(`   ${issue}: ${count} pages`);
    }
  });
  
  // Priority fixes
  console.log('\n🚨 PRIORITY FIXES NEEDED:');
  const priorityPages = pageAnalysis
    .filter(page => page.metadata.issues.length >= 5)
    .sort((a, b) => b.metadata.issues.length - a.metadata.issues.length)
    .slice(0, 10);
    
  priorityPages.forEach((page, index) => {
    console.log(`${index + 1}. ${page.path} (${page.metadata.issues.length} issues)`);
  });
  
  // Save detailed report
  const report = {
    summary: {
      totalPages: pageFiles.length,
      pagesWithIssues,
      totalIssues,
      successRate: ((pageFiles.length - pagesWithIssues) / pageFiles.length * 100).toFixed(1)
    },
    issueBreakdown: issueTypes,
    priorityPages: priorityPages.map(p => ({
      path: p.path,
      issueCount: p.metadata.issues.length,
      issues: p.metadata.issues
    })),
    allPages: pageAnalysis.map(p => ({
      path: p.path,
      title: p.metadata.title,
      titleLength: p.metadata.titleLength,
      description: p.metadata.description,
      descriptionLength: p.metadata.descriptionLength,
      issues: p.metadata.issues,
      hasIssues: p.hasIssues
    }))
  };
  
  fs.writeFileSync('./seo-analysis-report.json', JSON.stringify(report, null, 2));
  console.log('\n💾 Detailed report saved to: seo-analysis-report.json');
  
  return { pageAnalysis, report };
}

// Run the analysis
const results = analyzeSEO();

console.log('\n🎯 NEXT STEPS:');
console.log('1. Run: node fix_seo_issues.js - to automatically fix common issues');
console.log('2. Review seo-analysis-report.json for detailed breakdown');
console.log('3. Focus on priority pages with 5+ issues first');
console.log('4. Implement missing structured data');
console.log('5. Optimize title and description lengths');

module.exports = { analyzeSEO, extractMetadata };