import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.SITE_URL?.trim() || undefined;

export default defineConfig({
  site,
  output: 'server',
  adapter: cloudflare({ platformProxy: { enabled: true } }),
  integrations: site ? [sitemap()] : [],
  vite: { plugins: [tailwindcss()] }
});
