FROM ubuntu

SHELL ["/bin/bash", "-c"]

RUN apt-get update && apt-get install docker.io -y

# FROM node:alpine

RUN apt-get update && apt-get install curl -y
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

ENV NODE_VERSION=18.13.0

RUN . ~/.nvm/nvm.sh && nvm install $NODE_VERSION
RUN . ~/.nvm/nvm.sh && nvm alias default $NODE_VERSION
RUN . ~/.nvm/nvm.sh && nvm use default

ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"
RUN node -v

RUN npm install yarn --global

WORKDIR /app

COPY package.json .
RUN yarn install

COPY . .

EXPOSE 8000

CMD ["yarn", "dev"]
