# This migration comes from spree (originally 20200513154939)
class AddShowPropertyToSpreeProductProperties < ActiveRecord::Migration[6.0]
  def change
    add_column :spree_product_properties, :show_property, :boolean, default: true unless column_exists?(:spree_product_properties, :show_property)
  end
end
