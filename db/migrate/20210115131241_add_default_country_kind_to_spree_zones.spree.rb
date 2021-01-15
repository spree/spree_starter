# This migration comes from spree (originally 20201127084048)
class AddDefaultCountryKindToSpreeZones < ActiveRecord::Migration[6.0]
  def change
    change_column_default(:spree_zones, :kind, :state)
  end
end
