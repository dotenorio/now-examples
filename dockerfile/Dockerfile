FROM mhart/alpine-node:10

LABEL name "dockerfile"

RUN mkdir /app
WORKDIR /app
COPY app /app
RUN yarn install

EXPOSE 3000
CMD ["yarn", "start"]