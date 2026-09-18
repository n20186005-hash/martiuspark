# Delivery self-check

## Completed checks
- Single-package project; no `pnpm-workspace.yaml` is present.
- `package.json` uses exact dependency versions only.
- Node is pinned to `22.16.0` in both `engines` and `.node-version`.
- `packageManager` is pinned to `pnpm@10.11.1`.
- Static forbidden-string scan found no `example.com`, `localhost`, or `chrome-extension://` strings.
- `SITE_URL` is the sole site/domain input used by `astro.config.mjs`.
- Sitemap integration is enabled only when `SITE_URL` is set.

## Environment limitation
The required clean-install command was attempted:

`CI=1 corepack pnpm install --frozen-lockfile`

The sandbox could not resolve `registry.npmjs.org` (`getaddrinfo EAI_AGAIN`), so dependencies could not be downloaded. Because installation could not complete, `pnpm check` and `pnpm build` could not be executed in this environment.

The same outbound-network restriction also prevented downloading Wikimedia image binaries into the ZIP. Real photographs are therefore referenced from their original Wikimedia Commons URLs; attribution and source URLs are documented in `IMAGE-SOURCES.md`.
