class AddRetinaDimensionsToSpreeAssets < ActiveRecord::Migration
  def change
    add_column :spree_assets, :retina_dimensions, :text
  end
end
