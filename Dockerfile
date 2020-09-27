# base image
FROM node:10.16.0

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY . /usr/src/app/
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent

COPY . /usr/src/app/

# start app
CMD ["npm", "start"]
