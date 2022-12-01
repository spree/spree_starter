Devise.secret_key = Rails.application.secrets.secret_key_base

Rails.application.config.after_initialize do
  if defined?(Spree::Auth)
    Spree::Auth::Config.signout_after_password_change = false
  end
end
