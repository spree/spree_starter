# Spree Starter

This is a starter kit for [Spree Commerce](https://spreecommerce.org) - the open-source e-commerce platform for Rails. It is a great starting point for any Rails developer to quickly build an e-commerce store.

This starter uses:

* Spree Commerce 4.8 which includes Admin Dashboard, API and Storefront
* Ruby 3.3 and Ruby on Rails 7.1
* Solid Queue with Mission Control UI (access only to Spree admins) for background jobs
* Solid Cache for excellent caching and performance

You don't need to install any additional tools or libraries to start developing with Spree Starter. Everything is already set up for you.

## Installation

```bash
bin/setup
```

If you want to use sample data (products, categories), you can load it using the following command:

```bash
bin/rake spree_sample:load
```

### Switching to MySQL

By default, Spree Starter uses PostgreSQL. If you want to switch to MySQL, you can do so by running the following command:

```bash
bin/rails db:system:change --to=mysql
```

### Launch local server

```bash
bin/rails s
```

## Deployment

### Using Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

### Using Render

<a href="https://render.com/deploy?repo=https://github.com/spree/spree_starter/tree/main">
  <img src="https://render.com/images/deploy-to-render-button.svg" alt="Deploy to Render" height=32>
</a>

Note that sample data does not automatically get loaded when deploying to Render with the default configuration. In order to add sample data, run the following commands in the web service shell:

```bash
bin/rake spree_sample:load
```

After that, you'll be ready to deploy to render.

## Troubleshooting

### libvips error

If you encounter an error like the following:

```bash
LoadError: Could not open library 'vips.so.42'
```

Please check that libvips is installed with `vips -v`, and if it is not installed, follow [installation instructions here](https://www.libvips.org/install.html).

## License

Spree Starter (formerly Spark Starter Kit) is copyright © 2015-2024
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
