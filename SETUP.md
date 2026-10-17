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

This lets pages such as /team and /breathwork open directly.

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
