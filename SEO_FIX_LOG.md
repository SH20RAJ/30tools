# SEO Fix Log - 30tools.com

## Project Context
- **Framework**: Next.js 15 (App Router)
- **Tool Registry**: `src/constants/tools.json` (single source of truth)
- **Rendering Model**: Mix of server components and client components
- **Deployment**: Vercel/Cloudflare with OpenNext

## Phase 1: Root Cause Analysis

### Shell-Only Page Root Causes
1. **Search page (`/search`)**: Uses `"use client"` component that shows loading state before API fetch
2. **Category pages**: Some render via dynamic imports or `RegisteredToolMount` which may not provide static HTML
3. **Tool pages**: Many use `RegisteredToolMount` which is a client component wrapper

### robots.txt / sitemap.xml
- `robots.ts` exists but may not be generating properly
- `sitemap.ts` filters out API key tester pages correctly but may have issues with static pages

### Tool Count Inconsistencies
- `SITE_CONFIG.toolCountString` in config.ts is the source of truth
- README says "733+" and "10,000+ SEO variants"
- Homepage says "405+"
- Footer may say "200+"

### API Key Tester Contradictory Claims
- Component says "100% browser-based" and "encrypted proxies" - cannot be both
- Current implementation is simulated (placeholder)

## Phase 2: Planned Code Changes

### Priority Fixes
1. Update search page metadata to be noindex
2. Fix sitemap generation
3. Create centralized tool count system
4. Fix API key tester copy
5. Update downloader pages with lawful use notices

### Pages Needing Static Content
- Category hub pages (image-tools, pdf-tools, video-tools, etc.)
- Company pages (about, contact, privacy, terms) - appear OK
- Tool pages need verification

## Implementation Progress
- [x] Phase 1: Root cause analysis complete
- [ ] Phase 2: Fix crawl rendering
- [ ] Phase 3: Fix robots.txt and sitemap.xml
- [ ] Phase 4: Fix tool count consistency
- [ ] Phase 5: Fix search/category URLs
- [ ] Phase 6-10: Fix content pages
- [ ] Phase 11-14: Fix trust signals and schema
- [ ] Phase 15: Build SEO QA script
- [ ] Phase 16: Final verification
