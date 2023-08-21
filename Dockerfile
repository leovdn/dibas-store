FROM node:17-alpine

WORKDIR /web

COPY package.json .

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]