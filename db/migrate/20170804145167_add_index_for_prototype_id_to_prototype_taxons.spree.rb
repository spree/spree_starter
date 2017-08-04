# This migration comes from spree (originally 20170331103334)
class AddIndexForPrototypeIdToPrototypeTaxons < ActiveRecord::Migration[5.0]
  def change
    add_index :spree_prototype_taxons, :prototype_id
  end
end
