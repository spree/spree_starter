# This migration comes from spree (originally 20130809164245)
class AddAdminNameColumnToSpreeShippingMethods < ActiveRecord::Migration[4.2]
  def change
    add_column :spree_shipping_methods, :admin_name, :string
  end
end
