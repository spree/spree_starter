# This migration comes from spree (originally 20181024100754)
class AddDeletedAtToSpreeCreditCards < ActiveRecord::Migration[5.2]
  def change
    add_column :spree_credit_cards, :deleted_at, :datetime
    add_index :spree_credit_cards, :deleted_at
  end
end
