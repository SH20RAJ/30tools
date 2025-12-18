# SEO & Performance playbook for a Next.js app — complete, actionable, and prioritised

Below is a single, copy-pasteable document you can drop into your PRD or repo. It lists **easy wins** that give the biggest return first, then a full technical checklist (Next.js-specific), configuration examples, testing & monitoring, and links to authoritative references.

---

# Executive summary (one line)

Focus first on fast, stable pages (Core Web Vitals), correct metadata + crawlability, optimized media & caching, and then on ongoing monitoring and content quality — this order yields the highest SEO lift for the least effort. ([Google for Developers][1])

---

# Quick wins (do these now — highest ROI, easy)

1. **Set unique `<title>` (50–60 chars) and meta description (120–160 chars) for each page.** Use server-rendered metadata (Next.js Metadata API or Head in pages). ([Next.js][2])
2. **Use `next/image` for all public images (with width/height or layout to avoid CLS).** Replace raw `<img>` where possible. ([Next.js][3])
3. **Enable cache headers for static assets via CDN (long `max-age` + immutable) and short cache for HTML.** Improves repeat load speed and reduces origin cost. ([KeyCDN][4])
4. **Audit third-party scripts and remove nonessential ones.** Block or lazy-load analytics/tracking scripts to reduce TBT/INP. ([web.dev][5])
5. **Generate and expose `sitemap.xml` and `robots.txt`.** Submit to Google Search Console. (Use static generation or server route.) ([Next.js][6])

---

# Full checklist — ordered by impact

## Content & crawlability

* Use server-side metadata (Next.js `metadata` or `<Head>` in pages) — unique title + description per page. ([Next.js][2])
* Implement `canonical` tags for duplicate/parameterized pages.
* Implement `hreflang` if multilingual.
* Publish a machine-readable `sitemap.xml` and keep it updated when content changes; submit to Search Console. ([Next.js][6])
* Avoid blocking important resources with robots or JS; ensure key content is server-rendered or prerendered for crawlers.

## Rendering strategy (Next.js)

* Use **SSG** (Static generation) for content pages that don’t change per request. Use **ISR** for frequently updated content (incremental static regeneration). Use **SSR** only when page must be personalized at request time. (SSG/ISR > SSR for scale and caching.) ([Next.js][6])
* Prefer the **app/** router metadata API for canonical/OG generation when using Next.js 13+. ([Next.js][2])

## Core Web Vitals (Performance)

* Measure LCP, INP (or FID replacement), CLS. Prioritize reducing LCP (optimize hero image, server time to first byte), eliminate layout shifts (explicit sizes), and reduce long tasks (third-party scripts, big JS bundles). ([Google for Developers][1])
* Use Lighthouse / PageSpeed Insights for lab and PSI field data tests. Automate with Lighthouse CI for pull requests. ([Chrome for Developers][7])

## Images & media

* Use `next/image` with correct `width`/`height` or `fill` + container size to prevent CLS. Serve WebP/AVIF via Next.js optimizer or image CDN. Use `priority` for LCP images. ([Next.js][3])
* Lazy-load non-critical images (native `loading="lazy"` or `next/image` default). Provide low-quality image placeholder (LQIP) blur if helpful. ([Next.js][3])

## Fonts

* Use `next/font` (or local font files) to avoid FOIT/FOUT. Preload only critical fonts with `rel=preload` and `as=font` + `crossorigin`. Avoid multiple large font weights.

## JavaScript & Bundling

* Code-split: dynamic imports for heavy components, split vendor code.
* Avoid shipping heavy libraries to client; move logic to server where possible.
* Use `next/script` with `strategy="lazyOnload"` or `afterInteractive` for noncritical scripts.
* Remove unused code via tree shaking and bundle analysis (`next build && next analyze`).

## Network & HTTP

* Use a global CDN (Vercel, Cloudflare, Fastly, CloudFront) with edge caching for static and ISR responses.
* Set `Cache-Control` correctly: long `max-age=31536000, immutable` for hashed assets; shorter/`no-cache` for HTML or use stale-while-revalidate strategies. ([KeyCDN][4])
* Enable Brotli + Gzip compression on CDN/edge. ([AWS Documentation][8])

## Headers & Security

* Add `Content-Security-Policy`, `Strict-Transport-Security`, `Permissions-Policy`, `X-Frame-Options`, and `Referrer-Policy`.
* Use `Link: rel=preconnect` and `dns-prefetch` for critical third-party origins (CDN, analytics).

## Accessibility & Structured data

* Add JSON-LD structured data for key pages (Organization, BreadcrumbList, Article, Product) to improve rich results. Provide alt text on images.
* Validate with Rich Results Test and Search Console.

## Social & shareability

* Generate dynamic Open Graph and Twitter Card images (Next.js Image + metadata API) and set `og:title`, `og:description`, `og:image`, `twitter:card`. ([Next.js][2])

## PWA / Offline (optional)

* Add `manifest.json`, service worker for offline, and ensure start_url and icons are correct. Mark PWA when appropriate — can improve engagement signals.

## Monitoring, testing & review

* Use PageSpeed Insights / Lighthouse for synthetic tests; measure Real User Monitoring (RUM) for Web Vitals (web-vitals npm). ([Chrome for Developers][7])
* Use Google Search Console for indexing, sitemap, manual actions, and performance insights.
* Create CI checks: Lighthouse CI, SEO checklist (meta present, canonical exists), and broken-link checks.

---

# Easy step-by-step actions (copy/paste tasks)

## First hour (do these now)

1. Run Lighthouse on your home page; screenshot and note LCP, CLS, TBT. ([Chrome for Developers][7])
2. Replace top hero `<img>` with `next/image` and declare width/height. ([Next.js][3])
3. Add page-specific `<title>` and `<meta name="description">` for top 5 pages. ([Next.js][2])
4. Create `sitemap.xml` (static script or next-sitemap) and `robots.txt`. Submit to Search Console. ([Next.js][6])

## Next day

1. Configure CDN and long cache for `/static`/`/_next/static` assets. Add `Cache-Control: public, max-age=31536000, immutable`. ([KeyCDN][4])
2. Add `next/script` for analytics with lazy loading.
3. Audit fonts and switch to `next/font` or preload a single critical font.

## Weekly

1. Run Lighthouse CI in PRs. Block merge if LCP/CLS regress > threshold. ([Chrome for Developers][7])
2. Review Search Console top queries + pages; improve pages with impressions but low CTR.

---

# Next.js config & example snippets

## next.config.js — basic performance & headers

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['your-cdn.com','images.unsplash.com'],
    formats: ['image/avif','image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)\\.(js|css|png|jpg|jpeg|svg|webp|avif)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, s-maxage=600, stale-while-revalidate=59' }
        ],
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
    ]
  }
}
module.exports = nextConfig
```

**Notes:** Adjust `s-maxage` for your cache invalidation strategy; Vercel/Cloudflare override headers via their UI if needed. ([KeyCDN][4])

## Example JSON-LD (Article)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Your article title",
  "image": ["https://example.com/og-image.jpg"],
  "datePublished": "2025-12-01T08:00:00+05:30",
  "author": { "@type": "Person", "name": "Author Name" },
  "publisher": {
    "@type": "Organization",
    "name": "Site Name",
    "logo": { "@type":"ImageObject", "url":"https://example.com/logo.png" }
  }
}
</script>
```

## `next/image` example

```jsx
import Image from 'next/image'

export default function Hero(){
  return (
    <Image
      src="/images/hero.jpg"
      alt="Hero image"
      width={1200}
      height={700}
      priority // use for LCP images
      placeholder="blur" // optional LQIP
    />
  )
}
```

Specify exact dimensions or use layout `fill` inside fixed container to prevent CLS. ([Next.js][3])

---

# Testing & monitoring tools (must-use)

* **Lighthouse / PageSpeed Insights** (lab & CI). ([Chrome for Developers][7])
* **Web Vitals RUM** (web-vitals npm) for INP/LCP/CLS in production. ([Google for Developers][1])
* **Google Search Console** (indexing, coverage, performance).
* **Sentry / Datadog / SpeedCurve / DebugBear** for real-user and synthetic monitoring. ([debugbear.com][9])

---

# Common pitfalls & how to fix them

* **Large hero image causing slow LCP** → Use `next/image`, correct formats (avif/webp), and `priority`. ([Next.js][3])
* **Layout shifts from late-loaded content** → Add explicit width/height or CSS aspect-ratio containers. ([Next.js][3])
* **Overuse of SSR** → Convert to SSG/ISR where possible to allow CDN caching and faster responses. ([Next.js][6])
* **Third-party scripts blocking main thread** → Load them lazily or offload to web workers / server.

---

# Metrics to track (KPIs)

* Organic impressions & clicks (Search Console)
* LCP (target < 2.5s), INP < 200ms, CLS < 0.1 (Core Web Vitals thresholds). ([Google for Developers][1])
* Time to First Byte (TTFB) / Server response time
* Bounce rate & engagement for organic landing pages

---

# References (authoritative)

* Next.js — SEO learning & docs. ([Next.js][10])
* Next.js Image & Metadata docs (use `next/image` & metadata API). ([Next.js][3])
* Google Core Web Vitals / PageSpeed Insights. ([Google for Developers][1])
* Lighthouse docs (automation & CI). ([Chrome for Developers][7])
* HTTP caching best practices (Cache-Control, CDNs). ([KeyCDN][4])

---

# Deliverables you can copy to your repo

1. `next.config.js` snippet (above).
2. `manifest.json` + minimal service worker (if you want PWA).
3. `sitemap.xml` generator script (use `next-sitemap` package or a simple Node script).
4. PR template with Lighthouse CI check and bundle analyzer step.

---

# Fast prompts you can feed to an AI to generate specific tasks

* “Create a `next-sitemap` config that generates sitemap.xml and robots.txt for `example.com` and excludes `/admin`.”
* “Generate JSON-LD for an Article page and provide a Next.js `generateMetadata` snippet to include it.”
* “Write a Lighthouse CI config that fails PRs if LCP > 2.5s or CLS > 0.1.”

---

If you want, I can now:

* generate a ready-to-use `next.config.js`, `robots.txt`, `sitemap.js` script, and `manifest.json` tailored to your domain; **or**
* run a prioritized checklist against a URL you give me and return a ranked list of fixes with code snippets.

Which of those (config bundle or site audit) do you want next?

[1]: https://developers.google.com/speed/docs/insights/v5/about?utm_source=chatgpt.com "About PageSpeed Insights"
[2]: https://nextjs.org/docs/app/getting-started/metadata-and-og-images?utm_source=chatgpt.com "Getting Started: Metadata and OG images"
[3]: https://nextjs.org/docs/14/app/building-your-application/optimizing/images?utm_source=chatgpt.com "Image Optimization"
[4]: https://www.keycdn.com/blog/http-cache-headers?utm_source=chatgpt.com "HTTP Cache Headers - A Complete Guide"
[5]: https://web.dev/articles/optimize-vitals-lighthouse?utm_source=chatgpt.com "Optimizing Web Vitals using Lighthouse | Articles"
[6]: https://nextjs.org/docs?utm_source=chatgpt.com "Next.js Docs | Next.js"
[7]: https://developer.chrome.com/docs/lighthouse/overview?utm_source=chatgpt.com "Introduction to Lighthouse - Chrome for Developers"
[8]: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html?utm_source=chatgpt.com "Serve compressed files - Amazon CloudFront"
[9]: https://www.debugbear.com/docs/metrics/core-web-vitals?utm_source=chatgpt.com "Measure And Optimize Google Core Web Vitals: A Guide"
[10]: https://nextjs.org/learn/seo?utm_source=chatgpt.com "SEO"
