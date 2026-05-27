#!/usr/bin/env node

/**
 * SEO Metadata Audit Script
 * Analyzes all tool pages for metadata quality and generates a report
 */

const fs = require('fs');
const path = require('path');

// Load tools.json
const toolsPath = path.join(__dirname, '../src/constants/tools.json');
const toolsData = JSON.parse(fs.readFileSync(toolsPath, 'utf8'));

// Metadata quality checks
const checks = {
  titleLength: (title) => {
    const len = title?.length || 0;
    if (len === 0) return { pass: false, score: 0, message: 'Missing title' };
    if (len < 30) return { pass: false, score: 30, message: 'Title too short (< 30 chars)' };
    if (len > 60) return { pass: false, score: 60, message: 'Title too long (> 60 chars)' };
    return { pass: true, score: 100, message: 'Title length optimal' };
  },

  descriptionLength: (desc) => {
    const len = desc?.length || 0;
    if (len === 0) return { pass: false, score: 0, message: 'Missing description' };
    if (len < 120) return { pass: false, score: 40, message: 'Description too short (< 120 chars)' };
    if (len > 160) return { pass: false, score: 70, message: 'Description too long (> 160 chars)' };
    return { pass: true, score: 100, message: 'Description length optimal' };
  },

  hasKeywords: (tool) => {
    const hasFeatures = tool.features && tool.features.length > 0;
    const hasFAQs = tool.faqs && tool.faqs.length > 0;
    const hasHowTo = tool.howTo && tool.howTo.length > 0;
    
    let score = 0;
    if (hasFeatures) score += 40;
    if (hasFAQs) score += 30;
    if (hasHowTo) score += 30;
    
    return {
      pass: score >= 70,
      score,
      message: `Has ${hasFeatures ? 'features' : ''} ${hasFAQs ? 'FAQs' : ''} ${hasHowTo ? 'howTo' : ''}`.trim() || 'Missing structured content'
    };
  },

  hasExtraSlugs: (tool) => {
    const count = tool.extraSlugs?.length || 0;
    if (count === 0) return { pass: false, score: 0, message: 'No extra slugs' };
    if (count < 5) return { pass: false, score: 50, message: `Only ${count} extra slugs (target: 10+)` };
    if (count < 10) return { pass: true, score: 75, message: `${count} extra slugs (good)` };
    return { pass: true, score: 100, message: `${count} extra slugs (excellent)` };
  },

  contentQuality: (tool) => {
    const articleLength = tool.article?.length || 0;
    if (articleLength === 0) return { pass: false, score: 0, message: 'No article content' };
    if (articleLength < 500) return { pass: false, score: 30, message: 'Article too short (< 500 chars)' };
    if (articleLength < 1000) return { pass: false, score: 60, message: 'Article needs expansion (< 1000 chars)' };
    return { pass: true, score: 100, message: 'Article content sufficient' };
  }
};

// Analyze all tools
function analyzeTools() {
  const results = [];
  let totalScore = 0;
  let toolCount = 0;

  // Flatten all tools from all categories
  const allTools = [];
  for (const [categoryKey, categoryData] of Object.entries(toolsData.categories || {})) {
    if (categoryData.tools && Array.isArray(categoryData.tools)) {
      allTools.push(...categoryData.tools.map(t => ({ ...t, category: categoryKey })));
    }
  }

  console.log(`\n🔍 Analyzing ${allTools.length} tools...\n`);

  for (const tool of allTools) {
    const toolResults = {
      id: tool.id,
      name: tool.name,
      category: tool.category,
      route: tool.route,
      checks: {},
      score: 0,
      issues: []
    };

    // Run all checks
    const titleCheck = checks.titleLength(tool.name);
    const descCheck = checks.descriptionLength(tool.description);
    const keywordsCheck = checks.hasKeywords(tool);
    const slugsCheck = checks.hasExtraSlugs(tool);
    const contentCheck = checks.contentQuality(tool);

    toolResults.checks = {
      title: titleCheck,
      description: descCheck,
      keywords: keywordsCheck,
      slugs: slugsCheck,
      content: contentCheck
    };

    // Calculate overall score
    const scores = [titleCheck.score, descCheck.score, keywordsCheck.score, slugsCheck.score, contentCheck.score];
    toolResults.score = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);

    // Collect issues
    if (!titleCheck.pass) toolResults.issues.push(titleCheck.message);
    if (!descCheck.pass) toolResults.issues.push(descCheck.message);
    if (!keywordsCheck.pass) toolResults.issues.push(keywordsCheck.message);
    if (!slugsCheck.pass) toolResults.issues.push(slugsCheck.message);
    if (!contentCheck.pass) toolResults.issues.push(contentCheck.message);

    results.push(toolResults);
    totalScore += toolResults.score;
    toolCount++;
  }

  return { results, averageScore: Math.round(totalScore / toolCount), totalTools: toolCount };
}

// Generate report
function generateReport(analysis) {
  const { results, averageScore, totalTools } = analysis;

  console.log('═══════════════════════════════════════════════════════════');
  console.log('                  SEO METADATA AUDIT REPORT                ');
  console.log('═══════════════════════════════════════════════════════════\n');

  console.log(`📊 Overall Statistics:`);
  console.log(`   Total Tools Analyzed: ${totalTools}`);
  console.log(`   Average SEO Score: ${averageScore}/100`);
  console.log(`   Grade: ${getGrade(averageScore)}\n`);

  // Score distribution
  const excellent = results.filter(r => r.score >= 90).length;
  const good = results.filter(r => r.score >= 70 && r.score < 90).length;
  const needsWork = results.filter(r => r.score >= 50 && r.score < 70).length;
  const poor = results.filter(r => r.score < 50).length;

  console.log(`📈 Score Distribution:`);
  console.log(`   🟢 Excellent (90-100): ${excellent} tools (${Math.round(excellent/totalTools*100)}%)`);
  console.log(`   🟡 Good (70-89): ${good} tools (${Math.round(good/totalTools*100)}%)`);
  console.log(`   🟠 Needs Work (50-69): ${needsWork} tools (${Math.round(needsWork/totalTools*100)}%)`);
  console.log(`   🔴 Poor (0-49): ${poor} tools (${Math.round(poor/totalTools*100)}%)\n`);

  // Top issues
  const allIssues = results.flatMap(r => r.issues);
  const issueCounts = {};
  allIssues.forEach(issue => {
    issueCounts[issue] = (issueCounts[issue] || 0) + 1;
  });

  const topIssues = Object.entries(issueCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  console.log(`🚨 Top 10 Issues:`);
  topIssues.forEach(([issue, count], index) => {
    console.log(`   ${index + 1}. ${issue}: ${count} tools (${Math.round(count/totalTools*100)}%)`);
  });

  // Worst performing tools
  const worstTools = results
    .sort((a, b) => a.score - b.score)
    .slice(0, 20);

  console.log(`\n⚠️  20 Tools Needing Most Attention:\n`);
  worstTools.forEach((tool, index) => {
    console.log(`   ${index + 1}. ${tool.name} (${tool.route})`);
    console.log(`      Score: ${tool.score}/100`);
    console.log(`      Issues: ${tool.issues.join(', ')}\n`);
  });

  // Save detailed report to file
  const reportPath = path.join(__dirname, '../seo-audit-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(analysis, null, 2));
  console.log(`\n✅ Detailed report saved to: ${reportPath}\n`);

  // Generate action items
  console.log('═══════════════════════════════════════════════════════════');
  console.log('                     ACTION ITEMS                          ');
  console.log('═══════════════════════════════════════════════════════════\n');

  console.log('📋 Priority Actions:\n');
  if (poor > 0) {
    console.log(`   1. Fix ${poor} tools with poor SEO scores (< 50)`);
  }
  if (needsWork > 0) {
    console.log(`   2. Improve ${needsWork} tools that need work (50-69)`);
  }
  topIssues.slice(0, 5).forEach((issue, index) => {
    console.log(`   ${index + 3}. Address: ${issue[0]} (${issue[1]} tools affected)`);
  });

  console.log('\n═══════════════════════════════════════════════════════════\n');
}

function getGrade(score) {
  if (score >= 90) return '🟢 A (Excellent)';
  if (score >= 80) return '🟢 B (Good)';
  if (score >= 70) return '🟡 C (Fair)';
  if (score >= 60) return '🟠 D (Needs Improvement)';
  return '🔴 F (Poor)';
}

// Run the audit
try {
  const analysis = analyzeTools();
  generateReport(analysis);
} catch (error) {
  console.error('❌ Error running SEO audit:', error.message);
  process.exit(1);
}
