# This migration comes from spree (originally 20130318151756)
class AddSourceAndDestinationToStockMovements < ActiveRecord::Migration[4.2]
  def change
    change_table :spree_stock_movements do |t|
      t.references :source, polymorphic: true
      t.references :destination, polymorphic: true
    end
  end
end
