FROM node:10

RUN mkdir -p /usr/src/app/server
RUN mkdir -p /usr/src/app/build
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install --silent
COPY ./server /usr/src/app/server
COPY ./build /usr/src/app/build
CMD ["npm", "run", "start:prod"]
EXPOSE 8081
