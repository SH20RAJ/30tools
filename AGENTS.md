# 30tools Codebase Documentation

## Overview
30tools is a high-performance, developer-first API and utility ecosystem built with Next.js (App Router) and Tailwind CSS. It is designed for maximum SEO visibility and conversion, with over 600+ tools integrated.

## Core Architecture

### 1. Data Layer (`src/constants/`)
- **tools.json**: The single source of truth for the entire tool ecosystem. Contains metadata for all tools, including SEO titles, descriptions, categories, features, FAQs, and `extraSlugs`.
- **tools-utils.js**: Utility functions to query and filter tools from the JSON data.

### 2. Routing System
- **Next.js rewrites**: Located in `next.config.mjs`, this programmatically handles all SEO variants defined in `extraSlugs` of `tools.json`. Any URL in `extraSlugs` will automatically serve its parent tool's content.
- **Middleware (`src/middleware.ts`)**: Dynamically validates incoming requests against the `tools.json` dataset to ensure only valid tool routes are processed, reducing 404 errors.
- **App Router**: Tools are organized into semantic category folders (e.g., `(image)`, `(pdf)`, `(downloaders)`) for better codebase management and SEO.

### 3. SEO Infrastructure
- **seo-helper.ts**: Centralized logic for generating metadata, JSON-LD (Schema.org), and handled canonical URLs for variants.
- **PremiumToolPage.tsx**: A standard component used to rapidly deploy SEO-optimized landing pages for new tools. It renders features, FAQs, How-To steps, and structured data dynamically from `tools.json`.

### 4. Components
- **ToolLayout**: Shared wrapper for all tool pages providing consistent navigation and structure.
- **PremiumToolPage**: Enhanced component for tool pages with premium UI, tabs, and SEO optimization.
- **SEO Components**: `BreadcrumbsEnhanced`, `QuickActions`, `RelatedTools`, and `UserComments` are integrated into tool pages to boost engagement and rank.

## Recent Optimizations
- **URL Resolution**: Resolved 1057 404 errors by clustering them into existing tool variants or new placeholder tools.
- **Scale**: The platform now supports 660+ primary tool routes and thousands of SEO variants via `extraSlugs`.

## Developer Workflow
- To add a new tool:
    1. Append entry to `src/constants/tools.json`.
    2. Create folder and `page.js` in `src/app/(category)/[slug]/`.
    3. The middleware and rewrite system will handle the rest.

### CRITICAL: Metadata & Component Rules
- **Metadata Export:** Every `page.js` and `layout.js` MUST directly export a `metadata` object using `export const metadata = { ... }`. 
- **No Dynamic Helpers:** Do NOT use `generateToolMetadata` or any other dynamic metadata generation library. All metadata (titles, descriptions, keywords) must be hardcoded in the file for maximum performance and SEO predictability.
- **Server Components ONLY:** All `page.js` and `layout.js` files MUST remain Server Components. NEVER add `'use client'` to these files. If interactivity is needed, encapsulate it in a separate Client Component and import it into the server page.
- **SEO Title Strategy:** Always use the "Low-Hanging-Fruit" strategy for titles. 
  - Pattern: `Free [Tool Name] Online - No Signup | 30tools`
  - Avoid high-competition generic titles.
