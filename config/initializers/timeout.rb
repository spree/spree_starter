Rack::Timeout.timeout = 25 if Rails.env.production? || Rails.env.staging?
