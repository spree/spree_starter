source 'https://rubygems.org'

ruby '2.2.4'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.6'
# Use postgresql as the database for Active Record
gem 'pg'
# Use SCSS for stylesheets
gem 'sass-rails'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
gem 'therubyracer', platforms: :ruby

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# ActiveModelSerializers
gem 'active_model_serializers', github: 'rails-api/active_model_serializers'

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
  gem 'rspec-rails', '~> 3.0'
  gem 'rspec-activemodel-mocks'
  gem 'rspec-activejob'
  gem 'spring-commands-rspec'
  gem 'shoulda-matchers', require: false
  gem 'factory_girl'
  gem 'factory_girl_rails'
  gem 'database_cleaner'
  gem 'ffaker'
  gem 'quiet_assets'
  gem 'bullet'
end

# Access an IRB console on exception pages or by using <%= console %> in views
gem 'web-console', '~> 3.0', group: :development

group :test do
  gem 'capybara'
  gem 'capybara-screenshot'
  gem 'launchy'
  gem 'vcr'
  gem 'webmock'
  gem 'test_after_commit'
  gem 'codeclimate-test-reporter', require: nil
end

# Heroku fix
group :production, :staging do
  gem 'rails_12factor'
  gem 'rack-timeout'
  gem 'font_assets', github: 'masterexploder/font_assets'
end

# file uploades & assets
gem 'paperclip' # Image Rescaling for aws
gem 'aws-sdk', '< 2.0'
gem 'fog-aws'

# caching
gem 'dalli' # memcache
gem 'rack-cache' # http caching
gem 'kgio' # faster kgio IO system

# rollbar
gem 'rollbar'

# newrelic
gem 'newrelic_rpm'

# sidekiq
gem 'sidekiq'
gem 'sinatra', require: nil

# front end
gem 'haml'
gem 'react-rails'
gem 'js-routes'
gem 'i18n-js', '>= 3.0.0.rc11'

# Spree gems
gem 'spree', '~> 3.1.0'
gem 'spree_gateway', '~> 3.1.0'
gem 'spree_auth_devise', '~> 3.1.0'
