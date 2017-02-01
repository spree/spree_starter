# This migration comes from spree (originally 20140710190048)
class DropReturnAuthorizationAmount < ActiveRecord::Migration[4.2]
  def change
    remove_column :spree_return_authorizations, :amount
  end
end
