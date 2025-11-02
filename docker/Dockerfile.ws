FROM oven/bun:1.1.22-alpine AS base

WORKDIR /app

# Define build argument
ARG DATABASE_URL

COPY . .

RUN bun install

# Use the build argument during db:generate
RUN DATABASE_URL=${DATABASE_URL} bun run db:generate

EXPOSE 8080

CMD [ "bun","run","start:ws" ]