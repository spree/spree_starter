# Spree Starter (formerly Spark Starter Kit)

[![Circle CI](https://circleci.com/gh/spree/spree_starter.svg?style=svg)](https://circleci.com/gh/spree/spree_starter) [![Maintainability](https://api.codeclimate.com/v1/badges/d240686c99b3d35eb61b/maintainability)](https://codeclimate.com/github/spree/spree_starter/maintainability)

This a dockerized [Spree Commerce](https://spreecommerce.org) application template ready to for local development and deployment to cloud providers.

## Deploy in the cloud

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

<a href="https://render.com/deploy?repo=https://github.com/spree/spree_starter/tree/main">
  <img src="https://render.com/images/deploy-to-render-button.svg" alt="Deploy to Render" height=32>
</a>

## Local Installation

### Using Docker (Recommended)
#### Install required tools and dependencies:

  * [Docker](https://www.docker.com/community-edition#/download)

#### Run setup script

```bash
bin/setup
```

This will automatically launch the application at `http://localhost:4000`

#### (Optional) Import sample data such as products, categories, etc

```bash
docker-compose run web rake spree_sample:load
```

#### Launching local server

```bash
docker-compose up
```

### Without Docker (not recommended for beginners)

#### Install required tools and dependencies

1. RVM - https://rvm.io/
2. Ruby - `rvm install 3.0.2`
3. Bundler - `gem install bundler`
4. (MacOS) HomeBrew - https://brew.sh/
5. (MacOS) PostgreSQL - `brew install postgresql`
6. (MacOS) Redis - `brew install redis`
7. (MacOS) ImageMagick - `brew install imagemagick`

#### Run setup script

```bash
bin/setup-no-docker
```

## Updating

### Connect to the docker container
```bash
docker-compose run web bash
```

### Run update commands

```
bundle update
bin/rails spree:install:migrations
bin/rails db:migrate
```

For additional instructions please visit [Spree Upgrade Guides](https://dev-docs.spreecommerce.org/upgrades)

## Development

### Launching rails console

```bash
docker-compose run web rails c
```

### Launching bash console

```bash
docker-compose run web bash
```

## Customization
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

## Environment variables

| variable | description | default value |
|---|---|---|
| DEBUG_ASSETS | Enables/disables [asset debugging in development](https://guides.rubyonrails.org/asset_pipeline.html#turning-debugging-off) | false |
| DB_POOL | database connection pool | 5 |
| MEMCACHED_POOL_SIZE | memcache connection pool | 5 |
| SENDGRID_API_KEY | API key to interface Sendgrid API | |

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
