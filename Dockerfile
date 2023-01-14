FROM node:18-alpine3.16 AS builder

RUN npm i -g pnpm

WORKDIR /usr/src/app

COPY . .

RUN pnpm install

RUN pnpm run build

FROM node:18-alpine3.16 AS production

WORKDIR /usr/src/app

RUN npm i -g pnpm

COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder /usr/src/app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules

ENV NODE_ENV production

EXPOSE 8080

CMD [ "pnpm", "run", "start:prod" ]
