FROM node:alpine

WORKDIR /app

COPY package.json .
RUN yarn install

COPY . .

EXPOSE 8000

CMD ["yarn", "dev"]

