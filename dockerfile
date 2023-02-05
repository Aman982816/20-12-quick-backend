FROM node
WORKDIR /app/
copy package.json .
RUN npm install 
copy . .
EXPOSE 3000
cmd ["npm","run","dev"]