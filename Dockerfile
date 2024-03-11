FROM node:latest

WORKDIR /app

COPY package.json /app/

RUN npm install && npm install -g next

COPY . /app

EXPOSE 3000

CMD ["npm", "run", "dev"]