# Multi-stage Docker build for Nuxt 4 app on Railway.
# Based on https://content.nuxt.com/docs/deploy/docker + Railway BuildKit cache mounts.

FROM oven/bun:1 AS build
WORKDIR /app

COPY package.json bun.lock* ./

RUN --mount=type=cache,id=s/8d348a5f-a679-44d1-a443-c01c6b40cf45-bun-install,target=/root/.bun/install/cache \
    bun install --frozen-lockfile --ignore-scripts

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
