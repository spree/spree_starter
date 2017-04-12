module Spree
  class ErrorsController < BaseController
    include Gaffe::Errors

    before_action :set_request_params, only: :show

    layout 'application_classic'

    private

    def set_request_params
      request.params['controller'] = controller_name
      request.params['action'] = action_name
    end
  end
end
