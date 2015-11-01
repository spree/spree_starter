# This migration comes from spree (originally 20140924164824)
class AddCodeToSpreeTaxCategories < ActiveRecord::Migration
  def change
    add_column :spree_tax_categories, :tax_code, :string
  end
end
