Raven.configure do |config|
  config.async = lambda { |event| SentryJob.perform_later(event) }
  config.environments = %w[ production ]
  config.excluded_exceptions += ['ActionController::RoutingError', 'ActiveRecord::RecordNotFound']
  config.sanitize_fields = Rails.application.config.filter_parameters.map(&:to_s)
end
