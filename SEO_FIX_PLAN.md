# SEO FIX PLAN

## 1) Current framework and rendering model
- Framework: Next.js App Router (v16.x as seen in `package.json`).
- Rendering model:
  - App Router with a mixture of server and client components.
  - `src/constants/tools.json` provides the single tool registry used at build time.
  - Tool pages are server-rendered shells (`src/app/tools/[slug]/page.tsx`) that mount an interactive client component (`RegisteredToolMount`) for the UI.
  - Many interactive or search routes use client-only components (`"use client"`) with Suspense fallbacks.

## 2) Root causes for footer-only / thin pages observed by crawlers
1. Search and other client-only routes render a Suspense fallback like "Loading Search..." in the initial HTML because the page content is driven entirely by client-side fetches. Even when `robots: { index: false }` is set, the fallback shows up to crawlers and humans viewing raw HTML.
2. Some tool entries in `src/constants/tools.json` lack detailed SEO fields (`features`, `howTo`, `faqs`, `article`). `ToolLayout` attempts to synthesize content via `seoTemplates`, but many tools still end up with thin boilerplate or placeholder copy.
3. Inconsistent hard-coded site claims and counts are embedded in `src/app/layout.tsx`, various page templates, and `src/constants/tools.json` metadata (`totalTools`, `lastUpdated`) causing contradictory sitewide numbers.
4. Structured data is generated broadly (`StructuredData` and `ToolPageContent`) and currently emits FAQ/Review schemas even when source content is ambiguous — risk of mismatched Review/Rating data.

## 3) Where the important pieces live (single-source map)
- Tool registry: `src/constants/tools.json`
- Tool helpers / registry accessors: `src/lib/tools.ts`
- Global layout/metadata: `src/app/layout.tsx`
- Tool page route (app router): `src/app/tools/[slug]/page.tsx`
- Tool page template and SEO wrapper: `src/components/tools/shared/ToolPageContent.tsx` and `src/components/tools/shared/ToolLayout.jsx`
- Client mount for interactive UI: `src/components/tools/shared/RegisteredToolMount.tsx`
- Search implementation: `src/app/(company)/search/page.tsx` and `src/app/(company)/search/SearchContent.tsx` (client)
- SEO/Schema helpers: `src/lib/seo.ts`, `src/components/shared/StructuredData.tsx`
- Site constants/config: currently not centralized (we will add `src/constants/config.ts`)
- Sitemap/feed: `src/app/feed.xml/route.js` and sitemap generation logic (search for sitemap route)

## 4) Files/components that will need edits (high priority first)
- `src/constants/tools.json` — normalize claims, remove unsupported "unlimited"/privacy claims where inaccurate, add `features`, `faq`, `howTo` for high-value pages.
- `src/constants/config.ts` — NEW single source of truth for counts, site name, canonical, contact email, lastUpdated.
- `src/app/layout.tsx` — replace hard-coded counts and default metadata with `config` values and prune excessive keywords.
- `src/app/(company)/search/page.tsx` + `SearchContent.tsx` — either server render a crawlable search landing or ensure `noindex,follow` plus remove server-visible Loading fallback.
- `src/components/tools/shared/ToolLayout.jsx` — tighten `ToolArticle` parser; ensure `enrichedTool.article` fallback is high-quality; avoid injecting inaccurate claims; remove any review schema emission unless page has explicit reviews array.
- `src/components/tools/shared/RegisteredToolMount.tsx` — ensure client mount is not the only meaningful content; ToolLayout must include the required H1/intro/FAQ on server render.
- `src/lib/seo.ts` + `src/components/shared/StructuredData.tsx` — audit schema generation and enforce rules (no FAQ schema unless visible, no Review/AggregateRating unless real reviews exist and are visible).
- High-value tool pages under `src/app/(seo)/`, `src/app/(image)/`, `src/app/tools/[slug]/page.tsx` — ensure per-tool `seoTitle`, `seoDescription`, `article`, `features`, and `faqs` are present.
- Legal/company pages: `src/app/about/page.tsx`, `src/app/contact/page.tsx`, `src/app/privacy/page.tsx`, `src/app/terms/page.tsx` — add clear server-rendered content and align dates/limits.
- Sitemap / robots: update or add generation route to produce canonical-only sitemap; ensure `robots.txt` references it.
- `scripts/seo-audit-local.mjs` — NEW script to validate titles, descriptions, H1, canonical, body length, and no loading-only pages.

## 5) Step-by-step implementation checklist (actionable)
1. Create `src/constants/config.ts` with authoritative values (site name, site url, calculated tool counts from the registry, contact email, lastUpdated). (Step 3)
2. Replace hardcoded counts in `src/app/layout.tsx` and other templates to use `config`. Update default metadata templates. (Step 3/4)
3. Harden `ToolLayout.jsx` so that every indexable tool page emits server-rendered SEO sections: H1, description, `ToolArticle` content, `ToolFeatures`, `ToolSteps`, and `ToolFAQ`. Ensure `RegisteredToolMount` is only the interactive area and not required for crawler-visible content. (Step 2/7/9)
4. For tools missing structured copy, populate `tools.json` for high-value pages (SEO pages list provided by audit). Use concise templates for repetitive pages but ensure uniqueness (tool-specific fields). (Step 8/15)
5. Search page: either server-render (`getAllTools()` usage or SSG) a useful Search landing and category hubs, or keep it client-only and ensure `robots: { index: false, follow: true }` and remove server-visible loading fallback. Prefer creating static category hubs and canonicalize query-URLs to hub pages. (Step 5/10)
6. Legal pages: make them full server-rendered pages with correct `lastUpdated` from config and a clear processing table for client/server tools. (Step 6)
7. Remove/disable any Review/AggregateRating schema generation unless `tool.reviews` is populated and visible. Audit `StructuredData` and `ToolPageContent` to enforce schema rules. (Step 11)
8. Generate a canonical-only `sitemap.xml` from the registry (only include pages where `tool.indexable !== false` and static pages like /, /about, /privacy). Update `public/robots.txt` or route to include the sitemap. (Step 12)
9. Add `scripts/seo-audit-local.mjs` to validate built HTML pages and fail on critical errors (missing H1, missing meta description, body too short, or pages that render only "Loading"). (Step 14)
10. Run `next build` and the local SEO audit; iterate to fix issues flagged. (Step 16)

## 6) Immediate short-term fixes (first pass)
- Replace conflicting counts by generating `toolCount` from `getAllTools().length` at build time and storing in `src/constants/config.ts`.
- Ensure `/search` has `robots: { index: false }` (already set) and remove the server-side Suspense fallback content that says "Loading Search..." so crawlers don't see it as the main content.
- For the top 20 high-value tools identified in the audit, add minimal `seoTitle`, `seoDescription`, `article`, and `faqs` entries in `src/constants/tools.json`.

## 7) Acceptance criteria (how we'll verify progress)
- No indexable URL should return an HTML shell that only contains a header/footer or "Loading" text when fetched from a production build.
- Sitemap contains only canonical indexable URLs (no query strings or intentionally noindexed routes).
- Site-wide counts/claims are consistent and sourced from `src/constants/config.ts` and the tools registry.
- No FAQ/Review schema exists without visible source content.
- `scripts/seo-audit-local.mjs` returns zero critical failures after fixes.

## 8) Next actions (I'll start now)
1. Create `src/constants/config.ts` and replace the count in `src/app/layout.tsx` to centralize counts.
2. Remove the server-visible "Loading Search..." fallback from the search route and either server-render the search landing or keep it noindexed.
3. Build the SEO verification script skeleton in `scripts/seo-audit-local.mjs` so we can iterate quickly.

---
_Notes:_
- I will update this plan file as I make code changes and mark checklist items complete.
- I will not add or fabricate reviews, ratings, or FAQs that are not visible on the page.

