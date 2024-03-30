FROM node:20

RUN npm install -g nodemon

WORKDIR /src/backend

COPY package.json .

RUN npm install

EXPOSE 8000

CMD ["nodemon", "index.js"]