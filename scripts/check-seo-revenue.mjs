import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

function assert(condition, message) {
    if (!condition) {
        console.error(`❌ FAIL: ${message}`);
        process.exit(1);
    } else {
        console.log(`✅ PASS: ${message}`);
    }
}

console.log('Running SEO & Revenue Tests...');

// 1. Check ads.txt
const adsTxt = fs.readFileSync(path.join(rootDir, 'public/ads.txt'), 'utf8');
assert(adsTxt.includes('pub-1828915420581549'), 'ads.txt contains publisher ID');

// 2. Check AdPlacement blocklist
const adPlacement = fs.readFileSync(path.join(rootDir, 'src/components/ads/AdPlacement.tsx'), 'utf8');
assert(adPlacement.includes('RISKY_SLUGS'), 'AdPlacement contains risky slugs blocklist');
assert(adPlacement.includes('RISKY_CATEGORIES'), 'AdPlacement contains risky categories blocklist');

// 3. Check layout.tsx includes AdSense Meta
const layout = fs.readFileSync(path.join(rootDir, 'src/app/layout.tsx'), 'utf8');
assert(layout.includes('ca-pub-1828915420581549'), 'layout.tsx contains publisher ID');

// 4. Check sitemap excludes extraSlugs
const sitemap = fs.readFileSync(path.join(rootDir, 'src/app/sitemap.ts'), 'utf8');
assert(sitemap.includes('extraSlugsSet.has'), 'Sitemap excludes extraSlugs');

// 5. Check next.config.mjs redirects
const nextConfig = fs.readFileSync(path.join(rootDir, 'next.config.mjs'), 'utf8');
assert(nextConfig.includes('extraSlugRedirects'), 'next.config.mjs handles extraSlug redirects natively');

console.log('All automated checks passed!');
