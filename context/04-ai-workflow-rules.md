# AI Workflow Rules

## How to Scope Work

1. **One feature at a time** — Never work on multiple tools or features simultaneously. Complete one fully before starting the next
2. **Read before writing** — Always read existing files before modifying them. Understand the current state
3. **Check tools.json first** — Before creating any tool, verify it exists in `src/constants/tools.json`. If not, add it there first
4. **Follow the route groups** — Every tool belongs to exactly one route group. Place new tools in the correct `(category)` folder

## Decision Handling

### Decisions You Can Make Autonomously
- Fixing bugs in existing code
- Improving SEO metadata (titles, descriptions, structured data)
- Adding missing alt text, aria labels, or accessibility improvements
- Refactoring within a single component (no behavior change)
- Updating content in tools.json (features, FAQs, howTo steps)

### Decisions That Require User Confirmation
- Adding a new tool category or route group
- Changing the ToolLayout structure
- Modifying the root layout or global styles
- Adding new npm dependencies
- Changing Cloudflare/deployment configuration
- Modifying API routes
- Changing the SEO title/description pattern

## One Feature at a Time

When adding a new tool:

1. **Add to tools.json** — Define id, name, description, route, category, features, FAQs, howTo
2. **Create page** — `src/app/(category)/tool-name/page.tsx` with metadata export
3. **Create component** — `src/components/tools/category/ToolName.tsx` with `'use client'`
4. **Test locally** — Verify the tool works at the correct route
5. **Verify SEO** — Check metadata, structured data, breadcrumbs, related tools

Do not start step 2 until step 1 is complete. Do not start step 3 until step 2 is complete.

## File Change Protocol

Before modifying any file:
1. Read the file first
2. Understand its purpose and dependencies
3. Make the minimal change needed
4. Verify no regressions

After modifying:
1. Check that the build passes (`bun run build`)
2. Verify no TypeScript errors
3. Confirm the change works as expected

## What NOT to Do

- Don't add features beyond what was asked
- Don't refactor code that isn't broken
- Don't add comments to code you didn't change
- Don't add type annotations to existing JS that works fine
- Don't change the design system or token values
- Don't modify the deployment pipeline
- Don't add new linting rules
- Don't create utility functions for one-time operations
- Don't add error handling for scenarios that can't happen

## Communication Rules

- Report what you changed, not how you changed it
- If you find a pre-existing bug, mention it but don't fix it unless asked
- If a change would affect multiple files, confirm with the user first
- Never estimate time or effort
