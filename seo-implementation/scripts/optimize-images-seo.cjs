#!/usr/bin/env node

/**
 * Image SEO Optimization Script
 * Generates alt text recommendations and image optimization checklist
 */

const fs = require('fs');
const path = require('path');

function generateAltText(imageName, context = 'tool interface') {
  // Remove file extension and convert to readable format
  const baseName = imageName.replace(/\.(jpg|jpeg|png|webp|gif|svg)$/i, '');
  const readable = baseName
    .replace(/[-_]/g, ' ')
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .toLowerCase();
  
  return `${readable} ${context} - Free online tool by 30tools`;
}

function generateImageOptimizationReport() {
  const publicDir = path.join(__dirname, '../public');
  const report = {
    totalImages: 0,
    needsOptimization: [],
    recommendations: [],
  };
  
  console.log('\n🖼️  Image SEO Optimization Report\n');
  console.log('═'.repeat(80));
  
  // Scan public directory for images
  function scanDirectory(dir, relativePath = '') {
    if (!fs.existsSync(dir)) return;
    
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const relPath = path.join(relativePath, item);
      const stats = fs.lstatSync(fullPath);
      
      if (stats.isDirectory()) {
        scanDirectory(fullPath, relPath);
      } else if (/\.(jpg|jpeg|png|webp|gif|svg)$/i.test(item)) {
        report.totalImages++;
        
        // Check file size
        const sizeKB = stats.size / 1024;
        if (sizeKB > 200) {
          report.needsOptimization.push({
            path: relPath,
            size: Math.round(sizeKB),
            recommendation: 'Compress to < 200KB',
          });
        }
        
        // Generate alt text suggestion
        report.recommendations.push({
          path: relPath,
          suggestedAlt: generateAltText(item),
        });
      }
    }
  }
  
  scanDirectory(publicDir);
  
  console.log(`\n📊 Summary:`);
  console.log(`   Total images found: ${report.totalImages}`);
  console.log(`   Images needing compression: ${report.needsOptimization.length}`);
  
  if (report.needsOptimization.length > 0) {
    console.log(`\n⚠️  Images to Compress (> 200KB):\n`);
    report.needsOptimization.slice(0, 20).forEach((img, i) => {
      console.log(`   ${i + 1}. ${img.path} (${img.size}KB) - ${img.recommendation}`);
    });
    
    if (report.needsOptimization.length > 20) {
      console.log(`   ... and ${report.needsOptimization.length - 20} more`);
    }
  }
  
  console.log(`\n✅ Image Optimization Checklist:\n`);
  console.log(`   [ ] Compress all images to < 200KB`);
  console.log(`   [ ] Convert JPG/PNG to WebP format`);
  console.log(`   [ ] Add descriptive alt text to all images`);
  console.log(`   [ ] Implement lazy loading for below-fold images`);
  console.log(`   [ ] Use responsive images with srcset`);
  console.log(`   [ ] Add image sitemaps`);
  console.log(`   [ ] Optimize image file names (descriptive, lowercase, hyphens)`);
  
  console.log(`\n💡 Alt Text Pattern:`);
  console.log(`   "[Tool Name] interface showing [specific feature] - Free online tool by 30tools"`);
  
  console.log(`\n📝 Example Alt Text Suggestions:\n`);
  report.recommendations.slice(0, 10).forEach((rec, i) => {
    console.log(`   ${i + 1}. ${rec.path}`);
    console.log(`      alt="${rec.suggestedAlt}"\n`);
  });
  
  // Save full report
  const reportPath = path.join(__dirname, '../image-seo-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  console.log(`\n📄 Full report saved to: ${reportPath}`);
  console.log(`\n${'═'.repeat(80)}\n`);
}

generateImageOptimizationReport();
