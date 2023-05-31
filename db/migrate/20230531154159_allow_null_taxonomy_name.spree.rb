# This migration comes from spree (originally 20230117120430)
class AllowNullTaxonomyName < ActiveRecord::Migration[6.1]
  def change
    change_column_null :spree_taxonomies, :name, true
  end
end
