FROM node:lts-alpine3.18 as base 
ENV http_proxy=http://172.0.0.1:3128 \
    https_proxy=http://172.0.0.1:3128 
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package.json .
EXPOSE 3000

FROM base as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM base as prod
COPY --from=build --chown=nextjs:nodejs /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/public ./public
CMD npm start
