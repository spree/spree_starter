# This migration comes from spree_multi_vendor (originally 20170413094447)
class CreateSpreeVendorUsers < SpreeExtension::Migration[4.2]
  def change
    create_table :spree_vendor_users do |t|
      t.references :vendor
      t.references :user
    end
    add_index :spree_vendor_users, [:vendor_id, :user_id], unique: true
    add_index :spree_vendor_users, :vendor_id
    add_index :spree_vendor_users, :user_id
  end
end
