// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// TODO: replace with your real domain before deploying to Cloudflare Pages
export default defineConfig({
  site: 'http://localhost:4321/',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'dark-plus',
      },
      wrap: true,
    },
  },
});
