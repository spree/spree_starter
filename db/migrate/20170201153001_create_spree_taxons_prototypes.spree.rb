# This migration comes from spree (originally 20141012083513)
class CreateSpreeTaxonsPrototypes < ActiveRecord::Migration[4.2]
  def change
    create_table :spree_taxons_prototypes do |t|
      t.belongs_to :taxon, index: true
      t.belongs_to :prototype, index: true
    end
  end
end
