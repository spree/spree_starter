# This migration comes from spree (originally 20140318191500)
class CreateSpreeTaxonsPromotionRules < ActiveRecord::Migration
  def change
    create_table :spree_taxons_promotion_rules do |t|
      t.references :taxon, index: true
      t.references :promotion_rule, index: true
    end
  end
end
