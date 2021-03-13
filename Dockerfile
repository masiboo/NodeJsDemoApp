FROM node:latest

# Create app directory 
WORKDIR /usr/src/app

#ENV PORT 4000

# Install app dependencies
COPY package*.json ./

RUN npm install

COPY . .
#RUN npm run build

EXPOSE 4000

CMD ["node", "dist/app.js"]
