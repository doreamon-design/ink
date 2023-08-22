FROM node:14-alpine as build

# # @TODO node-gyp dependens python, and will be built locally
# #   Reference: https://stackoverflow.com/questions/54428608/docker-node-alpine-image-build-fails-on-node-gyp
# RUN apk add --no-cache --virtual .gyp \
#         python3 \
#         make \
#         g++

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN yarn --production

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD yarn serve
