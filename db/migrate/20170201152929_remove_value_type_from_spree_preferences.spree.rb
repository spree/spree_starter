# This migration comes from spree (originally 20140106065820)
class RemoveValueTypeFromSpreePreferences < ActiveRecord::Migration[4.2]
  def up
    remove_column :spree_preferences, :value_type
  end
  def down
    raise ActiveRecord::IrreversableMigration
  end
end
