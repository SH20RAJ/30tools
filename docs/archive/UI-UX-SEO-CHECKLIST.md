# UI/UX & SEO Checklist

## Audit Steps

- [ ] **Sitemap Inclusion**: Run `npx xml-sitemap-generator` or check `sitemap.xml` (usually `/sitemap.xml`) to ensure all `tools.json` routes are present.
- [ ] **Search Console**: Verify `tools.json` routes are indexable in Google Search Console URL Inspection.
- [ ] **Router Check**: Ensure every `route` in `tools.json` maps to a physical file (use `node scripts/audit_routes.js`).

## UI Checklist

- [ ] **Heading Structure**: Only ONE `<h1>` per page. All other headings must be `<h2>`, `<h3>` etc.
- [ ] **Fold Content**: Primary controls (inputs, buttons) must be visible _without scrolling_ on desktop.
- [ ] **Mobile Layout**:
  - [ ] Controls should be easily accessible (top of page or sticky/accordion).
  - [ ] No horizontal scrolling on mobile (use `max-w-[100vw]` or `overflow-x-hidden`).
- [ ] **Feedback**: Copy buttons must show a "Copied!" toast or tooltip.
- [ ] **Visual Hierarchy**: Primary actions (Generate, Download) must have the most prominent style (`default` variant).

## UX Checklist

- [ ] **Presets**: If the tool has complex inputs, provide 1-Click Presets.
- [ ] **Empty States**: If the tool produces output, show a placeholder or "Waiting for input..." state initially.
- [ ] **Loading States**: Show a spinner or progress bar during processing.
- [ ] **Input Validation**: Show clear error messages for invalid inputs (e.g., "Invalid URL").
- [ ] **Related Tools**: Every tool page must link to 3-6 related tools at the bottom.

## SEO Checklist

- [ ] **Metadata**:
  - [ ] Title: `[Tool Name] - [benefit] | 30Tools`
  - [ ] Description: 140-160 chars, unique.
  - [ ] Canonical URL: Self-referencing absolute URL.
- [ ] **Structured Data (JSON-LD)**:
  - [ ] `SoftwareApplication` or `WebApplication` schema.
  - [ ] `FAQPage` schema if FAQs exist.
- [ ] **Content**:
  - [ ] "How to use" section (step-by-step).
  - [ ] "Features" text.
  - [ ] At least 300 words of unique content.
- [ ] **Performance**:
  - [ ] Images using `next/image`.
  - [ ] No large layout shifts (CLS < 0.1).
  - [ ] LCP < 2.5s.

## Accessibility Checklist

- [ ] **Color Contrast**: Text vs Background must be at least 4.5:1 (AA).
- [ ] **Keyboard Nav**: All controls must be reachable via `Tab` and actionable via `Enter`/`Space`.
- [ ] **Labels**: All form inputs must have `<label>` or `aria-label`.
- [ ] **Status Messages**: Use `role="status"` or `aria-live="polite"` for dynamic results.

## QA Verification Commands

```bash
# Run generic audit
node scripts/audit_routes.js

# Check for production build errors
npm run build

# Run accessibility check (requires slightly more setup found in scripts usually)
# Manual: Chrome DevTools -> Lighthouse -> Navigation & Accessibility
```

## Release Steps

1.  **Commit**: Use semantic commit messages (e.g., `feat(ui): update terabox downloader layout`).
2.  **Deploy**: Push to `main` (triggers Vercel/Netlify build).
3.  **Indexing**:
    - Wait for deployment.
    - Check `/sitemap.xml` is updated.
    - (Optional) Ping IndexNow.
