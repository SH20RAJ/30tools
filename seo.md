This guide is designed as a strict adherence document for your Next.js project. It combines technical SEO for React frameworks with aggressive programmatic strategies used by the "million-dollar tool sites" analyzed in previous steps.

Create a file named `SEO.md` in your project root and follow every single directive.

-----

# SEO.md: The 30Tools Authority & Revenue Protocol

**Goal:** Rank \#1 on Google/Bing, scale to 1M+ visitors, and secure high-RPM AdSense revenue.
**Status:** STRICT ADHERENCE REQUIRED.

## I. The Ironclad Commandments (Strict Rules)

1.  **Speed is Law:** No page shall take longer than **1.5s** to load (LCP). Tools must be interactive within **100ms** (INP).
2.  **Zero "Thin Content":** Every programmatic page MUST have at least **300 words** of unique, helpful text describing *how* to use the specific tool for that specific query.
3.  **Mobile First:** 85% of traffic will be mobile. Design the UI for a 360px width screen first.
4.  **No Dead Ends:** Every page must link to at least 3 other relevant tools (e.g., "PDF to JPG" links to "PDF Compressor").
5.  **International by Default:** You cannot hit $1M/mo on English traffic alone. You MUST deploy Internationalization (i18n) for `es`, `hi`, `fr`, `de`, `pt`.

-----

## II. Technical Architecture (Next.js 14+ App Router)

### 1\. Dynamic Metadata API

Do not use static `<head>` tags. You must use the `generateMetadata` function for every tool page to inject dynamic keywords.

**Implementation Pattern:**

```typescript
// app/tools/[tool_slug]/page.tsx
import { Metadata } from 'next';

export async function generateMetadata({ params }): Promise<Metadata> {
  const tool = await getToolData(params.tool_slug);
  
  return {
    title: `${tool.name} - Free Online Tool (No Sign-up)`,
    description: `Use our free ${tool.name} to ${tool.action}. Fast, secure, and works on mobile. Convert ${tool.input} to ${tool.output} instantly.`,
    alternates: {
      canonical: `https://30tools.com/${params.tool_slug}`,
      languages: {
        'es-ES': `https://30tools.com/es/${params.tool_slug}`,
        'hi-IN': `https://30tools.com/hi/${params.tool_slug}`,
      },
    },
    openGraph: {
      images: [`/api/og?title=${tool.name}`], // Dynamic OG Image generation
    },
  };
}
```

### 2\. Structured Data (Schema.org)

Google requires explicit schema to understand that your page is a "Software App". This triggers rich snippets (star ratings, price: free) in search results.

**Mandatory Component:**
Create a `JsonLd` component that renders this for *every* tool:

```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "YouTube Downloader 4K",
  "applicationCategory": "MultimediaApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": "Download 4K video, Extract Audio, No Watermark",
  "browserRequirements": "Requires JavaScript. Works on Chrome, Safari, Edge."
}
```

\*\*

### 3\. Sitemap & Robots.txt

  * **Robots.txt:** Allow everything except API routes.
  * **Sitemap:** You MUST generate a dynamic sitemap that updates automatically when you add new programmatic pages. Use `next-sitemap` or the built-in `sitemap.ts` in App Router.

-----

## III. The $1M Programmatic SEO Strategy

You cannot write 10,000 pages manually. You will use **Programmatic SEO (pSEO)** to target "Long Tail" keywords.

### 1\. The "Modifier" Technique

Identify the core tool, then generate pages for every possible user intent modifier.

**Example: For your "YouTube Downloader"**

  * **Core Page:** `/youtube-downloader`
  * **Programmatic Pages (Generated via Dynamic Routes):**
      * `/youtube-to-mp3`
      * `/youtube-shorts-downloader`
      * `/download-youtube-4k`
      * `/youtube-thumbnail-grabber`
      * `/youtube-downloader-iphone`
      * `/youtube-downloader-android`

### 2\. Content Injection (Avoiding "Thin Content" Penalty)

Google hates pages that are just a button. You must inject unique data into the template.

  * **Variable:** `{Keyword}` = "YouTube to MP3"
  * **Template:** "Why is our **{Keyword}** the best? Unlike other tools, we process **{Keyword}** in under 5 seconds..."
  * **FAQ Section:** Generate 5 specific questions for each variant.
      * *Q: Is it safe to use {Keyword}?*
      * *A: Yes, our {Keyword} tool uses SSL encryption...*

-----

## IV. AdSense & Monetization Safety

  * **Placement Rule:** Never place ads *immediately* under a "Download" button. This causes "Invalid Traffic" bans.
  * **Safe Zones:**
      * **Sidebar (Desktop):** 300x600 Sticky Ad.
      * **In-Content:** 728x90 Ad between the "Tool Interface" and the "How-to Guide" text.
      * **Footer:** Sticky anchor ad (Auto ads).
  * **GDPR/CCPA:** You **MUST** have a cookie consent banner. AdSense will block revenue from EU if this is missing.

-----

## V. Validation Checklist (Before Deploy)

  - [ ] **Lighthouse Score:** 95+ in Performance, 100 in SEO.
  - [ ] **Canonical Self-Ref:** Every page points to itself as canonical.
  - [ ] **H1 Tag:** Only ONE H1 per page, containing the primary keyword.
  - [ ] **Alt Text:** All icons and SVGs have descriptive alt text.
  - [ ] **404 Handling:** Custom 404 page that links back to popular tools (recaptures lost traffic).

-----

### 🚀 Recommended Next Step

To implement the **Programmatic SEO** strategy mentioned in Section III, you need to set up the Dynamic Routes in Next.js correctly.

**Why this video is relevant:** This tutorial specifically covers **Programmatic SEO with Next.js**, showing you exactly how to code the dynamic pages and metadata generation required to scale your `30tools` project to thousands of pages.

[Programmatic SEO with Next.js](https://www.youtube.com/watch?v=VcR5vlDxbf0)

http://googleusercontent.com/youtube_content/4
