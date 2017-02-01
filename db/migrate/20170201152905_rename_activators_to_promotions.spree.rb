# This migration comes from spree (originally 20130813232134)
class RenameActivatorsToPromotions < ActiveRecord::Migration[4.2]
  def change
    rename_table :spree_activators, :spree_promotions
  end
end
