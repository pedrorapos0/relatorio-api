FROM node:18-bullseye-slim

WORKDIR /usr/app

COPY package.json .

RUN yarn

COPY . .

RUN npm run build

EXPOSE 3333

CMD [ "yarn", "dev"]
