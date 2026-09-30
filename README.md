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

## Pages
- `/` — Homepage (visitor guide, reviews, seasons, history, transit, map, FAQ)
- `/directory` — Park directory: amenities, dining & nearby attractions
- `/the-rink` — The Rink (winter ice skating): season, hours, tickets, rental
- `/parking` — Parking & transit: garages, street parking, QLINE / People Mover
- `/dining` — Dining: Parc, Chalet 313 / Cadillac Lodge, nearby counters

Each page shares `src/layouts/BaseLayout.astro` (canonical, Open Graph, JSON-LD, header/footer)
and a shared `ExploreMore` cross-link block. Subpages emit `BreadcrumbList` + `FAQPage` JSON-LD;
the homepage emits `TouristAttraction`/`Park` + `FAQPage`.

## Domain configuration
The site URL is configured in **one place only** through the `SITE_URL` environment variable consumed by `astro.config.mjs`.

- Without `SITE_URL`: the site still builds; canonical and absolute `og:url` are omitted; sitemap integration is disabled.
- With `SITE_URL=https://your-real-domain.com`: canonical, Open Graph URL, JSON-LD URL and sitemap are all derived from Astro's `site` value.

## SEO tasks handled in code
- Canonical + Open Graph + Twitter tags on every page.
- `public/_headers` sends HSTS and standard security headers.

## Cloudflare requirements (console, not code)
- **Force HTTPS**: enable "Always Use HTTPS" so `http://martiuspark.com/*` 301-redirects to `https://`. Workers Static Assets cannot do domain-level redirects in `_redirects`, so this must be set in the Cloudflare dashboard (SSL/TLS → Edge Certificates, plus a Redirect Rule for `www` → apex if used).
- Set `SITE_URL` in the deploy environment, then run `pnpm build && pnpm deploy`.

## Photo licensing
The site loads two real photographs from Wikimedia Commons:
1. `The lawn at Campus Martius Park.jpg` — RuralResurrection — CC BY 4.0
2. `Detroit December 2021 63 (Campus Martius Park skating rink).jpg` — Michael Barera — CC BY-SA 4.0

The source pages and attribution text are surfaced in the site footer. The project structure is ready for local images under `public/images/` if you download the originals and swap the two `<img src>` values.
