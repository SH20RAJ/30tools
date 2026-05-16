# SEO Action Plan: 30tools.com

**Prioritized by Impact x Effort**
**Generated:** 2026-05-16

---

## CRITICAL -- Fix Immediately (Blocks rankings or causes penalties)

### 1. 301 Redirect All 1,686 Extra Slugs [2 hours]
**Files:** `src/app/(intent)/[slug]/page.tsx`, `src/lib/intent-data.ts`
**Problem:** 1,686 extra slug URLs (e.g., `/compress-image-online`, `/reduce-image-size`) serve duplicate content via iframes with self-referencing canonicals. Google treats these as doorway pages.
**Fix:** In `intent-data.ts` lines 14-26, make `getIntentBySlug` return null for unknown slugs. Add 301 redirects in `next.config.mjs`:
```js
async redirects() {
  const { getAllTools } = require('./src/lib/tools');
  const tools = getAllTools();
  const extraRedirects = [];
  for (const tool of tools) {
    if (tool.extraSlugs) {
      for (const slug of tool.extraSlugs) {
        extraRedirects.push({
          source: `/${slug}`,
          destination: tool.route,
          permanent: true,
        });
      }
    }
  }
  return [
    ...extraRedirects,
    { source: "/blogs/:user/:slug", destination: "/blog/:slug", permanent: true },
  ];
}
```

### 2. Fix Soft 404 [30 min]
**File:** `src/app/not-found.tsx`
**Problem:** Not-found page returns HTTP 200 instead of 404
**Fix:** The `(intent)/[slug]` catch-all is likely intercepting 404s. Ensure unmatched URLs fall through to Next.js's built-in 404 handler. Check if `intent-data.ts` `getIntentBySlug` is catching all slugs.

### 3. Remove Hardcoded Robots Meta [15 min]
**File:** `src/app/layout.tsx` (lines 261-267)
**Problem:** Layout hardcodes `<meta name="robots">` which conflicts with per-page metadata
**Fix:** Delete these lines from layout.tsx:
```tsx
<meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"/>
<meta name="googlebot" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"/>
```
The metadata API in each page already handles this correctly.

### 4. Fix Hreflang Tags [30 min]
**File:** `src/lib/seo.ts` (lines 53-59)
**Problem:** 14 hreflang tags all point to same URL
**Fix:** Remove the hreflang generation entirely unless you have actual translated pages. The `?lang=` approach is not hreflang-compliant.

### 5. Add www-to-www Redirect [15 min]
**File:** `next.config.mjs` redirects()
**Problem:** `www.30tools.com` serves HTTP 200 (duplicate site)
**Fix:** Add to redirects array:
```js
{
  source: "/:path*",
  has: [{ type: "host", value: "www.30tools.com" }],
  destination: "https://30tools.com/:path*",
  permanent: true,
}
```

### 6. Deduplicate Sitemap [30 min]
**File:** `src/app/sitemap.ts`
**Problem:** 12 pages appear twice
**Fix:** Deduplicate before returning:
```ts
const all = [...staticPages, ...toolPages, ...blogPages];
const seen = new Set();
return all.filter(item => {
  if (seen.has(item.url)) return false;
  seen.add(item.url);
  return true;
});
```

---

## HIGH PRIORITY -- Fix Within 1 Week

### 7. Add Meta Descriptions to Tool Pages [2 hours]
Ensure every tool page exports a `description` in its metadata.

### 8. Add Blog Schema [1 hour]
Add BreadcrumbList and CollectionPage schema to blog index. Add author names to Article schema.

### 9. Add Author Names to Blog [2 hours]
Add author field to blog-data.ts and render in cards/articles.

### 10. Fix Breadcrumb Schema Mismatch [1 hour]
**File:** `src/components/shared/StructuredData.tsx` (line 35)
Category URL uses `/${category}` but site uses `/${category}-tools`.

### 11. Remove Duplicate H1 Tags [30 min]
About page and Privacy page have duplicate H1s.

### 12. Add CSP Header [1 hour]
Add Content-Security-Policy to next.config.mjs headers().

### 13. Replace FID with INP [5 min]
**File:** `next.config.mjs` line 46
Change `"FID"` to `"INP"` in webVitalsAttribution array.

### 14. Fix Homepage Cache-Control [15 min]
Change from `no-store` to `public, s-maxage=3600, stale-while-revalidate=86400`.

### 15. Allow GPTBot for Search [5 min]
**File:** `src/app/robots.ts`
Change GPTBot rule from `disallow: ["/"]` to `allow: ["/"]`. GPTBot is now used for ChatGPT Search indexing (distinct from training).

### 16. Remove Deprecated X-XSS-Protection [5 min]
Remove from next.config.mjs headers() -- replaced by CSP.

---

## MEDIUM PRIORITY -- Fix Within 1 Month

### 17. Expand Tool Page Content [20 hours]
Add 1,000+ words to top 50 tool pages with comparisons, tutorials, use cases.

### 18. Split JS Bundles [4 hours]
Two chunks are 734KB and 760KB. Add `maxSize: 250000` to splitChunks config.

### 19. Reduce Homepage DOM [8 hours]
2,689 elements -> target 1,500. Implement virtual scrolling for tool cards.

### 20. Fix Sitemap Lastmod Dates [2 hours]
Use actual dates instead of bulk 2026-05-09.

### 21. Create llms-full.txt [4 hours]
Generate dynamically with all 405+ tools and one-line descriptions.

### 22. Add AggregateRating Schema [3 hours]
Implement user ratings for rich snippet stars.

### 23. Fix Privacy Page [2 hours]
Remove unrelated tool recommendations and nonsensical FAQ.

### 24. Enable optimizeCss [5 min]
Change `optimizeCss: false` to `true` in next.config.mjs.

---

## LOW PRIORITY -- Backlog

### 25. Add Per-Tool OG Images [10 hours]
### 26. Add Image/Video Sitemap Extensions [3 hours]
### 27. Create Author Pages [8 hours]
### 28. Add Comparison Tables to Tool Pages [15 hours]
### 29. Implement IndexNow [1 hour]
### 30. Remove dangerouslyAllowSVG [5 min]

---

## Implementation Roadmap

| Week | Focus | Items |
|------|-------|-------|
| Week 1 | Critical fixes | #1-6 |
| Week 2 | High priority | #7-16 |
| Week 3-4 | Content & performance | #17-24 |
| Ongoing | Low priority | #25-30 |

---

## Score Impact Estimates

| Fix | Current | After Fix |
|-----|---------|-----------|
| #1 (Extra slugs) | 45 tech | +8 -> 53 |
| #2 (Soft 404) | 45 tech | +3 -> 56 |
| #3-6 (Other critical) | 45 tech | +4 -> 60 |
| #7-16 (High priority) | 58 on-page | +10 -> 68 |
| All critical + high | **56 overall** | **~72 overall** |

---

*Estimated total effort: ~80 hours for all items*
*Critical + High items: ~15 hours (would move score from 56 to ~72)*
