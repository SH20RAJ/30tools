# UI Context

## Design Philosophy

Apple-inspired minimalism. Sharp corners (0px border-radius). Clean surfaces. Premium feel. The design system is documented in `docs/DESIGN_SYSTEM.md`.

## Design Tokens (CSS Custom Properties)

### Colors (HSL)

| Token | Light | Dark |
|-------|-------|------|
| `--background` | `240 5% 96%` (near-white) | `0 0% 0%` (pure black) |
| `--foreground` | `240 3% 12%` (near-black) | `0 0% 100%` (pure white) |
| `--card` | `0 0% 100%` (white) | `240 2% 16%` (dark gray) |
| `--card-foreground` | `240 3% 12%` | `0 0% 100%` |
| `--primary` | `210 100% 45%` (blue) | `210 100% 58%` (lighter blue) |
| `--primary-foreground` | `0 0% 100%` | `0 0% 0%` |
| `--muted` | `240 2% 90%` | `240 2% 12%` |
| `--muted-foreground` | `240 3% 45%` | `240 2% 60%` |
| `--destructive` | `0 84% 60%` (red) | Same |
| `--border` | `240 3% 88%` | `240 2% 20%` |
| `--ring` | `210 100% 45%` | `210 100% 58%` |
| `--radius` | `0px` | `0px` |

### Typography

| Class | Usage |
|-------|-------|
| `.text-apple-hero` | Homepage hero heading |
| `.text-apple-section-heading` | Section titles |
| `.text-apple-body` | Body text |
| `font-family` | SF Pro Text / SF Pro Display → Helvetica Neue → Arial |

### Utility Classes

| Class | Purpose |
|-------|---------|
| `.ds-page` | Page container |
| `.ds-container` | Content container with max-width |
| `.ds-section` | Section spacing |
| `.ds-prose` | Prose content styling |
| `.ds-surface` | Card/surface styling |
| `.ds-interactive` | Interactive element styling |
| `.ds-heading` | Heading styles |
| `.ds-eyebrow` | Eyebrow/label text |
| `.ds-divider` | Divider line |
| `.apple-glass` | Glassmorphism effect |
| `.apple-pill` | Pill-shaped badge/chip |

## Component Library

### shadcn/ui Components (25 available)

accordion, alert, avatar, badge, button, card, checkbox, code-block, collapsible, dialog, dropdown-menu, input, label, progress, radio-group, select, separator, slider, switch, table, tabs, textarea, tooltip

### Key Custom Components

| Component | Path | Purpose |
|-----------|------|---------|
| `ToolLayout` | `components/tools/shared/ToolLayout.jsx` | Wraps every tool page with SEO, breadcrumbs, related tools |
| `AppleNavbar` | `components/navigation/AppleNavbar.tsx` | Sticky nav with search (Cmd+K), theme toggle |
| `AppleFooter` | `components/footers/AppleFooter.tsx` | 5-column footer with categories and links |
| `StructuredData` | `components/shared/StructuredData.tsx` | JSON-LD injection |
| `PremiumHero` | `components/landing/PremiumHero.tsx` | Homepage hero section |
| `ToolDirectory` | `components/landing/ToolDirectory.tsx` | Category grid on homepage |
| `FAQSection` | `components/seo/FAQSection.tsx` | FAQ with schema markup |
| `BreadcrumbsEnhanced` | `components/seo/BreadcrumbsEnhanced.tsx` | Breadcrumb navigation |

## Dark Mode

- Class-based: `dark` class on `<html>`
- Managed via `next-themes`
- All components support both themes via CSS custom properties

## Responsive Breakpoints

Standard Tailwind breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Animation

- Framer Motion for complex animations
- `tailwindcss-animate` for simple transitions
- CSS keyframe animations in `globals.css` for loading states

## Patterns to Follow

1. **Buttons**: Use `<Button>` from shadcn/ui. Primary = blue, secondary = muted, destructive = red
2. **Cards**: Use `<Card>` from shadcn/ui. Always sharp corners
3. **Inputs**: Use `<Input>`, `<Textarea>`, `<Select>` from shadcn/ui
4. **Icons**: Import from `lucide-react`. Keep consistent size (16px-24px)
5. **Spacing**: Use Tailwind spacing scale. Sections use `py-16` or `py-24`
6. **Max width**: Content containers use `max-w-7xl mx-auto`
