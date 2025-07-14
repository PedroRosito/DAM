FROM node:alpine

RUN npm install -g nodemon

WORKDIR /src/backend

COPY package.json ./

RUN npm install

COPY index.js ./

EXPOSE 8000