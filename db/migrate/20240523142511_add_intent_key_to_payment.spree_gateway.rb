# This migration comes from spree_gateway (originally 20200422114908)
class AddIntentKeyToPayment < ActiveRecord::Migration[5.2]
  def change
    add_column :spree_payments, :intent_client_key, :string
  end
end
