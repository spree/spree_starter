module Spree
  module ApiFrontendFixConcern
    extend ActiveSupport::Concern
    included do
      before_action :prepare_user_and_roles_for_api_views
    end

    def prepare_user_and_roles_for_api_views
      @current_api_user = spree_current_user
      @current_user_roles = @current_api_user ? @current_api_user.spree_roles.pluck(:name) : []
    end
  end
end
