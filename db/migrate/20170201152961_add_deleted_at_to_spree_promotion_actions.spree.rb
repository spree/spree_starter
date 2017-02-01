# This migration comes from spree (originally 20140609201656)
class AddDeletedAtToSpreePromotionActions < ActiveRecord::Migration[4.2]
  def change
    add_column :spree_promotion_actions, :deleted_at, :datetime
    add_index :spree_promotion_actions, :deleted_at
  end
end
