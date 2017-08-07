# This migration comes from spree_gateway (originally 20130213222555)
class UpdateStripePaymentMethodType < ActiveRecord::Migration[4.2]
  def up
    Spree::PaymentMethod.where(:type => "Spree::Gateway::Stripe").update_all(:type => "Spree::Gateway::StripeGateway")
  end

  def down
    Spree::PaymentMethod.where(:type => "Spree::Gateway::StripeGateway").update_all(:type => "Spree::Gateway::Stripe")
  end
end
