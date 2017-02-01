# This migration comes from spree (originally 20141002191113)
class AddCodeToSpreeShippingMethods < ActiveRecord::Migration[4.2]
  def change
    add_column :spree_shipping_methods, :code, :string
  end
end
