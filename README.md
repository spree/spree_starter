## Spark Starter Kit

[![Circle CI](https://circleci.com/gh/spark-solutions/spark-starter-kit.svg?style=svg)](https://circleci.com/gh/spark-solutions/spark-starter-kit) [![Code Climate](https://codeclimate.com/repos/567faf288109dc0e7000368c/badges/aaaf9d43a643ff68fddc/gpa.svg)](https://codeclimate.com/repos/567faf288109dc0e7000368c/feed) [![Test Coverage](https://codeclimate.com/repos/567faf288109dc0e7000368c/badges/aaaf9d43a643ff68fddc/coverage.svg)](https://codeclimate.com/repos/567faf288109dc0e7000368c/coverage)

This is a starting point for all Spree/Rails related projects at Spark Solutions, it contains:
 - Ruby on Rails 4.2
 - [Spree Commerce](https://github.com/spree/spree) 3.0
 - [Webpack](https://webpack.github.io/) for asset bundling (JS/CSS/Sass/images) with hot reload
 - [Babel](https://babeljs.io/) 6 for EcmaScript 2015 / ES6 support
 - ReactJS with [Hot Reload](https://github.com/gaearon/babel-plugin-react-transform), [Redux](https://github.com/rackt/redux), [React-router](https://github.com/rackt/react-router) and [server side rendering](https://github.com/reactjs/react-rails#server-rendering) via therubyracer and [react-rails](https://github.com/reactjs/react-rails) gem
 - [SPA frontend](client/js/ClientApp.js) + [classic rails views](app/views/layouts/application_classic.haml) (simple layout switcher)
 - haml as a template engine for rails views

## Installation

```
bundle install
```
```
npm install
```
```
bundle exec rake db:bootstrap
```

## Development

To start the project just type:
```
foreman start -f Procfile.dev
```

## Deployment

This repository is prepared for Heroku deployment with assets hosting on Amazon S3 for production and Amazon Cloudfront as a CDN.

## License

Spark Starter Kit is copyright © 2015-2016
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
