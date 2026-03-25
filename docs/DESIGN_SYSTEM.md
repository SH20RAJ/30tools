# 30tools Design System

This project now uses a centralized design system powered by tokenized CSS variables and shared utility classes.

## Source of Truth

- Tokens and reusable component utilities: `src/styles/design-system.css`
- Global mapping into Tailwind semantic colors: `src/app/globals.css`
- Core primitive adoption:
  - `src/components/ui/button.jsx`
  - `src/components/ui/card.jsx`

## Design Direction

- Clean and minimal visual language
- Premium but restrained surfaces and shadows
- Accessible contrast and focus states
- Consistent spacing and readable typography

## Core Tokens

- Semantic colors: `--background`, `--foreground`, `--card`, `--primary`, `--muted`, etc.
- Layout tokens: `--space-section`, `--space-block`, `--text-measure`
- Surface tokens: `--surface-1`, `--surface-2`, `--surface-elevated`
- Elevation tokens: `--shadow-soft`, `--shadow-card`

## Reusable Classes

- `.ds-page`: root page surface and text baseline
- `.ds-container`: consistent content width container
- `.ds-section`: vertical section spacing
- `.ds-prose`: readable line length and body rhythm
- `.ds-surface`: premium card/surface shell
- `.ds-interactive`: subtle premium hover motion
- `.ds-heading`: heading rhythm
- `.ds-eyebrow`: compact label style
- `.ds-divider`: visual section divider
- `.text-balance`: balanced heading wraps

## SEO/UX Notes

- Better readability improves engagement and helps reduce pogo-sticking risk.
- Strong focus-visible styles improve accessibility signals.
- Reduced-motion support improves usability and stability.
- Tokenized system keeps styling consistent across hundreds of tool pages.

## Usage Example

```jsx
<section className="ds-section">
  <div className="ds-container">
    <p className="ds-eyebrow">Utility</p>
    <h1 className="ds-heading text-balance text-4xl font-semibold">URL Shortener</h1>
    <p className="ds-prose mt-4">Create short, trackable links with custom aliases.</p>
  </div>
</section>
```
