#!/usr/bin/env node

/**
 * Script to fix all pages with unused _jsonLd variables
 * This improves SEO by injecting JSON-LD structured data into pages
 */

const fs = require('fs');
const path = require('path');

// List of all files with unused _jsonLd (from grep search)
const filesToFix = [
    'src/app/(design)/logo-generator/page.js',
    'src/app/(code)/xml-formatter/page.js',
    'src/app/(code)/sql-formatter/page.js',
    'src/app/(design)/whiteboard/page.js',
    'src/app/(code)/code-formatter/page.js',
    'src/app/(code)/code-minifier/page.js',
    'src/app/(code)/regex-tester/page.js',
    'src/app/(design)/color-picker/page.js',
    'src/app/(code)/csv-to-json/page.js',
    'src/app/(code)/markdown-to-html/page.js',
    'src/app/(design)/favicon-generator/page.js',
    'src/app/(design)/css-box-shadow/page.js',
    'src/app/(design)/color-converter/page.js',
    'src/app/(design)/css-gradient-generator/page.js',
    'src/app/(design)/color-palette-generator/page.js',
    'src/app/(image)/image-cropper/page.js',
    'src/app/(image)/image-compressor/page.js',
    'src/app/(image)/background-remover/page.js',
    'src/app/(image)/base64-image/page.js',
    'src/app/(image)/free-image-compressor/page.js',
    'src/app/(text)/typing-speed-test/page.js',
    'src/app/(developer)/temp-email-checker/page.js',
    'src/app/(developer)/api-tester/page.js',
    'src/app/(text)/duplicate-line-remover/page.js',
    'src/app/(developer)/jwt-decoder/page.js',
    'src/app/(developer)/hash-generator/page.js',
    'src/app/(developer)/hash-generator2/page.js',
    'src/app/(developer)/url-encoder/page.js',
    'src/app/(developer)/password-breach-checker/page.js',
    'src/app/(developer)/complexity-analyzer/page.js',
    'src/app/(audio)/audio-trimmer/page.js',
    'src/app/(developer)/email-breach-checker/page.js',
    'src/app/(audio)/audio-editor/page.js',
    'src/app/(pdf)/pdf-editor/page.js',
    'src/app/(pdf)/pdf-add-page-numbers/page.js',
    'src/app/(pdf)/pdf-protect/page.js',
    'src/app/(pdf)/jpg-to-pdf/page.js',
    'src/app/(pdf)/pdf-compressor/page.js',
    'src/app/(pdf)/pdf-rotate/page.js',
    'src/app/(pdf)/pdf-splitter/page.js',
    'src/app/(pdf)/word-to-pdf/page.js',
    'src/app/(pdf)/pdf-to-word/page.js',
    'src/app/(utilities)/timestamp-converter/page.js',
    'src/app/(youtube)/youtube-analytics/page.js',
    'src/app/(utilities)/internet-speed-test/page.js',
    'src/app/(utilities)/url-shortener/page.js',
    'src/app/(utilities)/paypal-link-generator/page.js',
    'src/app/(utilities)/url-extractor/page.js',
    'src/app/(utilities)/whatsapp-checker/page.js',
    'src/app/(utilities)/whatsapp-dp-downloader/page.js',
];

function fixJsonLdInFile(filePath) {
    const fullPath = path.join(process.cwd(), filePath);

    if (!fs.existsSync(fullPath)) {
        console.log(`⚠️  File not found: ${filePath}`);
        return false;
    }

    let content = fs.readFileSync(fullPath, 'utf8');

    // Check if file has unused _jsonLd
    if (!content.includes('const _jsonLd')) {
        console.log(`⏭️  Skipping ${filePath} - no _jsonLd found`);
        return false;
    }

    // Check if already fixed (jsonLd is already being used)
    if (content.includes('dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd)') ||
        content.includes('dangerouslySetInnerHTML={{ __html: JSON.stringify(_jsonLd)')) {
        console.log(`✅ Already fixed: ${filePath}`);
        return false;
    }

    // Fix 1: Rename _jsonLd to jsonLd
    content = content.replace('const _jsonLd =', 'const jsonLd =');

    // Fix 2: Find the component return statement and inject schema
    // Pattern 1: return <Component />
    const simpleReturnPattern = /export default function \w+\(\) \{\s*return <(\w+) \/>;/;
    if (simpleReturnPattern.test(content)) {
        content = content.replace(
            simpleReturnPattern,
            `export default function $&() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <$1 />
    </>
  );`
        );
    }

    // Pattern 2: return (<Component />)
    const wrappedReturnPattern = /export default function \w+\(\) \{\s*return \(\s*<(\w+) \/>\s*\);/;
    if (wrappedReturnPattern.test(content)) {
        content = content.replace(
            wrappedReturnPattern,
            `export default function $&() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <$1 />
    </>
  );`
        );
    }

    // Write back
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✅ Fixed: ${filePath}`);
    return true;
}

// Main execution
console.log('🔧 Fixing unused _jsonLd variables in all page.js files...\n');

let fixed = 0;
let skipped = 0;
let errors = 0;

filesToFix.forEach(file => {
    try {
        const result = fixJsonLdInFile(file);
        if (result) {
            fixed++;
        } else {
            skipped++;
        }
    } catch (error) {
        console.error(`❌ Error fixing ${file}:`, error.message);
        errors++;
    }
});

console.log('\n📊 Summary:');
console.log(`✅ Fixed: ${fixed} files`);
console.log(`⏭️  Skipped: ${skipped} files`);
console.log(`❌ Errors: ${errors} files`);
console.log(`📝 Total: ${filesToFix.length} files processed`);

console.log('\n🎯 SEO Impact:');
console.log(`- Added JSON-LD structured data to ${fixed} pages`);
console.log(`- Improved search engine understanding of ${fixed} tools`);
console.log(`- Better chance of rich snippets in search results`);
