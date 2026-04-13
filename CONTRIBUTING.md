# Contributing to 30tools

First off, thank you for considering contributing to **30tools**! It's people like you that make 30tools a great resource for everyone.

## Table of Contents

- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [How to Add a New Tool](#how-to-add-a-new-tool)
- [Style Guide](#style-guide)
- [Pull Request Process](#pull-request-process)

## How Can I Contribute?

- **Report Bugs**: Create an issue using the bug report template.
- **Suggest Tools**: We are always looking for new utility tools.
- **Improve UI/UX**: Help us make the tools easier to use.
- **Fix Bugs/Features**: Pick up any open issue and submit a PR.

## Development Setup

1. Fork and clone the repository.
2. Install dependencies: `npm install` or `bun install`.
3. Create a `.env.local` file. You will need keys for some tools (e.g., OpenAI for AI tools).
4. Run `npm run dev` to start the development server.

## How to Add a New Tool

30tools uses a data-driven architecture. To add a new tool, follow these steps:

### 1. Update `src/constants/tools.json`
Add a new entry to the appropriate category. Each tool needs:
- `id`: Unique identifier.
- `title`: SEO-friendly title.
- `description`: Detailed description.
- `slug`: The main URL path.
- `extraSlugs`: (Optional) SEO variant URLs.

### 2. Create the Tool Component
Create a new component in the relevant category folder under `src/components/tools/`. Reference existing tools like `BackwardsTextGenerator.tsx` for patterns.

### 3. Create the Page
Create a new folder and `page.tsx` in `src/app/(category)/[slug]/`. Use the `PremiumToolPage` component to render the page dynamically from `tools.json`.

```tsx
import { getToolBySlug } from "@/constants/tools-utils";
import PremiumToolPage from "@/components/seo/PremiumToolPage";

export default function MyNewToolPage() {
  const tool = getToolBySlug("my-new-tool-slug");
  return <PremiumToolPage tool={tool} />;
}
```

## Style Guide

- **Components**: Use Tailwind CSS for styling. We prioritize a clean, Glassmorphism aesthetic.
- **Code Quality**: We use [Biome](https://biomejs.com/) for linting and formatting. Run `npm run lint` before committing.
- **Structure**: Keep tools functional and client-side where possible to maintain privacy and performance.

## Pull Request Process

1. Create a new branch for your feature or fix.
2. Ensure your code passes all lint checks.
3. Update the documentation if you are adding new features.
4. Submit your PR and wait for a maintainer to review.

## Questions?

Feel free to reach out via GitHub Issues or contact [@sh20raj](https://github.com/sh20raj) directly.

Happy coding! 🚀
