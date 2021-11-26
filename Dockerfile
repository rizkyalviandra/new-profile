# Stage 1 - install all dependencies
FROM node:lts as installer
WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
RUN yarn config set cache-folder /usr/src/cache &&\
    yarn install --ignore-scripts

# Stage 2 - pull source files & build nextjs app
FROM node:lts as builder
ARG port
ENV port=$port
WORKDIR /usr/src/cache
COPY --from=installer /usr/src/cache .
WORKDIR /usr/src/app
COPY --from=installer /usr/src/app .
COPY $PWD .
RUN yarn config set cache-folder /usr/src/cache &&\
    yarn build &&\
    yarn install \
    --prod \
    --ignore-scripts \
    --offline &&\
    yarn cache clean

# Stage 3 - pull dists and serve traffic
FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app .
EXPOSE 80
CMD [ "yarn", "start", "-p", "80" ]