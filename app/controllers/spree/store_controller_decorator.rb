Spree::StoreController.class_eval do
  layout 'application_classic'

  helper Spree::Api::ApiHelpers
  include Spree::ApiFrontendFixConcern

  skip_before_action :set_current_order, only: [:cart_link, :account_link,
                                                :authenticity_token]

  def account_link
    render json: spree_current_user || Spree::User.new
    fresh_when spree_current_user
  end

  # for consistency reasons we want to use the same order json format
  # everywhere in the application
  def cart_link
    @order = simple_current_order
    render 'spree/api/v1/orders/show', layout: false
    fresh_when @order
  end

  def authenticity_token
    render json: { authenticity_token: form_authenticity_token }
  end
end
