# divyansh.dev — personal blog

Astro + MDX static blog. Sorted post list, tag browsing, client-side search,
light/dark mode, and a Planetscale-style animated gradient glow — all CSS,
no GIFs/video weight.

## Stack

- **Astro 5** (static output)
- **MDX** for post content — `src/content/blog/*.mdx`
- Content collections with a typed schema (`src/content.config.ts`)
- Shiki syntax highlighting (github-light / github-dark themes, auto-switches with the site theme via CSS)
- Zero client JS framework — just two small inline `<script>`s (theme toggle + search)

## Writing a post

Add a file to `src/content/blog/NN-slug.mdx`:

```md
---
title: "Post title"
description: "One-line summary shown in the list and meta tags."
date: 2026-09-06
tags: ["backend", "systems"]
draft: false
---

Your MDX content here.
```

The filename becomes the URL: `02-something.mdx` → `/02-something/`.

## Local dev

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # preview the production build
```

## Deploying to Cloudflare Pages (your pipeline)

1. **Push this repo to GitHub.**
   ```bash
   git init
   git add .
   git commit -m "init blog"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
2. **Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.**
   Pick this repo.
3. **Build settings:**
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Click **Save and Deploy**. Every push to `main` now triggers an automatic
   build + deploy — no extra config needed.
5. Update `site` in `astro.config.mjs` to your real `*.pages.dev` (or custom
   domain) once it's live, so the sitemap/canonical URLs are correct.

## Notes

- Images: drop them in `public/` (e.g. `public/images/foo.png`) and reference
  as `/images/foo.png` in your MDX — Cloudflare serves them as static assets,
  no extra setup.
- Tags: any string in a post's `tags:` array is automatically picked up by
  `/tags` and `/tags/<tag>`.
- Search: filters the already-rendered list client-side by title + tags —
  no backend, no build step, works offline once loaded.