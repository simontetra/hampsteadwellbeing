# Hampstead Wellbeing on Render

The website is a Render **Static Site** (free, always on), set up the same way as annameka.com. The contact form sends through Web3Forms, so no server is needed.

## Render Static Site

| Setting | Value |
|---|---|
| Branch | `main` |
| Root Directory | *(leave blank)* |
| Build Command | `npm install -g pnpm@10.28.0 && pnpm install --frozen-lockfile && pnpm run build:static` |
| Publish Directory | `artifacts/hampstead-wellbeing/dist/public` |

### Environment

| Key | Value |
|---|---|
| `NODE_VERSION` | `22` |
| `VITE_WEB3FORMS_ACCESS_KEY` | the Web3Forms access key for hampsteadwellbeing@gmail.com |

The key is built into the page, so after changing it, run Manual Deploy → Clear build cache & deploy.

### Redirects/Rewrites

| Source | Destination | Action |
|---|---|---|
| `/*` | `/index.html` | Rewrite |

Every page in `src/lib/seo.ts` is built as `<page>/index.html`, which Render serves at `/<page>/` (the address used in links, the sitemap and canonical tags). Render answers everything else with the home page HTML, and the browser then shows the right page, or "Page not found" for a mistyped link.

## How the pages are built

`pnpm run build:static` runs three steps (see `artifacts/hampstead-wellbeing/package.json`):

1. builds the website as the browser loads it, into `dist/public`;
2. builds the same app to run during the build, into `dist/server`;
3. `scripts/prerender.mjs` writes each page as finished HTML with its own title, description and canonical address, and writes `sitemap.xml`.

So search engines read each page's text without running JavaScript, and the sitemap stays up to date on every deploy.

## Adding to the directory

Everything is in `artifacts/hampstead-wellbeing/src/data/wellbeingDirectory.ts`.

- **A listing:** add a line to `wellbeingProviders`. Its `category` must match a category's `name` exactly.
- **A category:** add an entry to `directoryCategories` (name, slug, heading, intro, and an optional `notice` shown above the listings). The category page, `/directory/<slug>`, its sitemap entry, the filter button and the footer link all follow from that entry. Add a colour for it in `categoryColour` in `src/components/WellbeingDirectory.tsx` (otherwise it uses the default brown).
- **A new standalone page:** add its route in `src/App.tsx` and its title and description in `src/lib/seo.ts`, so it's built and listed in the sitemap.

Pushing to `main` deploys automatically.

## Domain

In Render, add the custom domain `www.hampsteadwellbeing.com`. The site's canonical address is the www one. Render adds `hampsteadwellbeing.com` and redirects it to www.

DNS records at GoDaddy:

| Type | Name | Value |
|---|---|---|
| A | `@` | `216.24.57.1` |
| CNAME | `www` | `<static-site-name>.onrender.com` |

Delete the old Replit A record (34.111.179.208) and `replit-verify` TXT records first. Leave MX records alone. Check the values against Render's Custom Domains page. Once verified, remove the domain from the old Replit app.

## Optional server

`artifacts/api-server` can still run the site as a Web Service with a Resend contact form (`pnpm run build:render`, start `node --enable-source-maps artifacts/api-server/dist/index.mjs`, `RESEND_API_KEY`). The static site doesn't use it.
