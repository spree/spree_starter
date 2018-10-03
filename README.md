## Spark Starter Kit

[![Circle CI](https://circleci.com/gh/spark-solutions/spark-starter-kit.svg?style=svg)](https://circleci.com/gh/spark-solutions/spark-starter-kit) [![Maintainability](https://api.codeclimate.com/v1/badges/d240686c99b3d35eb61b/maintainability)](https://codeclimate.com/github/spark-solutions/spark-starter-kit/maintainability)

This is a starting point for all Spree/Rails related projects at Spark Solutions, it contains:
 - Ruby on Rails
 - [Spree Commerce](https://spreecommerce.org)
 - Webpack via Webpacker gem
 - React with Redux

## Installation

### Install required tools and dependencies:
 - [Docker](https://www.docker.com/community-edition#/download)
 - [Homebrew](https://brew.sh/) if you're on OSX
 - PostgreSQL client - `brew install postgresql` or `apt-get install postgresql-client`
 - [RVM](https://rvm.io/) - `rvm use`
 - [NVM](https://github.com/creationix/nvm) - `nvm use`
 - Yarn - `npm install -g yarn`
 - Bundler - `gem install bundler`

### Stop local PostgreSQL Server

#### OS X
```
brew services stop postgresql
```

#### Linux
```bash
service postgresql stop
```

### Run setup script
```bash
bin/setup
```

## Development

To start the project just type:
```
bin/start
```

## Running tests

Before running the test suite remember to fire up docker-compose (if it's not running already):

```
docker-compose start
```

And after that you can just use plain normal rspec:

```
rspec
```

## Deployment

This repository is prepared for Heroku deployment with assets hosting on Amazon S3 for production and Amazon Cloudfront as a CDN.

Before the first deploy, in the project directory run:
```
heroku buildpacks:add heroku/nodejs
```
```
heroku buildpacks:add heroku/ruby
```

## License

Spark Starter Kit is copyright © 2015-2017
[Spark Solutions Sp. z o.o.][spark]. It is free software,
and may be redistributed under the terms specified in the
[LICENSE](LICENSE.md) file.

## About Spark Solutions
[![Spark Solutions](http://sparksolutions.co/wp-content/uploads/2015/01/logo-ss-tr-221x100.png)][spark]

Spark Starter Kit is maintained and funded by [Spark Solutions Sp. z o.o.](http://sparksolutions.co?utm_source=github)
The names and logos are trademarks of Spark Solutions Sp. z o.o.

We are passionate about open source software.
We are [available for hire][spark].

[spark]:http://sparksolutions.co?utm_source=github
