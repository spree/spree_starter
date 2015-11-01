Rails.application.routes.draw do

  # Spree routes
  mount Spree::Core::Engine, at: '/'

  Spree::Core::Engine.routes.draw do

    get '/account_link' => 'store#account_link'
    get '/authenticity_token' => 'store#authenticity_token'

  end

  # sidekiq web UI
  require 'sidekiq/web'
  Sidekiq::Web.use Rack::Auth::Basic do |username, password|
    username == Rails.application.secrets.sidekiq_username &&
        password == Rails.application.secrets.sidekiq_password
  end
  mount Sidekiq::Web, at: '/sidekiq'

end
