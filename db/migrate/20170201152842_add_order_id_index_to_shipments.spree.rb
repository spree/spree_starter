# This migration comes from spree (originally 20130222032153)
class AddOrderIdIndexToShipments < ActiveRecord::Migration[4.2]
  def change
    add_index :spree_shipments, :order_id
  end
end
