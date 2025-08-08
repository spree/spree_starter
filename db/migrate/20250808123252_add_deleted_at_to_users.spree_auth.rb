# This migration comes from spree_auth (originally 20140904000425)
class AddDeletedAtToUsers < SpreeExtension::Migration[4.2]
  def change
    add_column :spree_users, :deleted_at, :datetime
    add_index :spree_users, :deleted_at
  end
end
