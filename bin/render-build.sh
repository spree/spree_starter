#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
bundle exec rails assets:precompile
bundle exec rails assets:clean
bundle exec rails db:migrate
bundle exec rails db:seed
bundle exec rake spree_sample:load
bundle exec rails javascript:install:esbuild
bundle exec rails turbo:install
bundle exec rails g spree:frontend:install
yarn build
