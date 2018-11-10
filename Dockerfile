FROM node:slim
LABEL Sreejon="sreejon_doom@yahoo.com"

WORKDIR /app

COPY package*.json ./

# Update
RUN npm install

COPY . /app

# Expose port
EXPOSE 3000
CMD ["npm", "start"]