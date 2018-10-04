FROM mhart/alpine-node:10

LABEL name "dockerfile"

RUN mkdir /app
WORKDIR /app
COPY app /app
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]