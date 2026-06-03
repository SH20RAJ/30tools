# 30tools SEO and Monetization Plan

Updated: 2026-06-03

## Extremely Competitive Tools

These generic tools should stay live, but they should not be the main SEO bet for broad head terms:

- PDF Editor, PDF to Word, Word to PDF
- Image Compressor, Image Resizer, Background Remover
- QR Code Generator
- Word Counter, Character Counter
- JSON Formatter, JSON Validator
- Base64 Encoder/Decoder, URL Encoder/Decoder
- BMI Calculator, Age Calculator, Percentage Calculator
- Currency Converter, Mortgage Calculator, Loan Calculator
- YouTube Video Downloader, TikTok Downloader, Instagram Downloader
- MP4 to MP3
- AI Image Generator, Text to Speech

Why they are hard: SERPs are dominated by large utility brands, browser extensions, SaaS tools, ad-heavy incumbents, and high-authority domains with backlinks. 30tools should use these as parent utilities and route link equity toward exact-use pages.

## Low-Hanging-Fruit Keyword Map

Priority clusters implemented in code:

- Exam image tools: exact KB compression, SSC/UPSC/NEET/JEE pages, signature pages, cm/mm/DPI pages.
- Student calculators: attendance, safe class skipping, SGPA, CGPA, CGPA to percentage, required marks.
- API key testers: OpenAI, Claude, Gemini, Groq, DeepSeek, Resend, SendGrid, Stripe, Twilio.
- Small business QR and SEO tools: restaurant menu QR, Google Form QR, WiFi QR, UPI QR, Open Graph preview, meta description length.

## Pages Created Or Updated

New data/config:

- `src/data/seo-opportunities.ts`
- `src/data/tool-seo-inventory.ts`
- `src/data/monetization.ts`

New dynamic long-tail handling:

- Existing root intent route now serves standalone SEO opportunity pages such as `/compress-image-to-50kb`, `/openai-api-key-tester`, `/qr-code-for-restaurant-menu`, and `/meta-description-length-checker`.

New hub pages:

- `/exam-image-tools`
- `/student-calculators`
- `/student-tools`
- `/api-key-testers`
- `/qr-tools`
- `/small-business-tools`

Money pages:

- `/pro`
- `/api`
- `/advertise`
- `/services`
- `/hire` redirects to `/services`

Codebase fixes:

- Repaired malformed `src/constants/tools.json`.
- Added `npm run typecheck`.
- Added sitemap entries from real SEO opportunity data.
- Replaced hardcoded ad-risk rules with shared monetization policy.
- Added reusable exact-use SEO content blocks inside `ToolLayout`.

## Internal Linking Strategy

Generic high-competition pages should link to exact-use pages:

- Image Compressor -> 10KB, 20KB, 30KB, 50KB, signature, SSC, UPSC, cm/mm/DPI.
- QR Code Generator -> restaurant menu, Google Form, WiFi, UPI, business card, wedding invitation.
- Developer Tools -> API key tester hub and provider pages.
- Calculators -> student calculator hub, attendance, SGPA, CGPA, required marks.
- SEO Tools -> Open Graph preview checker and meta description length checker.

The reusable `SeoOpportunityContent` block renders related exact-use links from the central opportunity map.

## Monetization Strategy

Safe pages:

- Image tools
- Exam image tools
- Student calculators
- Developer tools
- API key testers
- SEO tools
- QR tools
- Small business tools

Risky/no-ads pages:

- YouTube/TikTok/Instagram/Facebook downloaders
- MP4 to MP3
- Universal video downloader
- Video/social downloader variants

Monetization placements:

- Safe display ads after hero, after tool, in content, and footer.
- No ads inside upload areas or next to download buttons.
- Pro upsells after useful content.
- Services CTAs only on API, SEO, QR, and business pages.
- Affiliate slots are config-driven by context: design, developer, SEO, hosting.

## Pro, API, Sponsor Opportunities

- Pro: no ads, batch image compression, batch PDF tools, larger files, saved history, API access.
- API: image compression, PDF compression, QR generation, screenshots, SEO metadata, Open Graph preview.
- Sponsors: small placements, category sponsorships, exclusive placements.
- Services: SEO fixes, landing pages, restaurant QR menu websites, speed optimization, custom tools, API integrations.

## Next 30-Day SEO Action Plan

1. Verify build and indexability for all new opportunity URLs.
2. Update parent generic pages with above-the-fold links to their exact-use clusters.
3. Add screenshots or short visual examples to priority hubs.
4. Add more exact pages only when they have unique intent and settings.
5. Build Search Console tracking groups for exam, student, API, and QR clusters.
6. Add conversion tracking on `/pro`, `/api`, `/advertise`, and `/services` CTAs.
7. Audit duplicate titles/descriptions across the older 456 tool registry.
8. Add real testimonials or usage examples only after they exist.
9. Improve API tester implementations provider by provider.
10. Publish 3 supporting guides: SSC photo requirements, attendance shortage examples, and API key safety.
