# Playwright Technical Assessment Project

This is a technical assessment for Quality Engineering using Spree Commerce platform, Playwright, TypeScript, and Docker. 

## To run Playwright tests locally 
1. Clone the repository 
```
git clone https://github.com/spree/spree_starter.git
```
2. Go to the repository directory:
``` 
cd spree_starter
```
3. Follow the Local Installation Guide below 

4. Go to the Playwright directory
```
cd playwright
```
5. Install Playwright dependencies
``` 
npm install
```  
6. Run Playwright test in normal headless mode:
  ```
  npx playwright test
  ```
7. Run Playwright in the UI mode: 
  ```
  npx playwright test --ui
  ```
8. Run Playwright in the debug mode:
  ```
  npx playwright test --debug
  ```
9. Run a specific Playwright spec file:
  ```
  npx playwright test file-name.spec.ts
  ```


## Playwright Framework 

The Playwright testing framework project is still work-in-progress, it is NOT 100% complete. The project was started to demonstrate understanding of the following Playwright features:

- Page Object Model
- Component Object Model
- Playwright custom fixtures to add authenticated state for a page and an api client
- Authentication via .auth files 
- Mocking API functionality  
- API tests with Playwright
- Test structure 
- Test planning
- Use of TypeScript with Playwright

### Playwright Project Navigation 
- [Playwright directory](https://github.com/dinakazakevich/qe-spree-playwright/tree/main/playwright)
- Dedicated [README on the Playwright framework and approach](https://github.com/dinakazakevich/qe-spree-playwright/blob/main/playwright/README.md)

### Additionally it covers
- Using Playwright in a CI pipeline
- Running Playwright in Docker containers locally and on CI. 

### I implemented in particular:
- the entire Playwright project that lives in the /playwright directory 
- the [CI pipeline workflow](.github/workflows/e2e-tests.yml) that runs the Playwright tests 
- [docker-compose-test.yml](docker-compose-test.yml) configuration that is used by the CI pipeline

### Disclaimers 
- the Spree app that I'm using in this project offers some sample test data set that is missing images, you can upload some manually into a local instance using free images form Unsplash 

- I'm aware of the `fullyParallel` setting being set to false, I'm doing some experimenting, hence the setting. In a real life project, this can be tweaked based on the needs but most likely set to true 99% of the time. 

- The same for browsers, in this test project, I'm limiting the browser selection to just Chrome to speed up local and CI runs but in a real life project this will be adjusted based on the browsers that the project claims to support 

- Mocking APIs is a work in progress, I'm still experimenting with it. The plan is to use Mock Service Worker to mock the payment gateway API 

- Reporting is very minimal and is also not fully complete.


## About Spree Commerce

This project uses the [Spree Starter](https://github.com/spree/spree_starter) kit for [Spree Commerce](https://spreecommerce.org) - the [open-source eCommerce platform](https://spreecommerce.org) for [Rails](https://spreecommerce.org/category/ruby-on-rails/). It is a great starting point for any Rails developer to quickly build an eCommerce application.

This starter uses:

* **[Spree Commerce 5](https://spreecommerce.org/announcing-spree-5-the-biggest-open-source-release-ever/)**, the biggest release ever, which includes Admin Dashboard, API and Storefront - everything you need to start developing your new eCommerce application/store/marketeplace
* Stripe for payment processing, thanks to the official [Spree Stripe gem](https://github.com/spree/spree_stripe)
* [Devise](https://github.com/heartcombo/devise) for authentication
* [Sidekiq](https://github.com/mperham/sidekiq) for background jobs
* PostgreSQL as a database
* Redis for caching
* (Optional) [Sentry](https://sentry.io) for error/performance monitoring
* (Optional) [SendGrid](https://sendgrid.com) for transactional email notifications

You don't need to install additional tools or libraries to start developing with Spree Starter. Everything is already set up for you.

## Local Installation

You can follow the official [Spree Quickstart guide](https://spreecommerce.org/docs/developer/getting-started/quickstart) to setup your Spree application using the Spree starter.

OR these notes I've taken 

1. Install required dependencies 
On MacOS you can install the dependencies using Homebrew package manager: 
```
brew install vips libpq
```
On debian-based systems you can install the dependencies using the package manager:
``` 
sudo apt-get install libvips-dev libpq-dev
```
2. Install Ruby
Spree is based on Ruby and Rails, hence you need to install Ruby language.
Install rbenv (ruby version manager):
```
curl -fsSL https://rbenv.org/install.sh | bash
```
And now install Ruby 3.3:
Before attempting to install Ruby, check that your build environment has the necessary tools and libraries.(https://github.com/rbenv/ruby-build/wiki#suggested-build-environment).
```
rbenv install 3.3.0 && rbenv global 3.3.0
```

3. Install [Docker Desktop](https://docs.docker.com/get-docker)
4. Start Docker Compose services:
Note: Docker needs to be running before running the setup commands.
```
docker compose up -d
```
This will start the PostgreSQL database which is required for Spree to work. You can also use other databases like MySQL.

5. Run setup commands:
```
bin/setup
```
This will install the necessary gems, run the database migrations and seed the database with some sample data.

6. And finally start the development server with:
```
bin/dev
```
This will start the development server on http://localhost:3000.

7. To add sample data to your store, run:
```
bin/rake spree_sample:load
```
Note: The sample data set is missing images due to copyright concerns. You can upload some manually into a local instance using free images form Unsplash 

## Deployment

Please follow [Deployment guide](https://spreecommerce.org/docs/developer/deployment/render) to quickly deploy your production-ready Spree application.

## Running unit tests

This repository is pre-configured for running tests of your Spree customizations. To run the full test suite, just type:

```bash
bundle exec rspec
```

## Troubleshooting

### libvips error

If you encounter an error like the following:

```bash
LoadError: Could not open library 'vips.so.42'
```

Please check that libvips is installed with `vips -v`, and if it is not installed, follow [installation instructions here](https://www.libvips.org/install.html).
