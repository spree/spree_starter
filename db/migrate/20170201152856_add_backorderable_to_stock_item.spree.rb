# This migration comes from spree (originally 20130306195650)
class AddBackorderableToStockItem < ActiveRecord::Migration[4.2]
  def change
    add_column :spree_stock_items, :backorderable, :boolean, default: true
  end
end
