# Use an official Node image as base
FROM node:18

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the app

# Serve the app with a lightweight server
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# Expose frontend port
EXPOSE 3000