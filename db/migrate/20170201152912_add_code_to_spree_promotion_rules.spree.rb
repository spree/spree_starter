# This migration comes from spree (originally 20130903183026)
class AddCodeToSpreePromotionRules < ActiveRecord::Migration[4.2]
  def change
    add_column :spree_promotion_rules, :code, :string
  end
end
