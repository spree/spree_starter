# This migration comes from spree_multi_vendor (originally 20190312130754)
class CreateSpreeOrderCommissions < SpreeExtension::Migration[4.2]
  def change
    create_table :spree_order_commissions do |t|
      t.references :order
      t.references :vendor
      t.float :amount

      t.timestamps
    end
    add_index :spree_order_commissions, [:order_id, :vendor_id], unique: true
    add_index :spree_order_commissions, :order_id
    add_index :spree_order_commissions, :vendor_id
  end
end
