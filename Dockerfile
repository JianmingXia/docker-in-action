FROM centos:7

RUN \
  yum -y update \
  && yum -y install wget \
  && wget https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm \
  && yum -y install ./google-chrome-stable_current_*.rpm

# FROM node:14.4.0
COPY --from=node:14.4.0 /usr/local/include/node /usr/local/include/node
COPY --from=node:14.4.0 /usr/local/bin/node /usr/local/bin/node
COPY --from=node:14.4.0 /usr/local/lib/node_modules /usr/local/lib/node_modules
COPY --from=node:14.4.0 /usr/local/share/doc/node /usr/local/share/doc/node

RUN \
  ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm \
  && ln -s /usr/local/lib/node_modules/npm/bin/npx-cli.js /usr/local/bin/npx \
  && node --version \
  && npm --version

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]