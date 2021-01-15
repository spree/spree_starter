# This migration comes from spree (originally 20210112193440)
class RemoveContactEmailFromSpreeStores < ActiveRecord::Migration[6.0]
  def change
    remove_column :spree_stores, :contact_email
  end
end
