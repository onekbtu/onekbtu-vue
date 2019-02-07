FROM node:10.14.1

RUN mkdir /onekbtu-vue

COPY . /onekbtu-vue

WORKDIR /onekbtu-vue

RUN npm install -g --silent @vue/cli

RUN npm install --no-cache && npm run build --production

