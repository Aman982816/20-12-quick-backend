FROM node
WORKDIR /app/
copy package.json .
RUN npm install 
copy . .
cmd ["npm","run","dev"]