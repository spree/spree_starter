# This migration comes from spree_multi_domain (originally 20130412212659)
class AddSpreePromotionRulesStores < SpreeExtension::Migration[4.2]
  def change
    create_table :spree_promotion_rules_stores, :id => false do |t|
      t.references :promotion_rule
      t.references :store
    end
  end
end
