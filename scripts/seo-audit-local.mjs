#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const BASE = process.env.BASE_URL || 'http://localhost:3000';
const toolsJsonPath = path.resolve(process.cwd(), 'src/constants/tools.json');

function gatherRoutes() {
  const data = JSON.parse(fs.readFileSync(toolsJsonPath, 'utf-8'));
  const routes = new Set();
  for (const catKey of Object.keys(data.categories || {})) {
    const cat = data.categories[catKey];
    if (cat && Array.isArray(cat.tools)) {
      for (const t of cat.tools) {
        if (t.route) routes.add(t.route);
        if (Array.isArray(t.extraSlugs)) for (const s of t.extraSlugs) routes.add('/' + s);
      }
    }
  }
  // Add core pages
  ['/','/about','/contact','/privacy','/terms','/image-tools','/pdf-tools','/video-tools'].forEach(p => routes.add(p));
  return Array.from(routes);
}

async function fetchHtml(url) {
  const res = await fetch(url, { redirect: 'follow' });
  const text = await res.text();
  return { status: res.status, text };
}

function hasTag(html, tag) {
  return new RegExp(`<${tag}[^>]*>`, 'i').test(html);
}

function extract(html, regex) {
  const m = html.match(regex);
  return m ? m[1] : null;
}

async function run() {
  const routes = gatherRoutes();
  const results = [];
  for (const route of routes) {
    const url = (route.startsWith('http') ? route : BASE.replace(/\/$/, '') + route);
    try {
      const { status, text } = await fetchHtml(url);
      const title = extract(text, /<title>([^<]+)<\/title>/i);
      const desc = extract(text, /<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i) || extract(text, /<meta\s+content=["']([^"']+)["']\s+name=["']description["']/i);
      const canonical = extract(text, /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
      const h1 = extract(text, /<h1[^>]*>([\s\S]*?)<\/h1>/i);
      const bodyText = text.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, '').trim();

      const errors = [];
      if (status !== 200) errors.push(`status:${status}`);
      if (!title) errors.push('missing title');
      if (!desc) errors.push('missing meta description');
      if (!canonical) errors.push('missing canonical');
      if (!h1) errors.push('missing h1');
      if (bodyText.length < 200) errors.push(`short body (${bodyText.length} chars)`);
      if (/Loading Search|Loading\.{1,3}/i.test(text)) errors.push('contains Loading text');

      results.push({ route, url, errors });
      console.log(`${route} -> ${errors.length ? 'FAIL' : 'OK'}${errors.length ? ' : ' + errors.join(', ') : ''}`);
    } catch (err) {
      console.error(`Error fetching ${url}:`, err.message || err);
      results.push({ route, url, errors: ['fetch error'] });
    }
  }

  const critical = results.filter(r => r.errors && r.errors.length > 0);
  if (critical.length > 0) {
    console.log('\nSEO audit found failures:', critical.length);
    process.exit(2);
  }
  console.log('\nSEO audit passed: no critical failures found.');
}

run();
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
