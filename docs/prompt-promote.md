Master Promotion Prompt: GitHub Awesome List Integration
Objective: Promote the following 5 projects by submitting high-quality Pull Requests to relevant "Awesome" lists and curated resource repositories on GitHub.

1. Project Portfolio Metadata
Project A: 30tools

Repo: SH20RAJ/30tools
Description: 660+ free browser-based online tools (PDF, Image, Video, SEO, Developer). 100% client-side.
Tech: Next.js 15, App Router, Tailwind CSS.
Categories: awesome-nextjs, awesome-react, awesome-free-online-tools, awesome-devtools, awesome-seo.
Project B: Linespedia

Repo: SH20RAJ/linepedia
Description: Programmatic SEO Poetry Engine. A massive library of poetry and quotes designed for high search intent.
Tech: Astro, Tailwind CSS, Programmatic SEO.
Categories: awesome-astro, awesome-seo, awesome-writing, awesome-static-generators.
Project C: Sopplayer

Repo: SH20RAJ/Sopplayer
Description: Stylish, customizable HTML5 Video Player skin for Video.js.
Tech: HTML5, CSS, Video.js.
Categories: awesome-video, awesome-javascript, awesome-html5, awesome-frontend.
Project D: IndexFast

Repo: SH20RAJ/index-fast
Description: Lean & Fast SEO Indexing SaaS to get pages indexed on Google instantly.
Tech: Next.js, Google Indexing API.
Categories: awesome-seo, awesome-saas, awesome-indie-hackers, awesome-nextjs.
Project E: Debo

Repo: SH20RAJ/debo
Description: Intelligent AI companion and journaling application that understands your life.
Tech: Next.js, AI/LLM, Vector Search.
Categories: awesome-ai, awesome-productivity, awesome-nextjs, awesome-selfhosted (if applicable).
2. Execution Instructions for the AI
Step 1: Research & Discovery

Search for repositories matching awesome-[category] for each project.
Prioritize repositories with >500 stars for high impact.
Avoid repos that are "Archived".
Step 2: Technical Workflow (Using gh CLI) For each target repository found:

Fork: gh repo fork <upstream> --clone=false.
Clone: Clone the fork locally.
Branch: Create a branch named add-[project-name].
Edit: Identify the correct section in README.md. Add the project link and a concise description (following the existing list format).
Commit: git add . && git commit -m "Add [Project Name] to [Section]"
Push: Push the branch to the fork.
PR: Create the Pull Request using gh pr create.
PR Title: Add [Project Name] — [Short Catchy Tagline]
PR Body: Briefly explain why this project is a good fit for the list. Mention it is Open Source and provide the live URL.
Step 3: Quality Control

Ensure descriptions are professional and avoid "marketing speak".
Use the correct Markdown syntax for links and descriptions.
Only submit 10-12 PRs per project to maintain high relevance and avoid spam filters.
How to use this:
Paste the above into a new chat.
Tell me: "Execute the Master Promotion Prompt for all 5 projects."
I will then: Automatically start searching for the best repos and submitting the PRs for you.
