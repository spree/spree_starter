# This migration comes from spree (originally 20131120234456)
class AddUpdatedAtToVariants < ActiveRecord::Migration[4.2]
  def change
    add_column :spree_variants, :updated_at, :datetime
  end
end
