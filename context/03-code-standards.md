# Code Standards

## TypeScript Conventions

- **Strict mode** enabled in tsconfig.json
- **ES2020** target
- Prefer `interface` over `type` for object shapes
- Use `const` assertions where applicable
- No `any` type — use `unknown` and narrow
- Export types alongside their implementations

## File Naming

| Type | Convention | Example |
|------|-----------|---------|
| React Components | PascalCase `.tsx` | `AppleNavbar.tsx` |
| Tool Components | PascalCase `.tsx` or `.jsx` | `ImageCompressor.tsx` |
| Utility Functions | camelCase `.ts` | `tools.ts`, `seo.ts` |
| Constants | camelCase `.ts` or `.json` | `tools.json`, `config.ts` |
| Pages | `page.tsx` (always) | `page.tsx` |
| Layouts | `layout.tsx` (always) | `layout.tsx` |
| Styles | `globals.css` | Single global stylesheet |

## Component Rules

### Server Components (Default)

```tsx
// ✅ page.tsx — Server Component
import { ToolLayout } from '@/components/tools/shared/ToolLayout';

export const metadata = {
  title: 'Free JSON Formatter Online - No Signup | 30tools',
  description: 'Format and validate JSON instantly...',
};

export default function JsonFormatterPage() {
  return <ToolLayout toolId="json-formatter" />;
}
```

- Every `page.tsx` and `layout.tsx` MUST be a Server Component
- Never add `'use client'` to page or layout files
- Export a static `metadata` object directly

### Client Components

```tsx
'use client';

import { useState } from 'react';
// Interactive logic, browser APIs, state management
```

- Mark with `'use client'` directive at top of file
- Encapsulate all interactivity, state, browser APIs
- Import into Server Components as needed

## Styling

- **Tailwind CSS v4** utility-first classes
- **No CSS modules**, no styled-components
- Use `cn()` from `@/lib/utils` for conditional class merging (clsx + tailwind-merge)
- Design tokens via CSS custom properties in `globals.css`
- **Border radius: 0px** — everything is sharp-cornered (Apple hardware aesthetic)

```tsx
import { cn } from '@/lib/utils';

<div className={cn(
  'bg-card text-card-foreground p-6',
  isActive && 'ring-2 ring-primary',
  className
)} />
```

## Import Order

```tsx
// 1. React/Next imports
import { useState } from 'react';
import Link from 'next/link';

// 2. Third-party libraries
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

// 3. Internal components
import { Button } from '@/components/ui/button';
import { ToolLayout } from '@/components/tools/shared/ToolLayout';

// 4. Utilities and types
import { cn } from '@/lib/utils';
import type { ToolConfig } from '@/types';
```

## Biome Linter Rules

Key enforced rules from `biome.json`:

| Rule | Level | Meaning |
|------|-------|---------|
| `noUnusedImports` | error | Remove unused imports |
| `noUnusedVariables` | warn | Prefix with `_` if intentionally unused |
| `useButtonType` | warn | `<button>` must have `type` attribute |
| `useValidAnchor` | error | `<a>` must have valid `href` |
| `useAltText` | error | `<img>` must have `alt` |
| `useConst` | warn | Use `const` over `let` where possible |
| `useTemplate` | warn | Prefer template literals over concatenation |
| `noAccumulatingSpread` | warn | Performance: avoid spread in reduce |
| `noDangerouslySetInnerHtml` | off | Needed for JSON-LD injection |

## SEO Conventions

- **Title pattern**: `Free [Tool Name] Online - No Signup | 30tools`
- **Meta description**: 150-160 chars, include primary keyword, compelling CTA
- **JSON-LD**: Every tool page gets SoftwareApplication, FAQPage, HowTo, BreadcrumbList
- **Canonical URLs**: Explicitly set on every page
- **OpenGraph + Twitter cards**: On every page
- **Internal linking**: Via `extraSlugs` and `VariantLinks` component
- **Related tools**: Minimum 10 per tool page
