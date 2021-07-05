# This migration comes from spree_multi_domain (originally 20200929135302)
class AddIdPrimaryKeyColumnToSpreeProductsStores < ActiveRecord::Migration[5.2]
  def change
    add_column :spree_products_stores, :id, :primary_key
  end
end
