FROM node:16.16.0

WORKDIR /app

COPY package*.json ./

RUN npm install | true

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
