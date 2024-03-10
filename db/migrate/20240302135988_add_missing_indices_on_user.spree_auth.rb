# This migration comes from spree_auth (originally 20150416152553)
class AddMissingIndicesOnUser < SpreeExtension::Migration[4.2]
  def change
    unless index_exists?(:spree_users, :bill_address_id)
      add_index :spree_users, :bill_address_id
    end
    unless index_exists?(:spree_users, :ship_address_id)
      add_index :spree_users, :ship_address_id
    end
  end
end
