Sidekiq.strict_args!(:warn) # https://github.com/sidekiq/sidekiq/blob/main/docs/7.0-Upgrade.md#strict-arguments

Sidekiq.configure_server do |config|
  config.redis = { url: ENV.fetch('REDIS_URL', 'redis://localhost:6379/0') }
end
