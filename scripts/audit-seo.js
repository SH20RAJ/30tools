const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '../src/app');
const reportFile = path.join(__dirname, '../seo_audit_report.md');

let issues = {
    missingMetadata: [],
    missingH1: [],
    missingCanonical: [],
    missingAltText: [],
    multipleH1: []
};

function scanDirectory(directory) {
    const files = fs.readdirSync(directory);

    files.forEach(file => {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            scanDirectory(fullPath);
        } else if (file === 'page.js' || file === 'page.jsx' || file === 'page.tsx') {
            analyzePage(fullPath);
        }
    });
}

function analyzePage(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const relativePath = path.relative(path.join(__dirname, '..'), filePath);

    // 1. Check for Metadata
    const hasStaticMetadata = content.includes('export const metadata');
    const hasDynamicMetadata = content.includes('export async function generateMetadata');
    if (!hasStaticMetadata && !hasDynamicMetadata) {
        issues.missingMetadata.push(relativePath);
    }

    // 2. Check for Canonical URL (heuristic)
    if ((hasStaticMetadata || hasDynamicMetadata) && !content.includes('canonical:')) {
        // We only flag if metadata exists but canonical is missing. 
        // If metadata is completely missing, it's already caught above.
        issues.missingCanonical.push(relativePath);
    }

    // 3. Check for H1 tag
    const h1Count = (content.match(/<h1/g) || []).length;
    if (h1Count === 0) {
        issues.missingH1.push(relativePath);
    } else if (h1Count > 1) {
        issues.multipleH1.push(relativePath);
    }

    // 4. Check for Image Alt Text
    // Checks for <Image /> from next/image or <img />
    // This regex is basic and might have false positives/negatives but good for a quick sweep
    const imageTags = content.match(/<(Image|img)[^>]*>/g) || [];
    imageTags.forEach(tag => {
        if (!tag.includes('alt=') && !tag.includes('alt:')) {
            issues.missingAltText.push({ file: relativePath, tag: tag.substring(0, 50) + "..." });
        }
    });
}

function generateReport() {
    let report = `# Full SEO Audit Report\n\nGenerated on: ${new Date().toISOString()}\n\n`;

    report += `## 1. Missing Metadata (${issues.missingMetadata.length})\n`;
    if (issues.missingMetadata.length > 0) {
        issues.missingMetadata.forEach(f => report += `- [ ] \`${f}\`\n`);
    } else {
        report += `- No issues found.\n`;
    }

    report += `\n## 2. Missing Canonical URL (${issues.missingCanonical.length})\n`;
    if (issues.missingCanonical.length > 0) {
        issues.missingCanonical.forEach(f => report += `- [ ] \`${f}\`\n`);
    } else {
        report += `- No issues found (or covered by missing metadata check).\n`;
    }

    report += `\n## 3. Pages with NO H1 Tag (${issues.missingH1.length})\n`;
    if (issues.missingH1.length > 0) {
        issues.missingH1.forEach(f => report += `- [ ] \`${f}\`\n`);
    } else {
        report += `- No issues found.\n`;
    }

    report += `\n## 4. Pages with Multiple H1 Tags (${issues.multipleH1.length})\n`;
    if (issues.multipleH1.length > 0) {
        issues.multipleH1.forEach(f => report += `- [ ] \`${f}\`\n`);
    } else {
        report += `- No issues found.\n`;
    }

    report += `\n## 5. Generic Missing Alt Text Check (${issues.missingAltText.length})\n`;
    if (issues.missingAltText.length > 0) {
        issues.missingAltText.forEach(i => report += `- [ ] \`${i.file}\`: \`${i.tag}\`\n`);
    } else {
        report += `- No obvious missing alt tags found.\n`;
    }

    fs.writeFileSync(reportFile, report);
    console.log(`Report generated at: ${reportFile}`);
}

console.log('Starting SEO Audit...');
scanDirectory(appDir);
generateReport();
console.log('Audit Complete.');
