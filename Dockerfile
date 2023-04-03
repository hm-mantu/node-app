FROM node:18-alpine
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 8005
CMD [ "npm" , 'start' ]