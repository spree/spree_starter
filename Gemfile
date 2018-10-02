source 'https://rubygems.org'

ruby '2.5.1'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '5.2.1'
# Use postgresql as the database for Active Record
gem 'pg', '~> 0.18'
# Use SCSS for stylesheets
gem 'sass-rails'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier'

gem 'mini_racer'

gem 'bootsnap', require: false

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Puma as the app server
gem 'puma'

group :development, :test do
  gem 'foreman'

  gem 'pry'
  gem 'pry-remote'
  gem 'pry-stack_explorer'
  gem 'pry-nav'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'awesome_print'

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
end

# Access an IRB console on exception pages or by using <%= console %> in views
gem 'web-console', '~> 3.0', group: :development

group :test do
  gem 'capybara'
  gem 'capybara-screenshot'
  gem 'launchy'
  gem 'vcr'
  gem 'webmock'
  gem 'codeclimate-test-reporter', require: nil
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

# rollbar
gem 'rollbar'

# newrelic
gem 'newrelic_rpm'

# sidekiq
gem 'sidekiq'

# front end
gem 'react-rails', '~> 2.4.7'
gem 'webpacker', '~> 3.5'
gem 'js-routes'
gem 'i18n-js', '>= 3.0.0.rc11'

# Spree gems
gem 'spree', '~> 3.7.0.alpha', github: 'spree/spree', branch: 'master'
gem 'spree_gateway'
gem 'spree_auth_devise'
gem 'spree_analytics_trackers', github: 'spree-contrib/spree_analytics_trackers'
