module Spree
  class UserRegistrationsController < ::Devise::RegistrationsController
    helper_method :title
    layout 'spree/storefront'

    include Spree::Core::ControllerHelpers::Order
    include Spree::LocaleUrls
    include Spree::ThemeConcern
    include Spree::AnalyticsHelper
    include Spree::IntegrationsHelper if defined?(Spree::IntegrationsHelper)

    helper 'spree/wishlist'
    helper 'spree/currency'
    helper 'spree/locale'
    helper 'spree/storefront_locale'
    helper 'spree/integrations' if defined?(Spree::IntegrationsHelper)

    protected

    def translation_scope
      'devise.user_registrations'
    end

    private

    def title
      Spree.t(:sign_up)
    end
  end
end
