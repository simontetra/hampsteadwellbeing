# Hampstead Wellbeing on Render

The website and its contact form run as a single Render Web Service, set up the same way as Tetra Radar.

## Render Web Service

| Setting | Value |
|---|---|
| Language | Node |
| Branch | `main` |
| Root Directory | *(leave blank)* |
| Build Command | `npm install -g pnpm@10.28.0 && pnpm install --frozen-lockfile && pnpm run build:render` |
| Start Command | `node --enable-source-maps artifacts/api-server/dist/index.mjs` |
| Instance type | Starter |

### Environment

| Key | Value |
|---|---|
| `NODE_VERSION` | `22` |
| `RESEND_API_KEY` | the API key from resend.com |
| `RESEND_FROM_EMAIL` | optional, e.g. `Hampstead Wellbeing <hello@hampsteadwellbeing.com>` once the domain is verified in Resend |
| `CONTACT_TO_EMAIL` | optional, defaults to `hampsteadwellbeing@gmail.com` |

Health check path: `/api/healthz`

Until hampsteadwellbeing.com is verified in Resend, emails go from `onboarding@resend.dev`. Resend only delivers those to the email address that owns the Resend account.

## Domain

In Render, add the custom domain `www.hampsteadwellbeing.com`. The site's canonical address is the www one. Render adds `hampsteadwellbeing.com` and redirects it to www.

DNS records at the registrar:

| Type | Host | Answer |
|---|---|---|
| A | *(blank / @)* | `216.24.57.1` |
| CNAME | `www` | `<service-name>.onrender.com` |

Delete the old Replit A and `replit-verify` TXT records first. Check the values against Render's Custom Domains page.

## Making changes

After a change is merged to `main`, Render redeploys automatically if Auto-Deploy is on. Otherwise use Manual Deploy, then Deploy latest commit.
