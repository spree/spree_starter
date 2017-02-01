# This migration comes from spree (originally 20130917024658)
class RemovePromotionsEventNameField < ActiveRecord::Migration[4.2]
  def change
    remove_column :spree_promotions, :event_name, :string
  end
end
