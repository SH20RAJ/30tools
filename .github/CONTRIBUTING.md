# Contributing to 30tools

![30tools](https://30tools.com/og-image.jpg)

First off, thank you for considering contributing to **30tools**! With over **733+ tools** and a massive SEO ecosystem, your help is vital in making this the premier open-source utility engine.

---

## 🛠️ Development Setup

### Prerequisites
- **Node.js** 18+ or **Bun** 1.0+
- A [Stack Auth](https://app.stack-auth.com) account (free tier works)

### 1. Fork and Clone
```bash
git clone https://github.com/sh20raj/30tools.git
cd 30tools
```

### 2. Install Dependencies
```bash
bun install # We recommend Bun for high-performance builds
```

### 3. Configure Environment Variables
```bash
cp .env.example .env.local
```

**Required: Stack Auth Keys**

The app uses [Stack Auth](https://stack-auth.com) for authentication. Without these keys, you'll see connection errors in the browser console and login features won't work.

1. Go to [app.stack-auth.com](https://app.stack-auth.com) and create a free project
2. Copy your project keys into `.env.local`:
   ```
   NEXT_PUBLIC_STACK_PROJECT_ID=your-project-id
   NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=pck_...
   STACK_SECRET_SERVER_KEY=ssk_...
   ```
3. In your Stack Auth project dashboard, add `http://localhost:3000` to the allowed origins

> **Note**: The app will still run without Stack Auth keys — auth features will simply be disabled. You won't see any errors if the keys are missing; the login button will redirect to a non-functional page instead.

**Optional**: Other API keys in `.env.example` are only needed for specific tools (AI features, translation, etc.) and are not required for development.

### 4. Launch Workspace
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see your workspace.

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
