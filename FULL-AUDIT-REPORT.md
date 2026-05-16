# SEO Audit Report: 30tools.com

**Date:** 2026-05-16
**Site:** https://30tools.com
**Platform:** Next.js 16 on Cloudflare Pages
**Business Type:** Online Tool Aggregator (SaaS-Free Utility Platform)
**Pages Crawled:** 380 tool pages + 1,686 extra slug pages + blog + static pages

---

## Executive Summary

### Overall SEO Health Score: 56/100

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Technical SEO | 45 | 22% | 9.9 |
| Content Quality | 52 | 23% | 12.0 |
| On-Page SEO | 58 | 20% | 11.6 |
| Schema / Structured Data | 78 | 10% | 7.8 |
| Performance (CWV) | 48 | 10% | 4.8 |
| AI Search Readiness | 61 | 10% | 6.1 |
| Images | 80 | 5% | 4.0 |
| **TOTAL** | | **100%** | **56.2 → 56** |

### Top 5 Critical Issues

1. **1,686 extra slug pages serve indexable duplicate content** -- The `(intent)/[slug]` route catches all extra slugs (e.g., `/compress-image-online`, `/reduce-image-size`) and renders the parent tool in an iframe with self-referencing canonicals. Google treats these as doorway pages. **This is the single most damaging issue on the site.**
2. **Soft 404 -- not-found page returns HTTP 200** -- The 404 page serves a 200 status code, causing search engines to index non-existent pages.
3. **Hreflang tags all point to same URL** -- 14 language alternates all link to `https://30tools.com` with no translated URLs. Google penalty signal.
4. **Duplicate robots meta tags** -- Layout hardcodes `<meta name="robots">` in `<head>`, then pages add their own via Next.js metadata API, creating conflicting directives.
5. **www subdomain serves 200 instead of redirecting** -- `www.30tools.com` returns HTTP 200, creating a complete duplicate of the site.

### Top 5 Quick Wins

1. 301 redirect all 1,686 extra slugs to canonical parent tools -- 2 hours
2. Fix soft 404 (ensure not-found returns HTTP 404) -- 30 minutes
3. Remove hardcoded robots meta from layout.tsx -- 15 minutes
4. Fix hreflang tags (remove or implement properly) -- 30 minutes
5. Add www-to-non-www redirect -- 15 minutes

---

## 1. Technical SEO (Score: 45/100)

### CRITICAL: 1,686 Extra Slug Pages (Doorway Pages)

**Files:**
- `src/app/(intent)/[slug]/page.tsx`
- `src/lib/intent-data.ts`
- `src/constants/tools.json`

The tools registry defines **1,686 `extraSlugs`** across 330 tools. The `(intent)/[slug]` route handles ALL of them via `getIntentBySlug` fallback, which auto-generates titles from the slug and renders the parent tool inside an **iframe**.

These pages:
- Return HTTP 200 (fully indexable)
- Have **self-referencing canonicals** (e.g., `/compress-image-online` canonicals to itself, NOT to `/image-compressor`)
- Have `robots: index, follow` (no noindex)
- Serve duplicate content via iframe (Google does not index iframe content as part of the host page)

**Example of the problem:**
```
/image-compressor        -> canonical: /image-compressor       (correct)
/compress-image-online   -> canonical: /compress-image-online  (DUPLICATE)
/reduce-image-size       -> canonical: /reduce-image-size      (DUPLICATE)
/shrink-image-file-size  -> canonical: /shrink-image-file-size (DUPLICATE)
```

**Fix:** 301 redirect all extra slugs to their canonical parent tool route. The `getIntentBySlug` fallback in `intent-data.ts` (lines 14-26) should return null or trigger a redirect.

### CRITICAL: Soft 404

**File:** `src/app/not-found.tsx`

The not-found page returns HTTP 200 instead of 404. While it includes `<meta name="robots" content="noindex"/>`, the HTTP 200 status means search engines may treat it as a valid page and waste crawl budget.

```
$ curl -s -o /dev/null -w "%{http_code}" "https://30tools.com/this-page-does-not-exist"
200
```

**Fix:** Investigate whether the `(intent)/[slug]` catch-all is intercepting 404s before Next.js can set the status code.

### CRITICAL: Duplicate Robots Meta Tags

**File:** `src/app/layout.tsx` (lines 261-267)

The root layout injects a hardcoded `<meta name="robots" content="index,follow,max-snippet:-1,...">` in `<head>`. Individual pages then add their own robots meta via Next.js metadata API, resulting in **two competing robots tags** on every page.

On the 404 page:
```html
<meta name="robots" content="index,follow,max-snippet:-1,..."/>  <!-- from layout -->
<meta name="robots" content="noindex"/>  <!-- from page metadata -->
```

**Fix:** Remove the hardcoded robots meta from layout.tsx. Let the Next.js metadata API handle robots per-page.

### Hreflang Tags (All Same URL)

14 hreflang tags all point to `https://30tools.com`:
```html
<link rel="alternate" hrefLang="en" href="https://30tools.com"/>
<link rel="alternate" hrefLang="es" href="https://30tools.com"/>
<link rel="alternate" hrefLang="fr" href="https://30tools.com"/>
<!-- ... all identical -->
```

**Fix:** Remove entirely unless you have actual translated pages.

### www Subdomain Not Redirecting

`www.30tools.com` serves HTTP 200 instead of redirecting to `30tools.com`. Creates a complete duplicate site.

**Fix:** Add redirect in Cloudflare or next.config.mjs:
```js
{ source: "/:path*", has: [{ type: "host", value: "www.30tools.com" }],
  destination: "https://30tools.com/:path*", permanent: true }
```

### Homepage Cache-Control

```
cache-control: private, no-cache, no-store, max-age=0, must-revalidate
```

The homepage has `no-store` which prevents Cloudflare CDN caching. Tool pages correctly use `s-maxage=31536000`.

### Deprecated FID Metric

**File:** `next.config.mjs` (line 46)

```js
webVitalsAttribution: ["CLS", "LCP", "FCP", "FID", "TTFB"],
```

FID was deprecated in March 2024 and replaced by INP. Change to:
```js
webVitalsAttribution: ["CLS", "LCP", "INP", "FCP", "TTFB"],
```

### Sitemap Issues

- 12 pages appear twice (confirmed: `/video-tools`, `/text-tools`, `/terms`, `/privacy`, `/pdf-tools`, `/other-tools`, `/image-tools`, `/developer-tools`, `/contact`, `/blog`, `/audio-tools`, `/about`)
- All 408 entries share identical `2026-05-09` lastmod date
- No xhtml:link hreflang tags

### Security Headers

| Header | Status |
|--------|--------|
| X-DNS-Prefetch-Control: on | ✅ |
| X-XSS-Protection: 1; mode=block | ⚠️ Deprecated, remove |
| X-Frame-Options: SAMEORIGIN | ✅ |
| X-Content-Type-Options: nosniff | ✅ |
| Referrer-Policy: origin-when-cross-origin | ✅ |
| Permissions-Policy | ✅ |
| Content-Security-Policy | ❌ Missing |

### IndexNow

Both `/indexnow.txt` and `/indexnow.key` return HTML instead of actual keys. Caught by catch-all route.

---

## 2. Content Quality (Score: 52/100)

### E-E-A-T Assessment

| Signal | Status | Notes |
|--------|--------|-------|
| **Experience** | Moderate | Tools work in-browser, but no usage stats or benchmarks |
| **Expertise** | Weak | No named authors, no team bios, no credentials |
| **Authoritativeness** | Moderate | Open-source on GitHub, but no authority backlinks |
| **Trustworthiness** | Good | Privacy policy, terms, contact, HTTPS |

### Thin Content

- **Tool pages:** ~300 words average (competitive keywords need 1,500+)
- **Blog index:** Pure card grid, no editorial content
- **Privacy page:** Bloated with unrelated tool recommendations

### Duplicate Content

- Many tool descriptions share identical boilerplate: *"Free [tool] tool to process your data instantly with privacy-friendly browser-based workflows"*
- Privacy page has nonsensical templated FAQ: *"How accurate are the conversions in Privacy Policy?"*
- 1,686 extra slug pages serve identical content via iframes (see Technical SEO)

### Keyword Stuffing

- YouTube Downloader: "YouTube Video/Audio Downloader" repeated excessively
- H2 tags duplicate H1 content
- Privacy page: keyword-stuffed H2

### Blog E-E-A-T

- No author names or bios on any article
- No `rel="author"` attribution
- All posts dated 2026-05-09 (bulk publication appearance)
- No category taxonomy

---

## 3. On-Page SEO (Score: 58/100)

### Title Tags
- Homepage: `"Free Online Tools - No Signup | 30tools"` ✅ (58 chars)
- Template: `%s | 30tools` ✅
- Tool pages: Generally well-optimized

### Meta Descriptions
- Many tool pages missing dedicated descriptions
- Blog has descriptions ✅

### Heading Structure
- Homepage: Single H1, 8 H2s, 150+ H3s ✅
- About page: **Duplicate H1 tags** ⚠️
- Privacy page: **Duplicate H1 tags** ⚠️

### Internal Linking
- 400+ internal links on homepage
- Breadcrumb navigation on tool pages
- "Related tools" and "Popular searches" sections

### URL Structure
- Clean, hyphenated slugs ✅
- No trailing slashes ✅
- **Issue:** 1,686 extra slug URLs create massive duplicate content

---

## 4. Schema / Structured Data (Score: 78/100)

### Coverage
- **347 of 380 pages** have JSON-LD (91%)

### Homepage Schemas (4)
1. WebSite ✅
2. Organization ✅ (foundingDate: 2024, contactPoint)
3. BreadcrumbList ✅
4. FAQPage ✅ (4 Q&A pairs)

### Tool Page Schemas (5)
1. SoftwareApplication ✅
2. BreadcrumbList ⚠️ (URL mismatch: schema uses `/image`, site uses `/image-tools`)
3. FAQPage ✅
4. HowTo ✅
5. Article ✅ (hardcoded datePublished: 2024-01-01)

### Issues
- Blog index: **ZERO schemas**
- Blog articles: No author names in Article schema
- Duplicate SoftwareApplication on some pages
- Missing: AggregateRating, Review, VideoObject schemas
- datePublished hardcoded to "2024-01-01" on all tool articles

---

## 5. Performance / Core Web Vitals (Score: 48/100)

### Page Weight
| Page | HTML Size | DOM Elements | Anchor Tags |
|------|-----------|--------------|-------------|
| Homepage | 1,262 KB | 2,689 | 368 |
| Image Compressor | 125 KB | -- | -- |

### JavaScript Bundles
| Chunk | Size |
|-------|------|
| 9700-*.js | **760 KB** |
| 3627-*.js | **734 KB** |
| 8923-*.js | 175 KB |
| 4bd1b696-*.js | 173 KB |
| 1255-*.js | 174 KB |
| layout-*.js | 97 KB |
| (landing)/page-*.js | 97 KB |
| **Total JS (homepage)** | **~2.3 MB** |

### CSS
- Single stylesheet: **152 KB**

### Third-Party Scripts
| Script | Strategy | Impact |
|--------|----------|--------|
| Google Ads (AdSense) | afterInteractive | High |
| Google Tag Manager | afterInteractive | High |
| Google Analytics | afterInteractive | Medium |
| Microsoft Clarity | lazyOnload | Low |
| OneDollarStats | defer | Low |

### Response Times
| Metric | Homepage | Tool Page |
|--------|----------|-----------|
| TTFB | 1.86s | 3.23s |
| Total | 4.39s | 3.42s |

### Strengths
- Image optimization: AVIF/WebP, 30-day cache ✅
- Static assets: 1-year immutable cache ✅
- Compression enabled ✅
- Preconnects for 4 third-party domains ✅

### Weaknesses
- Two JS chunks over 700KB each
- 2,689 DOM elements on homepage (recommended: <1,500)
- 1.2MB HTML for homepage
- optimizeCss: false
- Homepage cache-control prevents CDN caching

---

## 6. AI Search Readiness (Score: 61/100)

### GEO Score Breakdown

| Dimension | Score | Weight |
|-----------|-------|--------|
| Citability | 52 | 25% |
| Structural Readiness | 74 | 20% |
| Multi-Modal Content | 45 | 15% |
| Authority & Brand Signals | 55 | 20% |
| Technical Accessibility | 78 | 20% |

### AI Crawler Access

| Crawler | Status | Impact |
|---------|--------|--------|
| GPTBot | BLOCKED | ChatGPT Search cannot index 30tools |
| ClaudeBot | BLOCKED | Claude cannot reference in base knowledge |
| ChatGPT-User | ALLOWED | Reactive fetching only |
| PerplexityBot | ALLOWED | Can index for citations |
| Google-Extended | BLOCKED | Gemini training blocked (AIO unaffected) |
| CCBot | ALLOWED | Common Crawl indexing |

### llms.txt
- Present and well-structured ✅
- Lists 20 high-value tools, primary hubs, company pages
- **Issue:** Says "365+" tools but homepage claims "405"
- **Missing:** `llms-full.txt` (returns 404)

### Platform Readiness

| Platform | Score | Key Blocker |
|----------|-------|-------------|
| Google AI Overviews | 65 | Weak E-E-A-T, generic content |
| ChatGPT Search | 40 | GPTBot blocked |
| Perplexity | 75 | Generic descriptions |
| Bing Copilot | 70 | Generic content |

### Top GEO Recommendations
1. **Allow GPTBot** for search indexing (distinct from training)
2. **Create llms-full.txt** with all 405+ tools and descriptions
3. **Rewrite tool descriptions** to be unique and citable (134-167 words each)
4. **Add comparison content** (30tools vs competitors)

---

## 7. Images (Score: 80/100)

- Primarily text/SVG-based layout ✅
- AVIF/WebP formats configured ✅
- OG image: `/og-image.jpg` (1200x630) ✅
- No per-tool OG images ⚠️
- No image sitemap extensions ⚠️

---

## Action Plan

### CRITICAL (Fix Immediately)

| # | Issue | Impact | Effort |
|---|-------|--------|--------|
| 1 | **301 redirect all 1,686 extra slugs** to canonical parent tools | Doorway page penalty | 2 hours |
| 2 | **Fix soft 404** -- ensure not-found returns HTTP 404 | Crawl budget waste | 30 min |
| 3 | **Remove hardcoded robots meta** from layout.tsx | Conflicting directives | 15 min |
| 4 | **Fix hreflang tags** -- remove or implement properly | Penalty risk | 30 min |
| 5 | **Add www-to-www redirect** | Duplicate site | 15 min |
| 6 | **Deduplicate sitemap** (12 pages appear twice) | Crawl budget | 30 min |

### HIGH (Fix within 1 week)

| # | Issue | Impact | Effort |
|---|-------|--------|--------|
| 7 | Add meta descriptions to top 50 tool pages | CTR improvement | 2 hours |
| 8 | Add BlogPosting schema to blog articles | Rich results | 1 hour |
| 9 | Add author names/bios to blog posts | E-E-A-T | 2 hours |
| 10 | Fix breadcrumb URL mismatch in schema | Schema accuracy | 1 hour |
| 11 | Remove duplicate H1 tags (About, Privacy) | Heading hierarchy | 30 min |
| 12 | Add CSP security header | Security | 1 hour |
| 13 | Replace FID with INP in webVitalsAttribution | Metrics accuracy | 5 min |
| 14 | Fix homepage cache-control for CDN caching | Performance | 15 min |
| 15 | Allow GPTBot for search indexing | ChatGPT visibility | 5 min |

### MEDIUM (Fix within 1 month)

| # | Issue | Impact | Effort |
|---|-------|--------|--------|
| 16 | Expand tool page content to 1,000+ words | Content depth | 20 hours |
| 17 | Reduce JS bundle size (split 700KB+ chunks) | Core Web Vitals | 4 hours |
| 18 | Reduce homepage DOM (2,689 → <1,500) | Performance | 8 hours |
| 19 | Fix sitemap lastmod dates | Freshness signals | 2 hours |
| 20 | Remove translation bloat from HTML | Page weight | 4 hours |
| 21 | Create llms-full.txt | AI discoverability | 4 hours |
| 22 | Add AggregateRating schema | Rich snippets | 3 hours |
| 23 | Fix privacy page (remove irrelevant content) | Trust | 2 hours |
| 24 | Enable optimizeCss | CSS optimization | 5 min |

### LOW (Backlog)

| # | Issue | Impact | Effort |
|---|-------|--------|--------|
| 25 | Add per-tool OG images | Social sharing | 10 hours |
| 26 | Add image/video sitemap extensions | Rich media | 3 hours |
| 27 | Create author pages | E-E-A-T depth | 8 hours |
| 28 | Add comparison tables to tool pages | AI citations | 15 hours |
| 29 | Implement IndexNow or remove fake keys | Indexing speed | 1 hour |
| 30 | Remove dangerouslyAllowSVG | Security | 5 min |

---

## Appendix: Data Sources

- Live site fetch: https://30tools.com, /robots.txt, /sitemap.xml, /llms.txt
- Tool pages analyzed: /image-compressor, /youtube-downloader, /pdf-merger
- Static pages analyzed: /about, /blog, /privacy, /terms
- Code analysis: layout.tsx, robots.ts, sitemap.ts, StructuredData.tsx, next.config.mjs, intent-data.ts, seo.ts, tools.json
- Performance: curl timing, HTML size, JS chunk sizes, DOM element counts
- Schema: JSON-LD extraction from 347/380 pages
- Subagents: Technical SEO, Content Quality, Schema, Sitemap, GEO/AI Readiness, Performance

---

*Report generated by OpenClaude SEO Audit on 2026-05-16*
