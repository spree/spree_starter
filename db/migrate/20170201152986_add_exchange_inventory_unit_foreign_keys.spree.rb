# This migration comes from spree (originally 20140729133613)
class AddExchangeInventoryUnitForeignKeys < ActiveRecord::Migration[4.2]
  def change
    add_column :spree_return_items, :exchange_inventory_unit_id, :integer

    add_index :spree_return_items, :exchange_inventory_unit_id
  end
end
