FROM node:18.16.0-alpine

WORKDIR /usr/src/app

COPY package*.json /usr/src/app
RUN npm ci
USER node
COPY . /usr/src/app

EXPOSE 3000

CMD ["npm", "run", "dev"]