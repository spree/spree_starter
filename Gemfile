source 'https://rubygems.org'

ruby '2.5.3'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2.1'
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
  gem 'foreman'

  gem 'pry'
  gem 'pry-remote'
  gem 'pry-stack_explorer'
  gem 'pry-nav'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'

  # testing
  gem 'rspec-rails', '~> 3.8.0'
  gem 'rspec-activemodel-mocks'
  gem 'rspec-activejob'
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

  gem 'dotenv-rails'
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
gem 'react-rails', '~> 2.4.7'
gem 'webpacker', '~> 3.5'
gem 'js-routes'
gem 'i18n-js', '>= 3.0.0.rc11'

# Spree gems
gem 'spree', '~> 3.7.0.rc1', github: 'spark-solutions/spree', branch: 'fix/admin-privilages-fixes'
gem 'spree_gateway'
gem 'spree_auth_devise'
gem 'spree_analytics_trackers', github: 'spree-contrib/spree_analytics_trackers'
# gem 'spree_multi_vendor', github: 'spree-contrib/spree_multi_vendor'
gem 'spree_multi_vendor', github: 'spark-solutions/spree_multi_vendor', branch: 'feature/oms'

# Sentry Client
gem 'sentry-raven'

# Scout Client
gem 'scout_apm'
