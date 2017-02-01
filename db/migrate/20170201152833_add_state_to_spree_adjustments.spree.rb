# This migration comes from spree (originally 20121213162028)
class AddStateToSpreeAdjustments < ActiveRecord::Migration[4.2]
  def change
    add_column :spree_adjustments, :state, :string
    remove_column :spree_adjustments, :locked
  end
end
