Devise.secret_key = Rails.application.secrets.secret_key_base
if defined?(Spree::Auth)
  Spree::Auth::Config.signout_after_password_change = false
end
