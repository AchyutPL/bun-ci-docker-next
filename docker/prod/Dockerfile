FROM imbios/bun-node:18-slim AS base

WORKDIR /app

ENV NODE_ENV=production

COPY public ./public

COPY .next/standalone ./

COPY .next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]