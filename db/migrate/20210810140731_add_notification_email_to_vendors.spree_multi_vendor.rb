# This migration comes from spree_multi_vendor (originally 20190322133128)
class AddNotificationEmailToVendors < SpreeExtension::Migration[4.2]
  def change
    add_column :spree_vendors, :notification_email, :string
  end
end
