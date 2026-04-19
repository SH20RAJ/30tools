# Contributing to 30tools

![30tools](https://30tools.com/og-image.jpg)

First off, thank you for considering contributing to **30tools**! With over **733+ tools** and a massive SEO ecosystem, your help is vital in making this the premier open-source utility engine.

---

## 🛠️ Development Setup

1. **Fork and Clone**:
   ```bash
   git clone https://github.com/sh20raj/30tools.git
   cd 30tools
   ```
2. **Install Dependencies**:
   ```bash
   bun install # We recommend Bun for high-performance builds
   ```
3. **Launch Workspace**:
   ```bash
   bun dev
   ```

---

## 💎 Design Guidelines: The "Premium Workspace"

We believe that free tools should feel like premium products. When contributing UI changes, follow these 30tools standards:

### 1. Glassmorphism & Depth
- Use `GlassCard` from `@/components/tools/shared/WorkspaceComponents` for main tool containers.
- Avoid heavy solid borders. Use `backdrop-blur` and thin `border-white/10` or `border-black/5`.
- Leverage ambient background glows to create visual depth.

### 2. Micro-Interactions
- Button hovers should feel "alive" (slight scale or shadow pulse).
- Use `framer-motion` for state transitions between upload, processing, and results.

### 3. Logic: Browser-Side First
- Prioritize client-side logic (Canvas API, Web Crypto, etc.) to maintain user privacy and reduce server load.
- If server-side is required, keep it lightweight and stateless.

---

## 🏗️ How to Add a New Tool

### Step 1: Data Entry
Append your tool metadata to `src/constants/tools.json`.
- Choose a descriptive `slug`.
- Add relevant `extraSlugs` for SEO scaling.

### Step 2: Component Architecture
Create your tool component in `src/components/tools/`. 
- **Recommendation**: Import and use components from `@/components/tools/shared/WorkspaceComponents.jsx` to inherit the premium look instantly.

### Step 3: Page Registration
Register the route in `src/app/` using the appropriate category folder. Use `PremiumToolPage` to wrap your tool and leverage our universal SEO engine.

---

## 🚀 Pull Request Process

1. **Self-Review**: Ensure your code is clean and follows the project structure.
2. **Linting**: We use Biome. Run `bun lint` or `npm run lint` before submitting.
3. **Documentation**: If you're adding a tool, ensure its metadata in `tools.json` is rich and SEO-friendly.
4. **Submit**: Open a PR with a clear description of your changes.

---

## 🌟 Support & Community

- **GitHub Issues**: For bug reports and feature requests.
- **Discussions**: For architectural ideas and community chat.
- **Star the Repo**: If you love what we're building!

Happy coding! 🚀
