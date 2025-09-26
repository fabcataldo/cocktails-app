FROM node:22.16.0-alpine

WORKDIR /usr/app
COPY package.json ./
RUN npm install -g @angular/cli@20.0.1
RUN npm install
RUN npm install typescript@5.8.2 --save-dev --force

COPY . ./

CMD ["npm", "start"]
