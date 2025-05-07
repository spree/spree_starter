module Spree
  class UserPasswordsController < ::Devise::PasswordsController
    helper_method :title, :password_path
    layout 'spree/storefront'

    include Spree::Core::ControllerHelpers::Order
    include Spree::LocaleUrls
    include Spree::ThemeConcern
    include Spree::IntegrationsHelper if defined?(Spree::IntegrationsHelper)

    helper 'spree/wishlist'
    helper 'spree/currency'
    helper 'spree/locale'
    helper 'spree/storefront_locale'
    helper 'spree/integrations' if defined?(Spree::IntegrationsHelper)

    protected

    def translation_scope
      'devise.user_passwords'
    end

    private

    def password_path(_resource_or_scope = nil)
      send("#{Spree.user_class.model_name.singular_route_key}_password_path")
    end

    def title
      Spree.t(:forgot_password)
    end
  end
end
