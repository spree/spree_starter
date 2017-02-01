# This migration comes from spree (originally 20130328195253)
class AddSeoMetasToTaxons < ActiveRecord::Migration[4.2]
  def change
    change_table :spree_taxons do |t|
      t.string   :meta_title
      t.string   :meta_description
      t.string   :meta_keywords
    end
  end
end
