FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN npm install serve -g

RUN yarn build

EXPOSE 8080

CMD [ "yarn", "run", "serve" ]