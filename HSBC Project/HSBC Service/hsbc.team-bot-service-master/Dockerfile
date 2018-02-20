# Target Google App Engine
FROM gcr.io/google-appengine/nodejs

WORKDIR /app

# Copy package info and isntall dependencies first to take advantage of layering
COPY ["package.json", "package-lock.json", "./"]
RUN npm install

# This dockerfile assumes the builder host has compiled src code to the /out dir
COPY out /app/out

# Copy environment variables
COPY .env /app
COPY .env /app/out

# Expose default port
EXPOSE 8080
CMD npm start
