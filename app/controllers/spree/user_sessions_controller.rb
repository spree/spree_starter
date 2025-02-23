module Spree
  class UserSessionsController < ::Devise::SessionsController
    helper_method :title
    layout 'spree/storefront'

    include Spree::Core::ControllerHelpers::Order
    include Spree::ThemeConcern

    helper 'spree/wishlist'
    helper 'spree/currency'
    helper 'spree/locale'
    helper 'spree/storefront_locale'

    after_action :assign_user_to_guest_ahoy_visits, only: :create, if: :try_spree_current_user

    protected

    def translation_scope
      'devise.user_sessions'
    end

    private

    def title
      Spree.t(:login)
    end

    def assign_user_to_guest_ahoy_visits
      return unless try_spree_current_user
      return unless defined?(Spree::Visit) && defined?(Spree::Event)

      visits = Spree::Visit.where(visitor_token: ahoy.visitor_token)
      events = Spree::Event.where(visit: visits)

      visits.update_all(user_id: try_spree_current_user.id, updated_at: Time.current)
      events.update_all(user_id: try_spree_current_user.id, updated_at: Time.current)
    end
  end
end
