# This migration comes from spree (originally 20131218054603)
class AddItemCountToSpreeOrders < ActiveRecord::Migration[4.2]
  def change
    add_column :spree_orders, :item_count, :integer, default: 0
  end
end
