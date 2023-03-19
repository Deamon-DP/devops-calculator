# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY . .

# Install app dependencies
RUN npm install
RUN npm run build


EXPOSE 3000 
EXPOSE 5000

# Define the command to start the app
CMD [ "npm", "run","dev" ]
