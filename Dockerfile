FROM node:latest

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
ADD package.json package-lock.json /usr/src/app/
RUN npm install --silent

# add app
# ADD . /usr/src/app

# start app
CMD ["npm", "start"]
