FROM oven/bun:1.1.22-alpine AS base

WORKDIR /app

COPY ./packages ./packages
COPY ./bun.lock ./bun.lock

COPY ./package.json ./package.json
COPY ./turbo.json .turbo.json

COPY ./apps/ws ./apps/ws


# COPY . .

RUN bun install
RUN bun run db:generate

EXPOSE 8080

CMD [ "bun","run","start:ws" ]