# This migration comes from spree (originally 20140927193717)
class DefaultPreTaxAmountShouldBeZero < ActiveRecord::Migration
  def change
    change_column :spree_line_items, :pre_tax_amount, :decimal, precision: 8, scale: 2, default: 0
    change_column :spree_shipments, :pre_tax_amount, :decimal, precision: 8, scale: 2, default: 0
  end
end
