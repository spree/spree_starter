# Spark Starter Kit

[![Circle CI](https://circleci.com/gh/spark-solutions/spark-starter-kit.svg?style=svg)](https://circleci.com/gh/spark-solutions/spark-starter-kit) [![Maintainability](https://api.codeclimate.com/v1/badges/d240686c99b3d35eb61b/maintainability)](https://codeclimate.com/github/spark-solutions/spark-starter-kit/maintainability)

This is a starting point for all [Spree](https://spreecommerce.org)/Rails related projects at [Spark Solutions][spark], it contains:

 - Ruby on Rails
 - [Spree Commerce](https://spreecommerce.org)
 - Webpack via Webpacker gem
 - React with Redux

## Installation

### Install required tools and dependencies

* [Docker](https://www.docker.com/community-edition#/download)
* bundler
* yarn

### Run setup script

```bash
bin/setup
```

## Development

### Running rails console

```bash
docker-compose run web rails c
```

### Running tests

Before running the test suite remember to fire up docker-compose (if it's not running already):

```bash
docker-compose run web bash
```

And after that you can just use plain normal rspec:

```bash
bundle exec rspec
```

### Adding new gems

Update `Gemfile` and run:

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

### Conventions

#### Namespaces

* `Spree` - Spree-specific models, controllers, services
* `SparkStarterKit` - all custom-made models, controllers, services specifically for SparkStarterKit application

#### Using Dependencies system

Rather than writing decorators for Services please use [dependency injecton](https://guides.spreecommerce.org/developer/customization/dependencies.html).

#### Spree Decorators

All decorators should use `Module.prepend` pattern.

1. Controllers

    Place them in `app/controllers/spark_starter_kit/spree/home_controller_decorator.rb`, eg.

    ```ruby
    module SparkStarterKit
      module Spree
        module HomeControllerDecorator
          # ...
        end
      end
    end

    ::Spree::HomeController.prepend(SparkStarterKit::Spree::HomneControllerDecorator)
    ```

2. Models

    Place them in `app/models/spark_starter_kit/spree/product_decorator.rb`, eg.

    ```ruby
    module SparkStarterKit
      module Spree
        module ProductDecorator
          # ...
        end
      end
    end

    ::Spree::Product.prepend(SparkStarterKit::Spree::ProductDecorator)
    ```

## License

Spark Starter Kit is copyright © 2015-2020
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
