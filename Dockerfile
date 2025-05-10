FROM node:24

WORKDIR /app

COPY app/ .
RUN npm install express
EXPOSE 3000

CMD [ "node","index.js" ]