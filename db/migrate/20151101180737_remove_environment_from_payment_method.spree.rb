# This migration comes from spree (originally 20150121022521)
class RemoveEnvironmentFromPaymentMethod < ActiveRecord::Migration
  def up
    Spree::PaymentMethod.where('environment != ?', Rails.env).update_all(active: false)
    remove_column :spree_payment_methods, :environment
  end
end
