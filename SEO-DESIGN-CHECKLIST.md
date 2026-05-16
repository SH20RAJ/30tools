# SEO & Design Fix Checklist — 30tools.com

**Generated:** 2026-05-16  
**Site:** https://30tools.com  
**Platform:** Next.js 16 on Cloudflare Pages

---

## CRITICAL SEO Fixes (Week 1)

### 1. Extra Slug Doorway Pages (1,686 pages)
- [x] **File:** `src/app/(intent)/[slug]/page.tsx` — Now redirects to canonical parent tool via `redirect(parentTool.route)`
- [x] **File:** `src/lib/intent-data.ts` — `getIntentBySlug` returns data for known intents; page calls `notFound()` for unknown slugs
- [x] **Status:** All extra slugs now 301 redirect to parent tools instead of serving duplicate content

### 2. Soft 404 Fix
- [x] **File:** `src/app/not-found.tsx` — Proper Next.js not-found page structure
- [x] **Status:** With intent route now redirecting, unmatched URLs properly fall through to 404

### 3. Duplicate Robots Meta Tags
- [x] **File:** `src/app/layout.tsx` — Removed hardcoded `<meta name="robots">` and duplicate OG/Twitter tags from head JSX
- [x] **Status:** Next.js metadata API handles robots per-page correctly

### 4. Hreflang Tags (All Same URL)
- [x] **File:** `src/lib/seo.ts` — Removed `SUPPORTED_LANGS` array and `lang` parameter; simplified to single canonical URL
- [x] **Status:** No more broken hreflang tags pointing to same URL

### 5. www-to-non-www Redirect
- [x] **File:** `next.config.mjs` — Added redirect: `www.30tools.com` → `30tools.com`
- [x] **Status:** www subdomain properly redirects

### 6. Sitemap Deduplication
- [x] **File:** `src/app/sitemap.ts` — Already had deduplication with `Set` filter
- [x] **Status:** No duplicate URLs in sitemap

---

## HIGH PRIORITY SEO Fixes (Week 2)

### 7. Replace FID with INP
- [x] **File:** `next.config.mjs` — Changed `webVitalsAttribution` from FID to INP
- [x] **Status:** Using current Core Web Vitals metrics

### 8. Enable optimizeCss
- [x] **File:** `next.config.mjs` — Changed `optimizeCss: false` to `true`
- [x] **Status:** CSS optimization enabled

### 9. Homepage Cache-Control
- [x] **File:** `next.config.mjs` — Changed to `public, s-maxage=3600, stale-while-revalidate=86400`
- [x] **Status:** Homepage now cacheable by CDN

### 10. Allow GPTBot for Search
- [x] **File:** `src/app/robots.ts` — GPTBot allowed with `allow: "/"`
- [x] **Status:** ChatGPT Search can now index the site

### 11. Remove Deprecated X-XSS-Protection
- [x] **File:** `next.config.mjs` — Header not present (already clean)
- [x] **Status:** No deprecated security headers

### 12. Breadcrumb Schema URL Mismatch
- [x] **File:** `src/components/shared/StructuredData.tsx` — Uses `CATEGORY_HUB_ROUTES` mapping with correct routes (e.g., `/image-tools`)
- [x] **Status:** Breadcrumb URLs match actual site structure

### 13. Duplicate H1 Tags
- [x] **File:** `src/app/(company)/about/page.tsx` — Uses `ToolLayout` which renders single H1
- [x] **File:** `src/app/(company)/privacy/page.tsx` — Uses `ToolLayout` which renders single H1
- [x] **Status:** No duplicate H1s on any page

---

## DESIGN CONSISTENCY Fixes

### 14. PDF Tool Components — Rounded Corners Standardization
- [x] **Files:** All 19 PDF tool components in `src/components/tools/pdf/`
- [x] **Changes:** Removed inconsistent `rounded-none` classes, standardized border styling
- [x] **Components fixed:** PDFMerger, PDFCompressor, PDFEditor, PDFSplitter, PDFToImage, ImageToPDF, PDFToWord, WordToPDF, HTMLToPDF, PDFGrayscale, PDFRotation, PDFRearrange, PDFPageDelete, PDFPageNumbers, PDFProtect, PDFUnlock, PDFWatermark, PDFMetadataEditor

### 15. JSON Formatter Tools
- [x] **File:** `src/components/tools/code/JsonFormatterTool.jsx`
- [x] **File:** `src/components/tools/developer/JSONFormatterTool.jsx`
- [x] **Changes:** Removed inconsistent `rounded-none` classes

### 16. Other Tool Components
- [x] **File:** `src/components/tools/security/HashGeneratorTool.jsx`
- [x] **File:** `src/components/tools/utilities/PasswordGeneratorTool.jsx`
- [x] **File:** `src/components/tools/utilities/URLShortenerTool.jsx`
- [x] **Changes:** Standardized border radius and styling

### 17. Content Pages
- [x] **File:** `src/app/(youtube)/youtube-downloader/page.tsx` — Fixed keyword stuffing
- [x] **File:** `src/app/(company)/about/page.tsx` — Clean structure
- [x] **File:** `src/app/(company)/privacy/page.tsx` — Removed nonsensical content

---

## TOOL LAYOUT SYSTEM (Already Well-Structured)

### Shared Components
- [x] **ToolLayout** (`src/components/tools/shared/ToolLayout.jsx`) — Consistent wrapper for all tool pages
- [x] **ToolSharedComponents** (`src/components/tools/shared/ToolSharedComponents.jsx`) — Trust, Features, Steps, FAQs sections
- [x] **StructuredData** (`src/components/shared/StructuredData.tsx`) — JSON-LD schema for tools

### Layout Structure (Consistent Across All Tools)
1. Breadcrumbs
2. Hero (H1 + description)
3. Tool interaction area
4. Contribution notice
5. Trust indicators (3-column grid)
6. Article content
7. Key Features & Benefits
8. How-to Steps
9. FAQs
10. Variant links
11. Related tools

---

## REMAINING MEDIUM/LOW PRIORITY Items

### Content Expansion (Medium)
- [ ] Expand tool page content to 1,000+ words for top 50 tools
- [ ] Add comparison tables to tool pages
- [ ] Create `llms-full.txt` with all 405+ tools

### Performance (Medium)
- [ ] Split JS bundles (two chunks >700KB each)
- [ ] Reduce homepage DOM (2,689 → <1,500 elements)
- [ ] Fix sitemap lastmod dates (use actual dates)

### Schema (Medium)
- [ ] Add BlogPosting schema to blog articles
- [ ] Add author names to blog posts
- [ ] Add AggregateRating schema (when real reviews exist)

### Security (Low)
- [ ] Add Content-Security-Policy header
- [ ] Remove `dangerouslyAllowSVG` from image config

### Images (Low)
- [ ] Add per-tool OG images
- [ ] Add image/video sitemap extensions

---

## VERIFICATION CHECKLIST

### Build & Deploy
- [ ] `npm run build` passes without errors
- [ ] No TypeScript errors
- [ ] All tool pages render correctly

### SEO Verification
- [ ] Test: `curl -s -o /dev/null -w "%{http_code}" "https://30tools.com/nonexistent-page"` → Should return 404
- [ ] Test: `curl -s -o /dev/null -w "%{http_code}" "https://www.30tools.com"` → Should return 301
- [ ] Check: `/sitemap.xml` has no duplicate URLs
- [ ] Check: `/robots.txt` allows GPTBot
- [ ] Check: No duplicate `<meta name="robots">` in page source

### Design Verification
- [ ] All PDF tools use consistent border-radius (no `rounded-none`)
- [ ] All tool pages have consistent card styling
- [ ] Buttons use consistent styling across tools
- [ ] Upload areas have consistent styling

---

*Checklist generated by OpenClaude on 2026-05-16*
