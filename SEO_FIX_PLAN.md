# SEO FIX PLAN

## Current Framework and Rendering Model
- **Framework:** Next.js (App Router) version 15+ (from `package.json`).
- **Rendering Model:** Most routes are Server Components (e.g., `ToolsSlugPage`, `LandingPage`). However, the actual tool UI is often rendered via a client component mount (`RegisteredToolMount`), which relies heavily on `next/dynamic` with `{ ssr: false }` or client-only logic (`useEffect`, browser globals). This is appropriate for the interactive tool UI but strips the content for crawlers if the surrounding explanatory text is also skipped during SSR or isn't provided as a server-rendered fallback.

## Root Cause of Footer-Only/Thin Pages
1. **Missing Server-Side SEO Content:** The `ToolPageContent` only conditionally renders SEO content (description, features, how-to, FAQs) if it exists in the tool configuration (`intentData` or `tool.description`). Many tools lack this detailed configuration in `src/constants/tools.json` or `src/lib/tools.ts`, leaving only the `RegisteredToolMount`.
2. **Client-side Mounts (`RegisteredToolMount`):** This component is marked `"use client"`. If it doesn't have an immediate synchronous render (or uses `ssr: false` dynamic imports), and there is no other server-rendered content, the initial HTML delivered to crawlers only contains the header, the `ToolSEOLayout` shell (H1, maybe Breadcrumbs), and the footer. Sometimes even the H1 is hidden if `intentData` isn't fully structured.
3. **Category and Search Queries:** The search page (`/search`) uses a client-side component (`SearchContent`) which likely fetches or filters tools dynamically, presenting a "Loading..." state initially to crawlers.

## Files and Components That Need Editing
- **Global Config:** Create `src/constants/config.ts` (Step 3).
- **Metadata and Layouts:**
  - `src/app/layout.tsx` (Use config counts).
  - `src/app/(landing)/page.tsx` (Fix 600+ claims and link structure).
  - `src/app/(company)/search/page.tsx` (Handle thin shell/noindex).
  - `src/app/(company)/about/page.tsx`, `contact`, `privacy`, `terms` (Step 6).
- **Tool Components/Pages:**
  - High value SEO tool pages (Step 7).
  - Content quality fixes for specific tools (Step 8).
  - Missing content/fallback for thin tools (Step 9).
- **SEO Utilities:**
  - `src/lib/seo.ts` (Structured data fixes).
  - `src/app/sitemap.ts` and `src/app/robots.ts` (Step 12).
- **Verification:**
  - `scripts/seo-audit-local.mjs` (Step 14).

## Step-by-Step Implementation Checklist
- [x] **Step 1:** Inspect the project and create `SEO_FIX_PLAN.md`.
- [x] **Step 2:** Ensure server-rendering of content across all indexable routes (mitigate thin JS shells).
- [x] **Step 3:** Create a single source of truth for site claims (e.g., `src/constants/config.ts`) and replace hardcoded counts.
- [x] **Step 4:** Fix homepage (counts, giant link blocks, canonical categories).
- [x] **Step 5:** Fix search and category/filter URLs (noindex dynamic queries).
- [x] **Step 6:** Fix company and legal pages (about, contact, privacy, terms).
- [ ] **Step 7:** Fix high-value SEO tool pages urgently (add unique content).
- [ ] **Step 8:** Fix content-quality issues (remove fake reviews/keyword stuffing).
- [ ] **Step 9:** Fix all remaining footer-only/thin tool pages (add structured templates).
- [ ] **Step 10:** Fix category hubs and canonical URLs.
- [ ] **Step 11:** Fix structured data (remove fake ratings, strict Organization/FAQ rules).
- [ ] **Step 12:** Fix sitemap and robots.txt.
- [ ] **Step 13:** Fix metadata globally (titles/descriptions, Open Graph).
- [ ] **Step 14:** Build local SEO verification script (`scripts/seo-audit-local.mjs`).
- [ ] **Step 15:** Implement structured templates for tools (vs hardcoding).
- [ ] **Step 16:** Final Verification (build, audit, lint).
