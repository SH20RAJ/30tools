# Agents

**Read this file FIRST before performing any task in this project.**

Before writing code, fixing bugs, adding features, or making any changes, you MUST read the following six files in order. They contain the critical context needed to work on this project consistently.

## Required Reading

1. **[Project Overview](01-project-overview.md)** — What this project is, its goals, core flows, and what's out of scope. Read this to resolve ambiguity about what we're building.

2. **[Architecture](02-architecture.md)** — Tech stack, layer boundaries, invariants (rules that must never break), key files, and route structure. Read this before touching any code.

3. **[Code Standards](03-code-standards.md)** — TypeScript conventions, component rules, styling patterns, import order, SEO conventions. Read this to keep your code consistent with the rest of the codebase.

4. **[AI Workflow Rules](04-ai-workflow-rules.md)** — How to scope work, handle decisions, and follow the "one feature at a time" approach. Read this to stay disciplined and avoid drift.

5. **[UI Context](05-ui-context.md)** — Design tokens, component library, typography, utility classes, responsive breakpoints. Read this to keep the visual style coherent.

6. **[Progress Tracker](06-progress-tracker.md)** — Current phase, completed tasks, architectural decisions, known issues, and next priorities. Read this to pick up exactly where the last session left off.

## How to Use These Files

- **Start every session** by reading all 6 files (they're short)
- **Before adding a tool**: Check tools.json (Architecture) → Follow the tool addition workflow (AI Workflow Rules) → Match the SEO pattern (Code Standards)
- **Before modifying UI**: Check design tokens (UI Context) → Verify component exists (Architecture) → Follow styling conventions (Code Standards)
- **Before making architectural changes**: Check invariants (Architecture) → Confirm with user (AI Workflow Rules) → Update Progress Tracker after
- **After completing work**: Update Progress Tracker with what was done and any new decisions

## Quick Reference

| Task | Key File | Section |
|------|----------|---------|
| Add a new tool | Architecture + AI Workflow Rules | Route Structure + One Feature at a Time |
| Fix a bug | Code Standards + Architecture | Component Rules + Invariants |
| Change styling | UI Context | Design Tokens + Utility Classes |
| SEO work | Code Standards + Architecture | SEO Conventions + Key Files |
| Understand current state | Progress Tracker | Current Phase + In Progress |
| Check what's allowed | AI Workflow Rules | Decision Handling |
