# This migration comes from spree (originally 20220106230929)
class AddBuyerNoteToSpreeOrders < ActiveRecord::Migration[5.2]
  def change
    add_column :spree_orders, :buyer_note, :text
  end
end
