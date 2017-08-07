# This migration comes from spree_auth (originally 20120605211305)
class MakeUsersEmailIndexUnique < ActiveRecord::Migration[4.2]
  def up
    add_index "spree_users", ["email"], :name => "email_idx_unique", :unique => true
  end

  def down
    remove_index "spree_users", :name => "email_idx_unique"
  end
end
