# This migration comes from spree (originally 20121124203911)
class AddPositionToTaxonomies < ActiveRecord::Migration[4.2]
  def change
  	add_column :spree_taxonomies, :position, :integer, default: 0
  end
end
