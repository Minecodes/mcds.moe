FROM oven/bun AS build
WORKDIR /app
COPY . .
RUN bun install
RUN bun run build

FROM joseluisq/static-web-server AS runtime
ENV SERVER_ROOT="/var/public"
ENV SERVER_COMPRESSION_STATIC=true
COPY --from=build /app/dist /var/public
EXPOSE 80
