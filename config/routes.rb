Rails.application.routes.draw do
  # Spree routes
  mount Spree::Core::Engine, at: '/'

  # sidekiq web UI
  require 'sidekiq/web'
  Sidekiq::Web.use Rack::Auth::Basic do |username, password|
    username == Rails.application.secrets.sidekiq_username &&
      password == Rails.application.secrets.sidekiq_password
  end
  mount Sidekiq::Web, at: '/sidekiq'

  # flipper web UI
  flipper_app = Flipper::UI.app(Flipper.instance) do |builder|
    builder.use Rack::Auth::Basic do |username, password|
      username == Rails.application.secrets.flipper_username &&
        password == Rails.application.secrets.flipper_password
    end
  end
  mount flipper_app, at: '/flipper'
end
