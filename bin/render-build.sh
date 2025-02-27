#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install --deployment
bin/rails assets:precompile
bin/rails assets:clean