# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors, debug: ENV.fetch('RACK_CORS_DEBUG', false), logger: (-> { Rails.logger }) do
  allow do
    origins ENV.fetch('ALLOWED_ORIGIN_HOSTS', '*').split(',')

    resource '*',
      headers: :any,
      methods: %i[get post delete put patch options head],
      max_age: 0
  end
end

