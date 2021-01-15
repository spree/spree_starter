# This migration comes from spree (originally 20201013084504)
class AddSeoRobotsToSpreeStores < ActiveRecord::Migration[6.0]
  def change
    add_column :spree_stores, :seo_robots, :string unless column_exists?(:spree_stores, :seo_robots)
  end
end
