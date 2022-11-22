#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
bundle exec rails assets:precompile
bundle exec rails assets:clean
bundle exec rails db:migrate
yes | bundle exec rails javascript:install:esbuild
yes | bundle exec rails turbo:install
yes | bundle exec rails g spree:frontend:install
yarn build
