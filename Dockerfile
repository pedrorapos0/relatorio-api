FROM node:18-bullseye-slim

WORKDIR /usr/app

COPY package.json .

RUN yarn

RUN npm run build

COPY . .

EXPOSE 3333
