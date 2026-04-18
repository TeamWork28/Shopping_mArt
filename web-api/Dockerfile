FROM node:23

WORKDIR /web-api

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4340

CMD ["npm", "start"]
