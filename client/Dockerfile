# # Create image based on the official Node image from dockerhub
# FROM node
# # Create a directory where our app will be placed
# RUN mkdir -p /usr/src/app
# # Change directory so that our commands run inside this new directory
# WORKDIR /usr/src/app
# # Copy dependency definitions
# COPY package.json /usr/src/app
# # Install dependecies
# RUN npm install -g yarn
# RUN yarn install
# # Get all the code needed to run the app
# COPY . /usr/src/app
# # Expose the port the app runs in
# EXPOSE 4200
# # Serve the app
# CMD ["npm", "start"]


# FROM node
# # Make folder to put our files in
# RUN mkdir -p /usr/src/app
# RUN mkdir -p /usr/src/app/frontend
# # Set working directory so that all
# # subsequent command runs in this folder
# WORKDIR /usr/src/app/frontend
# # Copy package json and install dependencies
# COPY package*.json ./
# RUN npm install
# # Copy our app
# COPY . .
# # Expose port to access server
# EXPOSE 3000
# # Command to run our app
# CMD [ "npm", "start" ]

FROM node:16-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]

# commands:
#     docker run -d -p 3000:3000 --name react-app react-image