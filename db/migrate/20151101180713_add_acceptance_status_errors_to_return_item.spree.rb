# This migration comes from spree (originally 20140730155938)
class AddAcceptanceStatusErrorsToReturnItem < ActiveRecord::Migration
  def change
    add_column :spree_return_items, :acceptance_status_errors, :text
  end
end
