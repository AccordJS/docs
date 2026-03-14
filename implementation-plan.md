# AccordJS Docs Site Implementation Plan

**Timeline: 48 hours | Priority: Marketing homepage first**

## Phase 1: Foundation Setup (Hours 0-6)

### 1. React Integration Setup
**Install Astro React integration:**
```bash
bun add @astrojs/react react react-dom
bun add -D @types/react @types/react-dom
```

**Update `astro.config.mjs`:**
```js
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  output: 'static',
  site: 'https://accordjs.dev' // Update with your domain
});
```

**Create `src/components/` directory structure:**
```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── layout/       # Layout components (Header, Footer)
│   ├── sections/     # Homepage sections
│   └── common/       # Shared components
├── layouts/
│   └── Layout.astro  # Main layout
└── pages/
    └── index.astro   # Homepage
```

### 2. TailwindCSS v4 & DaisyUI v5 Setup (Astro 6 Compatible)
**Install TailwindCSS v4 and DaisyUI v5 (modern approach):**
```bash
bun add tailwindcss @tailwindcss/vite daisyui
bun add -D @tailwindcss/typography
```

**Update `astro.config.mjs` with Vite plugin:**
```js
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  site: 'https://accordjs.github.io',
  base: '/docs', // GitHub Pages repository path
  build: {
    assets: '_astro' // Ensure assets work on GitHub Pages
  }
});
```

**Create `src/styles/global.css` (Tailwind v4 CSS-first approach):**
```css
@import "tailwindcss";
@plugin "daisyui" {
  themes: light --default, dark --prefersdark;

  /* Custom theme configuration */
  theme: {
    light: {
      primary: #3b82f6;
      secondary: #8b5cf6;
      accent: #06b6d4;
    }
    dark: {
      primary: #60a5fa;
      secondary: #a78bfa;
      accent: #22d3ee;
    }
  }
}

@plugin "@tailwindcss/typography";

/* Custom theme tokens for Tailwind v4 */
@theme {
  --font-family-mono: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  --color-accent-purple: #8b5cf6;
  --color-accent-blue: #3b82f6;
}

/* Custom components inspired by Next.js styling */
@layer components {
  .gradient-text {
    @apply bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent;
  }

  .code-block {
    @apply bg-base-200 rounded-lg p-4 font-mono text-sm overflow-x-auto;
  }

  .section-padding {
    @apply py-16 md:py-24;
  }
}
```

**Import CSS in Layout.astro:**
```astro
---
// src/layouts/Layout.astro
import '../styles/global.css';
---
```

**⚠️ Important Migration Notes:**
- **Removed**: `@astrojs/tailwind` integration (deprecated for Tailwind v4)
- **Removed**: `tailwind.config.mjs` file (replaced with CSS-first configuration)
- **Removed**: `require()` statements (no longer compatible with Tailwind v4)
- **Added**: `@tailwindcss/vite` plugin (official Vite plugin for Tailwind v4)
- **Added**: CSS-based configuration using `@import`, `@plugin`, and `@theme` directives
- **Compatible**: With Astro 6, Tailwind CSS v4, and DaisyUI v5 (2025 stack)

### 3. TypeScript Configuration
**Update `tsconfig.json`:**
```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "react",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/layouts/*": ["./src/layouts/*"]
    }
  }
}
```

### 4. Development Tools Setup
**Install Biome:**
```bash
bun add -D @biomejs/biome
```

**Create `biome.json`:**
```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
  "organizeImports": {
    "enabled": true
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "style": {
        "noNonNullAssertion": "off"
      },
      "suspicious": {
        "noExplicitAny": "error"
      }
    }
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2
  },
  "files": {
    "include": ["src/**/*.{js,ts,jsx,tsx,astro}"],
    "ignore": ["node_modules/**", "dist/**", ".astro/**"]
  }
}
```

**Add to `package.json` scripts:**
```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro",
    "check": "astro check && biome check src",
    "lint": "biome lint src",
    "lint:fix": "biome lint --write src",
    "format": "biome format --write src"
  }
}
```

### 5. Assets & Branding Setup
**Logo Assets:**
- Source files: `project-assets/accordjs-logo.svg` and `project-assets/accordjs-logo.png`
- Copy logo assets to `public/` directory for web use
- Generate favicon.ico from PNG using online tools or ImageMagick

**Favicon Generation:**
```bash
# Copy logos to public directory
cp project-assets/accordjs-logo.svg public/logo.svg
cp project-assets/accordjs-logo.png public/logo.png

# Generate favicon (manual step using online tool or ImageMagick)
# https://favicon.io/favicon-converter/
```

**Brand Assets Structure:**
```
public/
├── logo.svg          # Main logo for web
├── logo.png          # Logo fallback/social sharing
├── favicon.ico       # Generated from logo
├── favicon.svg       # SVG favicon
└── og-image.png      # Open Graph image (1200x630)
```

## Phase 2: Marketing Homepage (Hours 6-30)

### Hour 6-12: Layout & Navigation
**Create base layout (`src/layouts/Layout.astro`):**
- Header with navigation (inspired by Next.js clean layout)
- Footer with links
- Theme toggle (dark/light)
- Mobile-responsive design

**Navigation structure:**
```
Home | Docs | Blog | Examples | GitHub
```

**Footer Social Links (placeholder URLs for now):**
- GitHub: `https://github.com/AccordJS` (real)
- Discord: `https://discord.gg/accordjs` (placeholder)
- X (Twitter): `https://x.com/accordjs` (placeholder)
- Reddit: `https://reddit.com/r/accordjs` (placeholder)
- Facebook: `https://facebook.com/accordjs` (placeholder)
- LinkedIn: `https://linkedin.com/company/accordjs` (placeholder)
- YouTube: `https://youtube.com/@accordjs` (placeholder)
- Dev.to: `https://dev.to/accordjs` (placeholder)

### Hour 12-24: Homepage Sections

#### 1. Hero Section
**Design inspiration: Next.js hero but AccordJS focused**
- AccordJS logo (use `project-assets/accordjs-logo.svg` for web, `.png` for fallback)
- Headline: "Build Discord bots with confidence"
- Tagline: **"Typed. Modular. Discord bots done right."**
- Subheading: Type-safe, plugin-driven Discord bot framework
- CTA buttons: "Get Started", "View on GitHub"
- Code snippet preview showing placeholder AccordJS usage

#### 2. Feature Grid (3x2 layout)
1. **Type Safety**: "Zero `any` types, full TypeScript support"
2. **Plugin Architecture**: "Modular, extensible design"
3. **Event System**: "Normalized event handling"
4. **Client Isolation**: "Discord.js abstracted away"
5. **Developer Experience**: "Clean APIs, great DX"
6. **Performance**: "Efficient event processing"

#### 3. Code Examples Section
**Three tabs with placeholder code:**

**Basic Bot Setup:**
```typescript
import { AccordBot, IntentFlags } from 'accordjs';

const bot = new AccordBot({
  intents: [IntentFlags.GUILD_MESSAGES, IntentFlags.MESSAGE_CONTENT],
});

bot.onReady(() => {
  console.log(`Bot logged in as ${bot.user?.tag}`);
});

bot.start(process.env.DISCORD_TOKEN);
```

**Plugin Development:**
```typescript
import { Plugin, PluginContext } from 'accordjs';

export class WelcomePlugin implements Plugin {
  name = 'welcome';

  register(ctx: PluginContext) {
    ctx.events.subscribe('MEMBER_JOIN', this.handleMemberJoin);
  }

  protected handleMemberJoin = (event: MemberJoinEvent) => {
    // Send welcome message logic
  };
}
```

**Event Handling:**
```typescript
import { MessageCreateEvent } from 'accordjs';

bot.events.subscribe('MESSAGE_CREATE', (event: MessageCreateEvent) => {
  if (event.content.startsWith('!hello')) {
    // Respond to message
  }
});
```

#### 4. Comparison Section
**"Why AccordJS?" - comparing with raw discord.js**

#### 5. Getting Started Section
- Installation command
- Quick setup guide
- Link to full docs

### Hour 24-30: Polish & Optimization
- Responsive design refinements
- Performance optimization
- SEO meta tags
- Accessibility improvements

### Hour 30-42: Content & Testing
1. **Content Creation**
   - Write compelling copy for all sections
   - Create realistic code examples
   - Prepare GitHub links and documentation stubs

2. **Testing & QA**
   - Cross-browser testing
   - Mobile responsiveness check
   - Performance audit (Lighthouse)
   - Accessibility testing

### Hour 42-48: Deployment & Launch
1. **GitHub Pages Setup**
   ```bash
   # Add to package.json
   "scripts": {
     "deploy": "astro build && touch dist/.nojekyll"
   }
   ```

   **Create `.github/workflows/deploy.yml`:**
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4

         - name: Setup Bun
           uses: oven-sh/setup-bun@v1

         - name: Install dependencies
           run: bun install

         - name: Build
           run: bun run build

         - name: Setup Pages
           uses: actions/configure-pages@v4

         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: './dist'

     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

2. **Pre-launch checklist**
   - Enable GitHub Pages in repository settings
   - SEO optimization (meta tags, sitemap)
   - Test build locally: `bun run build && bun run preview`
   - Verify all assets load correctly with base path

## Post-Launch (Future phases)
### Phase 4: Blog System & Content
**Initial blog setup with first post:**

**Blog Infrastructure:**
```bash
# Add content collections support
bun add @astrojs/mdx
```

**Create blog structure:**
```
src/
├── content/
│   ├── config.ts        # Content collection config
│   └── blog/
│       └── what-is-accordjs.md
├── pages/
│   ├── blog/
│   │   ├── index.astro  # Blog listing page
│   │   └── [slug].astro # Individual blog post
└── components/
    └── blog/
        ├── BlogCard.tsx
        └── BlogPost.tsx
```

**First blog post: "What is AccordJS?"**
- Target audience: Discord bot developers frustrated with raw discord.js
- Content outline: Problem → Solution → Benefits → Getting Started
- SEO keywords: Discord bot framework, TypeScript Discord bots, discord.js alternative
- Publishing date: Launch day for immediate content

### Phase 5: Documentation System
- Full documentation site with sidebar navigation
- API reference pages
- Interactive code examples
- Search functionality

### Phase 6: Enhanced Features
- Community features (Discord integration)
- Store/marketplace for plugins (future)
- Tutorial video content for YouTube

## Key Decisions Made
✅ **Design**: Next.js layout inspiration with TailwindCSS v4 + DaisyUI v5
✅ **Priority**: Marketing homepage first
✅ **Timeline**: 48 hours
✅ **Tech Stack**: Astro 6 + React + TailwindCSS v4 + DaisyUI v5 + Biome (2025 modern stack)
✅ **Deployment**: GitHub Pages (accordjs.github.io/docs)
✅ **Branding**: Logo assets provided, tagline: "Typed. Modular. Discord bots done right."
✅ **Content Strategy**: Placeholder examples until npm module ready
✅ **Social Media**: Full social platform strategy (GitHub, Discord, X, Reddit, Facebook, LinkedIn, YouTube, Dev.to)
✅ **Blog Content**: First blog post "What is AccordJS" ready for implementation
✅ **Updated Setup**: Fixed Tailwind/DaisyUI configuration for Astro 6 compatibility (deprecated `@astrojs/tailwind` replaced with `@tailwindcss/vite`)

## Implementation Ready ✅
All key decisions made - ready to start development!

## Next Steps for Implementation
1. **Start with Phase 1 setup** (React + TailwindCSS v4 + DaisyUI v5 using modern Vite plugin)
2. **Run `bun check` after each major step** to ensure type safety
3. **Test locally with `bun dev`** throughout development
4. **Focus on mobile-first responsive design**
5. **Keep components modular and reusable**
6. **Note**: Use the updated installation command: `bun add tailwindcss @tailwindcss/vite daisyui`

## File Structure After Setup
```
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── CodeBlock.tsx
│   │   └── ThemeToggle.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── CodeExamples.tsx
│       └── GetStarted.tsx
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css
```