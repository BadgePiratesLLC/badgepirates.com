FROM node:8-slim

WORKDIR /backend
ENV NODE_ENV development

COPY package.json /backend/package.json

RUN npm install --production

COPY .env.example /backend/.env.example
COPY . /backend

CMD ["npm","start"]

EXPOSE 8080
