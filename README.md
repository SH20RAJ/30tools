# 30tools - The Ultimate Free Online Toolkit

[![GitHub license](https://img.shields.io/github/license/sh20raj/30tools)](https://github.com/sh20raj/30tools/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/sh20raj/30tools)](https://github.com/sh20raj/30tools/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/sh20raj/30tools)](https://github.com/sh20raj/30tools/issues)

**30tools** is a high-performance, developer-first API and utility ecosystem. It provides over **600+ free online tools** for SEO experts, developers, students, and writers—all with no registration required, privacy-focused processing, and a premium Glassmorphism design.

## 🚀 Key Features

- **600+ Tools**: Integrated tools across categories like Image, PDF, Video, SEO, and Developer Utilities.
- **Premium UI**: Modern, responsive interface built with Glassmorphism principles and dynamic animations.
- **SEO Optimized**: Advanced routing and middleware system for thousands of SEO variants.
- **Privacy First**: Client-side processing where possible to keep user data secure.
- **Fast & Lightweight**: Built with Next.js 16 (App Router) and optimized for Cloudflare.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Vanilla CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- **UI Components**: [Radix UI](https://www.radix-ui.com/), [MUI](https://mui.com/), [Shadcn UI](https://ui.shadcn.com/)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/) via [OpenNext](https://open-next.js.org/)
- **Icons**: [Lucide React](https://lucide.dev/) & [MUI Icons](https://mui.com/material-ui/material-icons/)

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sh20raj/30tools.git
   cd 30tools
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   bun install
   ```

3. Set up environment variables:
   Copy `.env.example` (or create `.env.local`) and add your API keys:
   ```bash
   cp .env.example .env.local
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   bun dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `src/app/`: App router pages organized by semantic categories (e.g., `(image)`, `(pdf)`).
- `src/components/`: Reusable UI components including footers, navigation, and SEO helpers.
- `src/constants/`: The data layer, featuring `tools.json` as the single source of truth.
- `src/lib/`: Utility functions and shared logic.
- `public/`: Static assets like icons and OG images.

## 🤝 Contributing

We love contributions! Whether it's adding a new tool, fixing a bug, or improving the UI, please check our [CONTRIBUTING.md](CONTRIBUTING.md) to get started.

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🌟 Support

If you find this project helpful, please give it a ⭐ on GitHub!
