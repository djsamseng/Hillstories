FROM node:6.11.1
RUN npm install -g yarnpkg

RUN mkdir -p /usr/src/hillstories-server
WORKDIR /usr/src/hillstories-server

RUN yarn install -g nodemon

EXPOSE 3000
CMD ["nodemon", "server.js", "--exec babel-node", "--presets es2015,stage-0"]
