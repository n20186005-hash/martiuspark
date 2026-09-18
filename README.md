# Campus Martius Park Guide

Single-attraction Astro + Tailwind CSS + TypeScript site for Cloudflare Workers.

## Requirements
- Node 22.16.0
- pnpm 10.11.1

## Local development
```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm dev
```

## Domain configuration
The site URL is configured in **one place only** through the `SITE_URL` environment variable consumed by `astro.config.mjs`.

- Without `SITE_URL`: the site still builds; canonical and absolute `og:url` are omitted; sitemap integration is disabled.
- With `SITE_URL=https://your-real-domain.com`: canonical, Open Graph URL, JSON-LD URL and sitemap are all derived from Astro's `site` value.

## Cloudflare
Set `SITE_URL` in your deployment environment, then run:
```bash
pnpm build
pnpm deploy
```

## Photo licensing
The site currently loads two real photographs from Wikimedia Commons:
1. `The lawn at Campus Martius Park.jpg` — RuralResurrection — CC BY 4.0
2. `Detroit December 2021 63 (Campus Martius Park skating rink).jpg` — Michael Barera — CC BY-SA 4.0

The source pages and attribution text are surfaced in the site footer section. The project structure is ready for local images under `public/images/` if you download the originals and swap the two `<img src>` values.
