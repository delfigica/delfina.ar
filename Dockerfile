# Multi-stage Docker build for Nuxt 4 app on Railway.
# Based on https://content.nuxt.com/docs/deploy/docker

FROM oven/bun:1 AS build
WORKDIR /app

COPY package.json bun.lock* ./

# No BuildKit cache mount here on purpose. Railway requires the mount id to
# carry an `s/<service-id>-` prefix bound to the *current* service, so the id
# breaks the build every time the service moves between projects (verified
# twice on this repo: a plain string id is rejected outright, and a stale
# service id fails validation before any step runs). This app installs ~900
# packages in well under a minute, so the cache buys very little — not worth
# a build that breaks on every service move.
RUN bun install --frozen-lockfile --ignore-scripts

COPY . .

# Plain `bun run build` — `--bun` hangs Rollup on large Nitro bundles.
RUN bun run build

FROM oven/bun:1-slim AS production
WORKDIR /app

# Nitro's .output/ is self-contained — no node_modules, no package.json needed.
COPY --from=build /app/.output /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
EXPOSE 3000

CMD ["bun", "run", "/app/server/index.mjs"]
