# This migration comes from spree (originally 20150118211500)
class CreateSpreeStoreCreditCategories < ActiveRecord::Migration[4.2]
  def change
    create_table :spree_store_credit_categories do |t|
      t.string :name
      t.timestamps null: false
    end
  end
end
