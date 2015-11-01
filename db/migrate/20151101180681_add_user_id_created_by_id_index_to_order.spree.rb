# This migration comes from spree (originally 20140415041315)
class AddUserIdCreatedByIdIndexToOrder < ActiveRecord::Migration
  def change
    add_index :spree_orders, [:user_id, :created_by_id]
  end
end
