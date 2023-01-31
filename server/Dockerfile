FROM ubuntu

SHELL ["/bin/bash", "-c"]

# RUN apt-get update && apt-get install docker.io -y

# Install docker within docker for sandboxed code execution
# RUN apt-get update && apt-get install -y curl \
#     ca-certificates \
#     gnupg \
#     lsb-release
#
# RUN mkdir -p /etc/apt/keyrings
# RUN curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
#
# RUN echo \
#   "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
#   $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null
#
# RUN apt-get update && apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
RUN apt-get update && apt-get install -y docker.io

RUN apt-get update && apt-get install -y curl


# Install node to run the backend server
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
