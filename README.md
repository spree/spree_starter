# Spree Starter

This a dockerized [Spree Commerce](https://spreecommerce.org) application template ready to for local development and deployment to cloud providers.

## Deploy in the cloud

### Using Heroku
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

### Using Render
<a href="https://render.com/deploy?repo=https://github.com/spree/spree_starter/tree/main">
  <img src="https://render.com/images/deploy-to-render-button.svg" alt="Deploy to Render" height=32>
</a>

Note that sample data does not automatically get loaded when deploying to Render with the default configuration. In order to add sample data, run the following commands in the web service shell:
```shell
bundle exec rails db:seed
bundle exec rake spree_sample:load
```

#### Deploying to Render with Spree Legacy Frontend
To deploy to render with the Spree Legacy Frontend, first follow the instructions in the [legacy frontend ReadMe](https://github.com/spree/spree_legacy_frontend#installation) on adding the appropriate gems to your gemfile, and update the web service build command to use `bin/render-build-legacy-frontend.sh`, like so:
```yaml
services:
  - type: web
    name: spree
    env: ruby
    buildCommand: "./bin/render-build-legacy-frontend.sh"
```

After that, you'll be ready to deploy to render.

## Local Installation

### Using Docker (Recommended)
#### Install required tools and dependencies:

* [Docker](https://www.docker.com/community-edition#/download)

#### Run setup script

```bash
bin/start-docker
```

This will automatically launch the application at `http://localhost:4000/admin`

#### (Optional) Import sample data such as products, categories, etc

```bash
docker-compose run web rake spree_sample:load
```

#### Launching local server

```bash
docker-compose up
```

### Using Hybrid installation
#### Install required tools and dependencies:

* [Docker](https://www.docker.com/community-edition#/download)
* Ruby 3.0.3
* [libvips](https://www.libvips.org/install.html)

#### Run setup script

```bash
bin/start-hybrid
```

After loading all docker dependencies launch local server with:

```bash
bin/rails s
```

#### (Optional) Import sample data such as products, categories, etc

```bash
docker-compose run web rake spree_sample:load
```

### Without Docker (not recommended for beginners)

#### Install required tools and dependencies

1. HomeBrew - https://brew.sh/
2. Install required packages: GPG, PostgreSQL, Redis, ImageMagick, and VIPS

      ```bash
      brew install gpg postgresql redis imagemagick vips
      createuser -P -d postgres
      ```

3. RVM - https://rvm.io/
4. NVM - https://github.com/nvm-sh/nvm
5. Ruby - `rvm install 3.0.3`
6. Node - `nvm install`
7. Yarn - `npm -g install yarn`

#### Run setup script

```bash
bin/setup-no-docker
```

## Adding Storefront

Spree is a [headless e-commerce platform](https://dev-docs.spreecommerce.org/getting-started/headless-commerce) which you can use with any storefront you like. We have pre-built integrations with:

* [Next.js Commerce](https://dev-docs.spreecommerce.org/storefronts/next.js-commerce)
* [Vue Storefront](https://dev-docs.spreecommerce.org/storefronts/vue-storefront)

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

## Troubleshooting

### libvips error

If you are building the application using the latest code, you may encounter the following libvips error:
```
LoadError: Could not open library 'vips.so.42'
```
This error is usually an indication that you do not have libvips installed locally on your machine. Check that libvips is installed with `vips -v`, and if it is not installed, follow [installation instructions here](https://www.libvips.org/install.html).

### disabled 'Add to Cart' button

This issue is specific to running with [spree_legacy_frontend](https://github.com/spree/spree_legacy_frontend).

If you notice that the 'Add to Cart' button is disabled on product pages, try the [troubleshooting instructions](https://github.com/spree/spree_legacy_frontend#disabled-add-to-cart-button-issue) found in the spree_legacy_frontend ReadMe.

### uninitialized constant Spree::Preference (NameError)

If upgrading your spree app to Rails 7, you may run into the following error:
```shell
/lib/spree/core/preferences/store.rb:96:in `should_persist?': 
uninitialized constant Spree::Preference (NameError)
```
To fix this error, you'll need to update your spree config initializer. In `config/initializers/spree.rb`, wrap the `Spree.config` block in a `Rails.application.config.after_initialize` block, like so:
```ruby
Rails.application.config.after_initialize do
  Spree.config do |config|
    # config settings initialized here
  end
end
```

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
