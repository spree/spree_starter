if defined?(Sentry) && ENV['SENTRY_DSN'].present?
  Sentry.init do |config|
    config.dsn = ENV['SENTRY_DSN']
    config.breadcrumbs_logger = %i[active_support_logger http_logger]

    # Set tracesSampleRate to 1.0 to capture 100%
    # of transactions for performance monitoring.
    # We recommend adjusting this value in production
    config.traces_sample_rate = 0.5

    config.enabled_environments = %w[production staging]
    config.enabled_environments << 'development' if ENV.fetch('SENTRY_REPORT_ON_DEVELOPMENT', false).to_b

    config.release = "spree@#{ENV['RENDER_GIT_COMMIT']}" if ENV['RENDER_GIT_COMMIT'].present?

    config.excluded_exceptions = [
      'ActionController::RoutingError',
      'ActiveRecord::RecordNotFound',
      'Sidekiq::JobRetry::Skip',
      'Sidekiq::JobRetry::SilentRetry',
      'Aws::S3::Errors::NoSuchKey',
      'Aws::S3::Errors::NotFound'
    ]

    config.before_send = lambda do |event, _hint|
      filter_keys = [:password, :secret, :uid, :account_number, :site_id, :username, :identity, /\Acode\z/]
      filter = ActiveSupport::ParameterFilter.new(filter_keys)

      filter.filter(event.to_hash)
    end

    # Use native Rails error subscriber
    # https://guides.rubyonrails.org/error_reporting.html
    config.rails.register_error_subscriber = true
  end
end
