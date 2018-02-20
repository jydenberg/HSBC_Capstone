#!/usr/bin/env bash

# get latest version
git fetch
git pull

# update dependencies and compile
npm install
grunt build

# construct image tag
export VERSION=`cat BUILD_VERSION`
export IMAGE_TAG=gcr.io/$PROJECT_ID/hsbc-service:$VERSION

# build image, push to GCR and deploy
docker build -t $IMAGE_TAG . && \
    gcloud docker -- push $IMAGE_TAG && \
    gcloud app deploy --promote --stop--previous-version --image-url=$IMAGE_TAG