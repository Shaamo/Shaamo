FROM node:16-alpine  # Base image

WORKDIR /app  # Set working directory

COPY package*.json ./  # Copy package files

RUN npm install  # Install dependencies

COPY . .  # Copy project files

RUN npm run build  # Build Nuxt.js app

EXPOSE 3000  # Expose port for serving

CMD ["npm", "start"]  # Start the application