from node:10 as builder

workdir /app

copy package*.json ./

run npm install

copy . .

run npm run build

from node:10-alpine

workdir /app

copy --from=builder /app ./

cmd ["npm", "run", "start:prod"]
