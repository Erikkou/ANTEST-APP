# Stage 1: Build the React app
FROM node:16 as build

WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json /app/
RUN npm install

# Copy the rest of the frontend code
COPY ./src /app/src
COPY ./public /app/public

# Build the frontend app
RUN npm run build

# Stage 2: Serve the app with nginx
FROM nginx:alpine

# Copy the build output from the first stage to nginx's serving directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
