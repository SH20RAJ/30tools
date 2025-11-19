const fs = require('fs');
const path = require('path');

const toolsDir = path.join(__dirname, '../src/components/tools');
const seoComponents = ['SEOBooster', 'StructuredData', 'BreadcrumbsEnhanced', 'FAQSection'];

function scanDirectory(dir) {
  const files = fs.readdirSync(dir);
  let results = [];

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      results = results.concat(scanDirectory(filePath));
    } else if (file.endsWith('.jsx') || file.endsWith('.tsx')) {
      const content = fs.readFileSync(filePath, 'utf8');
      const missingComponents = seoComponents.filter(comp => !content.includes(comp));
      
      if (missingComponents.length > 0) {
        results.push({
          file: filePath.replace(path.join(__dirname, '../'), ''),
          missing: missingComponents
        });
      }
    }
  });

  return results;
}

const missingSEO = scanDirectory(toolsDir);
console.log("Scanning complete.");
if (missingSEO.length === 0) {
  console.log("All tools have SEO components!");
} else {
  console.log(JSON.stringify(missingSEO, null, 2));
}
