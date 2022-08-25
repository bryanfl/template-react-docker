FROM node:16 as node

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build

FROM node:16-alpine
COPY --from=node /usr/src/app/build .
RUN npm i -g serve
EXPOSE 3000
CMD ["serve", "-s", "./"]