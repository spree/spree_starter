#!/bin/sh
set -e
bundle exec rails db:migrate
exec "$@"
