Spree::StoreController.class_eval do
  layout 'application_classic'

  skip_before_action :set_current_order, only: [:cart_link, :account_link,
                                                :authenticity_token]

  def account_link
    render json: spree_current_user || Spree::User.new
    fresh_when spree_current_user
  end

  def cart_link
    render json: simple_current_order
    fresh_when simple_current_order
  end

  def authenticity_token
    render json: { authenticityToken: form_authenticity_token }
  end
end
