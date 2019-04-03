# fix for Redis config on Heroku
if ENV['REDISCLOUD_URL'].present? && ENV['REDIS_URL'].blank?
  ENV['REDIS_URL'] = ENV['REDISCLOUD_URL']
end
