FROM ubuntu

SHELL ["/bin/bash", "-c"]

# Install gcc and gdb for C compiling and debugging
RUN apt-get update && \
    apt-get install -y build-essential gdb

RUN apt-get update && apt-get install -y curl


# Install node to run the backend server
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

ENV NODE_VERSION=18.13.0

RUN . ~/.nvm/nvm.sh && nvm install $NODE_VERSION
RUN . ~/.nvm/nvm.sh && nvm alias default $NODE_VERSION
RUN . ~/.nvm/nvm.sh && nvm use default

ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"

RUN npm install --global yarn

WORKDIR /app

COPY package.json yarn.lock .
RUN yarn install
RUN yarn global add nodemon

COPY . .

EXPOSE 8000

CMD ["yarn", "dev"]
