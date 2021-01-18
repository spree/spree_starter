# This migration comes from spree (originally 20210117112551)
class RemoveStoreIdFromSpreePaymentMethods < ActiveRecord::Migration[6.0]
  def change
    remove_column :spree_payment_methods, :store_id, :integer
  end
end
