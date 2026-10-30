# Campus Martius Park independent guide

Astro server output with the Cloudflare adapter and Tailwind. Existing home, directory, rink, dining and parking pages remain prerendered; a dynamic 404 keeps missing requests at HTTP 404. The visitor guide is not the park operator.

Use Node 22.16.0 and pnpm 10.11.1: `pnpm install --frozen-lockfile`, `pnpm check`, `pnpm run build`. Existing Cloudflare CI runs `npx wrangler deploy` against the adapter-generated entry/config. Keep package and lock versions unchanged. The source config name is preserved; the connected build uses its existing project-name override.

The default site/canonical is https://martiuspark.com; SITE_URL can configure the build explicitly. Sitemap and robots are generated even without that environment value. The source Worker runs before the adapter/static asset fast path, normalizes existing www/HTTP entrances to HTTPS apex, and adds security headers plus noindex on actual 404 responses. Keep the existing production domain bindings; do not infer or create DNS rules from this README.

Pages cover park access, the separate upcoming skating season, venue distinctions, dining and transit. Dated primary links appear on the pages. Hours from different listings are attributed rather than merged into a single schedule. Google Maps figures are manual dated snapshots; review text is not reproduced.

Privacy: existing automatic GA, Google Maps and Cloudflare hosting/browser-measurement possibilities are disclosed at /privacy. No on-site consent switch is promised. The former navigation service-worker cache is retired without deleting unrelated caches.

Scenic visuals are original, explicitly labelled illustrations, not current photographs or maps. Public credits: /ILLUSTRATION-CREDITS.txt. Former photo provenance is retained in IMAGE-SOURCES.md; those remote photos are not served.
