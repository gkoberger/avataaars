FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install --silent

COPY app.js ./

CMD ["npm", "start"]
