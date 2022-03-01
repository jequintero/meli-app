FROM node:10 as build

WORKDIR /meli-app

COPY package*.json ./

RUN yarn install --ignore-engines

# RUN npm install

COPY . .

RUN yarn run build

# run ===============================
FROM node:10-alpine as run

WORKDIR /meli-app

COPY --from=build /meli-app .

EXPOSE 3000

CMD ["yarn", "run", "start:prod"]