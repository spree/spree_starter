# This migration comes from spree (originally 20220718100948)
class ChangeTaxonNameNullToTrue < ActiveRecord::Migration[6.1]
  def change
    change_column_null :spree_taxons, :name, true
  end
end
