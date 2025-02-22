module Spree
  class UserPasswordsController < ::Devise::PasswordsController
    helper_method :title, :password_path
    layout 'spree/storefront'

    include Spree::Core::ControllerHelpers::Order
    include Spree::ThemeConcern

    helper 'spree/wishlist'
    helper 'spree/currency'
    helper 'spree/locale'
    helper 'spree/storefront_locale'

    def create
      self.resource = resource_class.send_reset_password_instructions(resource_params)
      yield resource if block_given?

      set_flash_message(:notice, :send_instructions) if is_navigational_format?
      # Don't not show error message that the email was not found
      respond_with({}, location: after_sending_reset_password_instructions_path_for(resource_name))
    end

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
