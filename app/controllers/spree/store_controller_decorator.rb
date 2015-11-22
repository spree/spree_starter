Spree::StoreController.class_eval do

  skip_before_action :set_current_order, only: [:cart_link, :account_link, :authenticity_token]

  def account_link
    render json: {id: 1, email: 'test@gmail.com'}
    # fresh_when spree_current_user
  end

  def cart_link
    render json: simple_current_order, serializer: Spree::OrderSerializer, root: false
    fresh_when simple_current_order
  end

  def authenticity_token
    render text: form_authenticity_token
  end

end
