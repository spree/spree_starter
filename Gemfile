source 'https://rubygems.org'

ruby '2.6.3'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2.3'
# Use postgresql as the database for Active Record
gem 'pg'
# Use SCSS for stylesheets
gem 'sass-rails'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier'

# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails'

gem 'mini_racer'

gem 'bootsnap', require: false

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Puma as the app server
gem 'puma'

gem 'awesome_print'

group :development, :test do
  gem 'dotenv-rails'
  gem 'foreman'

  gem 'pry'
  gem 'pry-remote'
  gem 'pry-stack_explorer'
  gem 'pry-nav'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'

  # testing
  gem 'rspec-rails', '~> 3.8'
  gem 'rspec_junit_formatter'
  gem 'rspec-activemodel-mocks'
  gem 'rspec-activejob'
  gem 'jsonapi-rspec'
  gem 'spring-commands-rspec'
  gem 'factory_bot'
  gem 'factory_bot_rails'
  gem 'database_cleaner'
  gem 'ffaker'

  gem 'listen'
  gem 'rubocop', require: false

  # monitoring
  gem 'bullet'
  gem 'rack-mini-profiler', require: false
  gem 'flamegraph'
  gem 'stackprof'
  gem 'memory_profiler'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 3.0'

  gem 'letter_opener'
end

group :test do
  gem 'capybara'
  gem 'capybara-screenshot'
  gem 'launchy'
  gem 'vcr'
  gem 'webmock'
  gem 'codeclimate-test-reporter', require: nil

  gem 'selenium-webdriver'
  gem 'chromedriver-helper'
end

# Heroku fix
group :production do
  gem 'rack-timeout'
  gem 'font_assets'
end

# file uploades & assets
gem 'aws-sdk-s3', require: false

# caching
gem 'dalli' # memcache
gem 'rack-cache' # http caching

# sidekiq
gem 'sidekiq'

# front end
gem 'react-rails', '~> 2.5.0'
gem 'webpacker', '>= 4.0.x'
gem 'js-routes'
gem 'i18n-js', '>= 3.0.0.rc11'

# Spree gems
gem 'spree', '~> 3.7.2', github: 'spark-solutions/spree', branch: '3-7-stable'
gem 'spree_gateway'
gem 'spree_auth_devise'
gem 'spree_analytics_trackers'
gem 'spree_homepage', github: 'spark-solutions/spree_homepage'

# Sentry Client
gem 'sentry-raven'

# Scout Client
gem 'scout_apm'

# feature toggle
gem 'flipper'
gem 'flipper-active_record'
gem 'flipper-redis'
gem 'flipper-ui'
