# architecture
- Each downloader tool page should use a platform-specific custom component with SEO content (how-to guides, features, FAQs, user reviews, related tools) instead of a generic DownloaderEngine. Confidence: 0.95
- For niche/smaller platforms that share the same API endpoint, batch-create custom components with themed UI and SEO content. Confidence: 0.90
- Fix build errors (missing imports, wrong paths) immediately after they appear to maintain a green build. Confidence: 0.90

# workflow
- When making large-scale file changes across many pages, use a Node.js script for batch operations. Confidence: 0.85
- Create a branch, commit, push, create PR via `gh pr create`, merge via `gh pr merge --squash --delete-branch`, then clean up. Confidence: 0.85
