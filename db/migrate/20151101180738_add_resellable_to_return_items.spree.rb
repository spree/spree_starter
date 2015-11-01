# This migration comes from spree (originally 20150122145607)
class AddResellableToReturnItems < ActiveRecord::Migration
  def change
    add_column :spree_return_items, :resellable, :boolean, default: true, null: false
  end
end
