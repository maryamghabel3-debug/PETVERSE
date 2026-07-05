# PetVerse multi-stage
FROM node:20-alpine AS base
RUN npm i -g pnpm turbo
WORKDIR /app
COPY package.json pnpm-workspace.yaml turbo.json ./
COPY . .
RUN pnpm install --frozen-lockfile=false
RUN pnpm build
CMD ["pnpm","dev"]
