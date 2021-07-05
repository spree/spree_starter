# This migration comes from spree_multi_domain (originally 20200901154741)
class AddUniqueIndexOnStoreProducts < ActiveRecord::Migration[6.0]
  def change
    add_index :spree_products_stores, [:product_id, :store_id], unique: true
  end
end
