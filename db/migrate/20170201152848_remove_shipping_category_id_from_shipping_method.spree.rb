# This migration comes from spree (originally 20130301162745)
class RemoveShippingCategoryIdFromShippingMethod < ActiveRecord::Migration[4.2]
  def change
    remove_column :spree_shipping_methods, :shipping_category_id
  end
end
