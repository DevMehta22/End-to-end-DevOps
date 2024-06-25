FROM node:22 as Builder

WORKDIR /frontend

COPY package*.json ./

RUN  npm i --verbose

COPY . .

FROM node:22-slim

WORKDIR /app

COPY --from=Builder /frontend .

COPY .env.sample .env.local

EXPOSE 3000

CMD ["npm","start","--","--host"]


