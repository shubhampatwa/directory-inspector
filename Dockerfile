FROM node:16-alpine

WORKDIR /apps

COPY . .

RUN npm install \
  && apk update \
  && apk add git \
  && npm run build client \
  && npm run build server 

RUN ls | grep -v 'dist' | grep -v 'node_modules' | xargs rm -r

EXPOSE 3000

CMD [ "node", "dist/apps/server/main.js" ]