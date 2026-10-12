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
│   ├── favicon.png
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

## Next Steps (not done yet)

- Drop a real `public/cv.pdf` — the "Ver CV" button links there but the file
  doesn't exist yet
- More sections (projects, stack, contact) — deliberately out of scope for
  this first pass, single hero page only
- Point `delfina.ar` DNS at the Railway deploy (was on GitHub Pages before;
  DNS currently returns SERVFAIL — needs the registrar checked)
