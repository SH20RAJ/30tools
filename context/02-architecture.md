# Architecture

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 15.3.3 |
| Language | TypeScript | Strict mode, ES2020 |
| React | React | 19 |
| Styling | Tailwind CSS + tailwindcss-animate | v4 |
| UI Components | Radix UI + shadcn/ui (new-york) | 25 components |
| Icons | Lucide React | — |
| Animation | Framer Motion | — |
| Auth (optional) | Stack Auth (@stackframe/stack) | 2.8.85 |
| Hosting | Cloudflare Workers/Pages (@opennextjs/cloudflare) | — |
| Analytics | Google Analytics, Microsoft Clarity, OneDollarStats | — |
| Linting | ESLint + Biome (dual linter) | — |
| Build Runtime | Bun | — |
| Image Processing | Sharp (server-side) | — |

## Layer Boundaries

```
┌─────────────────────────────────────────────────┐
│                   Pages (Server Components)      │
│  src/app/(category)/tool-name/page.tsx           │
│  - Export metadata object                        │
│  - Render ToolLayout with tool config            │
├─────────────────────────────────────────────────┤
│               Layout & Navigation                │
│  src/app/layout.tsx (root)                       │
│  src/components/navigation/AppleNavbar.tsx       │
│  src/components/footers/AppleFooter.tsx          │
├─────────────────────────────────────────────────┤
│              Tool Components (Client)            │
│  src/components/tools/category/ToolName.tsx      │
│  - 'use client' directive                        │
│  - Interactive logic, state, browser APIs        │
├─────────────────────────────────────────────────┤
│              Shared Components                   │
│  src/components/tools/shared/ToolLayout.jsx      │
│  src/components/shared/StructuredData.tsx        │
│  src/components/seo/*                            │
├─────────────────────────────────────────────────┤
│              Data & Utilities                    │
│  src/constants/tools.json (source of truth)      │
│  src/lib/tools.ts (query/filter)                 │
│  src/lib/seo.ts (metadata generation)            │
│  src/lib/utils.ts (cn utility)                   │
└─────────────────────────────────────────────────┘
```

## Invariants (Rules That Must Never Break)

1. **tools.json is the single source of truth** — Every tool MUST be registered in `src/constants/tools.json`. Adding a tool = (1) append to tools.json, (2) create folder + page in correct route group, (3) rewrites/redirects handle the rest
2. **All page.js/layout.js are Server Components** — Never add `'use client'` to page or layout files. Interactivity goes in separate Client Components
3. **Every page exports metadata directly** — No dynamic metadata generation helpers. Hardcoded `metadata` object export only
4. **ToolLayout wraps every tool page** — Provides JSON-LD, breadcrumbs, hero, tool area, SEO content, related tools (minimum 10)
5. **SEO title pattern** — `Free [Tool Name] Online - No Signup | 30tools`
6. **extraSlugs are SEO variants** — Each tool can have 10-20+ extra slugs. The system handles 301 redirects from extra slug URLs to canonical routes
7. **Client-side first** — 95% of tool logic runs in the browser. Server actions only for YouTube downloads, AI features, and proxy endpoints
8. **No database** — The project is entirely data-driven via JSON files. No ORM, no SQL, no D1/KV

## Key Files

| File | Purpose |
|------|---------|
| `src/constants/tools.json` | Single source of truth for all 376 tools (248KB) |
| `src/lib/tools.ts` | Tool query/filter utility functions |
| `src/constants/config.ts` | Site-wide constants (SITE_URL, TOOL_COUNT, etc.) |
| `src/app/layout.tsx` | Root layout with metadata, analytics, providers |
| `src/app/globals.css` | Design tokens and global styles |
| `src/components/tools/shared/ToolLayout.jsx` | Core tool page wrapper |
| `src/components/shared/StructuredData.tsx` | JSON-LD structured data |
| `src/lib/seo.ts` | Centralized SEO metadata helpers |
| `next.config.mjs` | Next.js + PWA + Cloudflare config |
| `wrangler.jsonc` | Cloudflare Workers config |
| `docs/AGENTS.md` | Architecture docs and conventions |
| `docs/DESIGN_SYSTEM.md` | Design system documentation |

## Route Structure

```
src/app/
├── (audio)/           # Audio tools
├── (calculators)/     # Calculator tools
├── (company)/         # About, Contact, Privacy, Terms, Search
├── (content)/         # Blog articles, tool guides
├── (developer)/       # Developer tools (91)
├── (downloaders)/     # Video/social downloaders (82)
├── (generators)/      # AI/fun generators (12)
├── (image)/           # Image tools (32)
├── (intent)/          # Intent-based landing pages
├── (landing)/         # Homepage (root /)
├── (others)/          # Misc tools
├── (pdf)/             # PDF tools (10)
├── (seo)/             # SEO tools (17)
├── (text)/            # Text tools (16)
├── (user)/            # User-facing pages
├── (utilities)/       # Utility tools (90)
├── (video)/           # Video tools (5)
├── (youtube)/         # YouTube tools (29)
├── (youtube-redirects)/ # YouTube URL magic redirects
├── api/               # API routes (16 endpoints)
├── handler/[...stack]/ # Stack Auth catch-all
├── tools/[slug]/      # Dynamic slug redirect
└── feed.xml/          # RSS feed
```
