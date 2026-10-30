import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.SITE_URL?.trim() || 'https://martiuspark.com';

export default defineConfig({
  site,
  output: 'server',
  trailingSlash: 'always',
  adapter: cloudflare({ platformProxy: { enabled: true } }),
  integrations: [sitemap({ filter: (page) => !new URL(page).pathname.startsWith('/404') })],
  vite: { plugins: [tailwindcss()] }
});
