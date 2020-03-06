# This migration comes from spree (originally 20200212144523)
class AddHideFromNavToTaxons < ActiveRecord::Migration[6.0]
  def change
    add_column :spree_taxons, :hide_from_nav, :boolean, default: false, index: true
  end
end
