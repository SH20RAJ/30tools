# Internationalization (i18n) Implementation Plan

## Overview
This document outlines the plan to add internationalization (i18n) support to the 30tools application. The primary goal is to support multiple languages (`en`, `es`, `fr`, `de`, `pt`) while **strictly preserving existing traffic and SEO rankings** for the default language.

## Key Requirements
1.  **No Traffic Loss**: Existing URLs (e.g., `/tiktok-video-downloader`) must remain valid and serve the default language (`en`).
2.  **SEO Friendly**: Implement correct `hreflang` tags and locale-specific subpaths for non-default languages (e.g., `/es/tiktok-video-downloader`).
3.  **Legacy Support**: Must coexist with the current custom slug rewriting middleware.

## Technical Strategy

### 1. Library Selection
We will use **`next-intl`**, the standard i18n solution for Next.js App Router.

### 2. URL Structure
We will use the **`prefix: 'as-needed'`** routing strategy:
-   **Default (English)**: `/tool-name` (No prefix)
-   **Spanish**: `/es/tool-name`
-   **French**: `/fr/tool-name`
-   ...and so on.

This ensures that the current URL structure for English users remains exactly the same, preventing 404s or unnecessary redirects that could impact SEO.

### 3. Middleware Integration
The application currently uses a custom middleware (`src/middleware.js`) to handle "extra slugs" (mapping seo-friendly URLs to internal canonical routes).

**Integration Plan**:
-   The existing middleware logic will be wrapped or composed with `next-intl` middleware.
-   **Request Flow**:
    1.  **Locale Detection**: Determine if the request starts with a supported locale (e.g., `/es`).
    2.  **Legacy Slug Check**: If the path (stripped of locale) matches a legacy slug:
        -   Perform the internal rewrite to the canonical tool route.
        -   Maintain the locale context so `next-intl` can serve the correct language.
    3.  **Standard Routing**: If no legacy slug matches, proceed with standard `next-intl` routing.

### 4. Codebase Refactoring
To fully support `next-intl` with the App Router, we will restructure the `src/app` directory:

-   **Move Routes**: Move all page routes from `src/app/*` into `src/app/[locale]/*`.
-   **Layout Update**: Update the root layout to receive the `locale` param and wrap the app in `NextIntlClientProvider`.

## Implementation Steps

1.  **Dependencies**: Install `next-intl`.
2.  **Configuration**: Set up `src/i18n/request.ts` and `src/i18n/routing.ts`.
3.  **File Move**: Refactor `src/app` structure.
4.  **Middleware**: Update `src/middleware.js` to support i18n + legacy slugs.
5.  **Components**: specific update to `Link` components to be locale-aware.

## Risk Mitigation
-   **Traffic Check**: We will manually verify that visiting a root URL (e.g., `/`) does **not** redirect to `/en/`.
-   **Slug Verification**: We will verify that visiting a custom slug (e.g., `/tiktok-downloader`) continues to work without redirection loops.
