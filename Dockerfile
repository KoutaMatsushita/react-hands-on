FROM node:8

RUN npm install -g yarn
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN yarn