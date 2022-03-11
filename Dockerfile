FROM node:16 AS build
WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN npm run build

FROM node:16-alpine

WORKDIR /usr/src/app

COPY --from=build /usr/src/app /usr/src/app

CMD [ "npm", "run", "start" ]
