# This migration comes from spree_auth (originally 20101214150824)
class ConvertUserRememberField < SpreeExtension::Migration[4.2]
  def up
    remove_column :spree_users, :remember_created_at
    add_column :spree_users, :remember_created_at, :datetime
  end

  def down
    remove_column :spree_users, :remember_created_at
    add_column :spree_users, :remember_created_at, :string
  end
end
