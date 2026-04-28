# 30tools Codebase Documentation

## Overview
30tools is a high-performance, developer-first API and utility ecosystem built with Next.js (App Router) and Tailwind CSS. It is designed for maximum SEO visibility and conversion, with over 600+ tools integrated.

## Core Architecture

### 1. Data Layer
- **tools.json**: Located in `src/constants/tools.json`. The single source of truth for the entire tool ecosystem. Contains metadata for all tools, including SEO titles, descriptions, categories, and `extraSlugs`.
- **tools.ts**: Located in `src/lib/tools.ts`. Type-safe utility functions to query and filter tools from the JSON data.

### 2. Routing System
- **Next.js rewrites**: Located in `next.config.mjs`, this programmatically handles all SEO variants defined in `extraSlugs` of `tools.json`.
- **Proxy (`src/proxy.ts`)**: Replaces the deprecated middleware.ts. Dynamically validates incoming requests and handles 301 redirects for `extraSlugs`.
- **App Router**: Tools are organized into semantic category folders (e.g., `(image)`, `(pdf)`, `(downloaders)`) for better codebase management and SEO.

### 3. SEO Infrastructure
- **Modular Metadata**: All tool pages export hardcoded `metadata` objects for optimal performance and SEO.
- **ToolLayout**: The standard modular wrapper for all tool pages. It handles breadcrumbs, hero section, trust components, features, FAQs, and internal linking.

### 4. Components
- **ToolLayout**: Shared wrapper providing consistent structure and SEO-rich content (FAQs, Features, Steps).
- **DownloaderEngine**: The core interactive component for all video and social media downloaders.
- **Modular Shared Components**: `ToolTrust`, `ToolFeatures`, `ToolSteps`, and `ToolFAQ` are separate components used within `ToolLayout` for better maintainability.

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

## Graphify
- **graphify** (`.agents/skills/graphify/SKILL.md`) - any input (code, docs, papers, images) to knowledge graph. Trigger: `/graphify`
When the user types `/graphify`, invoke the Skill tool with `skill: "graphify"` before doing anything else.
