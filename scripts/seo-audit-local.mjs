import fs from "fs";
import path from "path";

// A simple script to verify basic SEO tags and content length on the statically generated files or local dev server.
// Since we want this to be reliable without external dependencies like jsdom, we'll use RegExp to check the generated HTML.

const outDir = path.join(process.cwd(), ".next", "server", "app");
let totalFiles = 0;
let errors = 0;

function auditHTML(filePath, urlPath) {
    if (!filePath.endsWith(".html")) return;
    
    const content = fs.readFileSync(filePath, "utf-8");
    const issues = [];
    
    // Check Title
    const titleMatch = content.match(/<title[^>]*>(.*?)<\/title>/);
    if (!titleMatch || !titleMatch[1]) issues.push("Missing <title>");
    
    // Check Description
    const descMatch = content.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"[^>]*>|<meta[^>]*content="([^"]*)"[^>]*name="description"[^>]*>/i);
    if (!descMatch) issues.push("Missing meta description");
    
    // Check Canonical
    const canonicalMatch = content.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"[^>]*>|<link[^>]*href="([^"]*)"[^>]*rel="canonical"[^>]*>/i);
    if (!canonicalMatch && !content.includes('rel="canonical"')) issues.push("Missing canonical link");
    
    // Check H1
    const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/i);
    if (!h1Match) issues.push("Missing <H1>");
    
    // Check for Indexing logic (skip length checks if noindex)
    const isNoIndex = content.includes('name="robots" content="noindex') || content.includes('content="noindex" name="robots"');
    
    if (!isNoIndex) {
        // Strip tags to estimate body text length
        const bodyContent = content.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                                   .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                                   .replace(/<[^>]+>/g, ' ')
                                   .replace(/\s+/g, ' ')
                                   .trim();
        
        if (bodyContent.length < 500) {
            issues.push(`Body text is too short (thin content: ${bodyContent.length} chars). Might be a JS shell.`);
        }
        
        if (content.includes("Loading Search...")) {
            issues.push("Page renders as 'Loading Search...' to crawlers.");
        }
    }
    
    totalFiles++;
    
    if (issues.length > 0) {
        console.log(`\n❌ Failures on ${urlPath}:`);
        issues.forEach(iss => console.log(`   - ${iss}`));
        errors++;
    }
}

function traverseDir(dir, prefix = "") {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            traverseDir(fullPath, `${prefix}/${file}`);
        } else {
            auditHTML(fullPath, `${prefix}/${file}`);
        }
    }
}

console.log("Starting Local SEO Audit of statically generated HTML files...");
traverseDir(outDir);

console.log(`\nAudit Complete. Scanned ${totalFiles} static files.`);
if (errors > 0) {
    console.error(`Found ${errors} files with critical SEO issues.`);
    process.exit(1);
} else {
    console.log("✅ All SEO checks passed!");
    process.exit(0);
}
