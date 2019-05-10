require 'flipper/adapters/active_record'
require 'flipper/adapters/redis_cache'

Flipper.configure do |config|
  config.default do
    redis = Redis.new
    active_record_adapter = Flipper::Adapters::ActiveRecord.new
    adapter = Flipper::Adapters::RedisCache.new(active_record_adapter, redis, 4800)
    Flipper.new(adapter)
  end
end
