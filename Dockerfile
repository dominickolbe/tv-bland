FROM node:14-alpine

WORKDIR /usr/src/app

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install --frozen-lockfile

COPY . .

CMD ["yarn", "start"]