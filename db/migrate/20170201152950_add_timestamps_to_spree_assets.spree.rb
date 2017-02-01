# This migration comes from spree (originally 20140315053743)
class AddTimestampsToSpreeAssets < ActiveRecord::Migration[4.2]
  def change
    add_column :spree_assets, :created_at, :datetime
    add_column :spree_assets, :updated_at, :datetime
  end
end
