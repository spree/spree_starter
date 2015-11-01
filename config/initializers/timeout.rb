if Rails.env.production? || Rails.env.staging?
  Rack::Timeout.timeout = 25
end
