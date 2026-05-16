# Project Overview

## Product Summary

**30tools** is a large-scale, SEO-driven online toolkit platform at [30tools.com](https://30tools.com). It provides 376+ free browser-based tools across 15 categories with zero signup requirements. The philosophy is "The Ultimate Utility Engine" -- a Utility Operating System, not a simple script collection.

## Goals

1. **SEO Dominance** -- Rank #1 for online utility tool queries via programmatic SEO, extraSlugs engine, and structured data on every page
2. **Free & Accessible** -- Professional-grade tools, no registration, no paywalls
3. **Privacy-First** -- 95% of tool logic runs client-side in the browser
4. **Open Source** -- GitHub: `sh20raj/30tools`
5. **Monetization** -- Google AdSense (`ca-pub-1828915420581549`) in root layout

## Core Flows

1. **Homepage** -- Hero with search, trending tool pills, trust badges, category directory, SEO content, FAQ
2. **Search** -- `/search?q=` with category filtering and tool discovery
3. **Tool Usage** -- Each tool page follows ToolLayout: hero, interactive area, SEO content, related tools (min 10)
4. **YouTube Magic Redirect** -- Replace `youtube.com` with `30tools.com` in any YouTube URL to open the downloader
5. **Blog/Content** -- SEO-optimized articles at `/blog/[slug]` for long-tail keyword targeting
6. **Internationalization** -- 14 supported languages via `?lang=` query parameter

## Tool Categories (376 total)

| Category | Count | Route Group |
|----------|-------|-------------|
| Developer | 91 | `(developer)` |
| Utilities | 90 | `(utilities)` |
| Downloaders | 82 | `(downloaders)` |
| Image | 32 | `(image)` |
| YouTube | 29 | `(youtube)` |
| SEO | 17 | `(seo)` |
| Text | 16 | `(text)` |
| Generators | 12 | `(generators)` |
| PDF | 10 | `(pdf)` |
| Content | 9 | `(content)` |
| Others | 7 | `(others)` |
| Video | 5 | `(video)` |
| Audio | 3 | `(audio)` |
| Company | 2 | `(company)` |

## Out of Scope

- User accounts / authentication beyond optional Stack Auth
- Database or backend storage (entirely data-driven via `tools.json`)
- Server-side tool processing (except YouTube/video downloaders and AI features)
- Native mobile apps
- Paid/premium tiers
- CMS or admin dashboard
