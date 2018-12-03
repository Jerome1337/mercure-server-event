FROM node:8

WORKDIR /usr/src/app

VOLUME /code

COPY package*.json ./
RUN ["npm", "i"]

COPY . .

EXPOSE 8080
CMD ["npm", "run", "serve"]
