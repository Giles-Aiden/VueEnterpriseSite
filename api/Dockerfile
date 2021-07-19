FROM node:lts
RUN npm install -g npm
WORKDIR /app
COPY package*.json ./
ENV NODE_ENV production
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
