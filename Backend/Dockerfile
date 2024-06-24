FROM node:22 as Builder

WORKDIR /app

COPY package*.json ./

RUN  npm i

COPY . .

FROM node:22-slim

WORKDIR /app

COPY --from=Builder /app .

COPY .env.sample .env

EXPOSE 8000

CMD ["npm","run","dev"]


