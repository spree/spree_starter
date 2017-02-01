# This migration comes from spree (originally 20130915032339)
class AddDeletedAtToSpreeStockItems < ActiveRecord::Migration[4.2]
  def change
    add_column :spree_stock_items, :deleted_at, :datetime
  end
end
