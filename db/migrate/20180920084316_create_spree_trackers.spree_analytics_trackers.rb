# This migration comes from spree_analytics_trackers (originally 20171013160337)
class CreateSpreeTrackers < SpreeExtension::Migration[4.2]
  def change
    if table_exists?(:spree_trackers)
      add_index :spree_trackers, :active unless index_exists?(:spree_trackers, :active)
      remove_column :spree_trackers, :environment if column_exists?(:spree_trackers, :environment)
      unless column_exists?(:spree_trackers, :engine)
        add_column :spree_trackers, :kind, :integer, default: 0, null: false, index: true unless column_exists?(:spree_trackers, :kind)
        rename_column :spree_trackers, :kind, :engine if column_exists?(:spree_trackers, :kind)
      end
    else
      create_table :spree_trackers do |t|
        t.string 'analytics_id'
        t.boolean 'active', default: true, index: true
        t.datetime 'created_at', null: false
        t.datetime 'updated_at', null: false
        t.integer 'engine', default: 0, null: false, index: true
      end
    end
  end
end
