# syntax=docker/dockerfile:1

FROM node:22-bookworm-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@11.24.0 --activate

FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
	pnpm install --frozen-lockfile

FROM deps AS build
COPY . .
# Tina Cloud credentials are optional. Without them the admin client is
# generated locally so the public site still builds from cms/articles.
ARG VITE_TINA_CLIENT_ID
ARG TINA_TOKEN
RUN if [ -n "$VITE_TINA_CLIENT_ID" ] && [ -n "$TINA_TOKEN" ]; then \
		VITE_TINA_CLIENT_ID="$VITE_TINA_CLIENT_ID" TINA_TOKEN="$TINA_TOKEN" pnpm build; \
	else \
		pnpm exec tinacms build --local --skip-cloud-checks && pnpm exec vite build; \
	fi

FROM base AS prod-deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
	pnpm install --prod --frozen-lockfile --ignore-scripts

FROM node:22-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000
COPY --from=prod-deps --chown=node:node /app/node_modules ./node_modules
COPY --from=build --chown=node:node /app/build ./build
COPY --from=build --chown=node:node /app/package.json ./
COPY --from=build --chown=node:node /app/cms ./cms
USER node
EXPOSE 3000
CMD ["node", "build"]
