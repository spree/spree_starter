source 'https://rubygems.org'

ruby '2.7.2'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 6.0.3'
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
  gem 'dotenv-rails', '~> 2.1', '>= 2.1.1'
  # foreman doesn't allow us to update dotenv-rails which is required for Rails 6
  # for now please use gem install foreman
  # gem 'foreman', '~> 0.85'

  gem 'pry'
  gem 'pry-remote'
  gem 'pry-stack_explorer'
  gem 'pry-nav'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'

  # testing
  gem 'rspec-rails', '~> 4.0.0'
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
  gem 'web-console', '~> 4.0'

  gem 'letter_opener'
end

group :test do
  gem 'capybara'
  gem 'capybara-screenshot'
  gem 'launchy'
  gem 'vcr'
  gem 'webmock'
  gem 'codeclimate-test-reporter', require: nil

  gem 'webdrivers'
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
gem 'react-rails', '~> 2.6.0'
gem 'webpacker', '>= 4.0.x'
gem 'js-routes'
gem 'i18n-js', '>= 3.0.0.rc11'

# Spree gems
gem 'spree', '~> 4.1'
gem 'spree_gateway', '~> 3.7'
gem 'spree_auth_devise', '~> 4.1'
gem 'spree_analytics_trackers'

# Sentry Client
gem 'sentry-raven'

# Scout Client
gem 'scout_apm'

# feature toggle
gem 'flipper'
gem 'flipper-active_record'
gem 'flipper-redis'
gem 'flipper-ui'

# better logging
gem 'lograge'
gem 'remote_syslog_logger'
