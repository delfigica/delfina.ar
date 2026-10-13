# delfina.ar

Personal site/portfolio for Delfina Cañas. Rebuilt from a Next.js practice-project
portfolio into the codeCave Nuxt stack, starting as a single hero landing page.

## Tech Stack

- **Nuxt 4** + **Nuxt UI 4** — no database, no auth, no content module (none needed
  for a single static page)
- **@nuxtjs/i18n** — Spanish (default) + English
- **Fraunces** (serif, display) + **Inter** (sans, body) via Google Fonts
- **Railway** (Docker) — deployed under the codeCave Railway workspace, domain
  `delfina.ar`

## Project Structure

```
delfina.ar/
├── app/
│   ├── app.vue              # Head tags, fonts, SEO meta
│   └── pages/index.vue      # The hero landing page (only page right now)
├── i18n/locales/{es,en}.json
├── public/
│   ├── favicon.svg
│   └── cv.pdf                # NOT committed yet — drop the real CV here
├── Dockerfile
├── railway.json               # Pins Dockerfile builder (new Railway services
│                                 default to Railpack otherwise)
└── nuxt.config.ts
```

## Commands

```bash
bun install
bun dev
bun build
bun run lint
bun run typecheck
```

## Deploy notes

The Railway service builds from GitHub (auto-deploys on push to `main`).

**The custom domain's target port must be 8080, not 3000.** The Dockerfile says
`EXPOSE 3000`, but Railway injects its own `PORT` env var at runtime and Nitro
honours it over the Dockerfile — so the app actually listens on 8080. Railway
auto-detects this for the generated `*.up.railway.app` domain, but a custom
domain's port is set by hand and defaults elsewhere. Setting it to 3000 produces
`Application failed to respond` on the custom domain **while the generated
domain keeps working** — that split is the diagnostic tell.

No BuildKit cache mount in the Dockerfile on purpose — see the comment there;
Railway binds the mount id to a specific service, which breaks the build every
time the service moves.

**DNS:** `delfina.ar` is registered at NIC.ar, delegated to Cloudflare
nameservers, with the Railway `CNAME` + `TXT` records in Cloudflare. The DNS
record is currently **DNS-only (grey cloud)**: Railway needs direct traffic to
issue its SSL cert, and proxying from the start blocks that validation
(symptom: 502 with SSL mode Full, redirect loop with Flexible). If the proxy is
re-enabled now that the cert exists, Cloudflare's SSL/TLS mode must be **Full** —
Flexible causes an infinite redirect loop.

## Next Steps (not done yet)

- Drop a real `public/cv.pdf` — the "Ver CV" button links there but the file
  doesn't exist yet
- More sections (projects, stack, contact) — deliberately out of scope for
  this first pass, single hero page only
- The hero page was never visually diffed against the design
  (`Home@1x.png`) — the browser tooling was unavailable during the build, so
  colours/spacing/watermark are unverified against the mockup
