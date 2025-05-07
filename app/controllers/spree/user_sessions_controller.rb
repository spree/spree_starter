module Spree
  class UserSessionsController < ::Devise::SessionsController
    helper_method :title
    helper_method :stored_location
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
      'devise.user_sessions'
    end

    private

    def title
      Spree.t(:login)
    end
  end
end
