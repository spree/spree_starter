# This migration comes from spree (originally 20150522181728)
class AddDeletedAtToFriendlyIdSlugs < ActiveRecord::Migration
  def change
    add_column :friendly_id_slugs, :deleted_at, :datetime
    add_index :friendly_id_slugs, :deleted_at
  end
end
