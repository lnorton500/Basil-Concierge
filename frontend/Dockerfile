FROM node:12.6-alpine

WORKDIR /usr/app

COPY package*.json ./

COPY . .

RUN npm install -qy

EXPOSE 5000

CMD ["npm", "run", "prod"]
