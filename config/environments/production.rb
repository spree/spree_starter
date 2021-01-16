Rails.application.configure do
  # Verifies that versions and hashed value of the package contents in the project's package.json
  config.webpacker.check_yarn_integrity = false

  # Settings specified here will take precedence over those in config/application.rb.

  # Code is not reloaded between requests.
  config.cache_classes = true

  # Eager load code on boot. This eager loads most of Rails and
  # your application in memory, allowing both threaded web servers
  # and those relying on copy on write to perform better.
  # Rake tasks automatically ignore this option for performance.
  config.eager_load = true

  # Full error reports are disabled and caching is turned on.
  config.consider_all_requests_local       = false
  config.action_controller.perform_caching = true

  # Ensures that a master key has been made available in either ENV["RAILS_MASTER_KEY"]
  # or in config/master.key. This key is used to decrypt credentials (and other encrypted files).
  # config.require_master_key = true

  # Disable serving static files from the `/public` folder by default since
  # Apache or NGINX already handles this.
  config.public_file_server.enabled = ENV['RAILS_SERVE_STATIC_FILES'].present?
  config.public_file_server.headers = { 'Cache-Control' => 'public, max-age=31536000' }

  # Compress CSS using a preprocessor.
  # config.assets.css_compressor = :sass

  # Minimize JS code
  config.assets.js_compressor = :uglifier

  # Do not fallback to assets pipeline if a precompiled asset is missed.
  config.assets.compile = false

  # Enable serving of images, stylesheets, and JavaScripts from an asset server.
  # config.action_controller.asset_host = 'http://assets.example.com'

  # Specifies the header that your server uses for sending files.
  # config.action_dispatch.x_sendfile_header = 'X-Sendfile' # for Apache
  # config.action_dispatch.x_sendfile_header = 'X-Accel-Redirect' # for NGINX

  # Store uploaded files on the local file system (see config/storage.yml for options).
  if ENV['BUCKETEER_AWS_ACCESS_KEY_ID'].present? && ENV['BUCKETEER_AWS_SECRET_ACCESS_KEY'].present?
    config.active_storage.service = :amazon
  else
    config.active_storage.service = :local
  end

  # Mount Action Cable outside main process or domain.
  # config.action_cable.mount_path = nil
  # config.action_cable.url = 'wss://example.com/cable'
  # config.action_cable.allowed_request_origins = [ 'http://example.com', /http:\/\/example.*/ ]

  # Force all access to the app over SSL, use Strict-Transport-Security, and use secure cookies.
  # config.force_ssl = true

  # Use the lowest log level to ensure availability of diagnostic information
  # when problems arise.
  config.log_level = :info

  # Prepend all log lines with the following tags.
  config.log_tags = [ :request_id ]

  # Use a different cache store in production.
  if ENV['MEMCACHEDCLOUD_SERVERS'].present?
    memcached_config = {
      username: ENV['MEMCACHEDCLOUD_USERNAME'],
      password: ENV['MEMCACHEDCLOUD_PASSWORD'],
      value_max_bytes: 104_857_60,
      compress: false,
      pool_size: ENV.fetch('MEMCACHED_POOL_SIZE', 5).to_i,
      expires_in: 1.week
    }

    config.cache_store = :mem_cache_store, ENV['MEMCACHEDCLOUD_SERVERS'].split(','), memcached_config

    client = Dalli::Client.new(ENV['MEMCACHEDCLOUD_SERVERS'].split(','), memcached_config)

    config.action_dispatch.rack_cache = {
      metastore: client,
      entitystore: client,
      verbose: false
    }
  end

  heroku_app_url = ENV['HEROKU_APP_NAME'].present? ? "#{ENV['HEROKU_APP_NAME']}.herokuapp.com" : nil
  app_host = ENV.fetch('APP_DOMAIN', heroku_app_url)
  cdn_host = ENV.fetch('CDN', heroku_app_url)

  # Action mailer con host production
  if app_host.present?
    routes.default_url_options = config.action_mailer.default_url_options = { host: "https://#{app_host}" }
  end

  # Enable serving of images, stylesheets, and JavaScripts from an asset server.
  if cdn_host.present?
    config.action_controller.asset_host = config.action_mailer.asset_host = "https://#{cdn_host}"
  end

  # Use a real queuing backend for Active Job (and separate queues per environment).
  # config.active_job.queue_adapter     = :resque
  # config.active_job.queue_name_prefix = "spark_starter_kit_production"

  config.action_mailer.perform_caching = false

  # Ignore bad email addresses and do not raise email delivery errors.
  # Set this to true and configure the email server for immediate delivery to raise delivery errors.
  # config.action_mailer.raise_delivery_errors = false

  # Enable locale fallbacks for I18n (makes lookups for any locale fall back to
  # the I18n.default_locale when a translation cannot be found).
  config.i18n.fallbacks = true

  # Send deprecation notices to registered listeners.
  config.active_support.deprecation = :notify

  # Use default logging formatter so that PID and timestamp are not suppressed.
  config.log_formatter = ::Logger::Formatter.new

  # Use a different logger for distributed setups.
  # require 'syslog/logger'
  # config.logger = ActiveSupport::TaggedLogging.new(Syslog::Logger.new 'app-name')

  if ENV["RAILS_LOG_TO_STDOUT"].present?
    logger           = ActiveSupport::Logger.new(STDOUT)
    logger.formatter = config.log_formatter
    config.logger    = ActiveSupport::TaggedLogging.new(logger)
  end

  # papertrail config
  if ENV['PAPERTRAIL_HOSTNAME'].present? && ENV['PAPERTRAIL_REMOTE_PORT'].present?
    remote_syslog_logger = RemoteSyslogLogger.new(ENV['PAPERTRAIL_HOSTNAME'],
                                                  ENV['PAPERTRAIL_REMOTE_PORT'],
                                                  program: "spree-#{ENV['RAILS_ENV']}")
    config.logger = ActiveSupport::TaggedLogging.new remote_syslog_logger
  end

  # sendgrid mail
  if ENV['SENDGRID_API_KEY'].present?
    config.action_mailer.delivery_method = :sendgrid_actionmailer
    config.action_mailer.sendgrid_actionmailer_settings = {
      api_key: ENV['SENDGRID_API_KEY'],
      raise_delivery_errors: true
    }
  end

  # fix for fonts CORS issues with CloudFront
  config.font_assets.origin = '*'
  # Do not dump schema after migrations.
  config.active_record.dump_schema_after_migration = false

  # Inserts middleware to perform automatic connection switching.
  # The `database_selector` hash is used to pass options to the DatabaseSelector
  # middleware. The `delay` is used to determine how long to wait after a write
  # to send a subsequent read to the primary.
  #
  # The `database_resolver` class is used by the middleware to determine which
  # database is appropriate to use based on the time delay.
  #
  # The `database_resolver_context` class is used by the middleware to set
  # timestamps for the last write to the primary. The resolver uses the context
  # class timestamps to determine how long to wait before reading from the
  # replica.
  #
  # By default Rails will store a last write timestamp in the session. The
  # DatabaseSelector middleware is designed as such you can define your own
  # strategy for connection switching and pass that into the middleware through
  # these configuration options.
  # config.active_record.database_selector = { delay: 2.seconds }
  # config.active_record.database_resolver = ActiveRecord::Middleware::DatabaseSelector::Resolver
  # config.active_record.database_resolver_context = ActiveRecord::Middleware::DatabaseSelector::Resolver::Session
end
