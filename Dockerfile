
FROM node:14.16.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN yarn

# Bundle app source
# COPY . .
COPY . /usr/src/app


EXPOSE 3333

CMD ["yarn", "build"]
