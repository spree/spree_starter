# This migration comes from spree (originally 20140211040159)
class AddPreTaxAmountToLineItemsAndShipments < ActiveRecord::Migration[4.2]
  def change
    add_column :spree_line_items, :pre_tax_amount, :decimal, precision: 8, scale: 2
    add_column :spree_shipments, :pre_tax_amount, :decimal, precision: 8, scale: 2
  end
end
