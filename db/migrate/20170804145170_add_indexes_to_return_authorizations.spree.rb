# This migration comes from spree (originally 20170331115246)
class AddIndexesToReturnAuthorizations < ActiveRecord::Migration[5.0]
  def change
    add_index :spree_return_authorizations, :order_id
    add_index :spree_return_authorizations, :stock_location_id
  end
end
