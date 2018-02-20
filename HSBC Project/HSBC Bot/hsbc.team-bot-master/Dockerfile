# Target Google App Engine
FROM gcr.io/google-appengine/nodejs

WORKDIR /app

# Copy package info and install dependencies first to take advantage of layering
COPY ["package.json", "package-lock.json", "./"]
RUN npm install

# This dockerfile assumes the builder host has compiled src code to the /out dir (see docker-build.sh)
COPY out /app/out 
COPY .env /app/
COPY .env /app/out/

# Expose default port and start service
EXPOSE 8080
CMD npm start
