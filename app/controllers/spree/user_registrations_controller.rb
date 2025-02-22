module Spree
  class UserRegistrationsController < ::Devise::RegistrationsController
    helper_method :title
    layout 'spree/storefront'

    include Spree::Core::ControllerHelpers::Order
    include Spree::ThemeConcern
    include Spree::AnalyticsHelper

    helper 'spree/wishlist'
    helper 'spree/currency'
    helper 'spree/locale'
    helper 'spree/storefront_locale'

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
