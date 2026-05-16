# Project Overview

## Product Summary

**30tools** is a free, browser-based online toolkit platform providing 376+ tools across 15 categories. It's an SEO-first utility engine designed to dominate search results for online tool queries. Live at [30tools.com](https://30tools.com).

## Goals

1. **SEO Dominance** — Rank for thousands of tool-related keywords through programmatic SEO, structured data, and content marketing
2. **Zero Friction** — No signup, no downloads, no paywalls. Every tool works instantly in the browser
3. **Privacy First** — 95% of tool logic runs client-side. No user data collection beyond standard analytics
4. **Open Source** — Community-driven development at `sh20raj/30tools`
5. **Monetization** — Google AdSense integration (non-intrusive)

## Core Flows

1. **Tool Discovery** — Homepage → Search/Category → Tool Page
2. **Tool Usage** — Tool Page → Interactive Tool → Result/Download
3. **YouTube Magic** — Replace `youtube.com` with `30tools.com` in any YouTube URL → Opens downloader
4. **Content Marketing** — Blog articles → Long-tail keyword targeting → Tool discovery
5. **Internationalization** — 14 languages via `?lang=` query parameter

## Tool Categories

| Category | Count | Examples |
|----------|-------|---------|
| Developer | 91 | JSON Formatter, Base64, Hash Generator, Regex Tester |
| Utilities | 90 | QR Generator, Password Generator, Unit Converter |
| Downloaders | 82 | YouTube, Instagram, TikTok, Twitter video downloaders |
| Image | 32 | Compressor, Converter, Resizer, Background Remover |
| YouTube | 29 | Downloader, Thumbnail, Tags, Statistics |
| SEO | 17 | Meta Tag Generator, Schema Markup, Sitemap |
| Text | 16 | Word Counter, Case Converter, Lorem Ipsum |
| Generators | 12 | AI Image, Voice, Music, Poem, Bio, QR |
| PDF | 10 | Editor, Converter, Protect, Unlock, Merge |
| Content | 9 | Blog articles and tool guides |
| Others | 7 | Miscellaneous tools |
| Video | 5 | Video converter, compressor |
| Audio | 3 | Audio converter, MP3 tools |
| Company | 2 | About, Contact |

## Out of Scope

- User authentication/accounts (Stack Auth is optional, app works without it)
- Backend databases (entirely data-driven via `tools.json`)
- Server-side rendering of tool results (most tools are client-side)
- Mobile native apps
- E-commerce or payment processing
- CMS for non-technical users
