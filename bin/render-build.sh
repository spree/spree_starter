#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
bundle exec rails assets:clean
bundle exec rails db:migrate
bundle exec rails db:seed
bundle exec rake spree_sample:load

# Setup commands specific to legacy frontend
yes | bundle exec rails javascript:install:esbuild
yes | bundle exec rails turbo:install
yes | bundle exec rails g spree:frontend:install
yarn build

# asset precompile must be run after installing turbo, etc.
bundle exec rails assets:precompile
