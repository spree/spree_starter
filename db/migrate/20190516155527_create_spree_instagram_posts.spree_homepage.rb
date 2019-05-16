# This migration comes from spree_homepage (originally 20190515182450)
class CreateSpreeInstagramPosts < ActiveRecord::Migration[5.2]
  def change
    create_table :spree_instagram_posts do |t|
      t.text :data
      t.string :instagram_id, index: true
      t.boolean :show, default: true
      t.references :spree_instagram_setting, null: false
      t.timestamps null: false
    end
  end
end
