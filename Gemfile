source 'https://rubygems.org'

ruby '2.2.3'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.4'
# Use postgresql as the database for Active Record
gem 'pg'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# ActiveModelSerializers
gem 'active_model_serializers'

# Use Puma as the app server
gem 'puma'

group :development, :test do
  gem 'pry'
  gem 'pry-remote'
  gem 'pry-stack_explorer'
  gem 'pry-nav'
  gem 'better_errors'
  gem 'binding_of_caller'

  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'

  # testing
  gem 'rspec-rails', '~> 3.0'
  gem 'rspec-activemodel-mocks'
  gem 'rspec-activejob'
  gem 'nyan-cat-formatter'
  gem 'shoulda-matchers', require: false
  gem 'factory_girl'
  gem 'factory_girl_rails'
  gem 'database_cleaner'
  gem 'ffaker'
  gem 'quiet_assets'
end

group :test do
  gem 'vcr'
  gem 'webmock'
  gem 'codeclimate-test-reporter', require: nil
end

# Heroku fix
group :production, :staging do
  gem 'rails_12factor'
end

# file uploades & assets
gem 'paperclip' # Image Rescaling for aws
gem 'aws-sdk', '< 2.0'
gem 'fog-aws'
gem 'asset_sync'

# caching
gem 'dalli' # memcache
gem 'rack-cache' # http caching
gem 'kgio' # faster kgio IO system

# rollbar
gem 'rollbar', '~> 1.5.0'

# newrelic
gem 'newrelic_rpm'

# sidekiq
gem 'sidekiq'
gem 'sinatra', require: nil

# front end
gem 'browserify-rails'
gem 'haml'
gem 'react-rails', '~> 1.4.0'

# Spree gems
gem 'spree', github: 'spree/spree', branch: '3-0-stable'
gem 'spree_gateway', github: 'spree/spree_gateway', branch: '3-0-stable'
gem 'spree_auth_devise', github: 'spree/spree_auth_devise', branch: '3-0-stable'
