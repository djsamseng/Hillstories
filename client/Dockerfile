FROM node:6.11.1
RUN npm install -g yarnpkg

RUN mkdir -p /usr/src/hillstories-client
WORKDIR /usr/src/hillstories-client

EXPOSE 3000
CMD [ "yarn", "start" ]
