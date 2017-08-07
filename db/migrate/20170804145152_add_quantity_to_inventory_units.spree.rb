# This migration comes from spree (originally 20161125065505)
class AddQuantityToInventoryUnits < ActiveRecord::Migration[5.0]
  def change
    add_column :spree_inventory_units, :quantity, :integer, default: 1
  end
end
