FROM oven/bun:alpine AS build
WORKDIR /app
COPY . .
RUN bun install
RUN bun run build

FROM joseluisq/static-web-server:2-alpine AS runtime
ENV SERVER_ROOT="/var/public"
ENV SERVER_COMPRESSION_STATIC=true
COPY --from=build /app/dist /var/public
EXPOSE 80
