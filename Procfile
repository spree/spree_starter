release: bin/rails db:migrate
web: bundle exec puma -C config/puma.rb
worker: bin/rake solid_queue:start
cache: bin/rails cache:clear
