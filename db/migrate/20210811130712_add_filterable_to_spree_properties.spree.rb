# This migration comes from spree (originally 20201023152810)
class AddFilterableToSpreeProperties < ActiveRecord::Migration[5.2]
  def change
    unless column_exists?(:spree_properties, :filterable)
      add_column :spree_properties, :filterable, :boolean, default: false, null: false
      add_index :spree_properties, :filterable
    end
  end
end
