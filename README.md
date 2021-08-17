# Spree Starter (formerly Spark Starter Kit)

[![Circle CI](https://circleci.com/gh/spree/spree_starter.svg?style=svg)](https://circleci.com/gh/spree/spree_starter) [![Maintainability](https://api.codeclimate.com/v1/badges/d240686c99b3d35eb61b/maintainability)](https://codeclimate.com/github/spree/spree_starter/maintainability)

This is a Ruby on Rails application minimal template with [Spree Commerce](https://spreecommerce.org) pre-installed, fully dockerized and ready to be deployed to Heroku.

## Launch on Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Local Installation

### Install required tools and dependencies:

  * [Docker](https://www.docker.com/community-edition#/download) with docker-compose

### Run setup script

```bash
bin/setup
```

### Import sample data such as products, categories, etc (optionally)

```bash
docker-compose run web rake spree_sample:load
```

## Running the project

```bash
docker-compose up
```

## Development

### Running rails console

```bash
docker-compose run web rails c
```

### Running tests

```bash
docker-compose run web bash
bundle exec rspec
```

### Adding new gems

Update `Gemfile` and run

```bash
bundle install
docker-compose build
```

You will need to restart the server if running:

```bash
docker-compose restart
```

### Updating gems

```bash
bundle update spree
docker-compose build
```

## Environment variables

| variable | description | default value |
|---|---|---|
| DEBUG_ASSETS | Enables/disables [asset debugging in development](https://guides.rubyonrails.org/asset_pipeline.html#turning-debugging-off) | false |
| DB_POOL | database connection pool | 5 |
| MEMCACHED_POOL_SIZE | memcache connection pool | 5 |
| SENDGRID_API_KEY | API key to interface Sendgrid API | |
| USER_ID, GROUP_ID | Align docker containers with host user/group | 1000, 1000 |


## Docker User & File permissions

To avoid file ownership problems, the host user is shared with docker development container(s).

Basically, we create an user in each container, having the same UID/GID as your host one.
This setup allows to create files from inside of each container; generated files will be editable on the host,
without further changes to file permissions.

#### More about UID/GID (UserID / GroupID)

_On Linux systems, the first normal user (non-root) is identified by it's name, and a numeric ID (1000).
On Fedora/CentOS systems the UID is 500. As long as two users have the same IDs, their name is not important to determine
file permissions._

The default value is `1000` for both UID and GID. Please use the `.env` file to change them, if you need to.

**Note:** this configuration has not been tested on Windows yet

## License

Spree Starter (formerly Spark Starter Kit) is copyright © 2015-2021
[Spark Solutions Sp. z o.o.][spark]. It is free software,
and may be redistributed under the terms specified in the
[LICENSE](LICENSE.md) file.

## About Spark Solutions

[![Spark Solutions](http://sparksolutions.co/wp-content/uploads/2015/01/logo-ss-tr-221x100.png)][spark]

Spree Starter is maintained and funded by [Spark Solutions Sp. z o.o.](http://sparksolutions.co?utm_source=github)
The names and logos are trademarks of Spark Solutions Sp. z o.o.

We are passionate about open source software.
We are [available for hire][spark].

[spark]:http://sparksolutions.co?utm_source=github
