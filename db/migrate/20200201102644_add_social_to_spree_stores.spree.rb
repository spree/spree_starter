# This migration comes from spree (originally 20200102141311)
class AddSocialToSpreeStores < ActiveRecord::Migration[6.0]
  def change
    add_column :spree_stores, :facebook, :string
    add_column :spree_stores, :twitter, :string
    add_column :spree_stores, :instagram, :string
  end
end
