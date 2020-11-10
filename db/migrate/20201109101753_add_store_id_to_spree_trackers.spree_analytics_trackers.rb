# This migration comes from spree_analytics_trackers (originally 20200721163729)
class AddStoreIdToSpreeTrackers < ActiveRecord::Migration[6.0]
  def change
    add_column :spree_trackers, :store_id, :integer
    add_index :spree_trackers, :store_id

    Spree::Tracker.reset_column_information

    default_store = Spree::Store.default
    Spree::Tracker.all.each do |tracker|
      tracker.store = default_store
      tracker.save
    end
  end
end
